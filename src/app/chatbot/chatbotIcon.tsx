"use client";

import { ArrowLeft, BotMessageSquareIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const ChatBotIcon = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" ? (
        <Link
          href="/chatbot"
          className="fixed bottom-5 right-5 md:w-14 md:h-14 h-10 w-10 bg-accent rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:scale-110 transform transition-all"
        >
          <BotMessageSquareIcon />
        </Link>
      ) : (
        <Link
          href="/"
          className="fixed bottom-5 right-5 md:w-14 md:h-14 h-10 w-10 bg-accent rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:scale-110 transform transition-all"
        >
          <ArrowLeft />
        </Link>
      )}
    </>
  );
};

export default ChatBotIcon;
