'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Sataari",
    image: "/characters/sataari.png",
    introduction: "Sataari is a young Agon shaman who becomes a spiritual and military leader of the resistance against the Lyucu. She is the guardian of her people's ancient history and a key figure in rediscovering their lost power.",
    infoBox: {
        aliases: "The Shaman",
        occupation: "Shaman, Rebel Leader",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Female",
        affiliation: "Agon Rebellion",
        nationality: { text: "Agon", link: "/concepts/agon" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Sataari is deeply connected to the spiritual traditions of the Agon people. She is wise beyond her years and possesses a quiet strength that inspires her followers. She is a visionary, able to see the connections between the past, present, and future, and to guide her people on their path to reclaiming their heritage." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
    ],
    history: [
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "Sataari leads the Agon rebels to the discovery of the ancient, ruined 'City of Ghosts,' a repository of their people's lost knowledge and spiritual power. She later guides Théra and the other survivors to the sacred garinafin boneyard in the World's Edge Mountains. This discovery is a major turning point, providing the rebellion with the materials and inspiration to create new 'living bone' technology, including the devastating arucuro tocua beasts, which become their most powerful weapon." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 29, link: "/books/speaking-bones#chapter-29" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 56, link: "/books/speaking-bones#chapter-56" } },
            ]
        },
    ]
};

export default function SataariPage() {
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