"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";

export type FilterTabItem = {
  label: string;
  href: string;
};

type FilterTabProps = {
  tabs?: FilterTabItem[];
  activeTab?: string;
  onTabChange?: (label: string) => void;
  className?: string;
  children?: ReactNode;
};

export default function FilterTab({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  children,
}: FilterTabProps) {
  const [internalActive, setInternalActive] = useState<string | null>(
    activeTab ?? tabs?.[0]?.label ?? null
  );

  const currentActive = activeTab ?? internalActive;

  const handleClick = (label: string) => {
    if (activeTab === undefined) {
      setInternalActive(label);
    }
    onTabChange?.(label);
  };

  if (children) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div className={`flex items-center bg-[#1E1E1E] h-11 gap-1 text-white rounded-2xl px-2 ${className}`}>
      {tabs?.map((tab) => {
        const isActive = currentActive === tab.label;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            onClick={() => handleClick(tab.label)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition duration-300 ${
              isActive
                ? "text-[#F2B75F] bg-[#292929]"
                : "text-white hover:bg-[#292929]"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
