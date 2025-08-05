'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Thoryo",
    image: "/characters/thoryo.png",
    introduction: "Thoryo is a mysterious, feral girl discovered as a stowaway aboard Princess Théra's flagship. Possessing an incredible and seemingly supernatural gift for mimicry, she becomes a linguistic prodigy and a catalyst for cultural exchange among the diverse crew.",
    infoBox: {
        aliases: "The Mimic",
        occupation: "Stowaway",
        placeOfBirth: "Unknown",
        status: "Alive",
        gender: "Female",
        affiliation: "Dara Expeditionary Force, Agon Rebellion",
        nationality: "Unknown",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Initially feral and unable to speak, Thoryo's defining trait is her ability to perfectly mimic any sound she hears, from whale song to human speech in any language. This allows her to learn languages at an astonishing rate. She has a childlike innocence and a unique perspective on the world, often providing moments of simple, profound insight that cut through complex problems. It is heavily implied that she is not entirely human, possibly being a mortal incarnation of a god or spirit." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 11, link: "/books/the-veiled-throne#chapter-11" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 12, link: "/books/the-veiled-throne#chapter-12" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Thoryo was found in the hold of the submersible *Dissolver of Sorrows* after the battle with the Lyucu city-ship. Her presence acted as a catalyst for communication, forcing the Dara, Agon, and Lyucu survivors to learn each other's languages as they taught her. During the expedition's grueling trek through the desert, it was her childlike insight that inspired Théra to invent a solar still, saving them from dehydration." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 11, link: "/books/the-veiled-throne#chapter-11" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 12, link: "/books/the-veiled-throne#chapter-12" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Thoryo continues to be a unique and important member of the rebellion, her mysterious nature and simple wisdom providing a contrast to the endless war and political maneuvering. Her final words in the saga, 'Life is a journey, not a destination,' encapsulate one of the series' central themes." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 58, link: "/books/speaking-bones#chapter-58" } },
            ]
        },
    ]
};

export default function ThoryoPage() {
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