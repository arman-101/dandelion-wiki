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
        relatives: "Phyro (son)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Amu", link: "/places/amu" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Risana is described as exquisitely beautiful, with a serene and mysterious demeanor. She is a master of illusions, using smoke and perception to create powerful effects that 'delight and lead'." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 38, link: "/books/the-grace-of-kings#chapter-38" } },
        { type: 'text', content: " She is deeply insightful, possessing a keen understanding of human nature and the unspoken currents of emotion and power. Unlike the systematic Empress Jia, Risana's wisdom is more intuitive and empathetic. She is the leader of the 'Swords' faction at court, advocating for the values of the military heroes who founded the empire and serving as a political counterweight to the empress." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
    ],
    history: [
        {
            era: "Meeting Kuni Garu",
            summary: [
                { type: 'text', content: "Kuni met Risana while fleeing Mata Zyndu's patrols in Cocru. She gave him shelter and, through her illusions, helped him overcome his self-doubt and see himself clearly as a leader. Recognizing her wisdom, and on the advice of Jia, Kuni asked her to become his second wife." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 38, link: "/books/the-grace-of-kings#chapter-38" } },
            ]
        },
        {
            era: "Reign of Four Placid Seas",
            summary: [
                { type: 'text', content: "As Imperial Consort, Risana became the mother of Prince Phyro and the respected leader of the court's military faction. Her gentle but firm influence provided a crucial balance to Empress Jia's more rigid, bureaucratic approach to governance. She focused on preserving the stories and heroic spirit of the rebellion, believing that the empire needed both swords and abacuses to survive." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
            ]
        },
    ]
};

export default function ConsortRisanaPage() {
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