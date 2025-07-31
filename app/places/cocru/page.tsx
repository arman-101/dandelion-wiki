'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR COCRU ---
const placeData: Place = {
    name: "Cocru",
    image: "/places/cocru.png",
    introduction: "Cocru is a vast, martial Tiro state in the southern region of the Big Island, famed for its sun-scorched plains and proud warrior traditions. It is the homeland of both Kuni Garu and the legendary Zyndu clan, and its divine patrons are the twin gods Kana and Rapa.",
    infoBox: {
        Region: "Southern Dara",
        Capital: "Çaruza",
        PatronGods: { text: "Kana & Rapa", link: "/gods" },
        NotableCharacters: [
            { text: "Mata Zyndu", link: "/characters/mata-zyndu" },
            { text: "Kuni Garu", link: "/characters/kuni-garu" },
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
            { text: "King Thufi", link: "/characters/king-thufi" },
        ],
    },
    geography: [
        { type: 'text', content: "Located on the southern half of the Big Island, Cocru is characterized by its wide, sun-parched alluvial plains, such as the Porin Plains." },
    ],
    culture: [
        { type: 'text', content: "Cocru's culture is deeply martial, valuing strength, honor, and military prowess above all else. Its academies are unique in that they teach the martial arts of wrestling, boxing, and swordsmanship alongside traditional scholarship." },
    ],
    history: [
        {
            event: "Rebellion against Xana",
            summary: [
                { type: 'text', content: "Cocru was a hotbed of rebellion against the Xana Empire. After the initial uprising by Huno Krima, the people of Cocru found a legitimate heir to their throne, a shepherd named Thufi, and crowned him king in the capital of Çaruza." },
            ]
        },
    ]
};

export default function CocruPage() {
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