'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ÇARUZA ---
const placeData: Place = {
    name: "Çaruza",
    image: "/places/caruza.png",
    introduction: "Çaruza is the ancient capital of the kingdom of Cocru. During the Dandelion Rebellion, it was reclaimed and served as the political headquarters for the Grand Council of the allied Tiro states.",
    infoBox: {
        type: "Royal Capital City",
        state: { text: "Cocru", link: "/places/cocru" },
        continent: "Dara",
        KeyEvents: "Grand Council of War, Princeps's Promise"
    },
    geography: [
        { type: 'text', content: "As the historical capital of Cocru, Çaruza is a place of great symbolic and political importance, located centrally within the kingdom." },
    ],
    culture: [
        { type: 'text', content: "The city represents the heart of old Cocru nobility and tradition. Under the rebellion, it became a melting pot of the different Tiro cultures, but was also plagued by the infighting and revived rivalries of the various kings and nobles who gathered there." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "After being liberated, Çaruza became the capital of the restored kingdom of Cocru, where the rebels installed the humble shepherd Thufi as the new king. King Thufi convened the Grand Council of War in Çaruza, and later declared himself Princeps in the city. It was also in Çaruza that the 'Princeps's Promise' was made, a declaration that became a major catalyst for the subsequent civil war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/the-grace-of-kings#chapter-26" } },
            ]
        },
        {
            event: "The Hegemon's Court",
            summary: [
                { type: 'text', content: "Princess Kikomi arrived in Çaruza as a celebrated hero and enacted the tragic final step of her plan, murdering Phin Zyndu. During Mata Zyndu's reign, Jia Matiza resided in Çaruza, where she was mentored by the mysterious housekeeper Soto, who was secretly Mata's aunt, Soto Zyndu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/the-grace-of-kings#chapter-32" } },
            ]
        },
    ]
};

export default function CaruzaPage() {
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