'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ZUDI ---
const placeData: Place = {
    name: "Zudi",
    image: "/places/zudi.png",
    introduction: "Zudi is a major city in the state of Cocru and the hometown of many of the Dandelion Dynasty's key figures, including Emperor Ragin (Kuni Garu), Empress Jia Matiza, and Prime Minister Cogo Yelu. It serves as a microcosm of the broader shifts in power and ideology throughout the saga.",
    infoBox: {
        type: "Major City",
        state: { text: "Cocru", link: "/places/cocru" },
        continent: { text: "Dara", link: "/places/dara" },
        KeyResidents: [
            { text: "Kuni Garu", link: "/characters/kuni-garu" },
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
            { text: "Rin Coda", link: "/characters/rin-coda" },
            { text: "Cogo Yelu", link: "/characters/cogo-yelu" }
        ]
    },
    geography: [
        { type: 'text', content: "Zudi is a bustling city with a vibrant marketplace. It is strategically important, and its control is contested multiple times throughout the wars. The city is located near the Er-Mé Mountains, where Kuni Garu first became a bandit." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
    ],
    culture: [
        { type: 'text', content: "The culture of Zudi reflects the broader culture of Cocru. It is a place of commerce, political maneuvering, and everyday life for the common people whose lives are upended by the grand conflicts of the era. It is home to the Splendid Urn, a tavern that becomes a key meeting place for the future leaders of the rebellion." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
    ],
    history: [
        {
            event: "Pre-Rebellion",
            summary: [
                { type: 'text', content: "Zudi was the site of the failed kite attack on Emperor Mapidéré, an event that profoundly influenced the young Kuni Garu. It was also where Kuni first met his future wife, Jia Matiza, after his clever defiance of a corrupt official in the city's marketplace." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
            ]
        },
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Kuni Garu captured Zudi early in the rebellion and proved to be a surprisingly effective administrator, restoring order and implementing a brilliant lottery-based tax system. The city then became a key rebel stronghold. It was the site of a major battle where Kuni and Mata Zyndu combined their skills—Kuni's tricks and Mata's valor—to break a siege led by the famed Xana general, Tanno Namen." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/the-grace-of-kings#chapter-22" } },
            ]
        },
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "During the civil war, Zudi remained a key strategic prize. In a brilliant and daring counterattack, Mata Zyndu used his entire air force to drop his soldiers into the city via battle kites, retaking it in a stunning surprise assault and trapping Kuni and his family." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 46, link: "/books/the-grace-of-kings#chapter-46" } },
                { type: 'text', content: "After the war, on the eve of his coronation as emperor, Kuni Garu returned to Zudi to hold one last, informal banquet with his oldest friends, honoring his humble roots in the city where his journey began." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
            ]
        },
    ]
};

export default function ZudiPage() {
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