'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Goran Pira",
    image: "/characters/goran-pira.png",
    introduction: "Goran Pira was the Imperial Chatelain and lifelong friend to Emperor Mapidéré. Publicly the most loyal servant of the Xana Dynasty, he was secretly a master manipulator who orchestrated its downfall from within as an act of ultimate, patient vengeance.",
    infoBox: {
        aliases: "The Chatelain, Prime Minister",
        occupation: "Imperial Chatelain, Prime Minister of Dara",
        placeOfBirth: { text: "Xana", link: "/places/xana" },
        status: "Deceased",
        gender: "Male",
        affiliation: "House of Xana, Xana Empire",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Pira is portrayed as a calm, observant, and unassuming figure, the perfect loyal servant. This placid exterior concealed a brilliant, cold, and calculating mind consumed by a singular, decades-long quest for revenge." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
        { type: 'text', content: "His defining characteristic is his immense patience and his ability to manipulate people and events subtly over long periods. He is a master of the long game, willing to endure years of servitude to achieve his final goal." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 11, link: "/books/the-grace-of-kings#chapter-11" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Goran Pira's story is one of singular, patient revenge, carried out from the very heart of the empire he sought to destroy." }
            ]
        },
        {
            era: "The Long Vengeance",
            summary: [
                { type: 'text', content: "Pira's loyalty to Emperor Mapidéré was shattered years before the story begins when the Emperor claimed Pira's lover, Lady Maing, for himself. After Maing gave birth to Pira's son, the ruthless emperor had both mother and child murdered in front of him. This transformed Pira's devotion into an unquenchable thirst for vengeance." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 11, link: "/books/the-grace-of-kings#chapter-11" } },
                { type: 'text', content: "He conspired with Lügo Crupo to place the incompetent Prince Loshi on the throne as Emperor Erishi, knowing it would destabilize the empire and hasten its ruin." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'text', content: "Later, seeing Crupo's power growing too strong, Pira subtly manipulated Emperor Erishi, framed Crupo for treason, and had him executed. Pira was then named Prime Minister, gaining full control of the empire and taking the final step in his secret plan for its complete destruction from within." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 25, link: "/books/the-grace-of-kings#chapter-25" } },
            ]
        },
    ]
};

export default function GoranPiraPage() {
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