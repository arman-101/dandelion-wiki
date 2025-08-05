'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RUI ---
const placeData: Place = {
    name: "Rui",
    image: "/places/rui.png",
    introduction: "Rui is a large island that is part of the Xana nation and the symbolic heart of the old Xana homeland. It is critically important due to Mount Kiji, the sole source of the mystical lift gas that powers Dara's airships.",
    infoBox: {
        type: "Island",
        state: { text: "Xana", link: "/places/xana" },
        continent: { text: "Dara", link: "/places/dara" },
        capital: { text: "Kriphi", link: "/places/kriphi" },
        KeyLandmark: { text: "Mount Kiji", link: "/places/mount-kiji" }
    },
    geography: [
        { type: 'text', content: "Rui is a significant island located near the smaller island of Dasu. Its most vital geographical feature is Mount Kiji and the Lake Dako at its peak, which produces the lift gas essential for air travel and warfare in Dara." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
    ],
    culture: [
        { type: 'text', content: "As the Xana homeland, Rui represents the old imperial power. Under the Lyucu occupation, it becomes a center of cultural conflict, where the invaders attempt to erase Dara's traditions and syncretize the local gods, transforming the Temple of Kiji into the Temple of Péa-Kiji." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 16, link: "/books/the-veiled-throne#chapter-16" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "During the rebellion, the Xana bureaucrat Kindo Marana traveled to Rui to rebuild the Imperial air force. He found the Mount Kiji Air Base in a state of corrupt disrepair and ruthlessly restored it to efficiency." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
            ]
        },
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "Rui was the target of the first major offensive in Kuni Garu's war against Mata Zyndu. Marshal Gin Mazoti led a surprise attack through the abandoned undersea Grand Tunnels, capturing the island and its capital, Kriphi. This strategic victory gave Kuni control of the airship fleet and was a turning point in the war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "After being conquered by the Lyucu, Rui became, along with Dasu, the heart of their occupation. It was the site of the first major Dara victory against the invaders, the Battle of Kriphi Harbor, where Gin Mazoti's fleet of new 'phantom' airships devastated the Lyucu navy. The island remained a central point of conflict for the remainder of the war." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
            ]
        },
    ]
};

export default function RuiPage() {
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