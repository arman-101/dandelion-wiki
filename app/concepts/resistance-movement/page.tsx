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
        image: "/concepts/resistance-movement.png", // Ensure you have an image at this path
        introduction: "The multifaceted, organized efforts of the people of Dara to resist and ultimately overthrow the Lyucu occupation following the invasion across the Wall of Storms.",
        infoBox: {
            "Type": "Political & Military Movement",
            "Primary Goal": "Liberation of Dara",
            "Key Figures": [
                { text: "Princess Théra", link: "/characters/princess-thera" },
                { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" },
                { text: "Aya Mazoti", link: "/characters/aya-mazoti" },
                { text: "The Fish-Herder", link: "/characters/the-fish-herder" },
            ],
            "Book Appearances": [
                { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
                { text: "Speaking Bones", link: "/books/speaking-bones" }
            ]
        },
        details: [
            { type: "text" as const, content: "The Resistance Movement represents the collective efforts of the Dara people to fight back against the Lyucu occupation. This was not a single, unified front but rather a collection of disparate groups employing various methods. It included formal military campaigns led by figures like Empress Üna (Théra) in Ukyu-Gondé, covert intelligence and technology networks managed by Farsight Secretary Zomi Kidosu, and grassroots populist rebellions sparked by mysterious figures like the 'Fish-Herder' in the swamps of Géfica. The movement symbolizes the resilience of the Dandelion Dynasty's ideals in the face of foreign conquest." }
        ]
    };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <ConceptPageTemplate conceptData={resistanceMovementData} />
        </>
    );
}