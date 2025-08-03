'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function RoroHillsPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Roro Hills",
    image: "/places/rima.png", // Placeholder image
    introduction: "A geographical feature that plays a role in the final events of the series, the Roro Hills serve as a strategic location during the ultimate conflicts that determine the future of Dara.",
    infoBox: {
      "Type": "Geographical Feature",
      "Location": "Dara",
      "Significance": "Strategic Location",
      "First appearance": "Speaking Bones",
      "Related places": [
        { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
        { text: "Kiri Valley", link: "/places/kiri-valley" },
        { text: "Sea of Tears", link: "/places/sea-of-tears" }
      ]
    },
    geography: [
      { type: "text" as const, content: "The Roro Hills are a geographical feature characterized by their rolling terrain and strategic position. The hills provide natural advantages for defensive operations and serve as a key location during military conflicts." }
    ],
    culture: [
      { type: "text" as const, content: "The cultural significance of the Roro Hills stems from their role in the final events of the series. The hills become a symbol of the ultimate struggle between the forces that seek to shape the future of Dara." }
    ],
    history: [
      {
        event: "Final Conflicts",
        summary: [
          { type: "text" as const, content: "The Roro Hills become a crucial location during the final conflicts of the series, where the ultimate fate of Dara and its people is determined. The hills serve as a focal point for the resolution of long-standing conflicts." }
        ]
      },
      {
        event: "Strategic Importance",
        summary: [
          { type: "text" as const, content: "The strategic importance of the Roro Hills during the final events makes them a key objective for various factions. Control of the hills provides significant advantages in the ultimate struggle for the future of the world." }
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