'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function WorldsEdgeMountainsPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "World's Edge Mountains",
    image: "/places/mount-kiji.png", // Placeholder image
    introduction: "A formidable mountain range that serves as a natural barrier and strategic location during the later events of the series, representing the geographical challenges that shape the conflicts of Dara.",
    infoBox: {
      "Type": "Mountain Range",
      "Region": "Dara",
      "Significance": "Natural Barrier and Strategic",
      "First appearance": "The Wall of Storms",
      "Related places": [
        { text: "Kiri Valley", link: "/places/kiri-valley" },
        { text: "Sea of Tears", link: "/places/sea-of-tears" },
        { text: "Roro Hills", link: "/places/roro-hills" }
      ]
    },
    geography: [
      { type: "text" as const, content: "The World's Edge Mountains form a formidable natural barrier that plays a crucial role in the military and political events of the later books. Their rugged terrain and strategic position make them a key location in the conflicts that shape the destiny of Dara." }
    ],
    culture: [
      { type: "text" as const, content: "The mountains hold cultural significance as both a natural boundary and a symbol of the challenges that must be overcome. Their presence in the landscape reflects the broader themes of struggle and perseverance that run throughout the series." }
    ],
    history: [
      {
        event: "Strategic Importance",
        summary: [
          { type: "text" as const, content: "Throughout the series, the World's Edge Mountains serve as a strategic location where key military and political events unfold, reflecting the importance of geography in shaping the course of history and the outcome of conflicts." }
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