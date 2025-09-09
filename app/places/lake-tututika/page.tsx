

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import LakeTututikaClient from './LakeTututikaClient.tsx';

// --- DATA FOR LAKE TUTUTIKA ---
const placeData: Place = {
    name: "Lake Tututika",
    image: "/places/lake-tututika.png",
    introduction: "Lake Tututika is a large, sacred lake named after the goddess of beauty and fresh water. Emperor Mapidéré chose its shores as the location for Pan, the 'Immaculate City,' his new imperial capital.",
    infoBox: {
        type: "Sacred Lake",
        location: { text: "Near Pan", link: "/places/pan" },
        continent: "Dara",
        ControllingDeity: { text: "Tututika", link: "/gods/tututika" }
    },
    geography: [
        { type: 'text', content: "A large and beautiful freshwater lake, its scenic and tranquil nature made it a fitting location for an imperial capital intended to symbolize a new era of peace and unity under Xana rule." },
    ],
    culture: [
        { type: 'text', content: "The lake is sacred to the goddess Tututika and is a place of beauty and contemplation. It serves as a backdrop for some of the most critical political and personal moments in the series." },
    ],
    history: [
        {
            event: "A Goddess's Intervention",
            summary: [
                { type: 'text', content: "The goddess Tututika herself appeared in disguise to a young Princess Théra at the lake. She used the ripples in the water to teach the princess about the wavelike nature of light, giving Théra the crucial clue she needed to solve the riddle of the 'magic mirrors'." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
            ]
        },
        {
            event: "A Political Summit",
            summary: [
                { type: 'text', content: "During the Lyucu crisis, Empress Jia took the imprisoned Marshal Gin Mazoti on a boat ride on Lake Tututika. This was actually a high-stakes political negotiation, where Jia convinced Gin to lead the war against the invaders in exchange for her freedom, forging a pragmatic alliance to save Dara." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 31, link: "/books/the-wall-of-storms#chapter-31" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function LakeTututikaPage() {
    return <LakeTututikaClient placeData={placeData} />;
}