'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Rokiri Aragoz",
    image: "/characters/rokiri-aragoz.png",
    introduction: "Rokiri Aragoz is the second son of Princess Théra and Takval Aragoz. Like his older brother, he is a child of two cultures, born into the heart of the Agon rebellion against the Lyucu.",
    infoBox: {
        aliases: "None",
        occupation: "Prince",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        relatives: "Princess Théra (mother), Takval Aragoz (father), Tanto Aragoz (brother), Kuni Garu (grandfather), Jia Matiza (grandmother)",
        affiliation: "Agon Rebellion",
        nationality: "Daran-Agon",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "As a young boy, Rokiri, along with his brother Tanto, is more immersed in the Agon culture of his father than the Dara culture of his mother. He is skilled in building 'living bones,' the traditional mechanical toys of the Agon." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 26, link: "/books/the-veiled-throne#chapter-26" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Rokiri was born in the secret Agon base in Kiri Valley. He was captured by Lyucu forces under the command of his uncle, Cudyu Roatan, during the surprise attack that destroyed the base. His and his brother's capture becomes a primary motivation for Théra's continued rebellion." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
            ]
        },
    ]
};

export default function RokiriAragozPage() {
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