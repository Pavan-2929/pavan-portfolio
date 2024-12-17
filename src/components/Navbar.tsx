import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 sticky">
      <div className="space-x-4 md:space-x-8 lg:space-x-12 font-medium text-muted-foreground tracking-wide">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <Link className="hover:text-foreground" href="/projects">
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
    </div>
  );
};

export default Navbar;
