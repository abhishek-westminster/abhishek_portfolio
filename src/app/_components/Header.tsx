"use client";
import { useState } from "react";
import Link from "next/link";
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:h-18 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 max-w-[58vw] items-center gap-2 sm:max-w-none">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10 shrink-0">
            <AvatarImage src="" alt="Abhishek Mandal" />
            <AvatarFallback className="bg-muted text-foreground text-xs sm:text-sm">
              AM
            </AvatarFallback>
          </Avatar>
          <h1 className="truncate text-sm font-bold text-foreground transition-colors hover:text-[#F2B75F] sm:text-base md:text-lg">
            Abhishek Mandal
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <FilterTab tabs={navItems} />
        </div>

        {/* Right side actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <Themes />
          <Button className="hidden md:inline-flex">Let&apos;s Talk</Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-md p-2 text-foreground transition-colors hover:bg-accent md:hidden"
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
