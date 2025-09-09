


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import PumaYemuClient from './PumaYemuClient.tsx';

const characterData: Character = {
    name: "Puma Yemu",
    image: "/characters/puma-yemu.png",
    introduction: "Puma Yemu was a former bandit who became a fiercely loyal and effective general for Kuni Garu. He is known for his skill in raiding and unconventional tactics, and is a key member of the 'Swords' faction at the Dandelion Court.",
    infoBox: {
        aliases: "General Yemu, The Bandit Marquess",
        occupation: "Bandit, General",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: "Daran",
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Puma Yemu is a rough-and-tumble warrior, a reflection of his past as a bandit. He is practical, loyal, and a skilled commander, particularly in raids and surprise attacks. He feels his martial skills are undervalued in peacetime and is a vocal member of the military faction at court, resentful of the growing power of the bureaucrats." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Puma Yemu, a disgruntled nobleman and bandit, was identified by Jia Matiza as a potential key ally for Kuni Garu to recruit during the Chrysanthemum-Dandelion War." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 39, link: "/books/the-grace-of-kings#chapter-39" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "During the rebellion in Arulugi, Puma Yemu's forces, concealed by Consort Risana's smokecraft, led the surprise assault that secured victory for the emperor. Later, in Empress Jia's campaign of biological warfare against the Lyucu, it was Yemu's forces who executed the plan, airdropping swarms of locusts onto the occupied islands." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 57, link: "/books/the-wall-of-storms#chapter-57" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "As a senior general, Puma Yemu commanded the Dara invasion fleet in the final war against the Lyucu, leading the initial naval engagement at the Battle of Crescent Island." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 20, link: "/books/speaking-bones#chapter-20" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function PumaYemuPage() {
    return <PumaYemuClient characterData={characterData} />;
}