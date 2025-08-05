'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TheBlossomGangPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
  const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

  const conceptData: Concept = {
    name: "The Blossom Gang",
    image: "/concepts/the-blossom-gang.png", // Placeholder image
    introduction: "A group of resistance fighters who become central to the struggle against Lyucu occupation, representing the hope and determination of the Dara people.",
    infoBox: {
      "Type": "Resistance Group",
      "Affiliation": "Dara Resistance",
      "Significance": "Anti-Lyucu Resistance",
      "Related concepts": [
        { text: "Resistance Movement", link: "/concepts/resistance-movement" },
        { text: "The Dandelion", link: "/concepts/dandelion" }
      ]
    },
    details: [
      { type: "text" as const, content: "The Blossom Gang is a resistance organization that emerges during the Lyucu occupation of Dara, bringing together individuals from various backgrounds who are committed to fighting against the northern invaders and restoring Dara's independence." },
      { type: "text" as const, content: "The group's name reflects the hope and resilience of the Dara people, using the symbolism of blossoms to represent the potential for renewal and rebirth even in the darkest times of occupation and oppression." },
      { type: "text" as const, content: "The Blossom Gang's activities and strategies become central to the resistance movement, demonstrating the power of organized resistance and the importance of unity in the face of overwhelming odds." }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <ConceptPageTemplate conceptData={conceptData} />
    </>
  );
} 