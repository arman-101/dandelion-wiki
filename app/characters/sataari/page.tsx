'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Sataari",
    image: "/characters/sataari.png",
    introduction: "Sataari is a young Agon shaman who becomes a spiritual and military leader of the resistance against the Lyucu. She is the guardian of her people's ancient history and a key figure in rediscovering their lost heritage.",
    infoBox: {
        aliases: "The Shaman",
        occupation: "Shaman, Rebel Leader",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Female",
        affiliation: "Agon Rebellion",
        nationality: { text: "Agon", link: "/concepts/agon" },
        firstAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Sataari is deeply connected to the spiritual traditions of the Agon people. She is wise beyond her years and possesses a quiet strength that inspires her followers. She is a visionary, able to see the connections between the past and the future, and guide her people on a path to rediscovering their heritage." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "After surviving the Kiri Valley massacre, Sataari and the Dara scholar Razutana Pon became the guardians of the surviving children. She led them on a grueling journey to the sacred 'City of Ghosts,' Taten-ryo-alvovo, ensuring their survival." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "At the City of Ghosts, Sataari was instrumental in the discovery of the Agon's true past. By exploring the ancient barrows with Tanto Aragoz, she realized her people's nomadic myths were a misremembering of their history as a settled, agricultural society. She later helped invent the 'speaking bones' technology, which allowed them to hear the voices of their ancestors and broadcast a new message of peace." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 7, link: "/books/speaking-bones#chapter-7" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 45, link: "/books/speaking-bones#chapter-45" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 51, link: "/books/speaking-bones#chapter-51" } },
            ]
        },
    ]
};

export default function SataariPage() {
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