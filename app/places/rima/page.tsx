

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import RimaClient from './RimaClient.tsx';

// --- DATA FOR RIMA ---
const placeData: Place = {
    name: "Rima",
    image: "/places/rima.png",
    introduction: "Rima is one of the six Tiro states, a forested northern kingdom whose tragic fall during the Dandelion Rebellion provided the rebellion with one of its most potent symbols of martyrdom.",
    infoBox: {
        type: "Kingdom (Tiro State)",
        continent: "Dara",
        Ruler: "King Jizu (Rebellion), Zato Ruthi (Civil War), Gin Mazoti (later)",
        PatronGod: { text: "Fithowéo", link: "/gods/fithoweo" },
        KeyFeatures: "Forests"
    },
    geography: [
        { type: 'text', content: "Rima is a heavily forested kingdom in the north of the Big Island, bordering Faça. Its dense forests are a key strategic feature of its landscape." },
    ],
    culture: [
        { type: 'text', content: "The people of Rima are associated with the martial and rugged aspects of their patron god, Fithowéo, the god of war and the hunt. The kingdom values honor and resilience, themes embodied in the tragic story of its fisherman-king, Jizu." },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Rima joined the rebellion against Xana and was ruled by the reluctant King Jizu. The kingdom was the target of a swift campaign by the Xana general, Tanno Namen. Due to the treachery of Rima's own commanders, King Jizu chose a noble death, burning himself alive in a final act of defiance. His martyrdom became a powerful symbol for the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/the-grace-of-kings#chapter-15" } },
            ]
        },
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "During the civil war, Rima was ruled by the scholar-king Zato Ruthi. The state was conquered by Marshal Gin Mazoti, who used brilliant and unconventional tactics to defeat Ruthi's traditional forces. Gin declared herself Queen of Rima and Faça, decisively shifting the balance of power in the war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function RimaPage() {
    return <RimaClient placeData={placeData} />;
}