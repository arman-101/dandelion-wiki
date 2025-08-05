'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THOCO PASS ---
const placeData: Place = {
    name: "Thoco Pass",
    image: "/places/thoco-pass.png",
    introduction: "Thoco Pass is a strategically vital mountain pass that was the site of Marshal Dazu Zyndu's greatest victories and his ultimate, tragic defeat. It stands as a symbol of both Zyndu brilliance and the betrayal that led to their downfall.",
    infoBox: {
        type: "Mountain Pass",
        location: { text: "Cocru", link: "/places/cocru" },
        continent: "Dara",
        KeyEvents: "Betrayal of Marshal Dazu Zyndu"
    },
    geography: [
        { type: 'text', content: "A narrow and defensible mountain pass, Thoco Pass is a natural chokepoint, making it the perfect location for a smaller army to hold off a much larger invading force. It was the cornerstone of Marshal Zyndu's defensive strategy." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
    ],
    culture: [
        { type: 'text', content: "For the people of Cocru, and especially for Mata Zyndu, Thoco Pass represents a place of immense historical sorrow and anger. It is the location where their greatest hero was betrayed, not by the enemy, but by his own king, a memory that fuels the Zyndu quest for vengeance." },
    ],
    history: [
        {
            event: "The Xana Conquest",
            summary: [
                { type: 'text', content: "During the Xana invasion of Cocru, Marshal Dazu Zyndu, known as the 'Bearded Tortoise,' used the terrain of Thoco Pass to brilliantly hold off the superior Xana armies. However, his own king, suspicious of the Marshal's growing fame and power, ordered him to abandon his defensive position and meet the Xana in open battle. This foolish command led directly to the Marshal's defeat and capture. The subsequent massacre of his surrendered army by the Xana became the foundational tragedy of the Zyndu clan and a catalyst for Mata Zyndu's lifelong quest for revenge." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
            ]
        },
    ]
};

export default function ThocoPassPage() {
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