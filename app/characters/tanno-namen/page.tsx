


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import TannoNamenClient from './TannoNamenClient';

const characterData: Character = {
    name: "Tanno Namen",
    introduction: "Tanno Namen was a legendary and honorable general of the Xana Empire, brought out of retirement to quell the Dandelion Rebellion. He represented the old guard of Xana, a man of immense skill and unwavering loyalty to the empire, even as it crumbled around him.",
    infoBox: {
        aliases: "The Old General",
        occupation: "General of the Xana Empire",
        placeOfBirth: { text: "Xana", link: "/places/xana" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Xana Empire",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Namen is portrayed as an old but still formidable warrior. His defining characteristic is his deep sense of honor and duty. He is a traditionalist who believes in fighting wars with dignity and despises the 'dirty' tricks and psychological warfare employed by Kuni Garu. Despite being an enemy to the protagonists, he is a deeply respected and honorable figure." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/the-grace-of-kings#chapter-22" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "As the last great general of a dying empire, Tanno Namen fought with honor against a new way of war." }
            ]
        },
        {
            era: "The Honorable Antagonist",
            summary: [
                { type: 'text', content: "Brought out of retirement by Kindo Marana, Namen led a swift campaign through Rima and then crushed Huno Krima's nascent rebellion at Dimu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/the-grace-of-kings#chapter-15" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 16, link: "/books/the-grace-of-kings#chapter-16" } },
                { type: 'text', content: "At the Battle of Zudi, he was outmaneuvered by the combined forces of Kuni's cunning and Mata's valor. Provoked by Kuni's taunts, he agreed to an aerial duel between champions, which his forces lost, shattering their morale and forcing a retreat." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/the-grace-of-kings#chapter-22" } },
                { type: 'text', content: "His final stand was at the Battle of Wolf's Paw. Facing a crushing defeat at the hands of Mata Zyndu's inspired army, the honorable general chose to take his own life rather than suffer the shame of surrender, having never been defeated before." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function TannoNamenPage() {
    return <TannoNamenClient characterData={characterData} />;
}