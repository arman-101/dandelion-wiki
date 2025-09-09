

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import CrescentIslandClient from './CrescentIslandClient.tsx';

// --- DATA FOR CRESCENT ISLAND ---
const placeData: Place = {
    name: "Crescent Island",
    image: "/places/crescent-island.png",
    introduction: "Crescent Island is a remote, isolated island that serves as a key location in the education of Zomi Kidosu. It later becomes the site of a pivotal and bloody battle during the war against the Lyucu.",
    infoBox: {
        type: "Island",
        continent: "Dara",
        KeyEvents: "Zomi's education, Battle of Crescent Island"
    },
    geography: [
        { type: 'text', content: "Crescent Island is remote and sparsely populated, home to small hamlets of people who live a traditional life and speak an archaic dialect. It features treacherous mountains and is prone to natural disasters like forest fires." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 12, link: "/books/the-wall-of-storms#chapter-12" } },
    ],
    culture: [
        { type: 'text', content: "The inhabitants of Crescent Island live a simple, traditional life, preserving ancient customs and language. This makes the island a living museum of Dara's history." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 12, link: "/books/the-wall-of-storms#chapter-12" } },
    ],
    history: [
        {
            event: "The Education of Zomi Kidosu",
            summary: [
                { type: 'text', content: "Luan Zya took his young student, Zomi Kidosu, to Crescent Island to continue her education. It was also the site of a dramatic forest fire where Zomi's practical genius saved both the hamlet and her teacher's life." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 12, link: "/books/the-wall-of-storms#chapter-12" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 14, link: "/books/the-wall-of-storms#chapter-14" } },
            ]
        },
        {
            event: "The Battle of Crescent Island",
            summary: [
                { type: 'text', content: "During the final war against the Lyucu occupation, Crescent Island was the site of a major battle. Emperor Phyro led his new, secretly built army in a multi-stage assault, using innovative technology like ornithopter swarms and 'sunflower' guided missiles to achieve a costly but decisive victory over the Lyucu fleet commanded by Goztan Ryoto." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 22, link: "/books/speaking-bones#chapter-22" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 24, link: "/books/speaking-bones#chapter-24" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 26, link: "/books/speaking-bones#chapter-26" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function CrescentIslandPage() {
    return <CrescentIslandClient placeData={placeData} />;
}