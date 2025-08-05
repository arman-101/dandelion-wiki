'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Toof",
    image: "/characters/toof.png",
    introduction: "Toof was a Lyucu garinafin pilot who, along with his partner Radia, was captured by Princess Théra's expedition. He eventually defected and joined the Agon resistance, sacrificing his life to save Théra and her family.",
    infoBox: {
        aliases: "The Defector",
        occupation: "Garinafin Pilot",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Male",
        significantOther: { text: "Radia", link: "/characters/radia" },
        affiliation: "Lyucu Empire, Agon Rebellion",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Toof is a skilled and dedicated garinafin pilot who shares a deep bond with his mount, Tana. Initially a loyal Lyucu warrior, his capture and subsequent experiences with the Dara and Agon peoples lead him to question his allegiances. He is a man of honor who ultimately chooses to fight for what he believes is right, even if it means betraying his own people." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Toof was the pilot of the garinafin sent to investigate Théra's fleet. He was captured after Théra's forces used whale song to cripple his city-ship. Aboard the Dara vessel, he and his partner Radia were integrated into the diverse crew and began to form bonds with their former enemies." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
                { type: 'text', content: "He fully committed to the Agon rebellion and fought alongside them. During the Lyucu attack on the Kiri Valley base, he and Radia made the ultimate sacrifice, leading a suicide mission to draw away pursuers, which allowed Théra, Takval, and their children to escape." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
            ]
        },
    ]
};

export default function ToofPage() {
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