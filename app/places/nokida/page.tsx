'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR NOKIDA ---
const placeData: Place = {
    name: "Nokida",
    image: "/places/nokida.png",
    introduction: "Nokida is the capital city of the state of Géjira. After the Dandelion Rebellion, it became the seat of power for Queen Gin Mazoti, the first woman to rule a major state in her own right.",
    infoBox: {
        type: "Capital City",
        state: { text: "Géjira", link: "/places/gejira" },
        continent: "Dara",
        Ruler: { text: "Queen Gin Mazoti", link: "/characters/gin-mazoti" },
        KeyResidents: [
            { text: "Gin Mazoti", link: "/characters/gin-mazoti" },
            { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" }
        ]
    },
    geography: [
        { type: 'text', content: "Nokida is the central city of Géjira, a strategically important and productive region of Dara." },
    ],
    culture: [
        { type: 'text', content: "Under Queen Gin's rule, Nokida and the surrounding state of Géjira became a sanctuary for dissenters and a subtle check on the central imperial power in Pan. It was a place that valued martial strength and a degree of independence from the imperial court." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 28, link: "/books/the-wall-of-storms#chapter-28" } },
    ],
    history: [
        {
            event: "The Reign of Four Placid Seas",
            summary: [
                { type: 'text', content: "After Kuni Garu's coronation, Gin Mazoti was named Queen of Géjira and established her court in Nokida." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
                { type: 'text', content: "Zomi Kidosu served in Gin's court in Nokida for a time, acting as her advisor. It was from here that the defeated rebel leaders Noda Mi and Doru Solofi sought and received refuge from the queen, an act that asserted Gin's authority and put her in direct political opposition to Empress Jia." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 23, link: "/books/the-wall-of-storms#chapter-23" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 28, link: "/books/the-wall-of-storms#chapter-28" } },
            ]
        },
    ]
};

export default function NokidaPage() {
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