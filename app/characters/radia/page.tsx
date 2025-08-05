'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Radia",
    image: "/characters/radia.png",
    introduction: "Radia was a Lyucu warrior and the companion of the pilot Toof. Captured alongside him by Théra's expedition, she defected to the Agon resistance and heroically sacrificed her life for their cause.",
    infoBox: {
        aliases: "The Defector",
        occupation: "Warrior",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Female",
        significantOther: { text: "Toof", link: "/characters/toof" },
        affiliation: "Lyucu Empire, Agon Rebellion",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Radia is a capable Lyucu warrior, loyal to her partner Toof. Like him, her experiences as a captive among the Dara and Agon lead her to reconsider her loyalties. She is courageous and ultimately chooses to give her life to protect the leaders of the rebellion." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Radia was part of the crew of the Lyucu city-ship that pursued Théra's fleet. She was captured along with Toof after the ship was crippled." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
                { type: 'text', content: "She joined the Agon resistance and became a trusted member of the rebellion. During the destructive Lyucu attack on the secret base in Kiri Valley, she and Toof volunteered for a suicide mission to act as decoys, drawing away the enemy garinafins and ensuring the escape of Théra and her family." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
            ]
        },
    ]
};

export default function RadiaPage() {
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