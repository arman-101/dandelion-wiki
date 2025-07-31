'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Tanno Namen",
    image: "/characters/tanno-namen.png",
    introduction: "Tanno Namen was a legendary and highly respected general of the Xana Empire. Brought out of retirement during the Dandelion Rebellion, he served as a formidable and honorable antagonist to the rebel forces.",
    infoBox: {
        aliases: "None",
        occupation: "General of the Imperial Army",
        status: "Deceased",
        gender: "Male",
        affiliation: "Empire of Dara",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Namen is an old, veteran warrior, but still physically imposing. He carries himself with the quiet confidence and dignity of a lifelong soldier. He is a man of great honor and integrity, respected even by his enemies. Unlike many in the corrupt Imperial court, Namen is a true patriot who fights for the ideal of a unified Dara, even as he recognizes the flaws of its rulers. He is a master of conventional warfare and a brilliant tactician." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/grace-of-kings#chapter-15" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Pulled from retirement by Kindo Marana, Tanno Namen quickly proved his legendary status was well-earned. He led the Imperial forces to several key victories, including the swift conquest of Rima and the destruction of Huno Krima's rebel army at Dimu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/grace-of-kings#chapter-15" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 16, link: "/books/grace-of-kings#chapter-16" } },
                { type: 'text', content: " He laid siege to Zudi but was defeated in an aerial duel by Mata Zyndu. His final battle was at Wolf's Paw, where he was outmaneuvered by Mata's forces. A man of ultimate honor, he took his own life rather than face the disgrace of surrender." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/grace-of-kings#chapter-22" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/grace-of-kings#chapter-29" } },
            ]
        },
    ]
};

export default function TannoNamenPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}