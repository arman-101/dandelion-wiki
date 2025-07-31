'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Lügo Crupo",
    image: "/characters/lugo-crupo.png",
    introduction: "Lügo Crupo was a brilliant but ruthless scholar who rose to become the Prime Minister and later the Regent of the Xana Empire. His ambition and jealousy were major factors in the instability that led to the empire's collapse.",
    infoBox: {
        aliases: "The Regent",
        occupation: "Prime Minister, Regent",
        status: "Deceased",
        gender: "Male",
        affiliation: "Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Crupo is an immensely intelligent and capable administrator, but he is also deeply insecure and driven by a lifelong jealousy of his more naturally gifted rival, Tan Féüji. This insecurity manifests as a cruel and paranoid ambition. He is a master of political maneuvering but lacks a greater vision beyond his own ascent to power." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 10, link: "/books/grace-of-kings#chapter-10" } },
    ],
    history: [
        {
            era: "Rise to Power",
            summary: [
                { type: 'text', content: "Though low-born, Crupo's brilliance allowed him to rise through the ranks. He defected to Xana during the Unification Wars and eventually poisoned his rival to secure his position as Prime Minister under Emperor Mapidéré." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 10, link: "/books/grace-of-kings#chapter-10" } },
                { type: 'text', content: "After the emperor's death, he orchestrated the coup that placed Emperor Erishi on the throne and made himself Regent. He famously used the 'deer and horse' test to solidify his power and root out dissenters in the court." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/grace-of-kings#chapter-5" } },
            ]
        },
        {
            era: "Fall from Grace",
            summary: [
                { type: 'text', content: "As Regent, Crupo mismanaged the response to the Dandelion Rebellion, dismissively appointing the unqualified Kindo Marana to lead the army. His reign was cut short when he was outmaneuvered by the even more cunning Goran Pira, who framed him for treason. Crupo was executed, a victim of the same paranoid court politics he had perfected." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 25, link: "/books/grace-of-kings#chapter-25" } },
            ]
        },
    ]
};

export default function LugoCrupoPage() {
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