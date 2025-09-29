

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import GinpenClient from './GinpenClient';

// --- DATA FOR GINPEN ---
const placeData: Place = {
    name: "Ginpen",
    image: "/places/ginpen.png",
    introduction: "Ginpen is the capital city of the learned kingdom of Haan. It is the birthplace of Luan Zya and later becomes the stage for a grassroots cultural and technological movement led by Princess Fara and the Blossom Gang.",
    infoBox: {
        type: "Capital City",
        state: { text: "Haan", link: "/places/haan" },
        continent: "Dara",
        KeyResidents: [
            { text: "Luan Zya", link: "/characters/luan-zya" },
            { text: "Princess Fara", link: "/characters/princess-fara" },
            { text: "The Blossom Gang", link: "/concepts/the-blossom-gang" }
        ]
    },
    geography: [
        { type: 'text', content: "Ginpen is a major city in Haan, known for its centers of learning and culture." },
    ],
    culture: [
        { type: 'text', content: "The city is the intellectual heart of Dara. During the Dandelion Dynasty, it becomes a hub of 'silkpunk' innovation, where artists and engineers create marvels like self-driving carts. It is a city that values creativity and storytelling as much as wealth and power." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 42, link: "/books/the-veiled-throne#chapter-42" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 44, link: "/books/the-veiled-throne#chapter-44" } },
    ],
    history: [
        {
            event: "The Xana Conquest",
            summary: [
                { type: 'text', content: "During the conquest, the noble families of inventors in Ginpen, including Luan Zya's clan, were massacred by the Xana forces." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
            ]
        },
        {
            event: "The Reign of Season of Storms",
            summary: [
                { type: 'text', content: "Years into the Dandelion Dynasty's reign, Ginpen becomes the setting for a vibrant cultural conflict centered around a restaurant rivalry. Princess Fara, in disguise, allies with the Blossom Gang. Their contest against a ruthless merchant showcases an explosion of creativity and becomes a new source of innovation for the empire." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 28, link: "/books/the-veiled-throne#chapter-28" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 46, link: "/books/the-veiled-throne#chapter-46" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function GinpenPage() {
    return <GinpenClient placeData={placeData} />;
}