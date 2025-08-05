'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "The Sword-Saint",
    image: "/characters/the-sword-saint.png",
    introduction: "The Sword-Saint is a legendary, near-mythical warrior from the remote monasteries of Eseeran Nomnny. She is the master who trains Aya Mazoti, transforming her from a disgraced princess into a formidable commander.",
    infoBox: {
        aliases: "The Master of Eseeran Nomnny",
        occupation: "Warrior, Teacher",
        placeOfBirth: { text: "Eseeran Nomnny", link: "/places/eseeran-nomnny" },
        status: "Alive",
        gender: "Female",
        affiliation: "Monasteries of Eseeran Nomnny",
        nationality: { text: "Eseeran", link: "/places/eseeran-nomnny" },
        firstAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "The Sword-Saint is a figure of immense authority and skill. Her training methods are brutal and demanding, focusing as much on spiritual and mental discipline as on physical prowess. She is a master of the philosophy of the martial arts, teaching her students to find strength in humility and to understand the deeper meaning of combat." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 6, link: "/books/speaking-bones#chapter-6" } },
    ],
    history: [
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "After her humiliating first command, Aya Mazoti sought out the legendary Sword-Saint. In the remote mountains of Eseeran Nomnny, Aya underwent a grueling training regimen. The Sword-Saint's tutelage was the crucible that forged Aya into a true warrior, stripping away her pride and rebuilding her as a skilled and disciplined commander, worthy of her heritage." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 6, link: "/books/speaking-bones#chapter-6" } },
            ]
        },
    ]
};

export default function TheSwordSaintPage() {
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