import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Home | The Dandelion Dynasty Wiki',
  description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series, The Dandelion Dynasty. Explore books, characters, places, gods, concepts, and maps from the world of Dara.',
  openGraph: {
    title: 'Home | The Dandelion Dynasty Wiki',
    description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series, The Dandelion Dynasty. Explore books, characters, places, gods, concepts, and maps from the world of Dara.',
    url: 'https://dandelion-wiki.vercel.app',
  },
};

export default function Home() {
  return <HomePageClient />;
}