import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // If you have private routes
    },
    sitemap: 'https://emekavictor.com.ng/sitemap.xml',
  };
}