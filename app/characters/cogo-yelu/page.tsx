'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Cogo Yelu",
    image: "/characters/cogo-yelu.png",
    introduction: "Cogo Yelu was a brilliant and practical administrator who served as Kuni Garu's first Prime Minister. A loyal friend and a genius of public policy, his innovative solutions were crucial in establishing the administrative foundation of the Dandelion Dynasty.",
    infoBox: {
        aliases: "Prime Minister Yelu",
        occupation: "Administrator, Prime Minister of Dara",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Cogo is portrayed as a grounded, intelligent, and endlessly practical man. He excels at finding simple, elegant solutions to complex administrative problems. He is deeply loyal to Kuni Garu and shares his desire to create a government that serves the common people. He is not a warrior but a builder, his genius lying in the creation of stable and effective systems." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Cogo was an early friend of [[Kuni Garu|/characters/kuni-garu]], helping him secure a job as a corvée guard which allowed Kuni to marry [[Jia Matiza|/characters/jia-matiza]]." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
                { type: 'text', content: "After Kuni captured [[Zudi|/places/zudi]], Cogo became his chief administrator. His most famous innovation was a lottery system where purchase receipts served as tickets, a brilliant scheme that turned every citizen into a de facto tax collector and solved the new government's revenue problems." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
                { type: 'text', content: "He followed Kuni into exile on [[Dasu|/places/dasu]], where he oversaw the practical work of transforming the barren island into a productive and thriving state." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/the-grace-of-kings#chapter-36" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As Prime Minister, Cogo Yelu was a steadying hand in the Dandelion Court, overseeing the Grand Examination alongside Rin Coda and managing the day-to-day affairs of the empire. He remained a loyal and essential part of the dynasty's foundation." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
            ]
        },
    ]
};

export default function CogoYeluPage() {
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