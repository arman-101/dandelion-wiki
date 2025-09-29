

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import ZudiClient from './ZudiClient';

// --- DATA FOR ZUDI ---
const placeData: Place = {
    name: "Zudi",
    image: "/places/zudi.jpeg",
    introduction: "Zudi is a major city in the state of Cocru and the hometown of many of the Dandelion Dynasty's key figures, including Emperor Ragin (Kuni Garu), Empress Jia Matiza, and Prime Minister Cogo Yelu. It serves as a microcosm of the broader shifts in power and ideology throughout the saga.",
    infoBox: {
        type: "Major City",
        state: { text: "Cocru", link: "/places/cocru" },
        continent: "Dara",
        KeyResidents: [
            { text: "Kuni Garu", link: "/characters/kuni-garu" },
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
            { text: "Rin Coda", link: "/characters/rin-coda" },
            { text: "Cogo Yelu", link: "/characters/cogo-yelu" }
        ]
    },
    geography: [
        { type: 'text', content: "Zudi is a bustling city with a vibrant marketplace. It is strategically important, and its control is contested multiple times throughout the wars. The city is located near the Er-Mé Mountains, where Kuni Garu first became a bandit." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
    ],
    culture: [
        { type: 'text', content: "The culture of Zudi reflects the broader culture of Cocru. It is a place of commerce, political maneuvering, and everyday life for the common people whose lives are upended by the grand conflicts of the era. It is home to the Splendid Urn, a tavern that becomes a key meeting place for the future leaders of the rebellion." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
    ],
    history: [
        {
            event: "Pre-Rebellion",
            summary: [
                { type: 'text', content: "Zudi was the site of the failed kite attack on Emperor Mapidéré, an event that profoundly influenced the young Kuni Garu. It was also where Kuni first met his future wife, Jia Matiza." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
            ]
        },
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Kuni Garu captured Zudi early in the rebellion and proved to be a surprisingly effective administrator. The city then became a key rebel stronghold and the site of a major battle where Kuni and Mata Zyndu combined their skills to break a siege led by the famed Xana general, Tanno Namen." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/the-grace-of-kings#chapter-22" } },
            ]
        },
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "In a brilliant counterattack, Mata Zyndu used his air force to retake Zudi in a surprise assault, trapping Kuni and his family. After the war, on the eve of his coronation, Kuni returned to Zudi to hold one last, informal banquet with his oldest friends, honoring his humble roots." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 46, link: "/books/the-grace-of-kings#chapter-46" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function ZudiPage() {
    return <ZudiClient placeData={placeData} />;
}