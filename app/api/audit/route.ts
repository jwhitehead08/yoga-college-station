import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, role, sport, rosterSize, timeline, goals } =
    await req.json();

    // update with real 'to' address
  const { error } = await resend.emails.send({
    from: "Neon Fox <onboarding@resend.dev>",
    to: "neonfoxmethod@gmail.com",
    replyTo: email,
    subject: `Team Audit Request — ${name}`,
    text: [
      `Name:        ${name}`,
      `Email:       ${email}`,
      `Role:        ${role || "—"}`,
      `Sport:       ${sport || "—"}`,
      `Roster Size: ${rosterSize || "—"}`,
      `Timeline:    ${timeline || "—"}`,
      ``,
      `Goals / Context:`,
      goals || "—",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
