import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "warning" | "danger" | "success";

const toneClassName: Record<BadgeTone, string> = {
  neutral: "bg-radar-black/[0.08] text-radar-black",
  warning: "bg-radar-yellow/25 text-radar-black",
  danger: "bg-radar-red/[0.12] text-radar-red",
  success: "bg-emerald-500/[0.12] text-emerald-700",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full px-3 text-caption font-semibold",
        toneClassName[tone],
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
