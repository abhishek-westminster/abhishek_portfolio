import React from "react";
import Link from "next/link";
ArrowUp;
MapPin;
Icon;
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ReactIcon,
  Twitter,
} from "@hugeicons/core-free-icons";
import { ArrowUp, Icon, icons, MapPin } from "lucide-react";
ReactIcon;
Twitter;
Mail;
Linkedin;
Instagram;
Github;

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
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
  return (
    <>
      <footer className="bg-card text-muted-foreground border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {/* Top footer */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Left brand area */}
            <div>
              <h2 className="text-2xl font-bold text-white">Abhishek Mandal</h2>

              <p className="mt-4 text-lg">UI/UX Designer & Developer</p>

              <p className="mt-8 max-w-md text-lg leading-8">
                Crafting beautiful, functional digital experiences that users
                love and businesses rely on.
              </p>

              <div className="mt-8 flex items-center gap-3 text-lg">
                <MapPin className="h-5 w-5" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:justify-self-center">
              <h3 className="text-xl font-bold text-white">Navigation</h3>

              <ul className="mt-8 space-y-5">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg transition-colors duration-300 hover:text-[#F2B75F]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="md:justify-self-end">
              <h3 className="text-xl font-bold text-white">Connect</h3>

              <ul className="mt-8 space-y-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 text-lg transition-colors duration-300 hover:text-[#F2B75F]"
                      >
                        <span>{social.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

      {/* Bottom footer */}
      <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
            <p className="text-base">
              © 2026 Abhishek Mandal. All rights reserved.
            </p>

            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-[#F2B75F]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-[#F2B75F]"
              >
                Terms of Service
              </Link>

              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2A2A2A] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2B75F] hover:text-black"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
