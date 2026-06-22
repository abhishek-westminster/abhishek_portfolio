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
      "relative flex items-center w-full rounded-full bg-[#1e1e1e] border border-white/5 px-5 py-3.5 transition-all focus-within:border-white/10 focus-within:bg-[#252525]",
      className
    )}>
      <Search className="h-5 w-5 text-gray-400 shrink-0" />
      <input
        type="text"
        placeholder="Search projects, skills, or technologies..."
        className="w-full bg-transparent border-none outline-none text-gray-300 placeholder:text-gray-400 text-base ml-3"
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}

export { SearchBar }
