'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Tiphan Huto",
    image: "/characters/tiphan-huto.png",
    introduction: "Tiphan Huto is an ambitious and unscrupulous merchant from Ginpen. His rivalry with the Splendid Urn restaurant serves as a backdrop for the grassroots technological and cultural renaissance led by Princess Fara and the Blossom Gang.",
    infoBox: {
        aliases: "The Merchant of Ginpen",
        occupation: "Merchant, Restaurateur",
        placeOfBirth: { text: "Ginpen", link: "/places/ginpen" },
        status: "Imprisoned",
        gender: "Male",
        affiliation: "Treasure Chest Restaurant",
        nationality: { text: "Haan", link: "/places/haan" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Huto is a man of great wealth and ambition, but he lacks taste and subtlety. He believes that victory can be bought with money and brute force, a philosophy that is ultimately defeated by the ingenuity and creativity of his rivals. He is arrogant, ruthless, and not above using sabotage, coercion, and espionage to achieve his goals." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 20, link: "/books/the-veiled-throne#chapter-20" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Huto, the owner of the lavish Treasure Chest restaurant, engaged in a three-part contest with the humble Splendid Urn to determine the best restaurant in Ginpen. He used his wealth to hire the brilliant chef Mozo Mu and staged extravagant spectacles. When he lost the first two rounds to the cleverness of the Blossom Gang and Princess Fara, he resorted to sabotage and psychological warfare, creating a 'curse' to drive his rival out of business. He was ultimately defeated, and his criminal activities, including kidnapping artisans for the Lyucu, were exposed, leading to his capture." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 22, link: "/books/the-veiled-throne#chapter-22" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 46, link: "/books/the-veiled-throne#chapter-46" } },
            ]
        },
    ]
};

export default function TiphanHutoPage() {
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