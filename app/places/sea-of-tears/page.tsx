

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import SeaofTearsClient from './SeaofTearsClient';

// --- DATA FOR SEA OF TEARS ---
const placeData: Place = {
    name: "Sea of Tears",
    image: "/places/sea-of-tears.png",
    introduction: "The Sea of Tears is a large inland sea in Ukyu-Gondé, surrounded by vast salt flats. It is a place of ancient mystery and a grueling trial for the child survivors of the Kiri Valley massacre.",
    infoBox: {
        type: "Inland Sea / Salt Flats",
        location: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyFeatures: "Salt Flats, Ancient Geologlyphs"
    },
    geography: [
        { type: 'text', content: "A massive inland sea, its shores have receded over millennia to leave behind vast, desolate salt flats. This harsh, unforgiving landscape is incredibly difficult to survive in." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
    ],
    culture: [
        { type: 'text', content: "The salt flats surrounding the Sea of Tears are home to ancient and mysterious geoglyphs—massive drawings of birds and other creatures etched into the landscape by a forgotten civilization. These discoveries hint at a deep, unrecorded history on the continent." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
    ],
    history: [
        {
            event: "The Children's Ordeal",
            summary: [
                { type: 'text', content: "After the destruction of Kiri Valley, the small band of child survivors, including Théra's sons, were led by their two adult guardians on a harrowing journey across the salt flats of the Sea of Tears. This journey was a crucible, forcing the children to learn to survive and rely on each other in one of the world's most inhospitable environments." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function SeaofTearsPage() {
    return <SeaofTearsClient placeData={placeData} />;
}