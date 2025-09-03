'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Ofluro",
    image: "/characters/ofluro.png",
    introduction: "Ofluro is a Lyucu defector and a master garinafin rider. He becomes the controversial and demanding trainer for Emperor Phyro's secret garinafin breeding and training program, playing a vital role in building Dara's new aerial army.",
    infoBox: {
        aliases: "The Garinafin Master",
        occupation: "Garinafin Rider, Trainer",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dara Imperial Air Force",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Ofluro is a harsh and demanding teacher, his methods born from the brutal traditions of the Lyucu. His loyalty is constantly questioned by the Dara, and he maintains a professional distance, focused solely on the task of training an effective fighting force. He represents the difficult compromises and uneasy alliances necessary for Dara to survive." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
    ],
    history: [
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "A Lyucu defector, Ofluro's expertise with garinafins was invaluable. He was brought to the secret base at Tiro Cozo to train Emperor Phyro's new generation of Dara-bred garinafins and their riders. His harsh, uncompromising training methods caused friction but were ultimately effective, creating the powerful aerial army that Phyro led in the final war against the Lyucu." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 26, link: "/books/speaking-bones#chapter-26" } },
            ]
        },
    ]
};

export default function OfluroPage() {
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