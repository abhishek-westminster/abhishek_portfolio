"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { MouseEvent } from "react";

export default function CardProject() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Personal developer portfolio showcasing web development skills, projects, and services.",
      category: "Next.js",
      image: "/soon.png",
      tags: ["Portfolio", "Developer", "React"],
      liveUrl: "https://portfolio-website-demo.com",
    },
    {
      id: 2,
      title: "iPhone UI Portfolio",
      description:
        "A creative portfolio presented as an iOS-style phone interface with smooth UI.",
      category: "HTML/CSS/JS",
      image: "/soon.png",
      tags: ["Creative", "Portfolio", "iOS UI"],
      liveUrl: "https://iphone-ui-portfolio-demo.com",
    },
    {
      id: 3,
      title: "PulseNow",
      description:
        "Live cryptocurrency dashboard showing real-time prices and market data.",
      category: "React",
      image: "/soon.png",
      tags: ["Crypto", "Dashboard", "Real-time"],
      liveUrl: "https://pulsenow-demo.com",
    },
    {
      id: 4,
      title: "Sarkari-Kam",
      description:
        "A civic service platform where users can share government-service experiences and helpful guides.",
      category: "Next.js",
      image: "/sarkarikam.png",
      tags: ["Civic", "Community", "MongoDB"],
      // TODO: Replace with public production URL from Vercel
      // Current URL is a team-scoped preview that requires authentication (401)
      // Go to Vercel Dashboard → Sarkari-Kam project → Settings → Deployment Protection
      // Disable auth to get a public URL like: https://sarkari-kam.vercel.app
      liveUrl: "https://sarkarikam-pzuzs6jso-abhishek-projects04.vercel.app",
    },
    {
      id: 5,
      title: "FoodieCart",
      description:
        "A modern food ordering interface with menu cards, cart system, and checkout flow.",
      category: "React",
      image: "/soon.png",
      tags: ["Food", "Cart", "E-commerce"],
      liveUrl: "https://foodiecart-demo.com",
    },
    {
      id: 6,
      title: "DevNotes",
      description:
        "A note-taking app for developers with markdown-style notes, categories, and local storage.",
      category: "React",
      image: "/soon.png",
      tags: ["Notes", "Markdown", "LocalStorage"],
      liveUrl: "https://devnotes-demo.com",
    },
  ];

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
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

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transition =
      "transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 0.5s ease";
  };

  return (
    <Card className="w-full border-0 bg-background py-6 sm:py-10 md:py-20">
      <div className="mx-auto grid w-full max-w-[360px] grid-cols-1 gap-4 px-4 sm:max-w-6xl sm:grid-cols-2 sm:gap-6 sm:px-6 md:gap-8 lg:grid-cols-3 lg:px-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transition: "transform 0.1s ease-out, box-shadow 0.4s ease",
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
            className="group relative mx-auto block w-full overflow-hidden rounded-[20px] border border-border bg-card shadow-[inset_0_0_0_0_rgba(192,192,192,0)] hover:shadow-[inset_0_0_60px_10px_rgba(192,192,192,0.2),0_20px_60px_rgba(0,0,0,0.35)] sm:max-w-none sm:rounded-[34px] lg:rounded-[40px]"
            >
            <div className="relative aspect-video overflow-hidden sm:h-[240px] sm:aspect-auto lg:h-[260px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-2 flex items-start justify-between gap-2 sm:mb-3 sm:gap-3">
                <h3 className="min-w-0 text-base font-bold text-foreground transition-colors duration-300 sm:text-xl">
                  {project.title}
                </h3>
                <span className="shrink-0 rounded-full bg-foreground px-2 py-0.5 text-[0.65rem] font-semibold text-background sm:px-3 sm:py-1 sm:text-xs">
                  {project.category}
                </span>
              </div>
              <p className="mb-3 line-clamp-2 text-xs leading-5 text-muted-foreground sm:mb-4 sm:text-sm sm:leading-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-[0.7rem] text-muted-foreground transition-colors duration-300 hover:bg-[#493E2D] hover:text-white sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}
