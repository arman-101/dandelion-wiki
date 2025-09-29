


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import SotoZynduClient from './SotoZynduClient';

const characterData: Character = {
    name: "Soto Zyndu",
    introduction: "Soto Zyndu is the politically brilliant aunt of Mata Zyndu. Long thought dead after faking her own demise to escape the Xana, she re-emerged as a wise and influential advisor to Empress Jia and the imperial children, shaping the future of the Dandelion Dynasty from the shadows.",
    infoBox: {
        aliases: "Soto the Housekeeper",
        occupation: "Noblewoman, Housekeeper, Imperial Advisor",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Alive",
        gender: "Female",
        relatives: [
            { text: "Dazu Zyndu (father)", link: "" },
            { text: "Phin Zyndu (brother)", link: "/characters/phin-zyndu" },
            { text: "Mata Zyndu (nephew)", link: "/characters/mata-zyndu" }
        ],
        affiliation: "House of Zyndu, Dandelion Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Soto appears as an unassuming and preternaturally wise older woman. She possesses a profound understanding of politics, power, and human nature. She is calm, patient, and an exceptional teacher, able to convey complex political lessons through simple metaphors and guidance. Her wisdom is practical and deeply insightful, focusing on the long-term consequences of actions." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/the-grace-of-kings#chapter-32" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 11, link: "/books/the-wall-of-storms#chapter-11" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Long believed to have committed suicide to escape the Xana purge, Soto Zyndu survived and lived in obscurity. Years later, she entered the service of Jia Matiza, disguised as a simple housekeeper. She became a close confidante and political mentor to Jia, advising her to embrace her power and helping to repair her fractured marriage with Kuni." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/the-grace-of-kings#chapter-32" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 37, link: "/books/the-grace-of-kings#chapter-37" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "In the imperial court, Soto took on the role of advisor to the imperial children, teaching Princess Théra in particular to see the hidden power struggles beneath the surface of official events. Later, in a moment of political genius, she orchestrated the public spectacle that convinced Gin Mazoti to retake command of the army against the Lyucu." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 11, link: "/books/the-wall-of-storms#chapter-11" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 52, link: "/books/the-wall-of-storms#chapter-52" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Soto's final and most significant act was to become the historian of truth against Empress Jia's tyranny. While in hiding with the rebels, she authored a scathing exposé of Jia's crimes. Using a revolutionary printing device invented by Savo Ryoto, her book was mass-produced and distributed across Dara, providing the political and moral justification for the 'bloodless rebellion' that ultimately deposed the regent." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 34, link: "/books/speaking-bones#chapter-34" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 48, link: "/books/speaking-bones#chapter-48" } },
                 { type: 'ref', data: { book: "Speaking Bones", chapter: 50, link: "/books/speaking-bones#chapter-50" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function SotoZynduPage() {
    return <SotoZynduClient characterData={characterData} />;
}