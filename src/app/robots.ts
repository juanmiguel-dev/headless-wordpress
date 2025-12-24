import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Bloqueamos la API interna por seguridad
    },
    // Ajusta esto con tu dominio final cuando lo tengas claro
    sitemap: 'https://next.pachadev.com/sitemap.xml',
  };
}