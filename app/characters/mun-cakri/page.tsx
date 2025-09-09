


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import MünÇakriClient from './MünÇakriClient.tsx';

const characterData: Character = {
    name: "Mün Çakri",
    image: "/characters/mun-cakri.png",
    introduction: "Mün Çakri is a former butcher from Zudi who becomes one of Kuni Garu's most loyal and formidable followers. Known for his immense strength and unwavering devotion, he serves as Kuni's unofficial bodyguard and a steadfast general in the Dandelion Court.",
    infoBox: {
        aliases: "The Butcher",
        occupation: "Butcher, General",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mün is a physically powerful man whose skills with carving knives translate seamlessly to the battlefield. He is boisterous, a man of simple tastes and deep loyalty. While not a strategist, his courage and fierce devotion to Kuni make him an invaluable asset. He is content with his position and has no ambition beyond serving his friend and emperor." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 34, link: "/books/the-grace-of-kings#chapter-34" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "As one of Kuni Garu's earliest followers from Zudi, Mün Çakri's loyalty was absolute and famously demonstrated at a critical moment." }
            ]
        },
        {
            era: "Kuni's Loyal Shield",
            summary: [
                { type: 'text', content: "Mün's most notable act was saving Kuni Garu's life at Mata Zyndu's treacherous victory banquet in the ruins of Pan. When an assassin attempted to kill Kuni during a sword dance, Mün used his massive shield and meat-carving prowess to intervene, a display of loyalty that impressed even the Hegemon." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 34, link: "/books/the-grace-of-kings#chapter-34" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "In the years of peace, Mün remained a key figure in Kuni's inner circle and a member of the 'Swords' faction at court." }
            ]
        },
        {
            era: "An Old Guard at Peace",
            summary: [
                { type: 'text', content: "At a drinking party celebrating the adoption of his son, he is shown to be one of the few old guards who is genuinely content with his life. He enjoys the peace his service helped to create and shows no resentment towards the new class of bureaucrats, unlike some of his peers." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function MünÇakriPage() {
    return <MünÇakriClient characterData={characterData} />;
}