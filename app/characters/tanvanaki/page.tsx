'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Tanvanaki",
    image: "/characters/tanvanaki.png",
    introduction: "Tanvanaki, also known as Princess Vadyu, is the brilliant garinafin pilot and daughter of Pékyu Tenryo. After her father's death, she becomes the Pékyu of the Lyucu forces in Dara, struggling to rule a conquered people while navigating treacherous politics and her complex marriage to the captive Prince Timu.",
    infoBox: {
        aliases: "Princess Vadyu, Pékyu Tanvanaki",
        occupation: "Garinafin Pilot, Princess, Pékyu",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Female",
        significantOther: { text: "Prince Timu", link: "/characters/prince-timu" },
        relatives: [
            { text: "Pékyu Tenryo (father)", link: "/characters/pekyu-tenryo" },
            { text: "Cudyu Roatan (brother)", link: "/characters/cudyu-roatan" }
        ],
        affiliation: "Lyucu Empire",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Tanvanaki is a fiercely intelligent and capable leader. She is the best garinafin pilot of her generation, possessing a deep bond with the war beasts. Like her father, she can be ruthless and manipulative. However, as Pékyu, she reveals a more pragmatic approach to leadership, caught between fanatical hardliners and the need for stability. She is a complex character, torn between her father's brutal legacy and her own evolving understanding of power." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 43, link: "/books/the-wall-of-storms#chapter-43" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As a young princess, Tanvanaki was a key part of her father's deception of Luan Zya. During the invasion, her skill as a garinafin pilot nearly turned the tide of the Battle of Kriphi Harbor. She also manipulated the captive Prince Timu, turning him into a puppet emperor for the Lyucu cause." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/the-wall-of-storms#chapter-46" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 43, link: "/books/the-wall-of-storms#chapter-43" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 56, link: "/books/the-wall-of-storms#chapter-56" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "After her father's death, she became Pékyu and negotiated a tense truce with Empress Jia. Her rule was defined by the struggle to control the hardline faction led by Cutanrovo Aga, whose purges threatened to destabilize the occupation." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 61, link: "/books/the-wall-of-storms#chapter-61" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Tanvanaki's reign ended in tragedy. As the addictive tolyusa supply ran out, plunging the Lyucu into madness, she was betrayed and murdered by her fanatical subordinate, Cutanrovo Aga, during a coup." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 39, link: "/books/speaking-bones#chapter-39" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}