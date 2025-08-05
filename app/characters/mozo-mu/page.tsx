'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Mozo Mu",
    image: "/characters/mozo-mu.png",
    introduction: "Mozo Mu is a young, prodigiously talented chef and a descendant of the legendary Suda Mu. She is forced to compete on behalf of the ruthless merchant Tiphan Huto in the Ginpen restaurant contest.",
    infoBox: {
        aliases: "The Prodigy Chef",
        occupation: "Chef",
        placeOfBirth: { text: "Haan", link: "/places/haan" },
        status: "Alive",
        gender: "Female",
        affiliation: "Treasure Chest Restaurant",
        nationality: { text: "Haan", link: "/places/haan" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mozo is a young girl with an incredible, innate talent for cooking. Her dishes are complex, artistic, and deeply rooted in history and literature. She is a pawn in Tiphan Huto's schemes, a brilliant artist whose talent is being exploited for commercial gain. She shows great integrity when she reveals the truth of her situation." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 19, link: "/books/the-veiled-throne#chapter-19" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 39, link: "/books/the-veiled-throne#chapter-39" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Mozo Mu was the secret weapon of the Treasure Chest restaurant in its contest against the Splendid Urn. Her culinary genius dazzled the judges in the first round. However, it was later revealed that she and her family were being held hostage by Tiphan Huto and forced to compete against their will. After her plight was revealed, the owner of the Splendid Urn, Widow Wasu, conceded the contest rather than win through the exploitation of a child." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 39, link: "/books/the-veiled-throne#chapter-39" } },
            ]
        },
    ]
};

export default function MozoMuPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}