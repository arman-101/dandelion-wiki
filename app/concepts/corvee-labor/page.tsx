

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import CorveLaborClient from './CorveLaborClient';

// --- DATA FOR CORVÉE LABOR ---
const conceptData: Concept = {
    name: "Corvée Labor",
    image: "/concepts/corvee-labor.png",
    introduction: "Corvée labor was a system of state-sponsored forced, unpaid labor imposed by the Xana Empire upon its conquered subjects. This brutal practice was the primary catalyst for the widespread discontent that erupted into the Dandelion Rebellion.",
    infoBox: {
        Type: "Forced Labor System",
        ImplementedBy: { text: "Xana Empire", link: "/places/xana" },
        UsedFor: "Imperial construction projects",
        Consequence: "Sparked the Dandelion Rebellion",
    },
    details: [
        { type: 'text', content: "To build his grand capital city of Pan and other monumental projects, Emperor Mapidéré conscripted hundreds of thousands of men from across the Tiro states. These men were forced to leave their homes and farms to work under harsh conditions for no pay." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
        { type: 'text', content: "The suffering and resentment caused by corvée labor created a powder keg of rebellion. The first uprising, led by Huno Krima, began among a group of corvée laborers facing certain death for a delayed assignment. The abolition of corvée was one of the first and most popular acts of the rebels." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function CorveLaborPage() {
    return <CorveLaborClient conceptData={conceptData} />;
}