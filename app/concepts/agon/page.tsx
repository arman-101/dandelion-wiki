'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function AgonPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
  const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

  const conceptData: Concept = {
    name: "The Agon",
    image: "/concepts/lyucu-culture.png", // Placeholder image
    introduction: "A mysterious people from beyond the Wall of Storms who play a role in the later events of the series, representing the unknown forces that shape the destiny of Dara.",
    infoBox: {
      "Origin": "Beyond the Wall of Storms",
      "Culture": "Mysterious",
      "Significance": "Unknown Forces",
      "Related concepts": [
        { text: "The Wall of Storms", link: "/concepts/wall-of-storms" },
        { text: "The Lyucu", link: "/concepts/lyucu" }
      ]
    },
    details: [
      { type: "text" as const, content: "The Agon are a mysterious people whose origins and nature remain largely unknown throughout much of the series. Their appearance in the later books introduces new elements of mystery and complexity to the world of Dara." },
      { type: "text" as const, content: "The Agon's relationship to the Lyucu and the people of Dara is complex and often ambiguous, representing the broader theme of unknown forces and hidden knowledge that runs throughout the series." },
      { type: "text" as const, content: "The role of the Agon in the final events of the series adds layers of philosophical and mystical depth to the resolution of the conflicts that have shaped the destiny of Dara and its people." }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <ConceptPageTemplate conceptData={conceptData} />
    </>
  );
} 