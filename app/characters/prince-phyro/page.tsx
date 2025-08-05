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
        relatives: "Kuni Garu (father), Consort Risana (mother), Prince Timu (brother), Princess Théra (sister), Princess Fara (sister)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Dara", link: "/places/dara" },
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
                { type: 'text', content: "As a boy, Phyro showed early signs of his adventurous spirit. He was sent by his mother, Empress Jia, to pacify the Hegemon cults in Tunoa, where he was besieged and ultimately saved by his sister Théra's intervention." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 22, link: "/books/the-wall-of-storms#chapter-22" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
                { type: 'text', content: "After Théra abdicated, Phyro was named the new emperor. He traveled to Faça with his mother, Consort Risana, to investigate the silkmotic force, recognizing its potential as a new weapon." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 39, link: "/books/the-wall-of-storms#chapter-39" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 55, link: "/books/the-wall-of-storms#chapter-55" } },
            ]
        },
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "As the young Emperor Monadétu, Phyro chafed under his mother Jia's regency and her pacifist policies toward the Lyucu. He secretly established a garinafin training base at Tiro Cozo, working with the Lyucu defector Ouro to build a new aerial army in defiance of his mother's orders." },
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