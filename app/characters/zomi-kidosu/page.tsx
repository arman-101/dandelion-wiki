'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Zomi Kidosu",
    image: "/characters/zomi-kidosu.png",
    introduction: "Zomi Kidosu is a brilliant, radical thinker and engineer from Dasu. A student of the legendary Luan Zya, she rises from poverty and disability to become one of the most influential figures in the Dandelion Dynasty, championing innovation, meritocracy, and a complete reimagining of society's foundations.",
    infoBox: {
        aliases: "Mimi, Pearl of Fire, Farsight Secretary",
        occupation: "Scholar, Engineer, Farsight Secretary",
        placeOfBirth: { text: "Dasu", link: "/places/dasu" },
        status: "Alive",
        gender: "Female",
        significantOther: [
            { text: "Princess Théra", link: "/characters/princess-thera" }
        ],
        relatives: [
            { text: "Oga Kidosu (father)", link: "/characters/oga-kidosu" },
            { text: "Aki Kidosu (mother)", link: "" },
            { text: "Savo Ryoto (Kinri) (brother)", link: "/characters/kinri" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Dasu", link: "/places/dasu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Zomi was left with a scarred face and a paralyzed left leg after being struck by lightning as a child. She walks with the aid of a revolutionary mechanical leg brace invented for her by her teacher, Luan Zya." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/the-wall-of-storms#chapter-7" } },
        { type: 'text', content: " She possesses a fiery, impatient, and brilliant mind. She approaches all problems like an engineer, questioning why people cling to flawed, traditional systems instead of inventing better ones. This radical pragmatism often puts her at odds with the establishment. She is fiercely loyal to her ideals and to the people she loves, particularly her teacher Luan Zya and Princess Théra." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 16, link: "/books/the-wall-of-storms#chapter-16" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Discovered by Luan Zya as a child, Zomi was educated by the master strategist. She later traveled to Pan to take the Grand Examination. At the Palace Examination, her radical critique of the entire system and her proposal to abolish the logograms in favor of a phonetic script scandalized the court." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 15, link: "/books/the-wall-of-storms#chapter-15" } },
                { type: 'text', content: "During the Lyucu War, her genius proved critical. She brilliantly interpreted a letter from the Lyucu to discern a key weakness of the garinafins. Her inventions, such as the flamethrowers for the phantom airships, were instrumental in the victory at Rui. At the final Battle of Zathin Gulf, she arrived at the critical moment to help Gin Mazoti kill Pékyu Tenryo." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 41, link: "/books/the-wall-of-storms#chapter-41" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "As Farsight Secretary, her attempt to radically reform the Grand Examination was thwarted by Empress Jia, leading to her public disgrace and resignation." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 29, link: "/books/the-veiled-throne#chapter-29" } },
                { type: 'text', content: "Years later, she received Théra's secret message from across the sea, reigniting her hope. She began to organize a secret coalition to support Théra's cause, which put her in direct, clandestine conflict with Empress Jia. In a shocking revelation at the secret research facility Last Bite, she discovered that the young Lyucu refugee Kinri was in fact her long-lost brother, Savo Ryoto." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 1, link: "/books/speaking-bones#chapter-1" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
    ]
};

export default function ZomiKidosuPage() {
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