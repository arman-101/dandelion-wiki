'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR AIRSHIPS ---
const conceptData: Concept = {
    name: "Airships",
    image: "/concepts/airships.png",
    introduction: "Airships are the definitive 'silkpunk' technology of Dara. These magnificent lighter-than-air vessels, powered by the mystical Lift Gas from Mount Kiji, are the key to military and economic power, capable of projecting force across the islands in a way never before possible.",
    infoBox: {
        Technology: "'Silkpunk' aeronautics",
        PowerSource: { text: "Lift Gas", link: "/concepts/lift-gas" },
        PrimaryUsers: { text: "Xana & Dandelion Dynasties", link: "/places/xana" },
        KeyInnovation: "Battle Kites, Aerial Carriers",
    },
    details: [
        { type: 'text', content: "Developed by the engineers of Xana, the first airships were hulking warships that allowed Emperor Mapidéré to conquer the Tiro states. They are constructed with materials like silk for the gas envelopes and bamboo for the framing. In battle, they serve as aerial platforms for archers and bombers." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
        { type: 'text', content: "Under the Dandelion Dynasty, airship technology evolved rapidly. Kuni Garu's engineers, inspired by Luan Zya, developed smaller, more agile 'battle kites' and massive aerial carriers. This innovation continued under Princess Théra, who envisioned new designs and uses for aerial power, cementing the airship as the ultimate symbol of Daran ingenuity." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/the-grace-of-kings#chapter-41" } },
    ]
};

export default function AirshipsPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <ConceptPageTemplate conceptData={conceptData} />
        </>
    );
}