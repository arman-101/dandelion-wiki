'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function KigoYezuPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Kigo Yezu",
    image: "/places/kigo-yezu.png", // Placeholder image
    introduction: "A region that plays a role in the complex political dynamics of the later books, Kigo Yezu becomes significant during the Lyucu occupation and the resistance movement.",
    infoBox: {
      "Type": "Region",
      "Location": "Dara",
      "Significance": "Political and Strategic",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Taten", link: "/places/taten" },
        { text: "Lurodia Tanta", link: "/places/lurodia-tanta" },
        { text: "Sliyusa Ki", link: "/places/sliyusa-ki" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Kigo Yezu is a region within the territories of Dara that becomes strategically important during the later events of the series. Its geographical position makes it a key location for political and military activities." }
    ],
    culture: [
      { type: "text" as const, content: "The culture of Kigo Yezu reflects the complex interactions between the original Dara inhabitants and the various forces that seek to control the region. The local population has developed unique traditions and ways of life shaped by their strategic position." }
    ],
    history: [
      {
        event: "Lyucu Occupation",
        summary: [
          { type: "text" as const, content: "During the Lyucu occupation of Dara, Kigo Yezu becomes an important location where the dynamics of conquest and resistance play out. The region's strategic value makes it a focus of attention for both the occupiers and the resistance movement." }
        ]
      },
      {
        event: "Political Maneuvering",
        summary: [
          { type: "text" as const, content: "Kigo Yezu serves as a location where various political factions and interests converge during the complex events of the later books. The region's importance makes it a focal point for political maneuvering and strategic planning." }
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