"use client";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import { Glasses, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FilterTab from "./FilterTab";

export default function HeroSection() {
  const stats = [
    { value: "7+", label: "year experience" },
    { value: "50+", label: "project Delivered" },
    { value: "30+", label: "Happy Clients" },
  ];

  const categories = ["Featured", "Web", "Mobile", "UI/UX", "Open Source"];

  return (
    <>
      <div className="w-full bg-[#161615]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 md:py-16 px-4 md:px-8">
          <div className="flex flex-col order-2 lg:order-1">
            <div className="bg-[#1F1F1F] items-center gap-2 flex text-sm w-fit p-2 rounded-2xl text-white mt-5">
              <Glasses className="text-[#22C55D] h-4 w-4" /> Available for new
              projects
            </div>

            <h1 className="text-white flex flex-col gap-2 font-bold text-3xl md:text-5xl mt-6 md:mt-10">
              Hello, I&apos;m
              <span className="text-[#F2B75F] font-bold text-4xl md:text-6xl">
                Abhishek Mandal
              </span>
            </h1>
            <div className="w-full max-w-md h-1 bg-[#58462B] mt-2"></div>
            <div className="text-[#A3A9B3] text-lg md:text-2xl my-5">
              Crafting beautiful, functional digital experiences that users love
              and businesses rely on.
            </div>

            <div className="flex flex-wrap gap-8 md:gap-16">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <h3 className="text-white text-3xl md:text-4xl font-bold">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button className="bg-[#EBAB4D] py-6">View my Work</Button>
              <Button className="bg-[#1F1F1F] text-[#E9E7DC] py-6">
                Learn more
              </Button>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <Image
              width={400}
              height={400}
              className="h-auto rounded-3xl object-cover w-full max-w-400px"
              src="/window.svg"
              alt="Abhishek"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-8">
          <SearchBar className="focus-within:border-yellow-600 focus-within:ring-2 focus-within:ring-yellow-400/20 w-full" />

          <Button className="flex items-center gap-2 rounded-2xl bg-[#F4F1E8] px-6 py-6 text-black font-medium shrink-0 w-full sm:w-auto justify-center">
            <SlidersHorizontal />
            <div>Filter</div>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4 mt-4">
          {categories.map((categorie) => (
            <Button
              key={categorie}
              className="rounded-2xl bg-[#1f1f1f] px-3 md:px-4 py-2 text-gray-400 text-xs md:text-sm my-3 md:my-6"
            >
              {categorie}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
