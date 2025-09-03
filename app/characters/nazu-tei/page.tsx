import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Nazu Tei",
    image: "/characters/nazu-tei.png",
    introduction: "Nazu Tei was a wise and courageous Dara scholar who became the tutor to the young Savo Ryoto (Kinri) in occupied Rui. Her teachings about the nature of truth and history were a formative influence on the young man.",
    infoBox: {
        aliases: "The Tutor",
        occupation: "Scholar, Tutor",
        placeOfBirth: "Dara",
        status: "Deceased",
        gender: "Female",
        affiliation: "None",
        nationality: "Daran",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Nazu Tei is a woman of great intellect and moral courage. She believes in teaching her students not just facts, but how to think critically and question official narratives. She is brave, facing down the brutal Lyucu purges with dignity and a commitment to the truth, even at the cost of her own life." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 22, link: "/books/the-veiled-throne#chapter-22" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Nazu Tei served as a secret tutor to the young Lyucu thane Savo Ryoto, teaching him Dara history and philosophy. When the hardliner Cutanrovo Aga began her cultural purges, Nazu Tei was arrested. Despite Savo's attempts to save her, she was imprisoned and sentenced to death, but not before imparting one last, crucial lesson to her student about listening to his heart to find the truth." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 22, link: "/books/the-veiled-throne#chapter-22" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 24, link: "/books/the-veiled-throne#chapter-24" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function NazuTeiPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}