import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected?: boolean;
};

function Chip({ className, isSelected = false, type = "button", ...props }: ChipProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-10 items-center rounded-full border px-4 text-caption font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-radar-black",
        isSelected
          ? "border-radar-yellow bg-radar-yellow text-radar-black"
          : "border-radar-black/10 bg-radar-white text-radar-black/75 hover:bg-radar-black/[0.03]",
        className,
      )}
      type={type}
      {...props}
    />
  );
}

export { Chip };
