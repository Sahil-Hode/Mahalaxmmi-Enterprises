import nodemailer from "nodemailer";

/* ================= RATE LIMIT STORE ================= */

// key → { count, firstRequestTime }
const rateLimitStore = new Map();

const MAX_REQUESTS = 5;
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

function checkRateLimit(key) {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record) {
    rateLimitStore.set(key, { count: 1, firstRequestTime: now });
    return true;
  }

  if (now - record.firstRequestTime > WINDOW_MS) {
    // Reset window
    rateLimitStore.set(key, { count: 1, firstRequestTime: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count += 1;
  return true;
}

/* ================= API HANDLER ================= */

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    /* ================= RATE LIMIT CHECK ================= */

    const emailKey = `email:${email.toLowerCase()}`;
    const phoneKey = `phone:${phone.replace(/\D/g, "")}`;

    if (!checkRateLimit(emailKey) || !checkRateLimit(phoneKey)) {
      return Response.json(
        {
          success: false,
          message:
            "You have reached the maximum limit (5 requests in 24 hours). Please try again later.",
        },
        { status: 429 }
      );
    }

    /* ================= WHATSAPP TEXT ================= */

    const formattedPhone = "91" + phone.replace(/\D/g, "");

    const userTextMessage = `
Hi ${name},

Thank you for reaching out to *Shree Mahalaxmmi Enterprises*! We’re glad to connect with you.

We have shared the brochure and our services details with you.
Please take a look, and feel free to contact us for any assistance or to schedule a site visit.

Regards,
Shree Mahalaxmmi Enterprises 🏡
`;

    await fetch(
      `https://api.ultramsg.com/${process.env.ULTRA_INSTANCE_ID}/messages/chat`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          token: process.env.ULTRA_TOKEN,
          to: formattedPhone,
          body: userTextMessage,
        }),
      }
    );

    /* ================= WHATSAPP IMAGE ================= */

    const brochureUrl =
      "https://drive.google.com/uc?export=view&id=1EdVOUWn4tfdZ_7yjJiwziuoa5zqwsQtR";

    await fetch(
      `https://api.ultramsg.com/${process.env.ULTRA_INSTANCE_ID}/messages/image`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          token: process.env.ULTRA_TOKEN,
          to: formattedPhone,
          image: brochureUrl,
          caption: "Here is the brochure you requested.",
        }),
      }
    );

    /* ================= EMAIL ================= */

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Shree Mahalaxmi Enterprises" <${process.env.EMAIL_USER}>`,
      to: "sarthakmore0803@gmail.com",
      subject: "📩 New Inquiry – Shree Mahalaxmi Enterprises",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Email + WhatsApp sent successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { success: false, message: "Failed", error: error.message },
      { status: 500 }
    );
  }
}
