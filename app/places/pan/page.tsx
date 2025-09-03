'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR PAN ---
const placeData: Place = {
    name: "Pan",
    image: "/places/pan.png",
    introduction: "Pan is the grand Imperial Capital of Dara, first established by the Xana Empire and later serving as the seat of power for the Dandelion Dynasty. It is the political, cultural, and administrative heart of the islands, and a frequent focal point for major historical events.",
    infoBox: {
        type: "Imperial Capital City",
        location: "Shores of Lake Tututika",
        continent: "Dara",
        Rulers: "Xana Empire, Dandelion Dynasty",
        KeyLandmarks: "Imperial Palace, Grand Audience Hall, Examination Hall"
    },
    geography: [
        { type: 'text', content: "Pan is a large, strategically located city built on the shores of the sacred Lake Tututika. Under Emperor Erishi, the Grand Audience Hall was famously redesigned into a giant, interactive map of Dara with wine-filled seas." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
    ],
    culture: [
        { type: 'text', content: "As the capital, Pan is the center of high culture, political intrigue, and imperial power. It is home to the most important institutions of the empire. The city's atmosphere reflects its current rulers—decadent under Emperor Erishi, but later bustling with innovation and political tension under the Dandelion Dynasty." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
    ],
    history: [
        {
            event: "The Xana Dynasty",
            summary: [
                { type: 'text', content: "Pan was the seat of power for the Xana emperors. It was here that Lügo Crupo staged his infamous 'deer and horse' incident and where Goran Pira enacted his long-planned revenge, leading to Crupo's execution." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 25, link: "/books/the-grace-of-kings#chapter-25" } },
            ]
        },
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "The city's capture was a major turning point in the rebellion. Kuni Garu, in an audacious move conceived by Luan Zya, used a small force of cruben-riders and airships to launch a surprise attack and capture Emperor Erishi." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
                { type: 'text', content: "Tragically, after the war, a paranoid Mata Zyndu refused Kuni Garu's peaceful handover of the city. Believing he had been betrayed, Mata burned Pan to the ground, killing the boy-emperor." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
            ]
        },
        {
            event: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "Rebuilt as the capital, Pan became a hotbed of political factionalism between the 'Swords' and the 'Abacus'. Later, it was the site of the Battle of Pan, where Emperor Phyro launched a surprise attack against his mother, Empress Jia, which ended in his tragic death." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 40, link: "/books/speaking-bones#chapter-40" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 44, link: "/books/speaking-bones#chapter-44" } },
            ]
        },
    ]
};

export default function PanPage() {
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