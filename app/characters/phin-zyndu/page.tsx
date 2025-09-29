


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import PhinZynduClient from './PhinZynduClient';

const characterData: Character = {
    name: "Phin Zyndu",
    introduction: "Phin Zyndu was the uncle of Mata Zyndu and the devoted guardian of his family's legacy. He rescued the infant Mata from the Xana purge of their clan and raised him in exile with the sole purpose of achieving vengeance.",
    infoBox: {
        aliases: "Guardian of the Zyndu Legacy",
        occupation: "Warrior, Advisor",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Deceased",
        gender: "Male",
        significantOther: { text: "Princess Kikomi", link: "/characters/princess-kikomi" },
        relatives: [
            { text: "Dazu Zyndu (father)", link: "" },
            { text: "Mata Zyndu (nephew)", link: "/characters/mata-zyndu" },
            { text: "Soto Zyndu (sister)", link: "/characters/soto-zyndu" }
        ],
        affiliation: "House of Zyndu, Cocru Army",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Phin is portrayed as a stern and focused warrior, his entire being dedicated to the memory of his fallen family and the future of his nephew. He is a formidable fighter in his own right, though his skills are overshadowed by Mata's godlike prowess." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
        { type: 'text', content: "His personality is defined by the constant refrain he instilled in Mata: 'Do not forget.' He is a man driven by a single, all-consuming purpose, and he serves as his nephew's loyal second-in-command and advisor throughout the early rebellion." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Phin Zyndu was the sole survivor of his generation, a man whose life was dedicated to preserving his family's name and legacy of vengeance." }
            ]
        },
        {
            era: "A Life for Vengeance",
            summary: [
                { type: 'text', content: "As a boy of thirteen, Phin was the sole adult Zyndu to escape the Xana extermination of his clan, fleeing with the infant Mata to the Tunoa Islands. For years, he trained Mata and kept the fire of vengeance alive." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
                { type: 'text', content: "He fought alongside Mata to reclaim their ancestral castle, participating in the slaughter of the Xana garrison." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
                { type: 'text', content: "In the rebel capital of Çaruza, he, along with his nephew, fell in love with Princess Kikomi. This affection proved to be his undoing. As part of her secret pact to sow discord, Kikomi seduced Phin and then murdered him in his bed, a tragic end for the man who had survived so much to see his family's name restored." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function PhinZynduPage() {
    return <PhinZynduClient characterData={characterData} />;
}