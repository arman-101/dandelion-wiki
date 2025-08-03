'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function ResistanceMovementPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    const resistanceMovementData: Concept = {
        name: "Resistance Movement",
        image: "/concepts/kuni-garu.png", // Placeholder image
        introduction: "The organized efforts of the Dara people to resist and overthrow Lyucu occupation.",
        infoBox: {
            "Type": "Political Movement",
            "Primary Goal": "Liberation of Dara",
            "Key Figures": [
                { text: "Princess Théra", link: "/characters/princess-thera" },
                { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" },
                { text: "Princess Aya", link: "/characters/princess-aya" }
            ],
            "Book Appearances": [
                { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
                { text: "Speaking Bones", link: "/books/speaking-bones" }
            ]
        },
        details: [
            { type: "text" as const, content: "The Resistance Movement represents the organized efforts of the Dara people to resist and ultimately overthrow the Lyucu occupation. This movement encompasses various forms of resistance, from underground networks to open rebellion, and involves people from all walks of life in Dara." }
        ]
    };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <ConceptPageTemplate conceptData={resistanceMovementData} />
        </>
    );
} 