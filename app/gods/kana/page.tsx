'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR KANA ---
const godData: God = {
    name: "Kana",
    image: "/gods/kana.png",
    introduction: "Kana is one of the twin patrons of Cocru, sister to Rapa. She is a formidable and often terrifying goddess who presides over fire, ash, cremation, and death, representing destructive and transformative forces.",
    infoBox: {
        Patronage: { text: "Cocru", link: "/places/cocru" },
        Domains: "Fire, Ash, Cremation, Death",
        Pawi: "Black Raven",
        Twin: { text: "Rapa", link: "/gods/rapa" },
    },
    mythology: [
        { type: 'text', content: "As a daughter of Daraméa, Kana represents one of the most destructive and transformative forces in the world. Her presence is often felt in moments of great calamity, such as volcanic eruptions and the fires of war." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
        { type: 'text', content: " She and her twin, Rapa, are intrinsically linked, representing the dual nature of existence—the heat of life and the cold of sleep, the finality of death and the peace of rest. In the myth of the Calendrical Dozen, their alliance as fire and ice was key to their success." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "The Temptation of Mata Zyndu",
            summary: [
                { type: 'text', content: "Disguised as an old woman on Wolf's Paw, Kana appears to a logistically trapped Mata Zyndu. She tempts him with a ruthless solution to his problem: sacrifice his 20,000 surrendered Imperial prisoners to the sea god Tazu in exchange for safe passage. Mata agrees, and this act of cold-blooded strategy forever earns him the moniker 'Butcher of Wolf's Paw,' marking a definitive break from his code of honor." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
            ]
        },
        {
            event: "The Divine Council",
            summary: [
                { type: 'text', content: "Kana is present in Emperor Mapidéré's deathbed dream, participating in the divine debate over his legacy and the future of Dara." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
    ]
};


export default function KanaPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_GODS]);
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