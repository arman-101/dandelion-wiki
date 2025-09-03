import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Tiphan Huto",
    image: "/characters/tiphan-huto.png",
    introduction: "Tiphan Huto is an ambitious and unscrupulous merchant from Ginpen. His rivalry with the Splendid Urn restaurant serves as a backdrop for the grassroots technological and cultural renaissance led by Princess Fara and the Blossom Gang.",
    infoBox: {
        aliases: "The Merchant of Ginpen",
        occupation: "Merchant, Restaurateur",
        placeOfBirth: { text: "Ginpen", link: "/places/ginpen" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Treasure Chest Restaurant",
        nationality: { text: "Haan", link: "/places/haan" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Huto is a man of great wealth and ambition, but he lacks taste and subtlety. He believes that victory can be bought with money and brute force, a philosophy that is ultimately defeated by the ingenuity of his rivals. He is arrogant, ruthless, and not above using sabotage and coercion to achieve his goals." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 35, link: "/books/the-veiled-throne#chapter-35" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 41, link: "/books/the-veiled-throne#chapter-41" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Huto, owner of the Treasure Chest restaurant, engaged in a contest with the humble Splendid Urn. He lost to the cleverness of the Blossom Gang and Princess Fara, and his criminal activities, including kidnapping artisans for the Lyucu, were exposed, leading to his capture." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 35, link: "/books/the-veiled-throne#chapter-35" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 46, link: "/books/the-veiled-throne#chapter-46" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "After his arrest, Huto was coerced by Empress Jia's agents into a secret smuggling operation, becoming addicted to a potent, cultivated tolyusa in the process. When Jia cut off the supply as part of her grand strategy against the Lyucu, Huto suffered a horrific withdrawal and, in a fit of madness, killed himself. His gruesome end was a prelude to the chaos that would soon consume the Lyucu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 37, link: "/books/speaking-bones#chapter-37" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function TiphanHutoPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}