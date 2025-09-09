


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import HunoKrimaClient from './HunoKrimaClient.tsx';

const characterData: Character = {
    name: "Huno Krima",
    image: "/characters/huno-krima.png",
    introduction: "Huno Krima was a charismatic corvée laborer from Cocru whose desperate act of defiance sparked the first major rebellion against the Xana Empire. Though his rebellion ended in failure, he was the catalyst for the larger Dandelion Rebellion.",
    infoBox: {
        aliases: "The False King of West Cocru",
        occupation: "Corvée Laborer, Rebel Leader, King",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Deceased",
        gender: "Male",
        affiliation: "First Cocru Rebellion",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Krima is described as bald and charismatic. He possessed a natural ability to inspire hope in the desperate and oppressed. However, as he gained power, he grew increasingly arrogant, paranoid, and cruel, a stark warning about how power can corrupt." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 16, link: "/books/the-grace-of-kings#chapter-16" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Huno Krima's rise and fall is the story of the rebellion's first charismatic leader, a man who gave people hope before being consumed by the power he attained." }
            ]
        },
        {
            era: "The Fish Prophecy and a False Crown",
            summary: [
                { type: 'text', content: "Facing certain execution for being late to a corvée assignment, Krima and his friend Zopa Shigin created a fake prophecy by hiding a silk scroll reading 'Huno Krima Will Be King' inside a fish. This 'miracle' galvanized the other laborers into rising up and sparking the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
                { type: 'text', content: "His success was short-lived. After finding and installing King Thufi, Krima grew paranoid and declared himself King of West Cocru. He murdered his friend Zopa Shigin and ruled through a secret police force. His disastrous reign was cut short when General Tanno Namen launched a surprise attack. Krima's army collapsed, and he was unceremoniously killed by his own fleeing soldiers, an end contemptuously witnessed by Mata Zyndu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 16, link: "/books/the-grace-of-kings#chapter-16" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function HunoKrimaPage() {
    return <HunoKrimaClient characterData={characterData} />;
}