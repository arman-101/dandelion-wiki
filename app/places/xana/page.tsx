'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR XANA ---
const godData: Place = {
    name: "Xana",
    image: "/places/xana.png",
    introduction: "Xana is one of the Seven States of Dara, a powerful island nation that, under the leadership of King Réon (later Emperor Mapidéré), conquered the other six states to forge the first unified Xana Empire. It is the original seat of imperial power and the homeland of the story's first antagonists.",
    infoBox: {
        type: "Island Nation / Empire",
        continent: { text: "Dara", link: "/places/dara" },
        capital: { text: "Pan", link: "/places/pan" },
        Ruler: "House of Xana (Emperor Mapidéré, Emperor Erishi)",
        PatronGod: { text: "Kiji", link: "/gods/kiji" },
        KeyTechnology: [
            { text: "Airships", link: "/concepts/airships" },
            { text: "Lift Gas", link: "/concepts/lift-gas" }
        ]
    },
    geography: [
        { type: 'text', content: "Xana is an island nation, separate from the main continent where the six Tiro states are located. Its most important geographical feature is Mount Kiji, the sole source of the mystical lift gas that powers its technologically superior airships, giving it a decisive military advantage." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
    ],
    culture: [
        { type: 'text', content: "Xanan culture is imperialistic, technologically advanced, and militaristic. They view the conquered Tiro states as backwards and in need of their unifying rule. Their power is symbolized by their vast airship fleet and grand imperial processions. Their patron god is Kiji, the Lord of the Air, whose dominion over the skies is reflected in Xana's aerial might." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
    ],
    history: [
        {
            event: "The Unification of Dara",
            summary: [
                { type: 'text', content: "Led by the ambitious King Réon, Xana used its technological superiority, particularly its airships, to conquer the six Tiro states, unifying the Islands of Dara for the first time. Réon declared himself Emperor Mapidéré, establishing the Xana Dynasty with its capital at Pan." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
            ]
        },
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "After years of tyrannical rule, the oppressed Tiro states rose up in rebellion. The Xana Empire, weakened by internal corruption, political intrigue, and a foolish boy-emperor, was unable to effectively counter the combined forces of the rebels. The rebellion culminated in the capture of Pan by Kuni Garu and the death of Emperor Erishi, bringing the short-lived Xana Dynasty to an end." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
            ]
        },
    ]
};

export default function XanaPage() {
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