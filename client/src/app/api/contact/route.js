import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    console.log("Received form data:", { name, email, phone, message });

    if (!name || !email || !phone || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // --------------------------------------------
    // ✅ SEND WHATSAPP TEXT USING ULTRAMSG
    // --------------------------------------------

    const formattedPhone = "91" + phone.replace(/\D/g, ""); // remove special chars + add country code

    const userTextMessage = `
Hi ${name},

Thank you for reaching out to *Shree Mahalaxmmi Enterprises*! We’re glad to connect with you.

We have shared the brochure and our services details with you.  
Please take a look, and feel free to contact us for any assistance or to schedule a site visit.

We're here to help you find the right property.

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

    console.log("WhatsApp text sent");

    // --------------------------------------------
    // ✅ SEND WHATSAPP IMAGE (Brochure)
    // --------------------------------------------

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

    console.log("WhatsApp image sent");

    // --------------------------------------------
    // 📩 EXISTING EMAIL LOGIC (unchanged)
    // --------------------------------------------

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: `" Shree Mahalaxmi Enterprises" <${process.env.EMAIL_USER}>`,
      to: "info@innovoxsoftwaresolutions.co.in",
      subject: "📩 New Inquiry – Shree Mahalaxmi Enterprises",
      html: `
      <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          <div style="text-align:center; margin-bottom:20px;">
            <h1 style="color:#FF7A00; margin:0; font-size:28px;">Mahalaxmi Enterprises</h1>
            <p style="color:#555; margin-top:5px; font-size:14px;">Real Estate • Consultation • Property Deals</p>
          </div>

          <hr style="border:none; height:2px; background:#FF7A00; width:80px; margin:20px auto; border-radius:4px;" />

          <h2 style="color:#333; font-size:22px; margin-bottom:10px;">📨 New Contact Form Inquiry</h2>

          <p style="color:#555; font-size:15px;">A new user has submitted a request:</p>

          <div style="background:#fff7f0; padding:20px; border-left:4px solid #FF7A00; border-radius:8px; margin-top:18px;">
            <p><strong style="color:#FF7A00;">👤 Name:</strong> ${name}</p>
            <p><strong style="color:#FF7A00;">📧 Email:</strong> ${email}</p>
            <p><strong style="color:#FF7A00;">📞 Phone:</strong> ${phone}</p>
            <p><strong style="color:#FF7A00;">💬 Message:</strong><br/>${message}</p>
          </div>

          <p style="margin-top:30px; color:#444; font-size:14px; text-align:center;">
            Please contact the client as soon as possible.
          </p>

          <div style="margin-top:25px; text-align:center;">
            <p style="color:#888; font-size:12px;">
              © 2025 Mahalaxmi Enterprises • All Rights Reserved
            </p>
          </div>

        </div>
      </div>
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
