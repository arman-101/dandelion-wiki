


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import DafiroMiroClient from './DafiroMiroClient';

const characterData: Character = {
    name: "Dafiro Miro",
    introduction: "Dafiro Miro was a thoughtful and wise soldier who, along with his brother Ratho, was one of the first to shed blood in the Dandelion Rebellion. He evolved from a simple soldier into a key double agent and the loyal Captain of the Palace Guards for Emperor Ragin.",
    infoBox: {
        aliases: "Captain Miro",
        occupation: "Soldier, Spy, Captain of the Palace Guards",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Deceased",
        gender: "Male",
        relatives: [
            { text: "Ratho Miro (brother)", link: "/characters/ratho-miro" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Dafiro is the more cautious and thoughtful of the Miro brothers. He possesses a strategic mind and a deep sense of loyalty. He is a keen observer of people and events, which makes him an effective spy and a trusted advisor. Unlike his hot-headed brother, Dafiro is patient and willing to play the long game." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Dafiro's journey began at the very start of the rebellion, where his cleverness and loyalty set him on a path to the heart of the new empire." }
            ]
        },
        {
            era: "A Rebel's Rise",
            summary: [
                { type: 'text', content: "Dafiro and his brother Ratho were corvée laborers who sparked the first uprising by killing their guards and joining Huno Krima's rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
                { type: 'text', content: "During the Chrysanthemum-Dandelion War, he seemingly served Hegemon Mata Zyndu's commander, Kindo Marana. However, he was secretly working as a double agent for Kuni Garu. During Gin Mazoti's surprise attack on Rui, he revealed his true allegiance by assassinating Marana at a critical moment." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As a trusted agent of the Dandelion Throne, Dafiro undertook several crucial missions before making the ultimate sacrifice." }
            ]
        },
        {
            era: "The Emperor's Man",
            summary: [
                { type: 'text', content: "As Captain of the Palace Guards, Dafiro served as Emperor Ragin's secret agent, attempting to free the imprisoned Gin Mazoti. He later undertook a diplomatic mission to Tan Adü, where he discovered their 'fire tube' technology." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 33, link: "/books/the-wall-of-storms#chapter-33" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 54, link: "/books/the-wall-of-storms#chapter-54" } },
                { type: 'text', content: "In the final battle at Zathin Gulf, he boarded the Lyucu flagship with Gin Mazoti and died fighting bravely in the duel against Pékyu Tenryo." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function DafiroMiroPage() {
    return <DafiroMiroClient characterData={characterData} />;
}