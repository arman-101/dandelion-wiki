'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "The Fish-Herder",
    image: "/characters/the-fish-herder.png",
    introduction: "The Fish-Herder is the mysterious and charismatic leader of a grassroots rebellion in the swamps of Géfica. Representing the rising power of the common folk, she organizes a formidable resistance against both the Lyucu invaders and the perceived weakness of the Dandelion Court.",
    infoBox: {
        aliases: "The Swamp Rebel",
        occupation: "Rebel Leader",
        placeOfBirth: { text: "Géfica", link: "/places/gefica" },
        status: "Alive",
        gender: "Female",
        affiliation: "Géfican Resistance",
        nationality: { text: "Géfican", link: "/places/gefica" },
        firstAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "The Fish-Herder's true identity is concealed, but her leadership is defined by her deep connection to the common people and her mastery of the unique geography of the swamps. She is a cunning and effective guerrilla leader, using her knowledge of the terrain to outwit a technologically superior foe." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 4, link: "/books/speaking-bones#chapter-4" } },
    ],
    history: [
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "The Fish-Herder emerges as a new power in Dara, organizing the fishermen and swamp-dwellers of Géfica into a potent resistance movement. Her forces employ guerrilla tactics and a secret communication network to harass both the Lyucu and Imperial forces. She becomes a crucial, if unconventional, ally to Aya Mazoti during the Battle of Crescent Island, her forces playing a key role in the Dara victory." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 4, link: "/books/speaking-bones#chapter-4" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 25, link: "/books/speaking-bones#chapter-25" } },
            ]
        },
    ]
};

export default function TheFishHerderPage() {
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