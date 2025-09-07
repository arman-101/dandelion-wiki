import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import ThemeProviders from './components/layout/ThemeProviders'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Dandelion Dynasty Wiki',
  description: 'An encyclopedia for the epic silkpunk saga by Ken Liu.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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