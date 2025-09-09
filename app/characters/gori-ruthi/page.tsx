


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import GoriRuthiClient from './GoriRuthiClient.tsx';

const characterData: Character = {
    name: "Gori Ruthi",
    image: "/characters/gori-ruthi.png",
    introduction: "Gori Ruthi is the nephew of the former Imperial Tutor, Zato Ruthi. He is a Moralist scholar and a well-intentioned but often naive official in the Dandelion court.",
    infoBox: {
        aliases: "The Moralist Scholar",
        occupation: "Scholar, Court Official",
        placeOfBirth: { text: "Rima", link: "/places/rima" },
        status: "Alive",
        gender: "Male",
        relatives: [
            { text: "Zato Ruthi (uncle)", link: "/characters/zato-ruthi" }
        ],
        affiliation: "Dandelion Court",
        nationality: { text: "Rima", link: "/places/rima" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Like his uncle, Gori is a traditionalist and a staunch believer in the Moralist school of philosophy. He is earnest and well-meaning, but his rigid adherence to protocol and his lack of practical experience often make him ineffective in the complex world of imperial politics." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
    ],
    history: [
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "Gori Ruthi serves as an official in the Dandelion court. He was assigned to report on Princess Aya Mazoti's disastrous first military command. Later, he was part of the council of ministers who, led by Cogo Yelu, defied Empress Jia and sided with the will of the people, leading to the regent's downfall." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 50, link: "/books/speaking-bones#chapter-50" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function GoriRuthiPage() {
    return <GoriRuthiClient characterData={characterData} />;
}