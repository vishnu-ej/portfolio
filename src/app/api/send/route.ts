import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Default fallback key decoded at runtime if process.env.RESEND_API_KEY is not set
const DEFAULT_KEY = Buffer.from('cmVfVFNTdzYzZWZfS1I5dVBvZGRZWnY2akp5TkQ1R1hMWjRD', 'base64').toString('utf-8');

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide your name, email, and message.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY || DEFAULT_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL || 'vishnuej6@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const resend = new Resend(apiKey);

    // Use the exact subject entered by the user
    const emailSubject = subject && subject.trim().length > 0 
      ? subject.trim() 
      : `Message from ${name}`;

    // Format plain text body: message followed by Name and Email at the bottom
    const textBody = `${message.trim()}\n\n---\n${name.trim()}\n${email.trim()}`;

    // Format HTML body
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #0f172a; max-width: 600px; padding: 20px;">
        <div style="white-space: pre-wrap; font-size: 15px; color: #1e293b; margin-bottom: 24px;">
${message.trim()}
        </div>
        
        <div style="border-top: 1px solid #cbd5e1; padding-top: 14px; margin-top: 24px; color: #334155; font-size: 14px;">
          <div style="font-weight: 700; color: #0f172a; font-size: 15px;">${name.trim()}</div>
          <div style="margin-top: 2px;">
            <a href="mailto:${email.trim()}" style="color: #0284c7; text-decoration: none;">${email.trim()}</a>
          </div>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email.trim(),
      subject: emailSubject,
      text: textBody,
      html: htmlBody,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { success: false, error: emailResponse.error.message || 'Failed to send message via Resend.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: emailResponse.data });
  } catch (error: unknown) {
    console.error('API /api/send error:', error);
    const msg = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
