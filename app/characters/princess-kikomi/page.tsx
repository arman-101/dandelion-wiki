'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Princess Kikomi",
    image: "/characters/princess-kikomi.png",
    introduction: "Princess Kikomi of Amu was a beautiful and tragic figure whose actions, born from a desperate attempt to save her people, had devastating consequences for the Dandelion Rebellion and its leaders.",
    infoBox: {
        aliases: "The Hero of Arulugi",
        occupation: "Princess of Amu",
        placeOfBirth: { text: "Arulugi", link: "/places/arulugi" },
        status: "Deceased",
        gender: "Female",
        significantOther: [
            { text: "Mata Zyndu", link: "/characters/mata-zyndu" }
        ],
        affiliation: "Kingdom of Amu",
        nationality: { text: "Amu", link: "/places/amu" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Kikomi is portrayed as incredibly beautiful, a feature that often led to her being used as a political pawn. Initially chafing under this role, she is advised by the goddess Tututika to embrace her own form of power—seduction and deception—rather than lamenting her circumstances." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
        { type: 'text', content: " She is intelligent, courageous, and deeply devoted to her people. However, she is also torn between her duty and her growing, genuine feelings for Mata Zyndu, a conflict that leads to her tragic end." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "During the Battle of Arulugi, after the Amu navy was defeated by Kindo Marana, Princess Kikomi was taken captive. In a secret negotiation, she made a deal with Marana: in exchange for her people's safety, she would act as his agent to sow discord among the rebel leaders." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
                { type: 'text', content: "She then masterminded a 'miraculous' escape, a deception that allowed her to return to the rebel capital of Çaruza as a celebrated hero. There, she became the object of affection for both Mata Zyndu and his uncle, Phin." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
                { type: 'text', content: "Torn between her duty and her love for Mata, she made a tragic choice to fulfill her pact with Marana. She seduced Phin Zyndu and then murdered him, framing it as a crime of passion before allowing herself to be killed by his guards. Her act shattered Mata emotionally and created a deep, tragic rift between him and Kuni Garu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
            ]
        },
    ]
};

export default function PrincessKikomiPage() {
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