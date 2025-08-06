'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Gin Mazoti",
    image: "/characters/gin-mazoti.png",
    introduction: "Gin Mazoti is a military prodigy who rises from obscurity to become the first female Marshal in the history of Dara. She is Kuni Garu's most brilliant and loyal commander, known for her mastery of logistics, deception, and unconventional warfare.",
    infoBox: {
        aliases: "Marshal Gin, Queen of Rima and Faça, Queen of Géjira",
        occupation: "Dockworker, Quartermaster, Marshal, Queen",
        placeOfBirth: { text: "Dimushi", link: "/places/dimushi" },
        status: "Deceased",
        gender: "Female",
        significantOther: [
            { text: "Luan Zya", link: "/characters/luan-zya" }
        ],
        relatives: [
            { text: "Aya Mazoti (daughter)", link: "/characters/aya-mazoti" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Amu", link: "/places/amu" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Gin is small and wiry, with a sharp, intelligent face. For much of her early life, she disguised herself as a boy named 'Gin' to survive and find work in a male-dominated world." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 40, link: "/books/the-grace-of-kings#chapter-40" } },
        { type: 'text', content: " Gin is fiercely intelligent, proud, and ambitious. She has a deep understanding of the practical realities of war, from supply lines to troop morale, which other, more glory-focused commanders often overlook. She is pragmatic and ruthless when necessary but also possesses a strong sense of honor and loyalty, particularly towards Kuni Garu, the first leader to recognize her true talent. This loyalty is tested by the god Kiji, who tempts her to betray Kuni, but she ultimately refuses, choosing faith in her lord over the path to absolute power." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 49, link: "/books/the-grace-of-kings#chapter-49" } },
    ],
    history: [
        {
            era: "Early Life & Rise to Marshal (The Grace of Kings)",
            summary: [
                { type: 'text', content: "An orphan from a brothel in Dimushi, Gin survived on the streets before disguising herself as a boy to work on the docks. She served in various rebel armies as a quartermaster, constantly frustrated as her brilliant strategic advice was ignored by arrogant nobles." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 40, link: "/books/the-grace-of-kings#chapter-40" } },
                { type: 'text', content: "She eventually found her way to [[Kuni Garu|/characters/kuni-garu]] in [[Dasu|/places/dasu]]. After she bested his top advisor, [[Cogo Yelu|/characters/cogo-yelu]], in a game of cüpa, Kuni recognized her genius. In a revolutionary act, he revealed her as a woman to his entire army and promoted her to Marshal." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/the-grace-of-kings#chapter-41" } },
                { type: 'text', content: " Gin's brilliant strategies—including the surprise attack on [[Rui|/places/rui]] through the Grand Tunnels and her conquest of the northern states of [[Rima|/places/rima]] and [[Faca|/places/faca]]—were the key to Kuni's victory over [[Mata Zyndu|/characters/mata-zyndu]]. For her victories, Kuni eventually named her Queen of [[Gejira|/places/gejira]]." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
                 { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
            ]
        },
        {
            era: "Court Politics & The Lyucu War (The Wall of Storms)",
            summary: [
                { type: 'text', content: "As Marshal and Queen of Géjira, Gin became the leader of the 'Swords,' a court faction representing the military old guard. This often put her in political conflict with Empress Jia, leader of the 'Abacus' faction. After granting refuge to defeated rebels, Jia used the opportunity to frame Gin for treason, having her arrested and imprisoned." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 28, link: "/books/the-wall-of-storms#chapter-28" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 29, link: "/books/the-wall-of-storms#chapter-29" } },
                { type: 'text', content: "When the Lyucu invaded Dara, Jia confessed her plot and begged Gin to retake command of the army. Putting the empire's survival before her own pride, Gin agreed. She led a brilliant counter-invasion of Rui, using new technologies like mechanical crubens and flamethrower-equipped airships to achieve a stunning victory." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 38, link: "/books/the-wall-of-storms#chapter-38" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
            ]
        },
        {
            era: "Final Battle and Legacy (The Wall of Storms)",
            summary: [
                { type: 'text', content: "Gin's final battle was at Zathin Gulf. Commanding the Dara fleet from her flagship, she engaged the main Lyucu invasion force. When the battle turned against them due to betrayal, Gin made the ultimate sacrifice, crashing her flagship into the Lyucu command ship. In the ensuing chaos, she dueled and, with Zomi Kidosu's aid, killed the Lyucu leader, Pékyu Tenryo, at the cost of her own life." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
                { type: 'text', content: " Her death secured a future for Dara, and her legacy lived on through her daughter with Luan Zya, Aya Mazoti, who would follow in her footsteps as a brilliant military commander." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 6, link: "/books/speaking-bones#chapter-6" } },
            ]
        },
    ]
};

export default function GinMazotiPage() {
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