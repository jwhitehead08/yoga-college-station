import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, company, teamSize, format, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Neon Fox <onboarding@resend.dev>",
    to: "jwhitehead08@gmail.com",
    replyTo: email,
    subject: `Corporate Inquiry — ${company} (${name})`,
    text: [
      `Name:      ${name}`,
      `Email:     ${email}`,
      `Company:   ${company}`,
      `Team Size: ${teamSize || "—"}`,
      `Format:    ${format || "—"}`,
      ``,
      `Message:`,
      message || "—",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
