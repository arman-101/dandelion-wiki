'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR WOLF'S PAW ---
const placeData: Place = {
    name: "Wolf's Paw",
    image: "/places/wolfs-paw.png",
    introduction: "Wolf's Paw is a southern island, part of the state of Gan, separated from the mainland by the treacherous Kishi Channel. It was the site of one of the largest and most consequential battles of the Dandelion Rebellion, and the location of one of Mata Zyndu's most horrific atrocities.",
    infoBox: {
        type: "Island",
        state: { text: "Gan", link: "/places/gan" },
        continent: { text: "Dara", link: "/places/dara" },
        KeyLandmark: { text: "Kishi Channel", link: "/places/kishi-channel" }
    },
    geography: [
        { type: 'text', content: "A large island off the southern coast of the Big Island, its proximity to the Kishi Channel, a deadly whirlpool, makes naval passage extremely dangerous." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
    ],
    culture: [
        { type: 'text', content: "The culture of Wolf's Paw is aligned with its parent state of Gan, but its history is forever marked by the devastating battle and subsequent massacre that took place on its shores." },
    ],
    history: [
        {
            event: "Battle of Wolf's Paw",
            summary: [
                { type: 'text', content: "The island was the site of the climactic battle between the main rebel forces, led by a grief-stricken and enraged Mata Zyndu, and the Imperial armies under Kindo Marana and Tanno Namen. Despite the mid-battle betrayal of his allies from Faça and Gan, Mata's godlike fury turned the tide, leading to a crushing rebel victory. The honorable Tanno Namen took his own life, and Kindo Marana was captured." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
            ]
        },
        {
            event: "The Massacre at Wolf's Paw",
            summary: [
                { type: 'text', content: "After the battle, Mata's massive army was trapped on the island by the remaining Imperial navy and the deadly Kishi Channel. Tempted by the goddess Kana, Mata committed a monstrous act of cold-blooded strategy. He tricked 20,000 surrendered Imperial prisoners onto poorly built ships and sent them into the whirlpool as a human sacrifice to the sea god Tazu. The act earned Mata the infamous title 'Butcher of Wolf's Paw' and marked his definitive break from his code of honor." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
            ]
        },
    ]
};

export default function WolfsPawPage() {
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