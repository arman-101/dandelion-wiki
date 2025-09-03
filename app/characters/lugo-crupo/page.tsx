import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Lügo Crupo",
    image: "/characters/lugo-crupo.png",
    introduction: "Lügo Crupo was the ambitious, ruthless, and brilliant Prime Minister of the Xana Empire. Consumed by jealousy and a feeling of being perpetually second-best, his actions were instrumental in both the consolidation of Xana's power and its eventual, violent downfall.",
    infoBox: {
        aliases: "The Regent",
        occupation: "Scholar, Prime Minister of Dara, Regent",
        placeOfBirth: "Dara",
        status: "Deceased",
        gender: "Male",
        affiliation: "Xana Empire",
        nationality: "Daran",
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
                { type: 'text', content: "As Regent for the boy-emperor Erishi, Lügo Crupo was briefly the most powerful man in Dara, a position he wielded with arrogance and cruelty." }
            ]
        },
        {
            era: "The Arrogant Regent",
            summary: [
                { type: 'text', content: "Crupo conspired with Goran Pira to stage a coup upon Emperor Mapidéré's death, installing Prince Loshi as the puppet Emperor Erishi. To consolidate his power, he famously brought a stag into court, declared it a horse, and had all ministers who disagreed arrested and executed—an event that became a symbol of his absolute and terrifying control." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'text', content: "His reign was cut short when his co-conspirator, Goran Pira, saw him as a threat. Pira manipulated Emperor Erishi into believing Crupo was a traitor, framed him with a seditious poem, and had him brutally tortured and executed. Crupo's downfall cleared the way for Pira to become Prime Minister." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 25, link: "/books/the-grace-of-kings#chapter-25" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function LugoCrupoPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}