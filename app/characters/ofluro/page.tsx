'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
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
        firstAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Ofluro is a harsh and demanding teacher, his methods born from the brutal traditions of the Lyucu. His loyalty is constantly questioned by the Dara pilots, and he maintains a professional distance, focused solely on the task of training an effective fighting force. He represents the difficult compromises and uneasy alliances necessary for Dara to survive." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
    ],
    history: [
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "A Lyucu defector, Ofluro's expertise with garinafins was invaluable. He was brought to the secret base at Tiro Cozo to train Emperor Phyro's new generation of Dara-bred garinafins and their riders. His harsh, uncompromising training methods caused friction but were ultimately effective, creating the powerful aerial army that Phyro would lead in the final war against the Lyucu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 14, link: "/books/speaking-bones#chapter-14" } },
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
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}
