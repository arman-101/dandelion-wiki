

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import DimushiClient from './DimushiClient';

// --- DATA FOR DIMUSHI ---
const placeData: Place = {
    name: "Dimushi",
    image: "/places/dimushi.png",
    introduction: "Dimushi is a bustling, rough-and-tumble port city. It is the hometown of the legendary Marshal Gin Mazoti and later becomes a haven for fugitives and a center for the resistance.",
    infoBox: {
        type: "Port City",
        region: "Southern Dara",
        continent: "Dara",
        KeyResidents: [
            { text: "Gin Mazoti", link: "/characters/gin-mazoti" },
            { text: "Kinri", link: "/characters/kinri" }
        ]
    },
    geography: [
        { type: 'text', content: "A major port, Dimushi is a nexus of trade, sailors, and the criminal underworld. Its strategic location on the coast makes it a vital economic and military asset." },
    ],
    culture: [
        { type: 'text', content: "Dimushi is a city of survivors. Its culture is shaped by the harsh realities of life on the streets and docks. It is a place where wit, strength, and ambition are valued above noble birth, a culture that produced a prodigy like Gin Mazoti." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 40, link: "/books/the-grace-of-kings#chapter-40" } },
    ],
    history: [
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "During the final stalemate of the war, the armies of Kuni Garu and Mata Zyndu faced each other across the Liru River, with Kuni's forces occupying Dimushi." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 47, link: "/books/the-grace-of-kings#chapter-47" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "Decades later, the fugitive Kinri (Savo Ryoto) made his way to Dimushi. There, he formed an unlikely alliance with the city's criminal underworld to secure a ship and crew for a daring mission into Lyucu territory." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 21, link: "/books/speaking-bones#chapter-21" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function DimushiPage() {
    return <DimushiClient placeData={placeData} />;
}