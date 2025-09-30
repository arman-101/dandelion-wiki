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
  metadataBase: new URL('https://dandelion-dynasty.com'),
  title: {
    template: '%s | The Dandelion Dynasty Wiki',
    default: 'The Dandelion Dynasty Wiki'
  },
  description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series, The Dandelion Dynasty. Explore 100+ characters like Kuni Garu and Mata Zyndu, places like Dara and Pan, gods, concepts like garinafins, and detailed book guides from the world of Dara.',
  keywords: [
    // Series & Author
    'Dandelion Dynasty', 'Ken Liu', 'silkpunk', 'fantasy series', 'Dara',
    // Books
    'Grace of Kings', 'Wall of Storms', 'Veiled Throne', 'Speaking Bones',
    // Main Characters
    'Kuni Garu', 'Mata Zyndu', 'Jia Matiza', 'Zomi Kidosu', 'Théra', 'Phyro Garu',
    'Gin Mazoti', 'Luan Zya', 'Tanno Namen', 'Zyndu Clan',
    // Major Concepts
    'garinafin', 'cruben', 'airship', 'silkpunk technology',
    // Places
    'Pan', 'Xana', 'Rui', 'Dasu', 'Géjira', 'Ukyu-Gondé', 'Lyucu Empire',
    // Content Type
    'wiki', 'encyclopedia', 'character guide', 'book summary', 'fantasy worldbuilding'
  ],
  authors: [{ name: 'Dandelion Dynasty Wiki Community' }],
  creator: 'Dandelion Dynasty Wiki',
  publisher: 'Dandelion Dynasty Wiki',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: 'https://dandelion-dynasty.com'
  },
  openGraph: {
    title: 'The Dandelion Dynasty Wiki',
    description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series. Explore 100+ characters, places, gods, concepts, and detailed book guides from the world of Dara.',
    url: 'https://dandelion-dynasty.com',
    siteName: 'The Dandelion Dynasty Wiki',
    type: 'website',
    locale: 'en_US',
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
  verification: {
    google: 'R8ExRVy3k4nL7knfBM-SiGJOqYQHHqQC0bbgiEsGuyk',
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