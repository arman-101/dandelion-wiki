

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import LakeDakoClient from './LakeDakoClient';

// --- DATA FOR LAKE DAKO ---
const placeData: Place = {
    name: "Lake Dako",
    image: "/places/lake-dako.jpeg",
    introduction: "Lake Dako is a mystical lake located within the crater of the volcano Mount Kiji on the island of Rui. It is the sole and irreplaceable source of the magical lift gas that enables Dara's airships to fly, making it one of the most strategically vital locations in the world.",
    infoBox: {
        type: "Crater Lake",
        location: { text: "Mount Kiji, Rui", link: "/places/mount-kiji" },
        continent: "Dara",
        KeyResource: { text: "Lift Gas", link: "/concepts/lift-gas" }
    },
    geography: [
        { type: 'text', content: "Situated at the summit of a volcano, Lake Dako generates a seemingly endless supply of a gas that is lighter than air." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
    ],
    culture: [
        { type: 'text', content: "The lake and mountain are sacred to Kiji, the god of the air. The Mount Kiji Air Base, built on its shores, is the center of Dara's aerial power. Control of this location is synonymous with control of the skies." },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "The Xana Empire's power was built on their control of Lake Dako. During the rebellion, Kindo Marana traveled to the Mount Kiji Air Base and ruthlessly purged the incompetent administration to restore the flow of lift gas and rebuild the imperial air force." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "After the Lyucu conquered Rui, they took control of Mount Kiji and Lake Dako. The struggle to reclaim the source of air power was a central element of the war." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/the-wall-of-storms#chapter-40" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function LakeDakoPage() {
    return <LakeDakoClient placeData={placeData} />;
}