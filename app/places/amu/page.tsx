

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import AmuClient from './AmuClient';

// --- DATA FOR AMU ---
const placeData: Place = {
    name: "Amu",
    image: "/places/amu.jpeg",
    introduction: "Amu is one of the six Tiro states, an archipelago kingdom known for its powerful navy, skilled sailors, and the beauty of its people. It is the homeland of the tragic Princess Kikomi.",
    infoBox: {
        type: "Archipelago Kingdom (Tiro State)",
        continent: "Dara",
        capital: { text: "Arulugi", link: "/places/arulugi" },
        Ruler: "Princess Kikomi (Rebellion Era)",
        PatronGod: { text: "Tututika", link: "/gods/tututika" },
        KeyExports: "Fish, Timber, Ships"
    },
    geography: [
        { type: 'text', content: "Amu is an archipelago, a collection of islands defined by its deep connection to the sea. Its geography shaped its people into the finest sailors in Dara, and its forests provided the timber for its legendary navy." },
    ],
    culture: [
        { type: 'text', content: "Amuan culture is deeply maritime. The people are known for their skill on the water and for their physical beauty. The patron goddess of Amu is Tututika, who governs beauty and fresh water." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Amu rose up against the Xana Empire, but their powerful navy was defeated at the Battle of Arulugi by the clever logistical tactics of Kindo Marana. After the defeat, Princess Kikomi was captured and made a deal with the enemy to save her people, an act that had tragic consequences for the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function AmuPage() {
    return <AmuClient placeData={placeData} />;
}