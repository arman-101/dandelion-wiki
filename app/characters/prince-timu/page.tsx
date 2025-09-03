'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Prince Timu",
    image: "/characters/prince-timu.png",
    introduction: "Prince Timu is the studious and serious Crown Prince of the Dandelion Dynasty, the eldest son of Emperor Ragin and Empress Jia. A man of principle and intellect, his journey is one of tragic compromise after being captured by the Lyucu and forced to become a puppet emperor.",
    infoBox: {
        aliases: "Emperor Thaké",
        occupation: "Crown Prince of Dara, Emperor of Unredeemed Dara",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Deceased",
        gender: "Male",
        significantOther: { text: "Tanvanaki", link: "/characters/tanvanaki" },
        relatives: [
            { text: "Kuni Garu (father)", link: "/characters/kuni-garu" },
            { text: "Jia Matiza (mother)", link: "/characters/jia-matiza" },
            { text: "Princess Théra (sister)", link: "/characters/princess-thera" },
            { text: "Prince Phyro (brother, by adoption)", link: "/characters/prince-phyro" },
            { text: "Princess Fara (sister, by adoption)", link: "/characters/princess-fara" }
        ],
        affiliation: "Dandelion Court, Lyucu Occupation Government",
        nationality: "Daran",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Timu is studious, serious, and sometimes overly literal, a stark contrast to his adventurous sister Théra and martial brother Phyro. He is a diligent administrator and a man of deep moral conviction. However, his idealism is severely tested by the brutal realities of the Lyucu invasion and his subsequent captivity." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Sent to govern the island of Dasu, Timu was on the front lines when the Lyucu invasion began. With his forces overwhelmed, he made the courageous choice to surrender to prevent the slaughter of civilians, becoming a captive of Pékyu Tenryo." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 22, link: "/books/the-wall-of-storms#chapter-22" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 37, link: "/books/the-wall-of-storms#chapter-37" } },
                { type: 'text', content: "In captivity, he fell in love with the Lyucu princess Tanvanaki, who manipulated him into becoming a puppet emperor. Believing he was forging a path to peace, he publicly denounced his own family, a profound betrayal that broke his father's heart." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 56, link: "/books/the-wall-of-storms#chapter-56" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As the puppet 'Emperor Thaké,' Timu's life was one of constant humiliation. He was largely powerless, caught between his love for his new family and his duty to his old one. Empowered by a secret message from his mother, he courageously denounced the brutal purges of the hardliner Cutanrovo Aga, but his outburst backfired, leading to his further marginalization." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 16, link: "/books/the-veiled-throne#chapter-16" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Timu's tragic story concluded with the total collapse of the Lyucu occupation. In the final chaotic days, after his wife Tanvanaki was murdered by Cutanrovo, a stunned and powerless Timu was in turn murdered by the traitor Noda Mi." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 39, link: "/books/speaking-bones#chapter-39" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 43, link: "/books/speaking-bones#chapter-43" } },
            ]
        },
    ]
};

export default function PrinceTimuPage() {
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