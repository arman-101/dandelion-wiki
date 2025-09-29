

import type { Metadata } from 'next';
import { God } from '../../data/wiki-data';
import { generateGodMetadata } from '@/app/utils/metadata';
import RapaClient from './RapaClient';

// --- DATA FOR RAPA ---
const godData: God = {
    name: "Rapa",
    introduction: "Rapa is one of the twin patrons of Cocru, sister to Kana. A serene and patient deity, she governs the domains of ice, snow, glaciers, and sleep, representing the quiet, stilling forces of nature.",
    infoBox: {
        Patronage: { text: "Cocru", link: "/places/cocru" },
        Domains: "Ice, Snow, Glaciers, Sleep",
        Pawi: "White Raven",
        Twin: { text: "Kana", link: "/gods/kana" },
    },
    mythology: [
        { type: 'text', content: "Rapa is the counterpart to her fiery twin, Kana. She embodies the peace of sleep and the patient, enduring power of ice. Their alliance as fire and ice is a representation of the dual nature of existence." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
    ],
    appearances: [
        {
            event: "The Dream of Emperor Mapidéré",
            summary: [
                { type: 'text', content: "Rapa appears in Emperor Mapidéré's deathbed dream, participating in the debate among the gods over his legacy. Her presence alongside her more volatile twin signifies the coming 'sleep' of the Xana Empire and the end of an era, balancing destruction with rest." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
    ]
};


export const metadata: Metadata = generateGodMetadata(godData);

export default function RapaPage() {
    return <RapaClient godData={godData} />;
}