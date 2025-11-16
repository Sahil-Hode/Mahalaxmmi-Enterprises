import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    console.log("Received form data:", { name, email, phone, message });

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure transporter - CORRECTED: Using createTransport instead of createTransporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify credentials
    await transporter.verify();

    const mailOptions = {
      from: `" Shree Mahalaxmi Enterprises" <${process.env.EMAIL_USER}>`,
      to: "sarthakmore0803@gmail.com",
      subject: "📩 New Inquiry – Shree Mahalaxmi Enterprises",
      html: `
      <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">

          <!-- Header -->
          <div style="text-align:center; margin-bottom:20px;">
            <h1 style="color:#FF7A00; margin:0; font-size:28px;">Mahalaxmi Enterprises</h1>
            <p style="color:#555; margin-top:5px; font-size:14px;">Real Estate • Consultation • Property Deals</p>
          </div>

          <!-- Divider -->
          <hr style="border:none; height:2px; background:#FF7A00; width:80px; margin:20px auto; border-radius:4px;" />

          <!-- Title -->
          <h2 style="color:#333; font-size:22px; margin-bottom:10px;">📨 New Contact Form Inquiry</h2>

          <!-- Message Info -->
          <p style="color:#555; font-size:15px;">A new user has submitted a request. Below are the details:</p>

          <!-- Content Box -->
          <div style="background:#fff7f0; padding:20px; border-left:4px solid #FF7A00; border-radius:8px; margin-top:18px;">
            <p style="margin:8px 0; font-size:15px;">
              <strong style="color:#FF7A00;">👤 Name:</strong> ${name}
            </p>
            <p style="margin:8px 0; font-size:15px;">
              <strong style="color:#FF7A00;">📧 Email:</strong> ${email}
            </p>
            <p style="margin:8px 0; font-size:15px;">
              <strong style="color:#FF7A00;">📞 Phone:</strong> ${phone}
            </p>
            <p style="margin:8px 0; font-size:15px; line-height:1.6;">
              <strong style="color:#FF7A00;">💬 Message:</strong><br/>
              ${message}
            </p>
          </div>

          <!-- Footer Message -->
          <p style="margin-top:30px; color:#444; font-size:14px; text-align:center;">
            Please contact the client as soon as possible.<br />
            Thank you for using the Mahalaxmi Enterprises website.
          </p>

          <!-- Footer -->
          <div style="margin-top:25px; text-align:center;">
            <p style="color:#888; font-size:12px;">
              © 2025 Mahalaxmi Enterprises • All Rights Reserved<br />
              This email was automatically generated from the website contact form.
            </p>
          </div>

        </div>
      </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    
    return Response.json(
      { 
        success: false, 
        message: "Failed to send email",
        error: error.message 
      },
      { status: 500 }
    );
  }
}