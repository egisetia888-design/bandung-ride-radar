import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-2xl bg-radar-black/[0.08]", className)}
      aria-hidden="true"
      {...props}
    />
  );
}

export { Skeleton };
