'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RUFIZO ---
const godData: God = {
    name: "Rufizo",
    image: "/gods/rufizo.png",
    introduction: "Rufizo is the patron god of Faça, known throughout Dara as the Divine Healer. He represents compassion, restoration, and the gentle aspects of divinity.",
    infoBox: {
        Patronage: { text: "Faça", link: "/places/faca" },
        Domains: "Healing, Medicine, Compassion",
        Pawi: "Dove",
    },
    mythology: [
        { type: 'text', content: "As one of the eight deities born to Daraméa, Rufizo embodies the principle of mending what is broken. His influence is felt not just in physical healing but also in moments of reconciliation and mercy." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
        { type: 'text', content: " In the ancient contest to create the calendar, Rufizo was drawn out of hiding when he could not bear to see a yearling fawn suffer from an injury, demonstrating his overwhelmingly compassionate nature." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "Debate Over Mapidéré's Legacy",
            summary: [
                { type: 'text', content: "Rufizo participates in the divine debate over Emperor Mapidéré's soul and legacy. He represents a more forgiving perspective, weighing the good the emperor achieved against the suffering he caused, showcasing his role as a balancer and a figure of mercy among the gods." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
    ]
};


export default function RufizoPage() {
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