import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shudveta.in'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2024-12-21'),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2024-12-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date('2024-12-21'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date('2024-12-21'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Portfolio pages
  const portfolioPages = [
    {
      url: `${baseUrl}/portfolio/1`,
      lastModified: new Date('2024-12-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/2`,
      lastModified: new Date('2024-12-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/3`,
      lastModified: new Date('2024-12-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Blog pages
  const blogPages = [
    {
      url: `${baseUrl}/blogs/introducing-zynced`,
      lastModified: new Date('2024-12-21'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return [
    ...staticPages,
    ...portfolioPages,
    ...blogPages,
  ]
}
