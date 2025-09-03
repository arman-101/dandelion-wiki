'use client';

import PageTemplate, { convertConceptData } from '../../components/layout/PageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { ConceptNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR CRUBEN ---
const conceptData: Concept = {
    name: "Cruben",
    image: "/concepts/cruben.png",
    introduction: "Cruben are massive, horned, sea-turtle-like beasts native to the remote southern island of Tan Adü. The people of the island have developed the unique ability to ride them, using them as powerful and unpredictable naval mounts.",
    infoBox: {
        Type: "War Beast / Naval Mount",
        Homeland: { text: "Tan Adü", link: "/places/tan-adu" },
        Appearance: "Giant, horned sea turtles",
        KeyUse: "Surprise naval assault on Pan",
    },
    details: [
        { type: 'text', content: "The cruben are enormous, ancient creatures of the sea. The inhabitants of Tan Adü share a deep, symbiotic bond with them, able to communicate with and guide the beasts into a formidable and unconventional naval force." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
        { type: 'text', content: "Their decisive role in the Dandelion Rebellion came when Luan Zya recruited the cruben-riders for Kuni Garu's army. Their ability to navigate stealthily was instrumental in the successful capture of the Imperial capital, Pan. Later, Gin Mazoti and Luan Zya would develop mechanical, submersible vessels disguised as cruben for naval warfare." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 44, link: "/books/the-grace-of-kings#chapter-44" } },
    ]
};

export default function CrubenPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    return (
        <>
            <ConceptNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={convertConceptData(conceptData)} infoBoxTitle="Concept Information" />
        </>
    );
}