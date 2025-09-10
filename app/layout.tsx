import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import ThemeProviders from './components/layout/ThemeProviders'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { generateWebsiteStructuredData } from './utils/structuredData'

const inter = Inter({ subsets: ['latin'] })

// Generate website structured data once
const websiteStructuredData = generateWebsiteStructuredData()

export const metadata: Metadata = {
  metadataBase: new URL('https://dandelion-wiki.vercel.app'),
  title: {
    template: '%s | The Dandelion Dynasty Wiki',
    default: 'The Dandelion Dynasty Wiki'
  },
  description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series. Explore characters, places, gods, concepts, and more from the world of Dara.',
  keywords: ['Dandelion Dynasty', 'Ken Liu', 'silkpunk', 'fantasy', 'wiki', 'encyclopedia', 'Dara', 'Grace of Kings', 'Wall of Storms', 'Veiled Throne', 'Speaking Bones'],
  authors: [{ name: 'Dandelion Dynasty Wiki Community' }],
  creator: 'Dandelion Dynasty Wiki',
  publisher: 'Dandelion Dynasty Wiki',
  icons: {
    icon: '/icon.png',
  },
  alternates: {
    canonical: 'https://dandelion-wiki.vercel.app'
  },
  openGraph: {
    title: 'The Dandelion Dynasty Wiki',
    description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series. Explore characters, places, gods, concepts, and more from the world of Dara.',
    url: 'https://dandelion-wiki.vercel.app',
    siteName: 'The Dandelion Dynasty Wiki',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Dandelion Dynasty Wiki',
    description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series.',
    creator: '@dandeliondynastywiki'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className={`${inter.className} bg-bg-secondary dark:bg-bg-secondary text-text-secondary dark:text-text-secondary`} suppressHydrationWarning>
        <ThemeProviders>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
          <ScrollToTopButton />
        </ThemeProviders>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}