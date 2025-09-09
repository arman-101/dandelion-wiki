


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import GozogiCadeClient from './GozogiCadeClient.tsx';

const characterData: Character = {
    name: "Gozogi Cade",
    image: "/characters/gozogi-cade.png",
    introduction: "Gozogi Cade was a former street tough from Zudi and one of Kuni Garu's oldest and most loyal friends. He served as a dependable, if unspectacular, general throughout the Dandelion Rebellion and the subsequent civil war.",
    infoBox: {
        aliases: "General Cade",
        occupation: "Bandit, General",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Gozogi is a practical and down-to-earth individual, a reflection of his street-level origins. He lacks the strategic brilliance of Gin Mazoti or the scholarly intellect of Rin Coda, but he makes up for it with unwavering loyalty and common-sense leadership. He is a steadfast friend who remains by Kuni Garu's side through all his trials." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Gozogi Cade represents the steadfast loyalty of the friends who rose with Kuni from the streets of Zudi." }
            ]
        },
        {
            era: "A Friend from the Streets",
            summary: [
                { type: 'text', content: "Gozogi was one of Kuni Garu's original followers when he became an outlaw in the Er-Mé Mountains. He followed Kuni through the rebellion against the Xana, the war against Mata Zyndu, and into the founding of the new dynasty. While not a central player in the grand strategies of the wars, he was a reliable commander and a key part of Kuni's inner circle of old friends who helped keep the emperor grounded." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function GozogiCadePage() {
    return <GozogiCadeClient characterData={characterData} />;
}