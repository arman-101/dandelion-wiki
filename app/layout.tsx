import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import ThemeProviders from './components/layout/ThemeProviders'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { 
  generateWebsiteStructuredData,
  generateFAQStructuredData,
  generateOrganizationStructuredData,
  generateSeriesStructuredData
} from './utils/structuredData'

const inter = Inter({ subsets: ['latin'] })

// Generate structured data once
const websiteStructuredData = generateWebsiteStructuredData()
const faqStructuredData = generateFAQStructuredData()
const organizationStructuredData = generateOrganizationStructuredData()
const seriesStructuredData = generateSeriesStructuredData()

export const metadata: Metadata = {
  metadataBase: new URL('https://dandelion-dynasty.com'),
  title: {
    template: '%s | The Dandelion Dynasty Wiki',
    default: 'The Dandelion Dynasty Wiki'
  },
  description: 'The Dandelion Dynasty Wiki - Complete encyclopedia for Ken Liu\'s silkpunk fantasy series. Discover The Dandelion Dynasty books, characters, world of Dara, and silkpunk technology. From The Grace of Kings to Speaking Bones, explore Kuni Garu, Mata Zyndu, garinafins, and more.',
  keywords: [
    // Core Series Terms (most important - variations)
    'Dandelion Dynasty',
    'The Dandelion Dynasty',
    'Dandelion Dynasty series',
    'Dandelion Dynasty books',
    'Dandelion',
    'Dynasty',
    // Author (critical)
    'Ken Liu',
    'Ken Liu books',
    'Ken Liu fantasy',
    'Ken Liu series',
    // Genre & Style
    'silkpunk',
    'silkpunk fantasy',
    'silkpunk series',
    'silkpunk technology',
    'fantasy series',
    'epic fantasy',
    // World
    'Dara',
    'world of Dara',
    'Dara fantasy',
    'Islands of Dara',
    // Books (with variations)
    'Grace of Kings',
    'The Grace of Kings',
    'Wall of Storms',
    'The Wall of Storms',
    'Veiled Throne',
    'The Veiled Throne',
    'Speaking Bones',
    // Main Characters (top tier)
    'Kuni Garu',
    'Mata Zyndu',
    'Jia Matiza',
    'Zomi Kidosu',
    'Théra',
    'Phyro Garu',
    'Gin Mazoti',
    'Luan Zya',
    'Tanno Namen',
    'Zyndu Clan',
    'Cogo Yelu',
    'Risana',
    // Major Concepts (iconic to series)
    'garinafin',
    'garinafins',
    'cruben',
    'airship',
    'silkpunk airship',
    // Places
    'Pan',
    'Xana',
    'Rui',
    'Dasu',
    'Géjira',
    'Ukyu-Gondé',
    'Lyucu Empire',
    'Cocru',
    'Haan',
    // Search Intent Keywords
    'Dandelion Dynasty wiki',
    'Dandelion Dynasty encyclopedia',
    'Dandelion Dynasty guide',
    'Dandelion Dynasty characters',
    'Dandelion Dynasty summary',
    'Ken Liu Dandelion Dynasty',
    'what is Dandelion Dynasty',
    'Dandelion Dynasty book order',
    'Dandelion Dynasty reading order',
    // Content Type
    'wiki',
    'encyclopedia',
    'character guide',
    'book summary',
    'fantasy worldbuilding',
    'fantasy wiki',
    'book series guide'
  ],
  authors: [{ name: 'Dandelion Dynasty Wiki Community' }],
  creator: 'Dandelion Dynasty Wiki',
  publisher: 'Dandelion Dynasty Wiki',
  icons: {
    icon: [
      { url: '/icon-bg-fix.png', type: 'image/png' },
    ],
    shortcut: '/icon-bg-fix.png',
    apple: '/icon-bg-fix.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icon-bg-fix.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/icon-bg-fix.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://dandelion-dynasty.com'
  },
  openGraph: {
    title: 'The Dandelion Dynasty Wiki - Ken Liu\'s Silkpunk Fantasy Series',
    description: 'Complete encyclopedia for The Dandelion Dynasty by Ken Liu. Explore the world of Dara, silkpunk technology, characters like Kuni Garu and Mata Zyndu, garinafins, and all four books from The Grace of Kings to Speaking Bones.',
    url: 'https://dandelion-dynasty.com',
    siteName: 'The Dandelion Dynasty Wiki',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/icon-bg-fix.png', width: 512, height: 512, alt: 'The Dandelion Dynasty Wiki - Ken Liu Silkpunk Fantasy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Dandelion Dynasty Wiki - Ken Liu Silkpunk Fantasy',
    description: 'Complete guide to The Dandelion Dynasty series by Ken Liu. Characters, world of Dara, silkpunk technology, garinafins, and book guides.',
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
        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        {/* FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {/* Book Series structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seriesStructuredData),
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