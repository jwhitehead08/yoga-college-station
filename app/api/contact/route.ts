import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, segment, location, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Neon Fox <onboarding@resend.dev>",
    to: "neonfoxmethod@gmail.com",
    replyTo: email,
    subject: `New Inquiry — ${name} (${segment || "General"})`,
    text: [
      `Name:      ${name}`,
      `Email:     ${email}`,
      `Interest:  ${segment || "—"}`,
      `Location:  ${location || "—"}`,
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
