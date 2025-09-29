

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import KigoYezuClient from './KigoYezuClient';

// --- DATA FOR KIGO YEZU ---
const placeData: Place = {
    name: "Kigo Yezu",
    image: "/places/kigo-yezu.jpeg",
    introduction: "Kigo Yezu was a Dara village in occupied Rui that became a tragic symbol of the brutality and fanaticism of the Lyucu purges led by the hardliner Cutanrovo Aga.",
    infoBox: {
        Type: "Village",
        Location: { text: "Rui", link: "/places/rui" },
        Significance: "Site of the Kigo Yezu Massacre",
        FirstAppearance: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        KeyEvents: "The Kigo Yezu Massacre"
    },
    geography: [
        { type: 'text', content: "Kigo Yezu was a village located within the Lyucu-occupied territory of Rui." },
    ],
    culture: [
        { type: 'text', content: "As a small Dara village under occupation, its culture was one of survival. Its destruction serves as a stark example of the Lyucu hardliners' goal of total cultural erasure." },
    ],
    history: [
        {
            event: "The Massacre at Kigo Yezu",
            summary: [
                { type: 'text', content: "The Lyucu thane Cutanrovo Aga came to Kigo Yezu searching for the young Lyucu noble Savo Ryoto (Kinri) and his secret Dara tutor, Nazu Tei. After Savo's naive intervention accidentally confirmed the forbidden relationship, Cutanrovo declared a military emergency. She brutally tortured the village elder's baby to extract a false confession about 'contraband' (a game set) and then ordered her garinafins to incinerate the entire village, massacring its inhabitants. The event was a horrifying display of Cutanrovo's fanaticism and the tragic consequences of Savo's good intentions." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function KigoYezuPage() {
    return <KigoYezuClient placeData={placeData} />;
}