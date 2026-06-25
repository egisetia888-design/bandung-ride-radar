import type { ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { BottomNavigation } from "@/components/layout/bottom-navigation";

function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-md bg-radar-white text-radar-black shadow-app">
      <AppHeader />
      <main className="px-5 pb-28">{children}</main>
      <BottomNavigation />
    </div>
  );
}

export { AppShell };
