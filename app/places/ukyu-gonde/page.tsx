

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import UkyuGondeClient from './UkyuGondeClient';

// --- DATA FOR UKYU & GONDÉ ---
const placeData: Place = {
    name: "Ukyu & Gondé",
    image: "/places/ukyu-gonde.png",
    introduction: "Ukyu & Gondé is the vast, harsh continent across the eastern sea from Dara, separated by the impassable Wall of Storms. It is the homeland of the nomadic, garinafin-riding Lyucu people and their ancient rivals, the Agon.",
    infoBox: {
        type: "Continent",
        KeyPeoples: [
            { text: "Lyucu", link: "/concepts/lyucu" },
            { text: "Agon", link: "/concepts/agon" }
        ],
        KeyLandmarks: [
            { text: "Lurodia Tanta", link: "/places/lurodia-tanta" },
            { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
            { text: "Sea of Tears", link: "/places/sea-of-tears" }
        ]
    },
    geography: [
        { type: 'text', content: "The continent is primarily composed of vast, harsh scrublands and deserts. This unforgiving environment forged its inhabitants into hardy, nomadic peoples." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 48, link: "/books/the-wall-of-storms#chapter-48" } },
    ],
    culture: [
        { type: 'text', content: "The dominant cultures are the Lyucu and the Agon, two peoples shaped by their symbiotic and often brutal relationship with the flying war beasts, the garinafins. Their societies are nomadic and martial, valuing strength and survival above all else. The land also holds the secrets of a forgotten, settled civilization, whose history is rediscovered by Théra's children." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 48, link: "/books/the-wall-of-storms#chapter-48" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 7, link: "/books/speaking-bones#chapter-7" } },
    ],
    history: [
        {
            event: "The Lost Expedition",
            summary: [
                { type: 'text', content: "Ukyu & Gondé was the destination of Emperor Mapidéré's lost expedition. The Dara fleet was systematically tricked, disarmed, and enslaved by the cunning Pékyu Tenryo, who used their knowledge to build his invasion force." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
            ]
        },
        {
            event: "The Dara Rebellion",
            summary: [
                { type: 'text', content: "The continent became the target of a counter-invasion led by Princess Théra and Takval Aragoz. They forged an alliance with the exiled Agon tribes and waged a long guerrilla war against the Lyucu empire from within its own borders, a critical second front that was instrumental in their ultimate defeat." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function UkyuGondePage() {
    return <UkyuGondeClient placeData={placeData} />;
}