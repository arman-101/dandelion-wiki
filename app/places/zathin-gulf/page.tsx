'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function ZathinGulfPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Zathin Gulf",
    image: "/places/gan.png", // Placeholder image
    introduction: "A significant body of water with strategic and economic importance, the Zathin Gulf serves as a vital maritime route and a natural boundary between different regions of the Dara archipelago.",
    infoBox: {
      "Type": "Maritime Gulf",
      "Region": "Dara Archipelago",
      "Significance": "Maritime Trade Route",
      "First appearance": "The Wall of Storms",
      "Related places": [
        { text: "Gan", link: "/places/gan" },
        { text: "Wolf's Paw", link: "/places/wolfs-paw" },
        { text: "Kishi Channel", link: "/places/kishi-channel" }
      ]
    },
    geography: [
      { type: "text" as const, content: "The Zathin Gulf is a large body of water that forms a natural boundary between different parts of the Dara archipelago. The gulf's waters are navigable and have served as an important maritime route for trade and travel between the various islands and coastal regions." }
    ],
    culture: [
      { type: "text" as const, content: "The communities that have developed around the Zathin Gulf have maritime cultures shaped by their relationship with the sea. These communities are known for their seafaring traditions, fishing practices, and their role in facilitating trade and cultural exchange between different regions." }
    ],
    history: [
      {
        event: "Maritime Trade Development",
        summary: [
          { type: "text" as const, content: "The Zathin Gulf became an important maritime trade route as the Dara empire developed. The gulf's navigable waters made it possible for merchants and travelers to move between different parts of the archipelago, facilitating the exchange of goods, ideas, and culture." }
        ]
      },
      {
        event: "Strategic Importance",
        summary: [
          { type: "text" as const, content: "Throughout Dara's history, control of the Zathin Gulf has been strategically important for maritime power and trade. The gulf's position has made it a key objective for naval campaigns and a vital artery for the empire's maritime commerce." }
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