


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import KingThufiClient from './KingThufiClient.tsx';

const characterData: Character = {
    name: "King Thufi",
    image: "/characters/king-thufi.png",
    introduction: "King Thufi was a humble shepherd and the lost heir to the throne of Cocru. Discovered by rebels, he was installed as King of Cocru and later declared himself Princeps, the supreme commander of the allied Tiro states, during the Dandelion Rebellion.",
    infoBox: {
        aliases: "The Shepherd King, Princeps",
        occupation: "Shepherd, King of Cocru, Princeps",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Tiro Alliance",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Thufi is portrayed as a simple and honorable man, initially overwhelmed by the burdens of kingship. He is not a natural warrior or politician, but he possesses a core of decency and a genuine desire to do what is right for his people. He is a reluctant leader who rises to the occasion when his people need him most." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "King Thufi was a pivotal, unifying figure in the early days of the rebellion against the Xana Empire." }
            ]
        },
        {
            era: "The Shepherd King",
            summary: [
                { type: 'text', content: "A simple shepherd, Thufi was found by Huno Krima and Zopa Shigin and revealed to be the last heir of the Cocru royal line. He was crowned King in Çaruza, becoming a powerful symbol for the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
                { type: 'text', content: "Frustrated by the infighting among the restored Tiro kings, and backed by the military might of Mata Zyndu, Thufi decisively ended the bickering at the Grand Council of War by declaring himself Princeps, the supreme commander of the allied forces." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/the-grace-of-kings#chapter-26" } },
                { type: 'text', content: "It was Thufi who made the 'Princeps's Promise': that any commander who captured the capital of Pan would be granted kingship over Géfica. This promise set Kuni Garu on his path to glory but also became a major point of contention that led to the civil war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/the-grace-of-kings#chapter-26" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function KingThufiPage() {
    return <KingThufiClient characterData={characterData} />;
}