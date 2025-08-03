'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function KriphiPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Kriphi",
    image: "/places/gan.png", // Placeholder image
    introduction: "A major city that becomes important during the later events of the series, Kriphi serves as a center of commerce, culture, and political activity in the Dara empire.",
    infoBox: {
      "Type": "Major City",
      "Region": "Dara Empire",
      "Significance": "Commercial and Cultural Center",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Gan", link: "/places/gan" },
        { text: "Pan", link: "/places/pan" },
        { text: "Zudi", link: "/places/zudi" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Kriphi is located in a strategic position within the Dara empire, likely near major trade routes and waterways. The city's location has made it a natural center for commerce and cultural exchange between different regions of the empire." }
    ],
    culture: [
      { type: "text" as const, content: "As a major urban center, Kriphi has developed a rich and diverse culture that reflects the cosmopolitan nature of the Dara empire. The city is home to merchants, scholars, artists, and people from all walks of life, creating a vibrant and dynamic cultural environment." }
    ],
    history: [
      {
        event: "Rise to Prominence",
        summary: [
          { type: "text" as const, content: "Kriphi emerged as an important city during the later periods of the Dara empire, growing from a smaller settlement into a major urban center. The city's growth was driven by its strategic location and the opportunities it provided for trade and cultural exchange." }
        ]
      },
      {
        event: "Role in Later Events",
        summary: [
          { type: "text" as const, content: "During the complex political events of the later books, Kriphi became a significant location where various factions and interests converged. The city's importance made it a focal point for political maneuvering and strategic planning." }
        ]
      }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <PlacePageTemplate placeData={placeData} />
    </>
  );
} 