'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TUNOA ISLANDS (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Tunoa Islands",
    image: "/places/tunoa-islands.png",
    introduction: "The Tunoa Islands are a rugged archipelago in southern Dara that serve as the ancestral fiefdom of the Zyndu Clan. They are known for their fierce loyalty to the Zyndu name and their formidable stone castle.",
    infoBox: {
        Region: "Southern Dara",
        PatronGods: { text: "Kana & Rapa", link: "/gods" },
        NotableFeatures: "Ancestral home of the Zyndu Clan",
        NotableCharacters: [
            { text: "Mata Zyndu", link: "/characters/mata-zyndu" },
            { text: "Phin Zyndu", link: "/characters/phin-zyndu" },
        ],
    },
    geography: [
        { type: 'text', content: "A chain of islands with rugged coastlines, the Tunoa Islands are dominated by the ancestral castle of the Zyndu, a strong fortress that has stood for generations." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
    ],
    culture: [
        { type: 'text', content: "The culture of the Tunoa Islands is defined by an unshakable loyalty to the Zyndu clan. Even after the clan's fall from grace, the people of Tunoa revered their memory and were among the first to flock to Mata Zyndu's banner when he began his rebellion." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
    ],
    history: [
        {
            event: "Mata Zyndu's First Stand",
            summary: [
                { type: 'text', content: "The Tunoa Islands are where Mata Zyndu began his rebellion against the Xana Empire. After being summoned by the local Xana commander, Mata assassinated him, rallied the people, and single-handedly reclaimed his ancestral castle, establishing his first base of operations." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
            ]
        },
        {
            event: "The Hegemon Cults",
            summary: [
                { type: 'text', content: "Years into Emperor Ragin's reign, the Tunoa Islands became a hotbed for the Hegemon Cults, groups of rebels who venerated the ghost of Mata Zyndu. Prince Phyro was sent to the islands to quell this uprising." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/the-wall-of-storms#chapter-20" } },
            ]
        },
    ]
};

export default function TunoaIslandsPage() {
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