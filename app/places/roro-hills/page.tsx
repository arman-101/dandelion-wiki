

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import RoroHillsClient from './RoroHillsClient';

// --- DATA FOR RORO HILLS ---
const placeData: Place = {
    name: "Roro Hills",
    image: "/places/roro-hills.jpeg",
    introduction: "The Roro Hills are a strategically important region that became a significant battleground in the final war to liberate Dara from Lyucu occupation.",
    infoBox: {
        type: "Hill Range",
        continent: "Dara",
        KeyEvents: "Battle of the Roro Hills"
    },
    geography: [
        { type: 'text', content: "A range of hills providing a strong defensive position, making it an ideal location for a military stronghold." },
    ],
    culture: [
        { type: 'text', content: "The Roro Hills are not known for specific cultural attributes, but their name is now synonymous with the final conflicts that liberated Dara." },
    ],
    history: [
        {
            event: "The War of Restoration",
            summary: [
                { type: 'text', content: "The Roro Hills became the new capital and stronghold for the Lyucu occupation forces under Pékyu Tanvanaki after the Dara victory at Crescent Island. It was from here that she received intelligence about the impending reopening of the Wall of Storms." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 21, link: "/books/the-veiled-throne#chapter-21" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function RoroHillsPage() {
    return <RoroHillsClient placeData={placeData} />;
}