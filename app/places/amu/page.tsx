'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR AMU ---
const placeData: Place = {
    name: "Amu",
    image: "/places/amu.png",
    introduction: "Amu is one of the seven original states of Tiro, located in north-central Dara. It includes the island of Arulugi and the fertile mainland region of Géfica. Amu is known for its elegance, sophistication, and the divine patronage of Tututika, the goddess of agriculture and beauty.",
    infoBox: {
        Region: "North-central Dara",
        Capital: "Müning",
        PatronGod: { text: "Tututika", link: "/gods/tututika" },
        NotableCharacters: [
            { text: "Consort Risana", link: "/characters/consort-risana" },
            { text: "Princess Kikomi", link: "/characters/princess-kikomi" },
        ],
    },
    geography: [
        { type: 'text', content: "The state of Amu is split between the medium-sized island of Arulugi and the northeastern region of the Big Island." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 38, link: "/books/grace-of-kings#chapter-38" } },
    ],
    culture: [
        { type: 'text', content: "Amu culture is considered the most refined and sophisticated in Dara. The capital of Müning resembles a 'filigreed diadem floating over the water,' with tall, narrow houses connected by a network of arching bridges and hanging platforms." },
    ],
    history: [
        {
            event: "The Unification Wars",
            summary: [
                { type: 'text', content: "During Emperor Mapidéré's conquest of the Tiro states, Amu was a key battleground. The Imperial forces under Kindo Marana eventually conquered the island of Arulugi in a major naval and aerial battle." },
            ]
        },
    ]
};

export default function AmuPage() {
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