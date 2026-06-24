"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import FilterTab from "./FilterTab";
import Themes from "./Themes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-card border-b border-border sticky top-0 z-50">
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 min-w-0">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10 shrink-0">
            <AvatarImage src="" alt="Abhishek Mandal" />
            <AvatarFallback className="bg-muted text-foreground text-xs sm:text-sm">
              AM
            </AvatarFallback>
          </Avatar>
          <h1 className="truncate text-sm sm:text-base md:text-lg font-bold text-foreground hover:text-[#F2B75F] transition-colors">
            Abhishek Mandal
          </h1>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <FilterTab tabs={navItems} />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Themes />
          <Button className="hidden md:inline-flex">Let&apos;s Talk</Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground rounded-md hover:bg-accent transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-foreground hover:bg-accent hover:text-[#F2B75F] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-2 w-full">Let&apos;s Talk</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
