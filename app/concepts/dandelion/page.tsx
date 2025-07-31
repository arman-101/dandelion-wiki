'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THE DANDELION ---
const conceptData: Concept = {
    name: "The Dandelion",
    image: "/concepts/dandelion.png",
    introduction: "The Dandelion is the core philosophy of Kuni Garu and the symbol of his dynasty. It represents the idea that strength can be found in what is common, resilient, and underestimated, and that true power grows from the people.",
    infoBox: {
        Symbolizes: "Resilience, Humility, Pragmatism, Power of the Common Folk",
        AssociatedWith: { text: "Kuni Garu", link: "/characters/kuni-garu" },
        Antonym: { text: "The Chrysanthemum", link: "/concepts/chrysanthemum" },
    },
    details: [
        { type: 'text', content: "The philosophy of the Dandelion was first articulated by Jia Matiza, who compared Kuni Garu's spirit to the hardy flower. Unlike the noble chrysanthemum, which is beautiful but fragile and requires careful cultivation, the dandelion is a common weed that can thrive anywhere, even cracking through paving stones. It is adaptable, spreads its seeds far and wide, and is impossible to eradicate." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/grace-of-kings#chapter-4" } },
        { type: 'text', content: "This philosophy guided Kuni Garu's actions as a leader. He surrounded himself not with nobles, but with talented commoners like butchers, street performers, and dockworkers. He favored pragmatic, unconventional solutions over rigid traditions. His entire approach to statecraft was based on the idea that an empire built on the support of the common people, like a field of dandelions, would be more enduring than one built on the authority of a few noble houses." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/grace-of-kings#chapter-41" } },
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