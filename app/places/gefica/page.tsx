'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function GeficaPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Géfica",
    image: "/places/gefica.png", 
    introduction: "A region with unique cultural and historical significance, Géfica becomes important during the later events of the series and plays a role in the complex political landscape.",
    infoBox: {
      "Type": "Region",
      "Location": "Dara",
      "Significance": "Cultural and Historical",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Gan", link: "/places/gan" },
        { text: "Kriphi", link: "/places/kriphi" },
        { text: "Zathin Gulf", link: "/places/zathin-gulf" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Géfica is a region with distinctive geographical features that contribute to its cultural and historical importance. The landscape provides both natural resources and strategic advantages for the people who inhabit the area." }
    ],
    culture: [
      { type: "text" as const, content: "The culture of Géfica is characterized by its unique traditions and way of life, shaped by the region's geography and its interactions with neighboring areas. The local population has developed distinct customs and practices that reflect their environment and history." }
    ],
    history: [
      {
        event: "Early History",
        summary: [
          { type: "text" as const, content: "Géfica has a long history as a region within the Dara empire, with its people contributing to the cultural and economic diversity of the unified realm. The region's unique characteristics have made it a valuable part of the empire." }
        ]
      },
      {
        event: "Role in Later Events",
        summary: [
          { type: "text" as const, content: "During the complex political events of the later books, Géfica becomes an important location where various factions and interests converge. The region's cultural and historical significance makes it a focal point for political maneuvering and strategic planning." }
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