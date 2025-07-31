'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "King Jizu",
    image: "/characters/king-jizu.png",
    introduction: "King Jizu was a humble fisherman who was elevated to the throne of Rima during the Dandelion Rebellion. His reign was brief, but his final act of defiance made him a martyr and a powerful symbol for the rebel cause.",
    infoBox: {
        aliases: "None",
        occupation: "Fisherman, King of Rima",
        status: "Deceased",
        gender: "Male",
        affiliation: "Tiro Rebellion",
        nationality: { text: "Rima", link: "/places/rima" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Jizu is a simple and honest man, unaccustomed to power and courtly intrigue. He is a reluctant king, chosen more for his lineage than his ability to lead. Despite his weakness as a ruler, he possesses a deep well of courage and a strong sense of duty to his people." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/grace-of-kings#chapter-15" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "After Rima declared its independence, Jizu was found and crowned king. His forces were quickly overwhelmed by the veteran Imperial General Tanno Namen. Betrayed by his own commanders and facing certain defeat, King Jizu refused to surrender. Instead, he set himself on fire in his throne room, an act of martyrdom that shamed his enemies and inspired the other rebels to fight on with renewed determination." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/grace-of-kings#chapter-15" } },
            ]
        },
    ]
};

export default function KingJizuPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}