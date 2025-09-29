

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import KriphiClient from './KriphiClient';

// --- DATA FOR KRIPHI ---
const placeData: Place = {
    name: "Kriphi",
    image: "/places/kriphi.png",
    introduction: "Kriphi is the capital city of the island of Rui, the heart of the old Xana homeland. During the Lyucu occupation, it becomes the capital of 'Unredeemed Dara' and the seat of power for the Lyucu rulers.",
    infoBox: {
        type: "Capital City",
        state: { text: "Rui", link: "/places/rui" },
        continent: "Dara",
        Rulers: "Xana Empire, Lyucu Empire",
        KeyResidents: [
            { text: "Tanvanaki", link: "/characters/tanvanaki" },
            { text: "Prince Timu", link: "/characters/prince-timu" },
            { text: "Goztan Ryoto", link: "/characters/goztan-ryoto" }
        ]
    },
    geography: [
        { type: 'text', content: "Kriphi is a major port city on the island of Rui. Its harbor is a key strategic location for naval and aerial power in the northern islands." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
    ],
    culture: [
        { type: 'text', content: "Under the Lyucu, Kriphi is a city of tension and political strife between the hardline faction, which seeks to erase all Dara culture, and the accommodationist faction, which advocates for integration. It is a place of purges, political maneuvering, and quiet resistance." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
    ],
    history: [
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "Using forgotten undersea tunnels, Gin Mazoti's army launched a stunning surprise attack, and Kriphi fell quickly to Kuni Garu's forces. This was a major turning point in the war against Mata Zyndu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "After the Lyucu conquest, Kriphi became their capital. The Battle of Kriphi Harbor was the first major Dara victory against the invaders, where Gin Mazoti's fleet destroyed the Lyucu navy. The city's internal politics ultimately led to the collapse of the Lyucu regime from within, culminating in the assassinations of Tanvanaki, Cutanrovo Aga, and Emperor Timu." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 43, link: "/books/speaking-bones#chapter-43" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function KriphiPage() {
    return <KriphiClient placeData={placeData} />;
}