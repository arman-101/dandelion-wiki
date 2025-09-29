

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import GéjiraClient from './GéjiraClient';

// --- DATA FOR GÉJIRA ---
const placeData: Place = {
    name: "Géjira",
    image: "/places/gejira.png",
    introduction: "Géjira is a major kingdom in Dara, granted to the legendary Marshal Gin Mazoti by Emperor Ragin after the Dandelion Rebellion. With its capital at Nokida, Géjira became the seat of Gin's power and a center of military influence, often acting as a political counterweight to the Imperial Court in Pan.",
    infoBox: {
        type: "Kingdom",
        continent: "Dara",
        capital: { text: "Nokida", link: "/places/nokida" },
        Ruler: { text: "Queen Gin Mazoti", link: "/characters/gin-mazoti" },
        KeyResidents: [
            { text: "Gin Mazoti", link: "/characters/gin-mazoti" },
            { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" },
            { text: "Noda Mi", link: "/characters/noda-mi" }
        ]
    },
    geography: [
        { type: 'text', content: "Géjira is a significant and resource-rich territory on the Big Island, representing a major portion of the lands once known as Géfica. Its strategic importance makes it a powerful seat for its ruler." },
    ],
    culture: [
        { type: 'text', content: "Under Queen Gin Mazoti's rule, Géjira became the heart of the 'Swords' faction of the Dandelion Court—a culture that valued martial prowess, loyalty, and a degree of independence. It also became known as a sanctuary for dissenters, as Gin granted refuge to the defeated rebel leaders Noda Mi and Doru Solofi." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 28, link: "/books/the-wall-of-storms#chapter-28" } },
    ],
    history: [
        {
            event: "Founding after the Rebellion",
            summary: [
                { type: 'text', content: "Following the end of the Chrysanthemum-Dandelion War, the newly crowned Emperor Ragin rewarded his most brilliant commander, naming Gin Mazoti the Queen of Géjira. This made her the first woman to rule a major state in Dara in her own right." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
            ]
        },
        {
            event: "A Center of Dissent",
            summary: [
                { type: 'text', content: "During the reign of Emperor Ragin, Géjira served as an important political center. Zomi Kidosu served in Queen Gin's court at Nokida for a time. After the Hegemon Cults were defeated, the fugitive leaders Noda Mi and Doru Solofi fled to Géjira. Gin's decision to grant them refuge was a clear assertion of her power and created significant political friction with Empress Jia." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 23, link: "/books/the-wall-of-storms#chapter-23" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 28, link: "/books/the-wall-of-storms#chapter-28" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function GéjiraPage() {
    return <GéjiraClient placeData={placeData} />;
}