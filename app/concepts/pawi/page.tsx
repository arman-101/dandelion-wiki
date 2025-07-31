'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR PAWI ---
const conceptData: Concept = {
    name: "Pawi",
    image: "/concepts/pawi.png",
    introduction: "The pawi are the animal companions and physical manifestations of the gods of Dara. Each of the eight major deities is associated with a specific pawi, which acts as their agent, symbol, and a channel for their influence in the mortal world.",
    infoBox: {
        Type: "Divine Animal Companions",
        AssociatedWith: { text: "The Gods of Dara", link: "/gods" },
        Examples: "Kiji's Falcon, Lutho's Sea Turtle, Fithowéo's Wolf",
    },
    details: [
        { type: 'text', content: "The pawi are more than mere pets; they are extensions of their respective gods' domains and personalities. For example, Kiji, the god of air, is represented by the swift Mingén falcon, while Tazu, the chaotic god of the sea, is represented by the shark. These animals are often revered and considered sacred by the mortals who worship that particular god." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/wall-of-storms#chapter-6" } },
        { type: 'text', content: "The gods can observe the mortal world through the eyes of their pawi and sometimes use them to interact with mortals, though this is rare. The tale of the Calendrical Dozen, a contest to find the hidden gods, revolved around mortals trying to lure out the deities by appealing to the nature of their pawi." },
    ]
};

export default function PawiPage() {
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