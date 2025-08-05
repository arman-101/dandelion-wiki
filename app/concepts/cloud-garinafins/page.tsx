'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function CloudGarinafinsPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
  const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

  const conceptData: Concept = {
    name: "Cloud-Garinafins",
    image: "/concepts/cloud-garinafins.png", // Placeholder image
    introduction: "A special breed of garinafin that can fly at high altitudes, used for strategic military purposes and representing the advanced technology of the later books in the series.",
    infoBox: {
      "Type": "Advanced Garinafin",
      "Origin": "Lyucu Technology",
      "Purpose": "High-Altitude Military",
      "Related concepts": [
        { text: "Garinafin", link: "/concepts/garinafin" },
        { text: "The Lyucu", link: "/concepts/lyucu" }
      ]
    },
    details: [
      { type: "text" as const, content: "Cloud-Garinafins represent an advanced development in garinafin technology, specifically bred and trained to operate at high altitudes where traditional garinafins cannot reach. This technological advancement gives their users a significant strategic advantage." },
      { type: "text" as const, content: "The development of Cloud-Garinafins demonstrates the ongoing evolution of military technology in the world of Dara, showing how both the Lyucu and the people of Dara continue to innovate and adapt their strategies and capabilities." },
      { type: "text" as const, content: "The strategic use of Cloud-Garinafins in the later conflicts of the series highlights the importance of technological superiority and the role that advanced military capabilities play in determining the outcome of major conflicts." }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <ConceptPageTemplate conceptData={conceptData} />
    </>
  );
} 