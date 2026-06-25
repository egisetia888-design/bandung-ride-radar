import { Radar } from "lucide-react";

import { Badge } from "@/components/ui/badge";

function AppHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-5 pb-3 pt-5">
      <div>
        <p className="text-caption font-semibold uppercase tracking-[0.18em] text-radar-red">
          Bandung
        </p>
        <h1 className="text-heading font-bold leading-tight text-radar-black">Ride Radar</h1>
      </div>
      <Badge className="gap-1.5" tone="warning">
        <Radar aria-hidden="true" className="size-4" />
        Sprint 2
      </Badge>
    </header>
  );
}

export { AppHeader };
