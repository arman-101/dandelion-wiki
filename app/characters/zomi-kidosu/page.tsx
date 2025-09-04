'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Zomi Kidosu",
    image: "/characters/zomi-kidosu.png",
    introduction: "Zomi Kidosu is a brilliant, radical thinker and engineer from Dasu. A student of the legendary Luan Zya, she rises from poverty and disability to become one of the most influential figures in the Dandelion Dynasty, championing innovation, meritocracy, and a complete reimagining of society's foundations.",
    infoBox: {
        aliases: "Mimi, Pearl of Fire, Farsight Secretary",
        occupation: "Scholar, Engineer, Farsight Secretary, Academy Founder",
        placeOfBirth: { text: "Dasu", link: "/places/dasu" },
        status: "Alive",
        gender: "Female",
        significantOther: [
            { text: "Princess Théra", link: "/characters/princess-thera" }
        ],
        relatives: [
            { text: "Oga Kidosu (father)", link: "/characters/oga-kidosu" },
            { text: "Aki Kidosu (mother)", link: "" },
            { text: "Savo Ryoto (Kinri) (half-brother)", link: "/characters/kinri" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Dasu", link: "/places/dasu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Zomi was left with a scarred face and a paralyzed left leg after being struck by lightning as a child. She possesses a fiery, impatient, and brilliant mind. She approaches all problems like an engineer, questioning why people cling to flawed, traditional systems instead of inventing better ones. This radical pragmatism often puts her at odds with the establishment. She is fiercely loyal to her ideals and to the people she loves, particularly her teacher Luan Zya and Princess Théra." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 16, link: "/books/the-wall-of-storms#chapter-16" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Discovered by Luan Zya, Zomi's radical intellect made an immediate impact on the empire. At the Palace Examination, her critique of the system scandalized the court. During the Lyucu War, her genius proved critical; she discerned a key weakness of the garinafins and her inventions were instrumental in Dara's early victories. She arrived at the Battle of Zathin Gulf at the critical moment to help Gin Mazoti kill Pékyu Tenryo." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/the-wall-of-storms#chapter-7" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 15, link: "/books/the-wall-of-storms#chapter-15" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As Farsight Secretary, her attempt to radically reform the Grand Examination was thwarted by Empress Jia, leading to her public disgrace and resignation. She later discovered at the secret research facility Last Bite that the young Lyucu refugee Kinri was in fact her long-lost half-brother, Savo Ryoto." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 29, link: "/books/the-veiled-throne#chapter-29" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Zomi worked with the Blossom Gang to build popular support for Emperor Phyro's war effort. After Empress Jia was deposed, Zomi was the one who persuaded a reluctant Princess Fara to accept the throne. She then resigned her post to found a new kind of academy on her home island of Dasu. The series ends with her emotional reunion with an aged Théra, the love of her life, who has finally returned home." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 18, link: "/books/speaking-bones#chapter-18" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 53, link: "/books/speaking-bones#chapter-53" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 59, link: "/books/speaking-bones#chapter-59" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}