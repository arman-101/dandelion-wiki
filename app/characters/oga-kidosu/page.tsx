


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import OgaKidosuClient from './OgaKidosuClient';

const characterData: Character = {
    name: "Oga Kidosu",
    introduction: "Oga Kidosu was a humble fisherman from Dasu and the long-lost father of Zomi Kidosu. After being lost at sea, he was enslaved by the Lyucu and became a key witness to their history and their brutal conquest of Emperor Mapidéré's lost expedition.",
    infoBox: {
        aliases: "The Storyteller",
        occupation: "Fisherman, Slave, Storyteller",
        placeOfBirth: { text: "Dasu", link: "/places/dasu" },
        status: "Deceased",
        gender: "Male",
        significantOther: [
            { text: "Aki Kidosu (wife)", link: "" },
            { text: "Goztan Ryoto", link: "/characters/goztan-ryoto" }
        ],
        relatives: [
            { text: "Zomi Kidosu (daughter)", link: "/characters/zomi-kidosu" },
            { text: "Savo Ryoto (Kinri) (son)", link: "/characters/kinri" }
        ],
        affiliation: "None",
        nationality: { text: "Dasu", link: "/places/dasu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Oga is a clever and resilient man who uses storytelling as a tool for survival and subtle resistance. Despite years of enslavement, he maintains his cultural identity and his love for his family. He is a man of quiet courage who endures immense hardship to protect others and preserve the truth." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 4, link: "/books/the-veiled-throne#chapter-4" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Presumed lost at sea years earlier, Oga was in fact enslaved by the Lyucu. He was discovered in a hidden cell by Luan Zya, to whom he revealed the true, brutal history of Mapidéré's lost expedition. He endured torture to protect Luan and died from his injuries after their escape attempt. His body, along with Luan's, was discovered by his long-lost daughter Zomi on Rui." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 50, link: "/books/the-wall-of-storms#chapter-50" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 51, link: "/books/the-wall-of-storms#chapter-51" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Flashbacks reveal Oga's early years in Ukyu-Gondé, where he used his cleverness to survive. He staged the 'discovery' of a prophetic turtle shell to manipulate an arrogant Dara captain and formed a complex, tense relationship with the young Lyucu warrior Goztan Ryoto, with whom he had a son, Savo (Kinri)." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 3, link: "/books/the-veiled-throne#chapter-3" } },
                 { type: 'ref', data: { book: "The Veiled Throne", chapter: 4, link: "/books/the-veiled-throne#chapter-4" } },
                 { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function OgaKidosuPage() {
    return <OgaKidosuClient characterData={characterData} />;
}