'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "King Mocri",
    image: "/characters/king-mocri.png",
    introduction: "King Mocri was the proud and honorable king of Gan and a key member of the Tiro Alliance during the Dandelion Rebellion. He later became an antagonist to Mata Zyndu during the Hegemon's reign.",
    infoBox: {
        aliases: "King of Gan",
        occupation: "King of Gan",
        placeOfBirth: { text: "Gan", link: "/places/gan" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Kingdom of Gan, Tiro Alliance",
        nationality: { text: "Gan", link: "/places/gan" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mocri is depicted as a proud and traditional nobleman. He believes strongly in the old aristocratic order and the honor codes that govern it. He is a brave warrior and a respected leader among the Tiro kings, though his pride can sometimes lead to conflict." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "As King of Gan, Mocri was a central figure in the Grand Council of War, where the restored Tiro states bickered over leadership. During the Battle of Wolf's Paw, his forces, along with those from Faça, betrayed their allies mid-battle, though Mata Zyndu's prowess still secured a victory." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "During Mata Zyndu's reign as Hegemon, King Mocri rebelled against his rule. The storyteller in the Three-Legged Jug recounts the legendary duel between Mata and Mocri, suggesting Mocri was eventually defeated and killed by the Hegemon. This story inspires the children of Emperor Ragin." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
                 { type: 'ref', data: { book: "The Grace of Kings", chapter: 45, link: "/books/the-grace-of-kings#chapter-45" } },
            ]
        },
    ]
};

export default function KingMocriPage() {
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