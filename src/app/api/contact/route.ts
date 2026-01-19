import { NextResponse } from 'next/server'
import FormData from 'form-data'
import Mailgun from 'mailgun.js'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    // 1️⃣ Read data from frontend
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      )
    }

    // 2️⃣ Setup Mailgun
    const mailgun = new Mailgun(FormData)
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY!, // env var
    })

    // 3️⃣ Send email
    const data = await mg.messages.create(
      'sandbox2f3eef6bb6154a4bbe94e33269595c64.mailgun.org',
      {
        from: `Portfolio Contact Form <postmaster@sandbox2f3eef6bb6154a4bbe94e33269595c64.mailgun.org>`,
        to: ['robertandreib.up@gmail.com'],
        subject: `New message from ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
        replyTo: email, // 👈 allows direct reply
      }
    )

    console.log('Mailgun response:', data)

    // 4️⃣ Respond to frontend
    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error: unknown) {
    console.error('Mailgun error:', error)

    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
