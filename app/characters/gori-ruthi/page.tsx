'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Gori Ruthi",
    image: "/characters/gori-ruthi.png",
    introduction: "Gori Ruthi is the nephew of the former Imperial Tutor, Zato Ruthi. He is a Moralist scholar and a well-intentioned but often naive official in the Dandelion court.",
    infoBox: {
        aliases: "The Moralist Scholar",
        occupation: "Scholar, Court Official",
        placeOfBirth: { text: "Rima", link: "/places/rima" },
        status: "Alive",
        gender: "Male",
        relatives: "Zato Ruthi (uncle)",
        affiliation: "Dandelion Court",
        nationality: { text: "Rima", link: "/places/rima" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Like his uncle, Gori is a traditionalist and a staunch believer in the Moralist school of philosophy. He is earnest and well-meaning, but his rigid adherence to protocol and his lack of practical experience often make him ineffective in the complex world of imperial politics." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
    ],
    history: [
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "Gori Ruthi serves as an official in the Dandelion court. He is assigned to report on Princess Aya Mazoti's first military command, a mission that ends in disaster. His letters to the court highlight his by-the-book mentality and his inability to grasp the realities of military command. He remains a figure in the court who represents the old, traditionalist way of thinking, often in contrast to the innovators and pragmatists who drive the story." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 42, link: "/books/speaking-bones#chapter-42" } },
            ]
        },
    ]
};

export default function GoriRuthiPage() {
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