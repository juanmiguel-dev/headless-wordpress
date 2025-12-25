import { draftMode } from "next/headers";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "@/app/globals.css";

import Header from "@/components/Globals/Header/Header";
import ParallaxBackground from "@/components/Globals/Parallax/ParallaxBackground";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

const inter = Inter({ subsets: ["latin"] });

// --- CONFIGURACIÓN SEO GLOBAL ---
export const metadata: Metadata = {
  // 1. URL Base: Soluciona el error de "Canonical URL undefined"
  metadataBase: new URL("https://danielamoreno.art"),

  // 2. Títulos y Descripciones por defecto
  title: {
    default: "Daniela Moreno | Digital Artist & Creative Director",
    template: "%s | Daniela Moreno Art",
  },
  description: "Digital Art & Creative Direction. Exploration of visual narratives and digital evolution.",

  // 3. Open Graph (Para cómo se ve al compartir en LinkedIn/WhatsApp)
  openGraph: {
    title: "Daniela Moreno | Digital Artist & Creative Director",
    description: "Portfolio de arte digital y dirección creativa.",
    url: "https://danielamoreno.art",
    siteName: "Daniela Moreno Art",
    locale: "es_AR",
    type: "website",
  },

  // 4. Robots (Permisos para Google)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 5. Icons
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
      <body className={inter.className}>
        {isEnabled && <PreviewNotice />}
        <ParallaxBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}