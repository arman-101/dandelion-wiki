

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import SwordsVsAbacusClient from './SwordsVsAbacusClient';

// --- DATA FOR SWORDS VS. ABACUS ---
const conceptData: Concept = {
    name: "Swords vs. Abacus",
    image: "/concepts/swords-vs-abacus.png",
    introduction: "The 'Swords versus Abacus' represents the central political and philosophical conflict within the Dandelion Court. It is the struggle between the military old guard who won the rebellion ('Swords') and the new class of civil bureaucrats who manage the empire ('Abacus').",
    infoBox: {
        Type: "Political Conflict",
        "Swords Leaders": [
            { text: "Consort Risana", link: "/characters/consort-risana" },
            { text: "Gin Mazoti", link: "/characters/gin-mazoti" },
        ],
        "Abacus Leader": { text: "Empress Jia", link: "/characters/jia-matiza" },
        CoreDebate: "Heroic Individualism vs. Systemic Governance",
    },
    details: [
        { type: 'text', content: "The 'Swords' faction, led by figures like Consort Risana and Gin Mazoti, believed the empire's strength came from the heroic, martial virtues of its founders. They valued loyalty, honor, and the leadership of exceptional individuals, but grew to resent the rising power of the bureaucracy." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
        { type: 'text', content: "The 'Abacus' faction, led by Empress Jia, argued that a stable empire could not be run on heroism alone. They championed the creation of laws, systems, and a professional bureaucracy to ensure the fair and efficient administration of Dara, a vision embodied by the Grand Examination." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 21, link: "/books/the-wall-of-storms#chapter-21" } },
        { type: 'text', content: "This fundamental disagreement shaped the politics of Emperor Ragin's reign and was reflected in the divergent upbringings of his sons, the martial Prince Phyro ('Sword') and the scholarly Prince Timu ('Abacus')." },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function SwordsVsAbacusPage() {
    return <SwordsVsAbacusClient conceptData={conceptData} />;
}