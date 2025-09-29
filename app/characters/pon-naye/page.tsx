


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import PonNayeClient from './PonNayeClient';

const characterData: Character = {
    name: "Pon Naye",
    introduction: "Pon Naye was a courageous and stoic Dara airship squadron commander who served under Marshal Gin Mazoti. He is remembered for his heroic sacrifice during the first major battle against the Lyucu.",
    infoBox: {
        aliases: "Commander Naye",
        occupation: "Airship Commander",
        placeOfBirth: "Dara",
        status: "Deceased",
        gender: "Male",
        affiliation: "Dara Imperial Air Force",
        nationality: "Daran",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Pon Naye is the epitome of a brave and dedicated soldier. He is a man of few words, defined by his actions and his unwavering courage in the face of impossible odds. He is a practical atheist, stating that he has never prayed despite facing death daily, putting his faith in his skills and his comrades." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Commander Pon Naye's singular appearance is marked by one of the most heroic acts of the Lyucu War." }
            ]
        },
        {
            era: "A Hero's Sacrifice",
            summary: [
                { type: 'text', content: "Commander Naye led a squadron of new 'phantom' airships during Marshal Gin's counter-invasion of Rui. During the Battle of Kriphi Harbor, when a garinafin attacked his ship, Pon Naye made the ultimate sacrifice. He ordered his crew to abandon ship while he steered the damaged vessel on a suicidal ramming course, successfully killing the war beast and securing a key moment in Dara's first victory against the invaders." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function PonNayePage() {
    return <PonNayeClient characterData={characterData} />;
}