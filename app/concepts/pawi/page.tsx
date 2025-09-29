

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import PawiClient from './PawiClient';

// --- DATA FOR PAWI ---
const conceptData: Concept = {
    name: "Pawi",
    introduction: "The pawi are the animal companions and physical manifestations of the gods of Dara. Each of the eight major deities is associated with a specific pawi, which acts as their agent, symbol, and a channel for their influence in the mortal world.",
    infoBox: {
        Type: "Divine Animal Companions",
        AssociatedWith: { text: "The Gods of Dara", link: "/gods" },
        Examples: "Kiji's Falcon, Lutho's Turtle, Tazu's Shark, Kana & Rapa's Ravens",
    },
    details: [
        { type: 'text', content: "The pawi are extensions of their respective gods' domains and personalities. For example, Kiji, the god of air, is represented by the swift Mingén falcon, while Tazu, the chaotic god of the sea, is represented by the shark." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
        { type: 'text', content: "The gods can observe the mortal world through the eyes of their pawi. A young Zomi Kidosu witnessed a fantastical battle in the sky between the pawi of Lutho (a great sea turtle) and Tazu (a monstrous shark). Years later, when the hardliner Cutanrovo Aga massacred the priests at the Temple of Kiji, the god's pawi, a giant Mingén falcon, appeared in response." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 30, link: "/books/the-veiled-throne#chapter-30" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function PawiPage() {
    return <PawiClient conceptData={conceptData} />;
}