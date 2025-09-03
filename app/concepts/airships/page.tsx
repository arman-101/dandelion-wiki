'use client';

import PageTemplate, { convertConceptData } from '../../components/layout/PageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { ConceptNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR AIRSHIPS ---
const conceptData: Concept = {
    name: "Airships",
    image: "/concepts/airships.png",
    introduction: "Airships are the definitive 'silkpunk' technology of Dara. These magnificent lighter-than-air vessels, powered by the mystical Lift Gas from Mount Kiji, are the key to military and economic power, capable of projecting force across the islands in a way never before possible.",
    infoBox: {
        Technology: "'Silkpunk' aeronautics",
        PowerSource: { text: "Lift Gas", link: "/concepts/lift-gas" },
        PrimaryUsers: "Xana & Dandelion Dynasties",
        KeyInnovations: "Battle Kites, Phantom Airships, Silkmotic Saucers",
    },
    details: [
        { type: 'text', content: "Developed by the engineers of Xana, the first airships were hulking warships that allowed Emperor Mapidéré to conquer the Tiro states. In battle, they serve as aerial platforms for archers and bombers." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'text', content: "Under the Dandelion Dynasty, airship technology evolved rapidly. Luan Zya designed superior battle kites used to great effect at the Battle of Zudi. During the Lyucu War, further innovations led by Zomi Kidosu produced skeletal 'phantom' airships equipped with flamethrowers and semi-rigid, saucer-shaped vessels powered by flammable gas and armed with silkmotic weapons." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/the-grace-of-kings#chapter-22" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 59, link: "/books/the-wall-of-storms#chapter-59" } },
    ]
};

export default function AirshipsPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    return (
        <>
            <ConceptNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={convertConceptData(conceptData)} infoBoxTitle="Concept Information" />
        </>
    );
}