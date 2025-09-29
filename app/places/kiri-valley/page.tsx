

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import KiriValleyClient from './KiriValleyClient';

// --- DATA FOR KIRI VALLEY ---
const placeData: Place = {
    name: "Kiri Valley",
    image: "/places/kiri-valley.jpeg",
    introduction: "Kiri Valley is a secret, hidden valley within the World's Edge Mountains of Ukyu-Gondé. It served as the main hidden base for the Agon rebellion, a place of community and preparation, before its tragic destruction.",
    infoBox: {
        type: "Hidden Valley / Rebel Base",
        location: { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
        continent: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyEvents: "Destruction of the Agon Base"
    },
    geography: [
        { type: 'text', content: "A fertile and well-hidden valley, its remote location in the massive World's Edge mountain range made it an ideal location for a secret military base, shielded from Lyucu patrols." },
    ],
    culture: [
        { type: 'text', content: "For several years, Kiri Valley was the heart of the growing rebellion. It was a place where Dara technology and Agon tradition began to merge. It was here that Théra and Takval raised their sons, Tanto and Rokiri." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
    ],
    history: [
        {
            event: "Destruction of the Rebellion's Heart",
            summary: [
                { type: 'text', content: "The peace of Kiri Valley was shattered when the Lyucu commander Cudyu Roatan, guided by the traitor Volyu Aragoz, launched a devastating surprise attack. The base was destroyed, resulting in the deaths of key rebel leaders like Souliyan Aragoz and Tipo Tho. Théra and Takval's children were separated from them in the chaos, and the rebellion was shattered, forcing the survivors into a desperate flight into the mountains." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 31, link: "/books/the-veiled-throne#chapter-31" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function KiriValleyPage() {
    return <KiriValleyClient placeData={placeData} />;
}