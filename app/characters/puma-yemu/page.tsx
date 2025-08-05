'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Puma Yemu",
    image: "/characters/puma-yemu.png",
    introduction: "Puma Yemu was a former bandit who became a fiercely loyal and effective general for Kuni Garu. He is known for his skill in raiding and unconventional tactics, and is a key member of the 'Swords' faction at the Dandelion Court.",
    infoBox: {
        aliases: "General Yemu",
        occupation: "Bandit, General",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Puma Yemu is a rough-and-tumble warrior, a reflection of his past as a bandit. He is practical, loyal, and a skilled commander, particularly in raids and surprise attacks. He feels his martial skills are undervalued in peacetime and is a vocal member of the military faction at court, resentful of the growing power of the bureaucrats." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Puma Yemu was a disgruntled nobleman who became a key ally for Kuni Garu during the Chrysanthemum-Dandelion War, his support being suggested by Jia Matiza as a crucial strategic alliance." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 39, link: "/books/the-grace-of-kings#chapter-39" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "During the rebellion in Arulugi, Puma Yemu's forces, concealed by Consort Risana's smokecraft, crossed the lake on rafts to take the capital by surprise, securing victory for the emperor." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
                { type: 'text', content: "Later, in Empress Jia's campaign of biological warfare against the Lyucu, it was Puma Yemu's forces who executed the plan, airdropping swarms of locusts onto Rui and Dasu to destroy the garinafins' food supply." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 57, link: "/books/the-wall-of-storms#chapter-57" } },
            ]
        },
    ]
};

export default function PumaYemuPage() {
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