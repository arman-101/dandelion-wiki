

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import ZathinGulfClient from './ZathinGulfClient.tsx';

// --- DATA FOR ZATHIN GULF ---
const placeData: Place = {
    name: "Zathin Gulf",
    image: "/places/zathin-gulf.png",
    introduction: "The Zathin Gulf is a large gulf on the coast of the Big Island. It was the site of the massive, climactic naval and aerial battle between the invading Lyucu forces and the full military might of the Dandelion Dynasty, a battle that claimed the life of Emperor Ragin.",
    infoBox: {
        type: "Gulf / Bay",
        location: "Coast of the Big Island",
        continent: "Dara",
        KeyEvents: "Battle of Zathin Gulf, Death of Emperor Ragin"
    },
    geography: [
        { type: 'text', content: "A significant coastal body of water, large enough to accommodate the two largest fleets ever assembled in the history of Dara for a final, decisive confrontation." },
    ],
    culture: [
        { type: 'text', content: "Zathin Gulf is now a place of immense historical and national significance for the Dandelion Dynasty, a symbol of both sacrifice and ultimate victory. It is the location where the founder of the dynasty made his final stand and where the future of Dara was secured." },
    ],
    history: [
        {
            event: "The Battle of Zathin Gulf",
            summary: [
                { type: 'text', content: "The battle was the culmination of the first Lyucu invasion. The Lyucu leader, Pékyu Tenryo, used a captured and dying Emperor Ragin as a human shield. In a final, heroic act, Kuni broke free, named Théra his successor, and took his own life." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 58, link: "/books/the-wall-of-storms#chapter-58" } },
                { type: 'text', content: "The ensuing battle was a massive engagement where the Dara forces, commanded by Marshal Gin Mazoti, unveiled new technologies. Despite suffering heavy losses, Gin crashed her flagship into the Lyucu command vessel and, with the aid of Zomi Kidosu, killed the Lyucu pékyu, shattering the invasion." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 59, link: "/books/the-wall-of-storms#chapter-59" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function ZathinGulfPage() {
    return <ZathinGulfClient placeData={placeData} />;
}