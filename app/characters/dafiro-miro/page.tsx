'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Dafiro Miro",
    image: "/characters/dafiro-miro.png",
    introduction: "Dafiro Miro was a thoughtful and wise soldier who, along with his brother Ratho, was one of the first to shed blood in the Dandelion Rebellion. He evolved from a simple soldier into a key double agent and the loyal Captain of the Palace Guards for Emperor Ragin.",
    infoBox: {
        aliases: "Captain Miro",
        occupation: "Soldier, Spy, Captain of the Palace Guards",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Deceased",
        gender: "Male",
        relatives: [
            { text: "Ratho Miro (brother)", link: "/characters/ratho-miro" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Dafiro is the more cautious and thoughtful of the Miro brothers. He possesses a strategic mind and a deep sense of loyalty. He is a keen observer of people and events, which makes him an effective spy and a trusted advisor. Unlike his hot-headed brother, Dafiro is patient and willing to play the long game." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Dafiro and his brother Ratho were corvée laborers who sparked the first uprising by killing their guards and joining Huno Krima's rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
                { type: 'text', content: "During the Chrysanthemum-Dandelion War, he seemingly served Hegemon Mata Zyndu's commander, Kindo Marana. However, he was secretly working as a double agent for Kuni Garu. During Gin Mazoti's surprise attack on Rui, he revealed his true allegiance by killing Marana at a critical moment." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As Captain of the Palace Guards, Dafiro served as Emperor Ragin's secret agent. He was sent to offer the imprisoned Gin Mazoti a chance to escape, an offer her pride forced her to refuse." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 33, link: "/books/the-wall-of-storms#chapter-33" } },
                { type: 'text', content: "He travels to Tan Adü to request the aid of the cruben-riders, where he discovers their 'fire tube' technology. In the final battle at Zathin Gulf, he fought bravely alongside Gin Mazoti, dying in the duel against Pékyu Tenryo." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 54, link: "/books/the-wall-of-storms#chapter-54" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
    ]
};

export default function DafiroMiroPage() {
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