'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR MOUNT KIJI ---
const placeData: Place = {
    name: "Mount Kiji",
    image: "/places/mount-kiji.png",
    introduction: "Mount Kiji is a massive, snow-peaked volcano on the island of Rui. It is the most strategically important location in Dara, as its crater lake, Lake Dako, is the sole source of the mystical lift gas that allows airships to fly.",
    infoBox: {
        type: "Volcano",
        location: { text: "Rui", link: "/places/rui" },
        continent: "Dara",
        ControllingDeity: { text: "Kiji", link: "/gods/kiji" },
        KeyFeature: { text: "Lake Dako", link: "/places/lake-dako" },
        KeyResource: { text: "Lift Gas", link: "/concepts/lift-gas" }
    },
    geography: [
        { type: 'text', content: "A towering volcano, Mount Kiji dominates the landscape of Rui. At its summit is Lake Dako, the crater lake that produces lift gas." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
    ],
    culture: [
        { type: 'text', content: "The mountain is sacred to its patron god, Kiji, the Lord of the Air. The Mount Kiji Air Base, built to harvest the lift gas, is a symbol of imperial power and technological supremacy." },
    ],
    history: [
        {
            event: "The Xana Empire",
            summary: [
                { type: 'text', content: "The Xana Empire's military dominance was built upon its exclusive control of Mount Kiji's lift gas. During the rebellion, Kindo Marana had to ruthlessly restore the corrupt Air Base to functionality to rebuild the imperial fleet." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
            ]
        },
        {
            event: "The Lyucu Occupation",
            summary: [
                { type: 'text', content: "After the Lyucu invaded, they seized control of Mount Kiji. The hardline thane Cutanrovo Aga led a puritanical movement to erase Dara's culture, transforming the Temple of Kiji into the Temple of Péa-Kiji and destroying its sacred library and artifacts. The desecration of this holy site was a source of great anger for the god Kiji." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 16, link: "/books/the-veiled-throne#chapter-16" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 30, link: "/books/the-veiled-throne#chapter-30" } },
            ]
        },
    ]
};

export default function MountKijiPage() {
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