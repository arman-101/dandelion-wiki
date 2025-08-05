'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ESEERAN NOMNNY ---
const placeData: Place = {
    name: "Eseeran Nomnny",
    image: "/places/eseeran-nomnny.png",
    introduction: "Eseeran Nomnny is a mysterious southern continent, far from the conflicts of Dara and Ukyu-Gondé. It is renowned for its remote warrior monasteries and is the home of the legendary Sword-Saint.",
    infoBox: {
        type: "Continent",
        KeyFeatures: "Warrior Monasteries",
        KeyInhabitants: { text: "The Sword-Saint", link: "/characters/the-sword-saint" }
    },
    geography: [
        { type: 'text', content: "Little is known about the geography of Eseeran Nomnny beyond the fact that it contains remote, isolated mountains where its warrior monks train." },
    ],
    culture: [
        { type: 'text', content: "The continent is defined by a deep and ancient martial philosophy. The warrior monasteries teach a form of combat that is as much a spiritual and mental discipline as it is a physical one. They value humility, dedication, and the stripping away of ego to achieve true mastery. Their training is legendarily brutal and effective." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 6, link: "/books/speaking-bones#chapter-6" } },
    ],
    history: [
        {
            event: "The Training of a Marshal",
            summary: [
                { type: 'text', content: "Eseeran Nomnny enters the story when Aya Mazoti, humbled after her disastrous first military command, seeks out the legendary Sword-Saint to retrain her. She travels to the remote monasteries and endures the grueling regimen. This intense training transforms her from a princess playing at war into a hardened, wise, and truly formidable commander, capable of leading Dara's armies to victory." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 6, link: "/books/speaking-bones#chapter-6" } },
            ]
        },
    ]
};

export default function EseeranNomnnyPage() {
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