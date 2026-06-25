import { Clock, LocateFixed, Navigation } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { EmptyState } from "@/components/ui/state-message";
import { SearchBar } from "@/components/ui/search-bar";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-4">
        <SearchBar aria-label="Cari area Bandung" />

        <section
          aria-label="Placeholder peta Bandung Ride Radar"
          className="relative min-h-[62dvh] overflow-hidden rounded-[28px] border border-radar-black/10 bg-radar-black/[0.03] shadow-soft"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(33_33_33_/_0.06)_1px,transparent_1px),linear-gradient(0deg,rgb(33_33_33_/_0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgb(229_57_53_/_0.20),transparent_24%),radial-gradient(circle_at_30%_60%,rgb(255_193_7_/_0.34),transparent_28%)]" />

          <div className="relative z-[1] flex h-full min-h-[62dvh] flex-col justify-between p-4">
            <div className="flex items-center justify-between gap-3">
              <Badge tone="danger">Peta placeholder</Badge>
              <button
                aria-label="Tombol lokasi pengguna placeholder"
                className="flex size-12 items-center justify-center rounded-button bg-radar-white text-radar-black shadow-soft"
                type="button"
              >
                <LocateFixed aria-hidden="true" className="size-5" />
              </button>
            </div>

            <EmptyState
              className="mx-auto max-w-72 bg-radar-white/95"
              description="MapLibre dan data peta akan ditambahkan pada Sprint 3. Area ini disiapkan sebagai canvas utama aplikasi."
              icon={Navigation}
              title="Area peta siap"
            />

            <Card className="bg-radar-white/95">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-caption font-semibold uppercase tracking-[0.14em] text-radar-black/50">
                      UI Foundation
                    </p>
                    <h2 className="text-subheading font-bold text-radar-black">
                      Siap untuk Live Map
                    </h2>
                  </div>
                  <Clock aria-hidden="true" className="size-6 text-radar-yellow" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Chip isSelected>Map first</Chip>
                  <Chip>One thumb</Chip>
                  <Chip>Low cost</Chip>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button>Radar</Button>
                  <Button variant="secondary">Insight</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div
          className="grid grid-cols-3 gap-2"
          aria-label="Contoh loading skeleton komponen reusable"
        >
          <Skeleton className="h-3" />
          <Skeleton className="h-3" />
          <Skeleton className="h-3" />
        </div>
      </div>
    </AppShell>
  );
}
