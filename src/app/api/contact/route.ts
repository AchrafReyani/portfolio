import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    await sendEmail({
      name,
      email,
      subject: subject || 'New Contact Form Message',
      message,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { message: 'Error sending email' },
      { status: 500 }
    );
  }
}
