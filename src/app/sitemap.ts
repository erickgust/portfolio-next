import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://erickgust.vercel.app/',
      lastModified: new Date(),
      alternates: {
        languages: {
          pt: 'https://erickgust.vercel.app/pt-br',
        },
      },
    },
  ]
}
