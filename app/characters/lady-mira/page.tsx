


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import LadyMiraClient from './LadyMiraClient';

const characterData: Character = {
    name: "Lady Mira",
    introduction: "Lady Mira was a gentle embroiderer and songstress from Tunoa who became Mata Zyndu's closest confidante. Described as the only person who truly understood him, she represented a connection to his lost home and a path of peace that stood in stark contrast to his life of violence.",
    infoBox: {
        aliases: "Mira of Tunoa",
        occupation: "Embroiderer, Songstress",
        placeOfBirth: { text: "Tunoa Islands", link: "/places/tunoa-islands" },
        status: "Deceased",
        gender: "Female",
        significantOther: [
            { text: "Mata Zyndu", link: "/characters/mata-zyndu" }
        ],
        relatives: [
            { text: "Mado (brother)", link: "" },
        ],
        affiliation: "Hegemon's Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mira is depicted with a quiet strength, deep empathy, and a beautiful, haunting singing voice. She is unafraid to speak her mind to Mata, challenging his views on glory and vengeance with a gentle but firm wisdom. She finds satisfaction not in grand deeds, but in the simple, creative act of her embroidery." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 44, link: "/books/the-grace-of-kings#chapter-44" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Lady Mira's brief but profound relationship with Mata Zyndu offered the troubled Hegemon his only connection to peace and home." }
            ]
        },
        {
            era: "The Hegemon's Confidante",
            summary: [
                { type: 'text', content: "Mira encountered Mata Zyndu in the ruins of Pan while singing a traditional Tunoan dirge for her fallen brother. Moved by the sound of his homeland, Mata took her into his household." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
                { type: 'text', content: "She became the only person who could speak to him with honesty, gently challenging his brutal actions and trying to guide him toward introspection. She was later tempted by a disguised Kiji, who gave her a bone dagger and urged her to assassinate the Hegemon." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 44, link: "/books/the-grace-of-kings#chapter-44" } },
                { type: 'text', content: "During the final battle of the civil war, as Mata's army faced certain defeat, Mira took her own life rather than watch him die. Her suicide was the final act that broke Mata's spirit, leading him to make his own final, suicidal charge." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function LadyMiraPage() {
    return <LadyMiraClient characterData={characterData} />;
}