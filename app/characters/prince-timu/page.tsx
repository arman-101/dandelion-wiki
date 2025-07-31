'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Prince Timu",
    image: "/characters/prince-timu.png",
    introduction: "Prince Timu is the eldest son of Emperor Ragin and Empress Jia, and the heir apparent to the Dandelion Throne. He is a studious, serious, and deeply moral young man who embodies the bureaucratic and systematic ideals of his mother.",
    infoBox: {
        aliases: "Timu Garu",
        occupation: "Crown Prince of Dara, Governor of Dasu",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Alive",
        gender: "Male",
        relatives: "Kuni Garu (father), Jia Matiza (mother), Théra (sister), Phyro (brother), Fara (sister)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: "Daran",
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Timu is scholarly and reserved, preferring books and policy debates to martial pursuits. He is intelligent, diligent, and possesses a strong sense of duty and justice. However, his rigid adherence to rules and his somewhat naive belief in the power of reason can make him seem cold and inflexible. He is the intellectual heir to his mother, Jia, sharing her vision of an empire run by laws, not men." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "Upbringing in Pan",
            summary: [
                { type: 'text', content: "As the Crown Prince, Timu was subjected to a rigorous education under Zato Ruthi, which he excelled at. He often acted as the responsible older brother to his more adventurous siblings, Théra and Phyro." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/wall-of-storms#chapter-1" } },
            ]
        },
        {
            era: "Governor of Dasu",
            summary: [
                { type: 'text', content: "As part of his mother's 'Emperor's Shadows' plan, Timu was sent to govern the island of Dasu to gain administrative experience. He took to the task with diligence, though his bureaucratic approach sometimes clashed with the more practical needs of the people. His letters from this time reveal his struggles with the realities of governance, such as wealthy families exploiting the examination system." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 22, link: "/books/wall-of-storms#chapter-22" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 23, link: "/books/wall-of-storms#chapter-23" } },
            ]
        },
    ]
};

export default function PrinceTimuPage() {
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