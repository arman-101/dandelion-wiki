'use client';

import PageTemplate, { convertConceptData } from '../../components/layout/PageTemplate';
import { ConceptNavigation } from '../../components/layout/PageNavigation';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THE DANDELION CONCEPT ---
const conceptData: Concept = {
    name: "The Dandelion",
    image: "/concepts/dandelion.png",
    introduction: "The dandelion is the central philosophical symbol of Kuni Garu and the Dandelion Dynasty, representing resilience, adaptability, and strength found in common places. It embodies the belief that true power comes not from noble birth, but from the ability to thrive in adversity and transform the world through innovation and compassion.",
    infoBox: {
        "Type": "Philosophical Symbol",
        "Opposing Philosophy": { text: "The Chrysanthemum", link: "/concepts/chrysanthemum" },
        "Key Proponent": { text: "Kuni Garu", link: "/characters/kuni-garu" },
        "First Explained By": { text: "Jia Matiza", link: "/characters/jia-matiza" },
    },
    details: [
        { type: 'text', content: "The dandelion philosophy is first introduced by Jia Matiza, who teaches Kuni Garu about the plant's remarkable qualities. She admires the dandelion for its hardiness, versatility, and resourcefulness—qualities she sees reflected in Kuni." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
        { type: 'text', content: "Unlike the noble chrysanthemum, which represents tradition and aristocratic values, the dandelion is a common flower that grows everywhere. This resilience becomes the foundation of Kuni's approach to leadership." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
        { type: 'text', content: "The philosophy emphasizes the value of common people, the importance of innovation, and the belief that a ruler should serve the people. This directly influences Kuni's policies, such as the Grand Examination, which selects officials based on merit rather than birth. At his coronation, he reaffirms his identity by singing a song celebrating the dandelion." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
    ]
};

export default function DandelionPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };
    
    const pageData = convertConceptData(conceptData);

    return (
        <>
            <ConceptNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={pageData} infoBoxTitle="Concept Information" />
        </>
    );
}