

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import ArulugiClient from './ArulugiClient';

// --- DATA FOR ARULUGI ---
const placeData: Place = {
    name: "Arulugi",
    image: "/places/arulugi.png",
    introduction: "Arulugi is the capital island of the state of Amu. It is the site of a key battle during the Dandelion Rebellion and, years later, the center of a new rebellion against the Dandelion Dynasty itself.",
    infoBox: {
        type: "Capital Island",
        state: { text: "Amu", link: "/places/amu" },
        continent: "Dara",
        KeyResidents: [
            { text: "Princess Kikomi", link: "/characters/princess-kikomi" },
            { text: "Théca Kimo", link: "/characters/theca-kimo" }
        ]
    },
    geography: [
        { type: 'text', content: "Arulugi is the main island in the Amu archipelago. Its capital is known as the City in the Lake." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
    ],
    culture: [
        { type: 'text', content: "The culture of Arulugi is tied to the sea and the proud naval traditions of Amu. It is a place of beauty, represented by its princess, Kikomi, and its patron goddess, Tututika." },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "The Battle of Arulugi was a major defeat for the rebellion. The Amu navy was outwitted by the Xana commander Kindo Marana's clever tactics. Following the battle, Princess Kikomi was taken captive and made her fateful deal with Marana to act as his agent." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
            ]
        },
        {
            event: "The Arulugi Rebellion",
            summary: [
                { type: 'text', content: "Years into Emperor Ragin's reign, Arulugi became the center of a new rebellion led by Duke Théca Kimo. The entire rebellion was a grand political gambit orchestrated by Empress Jia. The conflict ended when Consort Risana used her illusionary smokecraft to help Puma Yemu's forces take the capital by surprise." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 25, link: "/books/the-wall-of-storms#chapter-25" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function ArulugiPage() {
    return <ArulugiClient placeData={placeData} />;
}