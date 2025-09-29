

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import TheBlossomGangClient from './TheBlossomGangClient';

const conceptData: Concept = {
    name: "The Blossom Gang",
    introduction: "The Blossom Gang is a group of talented outcasts based in Ginpen who use their unique skills in engineering, law, and performance art to help the common folk. They become key allies of Princess Fara and later, a crucial part of the resistance against Empress Jia's regency.",
    infoBox: {
      "Type": "Activist Collective / 'Family of Choice'",
      "Base of Operations": { text: "Ginpen", link: "/places/ginpen" },
      "Key Members": "Rati Yera, Widi Tucru, Arona Taré, Mota Kiphi",
      "Key Allies": [
          { text: "Princess Fara", link: "/characters/princess-fara" },
          { text: "Kinri", link: "/characters/kinri" },
          { text: "Emperor Phyro", link: "/characters/prince-phyro" }
      ]
    },
    details: [
        { type: 'text', content: "The Blossom Gang is a 'family of choice' composed of brilliant individuals failed by the system: Rati Yera, a master machinist; Widi Tucru, a brilliant litigator; Arona Taré, an actress and master of disguise; and Mota Kiphi, a stoic strongman. Their philosophy is one of freedom, creativity, and using their talents to help the common people." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 34, link: "/books/the-veiled-throne#chapter-34" } },
        { type: 'text', content: "They ally with Princess Fara and Kinri to defeat the unscrupulous merchant Tiphan Huto in a restaurant contest, not with wealth, but with superior ingenuity and storytelling, creating marvels like self-driving delivery carts. Their investigation exposes Huto's criminal activities, including kidnapping artisans for the Lyucu." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 42, link: "/books/the-veiled-throne#chapter-42" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 46, link: "/books/the-veiled-throne#chapter-46" } },
        { type: 'text', content: "Later, they are activated by Emperor Phyro to build a grassroots movement for war. They organize veterans and fund propaganda to bypass Empress Jia's control, leading the protest that forces her to declare war. Mota Kiphi dies heroically during Phyro's final attack on Pan." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 18, link: "/books/speaking-bones#chapter-18" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 19, link: "/books/speaking-bones#chapter-19" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 42, link: "/books/speaking-bones#chapter-42" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function TheBlossomGangPage() {
    return <TheBlossomGangClient conceptData={conceptData} />;
}