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
    introduction: "The Chrysanthemum is the philosophy of Mata Zyndu and the symbol of his cause. It represents the ideals of the old aristocracy: nobility, tradition, and an unbending, perfect honor that must be cultivated and preserved against the chaos of the world.",
    infoBox: {
        Symbolizes: "Tradition, Nobility, Rigid Honor, Power of the Elite",
        AssociatedWith: { text: "Mata Zyndu", link: "/characters/mata-zyndu" },
        Antonym: { text: "The Dandelion", link: "/concepts/dandelion" },
    },
    details: [
        { type: 'text', content: "In direct contrast to the common dandelion, the chrysanthemum is a flower that requires immense care, a specific environment, and expert cultivation to achieve its perfect, symmetrical beauty. This reflects Mata Zyndu's worldview: that leadership and honor are not common things, but qualities inherent to a select few who are born and bred for the task. It is a philosophy that values the past and believes in a natural, hierarchical order to society." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/grace-of-kings#chapter-33" } },
        { type: 'text', content: "Mata's adherence to this ideal was both his greatest strength and his fatal flaw. It gave him immense personal courage and the loyalty of the other Tiro nobles, but it also made him inflexible, unable to adapt to Kuni Garu's unconventional tactics. He could not comprehend a world where a 'weed' could defeat a perfectly cultivated flower, a blindness that ultimately led to his downfall." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/grace-of-kings#chapter-50" } },
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