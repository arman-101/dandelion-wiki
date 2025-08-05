'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Doru Solofi",
    image: "/characters/doru-solofi.png",
    introduction: "Doru Solofi was a disgraced former king who, along with the cunning Noda Mi, became a leader of the rebellious Hegemon Cults in Tunoa. He represents the lingering resentment of the old nobility against the Dandelion Dynasty.",
    infoBox: {
        aliases: "The Bully",
        occupation: "Fallen King, Rebel Leader",
        placeOfBirth: { text: "Dara", link: "/places/dara" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Hegemon Cults",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Doru Solofi is portrayed as a brutish and resentful man. Stripped of his titles and power, he is reduced to working as a common extortionist. He is a man of action rather than thought, providing the muscle for Noda Mi's more strategic leadership of their rebellion." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Doru first appears as a bully in a Pan tavern, attempting to extort a storyteller. He is thwarted by the imperial children and Zomi Kidosu. Later, in a city graveyard, he is led by an avatar of the god Tazu to a meeting with another fallen king, Noda Mi. They find common cause in their hatred for Emperor Ragin and swear an oath to start a new rebellion." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
                { type: 'text', content: "Their rebellion, centered in Tunoa, evolves into a dangerous cult venerating the ghost of Mata Zyndu, using 'magic mirrors' to build a fanatical army. The rebellion is ultimately crushed when Princess Théra arrives and uses her own mirror to expose their deception." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/the-wall-of-storms#chapter-20" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
            ]
        },
    ]
};

export default function DoruSolofiPage() {
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