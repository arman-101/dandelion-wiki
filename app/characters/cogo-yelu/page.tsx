'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Cogo Yelu",
    image: "/characters/cogo-yelu.png",
    introduction: "Cogo Yelu was a brilliant and practical administrator who served as Kuni Garu's first Prime Minister. A loyal friend and a genius of public policy, his innovative solutions were crucial in establishing the administrative foundation of the Dandelion Dynasty and, years later, he became the moral anchor that held it together.",
    infoBox: {
        aliases: "Prime Minister Yelu",
        occupation: "Administrator, Prime Minister of Dara",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Cogo is a grounded, intelligent, and endlessly practical man. He excels at finding simple, elegant solutions to complex administrative problems. He is deeply loyal to Kuni Garu and shares his desire to create a government that serves the common people. He is not a warrior but a builder, his genius lying in the creation of stable and effective systems." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Cogo Yelu's administrative genius was evident from the earliest days of Kuni Garu's rise." }
            ]
        },
        {
            era: "Architect of the State",
            summary: [
                { type: 'text', content: "An early friend of Kuni's, Cogo helped him secure a respectable job, allowing Kuni to marry Jia Matiza. After Kuni captured Zudi, Cogo became his chief administrator. His most famous innovation was a lottery system where purchase receipts served as tickets, a brilliant scheme that solved the new government's revenue problems." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
                { type: 'text', content: "He followed Kuni into exile on Dasu, overseeing the practical work of transforming the barren island into a thriving state." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/the-grace-of-kings#chapter-36" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "As Prime Minister, Cogo Yelu remained a steadying hand, eventually becoming the conscience of the empire during the turbulent regency of Empress Jia." }
            ]
        },
        {
            era: "The Conscience of the Empire",
            summary: [
                { type: 'text', content: "Cogo often tried to navigate the tense politics between Empress Jia and Emperor Phyro, at one point masterfully outmaneuvering Jia in court to aid Phyro's plans." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
                { type: 'text', content: "When the full extent of Jia's crimes was revealed, Cogo led the ministers in a 'bloodless rebellion' in the Grand Audience Hall, renouncing his service to the regent and effectively deposing her. He was instrumental in offering the throne to Princess Fara and became the key figure in confronting Jia and securing a peaceful future for Dara." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 50, link: "/books/speaking-bones#chapter-50" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 52, link: "/books/speaking-bones#chapter-52" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}