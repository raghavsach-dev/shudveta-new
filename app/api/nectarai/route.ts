import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NECTARAI_SYSTEM_PROMPT } from "@/lib/nectarAiPrompt";

export const runtime = 'edge';

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const DEFAULT_MODEL = process.env.GEMINI_MODEL ?? "gemini-1.5-flash-latest";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  let body: { messages?: ChatMessage[] };

  try {
    body = await req.json();
  } catch (_error) {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const messages = body.messages ?? [];

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "Request must include a non-empty messages array." },
      { status: 400 }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: DEFAULT_MODEL,
      systemInstruction: NECTARAI_SYSTEM_PROMPT
    });

    const response = await model.generateContent({
      contents: messages.map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content }]
      }))
    });

    const text = response.response.text();

    if (!text) {
      return NextResponse.json(
        { error: "The model returned an empty response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("NectarAI route error:", error);
    return NextResponse.json(
      { error: "Failed to generate a response. Please try again later." },
      { status: 500 }
    );
  }
}
