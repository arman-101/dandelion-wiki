

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import TiroCozoClient from './TiroCozoClient.tsx';

// --- DATA FOR TIRO COZO ---
const placeData: Place = {
    name: "Tiro Cozo",
    image: "/places/tiro-cozo.png",
    introduction: "Tiro Cozo is the secret military base where Emperor Phyro established his clandestine garinafin breeding and training program. It was the birthplace of Dara's new aerial army, created in defiance of Empress Jia's regency.",
    infoBox: {
        Type: "Secret Military Base",
        Location: "Dara",
        Significance: "Birthplace of Dara's garinafin army",
        FirstAppearance: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        KeyTechnology: [
            { text: "Garinafin Breeding", link: "/concepts/garinafin" },
            { text: "Ornithopters", link: "" },
            { text: "'Sunflower' Missiles", link: "" }
        ]
    },
    geography: [
        { type: 'text', content: "Tiro Cozo's location is a closely guarded secret, chosen for its isolation to allow for the development of a new army away from the eyes of Empress Jia and the Imperial Court in Pan." },
    ],
    culture: [
        { type: 'text', content: "The culture of Tiro Cozo was one of intense, focused military innovation. It was here that Dara's brightest engineers, like Rati Yera, and warriors worked under the command of Emperor Phyro and the harsh tutelage of the Lyucu defector Ofluro to master a new form of warfare." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 23, link: "/books/speaking-bones#chapter-23" } },
    ],
    history: [
        {
            event: "The Emperor's Secret Army",
            summary: [
                { type: 'text', content: "Frustrated by his mother's pacifist policies, Emperor Phyro established Tiro Cozo as a secret base to build his own army. He worked with Zomi Kidosu and the Blossom Gang to circumvent Jia's authority and secure funding and personnel." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
                { type: 'text', content: "The base became a hub of invention, where Rati Yera developed swarms of mechanical 'ornithopters' and light-guided 'sunflower' missiles. The garinafin force and new technologies created at Tiro Cozo were decisive in the final war against the Lyucu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 23, link: "/books/speaking-bones#chapter-23" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 25, link: "/books/speaking-bones#chapter-25" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function TiroCozoPage() {
    return <TiroCozoClient placeData={placeData} />;
}