'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THE DANDELION CONCEPT ---
const conceptData: Concept = {
    name: "The Dandelion",
    image: "/concepts/dandelion.png",
    introduction: "The dandelion is the central philosophical symbol of Kuni Garu and the Dandelion Dynasty, representing resilience, adaptability, and strength found in common places. It embodies the belief that true power comes not from noble birth or martial prowess, but from the ability to thrive in adversity and transform the world through innovation and compassion.",
    infoBox: {
        "Philosophical Symbol": "Kuni Garu's personal emblem and the foundation of his ruling philosophy",
        "Opposing Philosophy": { text: "The Chrysanthemum", link: "/concepts/chrysanthemum" },
        "Key Proponent": { text: "Kuni Garu", link: "/characters/kuni-garu" },
        "First Mentioned": { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        "Cultural Significance": "Represents the common people and their potential for greatness",
        "Political Impact": "Influenced the establishment of meritocracy and innovation in the Dandelion Dynasty"
    },
    details: [
        { type: 'text', content: "The dandelion philosophy is first introduced by [[Jia Matiza|/characters/jia-matiza]], who teaches [[Kuni Garu|/characters/kuni-garu]] about the plant's remarkable qualities during their courtship. She admires the dandelion for its hardiness, versatility, and resourcefulness - qualities she sees reflected in Kuni's character." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
        { type: 'text', content: " Unlike the noble [[chrysanthemum|/concepts/chrysanthemum]], which represents tradition and aristocratic values, the dandelion is a common flower that grows in the most unlikely places. It can survive harsh conditions, spread its seeds far and wide, and transform barren ground into fields of gold. This resilience and adaptability becomes the foundation of Kuni's approach to leadership and governance." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
        { type: 'text', content: " The dandelion philosophy emphasizes several key principles: the value of common people and their potential for greatness, the importance of innovation and unconventional solutions, the belief that true strength comes from adaptability rather than rigid adherence to tradition, and the conviction that a ruler should serve the people rather than demand their service." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
        { type: 'text', content: " This philosophy directly influences Kuni's policies as emperor, leading to the establishment of the [[Grand Examination|/concepts/grand-examination]] system that selects officials based on merit rather than birth, the promotion of innovation and technological advancement, and a focus on improving the lives of ordinary citizens rather than glorifying the nobility." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
        { type: 'text', content: " The dandelion becomes the official symbol of the Dandelion Dynasty, representing Kuni's vision of a world where the lowly can rise to greatness through their own efforts and where innovation and compassion are valued above tradition and force. It stands in direct contrast to [[Mata Zyndu|/characters/mata-zyndu]]'s chrysanthemum philosophy, creating the central ideological conflict of the series." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
    ]
};

export default function DandelionPage() {
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