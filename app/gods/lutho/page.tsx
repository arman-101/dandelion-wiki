'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR LUTHO ---
const godData: God = {
    name: "Lutho",
    image: "/gods/lutho.png",
    introduction: "Lutho is the patron god of Haan, presiding over fishermen, divination, mathematics, and knowledge. He is a god of wisdom and strategy, whose interventions are subtle but have profound and lasting consequences.",
    infoBox: {
        Patronage: { text: "Haan", link: "/places/haan" },
        Domains: "Fishermen, Divination, Mathematics, Knowledge",
        Pawi: "Sea Turtle",
        SacredText: { text: "Gitré Üthu", link: "/concepts/gitre-uthu" }
    },
    mythology: [
        { type: 'text', content: "Lutho represents wisdom, calculation, and strategic thinking. His pawi, the sea turtle, symbolizes longevity and the slow but steady accumulation of knowledge. He values intellect and careful planning over brute force." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
        { type: 'text', content: "He is a key figure in the divine order, often acting as a balancing force to the more chaotic or warlike gods." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
    ],
    appearances: [
        {
            event: "The Gift of Gitré Üthu",
            summary: [
                { type: 'text', content: "Lutho's most significant act is his appearance to Luan Zya. Disguised as an old fisherman, he recognizes Luan's potential and gifts him the magical, self-writing book Gitré Üthu. This gift transforms Luan from a vengeful assassin into the master strategist of the Dandelion Rebellion, fundamentally altering the course of history." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
            ]
        },
        {
            event: "Joining the Mortal Realm",
            summary: [
                { type: 'text', content: "During the debate among the gods regarding the Lyucu invasion, Lutho decides that the pact of non-interference has its limits. Believing the mortals need guidance, he chooses to take on mortal form to join Princess Théra's expedition. It is implied he becomes the mysterious, mimic-gifted child Thoryo, who provides crucial, intuitive insights that save the expedition." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 11, link: "/books/the-veiled-throne#chapter-11" } },
            ]
        },
    ]
};

export default function LuthoPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_GODS]);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <GodPageTemplate godData={godData} />
        </>
    );
}