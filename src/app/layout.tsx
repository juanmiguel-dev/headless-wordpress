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
  metadataBase: new URL("https://next.pachadev.com"),

  // 2. Títulos y Descripciones por defecto
  title: {
    default: "Juan Miguel Rivero y Hornos | Headless WordPress Architect",
    template: "Pachadev NextJs",
  },
  description: "Headless WordPress & Next.js. Desarrollo de arquitecturas web escalables, seguras y de alto rendimiento, para agencias y clientes globales.",

  // 3. Open Graph (Para cómo se ve al compartir en LinkedIn/WhatsApp)
  openGraph: {
    title: "Juan Miguel Rivero y Hornos | Headless WordPress Architect",
    description: "Portfolio técnico de desarrollo JAMstack con Next.js y WPGraphQL.",
    url: "https://next.pachadev.com",
    siteName: "Pachadev Portfolio",
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
    icon: "https://v2.pachadev.com/wp-content/uploads/2025/12/logo-pachadev.webp",
    shortcut: "https://v2.pachadev.com/wp-content/uploads/2025/12/logo-pachadev.webp",
    apple: "https://v2.pachadev.com/wp-content/uploads/2025/12/logo-pachadev.webp",
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