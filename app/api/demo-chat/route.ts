import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages, systemPrompt } = await req.json();
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: systemPrompt,
        messages: messages.map((m: {role: string; content: string}) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });
    const data = await response.json();
    const reply = data.content?.[0]?.text || "Sorry, I could not process that. Please try again.";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "Sorry, something went wrong. Please try again." }, { status: 500 });
  }
}
