"use client";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import { Glasses, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
  ];

  const categories = ["Featured", "Web", "Mobile", "UI/UX", "Open Source"];

  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:grid-cols-2 lg:items-center">
        {/* Text content */}
        <div className="order-2 flex flex-col gap-4 lg:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-2xl bg-card px-3 py-1.5 text-xs sm:text-sm text-foreground">
            <Glasses className="h-4 w-4 text-green-500" aria-hidden="true" />
            Available for new projects
          </span>

          <h1 className="flex flex-col gap-1 font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            <span>Hello, I&apos;m</span>
            <span className="text-[#F2B75F] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Abhishek Mandal
            </span>
          </h1>

          <div className="h-1 w-full max-w-xs sm:max-w-md bg-[#58462B] rounded-full" />

          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
            Crafting beautiful, functional digital experiences that users love
            and businesses rely on.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10 lg:gap-16 pt-2">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <h3 className="text-foreground text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Button className="bg-[#EBAB4D] text-black py-6 px-6 w-full sm:w-auto">
              View my Work
            </Button>
            <Button
              variant="outline"
              className="bg-card text-foreground py-6 px-6 border-border w-full sm:w-auto"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 flex justify-center lg:justify-end lg:order-2">
          <Image
            width={400}
            height={400}
            className="h-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] rounded-3xl object-cover dark:invert"
            src="/window.svg"
            alt="Abhishek Mandal - Frontend Developer"
            priority
          />
        </div>
      </div>

      {/* Search + filter row */}
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 px-4 sm:px-6 lg:px-8">
        <SearchBar className="w-full focus-within:border-yellow-600 focus-within:ring-2 focus-within:ring-yellow-400/20" />
        <Button className="flex items-center justify-center gap-2 rounded-2xl bg-[#F4F1E8] px-6 py-6 text-black font-medium shrink-0 w-full sm:w-auto">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          <span>Filter</span>
        </Button>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4 sm:px-6 lg:px-8 mt-6 mb-2">
        {categories.map((categorie) => (
          <Button
            key={categorie}
            variant="outline"
            className="rounded-2xl bg-card px-3 sm:px-4 py-2 text-muted-foreground text-xs sm:text-sm border-border hover:text-foreground"
          >
            {categorie}
          </Button>
        ))}
      </div>
    </section>
  );
}
