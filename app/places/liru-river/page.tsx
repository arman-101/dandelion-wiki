

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import LiruRiverClient from './LiruRiverClient';

// --- DATA FOR LIRU RIVER ---
const placeData: Place = {
    name: "Liru River",
    image: "/places/liru-river.jpeg",
    introduction: "The Liru River is a major river system that serves as a key strategic and psychological border in Dara. It was the site of the tense, final standoff between the armies of Kuni Garu and Mata Zyndu during the Chrysanthemum-Dandelion War.",
    infoBox: {
        type: "River System / Border",
        location: { text: "Cocru", link: "/places/cocru" },
        continent: "Dara",
        KeyEvents: "The Standoff at Liru River"
    },
    geography: [
        { type: 'text', content: "The Liru River is a significant natural boundary. The cities of Dimu and Dimushi are located on its opposing banks, making the river crossing a major strategic objective." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 23, link: "/books/the-grace-of-kings#chapter-23" } },
    ],
    culture: [
        { type: 'text', content: "As a strategic border, the river represents division and conflict. It is a line on the map where armies face each other, and where the fates of nations are decided." },
    ],
    history: [
        {
            event: "The Standoff",
            summary: [
                { type: 'text', content: "The two armies of the former sworn brothers faced each other across the Liru River in a tense stalemate. Mata Zyndu held Kuni Garu's father and wife captive. In a tense parley, Mata threatened to execute Kuni's father, but Kuni, in a masterful and cold-blooded bluff, pretended to be utterly ruthless. The psychological gambit worked, and Mata spared his captive's life." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 47, link: "/books/the-grace-of-kings#chapter-47" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function LiruRiverPage() {
    return <LiruRiverClient placeData={placeData} />;
}