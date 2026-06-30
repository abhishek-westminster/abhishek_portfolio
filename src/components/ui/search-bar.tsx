import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
}

function SearchBar({ className, onSearch, ...props }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value)
  }

  return (
    <div className={cn(
      "relative flex w-full items-center rounded-full border border-white/5 bg-[#1e1e1e] px-4 py-3.5 transition-all focus-within:border-white/10 focus-within:bg-[#252525] sm:px-5",
      className
    )}>
      <Search className="h-5 w-5 text-gray-400 shrink-0" />
      <input
        type="text"
        placeholder="Search projects, skills, or technologies..."
        className="ml-3 min-w-0 w-full border-none bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-400 sm:text-base"
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}

export { SearchBar }
