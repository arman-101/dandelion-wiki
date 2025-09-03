'use client';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Aya Mazoti",
    image: "/characters/aya-mazoti.png",
    introduction: "Aya Mazoti is the daughter of the legendary Marshal Gin Mazoti and the brilliant strategist Luan Zya. A skilled commander in her own right, she is driven by a fierce desire to live up to her parents' legacy and restore her family's honor.",
    infoBox: {
        aliases: "The Marshal's Daughter",
        occupation: "Princess, Commander",
        placeOfBirth: "Dara",
        status: "Alive",
        gender: "Female",
        relatives: [
            { text: "Gin Mazoti (mother)", link: "/characters/gin-mazoti" },
            { text: "Luan Zya (father)", link: "/characters/luan-zya" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: "Daran",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Aya inherits her mother's fierce determination and her father's strategic mind. She is proud, ambitious, and deeply conscious of the immense legacy she has to uphold. After an early failure where she too rigidly followed her mother's writings, she learns to become a more flexible and effective commander." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Aya's disastrous first military command, where she rigidly followed her mother's famous treatise with poor results, was detailed in a letter from the official Gori Ruthi." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "As a more seasoned commander, Aya was given charge of Pan's defense during Emperor Phyro's rebellion, where she was cleverly outmaneuvered by his unorthodox tactics. When Empress Jia was deposed, Aya chose to side with the council against the regent. In the final peace, she was relieved of her military command, a fate she accepted gracefully as it finally freed her from the shadow of her mother's legacy." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 40, link: "/books/speaking-bones#chapter-40" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 50, link: "/books/speaking-bones#chapter-50" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 55, link: "/books/speaking-bones#chapter-55" } },
            ]
        },
    ]
};

export default function AyaMazotiPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}