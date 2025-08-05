'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Tanto Aragoz",
    image: "/characters/tanto-aragoz.png",
    introduction: "Tanto Aragoz is the eldest son of Princess Théra and Takval Aragoz. Raised in the harsh environment of the Agon rebellion, he is a child of two cultures, embodying the future of the alliance between Dara and the Agon.",
    infoBox: {
        aliases: "None",
        occupation: "Prince",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        relatives: "Princess Théra (mother), Takval Aragoz (father), Rokiri Aragoz (brother), Kuni Garu (grandfather), Jia Matiza (grandmother)",
        affiliation: "Agon Rebellion",
        nationality: "Daran-Agon",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "As a child, Tanto is more Agon than Dara, embracing the warrior culture of his father. He is skilled in the Agon craft of building 'living bones'—intricate, wind-powered mechanical toys. He initially rejects his mother's Dara heritage but represents the potential for a new, blended culture." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 26, link: "/books/the-veiled-throne#chapter-26" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Tanto was born and raised in the secret Agon base in Kiri Valley. He and his brother Rokiri were captured by the Lyucu during Cudyu Roatan's devastating attack on the base. His fate after his capture remains a central question driving the narrative forward." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
            ]
        },
    ]
};

export default function TantoAragozPage() {
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