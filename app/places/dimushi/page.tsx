'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function DimushiPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Dimushi",
    image: "/places/cocru.png", // Placeholder image
    introduction: "A city that plays a role in the complex political landscape of the Dara empire, Dimushi serves as a center of regional power and influence.",
    infoBox: {
      "Type": "Regional City",
      "Region": "Dara Empire",
      "Significance": "Regional Power Center",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Cocru", link: "/places/cocru" },
        { text: "Kriphi", link: "/places/kriphi" },
        { text: "Ginpen", link: "/places/ginpen" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Dimushi is located in a region that has strategic importance within the Dara empire. The city's position has made it a natural center for regional governance and a key location for political and economic activities." }
    ],
    culture: [
      { type: "text" as const, content: "Dimushi has developed a culture that reflects its role as a regional power center. The city's inhabitants are known for their political awareness and their ability to navigate the complex dynamics of imperial politics." }
    ],
    history: [
      {
        event: "Regional Development",
        summary: [
          { type: "text" as const, content: "Dimushi developed as an important regional center, growing from a smaller settlement into a city that could exert influence over surrounding areas. The city's growth was driven by its strategic location and the opportunities it provided for regional governance." }
        ]
      },
      {
        event: "Political Role",
        summary: [
          { type: "text" as const, content: "During the complex political events of the later books, Dimushi became a significant location where regional interests and imperial politics intersected. The city's importance made it a focal point for political maneuvering and strategic planning." }
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