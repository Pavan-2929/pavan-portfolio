"use client";

import React, { useEffect, useRef, useState } from "react";
import { getChatResponse } from "./utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontalIcon, Loader } from "lucide-react";
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
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    const botResponse = await getChatResponse(input);
    const botMessage: Message = {
      role: "bot",
      text: botResponse,
    };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
    setInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <main className="bg-background rounded-xl border max-w-3xl my-12 mx-auto">
      <header className="py-4 text-center space-y-0.5 border border-b">
        <h1 className="text-bold text-2xl">Pavan&apos;s chatbot</h1>
        <p className="text-muted-foreground">
          Ask me anything regarding Pavan Kapadiya
        </p>
      </header>
      <div
        ref={scrollRef}
        className="max-h-[400px] overflow-y-auto space-y-4 pt-4 pb-8 min-h-[400px] px-2"
      >
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground py-4">
            No messages yet. Start a conversation!
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex my-4",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                message.role === "user"
                  ? "bg-accent/75 text-muted-foreground"
                  : "bg-accent text-foreground/80",
                "px-3 py-2 rounded-md max-w-[75%] text-[15px] leading-7 font-medium font-serif"
              )}
            >
              {message.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center justify-center pt-12 space-x-2">
            <Loader className="animate-spin text-primary" />
            <span className="text-muted-foreground">Bot is typing...</span>
          </div>
        )}
        {messages.length === 1 && (
          <div className="flex justify-center items-center space-x-2 pt-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 text-muted-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 1C8.134 1 5 4.134 5 8v4H4a1 1 0 00-1 1v6a1 1 0 001 1h2v2a1 1 0 001 1h10a1 1 0 001-1v-2h2a1 1 0 001-1v-6a1 1 0 00-1-1h-1V8c0-3.866-3.134-7-7-7zm-1 7h2v2h-2V8zm0 4h2v6h-2v-6z"
              />
            </svg>
            <span className="text-muted-foreground/50 text-lg">
              I&apos;m ready to help! Type a message to start.
            </span>
          </div>
        )}
      </div>
      <form
        className="relative mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <Input
          className="pe-10 bg-secondary h-12"
          value={input}
          placeholder="Enter your text here..."
          onChange={handleInputChange}
          type="text"
        />
        <Button
          variant="ghost"
          className="absolute right-0 top-1/2 -translate-y-1/2 transform"
        >
          <SendHorizontalIcon className="text-foreground size-5" />
        </Button>
      </form>
    </main>
  );
};

export default ChatBotPage;
