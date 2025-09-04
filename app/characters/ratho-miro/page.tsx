'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Ratho Miro",
    image: "/characters/ratho-miro.png",
    introduction: "Ratho Miro was a fierce and impulsive warrior who, along with his brother Dafiro, was one of the first to shed blood in the Dandelion Rebellion. He became a loyal and devoted follower of Mata Zyndu.",
    infoBox: {
        aliases: "The Younger Miro",
        occupation: "Soldier, Commander",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Deceased",
        gender: "Male",
        relatives: [
            { text: "Dafiro Miro (brother)", link: "/characters/dafiro-miro" }
        ],
        affiliation: "Cocru Army, Hegemon's Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Ratho is the hot-headed and passionate counterpart to his thoughtful older brother, Dafiro. He is quick to anger and quick to act, a fierce warrior who is deeply loyal to those he respects. He is a true believer in Mata Zyndu's philosophy of martial honor and aristocratic rule." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 23, link: "/books/the-grace-of-kings#chapter-23" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Ratho Miro's story is one of unwavering loyalty to his chosen leader, Mata Zyndu, from the start of the rebellion to its bitter end." }
            ]
        },
        {
            era: "A Hegemon's Man",
            summary: [
                { type: 'text', content: "Ratho and his brother Dafiro were corvée laborers who sparked the first uprising by killing their guards and joining Huno Krima's rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
                { type: 'text', content: "He became a devoted follower of Mata Zyndu, admiring his strength and honor. He served Mata faithfully throughout the rebellion and the subsequent civil war. Ratho was one of the last loyal followers to stand with Mata in his final, suicidal charge, where he died fighting for his Hegemon." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
    ]
};

export default function RathoMiroPage() {
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