'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Théca Kimo",
    image: "/characters/theca-kimo.png",
    introduction: "Théca Kimo was a Duke of Géfica and one of Mata Zyndu's key allies. A pragmatic and somewhat cynical nobleman, he was later manipulated into rebellion by the cunning of Empress Jia.",
    infoBox: {
        aliases: "Duke of Géfica",
        occupation: "Duke, General",
        placeOfBirth: { text: "Géfica", link: "/places/gefica" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Hegemon's Court, Arulugi Rebellion",
        nationality: { text: "Géfica", link: "/places/gefica" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Théca Kimo is a pragmatist who views politics and war as a 'gang war' where one must simply pick the stronger side. He is not driven by the lofty ideals of honor like Mata or compassion like Kuni, but by a practical desire to survive and thrive. This cynicism makes him a flexible ally but also vulnerable to manipulation." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 45, link: "/books/the-grace-of-kings#chapter-45" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Initially one of Mata Zyndu's key allies and a Duke of Géfica, Théca Kimo pragmatically defected to Kuni Garu's side during the civil war, recognizing that Kuni's faction was the stronger 'gang'." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 45, link: "/books/the-grace-of-kings#chapter-45" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "During the reign of Emperor Ragin, he was a member of the 'Swords' faction at court, feeling that his martial skills were undervalued in an era of peace." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'text', content: "He became the unwitting pawn in Empress Jia's grand political scheme. She secretly funded the Hegemon cults and then fabricated evidence to make it appear that Kimo was the mastermind behind the rebellion. Trapped and believing he had been framed, Kimo reluctantly declared rebellion, falling perfectly into Jia's trap. His forces were defeated in Arulugi through the use of Consort Risana's smokecraft, and he was executed." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 25, link: "/books/the-wall-of-storms#chapter-25" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
            ]
        },
    ]
};

export default function ThecaKimoPage() {
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