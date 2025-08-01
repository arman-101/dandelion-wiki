import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
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
    <html lang="en">
      
      <head>
        <link rel="icon" href="icon.png" sizes="any" />
      </head>

      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTopButton />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}