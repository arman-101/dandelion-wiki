'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR GÉFICA ---
const placeData: Place = {
    name: "Géfica",
    image: "/places/gefica.png",
    introduction: "Géfica is a rich and strategically vital territory in Dara. It is most famous for being the subject of the 'Princeps's Promise,' a declaration that became a major catalyst for the civil war between Kuni Garu and Mata Zyndu.",
    infoBox: {
        Type: "Territory / Region",
        Location: "Dara",
        Significance: "The subject of the Princeps's Promise",
        FirstAppearance: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        RelatedPlace: { text: "Géjira", link: "/places/gejira" }
    },
    geography: [
        { type: 'text', content: "Géfica is described as a rich and strategically important territory, making its promised kingship a prize worthy of the greatest commanders of the rebellion." }
    ],
    culture: [
        { type: 'text', content: "As a territory whose ownership was a major point of contention, the culture of Géfica is defined by its status as a great prize, coveted by the powerful." }
    ],
    history: [
        {
            event: "The Princeps's Promise",
            summary: [
                { type: 'text', content: "During the Dandelion Rebellion, the leader of the allied forces, King Thufi, made a binding public promise: any commander who captured the Imperial capital of Pan would be granted kingship over Géfica. This promise was aimed at motivating Kuni Garu, but when Kuni succeeded, Mata Zyndu felt betrayed, believing the glory and the prize were rightfully his. Mata declared the promise null and void, a key event that shattered their friendship and ignited the Chrysanthemum-Dandelion War." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/the-grace-of-kings#chapter-26" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
            ]
        },
    ]
};

export default function GeficaPage() {
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