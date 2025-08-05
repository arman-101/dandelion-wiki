'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TAN ADÜ ---
const placeData: Place = {
    name: "Tan Adü",
    image: "/places/tan-adu.png",
    introduction: "Tan Adü is a remote southern island, considered 'savage' by the rest of Dara. It is the home of the legendary cruben-riders, whose alliance with Kuni Garu proves to be a decisive factor in the Dandelion Rebellion.",
    infoBox: {
        type: "Island",
        continent: "Dara",
        KeyInhabitants: "Cruben-Riders",
        KeyFeatures: "Crubens"
    },
    geography: [
        { type: 'text', content: "A remote island in the southern seas of Dara, isolated from the politics and conflicts of the Seven States." },
    ],
    culture: [
        { type: 'text', content: "The people of Tan Adü live in close harmony with nature, particularly the massive sea beasts known as crubens, which they ride as powerful naval mounts. While considered 'savage' by the more 'civilized' states, they possess a deep, practical wisdom. Their society is communal and values strength and a connection to the natural world. Luan Zya lived among them for a transformative period, learning their ways." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Following a daring plan by Luan Zya, Kuni Garu traveled to Tan Adü to recruit their cruben-riding warriors. This seemingly outlandish alliance was the key to his greatest strategic victory: a surprise amphibious and aerial assault on the Imperial capital of Pan, which he captured with his small force while the main rebel and Imperial armies were engaged elsewhere." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "During the war against the Lyucu, Dafiro Miro was sent to Tan Adü to again request their aid. He learned that the Adüans could no longer command the crubens due to a change in their relationship with their gods. However, Dafiro discovered a crucial piece of technology among them: a 'fire tube' (a fire piston), which provided the key insight into the biology of the garinafins' fire breath and led to new Dara weaponry." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 54, link: "/books/the-wall-of-storms#chapter-54" } },
            ]
        },
    ]
};

export default function TanAduPage() {
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