import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    sitemap: 'https://dandelion-dynasty.com/sitemap.xml',
  }
}
