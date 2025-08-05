'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TATEN ---
const placeData: Place = {
    name: "Taten",
    image: "/places/taten.png",
    introduction: "Taten is the roaming tent-city that serves as the capital for the Pékyu of the Lyucu people in their homeland of Ukyu-Gondé. It is the center of Lyucu military and political power.",
    infoBox: {
        type: "Nomadic Capital City",
        location: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        Ruler: { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        KeyInhabitants: { text: "Lyucu", link: "/concepts/lyucu" }
    },
    geography: [
        { type: 'text', content: "As a nomadic city, Taten's location is not fixed. It moves across the vast scrublands of Ukyu-Gondé, following the needs of the pékyu's herds and armies. It is often situated near significant locations, such as Victory Cove, where the captured Dara city-ships were kept." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 1, link: "/books/the-veiled-throne#chapter-1" } },
    ],
    culture: [
        { type: 'text', content: "Taten is the heart of the Lyucu's harsh, martial culture. Life in the tent-city is organized around the pékyu and the needs of the military. It is a place of warriors, garinafin riders, and the complex clan politics that define the Lyucu people." },
    ],
    history: [
        {
            event: "The Lyucu Power Seat",
            summary: [
                { type: 'text', content: "Taten was the center from which Pékyu Tenryo planned and launched his invasion of Dara. It was here that the captured Dara technology was studied and adapted for Lyucu use. It was also the site of the early political maneuvering of figures like Goztan Ryoto and the pékyu's children, Tanvanaki and Cudyu." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 1, link: "/books/the-veiled-throne#chapter-1" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
            ]
        },
    ]
};

export default function TatenPage() {
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