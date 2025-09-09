


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import ZatoRuthiClient from './ZatoRuthiClient.tsx';

const characterData: Character = {
    name: "Zato Ruthi",
    image: "/characters/zato-ruthi.png",
    introduction: "Zato Ruthi was a well-meaning but militarily naive scholar-king of Rima during the Dandelion Rebellion. He later became the stern and traditional Imperial Tutor for the children of Emperor Ragin, his rigid worldview often clashing with the new era of innovation.",
    infoBox: {
        aliases: "King of Rima, Imperial Tutor",
        occupation: "King, Scholar, Imperial Tutor",
        placeOfBirth: { text: "Rima", link: "/places/rima" },
        status: "Deceased",
        gender: "Male",
        relatives: [
            { text: "Gori Ruthi (nephew)", link: "/characters/gori-ruthi" }
        ],
        affiliation: "Kingdom of Rima, Dandelion Court",
        nationality: { text: "Rima", link: "/places/rima" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Zato Ruthi is the archetypal proud, traditional scholar. He is deeply learned in the classics and believes in the moral and cultural superiority of his own traditions. This often makes him rigid, arrogant, and blind to new ideas or different ways of thinking. He is a man of principle, but his principles are often divorced from practical reality." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/the-wall-of-storms#chapter-3" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 36, link: "/books/the-wall-of-storms#chapter-36" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "As the scholar-king of Rima during the civil war, Ruthi's forces were utterly defeated by Marshal Gin Mazoti, who used brilliant and unconventional tactics—like damming a river to create a flash flood—that Ruthi's classical military education had not prepared him for." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Years later, he served as the Imperial Tutor in Pan, frequently clashing with the mischievous imperial children." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/the-wall-of-storms#chapter-3" } },
                { type: 'text', content: "He accompanied Prince Timu to Dasu and led the diplomatic mission to the newly arrived Lyucu. Blinded by cultural arrogance, he treated the Lyucu as simple barbarians and was completely outmaneuvered by their leader, Pékyu Tenryo, who tricked him into revealing crucial military intelligence. His diplomatic failure contributed directly to the swift fall of Dasu, during which he was killed." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 36, link: "/books/the-wall-of-storms#chapter-36" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 37, link: "/books/the-wall-of-storms#chapter-37" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function ZatoRuthiPage() {
    return <ZatoRuthiClient characterData={characterData} />;
}