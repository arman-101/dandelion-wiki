'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Nazu Tei",
    image: "/characters/nazu-tei.png",
    introduction: "Nazu Tei was a wise and courageous Dara scholar who became the tutor to the young Savo Ryoto (Kinri) in occupied Rui. Her teachings about the nature of truth and history were a formative influence on the young man.",
    infoBox: {
        aliases: "The Tutor",
        occupation: "Scholar, Tutor",
        placeOfBirth: "Dara",
        status: "Deceased",
        gender: "Female",
        affiliation: "None",
        nationality: "Dara",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Nazu Tei is a woman of great intellect and moral courage. She believes in teaching her students not just facts, but how to think critically and question official narratives. She is brave, facing down the brutal Lyucu purges with dignity and a commitment to the truth, even at the cost of her own life." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Nazu Tei served as a tutor to the young Savo Ryoto, teaching him Dara history and philosophy through the game of zamaki. She opened his mind to the idea that the histories he had been taught were incomplete and biased. When the hardliner Cutanrovo Aga began her cultural purges, Nazu Tei was arrested for possessing 'contraband' teaching materials. Despite Savo's attempts to save her, she was imprisoned and sentenced to death, but not before imparting one last, crucial lesson to her student about distinguishing true stories from false ones." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 24, link: "/books/the-veiled-throne#chapter-24" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 28, link: "/books/the-veiled-throne#chapter-28" } },
            ]
        },
    ]
};

export default function NazuTeiPage() {
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