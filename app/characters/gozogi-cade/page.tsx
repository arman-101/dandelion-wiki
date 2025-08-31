'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Gozogi Cade",
    image: "/characters/gozogi-cade.png",
    introduction: "Gozogi Cade was a former street tough from Zudi and one of [[Kuni Garu|/characters/kuni-garu]]'s oldest and most loyal friends. He served as a dependable, if unspectacular, general throughout the Dandelion Rebellion and the subsequent civil war.",
    infoBox: {
        aliases: "General Cade",
        occupation: "Bandit, General",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Gozogi is a practical and down-to-earth individual, a reflection of his street-level origins. He lacks the strategic brilliance of [[Gin Mazoti|/characters/gin-mazoti]] or the scholarly intellect of [[Rin Coda|/characters/rin-coda]], but he makes up for it with unwavering loyalty and common-sense leadership. He is a steadfast friend who remains by [[Kuni Garu|/characters/kuni-garu]]'s side through all his trials." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Gozogi was one of [[Kuni Garu|/characters/kuni-garu]]'s original followers when he became an outlaw in the Er-Mé Mountains. He followed Kuni through the rebellion against the Xana, the war against [[Mata Zyndu|/characters/mata-zyndu]], and into the founding of the new dynasty. While not a central player in the grand strategies of the wars, he was a reliable commander and a key part of Kuni's inner circle of old friends who helped keep the emperor grounded." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
    ]
};

export default function GozogiCadePage() {
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