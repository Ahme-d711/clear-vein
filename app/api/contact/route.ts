import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'elgedawyahmed33@gmail.com',
        subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
        html: `
          <h3>New Message from Clear Vein Clinic Contact Form</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const error = await response.json();
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
