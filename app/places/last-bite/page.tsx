'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function LastBitePage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Last Bite",
    image: "/places/pan.png", // Placeholder image
    introduction: "A location that becomes significant during the final conflicts of the series, Last Bite represents a crucial turning point in the struggle for the future of Dara.",
    infoBox: {
      "Type": "Strategic Location",
      "Location": "Dara",
      "Significance": "Final Conflict Location",
      "First appearance": "Speaking Bones",
      "Related places": [
        { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
        { text: "Sea of Tears", link: "/places/sea-of-tears" },
        { text: "Kiri Valley", link: "/places/kiri-valley" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Last Bite is a location with unique geographical features that make it strategically important during the final conflicts of the series. The area's terrain and position provide advantages for the forces that control it." }
    ],
    culture: [
      { type: "text" as const, content: "The cultural significance of Last Bite stems from its role in the final events of the series. The location becomes a symbol of the ultimate struggle between the forces that seek to shape the future of Dara." }
    ],
    history: [
      {
        event: "Final Conflict",
        summary: [
          { type: "text" as const, content: "Last Bite becomes the site of a crucial battle or confrontation during the final events of the series. The outcome of events at this location has profound implications for the future of Dara and its people." }
        ]
      },
      {
        event: "Symbolic Significance",
        summary: [
          { type: "text" as const, content: "The name 'Last Bite' carries symbolic meaning, representing the final opportunity for the various factions to achieve their goals and shape the destiny of the world. The location becomes a focal point for the resolution of long-standing conflicts." }
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