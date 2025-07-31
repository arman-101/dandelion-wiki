'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR HAAN ---
const placeData: Place = {
    name: "Haan",
    image: "/places/haan.png",
    introduction: "Haan is a woodsy and learned Tiro state in the northern half of the Big Island, renowned for its deep philosophical traditions, prestigious academies, and skilled inventors. Its patron god is Lutho, the god of knowledge and divination.",
    infoBox: {
        Region: "Northern Dara",
        Capital: "Ginpen",
        PatronGod: { text: "Lutho", link: "/gods/lutho" },
        NotableCharacters: [
            { text: "Luan Zya", link: "/characters/luan-zya" },
        ],
    },
    geography: [
        { type: 'text', content: "Located in the northern part of the Big Island, Haan is characterized by its dense forests and proximity to the Damu Mountains." },
    ],
    culture: [
        { type: 'text', content: "Haanese culture places a profound emphasis on scholarship, philosophy, and invention. The people are known for their intellectual pursuits and contributions to the Hundred Schools of thought." },
    ],
    history: [
        {
            event: "The Unification Wars",
            summary: [
                { type: 'text', content: "Haan was one of the last states to fall to Emperor Mapidéré's conquest, and its people harbored a deep resentment towards the Xana Empire. This resentment fueled assassination plots and resistance movements, such as Luan Zya's daring kite attack." },
            ]
        },
    ]
};

export default function HaanPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation
                prevPage={prevPage}
                nextPage={nextPage}
                returnLink={returnLink}
            />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}