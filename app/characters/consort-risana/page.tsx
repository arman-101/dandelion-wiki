'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Consort Risana",
    image: "/characters/consort-risana.png",
    introduction: "Lady Risana is an illusionist and Kuni Garu's second wife, later known as Consort Risana. She is a woman of great wisdom, grace, and subtle power, representing the more intuitive and martial aspects of the Dandelion Court.",
    infoBox: {
        aliases: "The Seer of Arulugi",
        occupation: "Illusionist, Imperial Consort",
        placeOfBirth: { text: "Amu", link: "/places/amu" },
        status: "Deceased",
        gender: "Female",
        significantOther: { text: "Kuni Garu", link: "/characters/kuni-garu" },
        relatives: [
            { text: "Prince Phyro (son)", link: "/characters/prince-phyro" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Amu", link: "/places/amu" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Risana is described as exquisitely beautiful, with a serene and mysterious demeanor. She is a master of illusions, using smoke and perception to create powerful effects that 'delight and lead,' a skill inherited from her mother." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 38, link: "/books/the-grace-of-kings#chapter-38" } },
        { type: 'text', content: " She is deeply insightful, possessing a keen understanding of human nature and the unspoken currents of emotion and power. Unlike the systematic Empress Jia, Risana's wisdom is more intuitive and empathetic. She becomes the leader of the 'Swords,' a court faction representing the military old guard, advocating for the values of the heroes who founded the empire and serving as a political counterweight to the empress." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Kuni met Risana in a secluded cottage while fleeing Mata Zyndu's patrols. She gave him shelter and, through her mastery of illusion, helped him cut through the 'smoke' of his own self-doubt and restore his confidence. Recognizing her unique wisdom, and on the strategic advice of Jia, Kuni asked her to become his second wife." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 38, link: "/books/the-grace-of-kings#chapter-38" } },
                { type: 'text', content: " In the final battle against Mata Zyndu, it was Risana who orchestrated a clever and decisive psychological ploy, using the families of Mata's soldiers to break their morale and ensure Kuni's victory." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As Imperial Consort, Risana became the mother of Prince Phyro and the respected leader of the court's military faction. Her gentle but firm influence provided a crucial balance to Empress Jia's more rigid, bureaucratic approach to governance." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'text', content: " During the rebellion of Théca Kimo in Arulugi, Risana's skills proved decisive. She used her illusionary smokecraft to create phantom ships and conceal troop movements, leading to a swift and stunning victory for the Imperial forces." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
                { type: 'text', content: " In 'The Veiled Throne' and 'Speaking Bones', Risana's influence continues through her son, Emperor Phyro, who inherits her connection to the military and her appreciation for unconventional warfare, such as the silkmotic force." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 55, link: "/books/the-wall-of-storms#chapter-55" } },
            ]
        },
    ]
};

export default function ConsortRisanaPage() {
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