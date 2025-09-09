

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import TatenClient from './TatenClient.tsx';

// --- DATA FOR TATEN ---
const placeData: Place = {
    name: "Taten",
    image: "/places/taten.png",
    introduction: "Taten is the roaming tent-city that serves as the capital for the Pékyu of the Lyucu people in their homeland of Ukyu-Gondé. It is the center of Lyucu military and political power.",
    infoBox: {
        type: "Nomadic Capital City",
        location: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        Ruler: { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        KeyInhabitants: { text: "Lyucu", link: "/concepts/lyucu" }
    },
    geography: [
        { type: 'text', content: "As a nomadic city, Taten's location is not fixed. It moves across the vast scrublands of Ukyu-Gondé, following the needs of the pékyu's herds and armies." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 1, link: "/books/the-veiled-throne#chapter-1" } },
    ],
    culture: [
        { type: 'text', content: "Taten is the heart of the Lyucu's harsh, martial culture. Life in the tent-city is organized around the pékyu and the needs of the military. It is a place of warriors, garinafin riders, and complex clan politics." },
    ],
    history: [
        {
            event: "Center of the Invasion",
            summary: [
                { type: 'text', content: "Taten was the center from which Pékyu Tenryo planned and launched his invasion of Dara. Years later, after his death, his son Pékyu Cudyu prepared a massive reinforcement fleet there. However, the city became the site of his downfall when Théra's rebels infiltrated the city, sparked a garinafin uprising, and assassinated Cudyu with a booby-trapped coffin, destroying his invasion fleet before it could set sail." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 1, link: "/books/the-veiled-throne#chapter-1" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 16, link: "/books/speaking-bones#chapter-16" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function TatenPage() {
    return <TatenClient placeData={placeData} />;
}