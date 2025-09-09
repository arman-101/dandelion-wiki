

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import TanAdüClient from './TanAdüClient.tsx';

// --- DATA FOR TAN ADÜ ---
const placeData: Place = {
    name: "Tan Adü",
    image: "/places/tan-adu.png",
    introduction: "Tan Adü is a remote southern island, considered 'savage' by the rest of Dara. It is the home of the legendary cruben-riders, whose alliance with Kuni Garu proves to be a decisive factor in the Dandelion Rebellion.",
    infoBox: {
        type: "Island",
        continent: "Dara",
        KeyInhabitants: "Cruben-Riders",
        KeyTechnology: "Fire Piston ('fire tube')"
    },
    geography: [
        { type: 'text', content: "A remote island in the southern seas of Dara, isolated from the politics and conflicts of the Seven States." },
    ],
    culture: [
        { type: 'text', content: "The people of Tan Adü live in close harmony with nature, particularly the massive sea beasts known as crubens, which they ride as powerful naval mounts. While considered 'savage' by the more 'civilized' states, they possess a deep, practical wisdom." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Following a daring plan by Luan Zya, Kuni Garu traveled to Tan Adü to recruit their cruben-riding warriors. This seemingly outlandish alliance was the key to his greatest strategic victory: a surprise amphibious assault on the Imperial capital of Pan." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "Dafiro Miro was sent to Tan Adü to again request their aid, but learned they could no longer command the crubens. However, he discovered their 'fire tube' (a fire piston), a piece of technology that provided the key insight into the biology of the garinafins' fire breath." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 54, link: "/books/the-wall-of-storms#chapter-54" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function TanAdüPage() {
    return <TanAdüClient placeData={placeData} />;
}