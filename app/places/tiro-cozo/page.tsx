'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TiroCozoPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Tiro Cozo",
    image: "/places/tiro-cozo.png", // Placeholder image
    introduction: "A region that becomes important during the final events of the series, Tiro Cozo serves as a strategic location in the ultimate conflicts that determine the future of Dara.",
    infoBox: {
      "Type": "Region",
      "Location": "Dara",
      "Significance": "Final Events Location",
      "First appearance": "Speaking Bones",
      "Related places": [
        { text: "Last Bite", link: "/places/last-bite" },
        { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
        { text: "Sea of Tears", link: "/places/sea-of-tears" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Tiro Cozo is a region with strategic geographical features that make it important during the final events of the series. The area's terrain and position provide advantages for the forces that control it during the ultimate conflicts." }
    ],
    culture: [
      { type: "text" as const, content: "The culture of Tiro Cozo has been shaped by its role in the final events of the series. The local population has developed unique traditions and ways of life that reflect their position at the center of world-changing events." }
    ],
    history: [
      {
        event: "Final Events",
        summary: [
          { type: "text" as const, content: "Tiro Cozo becomes a crucial location during the final events of the series, where the ultimate fate of Dara and its people is determined. The region serves as a focal point for the resolution of long-standing conflicts and the shaping of the world's future." }
        ]
      },
      {
        event: "Strategic Importance",
        summary: [
          { type: "text" as const, content: "The strategic importance of Tiro Cozo during the final conflicts makes it a key objective for various factions. Control of the region provides significant advantages in the ultimate struggle for the future of the world." }
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