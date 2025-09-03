import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Doru Solofi",
    image: "/characters/doru-solofi.png",
    introduction: "Doru Solofi was a disgraced former king who, along with the cunning Noda Mi, became a leader of the rebellious Hegemon Cults in Tunoa. He represents the lingering resentment of the old nobility against the Dandelion Dynasty.",
    infoBox: {
        aliases: "The Bully",
        occupation: "Fallen King, Rebel Leader",
        placeOfBirth: "Dara",
        status: "Deceased",
        gender: "Male",
        affiliation: "Hegemon Cults",
        nationality: "Daran",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Doru Solofi is portrayed as a brutish and resentful man. Stripped of his titles, he is reduced to working as a common extortionist. He is a man of action rather than thought, providing the muscle for Noda Mi's more strategic leadership of their rebellion." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Doru Solofi's resentment of the new dynasty made him a perfect pawn for divine meddling and a tool for more cunning schemers." }
            ]
        },
        {
            era: "The Fallen King",
            summary: [
                { type: 'text', content: "Doru first appears as a bully in a Pan tavern. Later, in a city graveyard, he is led by an avatar of the god Tazu to a meeting with another fallen king, Noda Mi. They find common cause in their hatred for Emperor Ragin and swear an oath to start a new rebellion." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
                { type: 'text', content: "Their rebellion evolves into a dangerous cult venerating the ghost of Mata Zyndu, using 'magic mirrors' to build a fanatical army. The rebellion is ultimately crushed when Princess Théra exposes their deception, after which Doru fled and was never heard from again." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/the-wall-of-storms#chapter-20" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function DoruSolofiPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}