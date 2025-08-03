'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function KiriValleyPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Kiri Valley",
    image: "/places/mount-kiji.png", // Placeholder image
    introduction: "A valley that becomes significant during the later events of the series, representing the natural barriers and strategic locations that shape the conflicts of Dara.",
    infoBox: {
      "Type": "Valley",
      "Region": "Dara",
      "Significance": "Strategic and Natural",
      "First appearance": "The Wall of Storms",
      "Related places": [
        { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
        { text: "Sea of Tears", link: "/places/sea-of-tears" },
        { text: "Roro Hills", link: "/places/roro-hills" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Kiri Valley is a geographical feature characterized by its natural barriers and strategic position, making it an important location during the military conflicts and political struggles of the later books." }
    ],
    culture: [
      { type: "text" as const, content: "The valley's cultural significance stems from its role as a natural boundary and its importance in the military and political events that shape the destiny of the people who inhabit the surrounding regions." }
    ],
    history: [
      {
        event: "Strategic Importance",
        summary: [
          { type: "text" as const, content: "Throughout the series, Kiri Valley serves as a strategic location where key military and political events unfold, reflecting the importance of geography in shaping the course of history." }
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