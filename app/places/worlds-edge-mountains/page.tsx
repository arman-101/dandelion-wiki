

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import WorldsEdgeMountainsClient from './WorldsEdgeMountainsClient';

// --- DATA FOR WORLD'S EDGE MOUNTAINS ---
const placeData: Place = {
    name: "World's Edge Mountains",
    image: "/places/worlds-edge-mountains.jpeg",
    introduction: "The World's Edge Mountains are a massive, formidable mountain range that marks the eastern boundary of the continent of Ukyu-Gondé. They serve as a place of refuge and rebirth for the Agon rebellion after a catastrophic defeat.",
    infoBox: {
        type: "Mountain Range",
        location: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyLandmarks: "Kiri Valley, The Boneyard"
    },
    geography: [
        { type: 'text', content: "A vast and rugged mountain range, difficult to traverse and largely unexplored. Its hidden valleys and remote peaks provide a natural sanctuary for those fleeing persecution." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
    ],
    culture: [
        { type: 'text', content: "The mountains are a place of deep spiritual significance for the Agon. They contain sacred sites that allow the rebellion to rediscover its history and forge a new future." },
    ],
    history: [
        {
            event: "Refuge and Rediscovery",
            summary: [
                { type: 'text', content: "After the destruction of their base in Kiri Valley, Princess Théra and the other survivors fled into the World's Edge Mountains. Her journey through the mountains was both a physical and a psychological one, as she recovered from her grief." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 45, link: "/books/the-veiled-throne#chapter-45" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 1, link: "/books/speaking-bones#chapter-1" } },
                { type: 'text', content: "It was here that the rebellion discovered a vast, ancient garinafin boneyard. The bones provided them with the materials to create new 'living bone' technology and the powerful 'arucuro tocua beasts,' turning the tide of their war against the Lyucu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 29, link: "/books/speaking-bones#chapter-29" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 31, link: "/books/speaking-bones#chapter-31" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function WorldsEdgeMountainsPage() {
    return <WorldsEdgeMountainsClient placeData={placeData} />;
}