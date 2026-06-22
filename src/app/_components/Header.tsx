import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full bg-[#141414]">
        <div className="max-w-7xl h-18 mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>

            <div className="text-white flex">
              <h1 className="hover:text-[#F2B75F] text-sm md:text-lg font-bold whitespace-nowrap">
                Abhishek Mandal
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-[#1E1E1E] h-11 gap-1 lg:gap-3 text-white rounded-2xl px-2 lg:px-4 text-sm">
            {navItems.map((item) => (
              <Link
                className="hover:bg-[#292929] duration-300 ease-in-out transition rounded-2xl px-3 lg:px-4 py-1.5"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button className="hidden md:flex">Let&apos;s Talk</Button>

          <button className="md:hidden text-white p-2" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
