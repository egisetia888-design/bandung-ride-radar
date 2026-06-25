import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

import "@/styles/globals.css";

const APP_NAME = "Bandung Ride Radar";
const APP_DESCRIPTION =
  "Progressive Web App berbasis GIS untuk membantu pengemudi menemukan area peluang permintaan relatif tinggi menggunakan data publik.";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFC107",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
