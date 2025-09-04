'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
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
        relatives: [
            { text: "Princess Théra (mother)", link: "/characters/princess-thera" },
            { text: "Takval Aragoz (father)", link: "/characters/takval-aragoz" },
            { text: "Tanto Aragoz (brother)", link: "/characters/tanto-aragoz" },
            { text: "Kuni Garu (grandfather)", link: "/characters/kuni-garu" },
            { text: "Jia Matiza (grandmother, by adoption)", link: "/characters/jia-matiza" }
        ],
        affiliation: "Agon Rebellion",
        nationality: "Daran-Agon",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "As a young boy, Rokiri, along with his brother Tanto, is more immersed in the Agon culture of his father than the Dara culture of his mother. He is a survivor of the Kiri Valley massacre and a key part of the 'new people' Théra seeks to build." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Rokiri was born in the secret Agon base in Kiri Valley. After the base was destroyed, he was separated from his parents and taken by Lyucu forces, before being rescued by the Agon defectors Toof and Radia." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 31, link: "/books/the-veiled-throne#chapter-31" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Rokiri was among the children who found refuge in the ancient 'City of Ghosts,' helping to build a new settlement there. He was eventually reunited with his mother, Théra." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 41, link: "/books/speaking-bones#chapter-41" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}