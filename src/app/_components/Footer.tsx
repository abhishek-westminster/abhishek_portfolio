import React from "react";
import Link from "next/link";
import { ArrowUp, MapPin } from "lucide-react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "@hugeicons/core-free-icons";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/abhishek-westminster",
    icon: Github,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/abhishek-kumar-mandal-81086b293/",
    icon: Linkedin,
  },
  { label: "Twitter", href: "https://x.com/ImmAbhishe4602", icon: Twitter },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abhishek_mandal04/",
    icon: Instagram,
  },
  { label: "Email", href: "mailto:jnkabhishek786@email.com", icon: Mail },
];

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card text-muted-foreground border-t border-border">
      {/* Top footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Abhishek Mandal
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground/80">
              UI/UX Designer &amp; Developer
            </p>
            <p className="mt-6 sm:mt-8 max-w-md text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
              Crafting beautiful, functional digital experiences that users love
              and businesses rely on.
            </p>
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-sm sm:text-base lg:text-lg">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-center">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Navigation
            </h3>
            <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base sm:text-lg transition-colors duration-300 hover:text-[#F2B75F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:justify-self-end">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Connect
            </h3>
            <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 sm:gap-4 text-base sm:text-lg transition-colors duration-300 hover:text-[#F2B75F]"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-2 w-2 rounded-full bg-current"
                    />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm sm:text-base">
            © 2026 Abhishek Mandal. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
            <Link
              href="/privacy"
              className="text-sm sm:text-base transition-colors duration-300 hover:text-[#F2B75F]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm sm:text-base transition-colors duration-300 hover:text-[#F2B75F]"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2B75F] hover:text-black"
            >
              <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
