


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import TantoAragozClient from './TantoAragozClient';

const characterData: Character = {
    name: "Tanto Aragoz",
    introduction: "Tanto Aragoz is the eldest son of Princess Théra and Takval Aragoz. Raised in the harsh environment of the Agon rebellion, he is a child of two cultures, embodying the future of the alliance between Dara and the Agon.",
    infoBox: {
        aliases: "None",
        occupation: "Prince",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        relatives: [
            { text: "Princess Théra (mother)", link: "/characters/princess-thera" },
            { text: "Takval Aragoz (father)", link: "/characters/takval-aragoz" },
            { text: "Rokiri Aragoz (brother)", link: "/characters/rokiri-aragoz" },
            { text: "Kuni Garu (grandfather)", link: "/characters/kuni-garu" },
            { text: "Jia Matiza (grandmother, by adoption)", link: "/characters/jia-matiza" }
        ],
        affiliation: "Agon Rebellion",
        nationality: "Daran-Agon",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "As a child, Tanto is more Agon than Dara, embracing the warrior culture of his father. He initially rejects his mother's Dara heritage but shows a deep curiosity and courage that marks him as a future leader." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Tanto was born and raised in the secret Agon base in Kiri Valley. After the base was destroyed, he and his brother were separated from their parents and taken by the Lyucu, before being rescued by the Agon defectors Toof and Radia." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 31, link: "/books/the-veiled-throne#chapter-31" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "As a young boy, Tanto and the other children found refuge in the ancient 'City of Ghosts.' Inspired by Agon myths, he ventured into the forbidden barrows, where he discovered not weapons, but ancient farming tools. This discovery led to the profound revelation that the Agon and Lyucu were descended from a settled, agricultural people, rewriting their entire cultural history. He was later joyfully reunited with his mother, Théra." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 5, link: "/books/speaking-bones#chapter-5" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 41, link: "/books/speaking-bones#chapter-41" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function TantoAragozPage() {
    return <TantoAragozClient characterData={characterData} />;
}