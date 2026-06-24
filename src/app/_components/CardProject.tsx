"use client";
import { Card } from "@/components/ui/card";
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
      liveUrl: "https://sarkari-kam.vercel.app",
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
    <Card className="bg-background w-full py-10 md:py-20 border-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
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
            className="group relative block overflow-hidden rounded-[40px] bg-card cursor-pointer border border-border shadow-[inset_0_0_0_0_rgba(192,192,192,0)] hover:shadow-[inset_0_0_60px_10px_rgba(192,192,192,0.2),0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="relative h-65 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-foreground text-xl font-bold transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#493E2D] hover:text-white"
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
