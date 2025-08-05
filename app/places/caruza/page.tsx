'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ÇARUZA ---
const placeData: Place = {
    name: "Çaruza",
    image: "/places/caruza.png",
    introduction: "Çaruza is the ancient capital of the kingdom of Cocru. During the Dandelion Rebellion, it was reclaimed and served as the political headquarters for the Grand Council of the allied Tiro states.",
    infoBox: {
        type: "Royal Capital City",
        state: { text: "Cocru", link: "/places/cocru" },
        continent: { text: "Dara", link: "/places/dara" },
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
                { type: 'text', content: "After being liberated from Xana rule, Çaruza became the capital of the restored kingdom of Cocru. It was here that the rebels installed the humble shepherd Thufi as the new king." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
                { type: 'text', content: "King Thufi convened the Grand Council of War in Çaruza, but it devolved into bickering. Later, backed by Mata Zyndu's military might, Thufi declared himself Princeps in the city. It was also in Çaruza that the 'Princeps's Promise' was made, granting the kingship of Géfica to whoever could capture Pan." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/the-grace-of-kings#chapter-26" } },
            ]
        },
        {
            event: "The Hegemon's Court",
            summary: [
                { type: 'text', content: "Princess Kikomi arrived in Çaruza as a celebrated hero after her 'escape' from the Xana. It was here that she enacted the tragic final step of her plan, murdering Phin Zyndu to sow discord between Mata and Kuni." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
                { type: 'text', content: "During Mata Zyndu's reign as Hegemon, Jia Matiza resided in Çaruza, feeling isolated in high society. It was here she hired the mysterious housekeeper Soto, who was secretly Mata's aunt, Soto Zyndu, and who became Jia's political mentor." },
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
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}