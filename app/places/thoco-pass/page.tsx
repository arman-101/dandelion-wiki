

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import ThocoPassClient from './ThocoPassClient';

// --- DATA FOR THOCO PASS ---
const placeData: Place = {
    name: "Thoco Pass",
    image: "/places/thoco-pass.jpeg",
    introduction: "Thoco Pass is a strategically vital mountain pass that was the site of Marshal Dazu Zyndu's greatest victories and his ultimate, tragic defeat. It stands as a symbol of both Zyndu brilliance and the betrayal that led to their downfall.",
    infoBox: {
        type: "Mountain Pass",
        location: { text: "Cocru", link: "/places/cocru" },
        continent: "Dara",
        KeyEvents: "Betrayal of Marshal Dazu Zyndu"
    },
    geography: [
        { type: 'text', content: "A narrow and defensible mountain pass, Thoco Pass is a natural chokepoint, making it the perfect location for a smaller army to hold off a much larger invading force. It was the cornerstone of Marshal Zyndu's defensive strategy." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
    ],
    culture: [
        { type: 'text', content: "For the people of Cocru, and especially for Mata Zyndu, Thoco Pass represents a place of immense historical sorrow and anger. It is the location where their greatest hero was betrayed, not by the enemy, but by his own king." },
    ],
    history: [
        {
            event: "The Xana Conquest",
            summary: [
                { type: 'text', content: "During the Xana invasion, Marshal Dazu Zyndu used the terrain of Thoco Pass to brilliantly hold off the superior Xana armies. However, his own king, swayed by false rumors, ordered him to abandon his position. This foolish command led directly to the Marshal's defeat, capture, and the subsequent massacre of his army, becoming the foundational tragedy of the Zyndu clan." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function ThocoPassPage() {
    return <ThocoPassClient placeData={placeData} />;
}