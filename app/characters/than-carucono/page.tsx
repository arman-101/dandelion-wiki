'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Than Carucono",
    image: "/characters/than-carucono.png",
    introduction: "Than Carucono is a former street performer and one of Kuni Garu's oldest and most loyal friends. Known for his good humor and unwavering support, he becomes a trusted general in the Dandelion army.",
    infoBox: {
        aliases: "None",
        occupation: "Street Performer, General",
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: "Speaking Bones"
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Than is cheerful and optimistic, often providing levity in grim situations. He is not a brilliant strategist like Luan Zya or Gin Mazoti, but he is a reliable and brave commander who excels at inspiring morale. His loyalty to Kuni is absolute, and he represents the strong bonds of friendship that form the foundation of Kuni's inner circle." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Than was a member of Kuni's original bandit crew, joining him in the mountains outside Zudi. He served faithfully throughout the rebellion and the subsequent civil war, always at Kuni's side." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
            ]
        },
        {
            era: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "After Kuni's ascension, Than was made a general and remained a key figure at court. He was part of the 'Swords' faction, representing the old guard who fought in the rebellion. He participated in the drinking party that revealed the court's growing factionalism." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
            ]
        },
    ]
};

export default function ThanCaruconoPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}