import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'The Dandelion Dynasty Wiki',
  description: 'The Dandelion Dynasty - Complete wiki for Ken Liu\'s silkpunk fantasy epic. Discover The Dandelion Dynasty books (The Grace of Kings, The Wall of Storms, The Veiled Throne, Speaking Bones), characters (Kuni Garu, Mata Zyndu, Jia, Zomi), world of Dara, garinafins, and silkpunk technology.',
  keywords: [
    // Primary Keywords (most important)
    'Dandelion Dynasty',
    'The Dandelion Dynasty',
    'Dandelion',
    'Dynasty',
    'Ken Liu',
    'Ken Liu books',
    'Ken Liu Dandelion Dynasty',
    'silkpunk',
    'silkpunk fantasy',
    // Series Info
    'Dandelion Dynasty series',
    'Dandelion Dynasty books',
    'Dandelion Dynasty book order',
    'Dandelion Dynasty reading order',
    'what is Dandelion Dynasty',
    // Books (with "The")
    'Grace of Kings',
    'The Grace of Kings',
    'Wall of Storms',
    'The Wall of Storms',
    'Veiled Throne',
    'The Veiled Throne',
    'Speaking Bones',
    // Main Characters
    'Kuni Garu',
    'Mata Zyndu',
    'Jia Matiza',
    'Zomi Kidosu',
    'Théra',
    'Phyro Garu',
    // World & Concepts
    'Dara',
    'world of Dara',
    'Islands of Dara',
    'garinafin',
    'garinafins',
    'cruben',
    'silkpunk technology',
    // Search Intent
    'Dandelion Dynasty wiki',
    'Dandelion Dynasty guide',
    'Dandelion Dynasty characters',
    'Dandelion Dynasty encyclopedia',
    'fantasy encyclopedia',
    'character guide',
    'epic fantasy series',
    'fantasy worldbuilding'
  ],
  alternates: {
    canonical: 'https://dandelion-dynasty.com'
  },
  openGraph: {
    title: 'The Dandelion Dynasty Wiki - Ken Liu Silkpunk Fantasy Series',
    description: 'Complete guide to The Dandelion Dynasty by Ken Liu. Explore the silkpunk world of Dara, characters like Kuni Garu and Mata Zyndu, garinafins, and all four books: The Grace of Kings, The Wall of Storms, The Veiled Throne, and Speaking Bones.',
    url: 'https://dandelion-dynasty.com',
    type: 'website',
    siteName: 'The Dandelion Dynasty Wiki',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'The Dandelion Dynasty Wiki - Ken Liu Silkpunk Fantasy' }],
  },
};

export default function Home() {
  return <HomePageClient />;
}