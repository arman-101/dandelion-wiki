'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR SEA OF TEARS ---
const placeData: Place = {
    name: "Sea of Tears",
    image: "/places/sea-of-tears.png",
    introduction: "The Sea of Tears is a large inland sea in Ukyu-Gondé, surrounded by vast salt flats. It is a place of ancient mystery and a grueling trial for the survivors of the Kiri Valley massacre.",
    infoBox: {
        type: "Inland Sea / Salt Flats",
        location: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyFeatures: "Salt Flats, Ancient Geoglyphs"
    },
    geography: [
        { type: 'text', content: "A massive inland sea, its shores have receded over millennia to leave behind vast, desolate salt flats. This harsh, unforgiving landscape is incredibly difficult to survive in." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
    ],
    culture: [
        { type: 'text', content: "The salt flats surrounding the Sea of Tears are home to ancient and mysterious geoglyphs—massive drawings of birds and other creatures etched into the landscape by a forgotten civilization. These discoveries hint at a deep, unrecorded history on the continent." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
    ],
    history: [
        {
            event: "The Children's Ordeal",
            summary: [
                { type: 'text', content: "After the destruction of Kiri Valley, the small band of child survivors, including Théra's sons, were led by their two adult guardians on a harrowing journey across the salt flats of the Sea of Tears. This journey was a crucible, forcing the children to learn to survive and rely on each other in one of the world's most inhospitable environments. The experience forged them into a new kind of family." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
            ]
        },
        {
            event: "A Gathering of Life",
            summary: [
                { type: 'text', content: "At the end of the entire saga, the survivors of the long wars gather on the shores of the Sea of Tears. It becomes a place of remembrance, healing, and celebration, a symbol of the hard-won peace and the beginning of a new era." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 58, link: "/books/speaking-bones#chapter-58" } },
            ]
        },
    ]
};

export default function SeaOfTearsPage() {
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