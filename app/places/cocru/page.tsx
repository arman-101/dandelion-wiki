'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR COCRU ---
const placeData: Place = {
    name: "Cocru",
    image: "/places/cocru.png",
    introduction: "Cocru is one of the most powerful and central of the six Tiro states. It is the homeland of both Kuni Garu and Mata Zyndu, and its fate is central to the entire saga.",
    infoBox: {
        type: "Kingdom (Tiro State)",
        continent: "Dara",
        capital: { text: "Çaruza", link: "/places/caruza" },
        Ruler: "House of Zyndu (historical), King Thufi (Rebellion), House of Garu (current)",
        PatronGods: [
            { text: "Kana", link: "/gods/kana" },
            { text: "Rapa", link: "/gods/rapa" }
        ],
        KeyCities: [
            { text: "Zudi", link: "/places/zudi" },
        ]
    },
    geography: [
        { type: 'text', content: "Cocru is a large state on Dara's main continent. Its lands include bustling cities like Zudi, fertile plains, and strategic locations like the Liru River, which often serves as a military border." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 23, link: "/books/the-grace-of-kings#chapter-23" } },
    ],
    culture: [
        { type: 'text', content: "Cocru has a proud martial tradition, exemplified by the legendary House of Zyndu. The state is protected by the twin gods Kana (fire and death) and Rapa (ice and sleep), representing the harsh dualities of life." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
    ],
    history: [
        {
            event: "The Xana Conquest",
            summary: [
                { type: 'text', content: "During the initial Xana invasion, Cocru's famed general, Marshal Dazu Zyndu, was betrayed and his armies destroyed, leading to the subjugation of the state." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
            ]
        },
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Cocru was the heart of the rebellion against the Xana Empire. The first uprising was sparked by Cocru laborers, and the two most important figures of the war, Kuni Garu and Mata Zyndu, both hailed from Cocru. Its old capital, Çaruza, became the headquarters for the allied Tiro states." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
            ]
        },
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "After the fall of Xana, Cocru became the seat of Mata Zyndu's power as Hegemon and the central battleground in the brutal civil war. The war ended with Mata's death in his homeland, and Cocru was absorbed into Kuni Garu's new, unified Dandelion Dynasty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
    ]
};

export default function CocruPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_PLACES]);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <PlaceNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={convertPlaceData(placeData)} infoBoxTitle="Location Information" />
        </>
    );
}