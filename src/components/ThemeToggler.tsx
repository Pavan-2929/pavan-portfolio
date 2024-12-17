"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Button onClick={() => setTheme("dark")} variant="ghost" size="icon">
          <Moon />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")} variant="ghost" size="icon">
          <Sun />
        </Button>
      )}
    </>
  );
};

export default ThemeToggler;
