'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ECOFI ISLAND ---
const placeData: Place = {
    name: "Ecofi Island",
    image: "/places/ecofi-island.png",
    introduction: "Ecofi Island is the location where the first Emperor of Dara, Mapidéré, died. It is a place of great historical significance, as it was the site of the coup that destabilized the Xana Empire and set the stage for the Dandelion Rebellion.",
    infoBox: {
        type: "Island",
        continent: "Dara",
        KeyEvents: "Death of Emperor Mapidéré, Forging of the False Decree"
    },
    geography: [
        { type: 'text', content: "Ecofi is one of the many islands in the Dara archipelago, chosen by the dying emperor for his final tour." },
    ],
    culture: [
        { type: 'text', content: "The island itself has no distinct culture mentioned, but it is imbued with the historical weight of the events that transpired there. It represents a place of transition, where one era ended and a new, chaotic one began." },
    ],
    history: [
        {
            event: "The Death of the Emperor",
            summary: [
                { type: 'text', content: "An aging and terminally ill Emperor Mapidéré was on a tour of the islands when he came to Ecofi. It was here that he had a powerful dream in which the gods of Dara appeared as giant statues and argued over his legacy, foreshadowing the coming war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'text', content: "As the Emperor lay dying on the island, his lifelong friend and Chatelain, Goran Pira, conspired with Prime Minister Lügo Crupo to stage a coup. They used the Emperor's seal to forge an Imperial decree naming the younger, more pliable Prince Loshi as the new heir. This false edict, sent from Ecofi, led to the suicide of the true heir and the ascent of the foolish Emperor Erishi, which directly precipitated the collapse of the Xana Dynasty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
    ]
};

export default function EcofiIslandPage() {
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