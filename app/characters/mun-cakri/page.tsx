'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Mün Çakri",
    image: "/characters/mun-cakri.png",
    introduction: "Mün Çakri is a former butcher from Zudi who becomes one of Kuni Garu's most loyal and formidable followers. Known for his immense strength and unwavering loyalty, he serves as Kuni's unofficial bodyguard and a steadfast general in the Dandelion Court.",
    infoBox: {
        aliases: "The Butcher",
        occupation: "Butcher, General",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mün is a physically powerful man whose skills with carving knives translate seamlessly to the battlefield. He is a man of simple tastes and deep loyalty. While not a strategist, his common sense, courage, and fierce devotion to Kuni make him an invaluable asset. He is content with his position and has no ambition beyond serving his friend and emperor." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 34, link: "/books/the-grace-of-kings#chapter-34" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Mün Çakri's most notable early act was saving Kuni Garu's life at Mata Zyndu's treacherous victory banquet in the ruins of Pan. When an assassin attempted to kill Kuni during a sword dance, Mün used his shield and meat-carving skills to intervene, demonstrating his fierce loyalty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 34, link: "/books/the-grace-of-kings#chapter-34" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "In the years of peace, Mün remains a key figure in Kuni's inner circle. At a drinking party, he is shown to be one of the few old guards who is genuinely content with his life, enjoying the peace his service helped to create and showing no resentment towards the new class of bureaucrats, unlike some of his peers." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
            ]
        },
    ]
};

export default function MunCakriPage() {
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