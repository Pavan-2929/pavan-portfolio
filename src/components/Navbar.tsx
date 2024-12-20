"use client"

import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const Navbar = () => {

  const pathName = usePathname()
  return (
    <div className="flex items-center justify-between py-6 sticky">
      <div className="space-x-4 md:space-x-8 lg:space-x-12 font-medium text-muted-foreground tracking-wide">
        <Link href="/" className={cn("hover:text-foreground", pathName === "/" ? "text-foreground/90" : "")}
        >
          Home
        </Link>
        <Link className={cn("hover:text-foreground", pathName === "/projects" ? "text-foreground/90" : "")} href="/projects">
          Projects
        </Link>
        <Link
          href="mailto:kapadiyapavan3218@gmail.com"
          className="hover:text-foreground"
          target="_blank"
        >
          Contact
        </Link>
      </div>
      <div>
        <ThemeToggler />
      </div>
    </div >
  );
};

export default Navbar;
