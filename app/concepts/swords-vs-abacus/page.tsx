'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR SWORDS VS. ABACUS ---
const conceptData: Concept = {
    name: "Swords vs. Abacus",
    image: "/concepts/swords-vs-abacus.png",
    introduction: "The 'Swords versus Abacus' represents the central political and philosophical conflict within the Dandelion Court. It is the struggle between the military old guard who won the rebellion ('Swords') and the new class of civil bureaucrats who manage the empire ('Abacus').",
    infoBox: {
        Type: "Political Conflict",
        // FIX: Moved 'Leader' inside the quotes for the object keys
        'Swords Leader': { text: "Consort Risana", link: "/characters/consort-risana" },
        'Abacus Leader': { text: "Empress Jia", link: "/characters/jia-matiza" },
        CoreDebate: "Heroic Individualism vs. Systemic Governance",
    },
    details: [
        { type: 'text', content: "The 'Swords' faction, led by Consort Risana and including generals like Gin Mazoti and the emperor's old friends, believed the empire's strength came from the heroic, martial virtues of its founders. They valued loyalty, honor, and the leadership of exceptional individuals." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/wall-of-storms#chapter-8" } },
        { type: 'text', content: "The 'Abacus' faction, led by Empress Jia and supported by scholars and ministers, argued that a stable empire could not be run on heroism alone. They championed the creation of laws, systems, and a professional bureaucracy to ensure the fair and efficient administration of Dara, a vision embodied by the Grand Examination." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 21, link: "/books/wall-of-storms#chapter-21" } },
        { type: 'text', content: "This fundamental disagreement shaped the politics of Emperor Ragin's reign and was reflected in the divergent upbringings of his sons, the martial Prince Phyro ('Sword') and the scholarly Prince Timu ('Abacus')." },
    ]
};

export default function SwordsVsAbacusPage() {
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