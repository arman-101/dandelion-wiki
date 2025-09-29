


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import RinCodaClient from './RinCodaClient';

const characterData: Character = {
    name: "Rin Coda",
    introduction: "Rin Coda was Kuni Garu's timid and scholarly childhood friend. He rose to become the Farsight Secretary in the Dandelion Dynasty, a role akin to an intelligence minister, but he was ultimately broken by the moral compromises of his position.",
    infoBox: {
        aliases: "Farsight Secretary",
        occupation: "Scholar, Farsight Secretary",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Rin is portrayed as nervous, cautious, and bookish, a stark contrast to his bold friend Kuni. He prefers study and quiet contemplation to action. While intelligent and loyal, his gentle nature is often ill-suited to the brutal realities of politics and espionage. He possesses a strong moral compass, which is severely tested by his duties." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "As one of Kuni's oldest friends, Rin was a constant presence from their schoolboy days in Zudi, serving loyally throughout the rebellion." }
            ]
        },
        {
            era: "Friend and Advisor",
            summary: [
                { type: 'text', content: "Rin was by Kuni's side when they witnessed the kite attack on Emperor Mapidéré. He later joined Kuni's rebellion and was one of the key friends who helped ground the new emperor, reminding him of his purpose after Kuni was tempted by imperial decadence upon capturing Pan." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Appointed to a high-stakes position at court, Rin's gentle nature was tragically exploited, leading to his downfall." }
            ]
        },
        {
            era: "The Farsight Secretary's Burden",
            summary: [
                { type: 'text', content: "As Farsight Secretary, Rin oversaw the first Grand Examination. However, he was subtly manipulated by Empress Jia into pursuing conspiracies. His intelligence failures regarding the Hegemon Cults and his unwitting role in Jia's plot against Gin Mazoti weighed heavily on him." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/the-wall-of-storms#chapter-20" } },
                { type: 'text', content: "Consumed by guilt for his part in the downfall of honorable people, Rin ultimately took his own life, leaving behind a confession that exposed the empress's machinations." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 39, link: "/books/the-wall-of-storms#chapter-39" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function RinCodaPage() {
    return <RinCodaClient characterData={characterData} />;
}