import {NextRequest, NextResponse} from 'next/server';
import {sendEmail} from '../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject =
      (formData.get('subject') as string) || 'New Contact Form Message';
    const message = formData.get('message') as string;
    const file = formData.get('attachment') as File | null;

    if (!name || !email || !message) {
      return NextResponse.json(
        {message: 'Missing required fields'},
        {status: 400}
      );
    }

    let attachment;
    if (file && file.size > 0) {
      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5 MB
      if (file.size > maxSize) {
        return NextResponse.json(
          {message: 'Attachment too large (max 5MB).'},
          {status: 400}
        );
      }

      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
        'text/plain'
      ];
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          {message: 'Unsupported file type.'},
          {status: 400}
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      attachment = {
        filename: file.name,
        content: buffer
      };
    }

    await sendEmail({
      name,
      email,
      subject,
      message,
      attachment
    });

    return NextResponse.json({message: 'Email sent successfully!'});
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({message: 'Error sending email'}, {status: 500});
  }
}
