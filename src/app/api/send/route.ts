import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        {
          success: false,
          fallbackRequired: true,
          error: 'Resend API key is not configured in .env.local yet.',
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.RESEND_TO_EMAIL || 'vishnuej6@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: subject ? `Portfolio Inquiry: ${subject}` : `New Message from ${name} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0891b2; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
            📬 New Portfolio Message
          </h2>
          <p style="margin: 6px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 6px 0;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
          <p style="margin: 6px 0;"><strong>Subject:</strong> ${subject || 'No subject specified'}</p>
          
          <div style="margin-top: 20px;">
            <strong style="color: #334155;">Message Content:</strong>
            <div style="margin-top: 8px; white-space: pre-wrap; background-color: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #334155; font-size: 14px;">
${message}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0 12px 0;" />
          <p style="font-size: 11px; color: #94a3b8; margin: 0;">
            Sent directly from <a href="https://github.com/vishnu-ej/portfolio" style="color: #64748b; text-decoration: underline;">Vishnu E J's Portfolio</a>
          </p>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return NextResponse.json(
        { success: false, error: emailResponse.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: emailResponse.data });
  } catch (error: unknown) {
    console.error('Unexpected error in /api/send:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message.';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
