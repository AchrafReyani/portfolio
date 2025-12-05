import {POST} from '@/app/api/contact/route';
import {sendEmail} from '@/lib/email';
import {NextRequest} from 'next/server';

// Tell Jest to use our mock instead of the real email.ts
jest.mock('@/lib/email');

describe('POST /api/contact', () => {
  it('should return 400 if required fields are missing', async () => {
    const formData = new FormData();
    formData.append('name', 'Sousuke Aizen');

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: formData as any
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.message).toBe('Missing required fields');
  });

  it('should send email when all fields are valid', async () => {
    const formData = new FormData();
    formData.append('name', 'Sousuke Aizen');
    formData.append('email', 'aizen@seireitei.com');
    formData.append('subject', 'Welcome');
    formData.append('message', 'to my soul society');

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: formData as any
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.message).toBe('Email sent successfully!');
    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Sousuke Aizen',
        email: 'aizen@seireitei.com',
        subject: 'Welcome',
        message: 'to my soul society'
      })
    );
  });

  it('should send email with valid attachment', async () => {
    const fileContent = new Blob(['Hello World'], {type: 'text/plain'});
    const file = new File([fileContent], 'hello.txt', {type: 'text/plain'});

    const formData = new FormData();
    formData.append('name', 'Sousuke Aizen');
    formData.append('email', 'aizen@seireitei.com');
    formData.append('subject', 'With Attachment');
    formData.append('message', 'Check this out');
    formData.append('attachment', file);

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: formData as any
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.message).toBe('Email sent successfully!');
    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        attachment: expect.objectContaining({
          filename: 'hello.txt',
          content: expect.any(Buffer)
        })
      })
    );
  });

  it('should return 400 if attachment too large', async () => {
    // 6 MB file (over the 5MB limit)
    const bigContent = new Uint8Array(6 * 1024 * 1024);
    const file = new File([bigContent], 'big.pdf', {type: 'application/pdf'});

    const formData = new FormData();
    formData.append('name', 'Sousuke Aizen');
    formData.append('email', 'aizen@seireitei.com');
    formData.append('message', 'Big file attached');
    formData.append('attachment', file);

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: formData as any
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.message).toBe('Attachment too large (max 5MB).');
  });
});
