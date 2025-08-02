'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR SILKMOTIC FORCE ---
const conceptData: Concept = {
    name: "Silkmotic Force",
    image: "/concepts/silkmotic-force.png",
    introduction: "The Silkmotic Force is the Daran term for static electricity. In the state of Faça, it was developed from a simple principle for street magic into a practical and powerful tool for warfare, showcasing the Dandelion Dynasty's emphasis on technological innovation.",
    infoBox: {
        Type: "Scientific Principle (Static Electricity)",
        Origin: { text: "Faça", link: "/places/faca" },
        Applications: "Illusions, Communication, Warfare (Flash-bangs)",
        KeyInnovator: { text: "Princess Théra", link: "/characters/princess-thera" },
    },
    details: [
        { type: 'text', content: "For generations, the street performers of Faça used the properties of rubbed silk and amber to create entertaining illusions. This was considered a low-class curiosity until the Dandelion Dynasty began to see its potential. Luan Zya was the first to recognize it as a legitimate field of scientific study." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
        { type: 'text', content: "Later, Princess Théra, with her engineering talent, harnessed the silkmotic force to create powerful flash-bang grenades. These devices were instrumental in the war against the Lyucu, demonstrating how an obscure piece of folk magic could be transformed into a decisive military technology under the Dandelion philosophy of innovation." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 25, link: "/books/the-wall-of-storms#chapter-25" } },
    ]
};

export default function SilkmoticForcePage() {
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