'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR MOUNT KIJI (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Mount Kiji",
    image: "/places/mount-kiji.png",
    introduction: "Mount Kiji is a massive, snow-peaked volcano on the island of Rui. It is the single most important strategic location in Dara, as its crater lake is the sole source of the lighter-than-air gas used to power the empire's airships.",
    infoBox: {
        Region: "Rui, Xana",
        Type: "Volcano / Military Base",
        PatronGod: { text: "Kiji", link: "/gods/kiji" },
        NotableFeatures: "Lake Dako (source of lift gas), Imperial Air Base",
    },
    geography: [
        { type: 'text', content: "A towering, snow-capped volcano, Mount Kiji is the home of the sacred and fearsome Mingén falcons. Within its crater are two lakes: the large, blue Lake Arisuso, and the smaller, emerald-green Lake Dako. The gas that bubbles up from Lake Dako is the secret to Xana's air superiority." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/grace-of-kings#chapter-20" } },
    ],
    culture: [
        { type: 'text', content: "Mount Kiji is a place of immense military and spiritual importance. The Imperial Air Base located there is a hub of technological innovation and aeronautical engineering. For the people of Xana, the mountain is sacred to their patron god, Kiji, for whom it is named." },
    ],
    history: [
        {
            event: "The Unification Wars",
            summary: [
                { type: 'text', content: "Control of Mount Kiji and its lift gas was the key that allowed Emperor Mapidéré to build his unstoppable airship fleet and conquer the other Tiro states." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/grace-of-kings#chapter-20" } },
            ]
        },
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "During the rebellion, the air base fell into corrupt disrepair. The bureaucrat Kindo Marana was sent to restore it, successfully rebuilding the Imperial air force for a time." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/grace-of-kings#chapter-20" } },
                { type: 'text', content: " The island of Rui, and with it Mount Kiji, was eventually captured by Kuni Garu's forces in a surprise attack, a devastating blow to the Hegemon Mata Zyndu's war effort." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/grace-of-kings#chapter-43" } },
            ]
        },
    ]
};

export default function MountKijiPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}