'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TatenPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Taten",
    image: "/places/pan.png", // Placeholder image
    introduction: "A region that plays a role in the complex political landscape of the later books, Taten becomes significant during the Lyucu occupation and the resistance movement.",
    infoBox: {
      "Type": "Region",
      "Location": "Dara",
      "Significance": "Political and Strategic",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Lurodia Tanta", link: "/places/lurodia-tanta" },
        { text: "Sliyusa Ki", link: "/places/sliyusa-ki" },
        { text: "Taten-ryo-alvovo", link: "/places/taten-ryo-alvovo" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Taten is a region within the territories of Dara that becomes strategically important during the later events of the series. Its geographical position makes it a key location for political and military activities." }
    ],
    culture: [
      { type: "text" as const, content: "The culture of Taten reflects the complex interactions between the original Dara inhabitants and the various forces that seek to control the region. The local population has developed unique traditions and ways of life shaped by their strategic position." }
    ],
    history: [
      {
        event: "Lyucu Occupation",
        summary: [
          { type: "text" as const, content: "During the Lyucu occupation of Dara, Taten becomes an important location where the dynamics of conquest and resistance play out. The region's strategic value makes it a focus of attention for both the occupiers and the resistance movement." }
        ]
      },
      {
        event: "Resistance Activities",
        summary: [
          { type: "text" as const, content: "Taten serves as a base for resistance activities against the Lyucu occupation. The region's geography and the support of the local population make it an ideal location for guerrilla warfare and underground resistance operations." }
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