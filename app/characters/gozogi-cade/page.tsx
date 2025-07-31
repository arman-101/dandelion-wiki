'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Gozogi Çadé",
    image: "/characters/gozogi-cade.png",
    introduction: "Gozogi Çadé is a former street tough and one of Kuni Garu's oldest and most loyal friends from his bandit days. He serves as a reliable, if somewhat simple, commander in the Dandelion military.",
    infoBox: {
        aliases: "None",
        occupation: "Bandit, General",
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: "Speaking Bones"
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Gozogi is a rough-and-tumble man, more comfortable in a tavern or on a battlefield than in the Imperial court. He is not a great thinker or strategist, but he is brave, loyal, and good-natured. He represents the common man who rose to power with Kuni, and he never loses his straightforward, unpretentious demeanor." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/grace-of-kings#chapter-8" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Gozogi was a member of Kuni's original street gang and one of the first to follow him into outlawry. He served as a dependable lieutenant throughout the rebellion and the civil war, always loyal to his friend." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/grace-of-kings#chapter-8" } },
            ]
        },
        {
            era: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "After Kuni became emperor, Gozogi was made a general. He remained part of Kuni's inner circle of old friends, often providing a simple, common-sense perspective that was valued in the increasingly complex world of court politics." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/wall-of-storms#chapter-8" } },
            ]
        },
    ]
};

export default function GozogiCadePage() {
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