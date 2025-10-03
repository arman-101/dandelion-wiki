import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Dandelion Dynasty Wiki',
    short_name: 'Dandelion Wiki',
    description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series, The Dandelion Dynasty.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d9488',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
