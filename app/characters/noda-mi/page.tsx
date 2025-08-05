'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Noda Mi",
    image: "/characters/noda-mi.png",
    introduction: "Noda Mi was a cunning and strategic fallen king who became the mastermind behind the rebellious Hegemon Cults. Driven by ambition and resentment, he later became a collaborator with the Lyucu invaders.",
    infoBox: {
        aliases: "The Cunning King",
        occupation: "Fallen King, Rebel Leader, Collaborator",
        placeOfBirth: "Dara",
        status: "Deceased",
        gender: "Male",
        affiliation: "Hegemon Cults, Lyucu Empire",
        nationality: "Dara",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Noda Mi is portrayed as a highly intelligent and manipulative strategist. He is a master of deception and propaganda, as shown by his clever use of a cult-like scam and the 'magic mirrors' to build his rebel army. He is ambitious, patient, and utterly without scruples, willing to align with any power that will advance his own cause." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/the-wall-of-storms#chapter-20" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "After being deposed by Kuni Garu, Noda Mi ran a scam in Pan based on the memory of Mata Zyndu. He formed an alliance with another fallen king, Doru Solofi, and they started a rebellion in Tunoa. Using 'magic mirrors' to project an image of the Hegemon, they amassed a large, fanatical army." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/the-wall-of-storms#chapter-20" } },
                { type: 'text', content: "After their rebellion was crushed by Princess Théra, Noda and Doru fled to Géjira and were granted refuge by Queen Gin Mazoti. Noda Mi later infiltrated the Dara fleet during the final Battle of Zathin Gulf, where his treacherous use of fire arrows to destroy the Imperial airships almost cost Dara the war." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 28, link: "/books/the-wall-of-storms#chapter-28" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
    ]
};

export default function NodaMiPage() {
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