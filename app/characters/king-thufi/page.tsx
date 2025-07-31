'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "King Thufi",
    image: "/characters/king-thufi.png",
    introduction: "King Thufi is a humble shepherd who is discovered to be the last living heir to the throne of Cocru. He is elevated to the position of king during the Dandelion Rebellion and serves as the nominal head of the Tiro Alliance.",
    infoBox: {
        aliases: "None",
        occupation: "Shepherd, King of Cocru, Princeps of the Tiro Alliance",
        status: "Alive",
        gender: "Male",
        affiliation: "Tiro Rebellion",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Thufi is a simple, honest, and good-hearted man. He is initially overwhelmed by the burdens of kingship and often appears weak and indecisive. However, he possesses a strong moral core and a genuine concern for the well-being of the people, famously declaring, 'I will not be a king who sits on a throne of skulls.' Though not a great leader himself, he is wise enough to recognize and empower talented men like Mata Zyndu and Kuni Garu." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/grace-of-kings#chapter-26" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Discovered by the early rebels, Thufi was crowned King of Cocru to give their cause legitimacy. As the rebellion grew, he was named Princeps of the Tiro Alliance. His most decisive act was his promise to grant Kuni Garu the kingship of Géfica if he captured Pan, a promise that set the stage for the conflict between Kuni and Mata." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/grace-of-kings#chapter-12" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/grace-of-kings#chapter-26" } },
            ]
        },
        {
            era: "Later Life",
            summary: [
                { type: 'text', content: "After the war, Thufi willingly abdicated his throne, content to return to a simple life. Years later, Emperor Ragin visits him, and their conversation reveals that Thufi is far happier as a common man than he ever was as a king, serving as a poignant contrast to Kuni's own journey." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/wall-of-storms#chapter-2" } },
            ]
        },
    ]
};

export default function KingThufiPage() {
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