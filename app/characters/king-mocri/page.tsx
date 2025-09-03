'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "King Mocri",
    image: "/characters/king-mocri.png",
    introduction: "King Mocri was the proud and honorable king of Gan and a key member of the Tiro Alliance during the Dandelion Rebellion.",
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
                { type: 'text', content: "As a leader of the restored Tiro states, King Mocri's actions highlighted the deep-seated rivalries that plagued the rebellion." }
            ]
        },
        {
            era: "A King of the Old Order",
            summary: [
                { type: 'text', content: "As King of Gan, Mocri was a central figure in the Grand Council of War, which was paralyzed by infighting. During the critical Battle of Wolf's Paw, his forces from Gan, along with those from Faça, betrayed their allies mid-battle and switched sides to support the Empire." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "King Mocri's fate after the rebellion becomes the subject of a famous tale." }
            ]
        },
        {
            era: "A Legendary Duel",
            summary: [
                { type: 'text', content: "Years later, a storyteller in Pan recounts the legendary duel between Hegemon Mata Zyndu and King Mocri, who had evidently rebelled against Mata's rule. This tale of honor from a bygone era had become a popular story, inspiring the children of Emperor Ragin." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}