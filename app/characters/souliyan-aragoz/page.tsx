'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Souliyan Aragoz",
    image: "/characters/souliyan-aragoz.png",
    introduction: "Souliyan Aragoz was the mother of Takval Aragoz and a wise, respected leader of the Agon resistance. She was a key figure in the early days of the rebellion against the Lyucu in Ukyu-Gondé.",
    infoBox: {
        aliases: "The Matriarch",
        occupation: "Agon Leader",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Female",
        relatives: [
            { text: "Takval Aragoz (son)", link: "/characters/takval-aragoz" },
            { text: "Volyu Aragoz (brother)", link: "/characters/volyu-aragoz" },
            { text: "Tanto Aragoz (grandson)", link: "/characters/tanto-aragoz" },
            { text: "Rokiri Aragoz (grandson)", link: "/characters/rokiri-aragoz" }
        ],
        affiliation: "Agon Rebellion",
        nationality: { text: "Agon", link: "/concepts/agon" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Souliyan is portrayed as a strong and wise matriarch. She is deeply loyal to her people and her family. She is a source of strength and guidance for her son, Takval, and a crucial ally to Princess Théra, helping her navigate the complex politics of the Agon tribes." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 14, link: "/books/the-veiled-throne#chapter-14" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Souliyan's wisdom and courage were instrumental in forging the Agon-Dara alliance." }
            ]
        },
        {
            era: "Matriarch of the Rebellion",
            summary: [
                { type: 'text', content: "Souliyan played a critical role in the success of Théra and Takval's mission. It was she who revealed the treachery of her brother, Volyu, and helped orchestrate the coup that placed her son in leadership of the Agon." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 14, link: "/books/the-veiled-throne#chapter-14" } },
                { type: 'text', content: "She became a respected leader in the burgeoning rebellion. She died heroically during the surprise Lyucu attack on the secret Agon base in Kiri Valley, sacrificing herself to help her grandchildren escape." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
            ]
        },
    ]
};

export default function SouliyanAragozPage() {
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