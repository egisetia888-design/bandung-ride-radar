import { BarChart3, Map, Settings } from "lucide-react";

import { cn } from "@/lib/utils";

const bottomNavigationItems = [
  { label: "Map", icon: Map, isActive: true },
  { label: "Insight", icon: BarChart3, isActive: false },
  { label: "Settings", icon: Settings, isActive: false },
];

function BottomNavigation() {
  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed inset-x-0 bottom-0 z-10 mx-auto w-full max-w-md border-t border-radar-black/10 bg-radar-white/95 px-5 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 shadow-raised backdrop-blur"
    >
      <ul className="grid grid-cols-3 gap-2">
        {bottomNavigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <button
                className={cn(
                  "flex min-h-14 w-full flex-col items-center justify-center gap-1 rounded-button text-caption font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-radar-black",
                  item.isActive
                    ? "bg-radar-yellow text-radar-black"
                    : "text-radar-black/60 hover:bg-radar-black/[0.03]",
                )}
                type="button"
              >
                <Icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { BottomNavigation };
