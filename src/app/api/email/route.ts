import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Create the HTML string directly (No components needed)
    const emailHtml = `
      <div style="font-family: sans-serif; font-size: 16px; color: #333;">
        <h2>New Project Inquiry</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p style="margin: 0;"><strong>Message:</strong></p>
          <p style="margin-top: 5px;">${message}</p>
        </div>
      </div>
    `;

    // 3. Send the email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update if you verify your domain
      to: [process.env.MY_EMAIL || 'victoremeka.dev@outlook.com'],
      subject: `New Inquiry from ${name}`,
      html: emailHtml, // Use 'html' instead of 'react'
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}