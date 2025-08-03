'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function ThocoPassPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Thoco Pass",
    image: "/places/rima.png", // Placeholder image
    introduction: "A strategic mountain pass that connects different regions of Dara, Thoco Pass has been a crucial route for trade, military campaigns, and cultural exchange throughout the empire's history.",
    infoBox: {
      "Type": "Mountain Pass",
      "Region": "Mountainous Regions",
      "Significance": "Strategic Route",
      "First appearance": "The Grace of Kings",
      "Related places": [
        { text: "Rima", link: "/places/rima" },
        { text: "Faça", link: "/places/faca" },
        { text: "Cocru", link: "/places/cocru" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Thoco Pass is located in the mountainous regions of Dara, providing a vital connection between different valleys and regions. The pass is characterized by its challenging terrain and strategic position, making it a natural chokepoint for any military or trade movement." }
    ],
    culture: [
      { type: "text" as const, content: "The communities that have developed around Thoco Pass have unique cultures shaped by their position as gatekeepers of this important route. These communities have traditions of hospitality and trade, but also of defense and vigilance, as control of the pass has often meant control of regional commerce." }
    ],
    history: [
      {
        event: "Early Trade Routes",
        summary: [
          { type: "text" as const, content: "Thoco Pass was originally developed as a trade route, allowing merchants and travelers to move between different regions of Dara. The pass became a vital artery for the exchange of goods, ideas, and culture between the various Tiro States." }
        ]
      },
      {
        event: "Military Significance",
        summary: [
          { type: "text" as const, content: "Throughout Dara's history, control of Thoco Pass has been strategically crucial for military campaigns. Armies that could secure the pass could control the flow of troops and supplies between regions, making it a key objective in many conflicts." }
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