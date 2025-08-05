'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RORO HILLS ---
const placeData: Place = {
    name: "Roro Hills",
    image: "/places/roro-hills.png",
    introduction: "The Roro Hills are a strategically important region that became the final battleground in the war for Dara, serving as the last major stronghold for the Lyucu invaders.",
    infoBox: {
        type: "Hill Range",
        continent: "Dara",
        KeyEvents: "Final battle of the Lyucu War"
    },
    geography: [
        { type: 'text', content: "A range of hills providing a strong defensive position, making it an ideal location for a military stronghold." },
    ],
    culture: [
        { type: 'text', content: "The Roro Hills are not known for any specific cultural attributes, but their name is now synonymous with the final, brutal conflict that liberated Dara from the Lyucu." },
    ],
    history: [
        {
            event: "The Final Battle for Dara",
            summary: [
                { type: 'text', content: "In the final stages of the war against the Lyucu, their remaining forces established a formidable stronghold in the Roro Hills. Emperor Phyro led his new garinafin army in a desperate and bloody assault on this position. The battle was a brutal, hard-fought engagement, representing the final, decisive test of Phyro's leadership and the courage of the new Dara army. The victory at the Roro Hills marked the end of the Lyucu occupation on the main continent." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 35, link: "/books/speaking-bones#chapter-35" } },
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
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}