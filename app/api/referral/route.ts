import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { gpName, medicalCouncilId, patientDetails, clinicalNotes } = await request.json();

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
        from: 'Secure Referral <onboarding@resend.dev>',
        to: 'elgedawyahmed33@gmail.com',
        subject: `SECURE REFERRAL: ${gpName}`,
        html: `
          <h3>New Secure Clinical Referral</h3>
          <p><strong>GP Name:</strong> ${gpName}</p>
          <p><strong>Medical Council ID:</strong> ${medicalCouncilId}</p>
          <p><strong>Patient Details:</strong> ${patientDetails}</p>
          <p><strong>Clinical Notes:</strong></p>
          <p>${clinicalNotes}</p>
          <hr />
          <p><small>This referral was submitted via the secure portal and is intended for clinical review by Dr. Hassanin.</small></p>
        `,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const error = await response.json();
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
