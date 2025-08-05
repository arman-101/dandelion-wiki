'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Lügo Crupo",
    image: "/characters/lugo-crupo.png",
    introduction: "Lügo Crupo was the ambitious, ruthless, and brilliant Prime Minister of the Xana Empire. Consumed by jealousy and a feeling of being perpetually second-best, his actions were instrumental in both the consolidation of Xana's power and its eventual, violent downfall.",
    infoBox: {
        aliases: "The Regent",
        occupation: "Scholar, Prime Minister of Dara, Regent",
        placeOfBirth: { text: "Xana", link: "/places/xana" },
        status: "Deceased",
        gender: "Male",
        affiliation: "House of Xana, Xana Empire",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Crupo is portrayed as a brilliant but deeply insecure man. His entire life was defined by his rivalry with the more naturally gifted scholar, Tan Féüji. This jealousy fueled his defection to Xana and his subsequent poisoning of his rival." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 10, link: "/books/the-grace-of-kings#chapter-10" } },
        { type: 'text', content: "As Regent, he found the actual work of governing tedious, preferring his scholarly pursuits. He was arrogant, dismissive of the growing rebellion, and prone to making rash decisions based on personal convenience, such as appointing the chief tax collector as commander-in-chief simply to be rid of him." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 10, link: "/books/the-grace-of-kings#chapter-10" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Crupo conspired with Goran Pira to stage a coup upon Emperor Mapidéré's death, installing Prince Loshi as the puppet Emperor Erishi. To solidify his power, he famously brought a stag into court, called it a horse, and had all ministers who disagreed executed, an event that became a symbol of his tyranny." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'text', content: "As the most powerful man in the empire, he governed with a mix of brilliance and lazy cruelty, his arrogance blinding him to the growing threats to the dynasty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 10, link: "/books/the-grace-of-kings#chapter-10" } },
                { type: 'text', content: "His reign was cut short when Goran Pira, seeing Crupo as a threat to his own plans, manipulated Emperor Erishi into believing Crupo was a traitor. Pira framed him, had him brutally tortured until he confessed to crimes he didn't commit, and then had him executed, clearing the way for Pira to become Prime Minister." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 25, link: "/books/the-grace-of-kings#chapter-25" } },
            ]
        },
    ]
};

export default function LugoCrupoPage() {
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