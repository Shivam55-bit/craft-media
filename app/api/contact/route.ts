import { NextRequest, NextResponse } from "next/server";
import { db } from "@/src/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Save to database
    const stmt = db.prepare(
      `INSERT INTO ContactSubmission (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)`
    );
    const result = stmt.run(
      String(name).slice(0, 200),
      String(email).slice(0, 200),
      phone ? String(phone).slice(0, 20) : null,
      service ? String(service).slice(0, 200) : null,
      String(message).slice(0, 5000)
    );

    // Send email notification (non-blocking)
    sendEmailNotification({ name, email, phone, service, message }).catch(
      (err) => console.error("Email send failed:", err)
    );

    return NextResponse.json(
      { success: true, id: result.lastInsertRowid },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // Admin: get all submissions (protected by auth header)
  const authHeader = req.headers.get("authorization");
  const adminToken = process.env.ADMIN_SECRET;

  if (!adminToken || authHeader !== `Bearer ${adminToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const submissions = db
    .prepare(`SELECT * FROM ContactSubmission ORDER BY createdAt DESC`)
    .all();

  return NextResponse.json(submissions);
}

async function sendEmailNotification(data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyEmail = process.env.NOTIFY_EMAIL || "craftmediahub@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log("SMTP not configured, skipping email notification");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort) || 587,
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"Craft Media Hub Website" <${smtpUser}>`,
    to: notifyEmail,
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone || "N/A"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.service || "N/A"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.message}</td></tr>
      </table>
    `,
  });
}
