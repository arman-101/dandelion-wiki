'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Çami Phithadapu",
    image: "/characters/cami-phithadapu.png",
    introduction: "Çami Phithadapu is a Dara scholar specializing in marine biology. She was a key member of Princess Théra's expedition to Ukyu-Gondé, where her unique knowledge proved to be a decisive strategic asset and led to revolutionary inventions.",
    infoBox: {
        aliases: "The Whale Scholar",
        occupation: "Scholar, Scientist, Inventor",
        placeOfBirth: "Dara",
        status: "Alive",
        gender: "Female",
        affiliation: "Dara Expeditionary Force, Agon Rebellion",
        nationality: "Daran",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Çami is a dedicated and brilliant scholar, passionate about her field of study. Her expertise, while seemingly esoteric, demonstrates the Dandelion Dynasty's philosophy of finding strength and strategic advantage in unexpected areas of knowledge." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Çami's moment of genius came during a naval confrontation with a Lyucu city-ship. At Théra's request, she devised a method to mimic whale calls, successfully summoning a pod of whales that attacked and crippled the enemy vessel, securing the expedition's first major victory." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "While in exile with Théra's rebels, Çami's scientific curiosity continued to produce breakthroughs. She helped discover the garinafins' ability to communicate with low-frequency vibrations. Her greatest achievement was inventing the 'speaking bones' technology by reversing the mechanism of a spirit-portrait taker. This allowed the rebels to hear the voices of their ancestors and broadcast their true history, spreading a message of peace across the war-torn land." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 6, link: "/books/speaking-bones#chapter-6" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 45, link: "/books/speaking-bones#chapter-45" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 51, link: "/books/speaking-bones#chapter-51" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}