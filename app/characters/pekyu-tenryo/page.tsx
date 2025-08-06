'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Pékyu Tenryo",
    image: "/characters/pekyu-tenryo.png",
    introduction: "Pékyu Tenryo was the ruthless, patient, and cunning leader of the Lyucu people. He orchestrated the enslavement of Mapidéré's lost expedition and used their knowledge to launch a full-scale invasion of Dara, which he viewed as a promised land for his people.",
    infoBox: {
        aliases: "The Pékyu",
        occupation: "Leader of the Lyucu, Invader",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Male",
        relatives: [
            { text: "Tanvanaki (daughter)", link: "/characters/tanvanaki" },
            { text: "Cudyu Roatan (son)", link: "/characters/cudyu-roatan" }
        ],
        affiliation: "Lyucu Empire",
        nationality: { text: "Lyucu", link: "/places/lyucu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Tenryo is the epitome of a pragmatic and ruthless leader, forged by a life of harshness and war. He is a master of the long game, feigning submission and ignorance for years to learn the secrets of the technologically superior Dara. He is patient, cunning, and completely devoid of sentiment when it comes to achieving his goals. He is not a man of honor in the Dara sense; he is a survivor and a conqueror who will use any means necessary to secure a future for his people." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Tenryo's backstory is one of brutal pragmatism. Sent as a hostage to the rival Agon tribe as a boy, he learned their ways and returned to unite all the Lyucu tribes under his iron-fisted rule." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 48, link: "/books/the-wall-of-storms#chapter-48" } },
                { type: 'text', content: "When Emperor Mapidéré's expedition arrived, Tenryo played the part of a servile barbarian, allowing his people to learn Dara's technology and tactics. When the time was right, he led a violent uprising, enslaved the entire expedition, and used their city-ships to launch his own invasion of Dara." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
                { type: 'text', content: "He personally oversaw the initial invasion, outmaneuvering Zato Ruthi and conquering Dasu. His campaign culminated in the Battle of Zathin Gulf, where he used the captured Emperor Ragin as a human shield. He was killed in a final duel aboard his flagship by Gin Mazoti and Zomi Kidosu." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 36, link: "/books/the-wall-of-storms#chapter-36" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 58, link: "/books/the-wall-of-storms#chapter-58" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 60, link: "/books/the-wall-of-storms#chapter-60" } },
            ]
        },
    ]
};

export default function PekyuTenryoPage() {
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