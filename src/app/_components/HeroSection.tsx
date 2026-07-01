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
    <section className="w-full overflow-x-clip bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-10 md:py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        {/* Text content */}
        <div className="order-2 flex min-w-0 flex-col gap-3.5 sm:gap-4 lg:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-2xl bg-card px-3 py-1.5 text-xs sm:text-sm text-foreground">
            <Glasses className="h-4 w-4 text-green-500" aria-hidden="true" />
            Available for new projects
          </span>

          <h1 className="flex min-w-0 flex-col gap-1 text-balance font-bold leading-tight text-foreground text-[clamp(1.75rem,8vw,2.25rem)] sm:text-4xl lg:text-5xl xl:text-6xl">
            <span>Hello, I&apos;m</span>
            <span className="text-[#F2B75F] leading-[0.98] text-[clamp(2.15rem,10.5vw,3rem)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Abhishek Mandal
            </span>
          </h1>

          <div className="h-1 w-full max-w-xs sm:max-w-md bg-[#58462B] rounded-full" />

          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
            Crafting beautiful, functional digital experiences that users love
            and businesses rely on.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-2 sm:flex sm:flex-wrap sm:gap-10 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0 text-center sm:text-left">
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
          <div className="flex flex-col gap-3 pt-2 min-[430px]:flex-row sm:gap-4">
            <Button className="w-full bg-[#EBAB4D] px-5 py-5 text-black min-[430px]:w-auto sm:px-6 sm:py-6">
              View my Work
            </Button>
            <Button
              variant="outline"
              className="w-full border-border bg-card px-5 py-5 text-foreground min-[430px]:w-auto sm:px-6 sm:py-6"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <Image
            width={1024}
            height={1536}
            className="aspect-square w-full max-w-180px rounded-3xl object-cover min-380px:max-w-y210px sm:max-w-300px lg:max-w-400px"
            src="/abhishek.png"
            alt="Abhishek Mandal - Frontend Developer"
            priority
          />
        </div>
      </div>

      {/* Search + filter row */}
      <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-3 px-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6 lg:px-8">
        <SearchBar className="w-full focus-within:border-yellow-600 focus-within:ring-2 focus-within:ring-yellow-400/20" />
        <Button className="flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#F4F1E8] px-5 py-5 font-medium text-black sm:w-auto sm:px-6 sm:py-6">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          <span>Filter</span>
        </Button>
      </div>

      {/* Category chips */}
      <div className="mb-2 mt-5 flex flex-wrap justify-center gap-2 px-4 sm:mt-6 sm:gap-3 sm:px-6 lg:gap-4 lg:px-8">
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
