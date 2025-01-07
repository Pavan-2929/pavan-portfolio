"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <div onClick={() => setTheme("dark")} >
          <Moon className="w-6 h-6 text-foreground/75" />
        </div>
      ) : (
        <div onClick={() => setTheme("light")}>
          <Sun className="h-6 w-6 text-foreground/75" />
        </div>
      )}
    </>
  );
};

export default ThemeToggler;
