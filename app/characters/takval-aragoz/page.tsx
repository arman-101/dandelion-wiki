'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Takval Aragoz",
    image: "/characters/takval-aragoz.png",
    introduction: "Takval Aragoz is a prince of the exiled Agon people from the continent of Ukyu-Gondé. He becomes the husband and indispensable ally of Princess Théra, combining his people's warrior traditions with her scientific ingenuity to lead a rebellion against the Lyucu.",
    infoBox: {
        aliases: "Prince of the Agon",
        occupation: "Prince, Rebel Leader",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        significantOther: { text: "Princess Théra", link: "/characters/princess-thera" },
        relatives: "Souliyan Aragoz (mother), Volyu Aragoz (uncle), Tanto Aragoz (son), Rokiri Aragoz (son)",
        affiliation: "Agon Rebellion",
        nationality: { text: "Agon", link: "/concepts/agon" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Takval is a proud and capable warrior, deeply rooted in the traditions of his Agon heritage. He is a skilled fighter and a natural leader. His relationship with Théra is a journey of cultural exchange and mutual respect, as he learns to appreciate her scientific approach to problems, while she learns to value the strength of his people's traditions. He is a bridge between two cultures, embodying the potential for a new, syncretic way of life." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 12, link: "/books/the-veiled-throne#chapter-12" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Takval was brought to Dara as a political hostage, part of a contingent of Agon who were offered as allies to the Dandelion Dynasty. He married Princess Théra to forge an alliance, and he joined her expedition across the Wall of Storms to his homeland." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 62, link: "/books/the-wall-of-storms#chapter-62" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "In Ukyu-Gondé, he and Théra worked to unite the exiled Agon tribes. He was forced to confront the treachery of his own uncle, Volyu, who was a Lyucu collaborator. With Théra's help, he deposed his uncle and solidified his leadership of the Agon resistance." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 14, link: "/books/the-veiled-throne#chapter-14" } },
                { type: 'text', content: "He fought bravely in numerous battles, including the raid on the Lyucu city-ship and the defense of their secret base in Kiri Valley. His partnership with Théra, both personal and strategic, became the cornerstone of the Agon rebellion." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 9, link: "/books/the-veiled-throne#chapter-9" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
            ]
        },
    ]
};

export default function TakvalAragozPage() {
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