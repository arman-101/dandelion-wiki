'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR LURODIA TANTA ---
const placeData: Place = {
    name: "Lurodia Tanta",
    image: "/places/lurodia-tanta.png",
    introduction: "The Lurodia Tanta is the vast, seemingly endless desert in Ukyu-Gondé. It is the harsh domain of the exiled Agon tribes, a place of extreme hardship and a crucible for the nascent rebellion led by Princess Théra and Takval Aragoz.",
    infoBox: {
        type: "Desert",
        location: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyInhabitants: { text: "Agon", link: "/concepts/agon" },
        KeyLandmark: { text: "Sliyusa Ki", link: "/places/sliyusa-ki" }
    },
    geography: [
        { type: 'text', content: "An immense desert of sand and rock, the Lurodia Tanta is an extremely arid and dangerous environment. Survival is a constant struggle. Its few sources of life are the scattered oases, such as Sliyusa Ki, which are vital centers of civilization." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 12, link: "/books/the-veiled-throne#chapter-12" } },
    ],
    culture: [
        { type: 'text', content: "The desert has shaped the Agon people who live there, making them hardy, resilient, and deeply knowledgeable about survival. Their culture is one of endurance, defined by their exile and their simmering resentment of the Lyucu who drove them there." },
    ],
    history: [
        {
            event: "The Dara Expedition's Trek",
            summary: [
                { type: 'text', content: "After landing in Ukyu-Gondé, Princess Théra's expedition was forced to make a grueling overland trek through the Lurodia Tanta to reach the Agon oasis of Sliyusa Ki. The harsh journey tested the crew to their limits and forced Théra to innovate, leading to her invention of a solar still to create potable water. This trek was the first great trial of the rebellion." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 12, link: "/books/the-veiled-throne#chapter-12" } },
            ]
        },
    ]
};

export default function LurodiaTantaPage() {
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