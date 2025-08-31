'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR LIFT GAS ---
const conceptData: Concept = {
    name: "Lift Gas",
    image: "/concepts/lift-gas.png",
    introduction: "Lift Gas is the rare, lighter-than-air element that makes airship flight possible. Found only in a single, sacred location in Dara, control of this resource is the ultimate key to military supremacy.",
    infoBox: {
        Type: "Natural Resource",
        Properties: "Lighter-than-air, Non-flammable",
        Source: { text: "Lake Dako, Mount Kiji", link: "/places/mount-kiji" },
        StrategicImportance: "Essential for airship construction",
    },
    details: [
        { type: 'text', content: "The gas bubbles up from the depths of Lake Dako, a small, emerald-green lake within the crater of the volcano Mount Kiji on the island of Rui. The secrets of its extraction and refinement were closely guarded by the Xana Empire, giving them a technological monopoly that allowed for their conquest of Dara." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
        { type: 'text', content: "Because Mount Kiji is the only known source in the world, its capture is a primary strategic objective in every major war. When [[Gin Mazoti|/characters/gin-mazoti]] captured Rui for [[Kuni Garu|/characters/kuni-garu]] by surprise, it effectively crippled [[Mata Zyndu|/characters/mata-zyndu]]'s ability to build new airships, a turning point in the Chrysanthemum-Dandelion War." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
    ]
};

export default function LiftGasPage() {
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