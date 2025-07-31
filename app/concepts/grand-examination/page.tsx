'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THE GRAND EXAMINATION ---
const conceptData: Concept = {
    name: "The Grand Examination",
    image: "/concepts/grand-examination.png",
    introduction: "The Grand Examination is a revolutionary system of testing established by the Dandelion Dynasty to select civil servants. It is designed to replace the old system of aristocratic privilege with a meritocracy based on intellect and skill, open to all citizens regardless of birth.",
    infoBox: {
        EstablishedBy: { text: "Jia Matiza & Luan Zya", link: "/characters/jia-matiza" },
        Purpose: "Meritocratic selection of officials",
        KeyAdvocate: { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" },
    },
    details: [
        { type: 'text', content: "Proposed by Luan Zya and implemented by Empress Jia, the Grand Examination was a cornerstone of the new dynasty's philosophy. Candidates from across Dara were brought to the capital to be tested on a wide range of subjects. The goal was to find the most capable people to run the empire, breaking the grip of the old noble families." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 15, link: "/books/wall-of-storms#chapter-15" } },
        { type: 'text', content: "The first Examination became a major political event, exposing deep-seated regional prejudices and highlighting the tension between tradition and innovation. Zomi Kidosu's radical performance, where she criticized the test's reliance on classical logograms as a barrier to the poor, forced the court to confront the system's inherent biases. Despite its flaws, the Examination represented a fundamental shift in how power and authority were legitimized in Dara." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 16, link: "/books/wall-of-storms#chapter-16" } },
    ]
};

export default function GrandExaminationPage() {
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