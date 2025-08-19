"use client";
import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m1",
      role: "assistant",
      content:
        "Hi! I’m your City Services assistant. Ask me about bills, waste pickup, transport times, health appointments, or permits.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          ...messages.map(({ role, content }) => ({ role, content })),
          { role: "user", content: userMessage.content },
        ],
      }),
    });

    if (!res.body) {
      setIsSending(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
    };
    setMessages((prev) => [...prev, assistantMessage]);

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      assistantMessage = {
        ...assistantMessage,
        content: assistantMessage.content + chunk,
      };
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = assistantMessage;
        return copy;
      });
    }
    setIsSending(false);
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 rounded-full bg-[#1E3A8A] text-white h-14 w-14 shadow-lg hover:bg-[#173177] focus:outline-none"
        aria-label="Open chat"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] max-w-md h-[60vh] bg-white dark:bg-[#0b0b0b] border border-black/10 dark:border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-black/10 dark:border-white/15 flex items-center justify-between">
            <div className="font-medium">City Services Assistant</div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] bg-[#1E3A8A] text-white rounded-2xl rounded-br-sm px-3 py-2"
                    : "mr-auto max-w-[85%] bg-gray-100 dark:bg-white/5 rounded-2xl rounded-bl-sm px-3 py-2"
                }
              >
                {m.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="p-3 border-t border-black/10 dark:border-white/15 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about bills, permits, waste pickup..."
              className="flex-1 rounded-lg border border-black/10 dark:border-white/15 bg-white dark:bg-transparent px-3 py-2 outline-none"
            />
            <button
              disabled={isSending}
              className="rounded-lg bg-[#14B8A6] text-white px-4 py-2 disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

