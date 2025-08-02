'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR CORVÉE LABOR ---
const conceptData: Concept = {
    name: "Corvée Labor",
    image: "/concepts/corvee-labor.png",
    introduction: "Corvée labor was a system of state-sponsored forced, unpaid labor imposed by the Xana Empire upon its conquered subjects. This brutal practice was the primary catalyst for the widespread discontent that erupted into the Dandelion Rebellion.",
    infoBox: {
        Type: "Forced Labor System",
        ImplementedBy: { text: "Xana Empire", link: "/places/xana" },
        UsedFor: "Imperial construction projects (e.g., Pan)",
        Consequence: "Sparked the Dandelion Rebellion",
    },
    details: [
        { type: 'text', content: "To build his grand capital city of Pan and other monumental projects, Emperor Mapidéré conscripted hundreds of thousands of men from across the Tiro states. These men were forced to leave their homes and farms to work under harsh conditions for no pay. The system was administered with brutal efficiency and any dissent was ruthlessly crushed." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
        { type: 'text', content: "The suffering and resentment caused by corvée labor created a powder keg of rebellion. When Kuni Garu's own corvée detail deserted, it was the inciting incident of his outlaw career and a microcosm of the wider uprising that would soon engulf the islands. The abolition of corvée was one of the first and most popular acts of the new Dandelion Dynasty." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
    ]
};

export default function CorveeLaborPage() {
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