'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RAPA ---
const godData: God = {
    name: "Rapa",
    image: "/gods/rapa.png",
    introduction: "Rapa is one of the twin patrons of Cocru, sister to Kana. A serene and patient deity, she governs the domains of ice, snow, glaciers, and sleep.",
    infoBox: {
        Patronage: { text: "Cocru", link: "/places/cocru" },
        Domains: "Ice, Snow, Glaciers, Sleep",
        Pawi: "White Raven",
        Twin: "Kana"
    },
    mythology: [
        { type: 'text', content: "Representing the quiet, stilling forces of nature, Rapa is the counterpart to her fiery twin, Kana. She embodies the peace of sleep and the patient, enduring power of ice. In the story of the Calendrical Dozen, the alliance of fire and ice between the twins allowed them to be among the first to find the hidden gods." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "The Dream of Emperor Mapidéré",
            summary: [
                { type: 'text', content: "Rapa appears in Emperor Mapidéré's deathbed dream, participating in the debate among the gods over his legacy. Her presence signifies the coming 'sleep' of the Xana Empire and the end of an era." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
    ]
};


export default function RapaPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_GODS);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <TopPageNavigation
                prevPage={prevPage}
                nextPage={nextPage}
                returnLink={returnLink}
            />
            <GodPageTemplate godData={godData} />
        </>
    );
}