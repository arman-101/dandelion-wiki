'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR AMU ---
const godData: Place = {
    name: "Amu",
    image: "/places/amu.png",
    introduction: "Amu is one of the six Tiro states, an archipelago kingdom known for its powerful navy, skilled sailors, and the beauty of its people. It is the homeland of Consort Risana and the tragic Princess Kikomi.",
    infoBox: {
        type: "Archipelago Kingdom (Tiro State)",
        continent: "Dara",
        capital: { text: "Arulugi", link: "/places/arulugi" },
        Ruler: "House of Kon Fiji",
        PatronGod: { text: "Tututika", link: "/gods/tututika" },
        KeyExports: "Fish, Timber, Ships"
    },
    geography: [
        { type: 'text', content: "Amu is an archipelago, a collection of islands defined by its deep connection to the sea. Its geography shaped its people into the finest sailors in Dara, and its forests provided the timber for its legendary navy." },
    ],
    culture: [
        { type: 'text', content: "Amuan culture is deeply maritime. The people are known for their skill on the water and for their physical beauty, a trait often noted in characters like Princess Kikomi. The patron goddess of Amu is Tututika, who governs beauty and fresh water." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Like the other Tiro states, Amu rose up against the Xana Empire. However, their powerful navy was defeated at the Battle of Arulugi by the clever logistical tactics of Kindo Marana. After the defeat, Princess Kikomi was captured and made a deal with the enemy to save her people, an act that had tragic and far-reaching consequences for the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
            ]
        },
        {
            event: "The Reign of Emperor Ragin",
            summary: [
                { type: 'text', content: "Under the Dandelion Dynasty, Amu's strategic importance continued. The island of Arulugi became the site of a new rebellion, this time by Duke Théca Kimo against Emperor Ragin. The rebellion was crushed thanks to the illusionary smokecraft of the Amuan native, Consort Risana, showcasing that Amu's influence on the empire continued through its people at court." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
            ]
        },
    ]
};

export default function AmuPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_PLACES]);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={godData} />
        </>
    );
}