'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TUNOA ISLANDS ---
const placeData: Place = {
    name: "Tunoa Islands",
    image: "/places/tunoa-islands.png",
    introduction: "The Tunoa Islands are the ancestral island fiefdom of the noble Zyndu clan. It is the place where Mata Zyndu was raised in exile, a constant reminder of his family's lost glory and his quest for vengeance.",
    infoBox: {
        type: "Archipelago Fiefdom",
        continent: { text: "Dara", link: "/places/dara" },
        capital: "Farun",
        Ruler: { text: "House of Zyndu", link: "/characters/mata-zyndu" },
    },
    geography: [
        { type: 'text', content: "An archipelago located some distance from the main continent, its relative isolation made it a suitable place for Phin Zyndu to hide and raise his nephew, Mata." },
    ],
    culture: [
        { type: 'text', content: "The islands are fiercely loyal to the Zyndu clan. Even after years of Xana rule, the people harbor a deep-seated resentment against the empire and a powerful devotion to the memory of their lost lords." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "At the start of the rebellion, Mata Zyndu reclaimed his ancestral home in Farun by assassinating the local Xana commander, Datun Zatoma. He and his uncle Phin then single-handedly slaughtered most of the 200-man garrison. This incredible feat of arms ignited the spirit of rebellion in the Tunoa Islands, and hundreds of volunteers flocked to join Mata's cause." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
            ]
        },
        {
            event: "The Hegemon Cults",
            summary: [
                { type: 'text', content: "During the reign of Emperor Ragin, the Tunoa Islands became a hotbed for the rebellious Hegemon Cults. Led by Noda Mi and Doru Solofi, these cults venerated the ghost of Mata Zyndu and used 'magic mirrors' to build a fanatical army, posing a serious threat to the Dandelion Dynasty." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/the-wall-of-storms#chapter-20" } },
            ]
        },
    ]
};

export default function TunoaIslandsPage() {
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