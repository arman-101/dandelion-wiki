'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Çami Phithadapu",
    image: "/characters/cami-phithadapu.png",
    introduction: "Çami Phithadapu is a Dara scholar specializing in marine biology, particularly whales. She was a key member of Princess Théra's expedition to Ukyu-Gondé, where her unique knowledge proved to be a decisive strategic asset.",
    infoBox: {
        aliases: "The Whale Scholar",
        occupation: "Scholar, Scientist",
        placeOfBirth: { text: "Dara", link: "/places/dara" },
        status: "Alive",
        gender: "Female",
        affiliation: "Dara Expeditionary Force, Agon Rebellion",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Çami is a dedicated and brilliant scholar, passionate about her field of study. Her expertise, while seemingly esoteric, demonstrates the Dandelion Dynasty's philosophy of finding strength and strategic advantage in unexpected areas of knowledge." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Çami joined Princess Théra's expedition across the Wall of Storms. Her moment of genius came during the confrontation with the pursuing Lyucu city-ship. At Théra's desperate request, she devised a method using resonant chambers and a trumpet to project a song into the ocean that mimicked whale calls. A pod of whales answered the call and attacked the Lyucu ship, crippling it and allowing the Dara forces to capture it. Her scientific knowledge was directly responsible for the expedition's first major victory." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
            ]
        },
    ]
};

export default function CamiPhithadapuPage() {
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