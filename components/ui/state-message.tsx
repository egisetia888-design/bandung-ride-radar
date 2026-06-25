import type { LucideIcon } from "lucide-react";
import { AlertTriangle, Inbox } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type StateMessageProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  icon?: LucideIcon;
  tone?: "empty" | "error";
};

function StateMessage({
  className,
  title,
  description,
  icon: Icon,
  tone = "empty",
  ...props
}: StateMessageProps) {
  const DefaultIcon = tone === "error" ? AlertTriangle : Inbox;
  const DisplayIcon = Icon ?? DefaultIcon;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-card border border-dashed border-radar-black/15 bg-radar-white p-6 text-center",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "mb-4 rounded-2xl p-3",
          tone === "error" ? "bg-radar-red/[0.12]" : "bg-radar-yellow/25",
        )}
      >
        <DisplayIcon
          aria-hidden="true"
          className={cn("size-6", tone === "error" ? "text-radar-red" : "text-radar-black")}
        />
      </div>
      <h2 className="text-subheading font-bold text-radar-black">{title}</h2>
      <p className="mt-2 max-w-64 text-body text-radar-black/65">{description}</p>
    </div>
  );
}

function EmptyState(props: Omit<StateMessageProps, "tone">) {
  return <StateMessage tone="empty" {...props} />;
}

function ErrorState(props: Omit<StateMessageProps, "tone">) {
  return <StateMessage tone="error" {...props} />;
}

export { EmptyState, ErrorState, StateMessage };
