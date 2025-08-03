'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THE CHRYSANTHEMUM ---
const conceptData: Concept = {
    name: "The Chrysanthemum",
    image: "/concepts/chrysanthemum.png",
    introduction: "The Chrysanthemum represents the philosophy of Mata Zyndu, embodying tradition, nobility, and unbending honor in the face of adversity.",
    infoBox: {
      "Origin": "Mata Zyndu's Philosophy",
      "Culture": "Cocru Nobility",
      "Significance": "Symbol of traditional values and honor",
      "Related concepts": [
        { text: "The Dandelion", link: "/concepts/dandelion" },
        { text: "Mata Zyndu", link: "/characters/mata-zyndu" },
        { text: "Cocru", link: "/places/cocru" }
      ]
    },
    details: [
      { type: "text" as const, content: "The Chrysanthemum is the last flower to bloom against the winter, representing defiance, nobility, and the refusal to bend to harsh circumstances. This symbolism perfectly captures Mata Zyndu's philosophy and character." },
      { type: "text" as const, content: "Unlike the common dandelion that represents Kuni Garu's philosophy of resilience and adaptability, the chrysanthemum embodies traditional values, noble birth, and an unbending code of honor that refuses to compromise even in the face of overwhelming odds." },
      { type: "text" as const, content: "Mata Zyndu's identification with the chrysanthemum reflects his background as the last heir of a once-great noble clan, his commitment to vengeance and honor, and his refusal to adapt his principles even when they lead to his downfall." },
      { type: "text" as const, content: "The contrast between the chrysanthemum and the dandelion represents the central philosophical conflict of the series: tradition versus innovation, nobility versus meritocracy, and rigid honor versus pragmatic survival." }
    ]
};

export default function ChrysanthemumPage() {
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