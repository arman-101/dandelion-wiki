'use client';

import PageTemplate, { convertConceptData } from '../../components/layout/PageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { ConceptNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THE AGON ---
const conceptData: Concept = {
    name: "The Agon",
    image: "/concepts/agon.png",
    introduction: "The Agon are a nomadic people from the southern part of Ukyu-Gondé and the ancient rivals of the Lyucu. Long exiled to the deserts, they become crucial allies to Princess Théra in her rebellion against the Lyucu empire.",
    infoBox: {
      "Origin": { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
      "Culture": "Exiled Warrior Society",
      "Key Figures": [
        { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
        { text: "Souliyan Aragoz", link: "/characters/souliyan-aragoz" }
      ]
    },
    details: [
        { type: 'text', content: "Like the Lyucu, the Agon are a hardy, nomadic people whose culture is shaped by the harsh scrublands and their relationship with garinafins. After being defeated by a unified Lyucu under Pékyu Tenryo, many Agon tribes were exiled to the great desert of Lurodia Tanta." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 48, link: "/books/the-wall-of-storms#chapter-48" } },
        { type: 'text', content: "Princess Théra and her husband, the Agon prince Takval Aragoz, forged an alliance with the exiled tribes to wage a guerrilla war against the Lyucu. This rebellion was nearly destroyed, but the survivors discovered a garinafin boneyard and developed new 'living bone' technology." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 29, link: "/books/speaking-bones#chapter-29" } },
        { type: 'text', content: "A pivotal moment for the Agon was the rediscovery of their true history. By exploring the ancient 'City of Ghosts,' they learned that they, like the Lyucu, were descended from a settled, agricultural society, shattering their foundational myths and opening the door to a new, peaceful future." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 7, link: "/books/speaking-bones#chapter-7" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 51, link: "/books/speaking-bones#chapter-51" } },
    ]
};

export default function AgonPage() {
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