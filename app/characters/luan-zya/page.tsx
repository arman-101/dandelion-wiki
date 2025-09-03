'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Luan Zya",
    image: "/characters/luan-zya.png",
    introduction: "Luan Zya is a brilliant scholar, inventor, and strategist from Haan, and one of the most pivotal figures in the Dandelion Rebellion. The sole survivor of a noble house of innovators, his genius for strategy and invention becomes the intellectual foundation of Kuni Garu's rise to power.",
    infoBox: {
        aliases: "The Kite-Rider, Toru Noki",
        occupation: "Assassin, Strategist, Inventor, Teacher",
        placeOfBirth: { text: "Ginpen", link: "/places/ginpen" },
        status: "Deceased",
        gender: "Male",
        significantOther: { text: "Gin Mazoti", link: "/characters/gin-mazoti" },
        relatives: { text: "Aya Mazoti (daughter)", link: "/characters/aya-mazoti" },
        affiliation: "House of Zya, Dandelion Court",
        nationality: { text: "Haan", link: "/places/haan" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Luan Zya is described as lean and gaunt, with an intense and scholarly demeanor. He is a man of immense intellect and patience, embodying the Haanese love for philosophy and invention." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/the-wall-of-storms#chapter-7" } },
        { type: 'text', content: "He believes in the power of knowledge and carefully planned, incremental change, symbolized by his conviction that 'the lowly dandelion, with time and patience, can crack the strongest paving stone.' Though he can be ruthless in strategy, he is fundamentally driven by a desire to create a better, more just world rather than simply restore the old order." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Luan Zya's early life was defined by tragedy, which forged him into a master strategist who became the architect of the Dandelion Rebellion's greatest victories." }
            ]
        },
        {
            era: "Vengeance and a New Purpose",
            summary: [
                { type: 'text', content: "The last scion of a noble family of inventors, Luan Zya's family was massacred during the Xana conquest. He was the sole survivor, escaping on one of his father's experimental kites. He spent years as a lone assassin, culminating in his famous but failed kite attack on Emperor Mapidéré, an event witnessed by a young Kuni Garu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
                { type: 'text', content: "After the attack, he wandered Dara and was eventually gifted a magical, self-writing strategy book, Gitré Üthu, by the god Lutho. This shifted his purpose from mere vengeance to a quest to reshape the world." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
            ]
        },
        {
            era: "Strategist of the Rebellion",
            summary: [
                { type: 'text', content: "He sought out Kuni Garu, and they formed an instant, deep bond, with Luan becoming Kuni's chief advisor. He became the 'mind' of the rebellion's central triumvirate, alongside Kuni's 'heart' and Mata Zyndu's 'arm'." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 19, link: "/books/the-grace-of-kings#chapter-19" } },
                { type: 'text', content: "His audacious plans, such as allying with the cruben-riders of Tan Adü to launch a surprise attack on Pan, were instrumental in the fall of the Xana Empire." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
                { type: 'text', content: "During the civil war, he remained loyal to Kuni, challenging him to build a better empire and providing the crucial advice that led to victory over Mata Zyndu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 42, link: "/books/the-grace-of-kings#chapter-42" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "In the years of peace, Luan dedicated himself to his personal quests for knowledge and passing on his wisdom, a path that led to his final, heroic sacrifice." }
            ]
        },
        {
            era: "Teacher and Final Voyage",
            summary: [
                { type: 'text', content: "Traveling incognito, Luan discovered a brilliant, crippled girl from Dasu named Mimi. He took her on as his student, renaming her Zomi Kidosu and training her with his unorthodox methods to be his intellectual heir." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/the-wall-of-storms#chapter-7" } },
                { type: 'text', content: "Driven by his insatiable curiosity, he refused Kuni's plea to remain at court and instead embarked on a voyage to explore the unknown lands beyond the Wall of Storms." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
                { type: 'text', content: "He was captured by the Lyucu, who manipulated him with a false history. After learning their true, genocidal intentions from another captive, Oga Kidosu, he was tortured into providing them with navigational calculations. However, he secretly embedded a fatal flaw in the equations." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 50, link: "/books/the-wall-of-storms#chapter-50" } },
                { type: 'text', content: "In a final act of sabotage, he and Oga escaped the Lyucu flagship but died of their injuries. He left a final, coded message for Zomi, giving Dara the key to destroying the Lyucu reinforcement fleet, a posthumous victory that saved the islands." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 51, link: "/books/the-wall-of-storms#chapter-51" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 62, link: "/books/the-wall-of-storms#chapter-62" } },
            ]
        },
    ]
};

export default function LuanZyaPage() {
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