'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Rin Coda",
    image: "/characters/rin-coda.png",
    introduction: "Rin Coda was Kuni Garu's timid and scholarly childhood friend. He rose to become the Farsight Secretary in the Dandelion Dynasty, a role akin to an intelligence minister, but he was often plagued by self-doubt and the moral compromises of his position.",
    infoBox: {
        aliases: "Farsight Secretary",
        occupation: "Scholar, Farsight Secretary",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Rin is portrayed as nervous, cautious, and bookish, a stark contrast to his bold friend Kuni. He prefers study and quiet contemplation to action. While intelligent and loyal, his gentle nature is often ill-suited to the brutal realities of politics and espionage. He possesses a strong moral compass, which is severely tested by his duties." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "As one of Kuni's oldest friends, Rin was a constant presence from their schoolboy days. He joined Kuni's rebellion and, despite his timid nature, served him loyally. After Kuni became emperor, Rin was appointed Farsight Secretary, overseeing the empire's network of spies and informants." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Rin oversaw the first Grand Examination, a cornerstone of the new dynasty's meritocratic principles." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
                { type: 'text', content: "However, he became deeply entangled in Empress Jia's ruthless political machinations against Marshal Gin Mazoti. Consumed by guilt for his role in the empress's plots and the downfall of an honorable woman, Rin ultimately took his own life, unable to reconcile his duties with his conscience." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 39, link: "/books/the-wall-of-storms#chapter-39" } },
            ]
        },
    ]
};

export default function RinCodaPage() {
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