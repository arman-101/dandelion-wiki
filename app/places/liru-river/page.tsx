'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function LiruRiverPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Liru River",
    image: "/places/cocru.png", // Placeholder image
    introduction: "A major river system that flows through multiple states in Dara, the Liru River serves as both a vital transportation route and a natural boundary between different regions of the empire.",
    infoBox: {
      "Type": "Major River",
      "Region": "Multiple Tiro States",
      "Significance": "Transportation and Boundary",
      "First appearance": "The Grace of Kings",
      "Related places": [
        { text: "Cocru", link: "/places/cocru" },
        { text: "Zudi", link: "/places/zudi" },
        { text: "Pan", link: "/places/pan" }
      ]
    },
    geography: [
      { type: "text" as const, content: "The Liru River is one of the major waterways of Dara, flowing through multiple Tiro States and serving as a natural boundary between different regions. Its waters provide irrigation for agriculture and serve as a vital transportation route for goods and people." }
    ],
    culture: [
      { type: "text" as const, content: "The Liru River has played a significant role in the cultural and economic development of the regions it flows through. River communities have developed unique traditions and ways of life, and the river has been a source of inspiration for poets and artists throughout Dara's history." }
    ],
    history: [
      {
        event: "Early Settlement",
        summary: [
          { type: "text" as const, content: "The Liru River valley was one of the earliest areas of human settlement in Dara, with communities establishing themselves along its banks to take advantage of the fertile soil and abundant water resources. These early settlements would eventually grow into the major cities and states of the empire." }
        ]
      },
      {
        event: "Strategic Importance",
        summary: [
          { type: "text" as const, content: "Throughout Dara's history, the Liru River has been strategically important for military campaigns and trade. Control of key crossing points and river ports has often determined the outcome of conflicts, and the river continues to be a vital artery for the empire's economy." }
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