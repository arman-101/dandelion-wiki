'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Gin Mazoti",
    image: "/characters/gin-mazoti.png",
    introduction: "Gin Mazoti is a military prodigy who rises from the streets of Dimushi to become the first female Marshal in the history of Dara. She is Kuni Garu's most brilliant and loyal commander, known for her mastery of logistics, deception, and unconventional warfare.",
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
        nationality: "Daran",
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Gin is small in stature, a physical trait that caused her to be constantly underestimated. For much of her early life, she disguised herself as a boy named 'Gin' to survive and find work in a male-dominated world." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 40, link: "/books/the-grace-of-kings#chapter-40" } },
        { type: 'text', content: "She is fiercely intelligent, proud, and ambitious, with a genius for logistics and strategy. She is pragmatic and ruthless when necessary but also possesses a strong sense of honor and loyalty, particularly towards Kuni Garu, the first leader to recognize her talent. This loyalty is tested when the god Kiji tempts her to betray Kuni, but she ultimately refuses, choosing faith in her lord over a path to absolute power." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 49, link: "/books/the-grace-of-kings#chapter-49" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Gin Mazoti's early life was a constant struggle for survival, which forged her into a military genius who would become the architect of Kuni Garu's greatest victories." }
            ]
        },
        {
            era: "From Obscurity to Marshal",
            summary: [
                { type: 'text', content: "An orphan from a brothel in Dimushi, Gin survived on the streets before disguising herself as a boy. She served in various rebel armies as a quartermaster, constantly frustrated as her brilliant strategic advice was ignored by arrogant nobles." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 40, link: "/books/the-grace-of-kings#chapter-40" } },
                { type: 'text', content: "She eventually found her way to Kuni Garu in Dasu. After she bested his top advisor in a game of strategy, Kuni recognized her genius. In a revolutionary act, he revealed her as a woman to his entire army and promoted her to Marshal, entrusting her with forging his followers into a modern fighting force." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/the-grace-of-kings#chapter-41" } },
            ]
        },
        {
            era: "Architect of Victory",
            summary: [
                { type: 'text', content: "Gin's brilliant strategies were the key to Kuni's victory in the Chrysanthemum-Dandelion War. She masterminded the surprise attack on Rui through the Grand Tunnels and led a solo campaign to conquer the northern states of Rima and Faça." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
                { type: 'text', content: "After the war, Kuni rewarded her with the title Queen of Géjira, making her one of the most powerful figures in the new empire." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "During the years of peace, Gin's power and principles were tested by the treacherous politics of the Dandelion Court, culminating in her heroic sacrifice to save Dara." }
            ]
        },
        {
            era: "Queen, Rival, and Prisoner",
            summary: [
                { type: 'text', content: "As Queen, Gin became the leader of the 'Swords,' a court faction representing the military old guard. This put her in direct political conflict with Empress Jia. After honorably granting refuge to defeated rebels, Jia exploited the situation to frame Gin for treason, having her arrested and imprisoned." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 28, link: "/books/the-wall-of-storms#chapter-28" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 29, link: "/books/the-wall-of-storms#chapter-29" } },
            ]
        },
        {
            era: "Final Command and Sacrifice",
            summary: [
                { type: 'text', content: "When the Lyucu invaded, Jia confessed her plot and begged Gin to retake command of the army. Putting the empire's survival before her own pride, Gin agreed and led a brilliant counter-invasion of Rui." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 38, link: "/books/the-wall-of-storms#chapter-38" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 52, link: "/books/the-wall-of-storms#chapter-52" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
                { type: 'text', content: "Her final battle was at Zathin Gulf. Facing certain defeat, Gin made the ultimate sacrifice, crashing her flagship into the Lyucu command ship. In the ensuing chaos, she dueled and, with Zomi Kidosu's aid, killed the Lyucu leader, Pékyu Tenryo, at the cost of her own life." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Gin's death secured a future for Dara, and her legacy lived on through her daughter with Luan Zya, Aya Mazoti, who would follow in her footsteps as a brilliant military commander." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 18, link: "/books/speaking-bones#chapter-18" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}