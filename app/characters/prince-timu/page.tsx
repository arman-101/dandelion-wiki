'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Prince Timu",
    image: "/characters/prince-timu.png",
    introduction: "Prince Timu is the studious and serious Crown Prince of the Dandelion Dynasty, the eldest son of Emperor Ragin and Empress Jia. A man of principle and intellect, his journey is one of tragic compromise as he is captured by the Lyucu and forced to become a puppet emperor.",
    infoBox: {
        aliases: "Emperor Thaké",
        occupation: "Crown Prince of Dara, Emperor of Unredeemed Dara",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        significantOther: { text: "Tanvanaki", link: "/characters/tanvanaki" },
        relatives: "Kuni Garu (father), Jia Matiza (mother), Princess Théra (sister), Prince Phyro (brother), Princess Fara (sister)",
        affiliation: "Dandelion Court, Lyucu Occupation Government",
        nationality: "Dara",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Timu is studious, serious, and sometimes overly literal, a stark contrast to his adventurous sister Théra and martial brother Phyro. He is a diligent administrator and a man of deep moral conviction. However, his idealism and scholarly nature are severely tested by the brutal realities of the Lyucu invasion and his subsequent captivity." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As part of Empress Jia's plan to give her sons experience, Timu was sent to govern the island of Dasu." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 22, link: "/books/the-wall-of-storms#chapter-22" } },
                { type: 'text', content: "When the Lyucu invasion began, their forces quickly overwhelmed Dasu's defenses. Seeing the hopelessness of the situation and the slaughter of civilians, Prince Timu made the courageous choice to surrender himself to prevent further bloodshed, becoming a captive of Pékyu Tenryo." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 37, link: "/books/the-wall-of-storms#chapter-37" } },
                { type: 'text', content: "In captivity, he fell in love with the Lyucu princess Tanvanaki (Vadyu), who manipulated him into becoming a puppet emperor for the Lyucu. Believing he was forging a path to peace, he publicly denounced his own family and claimed the throne for himself, a profound betrayal that broke his father's heart." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 56, link: "/books/the-wall-of-storms#chapter-56" } },
            ]
        },
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "As the puppet 'Emperor Thaké,' Timu's life is one of constant humiliation and compromise. He is forced by the hardline thane Cutanrovo Aga to participate in rituals to destroy the temples and books of his own culture. He tries to protect his people from the inside, but he is largely powerless, caught between his love for his new family and his duty to his old one." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 16, link: "/books/the-veiled-throne#chapter-16" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 30, link: "/books/the-veiled-throne#chapter-30" } },
                { type: 'text', content: "His story is a tragic exploration of collaboration and resistance, as he struggles to maintain his identity and protect what he can of Dara's culture under the heel of a brutal occupation." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 16, link: "/books/speaking-bones#chapter-16" } },
            ]
        },
    ]
};

export default function PrinceTimuPage() {
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