'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function SeaOfTearsPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Sea of Tears",
    image: "/places/arulugi.png", // Placeholder image
    introduction: "A body of water that becomes significant during the later events of the series, representing the emotional and symbolic weight of the conflicts that shape the destiny of Dara.",
    infoBox: {
      "Type": "Body of Water",
      "Region": "Dara",
      "Significance": "Symbolic and Strategic",
      "First appearance": "The Wall of Storms",
      "Related places": [
        { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
        { text: "Kiri Valley", link: "/places/kiri-valley" },
        { text: "Roro Hills", link: "/places/roro-hills" }
      ]
    },
    geography: [
      { type: "text" as const, content: "The Sea of Tears is a body of water whose name reflects the emotional and symbolic significance it holds in the later events of the series. Its geographical position makes it an important location in the military and political conflicts." }
    ],
    culture: [
      { type: "text" as const, content: "The name 'Sea of Tears' carries deep cultural and symbolic meaning, representing the suffering and sacrifices made during the conflicts that shape the destiny of Dara and its people." }
    ],
    history: [
      {
        event: "Symbolic Significance",
        summary: [
          { type: "text" as const, content: "The Sea of Tears serves as a powerful symbol throughout the series, representing the emotional cost of the conflicts and the sacrifices made by the people of Dara in their struggle for freedom and survival." }
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