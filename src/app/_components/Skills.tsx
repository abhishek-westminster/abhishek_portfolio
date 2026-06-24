"use client";
import { Card } from "@/components/ui/card";
import React, { useRef, MouseEvent } from "react";

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
      <div className="bg-background w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-semibold text-[#F2B75F] py-4 md:py-6">
              SKILL AND TECH STACK
            </h1>
            <span className="font-bold text-2xl md:text-4xl text-foreground text-center">
              React, UI/UX, and modern frontend tools
            </span>
            <div className="text-muted-foreground py-4 md:py-6 max-w-2xl text-base md:text-lg text-center">
              My day-to-day stack for building fast, clean, SEO-friendly web
              apps and mobile experiences: HTML, CSS, JavaScript, React, UI/UX
              design, and performance-first implementation.
            </div>
            <Card className="bg-card w-full py-10 md:py-20 border-0">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
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
                    className="group relative overflow-hidden rounded-[40px] bg-card border border-border p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_0_50px_rgba(192,192,192,0.35),0_30px_80px_rgba(0,0,0,0.55)]"
                  >
                    <h2 className="text-foreground text-2xl font-bold mb-6">
                      {group.title}
                    </h2>

                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skills) => (
                        <span
                          key={skills}
                          className="cursor-pointer text-foreground text-sm bg-muted hover:bg-[#4B3F2E] hover:text-white transition-colors duration-300 px-4 py-2 rounded-full"
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
