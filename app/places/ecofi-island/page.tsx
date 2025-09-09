

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import EcofiIslandClient from './EcofiIslandClient.tsx';

// --- DATA FOR ECOFI ISLAND ---
const placeData: Place = {
    name: "Ecofi Island",
    image: "/places/ecofi-island.png",
    introduction: "Ecofi Island is the location where the first Emperor of Dara, Mapidéré, died. It is a place of great historical significance, as it was the site of the coup that destabilized the Xana Empire and set the stage for the Dandelion Rebellion.",
    infoBox: {
        type: "Island",
        continent: "Dara",
        KeyEvents: "Death of Emperor Mapidéré, Forging of the False Decree"
    },
    geography: [
        { type: 'text', content: "Ecofi is one of the many islands in the Dara archipelago, chosen by the dying emperor for his final tour." },
    ],
    culture: [
        { type: 'text', content: "The island is imbued with the historical weight of the events that transpired there. It represents a place of transition, where one era ended and a new, chaotic one began." },
    ],
    history: [
        {
            event: "The Death of the Emperor",
            summary: [
                { type: 'text', content: "An aging Emperor Mapidéré was on a tour of the islands when he came to Ecofi. It was here that he had a powerful dream in which the gods of Dara argued over his legacy. As the Emperor lay dying, Goran Pira and Lügo Crupo staged a coup, using the Emperor's seal to forge a decree naming a new heir. This false edict, sent from Ecofi, led to the suicide of the true heir and the ascent of the foolish Emperor Erishi, which directly precipitated the collapse of the Xana Dynasty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function EcofiIslandPage() {
    return <EcofiIslandClient placeData={placeData} />;
}