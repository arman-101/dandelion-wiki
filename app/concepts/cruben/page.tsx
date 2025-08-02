'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
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
        { type: 'text', content: "The cruben are enormous, ancient creatures of the sea. While viewed as 'savage' by the people of the Tiro states, the inhabitants of Tan Adü share a deep, symbiotic bond with them. They are able to communicate with and guide the beasts, turning them into a formidable and unconventional naval force." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
        { type: 'text', content: "Their decisive role in the Dandelion Rebellion came when Luan Zya, who had once lived among the people of Tan Adü, recruited the cruben-riders for Kuni Garu's army. Their ability to navigate stealthily and strike from the sea was instrumental in the shocking and successful capture of the Imperial capital, Pan." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
    ]
};

export default function CrubenPage() {
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