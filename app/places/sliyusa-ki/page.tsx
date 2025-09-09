

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import SliyusaKiClient from './SliyusaKiClient.tsx';

// --- DATA FOR SLIYUSA KI ---
const placeData: Place = {
    name: "Sliyusa Ki",
    image: "/places/sliyusa-ki.png",
    introduction: "Sliyusa Ki is a major oasis in the vast Lurodia Tanta desert. It is the home of Takval Aragoz's tribe and becomes the first base of operations and political center for the Agon resistance against the Lyucu.",
    infoBox: {
        type: "Oasis Settlement",
        location: { text: "Lurodia Tanta", link: "/places/lurodia-tanta" },
        continent: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyResidents: [
            { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
            { text: "Volyu Aragoz", link: "/characters/volyu-aragoz" },
            { text: "Souliyan Aragoz", link: "/characters/souliyan-aragoz" }
        ]
    },
    geography: [
        { type: 'text', content: "As an oasis, Sliyusa Ki is a rare point of life and water in the endless desert, making it a natural center for the exiled Agon people to gather." },
    ],
    culture: [
        { type: 'text', content: "The oasis is the heart of the exiled Agon culture. It is a place of deep-seated traditions, warrior pride, and complex clan politics. It is here that Théra must prove her worth and forge a true alliance with a proud and skeptical people." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
    ],
    history: [
        {
            event: "The Forging of an Alliance",
            summary: [
                { type: 'text', content: "Sliyusa Ki is where Théra's expedition made first contact with the exiled Agon. After a hostile welcome, Théra won over the chieftains and, with the help of Takval's mother Souliyan, deposed the treacherous chieftain Volyu. The oasis then became the first capital of the unified Agon rebellion." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 14, link: "/books/the-veiled-throne#chapter-14" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function SliyusaKiPage() {
    return <SliyusaKiClient placeData={placeData} />;
}