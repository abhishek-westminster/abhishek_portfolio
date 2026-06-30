"use client";
import { Card } from "@/components/ui/card";
import React, { MouseEvent } from "react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Design",
      skills: [
        "UI Design",
        "Visual Design",
        "Responsive Design",
        "Claymorphism",
        "Glassmorphism",
        "Motion Design",
        "SEO & Meta Tags",
      ],
    },
    {
      title: "Development",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "GSAP",
        "Python",
        "MongoDB",
        "Supabase",
        "AWS EC2",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Notion",
        "Git",
        "Vercel",
        "Telegram Bot API",
        "Docker",
        "Gemini AI",
        "Binance API",
      ],
    },
  ];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transition =
      "transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 0.5s ease";
  };

  return (
    <>
      <div className="w-full bg-background py-10 sm:py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="py-3 text-center text-sm font-semibold text-[#F2B75F] md:py-6">
              SKILL AND TECH STACK
            </h1>
            <span className="text-center text-2xl font-bold leading-tight text-foreground md:text-4xl">
              React, UI/UX, and modern frontend tools
            </span>
            <div className="max-w-2xl py-4 text-center text-base leading-7 text-muted-foreground md:py-6 md:text-lg md:leading-8">
              My day-to-day stack for building fast, clean, SEO-friendly web
              apps and mobile experiences: HTML, CSS, JavaScript, React, UI/UX
              design, and performance-first implementation.
            </div>
            <Card className="w-full border-0 bg-card py-6 sm:py-10 md:py-20">
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 sm:gap-6 md:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-3">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      transition: "transform 0.1s ease-out, box-shadow 0.4s ease",
                      willChange: "transform",
                      transformStyle: "preserve-3d",
                    }}
                    className="group relative overflow-hidden rounded-[28px] border border-border bg-card p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_0_50px_rgba(192,192,192,0.35),0_30px_80px_rgba(0,0,0,0.55)] sm:rounded-[34px] sm:p-6 lg:rounded-[40px] lg:p-8"
                  >
                    <h2 className="mb-5 text-xl font-bold text-foreground sm:mb-6 sm:text-2xl">
                      {group.title}
                    </h2>

                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {group.skills.map((skills) => (
                        <span
                          key={skills}
                          className="rounded-full bg-muted px-3 py-2 text-sm text-foreground transition-colors duration-300 hover:bg-[#4B3F2E] hover:text-white sm:px-4"
                        >
                          {skills}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
