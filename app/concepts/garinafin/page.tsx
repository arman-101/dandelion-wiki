import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import GarinafinClient from './GarinafinClient';

// --- DATA FOR GARINAFIN ---
const conceptData: Concept = {
    name: "Garinafin",
    introduction: "Garinafin are enormous, flying war beasts native to Ukyu-Gondé that serve as the primary military force of the Lyucu Empire. These fearsome creatures are capable of breathing fire, making them devastating weapons of war.",
    infoBox: {
        Type: "Flying War Beast",
        Origin: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        Abilities: "Flight, Fire-breathing",
        PrimaryUsers: { text: "The Lyucu", link: "/concepts/lyucu" },
    },
    details: [
        { type: 'text', content: "Garinafin are central to Lyucu society and warfare. Their arrival in Dara represented a fundamental shift in military power, as their fiery breath could incinerate Dara's vaunted airships." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 37, link: "/books/the-wall-of-storms#chapter-37" } },
        { type: 'text', content: "Dara's scientists, led by Princess Théra and Zomi Kidosu, reverse-engineered their biology, discovering their flight was due to a lighter-than-air gas from gut fermentation, and their fire from a biological spark igniting this gas. They also discovered a key vulnerability: a specific plant was toxic to their digestive systems and caused a reproductive ailment." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 53, link: "/books/the-wall-of-storms#chapter-53" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 57, link: "/books/the-wall-of-storms#chapter-57" } },
        { type: 'text', content: "Later, Emperor Phyro established a secret breeding and training program at Tiro Cozo, with the help of the Lyucu defector Ofluro, to create a garinafin force for Dara." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function GarinafinPage() {
    return <GarinafinClient conceptData={conceptData} />;
}