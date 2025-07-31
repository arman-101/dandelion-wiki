'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Dafiro Miro",
    image: "/characters/dafiro-miro.png",
    introduction: "Dafiro Miro is a wise and experienced nobleman who served as the chief advisor to King Thufi of Cocru. He later becomes a key double agent for Kuni Garu within the Hegemon's forces.",
    infoBox: {
        aliases: "None",
        occupation: "Royal Advisor, General, Double Agent",
        status: "Deceased",
        gender: "Male",
        affiliation: "Cocru, Dandelion Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Dafiro is an older, cautious, and pragmatic man. He is a shrewd observer of politics and a realist who understands the brutal necessities of war and statecraft. Unlike many of the younger, more idealistic rebels, he is patient and willing to play the long game. His loyalty is ultimately to the well-being of the people of Dara, which leads him to make difficult and dangerous choices." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/grace-of-kings#chapter-12" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Dafiro was instrumental in guiding the young King Thufi and managing the fractious Tiro Alliance. He was often the voice of caution, reminding the other leaders of the true strength of the Xana Empire." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/grace-of-kings#chapter-12" } },
                { type: 'text', content: " After Mata Zyndu became Hegemon, Dafiro appeared to serve him, but was secretly working as an agent for Kuni Garu. He played a crucial role in the capture of Rui, personally killing Kindo Marana." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/grace-of-kings#chapter-43" } },
            ]
        },
    ]
};

export default function DafiroMiroPage() {
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