


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import NodaMiClient from './NodaMiClient';

const characterData: Character = {
    name: "Noda Mi",
    introduction: "Noda Mi was a cunning and strategic fallen king who became the mastermind behind the rebellious Hegemon Cults. Driven by ambition and resentment, he was a master of deception who later became a collaborator with the Lyucu invaders.",
    infoBox: {
        aliases: "The Cunning King",
        occupation: "Fallen King, Rebel Leader, Collaborator",
        placeOfBirth: "Dara",
        status: "Deceased",
        gender: "Male",
        affiliation: "Hegemon Cults, Lyucu Empire",
        nationality: "Daran",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Noda Mi is portrayed as a highly intelligent and manipulative strategist. He is a master of propaganda, as shown by his clever use of a cult-like scam and the 'magic mirrors' to build his rebel army. He is ambitious, patient, and utterly without scruples, willing to align with any power that will advance his own cause." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/the-wall-of-storms#chapter-20" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Noda Mi formed an alliance with Doru Solofi and started a rebellion in Tunoa. Using 'magic mirrors' to project an image of Mata Zyndu, they amassed a fanatical army. After their rebellion was crushed by Princess Théra, Noda fled and later resurfaced as a traitor during the Lyucu War, nearly costing Dara the victory at the Battle of Zathin Gulf." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As a high-ranking collaborator in the Lyucu occupation government, Noda Mi served as a secret go-between for Empress Jia and her captive son, Timu, all while plotting his own survival and advancement." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 19, link: "/books/the-veiled-throne#chapter-19" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "In the final, chaotic collapse of the Lyucu regime, Noda Mi made his last play for power. He betrayed and killed the hardliner Cutanrovo Aga after she murdered Pékyu Tanvanaki. He then murdered the stunned Emperor Timu, intending to use Timu's children as bargaining chips. His plot was foiled by Goztan Ryoto, who executed him for his treachery." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 43, link: "/books/speaking-bones#chapter-43" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function NodaMiPage() {
    return <NodaMiClient characterData={characterData} />;
}