

import type { Metadata } from 'next';
import { God } from '../../data/wiki-data';
import { generateGodMetadata } from '@/app/utils/metadata';
import LuthoClient from './LuthoClient';

// --- DATA FOR LUTHO ---
const godData: God = {
    name: "Lutho",
    introduction: "Lutho is the patron god of Haan, presiding over fishermen, divination, mathematics, and knowledge. He is a god of wisdom and strategy, whose interventions are subtle but have profound and lasting consequences.",
    infoBox: {
        Patronage: { text: "Haan", link: "/places/haan" },
        Domains: "Fishermen, Divination, Mathematics, Knowledge",
        Pawi: "Sea Turtle",
        SacredText: { text: "Gitré Üthu", link: "/concepts/gitre-uthu" }
    },
    mythology: [
        { type: 'text', content: "Lutho represents wisdom, calculation, and strategic thinking. His pawi, the sea turtle, symbolizes longevity and the slow but steady accumulation of knowledge. A young Zomi Kidosu once witnessed a divine battle between Lutho's sea turtle and Tazu's shark in the sky above Dasu." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
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
                { type: 'text', content: "During the debate among the gods regarding the Lyucu invasion, Lutho decides that the pact of non-interference has its limits. Believing the mortals need guidance, he chooses to take on mortal form to join Princess Théra's expedition. It is heavily implied he becomes the mysterious, mimic-gifted child Thoryo." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 11, link: "/books/the-veiled-throne#chapter-11" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateGodMetadata(godData);

export default function LuthoPage() {
    return <LuthoClient godData={godData} />;
}