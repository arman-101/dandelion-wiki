'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function SliyusaKiPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Sliyusa Ki",
    image: "/places/pan.png", // Placeholder image
    introduction: "A region that becomes important during the Lyucu occupation period, Sliyusa Ki serves as a strategic location in the complex political and military landscape of the later books.",
    infoBox: {
      "Type": "Region",
      "Location": "Dara",
      "Significance": "Strategic Military Location",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Taten", link: "/places/taten" },
        { text: "Lurodia Tanta", link: "/places/lurodia-tanta" },
        { text: "Kiri Valley", link: "/places/kiri-valley" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Sliyusa Ki is a region with strategic geographical features that make it important for military and political control. The area's terrain and position provide advantages for both defensive and offensive operations." }
    ],
    culture: [
      { type: "text" as const, content: "The culture of Sliyusa Ki has been shaped by its strategic importance and the various forces that have sought to control the region. The local population has developed resilience and adaptability in response to the changing political landscape." }
    ],
    history: [
      {
        event: "Lyucu Occupation",
        summary: [
          { type: "text" as const, content: "During the Lyucu occupation of Dara, Sliyusa Ki becomes a key location for military operations and political control. The region's strategic value makes it a focus of attention for both the occupiers and resistance forces." }
        ]
      },
      {
        event: "Resistance Activities",
        summary: [
          { type: "text" as const, content: "Sliyusa Ki serves as a base for resistance activities against the Lyucu occupation. The region's geography and the support of the local population make it an ideal location for guerrilla warfare and underground resistance operations." }
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