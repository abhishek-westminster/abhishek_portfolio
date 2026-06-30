"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Themes() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative h-10 w-10 flex items-center justify-center"
        aria-label="Toggle theme"
      />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative h-10 w-10 flex items-center justify-center rounded-full hover:bg-[#292929] transition-colors"
      aria-label="Toggle theme"
    >
      <FaSun
        className={`h-5 w-5 text-yellow-400 transition-all duration-300 ${
          currentTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <FaMoon
        className={`absolute h-5 w-5 text-white transition-all duration-300 ${
          currentTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
    </button>
  );
}
