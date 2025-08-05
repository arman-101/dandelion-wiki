'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR KRIPHI ---
const placeData: Place = {
    name: "Kriphi",
    image: "/places/kriphi.png",
    introduction: "Kriphi is the capital city of the island of Rui, the heart of the old Xana homeland. During the Lyucu occupation, it becomes the capital of 'Unredeemed Dara' and the seat of power for the Lyucu rulers.",
    infoBox: {
        type: "Capital City",
        state: { text: "Rui", link: "/places/rui" },
        continent: "Dara",
        Rulers: "Xana Empire, Lyucu Empire",
        KeyResidents: [
            { text: "Tanvanaki", link: "/characters/tanvanaki" },
            { text: "Prince Timu", link: "/characters/prince-timu" },
            { text: "Goztan Ryoto", link: "/characters/goztan-ryoto" }
        ]
    },
    geography: [
        { type: 'text', content: "Kriphi is a major port city on the island of Rui. Its harbor is a key strategic location for naval and aerial power in the northern islands." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
    ],
    culture: [
        { type: 'text', content: "Under the Lyucu, Kriphi is a city of tension and political strife. It is the center of the conflict between the hardline faction, which seeks to erase all traces of Dara culture, and the accommodationist faction, which advocates for a more integrated society. It is a place of purges, political maneuvering, and quiet resistance." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
    ],
    history: [
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "Using the forgotten Grand Tunnels, Gin Mazoti's army launched a stunning surprise attack on Rui, and the city of Kriphi fell quickly to Kuni Garu's forces. This swift victory was a major turning point in the war against Mata Zyndu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "After the Lyucu conquered Rui and Dasu, Kriphi became their capital. The Battle of Kriphi Harbor was the first major victory for the Dara forces against the invaders. Gin Mazoti led a daring night attack with new flamethrower-equipped airships, destroying much of the Lyucu navy." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
                { type: 'text', content: "It later became the center of the Lyucu court, where Prince Timu was held as a puppet emperor and where Kinri launched his daring rescue mission. The city's internal politics, dominated by the struggle between Cutanrovo Aga and Goztan Ryoto, ultimately led to the collapse of the Lyucu regime from within." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 43, link: "/books/speaking-bones#chapter-43" } },
            ]
        },
    ]
};

export default function KriphiPage() {
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