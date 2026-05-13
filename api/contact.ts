import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Po'Boy Express <hello@po-boyexpress.com>",
      to: ['jimalex16@yahoo.com'],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 0; border-radius: 12px; overflow: hidden;">
          <div style="background: #c0392b; padding: 32px 40px;">
            <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px; text-transform: uppercase;">New Contact Message</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">Po'Boy Express Website</p>
          </div>
          <div style="padding: 40px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-weight: bold; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #c0392b; font-size: 15px;"><a href="mailto:${email}" style="color: #c0392b; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;">${phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 16px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
                <td style="padding: 16px 0; color: #333; font-size: 15px; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
          <div style="background: #111; padding: 20px 40px; text-align: center;">
            <p style="color: #555; margin: 0; font-size: 12px;">This message was sent from the contact form at <strong style="color: #ffce04;">poboyexpress.com</strong></p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return res.status(500).json({ error: 'Failed to send email.', detail: error });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
