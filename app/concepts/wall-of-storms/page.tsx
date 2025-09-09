

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import TheWallofStormsClient from './TheWallofStormsClient.tsx';

// --- DATA FOR THE WALL OF STORMS ---
const conceptData: Concept = {
    name: "The Wall of Storms",
    image: "/concepts/wall-of-storms.png",
    introduction: "The Wall of Storms is a colossal, permanent typhoon system that isolates the islands of Dara from the continent of Ukyu-Gondé. It is a seemingly impassable natural barrier that shapes the worldview and history of both civilizations.",
    infoBox: {
        Type: "Superstorm / Natural Barrier",
        Location: "Eastern Sea",
        Significance: "Geographic isolation, Symbol of the unknown",
    },
    details: [
        { type: 'text', content: "For generations, the Wall of Storms was considered impassable, leading the people of Dara to believe they were alone in the world. Luan Zya was the first Daran to scientifically chart the high-altitude wind currents of the storm, a journey that led to his capture by the Lyucu." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 44, link: "/books/the-wall-of-storms#chapter-44" } },
        { type: 'text', content: "The Lyucu possessed the navigational knowledge to find temporary passages through the storm, allowing them to invade Dara. Luan Zya, forced to help them, secretly embedded a fatal flaw in their calculations for their reinforcement fleet." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 50, link: "/books/the-wall-of-storms#chapter-50" } },
        { type: 'text', content: "Princess Théra later led her own expedition through the storm to wage a counter-war in the Lyucu homeland. The storm itself ultimately destroyed the Lyucu reinforcement fleet, fulfilling Luan Zya's final, posthumous act of sabotage." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 62, link: "/books/the-wall-of-storms#chapter-62" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function TheWallofStormsPage() {
    return <TheWallofStormsClient conceptData={conceptData} />;
}