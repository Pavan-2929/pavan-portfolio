"use client";

import React, { useEffect, useRef, useState } from "react";
import { getChatResponse } from "./utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontalIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "bot" | "user";
  text: string;
}

const initialBotMessage: Message = {
  role: "bot",
  text: "Hello! How can I assist you regarding Pavan today? Feel free to ask anything!",
};

const ChatBotPage = () => {
  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();

    if (!trimmed || loading) return;

    const userMessage: Message = {
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const botResponse = await getChatResponse(trimmed);

      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, I ran into an issue generating a response. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <main className="mx-auto my-10 w-full max-w-3xl md:my-6">
      <section className="overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm">
        {/* Header */}
        <header className="border-b border-border/70 px-5 py-5 text-center md:py-6">
          <h1 className="font-serif text-2xl font-semibold tracking-tight md:text-3xl">
            Pavan&apos;s Chatbot
          </h1>

          <p className="mt-1.5 text-sm text-muted-foreground">
            Ask me anything about Pavan Kapadiya
          </p>
        </header>

        {/* Messages */}
        <div
          ref={scrollRef}
          aria-live="polite"
          className="flex min-h-[400px] max-h-[480px] flex-col gap-5 overflow-y-auto px-4 py-6 md:px-6 md:py-7"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "message-enter flex w-full",
                message.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-7 transition-colors md:max-w-[75%] md:text-[15px]",
                  message.role === "user"
                    ? "rounded-br-sm bg-secondary text-foreground"
                    : "rounded-bl-sm border border-border/60 bg-card text-foreground/90",
                )}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="message-enter flex items-center gap-2 py-1">
              <div className="flex items-center gap-1.5 rounded-xl border border-border/60 bg-card px-4 py-3">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}

          {/* Welcome state */}
          {messages.length === 1 && !loading && (
            <div className="welcome-enter flex flex-col items-center justify-center pb-8 pt-12 text-center md:pt-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mb-5 size-12 text-muted-foreground/50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.3"
                  d="M12 1C8.134 1 5 4.134 5 8v4H4a1 1 0 00-1 1v6a1 1 0 001 1h2v2a1 1 0 001 1h10a1 1 0 001-1v-2h2a1 1 0 001-1v-6a1 1 0 00-1-1h-1V8c0-3.866-3.134-7-7-7zm-1 7h2v2h-2V8zm0 4h2v6h-2v-6z"
                />
              </svg>

              <p className="font-serif text-xl font-medium tracking-tight">
                I&apos;m ready to help!
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Type a message below to start a conversation.
              </p>
            </div>
          )}
        </div>

        {/* Input */}
        <footer className="border-t border-border/70 bg-card/40 p-4 md:p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2 rounded-xl border border-border bg-background p-1.5 transition-all duration-200 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10"
          >
            <Input
              ref={inputRef}
              value={input}
              disabled={loading}
              placeholder="Enter your message..."
              aria-label="Enter your message"
              onChange={(e) => setInput(e.target.value)}
              className="h-10 border-0 bg-transparent px-3 text-sm shadow-none focus-visible:ring-0"
            />

            <Button
              type="submit"
              size="icon"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="size-10 shrink-0 rounded-lg transition-all duration-200"
            >
              <SendHorizontalIcon className="size-4" />
            </Button>
          </form>

          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Responses are based on information available on this portfolio.
          </p>
        </footer>
      </section>

      <style jsx>{`
        .message-enter {
          animation: message-in 300ms ease-out both;
        }

        .welcome-enter {
          animation: welcome-in 500ms ease-out both;
        }

        .typing-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: hsl(var(--muted-foreground));
          animation: typing 1.2s ease-in-out infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 150ms;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 300ms;
        }

        @keyframes message-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes welcome-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          30% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .message-enter,
          .welcome-enter,
          .typing-dot {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
};

export default ChatBotPage;
