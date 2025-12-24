/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      // 1. Tu WordPress en HTTP (Local o sin SSL)
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME,
        port: "",
      },
      // 2. Tu WordPress en HTTPS (Producción/Hostinger - ¡Importante!)
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME,
        port: "",
      },
      // 3. Tu entorno Local específico
      {
        protocol: "http",
        hostname: "headless-backend.local",
        port: "",
      },
      // 4. AGREGADO: Permiso para Unsplash (Página Concepto)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;