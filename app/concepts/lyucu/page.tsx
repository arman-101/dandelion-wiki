'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function LyucuPage() {
  const conceptData: Concept = {
    name: "The Lyucu",
    image: "/concepts/lyucu-culture.png", // Placeholder image
    introduction: "The fierce northern people who invade Dara, bringing their own culture, technology, and way of life that challenges and transforms the established order of the Dandelion Dynasty.",
    infoBox: {
      "Origin": "Ukyu & Gondé",
      "Culture": "Warrior Society",
      "Technology": "Garinafins, Advanced Military",
      "Related concepts": [
        { text: "Garinafin", link: "/concepts/garinafin" },
        { text: "The Wall of Storms", link: "/concepts/wall-of-storms" },
        { text: "Lyucu Culture", link: "/concepts/lyucu-culture" }
      ]
    },
    details: [
      { type: "text" as const, content: "The Lyucu are a fierce and technologically advanced people from the northern continent of Ukyu, separated from Dara by the seemingly impassable Wall of Storms. Their society is built around military prowess, with garinafins serving as their primary military advantage." },
      { type: "text" as const, content: "Lyucu culture emphasizes strength, discipline, and conquest, with a hierarchical social structure that values martial skill and strategic thinking. Their invasion of Dara represents a fundamental challenge to the established order and cultural values of the Dandelion Dynasty." },
      { type: "text" as const, content: "The Lyucu bring with them not only military might but also a different worldview and set of values that force the people of Dara to question their own traditions and assumptions. This cultural clash becomes a central theme of the later books in the series." }
    ]
  };

  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
  const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <ConceptPageTemplate conceptData={conceptData} />
    </>
  );
} 