import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide your name, email, and message.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not defined.');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service configuration error. Please contact directly via vishnuej6@gmail.com.',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.RESEND_TO_EMAIL || 'vishnuej6@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: subject ? `Portfolio Inquiry: ${subject}` : `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #0f172a; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #06b6d4, #6366f1); padding: 16px 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 700;">
              📬 New Message from Portfolio
            </h2>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 90px; font-weight: 600;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #0284c7; font-size: 14px;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${subject || 'No subject provided'}</td>
            </tr>
          </table>

          <div style="margin-top: 16px;">
            <div style="font-size: 13px; font-weight: 600; color: #475569; margin-bottom: 6px;">Message Content:</div>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #1e293b; white-space: pre-wrap;">
${message}
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0 12px 0;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center; margin: 0;">
            Sent directly from <a href="https://github.com/vishnu-ej/portfolio" style="color: #64748b; text-decoration: underline;">Vishnu E J's Portfolio</a>
          </p>
        </div>
      `,
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
