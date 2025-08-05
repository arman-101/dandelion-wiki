'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR LAKE TUTUTIKA ---
const placeData: Place = {
    name: "Lake Tututika",
    image: "/places/lake-tututika.png",
    introduction: "Lake Tututika is a large, sacred lake named after the goddess of beauty and fresh water. Emperor Mapidéré chose its shores as the location for Pan, the 'Immaculate City,' his new imperial capital.",
    infoBox: {
        type: "Sacred Lake",
        location: { text: "Near Pan", link: "/places/pan" },
        continent: { text: "Dara", link: "/places/dara" },
        ControllingDeity: { text: "Tututika", link: "/gods/tututika" }
    },
    geography: [
        { type: 'text', content: "A large and beautiful freshwater lake, its scenic and tranquil nature made it a fitting location for an imperial capital intended to symbolize a new era of peace and unity under Xana rule." },
    ],
    culture: [
        { type: 'text', content: "The lake is sacred to the goddess Tututika and is a place of beauty and contemplation. It serves as a backdrop for some of the most critical political and personal moments in the series, often reflecting the emotional state of the characters and the empire." },
    ],
    history: [
        {
            event: "Founding of Pan",
            summary: [
                { type: 'text', content: "Emperor Mapidéré selected the shores of Lake Tututika for the site of his grand capital, Pan, moving the seat of power away from the traditional state capitals." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
            ]
        },
        {
            event: "A Goddess's Intervention",
            summary: [
                { type: 'text', content: "Years later, the goddess Tututika herself appeared in disguise as a mysterious lady to a young Princess Théra at the lake. She used the ripples in the water as a metaphor to teach the princess about the wavelike nature of light, giving Théra the crucial clue she needed to solve the riddle of the 'magic mirrors'." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
            ]
        },
        {
            event: "A Political Summit",
            summary: [
                { type: 'text', content: "During the Lyucu crisis, Empress Jia took the imprisoned Marshal Gin Mazoti on a boat ride on Lake Tututika. This seemingly pleasant outing was actually a high-stakes political negotiation, where Jia confessed her plots and convinced Gin to lead the war against the invaders in exchange for her freedom, forging a pragmatic alliance to save Dara." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 31, link: "/books/the-wall-of-storms#chapter-31" } },
            ]
        },
    ]
};

export default function LakeTututikaPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_PLACES]);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}