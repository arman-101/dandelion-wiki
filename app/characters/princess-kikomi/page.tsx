'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Princess Kikomi",
    image: "/characters/princess-kikomi.png",
    introduction: "Princess Kikomi is the beautiful and tragic princess of Amu. Caught between her duty to her people and her own desires, she becomes a key pawn in the war, and her actions have devastating consequences for the leaders of the rebellion.",
    infoBox: {
        aliases: "None",
        occupation: "Princess of Amu",
        status: "Deceased",
        gender: "Female",
        relatives: "Unnamed uncle",
        affiliation: { text: "Amu", link: "/places/amu" },
        nationality: { text: "Amu", link: "/places/amu" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Kikomi is described as incredibly beautiful, with golden hair, azure eyes, and flawless amber skin. She is intelligent and proud, chafing at her role as a mere political pawn. Advised by the goddess Tututika to use her own unique talents, she attempts to use seduction and manipulation as weapons, but her inexperience and genuine emotions lead to a tragic end." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "After her home, Arulugi, was conquered by Kindo Marana, Princess Kikomi was taken captive. She made a secret deal with the Imperial commander: in exchange for the safety of Amu, she would sow discord between the rebellion's two most powerful military leaders, Mata Zyndu and his uncle Phin." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
                { type: 'text', content: "Taking refuge with the rebels, she became the object of affection for both men. Torn by her mission and her growing feelings for Mata, she ultimately fulfilled her promise by seducing and murdering Phin Zyndu. The act shattered Mata's trust in everyone around him and created the first deep fracture in his brotherhood with Kuni Garu. Kikomi was killed by Phin's guards immediately after." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
            ]
        },
    ]
};

export default function PrincessKikomiPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}