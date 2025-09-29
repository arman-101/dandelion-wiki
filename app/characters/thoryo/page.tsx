


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import ThoryoClient from './ThoryoClient';

const characterData: Character = {
    name: "Thoryo",
    introduction: "Thoryo is a mysterious, feral girl discovered as a stowaway aboard Princess Théra's flagship. Possessing an incredible and seemingly supernatural gift for mimicry, she becomes a linguistic prodigy, a key ally, and a revered, almost mythical figure in the Agon rebellion.",
    infoBox: {
        aliases: "The Mimic, The Wolf-Thane",
        occupation: "Stowaway, Rebel",
        placeOfBirth: "Unknown",
        status: "Deceased",
        gender: "Female",
        affiliation: "Dara Expeditionary Force, Agon Rebellion",
        nationality: "Unknown",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Initially feral and non-verbal, Thoryo's defining trait is her ability to perfectly mimic any sound, allowing her to learn languages at an astonishing rate. She has a childlike innocence and a unique perspective on the world, often providing moments of simple, profound insight. It is heavily implied that she is not entirely human, possibly being a mortal incarnation of a god or spirit." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 11, link: "/books/the-veiled-throne#chapter-11" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Thoryo was found in the hold of the submersible *Dissolver of Sorrows*. Her presence acted as a catalyst for communication, forcing the diverse crew to learn each other's languages as they taught her. During the expedition's trek through the desert, it was her childlike insight that inspired Théra to invent a solar still." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 11, link: "/books/the-veiled-throne#chapter-11" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 12, link: "/books/the-veiled-throne#chapter-12" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Thoryo was instrumental in Théra's recovery from grief. She later infiltrated the Lyucu capital of Taten disguised as the 'Wolf-Thane,' a clever ruse that positioned rebels to spark the uprising that killed Pékyu Cudyu. Her final act was one of ultimate sacrifice, giving her life to save Princess Théra from an assassination attempt during the Battle of the Boneyard." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 1, link: "/books/speaking-bones#chapter-1" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 13, link: "/books/speaking-bones#chapter-13" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 31, link: "/books/speaking-bones#chapter-31" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function ThoryoPage() {
    return <ThoryoClient characterData={characterData} />;
}