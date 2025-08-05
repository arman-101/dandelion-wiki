'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TAZU ---
const godData: God = {
    name: "Tazu",
    image: "/gods/tazu.png",
    introduction: "Tazu is the unpredictable and chaotic patron god of Gan. He governs the domains of sea currents, tsunamis, and sunken treasures, but more broadly represents the role of chance, luck, and randomness in the universe.",
    infoBox: {
        Patronage: { text: "Gan", link: "/places/gan" },
        Domains: "Sea Currents, Tsunamis, Sunken Treasures, Chance",
        Pawi: "Shark",
    },
    mythology: [
        { type: 'text', content: "Tazu is one of the most unpredictable and seemingly fickle gods in the pantheon. He delights in chaos and chance, often acting on whims that have massive consequences for mortals. His pawi, the shark, embodies his dangerous and predatory nature. Mortals pray to him not necessarily for favor, but often to avert his destructive attention." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
    ],
    appearances: [
        {
            event: "The Sacrifice at Wolf's Paw",
            summary: [
                { type: 'text', content: "After the Battle of Wolf's Paw, Mata Zyndu is trapped by the Imperial navy and the deadly whirlpools of the Kishi Channel. Tempted by the goddess Kana, Mata makes a horrific bargain: he sacrifices 20,000 surrendered prisoners to Tazu. The sea god, pleased with the massive offering, stills the waters and allows Mata's fleet to pass safely." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
            ]
        },
        {
            event: "Orchestrating a New Rebellion",
            summary: [
                { type: 'text', content: "At the start of a snowstorm over Pan, Tazu converses with Kiji, hinting at the instability of Kuni's throne. He then appears as a mysterious boy, an avatar, to guide the disgraced king Doru Solofi to a meeting with the cunning Noda Mi, directly instigating the formation of the rebellious Hegemon Cults." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
            ]
        },
    ]
};


export default function TazuPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_GODS]);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <TopPageNavigation
                prevPage={prevPage}
                nextPage={nextPage}
                returnLink={returnLink}
            />
            <GodPageTemplate godData={godData} />
        </>
    );
}