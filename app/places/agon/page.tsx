'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function AgonPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Agon",
    image: "/places/ukyu-gonde.png", // Placeholder image
    introduction: "A mysterious people and land from beyond the Wall of Storms, the Agon represent one of the great unknowns in the world of Dara, with their culture and motivations remaining largely enigmatic.",
    infoBox: {
      "Type": "Mysterious Land",
      "Location": "Beyond the Wall of Storms",
      "Significance": "Unknown Civilization",
      "First appearance": "The Wall of Storms",
      "Related places": [
        { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
        { text: "Wall of Storms", link: "/concepts/wall-of-storms" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Little is known about the geography of Agon, as it lies beyond the Wall of Storms, a barrier that has prevented most exploration and contact. The land is shrouded in mystery, with only fragmentary accounts and legends providing any insight into its nature." }
    ],
    culture: [
      { type: "text" as const, content: "The Agon people and their culture remain largely unknown to the people of Dara. What little information exists comes from rare encounters and ancient texts, suggesting a civilization that may be as advanced or even more advanced than the known world." }
    ],
    history: [
      {
        event: "First Contact",
        summary: [
          { type: "text" as const, content: "The first recorded contact with the Agon occurred during the events surrounding the Wall of Storms, when representatives of this mysterious civilization appeared in the known world. Their arrival marked a turning point in the understanding of the world's geography and the existence of other advanced civilizations." }
        ]
      },
      {
        event: "Impact on Dara",
        summary: [
          { type: "text" as const, content: "The presence of the Agon has had profound implications for the people of Dara, challenging their understanding of the world and their place in it. The knowledge that there are other advanced civilizations beyond the known boundaries has forced a reconsideration of Dara's isolation and uniqueness." }
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