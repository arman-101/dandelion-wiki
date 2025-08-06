'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Soto Zyndu",
    image: "/characters/soto-zyndu.png",
    introduction: "Soto Zyndu is the politically brilliant aunt of Mata Zyndu. Long thought dead after faking her own demise to escape the Xana, she re-emerged as a wise and influential advisor to Empress Jia Matiza and the imperial children, shaping the future of the Dandelion Dynasty from the shadows.",
    infoBox: {
        aliases: "Soto the Housekeeper",
        occupation: "Noblewoman, Housekeeper, Imperial Advisor",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Alive",
        gender: "Female",
        relatives: [
            { text: "Dazu Zyndu (father)", link: "" },
            { text: "Phin Zyndu (brother)", link: "/characters/phin-zyndu" },
            { text: "Mata Zyndu (nephew)", link: "/characters/mata-zyndu" }
        ],
        affiliation: "House of Zyndu, Dandelion Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Soto appears as a mysterious and incredibly wise older woman. She possesses a profound understanding of politics, power, and human nature. She is calm, patient, and an exceptional teacher, able to convey complex political lessons through simple metaphors and guidance. Her wisdom is practical and deeply insightful, focusing on the long-term consequences of actions." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/the-grace-of-kings#chapter-32" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 11, link: "/books/the-wall-of-storms#chapter-11" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Long believed to have died by setting fire to her own estate to escape the Xana, Soto Zyndu survived and lived in obscurity. Years later, she entered the service of Jia Matiza in Çaruza, disguised as a simple housekeeper named Soto. She became a close confidante and political mentor to Jia, advising her to embrace her power and become an active and equal partner in Kuni's ambitions. She was also instrumental in helping Kuni and Jia repair their fractured marriage." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/the-grace-of-kings#chapter-32" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 37, link: "/books/the-grace-of-kings#chapter-37" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "In the imperial court at Pan, Soto took on the role of advisor and mentor to the imperial children. She provided a running commentary on the political theater of the Palace Examination, teaching Princess Théra in particular to see the hidden power struggles beneath the surface of official events. Her guidance was crucial in shaping Théra's keen political acumen." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 11, link: "/books/the-wall-of-storms#chapter-11" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 17, link: "/books/the-wall-of-storms#chapter-17" } },
            ]
        },
    ]
};

export default function SotoZynduPage() {
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