import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SearchBarProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function SearchBar({ className, placeholder = "Cari area Bandung", ...props }: SearchBarProps) {
  return (
    <label
      className={cn(
        "flex min-h-12 items-center gap-3 rounded-search border border-radar-black/10 bg-radar-white px-4 text-radar-black shadow-soft",
        className,
      )}
    >
      <Search
        aria-hidden="true"
        className="size-5 shrink-0 text-radar-black/55"
        strokeWidth={2.25}
      />
      <input
        className="w-full bg-transparent text-body text-radar-black outline-none placeholder:text-radar-black/45"
        placeholder={placeholder}
        type="search"
        {...props}
      />
    </label>
  );
}

export { SearchBar };
