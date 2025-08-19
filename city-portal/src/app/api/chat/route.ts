import { NextRequest } from "next/server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const system =
    "You are the Unified City Services assistant. Answer concisely and help residents navigate city services (bills, waste, transport, health, permits). If an action is requested that requires real data, reply with clear next steps and a friendly tone.";

  const response = await streamText({
    model: openai("gpt-4o-mini"),
    system,
    messages: body?.messages ?? [],
  });

  return response.toTextStreamResponse();
}

