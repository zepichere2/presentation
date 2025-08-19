import { NextRequest } from "next/server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { groq } from "@ai-sdk/groq";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const system =
    "You are the Unified City Services assistant. Answer concisely and help residents navigate city services (bills, waste, transport, health, permits). If an action is requested that requires real data, reply with clear next steps and a friendly tone.";

  const model = process.env.GROQ_API_KEY
    ? groq("llama-3.1-70b-versatile")
    : openai("gpt-4o-mini");

  const response = await streamText({
    model,
    system,
    messages: body?.messages ?? [],
  });

  return response.toTextStreamResponse();
}

