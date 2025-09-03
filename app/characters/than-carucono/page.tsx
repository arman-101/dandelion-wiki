'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Than Carucono",
    image: "/characters/than-carucono.png",
    introduction: "Than Carucono was a cheerful former stable master who became a loyal and surprisingly competent general and admiral for Kuni Garu. His good humor and steadfastness made him a beloved member of the Dandelion Court.",
    infoBox: {
        aliases: "General Than, Admiral Than",
        occupation: "Stable Master, General, Admiral",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Than is characterized by his boundless optimism and cheerful disposition, even in the darkest of times. He is a reliable and loyal friend to Kuni, always ready with a supportive word. Though not a born commander, his practical skills and loyalty earned him a high rank in the Dandelion armies." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Than was one of Kuni's earliest followers, serving faithfully throughout the rebellion and civil war and rising to the rank of general and admiral." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "During the war against the Lyucu, Than served as a reliable commander under Marshal Gin Mazoti. He led the ground assault on Kriphi during the counter-invasion and later made the grim discovery of the bodies of Luan Zya and Oga Kidosu." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 43, link: "/books/the-wall-of-storms#chapter-43" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 51, link: "/books/the-wall-of-storms#chapter-51" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "As a veteran Admiral, Than commanded Emperor Phyro's new airship fleet in the final war against the Lyucu occupation." }
            ]
        },
        {
            era: "Final Command",
            summary: [
                { type: 'text', content: "During the climactic Battle of Crescent Island, Admiral Than Carucono was killed in action when his flagship, the *Sword Chrysanthemum*, was destroyed in the fighting. He died serving the dynasty he helped to build." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 24, link: "/books/speaking-bones#chapter-24" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}