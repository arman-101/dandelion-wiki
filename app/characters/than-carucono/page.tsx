'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Than Carucono",
    image: "/characters/than-carucono.png",
    introduction: "Than Carucono was a cheerful former stable master who became a loyal and surprisingly competent general and admiral for Kuni Garu. His good humor and steadfastness made him a beloved member of the Dandelion Court.",
    infoBox: {
        aliases: "General Than",
        occupation: "Stable Master, General, Admiral",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Than is characterized by his boundless optimism and cheerful disposition, even in the darkest of times. He is a reliable and loyal friend to Kuni, always ready with a supportive word. Though not a born commander, his practical skills and loyalty earned him a high rank in the Dandelion armies." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Than Carucono was one of Kuni's earliest followers, joining him during his time as a bandit. He served throughout the rebellion and the civil war, eventually rising to the rank of general and admiral. He was part of the inner circle that helped Kuni establish his rule in Pan after its capture." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "In the years of peace, Than remains a loyal member of Kuni's court. He is present at the drinking party of old guards, where he is shown to be content with the new era of peace." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'text', content: "During the war against the Lyucu, he discovers the bodies of Luan Zya and Oga Kidosu, a grim task that underscores the high cost of the conflict." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 51, link: "/books/the-wall-of-storms#chapter-51" } },
            ]
        },
    ]
};

export default function ThanCaruconoPage() {
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