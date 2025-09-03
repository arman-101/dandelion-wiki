'use client';

import PageTemplate, { convertConceptData } from '../../components/layout/PageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { ConceptNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR SILKMOTIC FORCE ---
const conceptData: Concept = {
    name: "Silkmotic Force",
    image: "/concepts/silkmotic-force.png",
    introduction: "The Silkmotic Force is the Daran term for static electricity. In the state of Faça, it was developed from a simple principle for street magic into a practical and powerful tool for warfare, showcasing the Dandelion Dynasty's emphasis on technological innovation.",
    infoBox: {
        Type: "Scientific Principle (Static Electricity)",
        Origin: { text: "Faça", link: "/places/faca" },
        Applications: "Electrical Storage (Ogé Jar), Warfare (Lances, Crossbows, Guided Missiles)",
        KeyInnovators: "Consort Risana, Prince Phyro, Rati Yera",
    },
    details: [
        { type: 'text', content: "For generations, the street performers of Faça used the properties of rubbed silk and amber to create entertaining illusions. This was considered a low-class curiosity until it was investigated by Prince Phyro and Consort Risana. They uncovered the scientific principles behind the Ogé Jar (a Leyden jar), a device capable of storing and discharging powerful electrical shocks." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 55, link: "/books/the-wall-of-storms#chapter-55" } },
        { type: 'text', content: "This research was weaponized during the Lyucu War. The Dara fleet used massive, silkmotic-powered crossbows and long lances that could electrocute garinafins, proving decisive at the Battle of Zathin Gulf." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 59, link: "/books/the-wall-of-storms#chapter-59" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
        { type: 'text', content: "Later, the inventor Rati Yera used a light-sensitive substance called oculium, which conducted the silkmotic force, to create a guidance system for the 'sunflower' missiles, a revolutionary new weapon." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 25, link: "/books/speaking-bones#chapter-25" } },
    ]
};

export default function SilkmoticForcePage() {
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