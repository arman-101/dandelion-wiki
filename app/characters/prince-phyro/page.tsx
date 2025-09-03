'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Prince Phyro",
    image: "/characters/prince-phyro.png",
    introduction: "Prince Phyro is the charismatic and martially gifted son of Emperor Ragin and Consort Risana. Favored by the military faction of the court, he grows from a mischievous boy into a determined military leader who rebels against his mother's regency, a path that ends in tragedy.",
    infoBox: {
        aliases: "Emperor Monadétu",
        occupation: "Prince, Emperor of Dara",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Deceased",
        gender: "Male",
        relatives: [
            { text: "Kuni Garu (father)", link: "/characters/kuni-garu" },
            { text: "Consort Risana (mother)", link: "/characters/consort-risana" },
            { text: "Prince Timu (brother, by adoption)", link: "/characters/prince-timu" },
            { text: "Princess Théra (sister, by adoption)", link: "/characters/princess-thera" },
            { text: "Princess Fara (sister)", link: "/characters/princess-fara" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: "Daran",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "In his youth, Phyro is restless and more interested in martial pursuits than his studies. He embodies the 'sword' side of the court, inheriting his mother's intuitive understanding of warfare and his father's charisma. As he matures, he becomes a focused and determined leader, driven by a desire to prove himself and a conviction that only military strength can protect Dara." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 11, link: "/books/the-wall-of-storms#chapter-11" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As the martial son of the emperor, Phyro was groomed by the 'Swords' faction as their champion for the throne." }
            ]
        },
        {
            era: "The Martial Prince",
            summary: [
                { type: 'text', content: "As a boy, he was sent by Empress Jia to pacify the Hegemon cults in Tunoa, where he was besieged and ultimately saved by his sister Théra's intervention. After Théra abdicated, Phyro was named the heir. With his mother, Consort Risana, he investigated the silkmotic force, recognizing its potential as a new weapon." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 22, link: "/books/the-wall-of-storms#chapter-22" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 55, link: "/books/the-wall-of-storms#chapter-55" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As the young Emperor Monadétu, Phyro chafed under Empress Jia's regency and her pacifist policies. In defiance, he secretly established a garinafin training base at Tiro Cozo and worked with the Blossom Gang to build a clandestine army." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Phyro's secret army eventually forced Jia's hand, initiating the final war with the Lyucu. He won a major victory at the Battle of Crescent Island, proving himself a brilliant commander." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 19, link: "/books/speaking-bones#chapter-19" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 26, link: "/books/speaking-bones#chapter-26" } },
                { type: 'text', content: "However, upon learning that Jia had murdered his mother, his quest for justice turned to one of vengeance. He launched a surprise attack on Pan, confronted Jia in her secret bunker, and detonated a bomb, killing himself in a final, tragic attempt to execute his mother." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 44, link: "/books/speaking-bones#chapter-44" } },
            ]
        },
    ]
};

export default function PrincePhyroPage() {
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