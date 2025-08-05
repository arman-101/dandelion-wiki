'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Tanvanaki",
    image: "/characters/tanvanaki.png",
    introduction: "Tanvanaki, also known as Princess Vadyu, is the brilliant garinafin pilot and daughter of Pékyu Tenryo. After her father's death, she becomes the Pékyu of the Lyucu forces in Dara, struggling to rule a conquered people while navigating the treacherous politics of her own court and her complex marriage to the captive Prince Timu.",
    infoBox: {
        aliases: "Princess Vadyu, Pékyu Tanvanaki",
        occupation: "Garinafin Pilot, Princess, Pékyu",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Prince Timu", link: "/characters/prince-timu" },
        relatives: "Pékyu Tenryo (father), Cudyu Roatan (brother)",
        affiliation: "Lyucu Empire",
        nationality: { text: "Lyucu", link: "/places/lyucu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Tanvanaki is a fiercely intelligent and capable leader. She is the best garinafin pilot of her generation, possessing a deep, intuitive bond with the war beasts. Like her father, she can be ruthless and manipulative, as shown in her handling of Prince Timu. However, as Pékyu, she reveals a more pragmatic and nuanced approach to leadership, caught between the fanatical hardliners and the need for stability. She is a complex character, torn between her father's brutal legacy and her own evolving understanding of power." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 43, link: "/books/the-wall-of-storms#chapter-43" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As a young princess, Tanvanaki was a key part of her father's deception of Luan Zya. During the invasion, her skill as a garinafin pilot nearly turned the tide of the Battle of Kriphi Harbor against Gin Mazoti's forces." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/the-wall-of-storms#chapter-46" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 43, link: "/books/the-wall-of-storms#chapter-43" } },
                { type: 'text', content: "She manipulated the captive Prince Timu, using his idealism and her own affection to turn him into a puppet emperor for the Lyucu cause." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 56, link: "/books/the-wall-of-storms#chapter-56" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "After her father's death, she became Pékyu and negotiated a tense truce with Empress Jia. Her rule is defined by the struggle to control the hardline faction led by Cutanrovo Aga, whose purges threaten to ignite a civil war. She is forced to make difficult compromises, sacrificing parts of Dara's culture to maintain a fragile peace and consolidate her own power, often at the expense of her husband, Timu." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 61, link: "/books/the-wall-of-storms#chapter-61" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 33, link: "/books/the-veiled-throne#chapter-33" } },
            ]
        },
    ]
};

export default function TanvanakiPage() {
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