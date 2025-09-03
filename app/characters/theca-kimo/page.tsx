import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

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
        nationality: "Daran",
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
                { type: 'text', content: "Initially one of Mata Zyndu's dukes, Théca Kimo pragmatically defected to Kuni Garu's side during the civil war, recognizing that Kuni's faction was the stronger 'gang' and more likely to win." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 45, link: "/books/the-grace-of-kings#chapter-45" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "During the reign of Emperor Ragin, he was a member of the 'Swords' faction, feeling his martial skills were undervalued. He became the unwitting pawn in Empress Jia's grand political scheme. She secretly funded a rebellion and then fabricated evidence to frame Kimo as the mastermind. Trapped and believing he had no other choice, Kimo reluctantly declared rebellion, falling perfectly into Jia's trap. His forces were defeated in Arulugi through Consort Risana's smokecraft, and he was executed for treason." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 25, link: "/books/the-wall-of-storms#chapter-25" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function ThecaKimoPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}