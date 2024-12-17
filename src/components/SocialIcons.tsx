import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="text-muted-foreground flex space-x-6">
      <Link
        href="www.linkedin.com/in/pavankapadiya"
        className="hover:text-foreground transition-colors duration-300"
        target="_blank"
      >
        <Linkedin className="size-[22px]" />
      </Link>
      <Link
        href="https://github.com/Pavan-2929"
        className="hover:text-foreground transition-colors duration-300"
        target="_blank"
      >
        <Github className="size-[22px]" />
      </Link>
      <Link
        href="mailto:kapadiyapavan3218@gmail.com"
        className="hover:text-foreground transition-colors duration-300"
        target="_blank"
      >
        <Mail className="size-[22px]" />
      </Link>
    </div>
  );
};

export default SocialIcons;
