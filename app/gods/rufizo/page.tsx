'use client';

import PageTemplate, { convertGodData } from '../../components/layout/PageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { GodNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RUFIZO ---
const godData: God = {
    name: "Rufizo",
    image: "/gods/rufizo.png",
    introduction: "Rufizo is the patron god of Faça, known throughout Dara as the Divine Healer. He represents compassion, restoration, and the gentle aspects of divinity, often acting as a voice of mercy.",
    infoBox: {
        Patronage: { text: "Faça", link: "/places/faca" },
        Domains: "Healing, Medicine, Compassion",
        Pawi: "Dove",
    },
    mythology: [
        { type: 'text', content: "As one of the eight deities born to Daraméa, Rufizo embodies the principle of mending what is broken. His influence is felt not just in physical healing but also in moments of reconciliation and mercy. His overwhelmingly compassionate nature was demonstrated in the ancient contest to create the calendar, where he revealed himself because he could not bear to see a fawn suffer from an injury." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "The Divine Council",
            summary: [
                { type: 'text', content: "Rufizo participates in the divine debate in Emperor Mapidéré's dream. He represents a more forgiving perspective, weighing the good the emperor achieved against the suffering he caused, showcasing his role as a figure of mercy among the gods." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
        {
            event: "Legacy and Syncretism",
            summary: [
                { type: 'text', content: "Years after the wars, Rufizo's compassionate philosophy endured. A pacifist sect in Rima, led by the former Lyucu thane Abbot Shattered Axe, worships a fused deity named Rufizo Mender/Toryoana Pacific, dedicated to alleviating suffering and renouncing vengeance." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 30, link: "/books/speaking-bones#chapter-30" } },
            ]
        },
    ]
};


export default function RufizoPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_GODS]);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <GodNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={convertGodData(godData)} infoBoxTitle="Divine Information" />
        </>
    );
}