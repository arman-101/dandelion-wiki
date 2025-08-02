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
    introduction: "Tazu is the unpredictable and chaotic patron god of Gan. He delights in chance and rules over sea currents, tsunamis, and sunken treasures.",
    infoBox: {
        Patronage: { text: "Gan", link: "/places/gan" },
        Domains: "Sea Currents, Tsunamis, Sunken Treasures, Chance",
        Pawi: "Shark",
    },
    mythology: [
        { type: 'text', content: "Tazu represents the wild, untamable nature of the sea. He is often seen as a trickster and a force of pure randomness, respected and feared in equal measure by sailors. His actions are rarely malicious but are driven by a desire for interesting and unpredictable outcomes." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
    ],
    appearances: [
        {
            event: "The Sacrifice at Kishi Channel",
            summary: [
                { type: 'text', content: "When Mata Zyndu is trapped on Wolf's Paw, he makes a horrific sacrifice of 20,000 prisoners to Tazu. In return for this 'interesting' act, the god clears a safe path for Mata's fleet through the deadly whirlpool, demonstrating his power over the sea and his appreciation for bold, chaotic actions." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
            ]
        },
        {
            event: "The Snowstorm over Pan",
            summary: [
                { type: 'text', content: "During a snowstorm, Tazu converses with his brother Kiji, mocking the neat and orderly stories mortals tell about history. He points out the 'dark stain' of betrayal at the foundation of Kuni's empire, revealing his philosophical belief that chaos and sin are inherent parts of the world that cannot be erased." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
            ]
        },
    ]
};


export default function TazuPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_GODS);
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