'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR GARINAFIN ---
const conceptData: Concept = {
    name: "Garinafin",
    image: "/concepts/garinafin.png",
    introduction: "Garinafin are colossal, whale-like beasts of burden and war, domesticated by the Lyucu people. These city-leveling behemoths are the ultimate expression of the Lyucu's martial power and their mastery of animal husbandry.",
    infoBox: {
        Type: "War Beast / Siege Engine",
        Homeland: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        Appearance: "Enormous, six-legged, whale-like creatures",
        KeyUse: "Invasion of Dara",
    },
    details: [
        { type: 'text', content: "The garinafin are the Lyucu's greatest weapon. These multi-ton creatures are fitted with immense howdahs that serve as mobile fortresses, capable of carrying entire troop complements. Their sheer size and strength allow them to smash through city walls and fortifications with ease, making conventional defenses almost useless against them." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/the-wall-of-storms#chapter-46" } },
        { type: 'text', content: "The Lyucu share a deep, almost spiritual bond with their mounts, a connection that the people of Dara struggle to comprehend. The arrival of the garinafin on the shores of Dara signals a new and terrifying kind of warfare, forcing the Dandelion Dynasty to seek radical new strategies and technologies to counter a threat that cannot be met with swords and shields alone." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 35, link: "/books/the-wall-of-storms#chapter-35" } },
    ]
};

export default function GarinafinPage() {
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