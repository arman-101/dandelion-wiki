import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Tipo Tho",
    image: "/characters/tipo-tho.png",
    introduction: "Tipo Tho is a Dara marine commander and a key military leader in Princess Théra's expedition to Ukyu-Gondé. He is a brave and capable officer, essential to the success of the rebellion's military operations.",
    infoBox: {
        aliases: "Commander Tho",
        occupation: "Marine Commander",
        placeOfBirth: "Dara",
        status: "Deceased",
        gender: "Male",
        affiliation: "Dara Expeditionary Force, Agon Rebellion",
        nationality: "Daran",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Tipo is a professional and highly competent military officer. He is courageous, disciplined, and fiercely loyal to Princess Théra. He represents the best of the Dara military, adapting to the unfamiliar challenges of a new continent and a new kind of warfare." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 9, link: "/books/the-veiled-throne#chapter-9" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As a commander in Théra's expedition, Tipo Tho led the daring boarding party that infiltrated the Lyucu city-ship, a crucial first victory. He died heroically during the surprise Lyucu attack on the secret Agon base in Kiri Valley, leading a last stand to allow Princess Théra and her family to escape." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 9, link: "/books/the-veiled-throne#chapter-9" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function TipoThoPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}