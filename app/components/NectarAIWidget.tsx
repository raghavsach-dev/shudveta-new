"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import FAB from "./FAB";
import { ChatMessage, NectarAIChat } from "./NectarAIChat";

function createId(prefix: string) {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function NectarAIWidget() {
  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        id: "nectarai-intro",
        role: "assistant",
        content:
          "Hey there! I'm NectarAI, the ever-cheerful concierge from Shudveta IT Solutions. Tell me what you’re dreaming up and I’ll show you how Dhruvi Mittal’s design genius and Raghav Sachdev’s engineering wizardry can make it real.",
      },
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesRef = useRef<ChatMessage[]>(initialMessages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSendMessage = useCallback(async (content: string) => {
    const trimmed = content.trim();

    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createId("user"),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => {
      const updated = [...prev, userMessage];
      messagesRef.current = updated;
      return updated;
    });

    setLoading(true);
    setError(null);

    const payload = messagesRef.current.map(({ role, content: messageContent }) => ({
      role,
      content: messageContent,
    }));

    try {
      const response = await fetch("/api/nectarai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: payload }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Unexpected server response.");
      }

      const assistantMessage: ChatMessage = {
        id: createId("assistant"),
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => {
        const updated = [...prev, assistantMessage];
        messagesRef.current = updated;
        return updated;
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(errorMessage);
      setMessages((prev) => {
        const updated = [
          ...prev,
          {
            id: createId("assistant-error"),
            role: "assistant" as const,
            content:
              "I hit a little snag reaching the Gemini API. Could you give me a moment and try again? Dhruvi and Raghav are already polishing the circuits!",
          },
        ];
        messagesRef.current = updated;
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAddMessage = useCallback((content: string, role: "user" | "assistant" = "assistant") => {
    const message: ChatMessage = {
      id: createId(role),
      role,
      content,
    };

    setMessages((prev) => {
      const updated = [...prev, message];
      messagesRef.current = updated;
      return updated;
    });
  }, []);

  return (
    <>
      <motion.div className="fixed inset-0 pointer-events-none z-[55]" aria-hidden />
      <FAB onClick={toggleChat} isOpen={isOpen} />
      <NectarAIChat
        isOpen={isOpen}
        messages={messages}
        loading={loading}
        error={error}
        onClose={() => setIsOpen(false)}
        onSendMessage={handleSendMessage}
        onAddMessage={handleAddMessage}
      />
    </>
  );
}
