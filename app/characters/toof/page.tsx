


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import ToofClient from './ToofClient.tsx';

const characterData: Character = {
    name: "Toof",
    image: "/characters/toof.png",
    introduction: "Toof was a Lyucu garinafin pilot who, along with his partner Radia, was captured by Princess Théra's expedition. He eventually defected and joined the Agon resistance, playing a key role in the rebellion in Ukyu-Gondé.",
    infoBox: {
        aliases: "The Defector",
        occupation: "Garinafin Pilot",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        significantOther: { text: "Radia", link: "/characters/radia" },
        affiliation: "Lyucu Empire, Agon Rebellion",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Toof is a skilled and dedicated garinafin pilot who shares a deep bond with his mount. Initially a loyal Lyucu warrior, his capture and subsequent experiences with the Dara and Agon peoples lead him to question his allegiances. He is a man of honor who ultimately chooses to fight for what he believes is right, even if it means betraying his own people." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Toof was captured after Théra's forces used whale song to cripple his city-ship. Aboard the Dara vessel, he and his partner Radia were integrated into the diverse crew and began to form bonds with their former enemies." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
                { type: 'text', content: "After the Lyucu attack on Kiri Valley, he and Radia pretended to betray the rebels, 'capturing' Théra's children in a ruse to help them escape the main pursuit, with the intent of freeing them later." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 31, link: "/books/the-veiled-throne#chapter-31" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Toof reappeared in the Lyucu capital of Taten, where he and Radia played a crucial part in Théra's plan to topple Pékyu Cudyu. During the climactic ceremony, they freed the juvenile garinafins from their pens, an act that sparked a full-scale rebellion among the captive beasts and Agon slaves, leading to Cudyu's death." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 16, link: "/books/speaking-bones#chapter-16" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function ToofPage() {
    return <ToofClient characterData={characterData} />;
}