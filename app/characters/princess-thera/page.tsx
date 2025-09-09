


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import PrincessThéraClient from './PrincessThéraClient.tsx';

const characterData: Character = {
    name: "Princess Théra",
    image: "/characters/princess-thera.png",
    introduction: "Princess Théra is the brilliant, adventurous, and scientifically-minded eldest daughter of Emperor Ragin and Empress Jia. Possessing her father's charisma and her mother's intellect, she was secretly chosen by Kuni to be his heir. She later leads a rebellion against the Lyucu in their homeland, becoming a legendary figure in her own right.",
    infoBox: {
        aliases: "Empress Üna, Pékyu-votan Théra",
        occupation: "Princess, Empress of Dara, Rebel Leader",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Alive",
        gender: "Female",
        significantOther: [
            { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
            { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" }
        ],
        relatives: [
            { text: "Kuni Garu (father)", link: "/characters/kuni-garu" },
            { text: "Jia Matiza (mother)", link: "/characters/jia-matiza" },
            { text: "Prince Timu (brother)", link: "/characters/prince-timu" },
            { text: "Prince Phyro (brother)", link: "/characters/prince-phyro" },
            { text: "Princess Fara (sister)", link: "/characters/princess-fara" },
            { text: "Tanto Aragoz (son)", link: "/characters/tanto-aragoz" },
            { text: "Rokiri Aragoz (son)", link: "/characters/rokiri-aragoz" }
        ],
        affiliation: "Dandelion Court, Dara Expeditionary Force, Agon Rebellion",
        nationality: "Daran",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Théra is clever, courageous, and endlessly curious. From a young age, she displays a keen and intuitive understanding of politics, often seeing the subtext that her brother Timu misses." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 11, link: "/books/the-wall-of-storms#chapter-11" } },
        { type: 'text', content: "She has a scientific mind, seeking logical explanations for seemingly magical phenomena. This allows her to deduce the principles behind the Hegemon cult's 'magic mirrors' and later, the biology of the garinafins. She is a natural leader who inspires loyalty through her intelligence and bravery." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 26, link: "/books/the-wall-of-storms#chapter-26" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 53, link: "/books/the-wall-of-storms#chapter-53" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As a young princess, Théra's brilliance was recognized early by her father, who secretly intended to name her as his heir. She proved his faith was well-placed when she became a hero of the realm." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
            ]
        },
        {
            era: "A Princess of a New Age",
            summary: [
                { type: 'text', content: "Théra single-handedly ended the Hegemon cult rebellion by using her scientific knowledge to create a superior illusion, shattering the rebels' faith. She also collaborated closely with Zomi Kidosu on scientific research, and their friendship blossomed into love." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 53, link: "/books/the-wall-of-storms#chapter-53" } },
                { type: 'text', content: "After her father's death, she was named his successor but chose to abdicate. Instead, she married the Agon prince Takval Aragoz and led an expedition across the Wall of Storms to wage war on the Lyucu in their homeland." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 58, link: "/books/the-wall-of-storms#chapter-58" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 62, link: "/books/the-wall-of-storms#chapter-62" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "In Ukyu-Gondé, Théra forged an alliance with exiled Agon tribes and began a long, grueling rebellion. After a devastating betrayal and attack on their secret base, she and the survivors were forced into exile, and she fell into a deep depression over the loss of her children." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 45, link: "/books/the-veiled-throne#chapter-45" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "After recovering from her grief, Théra led her band of rebels through a series of desperate gambits, culminating in a brilliant plan that led to the death of the Lyucu leader Pékyu Cudyu and the destruction of his invasion fleet. Betrayed by the Agon, she led her multi-ethnic followers to the forbidden 'City of Ghosts,' where she was reunited with her sons. There, they used new 'speaking bones' technology to broadcast a message of peace and their people's true history across the land. Years later, she returned to Dara an old woman for an emotional final reunion with Zomi Kidosu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 1, link: "/books/speaking-bones#chapter-1" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 16, link: "/books/speaking-bones#chapter-16" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 33, link: "/books/speaking-bones#chapter-33" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 59, link: "/books/speaking-bones#chapter-59" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function PrincessThéraPage() {
    return <PrincessThéraClient characterData={characterData} />;
}