import nodemailer from 'nodemailer';

export async function sendEmail({
  name,
  email,
  subject,
  message,
  attachment
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
  attachment?: {filename: string; content: Buffer};
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.NEXT_PUBLIC_MY_EMAIL,
    subject: `[Portfolio Contact] ${subject || 'No subject'}`,
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
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
    attachments: attachment ? [attachment] : []
  };

  await transporter.sendMail(mailOptions);
}
