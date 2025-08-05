'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Ra Olu",
    image: "/characters/ra-olu.png",
    introduction: "Ra Olu was a Dara official and the regent of Dasu under Prince Timu. After the Lyucu invasion, he became a willing and influential collaborator, advising the invaders on how to control and suppress the conquered populace.",
    infoBox: {
        aliases: "The Collaborator",
        occupation: "Regent of Dasu, Advisor to the Lyucu",
        placeOfBirth: { text: "Dasu", link: "/places/dasu" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Lyucu Occupation Government",
        nationality: { text: "Dasu", link: "/places/dasu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Ra Olu is a pragmatic and opportunistic bureaucrat. His primary motivation appears to be survival and the maintenance of order, regardless of who is in power. He readily applies his administrative skills to the service of the Lyucu, showing little moral compunction about betraying his own people." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/the-wall-of-storms#chapter-40" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As regent of Dasu, Ra Olu served Prince Timu. After the Lyucu conquered the island, he quickly became a collaborator. He advised Pékyu Tenryo on methods of control, such as collective punishment and rewarding informants. He also aided in the syncretization of the Dara and Lyucu gods, a key tool of cultural suppression. It was he who wrote the ultimatum to the Dandelion Court on Tenryo's behalf, a letter Zomi Kidosu later deconstructed to find hidden intelligence." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 35, link: "/books/the-wall-of-storms#chapter-35" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/the-wall-of-storms#chapter-40" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 41, link: "/books/the-wall-of-storms#chapter-41" } },
            ]
        },
    ]
};

export default function RaOluPage() {
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