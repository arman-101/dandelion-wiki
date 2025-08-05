'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Prince Gimoto",
    image: "/characters/prince-gimoto.png", // Assuming a placeholder image exists
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
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }, // Based on character lists
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" } // Based on character lists
    },
    appearanceAndPersonality: [
        { type: 'text', content: "As a minor character, Prince Gimoto's appearance and personality are not extensively detailed. As a member of the imperial family, he is part of the younger generation of royals growing up in the Dandelion Court." },
    ],
    history: [
        {
            era: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "Prince Gimoto is the son of Kado Garu, who is Kuni Garu's elder brother. This makes him Emperor Ragin's nephew and a prince within the wider imperial family. His presence in the court represents the continuation and expansion of the House of Garu after its rise to power." },
                // Note: Specific chapter references are not available in the provided summaries for Prince Gimoto's actions.
                // The reference below is based on his inclusion in the book's character list.
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 0, link: "/books/the-veiled-throne" } },
            ]
        },
    ]
};

export default function PrinceGimotoPage() {
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