

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import TheLyucuClient from './TheLyucuClient';

// --- DATA FOR THE LYUCU ---
const conceptData: Concept = {
    name: "The Lyucu",
    introduction: "The Lyucu are a hardy, nomadic, and warlike people from the continent of Ukyu-Gondé. Their society is built around military prowess and a deep connection to their flying, fire-breathing war beasts, the garinafins. Their invasion of Dara presents an existential threat to the Dandelion Dynasty.",
    infoBox: {
      "Origin": { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
      "Culture": "Nomadic Warrior Society",
      "Key Technology": { text: "Garinafins", link: "/concepts/garinafin" },
      "Key Figures": [
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Tanvanaki", link: "/characters/tanvanaki" },
        { text: "Goztan Ryoto", link: "/characters/goztan-ryoto" }
      ]
    },
    details: [
        { type: 'text', content: "The Lyucu culture was forged by the harsh, unforgiving landscape of their homeland. Their society values strength, discipline, and conquest, with a social structure based on martial skill. Their entire way of life and military doctrine is founded on their mastery of the garinafins." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 48, link: "/books/the-wall-of-storms#chapter-48" } },
        { type: 'text', content: "Their long-planned invasion of Dara began decades earlier, when Pékyu Tenryo deceived and enslaved Emperor Mapidéré's lost expedition, using their knowledge to build an invasion fleet." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
        { type: 'text', content: "During their occupation of parts of Dara, the Lyucu were split between two factions: the hardliners, led by the fanatical Cutanrovo Aga, who sought to erase all Dara culture; and the accommodationists, led by Goztan Ryoto, who advocated for a more pragmatic approach. This internal conflict, combined with a crippling addiction to a substance secretly supplied by Empress Jia, led to their eventual collapse from within." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 37, link: "/books/speaking-bones#chapter-37" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 39, link: "/books/speaking-bones#chapter-39" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function TheLyucuPage() {
    return <TheLyucuClient conceptData={conceptData} />;
}