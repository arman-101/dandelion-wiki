

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import RuiClient from './RuiClient';

// --- DATA FOR RUI ---
const placeData: Place = {
    name: "Rui",
    image: "/places/rui.png",
    introduction: "Rui is a large island that is part of the Xana nation and the symbolic heart of the old Xana homeland. It is critically important due to Mount Kiji, the sole source of the mystical lift gas that powers Dara's airships.",
    infoBox: {
        type: "Island",
        state: { text: "Xana", link: "/places/xana" },
        continent: "Dara",
        capital: { text: "Kriphi", link: "/places/kriphi" },
        KeyLandmark: { text: "Mount Kiji", link: "/places/mount-kiji" }
    },
    geography: [
        { type: 'text', content: "Rui is a significant island located near Dasu. Its most vital geographical feature is Mount Kiji, which produces the lift gas essential for air travel and warfare in Dara." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
    ],
    culture: [
        { type: 'text', content: "As the Xana homeland, Rui represents the old imperial power. Under the Lyucu occupation, it becomes a center of cultural conflict, where the invaders attempt to erase Dara's traditions and syncretize the local gods." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 16, link: "/books/the-veiled-throne#chapter-16" } },
    ],
    history: [
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "Rui was the target of the first major offensive in Kuni Garu's war against Mata Zyndu. Marshal Gin Mazoti led a surprise attack through abandoned undersea tunnels, capturing the island. This strategic victory gave Kuni control of the airship fleet and was a turning point in the war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "After being conquered by the Lyucu, Rui became the heart of their occupation. It was the site of the first major Dara victory against the invaders, the Battle of Kriphi Harbor, where Gin Mazoti's fleet devastated the Lyucu navy." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function RuiPage() {
    return <RuiClient placeData={placeData} />;
}