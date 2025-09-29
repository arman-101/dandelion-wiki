


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import RazutanaPonClient from './RazutanaPonClient';

const characterData: Character = {
    name: "Razutana Pon",
    introduction: "Razutana Pon is a Dara scholar of the Cultivationism school and a member of Princess Théra's expedition. She is one of the adult guardians who survives the Kiri Valley massacre and protects the children in the wilderness.",
    infoBox: {
        aliases: "The Scholar",
        occupation: "Scholar",
        placeOfBirth: "Dara",
        status: "Alive",
        gender: "Female",
        affiliation: "Dara Expeditionary Force, Agon Rebellion",
        nationality: "Daran",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Razutana is a dedicated scholar, though her clumsiness sometimes causes problems, such as accidentally setting off an explosion during the boarding of the Lyucu city-ship. She is courageous and resilient, surviving the destruction of the Agon base and taking on the responsibility of caring for the surviving children in a harsh, unforgiving environment." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 9, link: "/books/the-veiled-throne#chapter-9" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "A scholar on Théra's expedition, Razutana's practical knowledge was tested in the extreme. After the Lyucu attack on Kiri Valley, she and the Agon shaman Sataari became the sole adult guardians for a small band of children, including the sons of Théra, and led them to safety." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Razutana was a key part of the community at the 'City of Ghosts,' helping to establish a new settlement and rediscovering the Agon's true agricultural history. She was present for the final reunion with Princess Théra and became a founding member of the new, peaceful society at Taten-ryo-runa." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 7, link: "/books/speaking-bones#chapter-7" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 41, link: "/books/speaking-bones#chapter-41" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function RazutanaPonPage() {
    return <RazutanaPonClient characterData={characterData} />;
}