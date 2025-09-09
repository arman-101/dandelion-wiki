


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import TakvalAragozClient from './TakvalAragozClient.tsx';

const characterData: Character = {
    name: "Takval Aragoz",
    image: "/characters/takval-aragoz.png",
    introduction: "Takval Aragoz is a prince of the exiled Agon people from the continent of Ukyu-Gondé. He becomes the husband and indispensable ally of Princess Théra, combining his people's warrior traditions with her scientific ingenuity to lead a rebellion against the Lyucu.",
    infoBox: {
        aliases: "Prince of the Agon",
        occupation: "Prince, Rebel Leader",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Male",
        significantOther: { text: "Princess Théra", link: "/characters/princess-thera" },
        relatives: [
            { text: "Souliyan Aragoz (mother)", link: "/characters/souliyan-aragoz" },
            { text: "Volyu Aragoz (uncle)", link: "/characters/volyu-aragoz" },
            { text: "Tanto Aragoz (son)", link: "/characters/tanto-aragoz" },
            { text: "Rokiri Aragoz (son)", link: "/characters/rokiri-aragoz" }
        ],
        affiliation: "Agon Rebellion",
        nationality: { text: "Agon", link: "/concepts/agon" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Takval is a proud and capable warrior, deeply rooted in the traditions of his Agon heritage. He is a skilled fighter and a natural leader. His relationship with Théra is a journey of cultural exchange and mutual respect, as he learns to appreciate her scientific approach while she learns to value his people's traditions. He is a bridge between two cultures, embodying the potential for a new way of life." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 12, link: "/books/the-veiled-throne#chapter-12" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Takval arrived in Dara as a messenger and prince of the Agon. He married Princess Théra to forge a crucial military alliance and joined her expedition across the Wall of Storms to his homeland." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 62, link: "/books/the-wall-of-storms#chapter-62" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "In Ukyu-Gondé, he and Théra worked to unite the exiled Agon tribes, deposing his traitorous uncle, Volyu. His partnership with Théra, both personal and strategic, became the cornerstone of the Agon rebellion, though they suffered a devastating defeat at Kiri Valley." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "While leading the surviving rebels through the frozen north, Takval was gravely injured after falling into an icy sea. In a final, heroic act, the dying Takval convinced Théra to ritually kill him as part of a sacred Agon succession ceremony, making her his heir. He consented for his body to be used in a booby-trapped coffin, a final gambit that successfully assassinated the Lyucu leader Pékyu Cudyu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 11, link: "/books/speaking-bones#chapter-11" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 15, link: "/books/speaking-bones#chapter-15" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 16, link: "/books/speaking-bones#chapter-16" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function TakvalAragozPage() {
    return <TakvalAragozClient characterData={characterData} />;
}