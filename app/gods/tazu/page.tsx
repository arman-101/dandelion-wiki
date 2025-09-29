

import type { Metadata } from 'next';
import { God } from '../../data/wiki-data';
import { generateGodMetadata } from '@/app/utils/metadata';
import TazuClient from './TazuClient';

// --- DATA FOR TAZU ---
const godData: God = {
    name: "Tazu",
    introduction: "Tazu is the unpredictable and chaotic patron god of Gan. He governs the domains of sea currents, tsunamis, and sunken treasures, but more broadly represents the role of chance, luck, and randomness in the universe.",
    infoBox: {
        Patronage: { text: "Gan", link: "/places/gan" },
        Domains: "Sea Currents, Tsunamis, Sunken Treasures, Chance",
        Pawi: "Shark",
    },
    mythology: [
        { type: 'text', content: "Tazu is one of the most unpredictable and seemingly fickle gods in the pantheon. He delights in chaos and chance, often acting on whims that have massive consequences for mortals. His pawi, the shark, embodies his dangerous and predatory nature. As a child, Zomi Kidosu witnessed a fantastical battle in the sky between Tazu's shark and Lutho's sea turtle." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
    ],
    appearances: [
        {
            event: "The Sacrifice at Wolf's Paw",
            summary: [
                { type: 'text', content: "After the Battle of Wolf's Paw, Mata Zyndu is trapped by deadly whirlpools. Tempted by the goddess Kana, Mata makes a horrific bargain: he sacrifices 20,000 prisoners to Tazu. The sea god, pleased with the offering, stills the waters and allows Mata's fleet to pass safely." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
            ]
        },
        {
            event: "Orchestrating Rebellion",
            summary: [
                { type: 'text', content: "Tazu discusses the instability of Kuni's throne with the other gods, then appears as a mysterious boy to guide the disgraced king Doru Solofi to a meeting with the cunning Noda Mi, directly instigating the formation of the rebellious Hegemon Cults." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
            ]
        },
    ]
};


export const metadata: Metadata = generateGodMetadata(godData);

export default function TazuPage() {
    return <TazuClient godData={godData} />;
}