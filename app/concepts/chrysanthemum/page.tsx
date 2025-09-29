

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import TheChrysanthemumClient from './TheChrysanthemumClient';

// --- DATA FOR THE CHRYSANTHEMUM ---
const conceptData: Concept = {
    name: "The Chrysanthemum",
    introduction: "The Chrysanthemum represents the philosophy of Mata Zyndu, embodying tradition, nobility, and unbending honor in the face of adversity.",
    infoBox: {
        "Type": "Philosophical Symbol",
        "Opposing Philosophy": { text: "The Dandelion", link: "/concepts/dandelion" },
        "Key Proponent": { text: "Mata Zyndu", link: "/characters/mata-zyndu" },
        "Cultural Origin": "Emblem of the Zyndu Clan"
    },
    details: [
        { type: 'text', content: "The Chrysanthemum is the last flower to bloom against the winter, representing defiance, nobility, and the refusal to bend to harsh circumstances. This symbolism, enshrined in a poem recited by Mata Zyndu, perfectly captures his character." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
        { type: 'text', content: "Unlike the common dandelion that represents Kuni Garu's philosophy, the chrysanthemum embodies traditional values, noble birth, and an unbending code of honor that refuses to compromise. Mata's identification with the chrysanthemum reflects his background as the last heir of a great noble clan and his commitment to vengeance." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
        { type: 'text', content: "The contrast between the chrysanthemum and the dandelion represents the central philosophical conflict of the first book: tradition versus innovation, nobility versus meritocracy, and rigid honor versus pragmatic survival." },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function TheChrysanthemumPage() {
    return <TheChrysanthemumClient conceptData={conceptData} />;
}