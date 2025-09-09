


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import KinriClient from './KinriClient.tsx';

const characterData: Character = {
    name: "Kinri",
    image: "/characters/kinri.png",
    introduction: "Kinri is a young man of mixed Lyucu-Dara heritage whose journey of self-discovery from a refugee to the truth of his identity as Savo Ryoto—the son of the powerful Lyucu thane Goztan Ryoto and the Dara storyteller Oga Kidosu—places him at the heart of the series' themes of identity, family, and cultural conflict.",
    infoBox: {
        aliases: "Savo Ryoto",
        occupation: "Refugee, Inventor",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        significantOther: { text: "Princess Fara", link: "/characters/princess-fara" },
        relatives: [
            { text: "Goztan Ryoto (mother)", link: "/characters/goztan-ryoto" },
            { text: "Oga Kidosu (father)", link: "/characters/oga-kidosu" },
            { text: "Zomi Kidosu (half-sister)", link: "/characters/zomi-kidosu" }
        ],
        affiliation: "The Blossom Gang, Dandelion Court",
        nationality: "Lyucu-Daran",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Kinri is intelligent, resourceful, and haunted by his past. Having witnessed the brutality of the Lyucu purges, he is driven by a deep need for truth. He has a natural talent for engineering and invention. His love for Princess Fara forces him to confront the deep divisions between his two cultures and to forge a new identity that honors both sides of his heritage." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As a boy named Savo in occupied Rui, he was tutored by a Dara scholar. After witnessing a massacre, his mother, Goztan Ryoto, arranged for his escape to Dara as a refugee named Kinri. In Ginpen, he fell in with the Blossom Gang and fell in love with Princess Fara. At the secret facility, Last Bite, he discovered his true parentage and his relation to Zomi Kidosu, forcing him to become a fugitive." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 22, link: "/books/the-veiled-throne#chapter-22" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 24, link: "/books/the-veiled-throne#chapter-24" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "As a fugitive, Kinri found peace at a pacifist monastery where he invented a 'writing zither.' He later reunited with Fara and, combining his invention with Rati Yera's engineering, created the 'book-mirror'—a printing press that was used to distribute Soto Zyndu's exposé on Empress Jia, playing a crucial role in the regent's downfall." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 30, link: "/books/speaking-bones#chapter-30" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 32, link: "/books/speaking-bones#chapter-32" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 48, link: "/books/speaking-bones#chapter-48" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function KinriPage() {
    return <KinriClient characterData={characterData} />;
}