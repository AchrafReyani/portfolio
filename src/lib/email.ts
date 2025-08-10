import nodemailer from "nodemailer";

export async function sendEmail({ name, email, subject, message }: { name: string; email: string; subject: string; message: string }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Compose the email content including sender's email
  const mailOptions = {
    from: process.env.SMTP_USER, // Your Gmail address
    to: process.env.MY_EMAIL, // Your receiving email (probably same as SMTP_USER)
    subject: `[Portfolio Contact] ${subject || "No subject"}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
