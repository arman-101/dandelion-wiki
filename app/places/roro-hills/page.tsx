'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RORO HILLS ---
const placeData: Place = {
    name: "Roro Hills",
    image: "/places/roro-hills.png",
    introduction: "The Roro Hills are a strategically important region that became a significant battleground in the final war to liberate Dara from Lyucu occupation.",
    infoBox: {
        type: "Hill Range",
        continent: "Dara",
        KeyEvents: "Battle of the Roro Hills"
    },
    geography: [
        { type: 'text', content: "A range of hills providing a strong defensive position, making it an ideal location for a military stronghold." },
    ],
    culture: [
        { type: 'text', content: "The Roro Hills are not known for specific cultural attributes, but their name is now synonymous with the final conflicts that liberated Dara." },
    ],
    history: [
        {
            event: "The War of Restoration",
            summary: [
                { type: 'text', content: "The Roro Hills became the new capital and stronghold for the Lyucu occupation forces under Pékyu Tanvanaki after the Dara victory at Crescent Island. It was from here that she received intelligence about the impending reopening of the Wall of Storms." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 21, link: "/books/the-veiled-throne#chapter-21" } },
            ]
        },
    ]
};

export default function RoroHillsPage() {
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