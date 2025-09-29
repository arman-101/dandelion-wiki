import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Home | The Dandelion Dynasty Wiki',
  description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series, The Dandelion Dynasty. Explore 100+ characters like Kuni Garu and Mata Zyndu, places, gods, garinafins, and complete guides to all four books: The Grace of Kings, The Wall of Storms, The Veiled Throne, and Speaking Bones.',
  keywords: [
    'Dandelion Dynasty',
    'Ken Liu',
    'silkpunk fantasy',
    'Kuni Garu',
    'Mata Zyndu',
    'Grace of Kings',
    'Wall of Storms',
    'Veiled Throne',
    'Speaking Bones',
    'Dara',
    'garinafin',
    'fantasy encyclopedia',
    'character guide'
  ],
  alternates: {
    canonical: 'https://dandelion-dynasty.com'
  },
  openGraph: {
    title: 'Home | The Dandelion Dynasty Wiki',
    description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series, The Dandelion Dynasty. Explore 100+ characters, places, gods, concepts, and complete guides to all four books from the world of Dara.',
    url: 'https://dandelion-dynasty.com',
    type: 'website',
    siteName: 'The Dandelion Dynasty Wiki',
  },
};

export default function Home() {
  return <HomePageClient />;
}