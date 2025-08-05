'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Oga Kidosu",
    image: "/characters/oga-kidosu.png",
    introduction: "Oga Kidosu was a humble fisherman from Dasu and the long-lost father of the brilliant scholar Zomi Kidosu. After being lost at sea, he was enslaved by the Lyucu and became a key witness to their history and their brutal conquest of Emperor Mapidéré's lost expedition.",
    infoBox: {
        aliases: "The Storyteller",
        occupation: "Fisherman, Farmer, Slave, Storyteller",
        placeOfBirth: { text: "Dasu", link: "/places/dasu" },
        status: "Deceased",
        gender: "Male",
        significantOther: [
            { text: "Aki Kidosu (wife)", link: "" },
            { text: "Goztan Ryoto", link: "/characters/goztan-ryoto" }
        ],
        relatives: [
            { text: "Zomi Kidosu (daughter)", link: "/characters/zomi-kidosu" },
            { text: "Savo Ryoto (Kinri) (son)", link: "/characters/kinri" }
        ],
        affiliation: "None",
        nationality: { text: "Dasu", link: "/places/dasu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Oga is a clever and resilient man who uses storytelling as a tool for survival and subtle resistance. Despite years of enslavement, he maintains his cultural identity and his love for his family. He is a man of quiet courage who endures immense hardship to protect others and preserve the truth." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 4, link: "/books/the-veiled-throne#chapter-4" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Years before the invasion, Oga was conscripted into the search for Emperor Mapidéré's lost expedition and was presumed lost at sea. He was, in fact, carried to the Lyucu lands where he was enslaved. It was he who revealed the true, brutal history of the lost expedition to Luan Zya, explaining how Pékyu Tenryo tricked, disarmed, and enslaved the Dara forces." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
                { type: 'text', content: "To save Luan Zya from further torture, Oga endured torture himself. He was taken on the invasion fleet with Luan and died from his injuries after their escape attempt. His body, along with Luan's, was discovered by his daughter Zomi on Rui." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 50, link: "/books/the-wall-of-storms#chapter-50" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 51, link: "/books/the-wall-of-storms#chapter-51" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Flashbacks reveal Oga's role during the Dara occupation of Ukyu-Gondé. He cleverly staged the 'discovery' of a prophetic turtle shell to manipulate the arrogant Dara captain, Dathama, and formed a complex, tense relationship with the young Lyucu warrior Goztan Ryoto, with whom he had a son, Savo (Kinri)." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 3, link: "/books/the-veiled-throne#chapter-3" } },
                 { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
    ]
};

export default function OgaKidosuPage() {
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