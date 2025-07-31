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
    introduction: "The Eseeran Nomnny is a large, mysterious southern continent that appears on world maps. It is separated from the Lyucu Lands by the Chois Sea, but its people and history remain largely unknown to the inhabitants of Dara.",
    infoBox: {
        Region: "Southeastern Continent",
        Status: "Largely unexplored by the people of Dara",
        NotableFeatures: "Separated from Lyucu Lands by the Chois Sea",
    },
    geography: [
        { type: 'text', content: "Located south of Ukyu & Gondé, the Eseeran Nomnny is a massive landmass. Its specific geography, climate, and features are not detailed in the chronicles of the Dandelion Dynasty, making it a land of mystery." },
    ],
    culture: [
        { type: 'text', content: "The culture of the Eseeran Nomnny is unknown, as the narrative of the Dandelion Dynasty does not feature any interaction with its inhabitants." },
    ],
    history: [
        {
            event: "Role in the Saga",
            summary: [
                { type: 'text', content: "The Eseeran Nomnny serves primarily as a world-building element, illustrating the vastness of the world beyond the immediate conflict between Dara and the Lyucu Empire." },
            ]
        },
    ]
};

export default function EseeranNomnnyPage() {
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