import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Prince Gimoto",
    image: "/characters/prince-gimoto.png",
    introduction: "Prince Gimoto is the son of Kado Garu and the nephew of Emperor Ragin (Kuni Garu). He is a young prince of the Dandelion Dynasty's imperial family.",
    infoBox: {
        aliases: "None",
        occupation: "Prince",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        relatives: [
            {text: "Kado Garu (father)", link: ""},
            { text: "Kuni Garu (uncle)", link: "/characters/kuni-garu" },
            { text: "Jia Matiza (aunt)", link: "/characters/jia-matiza" },
            { text: "Prince Timu (cousin)", link: "/characters/prince-timu" },
            { text: "Princess Théra (cousin)", link: "/characters/princess-thera" },
            { text: "Prince Phyro (cousin)", link: "/characters/prince-phyro" },
            { text: "Princess Fara (cousin)", link: "/characters/princess-fara" }
        ],
        affiliation: "House of Garu, Dandelion Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "As a minor character, Prince Gimoto's appearance and personality are not extensively detailed in the main narrative. As a member of the imperial family, he is part of the younger generation of royals growing up in the Dandelion Court." },
    ],
    history: [
        {
            era: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "Prince Gimoto is the son of Kado Garu, Kuni Garu's elder brother. This makes him Emperor Ragin's nephew and a prince within the wider imperial family. His presence in the court represents the continuation and expansion of the House of Garu after its rise to power." },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function PrinceGimotoPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}