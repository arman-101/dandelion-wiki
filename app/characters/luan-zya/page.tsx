'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Luan Zya",
    image: "/characters/luan-zya.png",
    introduction: "Luan Zya is a brilliant scholar, inventor, and strategist from Haan, and one of the most pivotal figures in the Dandelion Rebellion. He serves as the chief strategist and a close advisor to Kuni Garu, guiding him with wisdom from both books and his unique life experiences.",
    infoBox: {
        aliases: "The Kite-Rider, Toru Noki",
        occupation: "Assassin, Strategist, Teacher",
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
        { type: 'text', content: "Luan Zya is described as lean and gaunt, with an intense and scholarly demeanor. As the mysterious assassin, he has skin 'as black as sand' and bright green eyes." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'text', content: " He is a man of immense intellect and patience, embodying the Haanese love for philosophy and invention. He believes in the power of knowledge and carefully planned change, symbolized by his belief that a dandelion can eventually crack a paving stone. Though he can be ruthless in strategy, he is fundamentally driven by a desire to create a better, more just world." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
    ],
    history: [
        {
            era: "Early Life & The Kite Attack (The Grace of Kings)",
            summary: [
                { type: 'text', content: "The last scion of a noble family of inventors, Luan Zya's family was massacred during the Xana conquest. He became a lone assassin, culminating in his famous but failed kite attack on Emperor Mapidéré in Zudi. Afterwards, he wandered Dara, living among the people of Tan Adü and eventually being gifted a magical, self-writing strategy book, Gitré Üthu, by the god Lutho." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
            ]
        },
        {
            era: "The Dandelion Rebellion & Civil War (The Grace of Kings)",
            summary: [
                { type: 'text', content: "He joined Kuni Garu and Mata Zyndu, becoming their chief strategist. It was his audacious plans, such as the alliance with Tan Adü to capture Pan, that often turned the tide of the war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
                { type: 'text', content: " He remained loyal to Kuni Garu during the civil war, providing the crucial strategic advice that allowed Dasu to challenge and eventually defeat Mata Zyndu's hegemony. He convinced Kuni that lasting peace was impossible while Mata lived, leading to the final confrontation at Rana Kida." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 42, link: "/books/the-grace-of-kings#chapter-42" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
        {
            era: "Reign of Four Placid Seas & Final Voyage (The Wall of Storms)",
            summary: [
                { type: 'text', content: "In the years of peace, Luan takes on a young, crippled girl from Dasu named Mimi as his student, renaming her Zomi Kidosu and training her to be his intellectual heir." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/the-wall-of-storms#chapter-7" } },
                { type: 'text', content: " Ever the explorer, he eventually tired of court life and sets out on an expedition to cross the Wall of Storms. He is captured by the Lyucu, who deceive him with a false history and manipulate him into providing the calculations to navigate the Wall." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 44, link: "/books/the-wall-of-storms#chapter-44" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/the-wall-of-storms#chapter-46" } },
                { type: 'text', content: " After discovering the truth from another captive, Oga Kidosu, he is tortured for more information but manages to embed a fatal flaw in the calculations. He and Oga escape during a final act of sabotage but die of their injuries on the shores of Rui. He leaves a final, coded message in his book, Gitré Üthu, giving Zomi the key to defeating the invaders." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 50, link: "/books/the-wall-of-storms#chapter-50" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 51, link: "/books/the-wall-of-storms#chapter-51" } },
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
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}