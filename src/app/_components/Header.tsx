import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import FilterTab from "./FilterTab";
import Themes from "./Themes";

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
      <header className="w-full bg-card border-b border-border">
        <div className="max-w-7xl h-18 mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-muted text-foreground">AM</AvatarFallback>
            </Avatar>

            <div className="text-foreground flex">
              <h1 className="hover:text-[#F2B75F] text-sm md:text-lg font-bold whitespace-nowrap">
                Abhishek Mandal
              </h1>
            </div>
          </div>

          <div className="hidden md:block">
            <FilterTab tabs={navItems} />
          </div>

          <div className="flex items-center gap-3">
            <Themes />
            <Button className="hidden md:flex">Let&apos;s Talk</Button>
            <button className="md:hidden text-foreground p-2" aria-label="Menu">
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
        </div>
      </header>
    </>
  );
}
