'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function ArucuroTocuaBeastsPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
  const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

  const conceptData: Concept = {
    name: "Arucuro Tocua Beasts",
    image: "/concepts/arucuro-tocua-beasts.png", // Placeholder image
    introduction: "Massive walking fortresses made of ancient bones and woven cloud, powered by the silkmotic force and created by the Agon rebels as their most powerful weapon against the Lyucu.",
    infoBox: {
      "Type": "Walking Fortress",
      "Origin": "Agon Technology",
      "Purpose": "Anti-Lyucu Warfare",
      "Related concepts": [
        { text: "The Agon", link: "/concepts/agon" },
        { text: "Silkmotic Force", link: "/concepts/silkmotic-force" }
      ]
    },
    details: [
      { type: "text" as const, content: "Arucuro Tocua Beasts are massive walking fortresses created by the Agon rebels, combining ancient technology with innovative engineering. These constructs are made from the bones of ancient beasts, hides of woven cloud, and powered by silkmotic engines, representing the pinnacle of Agon technological achievement." },
      { type: "text" as const, content: "The development of Arucuro Tocua Beasts demonstrates the Agon's mastery of ancient 'living bone' technology and their ability to adapt traditional methods to create devastating new weapons. These constructs become the Agon's most powerful weapon in their war against the Lyucu." },
      { type: "text" as const, content: "The strategic use of Arucuro Tocua Beasts in the Agon rebellion highlights the importance of technological innovation and the role that advanced military capabilities play in determining the outcome of major conflicts, as well as the Agon's determination to reclaim their homeland." }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <ConceptPageTemplate conceptData={conceptData} />
    </>
  );
}
