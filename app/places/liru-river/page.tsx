'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR LIRU RIVER ---
const placeData: Place = {
    name: "Liru River",
    image: "/places/liru-river.png",
    introduction: "The Liru River is a major river system that serves as a key strategic and psychological border in Dara. It was the site of the tense, final standoff between the armies of Kuni Garu and Mata Zyndu during the Chrysanthemum-Dandelion War.",
    infoBox: {
        type: "River System / Border",
        location: { text: "Cocru", link: "/places/cocru" },
        continent: { text: "Dara", link: "/places/dara" },
        KeyEvents: "The Standoff at Liru River"
    },
    geography: [
        { type: 'text', content: "The Liru River is a significant natural boundary. The cities of Dimu and Dimushi are located on its opposing banks, making the river crossing a major strategic objective in any conflict in the region." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 23, link: "/books/the-grace-of-kings#chapter-23" } },
    ],
    culture: [
        { type: 'text', content: "As a strategic border, the river represents division and conflict. It is a line on the map where armies face each other, and where the fates of nations are decided." },
    ],
    history: [
        {
            event: "The Standoff",
            summary: [
                { type: 'text', content: "After Mata Zyndu's surprise capture of Zudi, the two armies of the former sworn brothers faced each other across the Liru River in a tense stalemate. Mata held Kuni's father and wife Jia captive in Dimu, while Kuni's forces were in Dimushi. In a tense parley, Mata threatened to execute Kuni's father, but Kuni, in a masterful and cold-blooded bluff, pretended to be utterly ruthless and uncaring. The psychological gambit worked, and Mata spared his captive's life. This standoff marked the height of the psychological warfare between the two leaders, orchestrated by Luan Zya." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 47, link: "/books/the-grace-of-kings#chapter-47" } },
            ]
        },
    ]
};

export default function LiruRiverPage() {
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