'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Cudyu Roatan",
    image: "/characters/cudyu-roatan.png",
    introduction: "Cudyu Roatan is the son of Pékyu Tenryo and brother to Tanvanaki. He is a ruthless and effective Lyucu commander, driven by a deep-seated belief in his people's superiority and their manifest destiny to conquer Dara.",
    infoBox: {
        aliases: "Prince Cudyu",
        occupation: "Lyucu Commander",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        relatives: [
            { text: "Pekyu Tenryo (father)", link: "/characters/pekyu-tenryo" },
            { text: "Tanvanaki (sister)", link: "/characters/tanvanaki" }
        ],
        affiliation: "Lyucu Empire",
        nationality: { text: "Lyucu", link: "/places/lyucu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Cudyu embodies the harsh, martial traditions of the Lyucu. He is a skilled warrior and commander, but he lacks his father's strategic patience and his sister's political acumen. He is straightforwardly brutal and disdainful of Dara's culture, seeing it as soft and decadent." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/the-wall-of-storms#chapter-46" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Along with his sister, Cudyu was part of the deception used to extract information from the captive Luan Zya, telling him a fabricated story about the fate of Mapidéré's expedition." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/the-wall-of-storms#chapter-46" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As a leading commander in the Lyucu homeland of Ukyu-Gondé, Cudyu is tasked with crushing the Agon rebellion led by Princess Théra and Takval Aragoz. He leads a devastating surprise attack on the secret Agon base in Kiri Valley, destroying it and capturing Théra's children. He becomes the primary military antagonist to the Agon rebellion." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
            ]
        },
    ]
};

export default function CudyuRoatanPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}