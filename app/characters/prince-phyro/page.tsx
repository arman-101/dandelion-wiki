'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Prince Phyro",
    image: "/characters/prince-phyro.png",
    introduction: "Prince Phyro is the charismatic and martially gifted son of Emperor Ragin and Consort Risana. Favored by the military faction of the court, he grows from a mischievous boy into a determined military leader who secretly builds an army to reclaim Dara from the Lyucu, eventually ascending the throne as Emperor Monadétu.",
    infoBox: {
        aliases: "Emperor Monadétu",
        occupation: "Prince, Emperor of Dara",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Male",
        relatives: [
            { text: "Kuni Garu (father)", link: "/characters/kuni-garu" },
            { text: "Consort Risana (mother)", link: "/characters/consort-risana" },
            { text: "Prince Timu (brother)", link: "/characters/prince-timu" },
            { text: "Princess Théra (sister)", link: "/characters/princess-thera" },
            { text: "Princess Fara (sister)", link: "/characters/princess-fara" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: "Dara",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "In his youth, Phyro is mischievous and more interested in martial pursuits and spectacle than in his studies. He embodies the 'sword' side of the court, inheriting his mother's intuitive understanding of warfare and his father's charisma. As he matures, he becomes a focused and determined leader, driven by a desire to prove himself and defend his homeland." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 11, link: "/books/the-wall-of-storms#chapter-11" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As a boy, Phyro showed early signs of his adventurous spirit. He was sent by his mother, [[Empress Jia|/characters/jia-matiza]], to pacify the Hegemon cults in [[Tunoa Islands|/places/tunoa-islands]], where he was besieged and ultimately saved by his sister [[Princess Théra|/characters/princess-thera]]'s intervention." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 22, link: "/books/the-wall-of-storms#chapter-22" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
                { type: 'text', content: "After [[Princess Théra|/characters/princess-thera]] abdicated, Phyro was named the new emperor. He traveled to [[Faca|/places/faca]] with his mother, [[Consort Risana|/characters/consort-risana]], to investigate the [[silkmotic force|/concepts/silkmotic-force]], recognizing its potential as a new weapon." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 39, link: "/books/the-wall-of-storms#chapter-39" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 55, link: "/books/the-wall-of-storms#chapter-55" } },
            ]
        },
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "As the young Emperor Monadétu, Phyro chafed under his mother [[Empress Jia|/characters/jia-matiza]]'s regency and her pacifist policies toward the [[Lyucu|/concepts/lyucu]]. He secretly established a [[garinafin|/concepts/garinafin]] training base at [[Tiro Cozo|/places/tiro-cozo]], working with the Lyucu defector [[Ofluro|/characters/ofluro]] to build a new aerial army in defiance of his mother's orders." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
                { type: 'text', content: "His secret army and rebellion against his mother's strategy became a key factor in the final war for Dara. He led his new garinafin force in the desperate final assault on the Lyucu stronghold, proving himself a worthy successor to his father's legacy as a warrior-king." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 18, link: "/books/speaking-bones#chapter-18" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 35, link: "/books/speaking-bones#chapter-35" } },
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
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}