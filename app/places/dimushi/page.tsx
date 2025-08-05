'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR DIMUSHI ---
const placeData: Place = {
    name: "Dimushi",
    image: "/places/dimushi.png",
    introduction: "Dimushi is a bustling, rough-and-tumble port city in Amu. It is the hometown of the legendary Marshal Gin Mazoti and later becomes a haven for fugitives and a center for the resistance.",
    infoBox: {
        type: "Port City",
        state: { text: "Amu", link: "/places/amu" },
        continent: { text: "Dara", link: "/places/dara" },
        KeyResidents: [
            { text: "Gin Mazoti", link: "/characters/gin-mazoti" },
            { text: "Kinri", link: "/characters/kinri" }
        ]
    },
    geography: [
        { type: 'text', content: "A major port, Dimushi is a nexus of trade, sailors, and the criminal underworld. Its strategic location on the coast makes it a vital economic and military asset." },
    ],
    culture: [
        { type: 'text', content: "Dimushi is a city of survivors. Its culture is shaped by the harsh realities of life on the streets and docks. It is a place where wit, strength, and ambition are valued above noble birth, a culture that produced a prodigy like Gin Mazoti. It has a thriving criminal underworld with its own codes of honor." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 40, link: "/books/the-grace-of-kings#chapter-40" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 12, link: "/books/speaking-bones#chapter-12" } },
    ],
    history: [
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "During the final stalemate of the war, the two opposing armies of Kuni Garu and Mata Zyndu faced each other across the Liru River, with Kuni's forces occupying Dimushi and Mata's in the nearby city of Dimu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 47, link: "/books/the-grace-of-kings#chapter-47" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "Decades later, the fugitive Kinri (Savo Ryoto) made his way to Dimushi. There, he used his wits to form an unlikely alliance with the city's criminal underworld, including a charismatic pirate queen, to secure a ship and crew for his mission to rescue Prince Timu from the Lyucu capital." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 12, link: "/books/speaking-bones#chapter-12" } },
            ]
        },
    ]
};

export default function DimushiPage() {
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