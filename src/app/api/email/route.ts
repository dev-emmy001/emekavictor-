import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Very small in-memory rate limit. Works for simple deployments; replace with a proper store in production.
const RATE_LIMIT_MAP = new Map<string, number>();
const RATE_LIMIT_WINDOW = 10_000; // milliseconds

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const last = RATE_LIMIT_MAP.get(ip) || 0;
    const now = Date.now();
    if (now - last < RATE_LIMIT_WINDOW) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    RATE_LIMIT_MAP.set(ip, now);

    const payload = await request.json();
    const name = String(payload.name || '').trim();
    const email = String(payload.email || '').trim();
    const message = String(payload.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailHtml = `
      <div style="font-family: sans-serif; font-size: 16px; color: #333;">
        <h2>New Project Inquiry</h2>
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p style="margin: 0;"><strong>Message:</strong></p>
          <p style="margin-top: 5px;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    try {
      const response = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [process.env.MY_EMAIL || 'victoremeka.dev@outlook.com'],
        subject: `New Inquiry from ${name}`,
        html: emailHtml,
      });

      return NextResponse.json({ success: true, response });
    } catch (sendErr) {
      // Avoid leaking provider internal errors to clients
      console.error('Resend send error:', sendErr);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
    }
  } catch (error) {
    console.error('Email route error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}