

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import DasuClient from './DasuClient';

// --- DATA FOR DASU ---
const placeData: Place = {
    name: "Dasu",
    image: "/places/dasu.jpeg",
    introduction: "Dasu is a small, remote, and seemingly insignificant island that becomes the crucible where the future Dandelion Dynasty is forged. Initially a place of exile for Kuni Garu, it is transformed into a beacon of innovation, meritocracy, and hope.",
    infoBox: {
        type: "Island Kingdom",
        continent: "Dara",
        Ruler: { text: "King Kuni Garu", link: "/characters/kuni-garu" },
        KeyResidents: [
            { text: "Kuni Garu", link: "/characters/kuni-garu" },
            { text: "Gin Mazoti", link: "/characters/gin-mazoti" },
            { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" }
        ]
    },
    geography: [
        { type: 'text', content: "Dasu is a small, rocky island located near the larger island of Rui, the Xana homeland. Its initial desolation makes it an ideal place of exile, as it appears to have little strategic or economic value." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/the-grace-of-kings#chapter-36" } },
    ],
    culture: [
        { type: 'text', content: "Under Kuni Garu's rule, Dasu develops a unique culture founded on innovation and meritocracy. It is a place where talent is valued over birthright, where women can become marshals, and where new ideas are encouraged. This stands in stark contrast to the rigid, tradition-bound court of Hegemon Mata Zyndu." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/the-grace-of-kings#chapter-41" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 42, link: "/books/the-grace-of-kings#chapter-42" } },
    ],
    history: [
        {
            event: "Kuni Garu's Exile",
            summary: [
                { type: 'text', content: "Mata Zyndu 'rewarded' Kuni Garu with the kingship of Dasu, intending it as an exile. In secret, however, Kuni and his followers began transforming the island into a powerful state." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 35, link: "/books/the-grace-of-kings#chapter-35" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/the-grace-of-kings#chapter-36" } },
            ]
        },
        {
            event: "The Rise of a New Power",
            summary: [
                { type: 'text', content: "Dasu became the staging ground for Kuni's return to power. It was here that he recruited Marshal Gin Mazoti. From Dasu, Gin launched the surprise attack on the neighboring island of Rui through undersea tunnels, a decisive first strike in the civil war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/the-grace-of-kings#chapter-41" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
        {
            event: "The Lyucu Invasion",
            summary: [
                { type: 'text', content: "Years later, Dasu was the first place in Dara to be attacked by the invading Lyucu fleet. The island's defenses were overwhelmed, and Prince Timu, who was governing the island, was forced to surrender to save his people from slaughter. Dasu became the heart of the Lyucu occupation." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 35, link: "/books/the-wall-of-storms#chapter-35" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 37, link: "/books/the-wall-of-storms#chapter-37" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function DasuPage() {
    return <DasuClient placeData={placeData} />;
}