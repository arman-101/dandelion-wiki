'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function NokidaPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Nokida",
    image: "/places/pan.png", // Placeholder image
    introduction: "A settlement that becomes significant during the later events of the series, representing the changing political and cultural landscape of Dara.",
    infoBox: {
      "Type": "Settlement",
      "Region": "Dara",
      "Significance": "Political and Cultural",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Ginpen", link: "/places/ginpen" },
        { text: "Kriphi", link: "/places/kriphi" },
        { text: "Dimushi", link: "/places/dimushi" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Nokida is a settlement located within the territories of Dara, characterized by its strategic position and the role it plays in the political developments of the later books in the series." }
    ],
    culture: [
      { type: "text" as const, content: "The culture of Nokida reflects the complex interactions between the original Dara inhabitants and the Lyucu occupiers, creating a unique blend of traditions and practices." }
    ],
    history: [
      {
        event: "Lyucu Occupation",
        summary: [
          { type: "text" as const, content: "During the Lyucu occupation of Dara, Nokida becomes an important location where the dynamics of conquest and resistance play out, reflecting the broader struggles of the occupied territories." }
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