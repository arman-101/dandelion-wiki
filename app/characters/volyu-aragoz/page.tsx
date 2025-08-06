'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Volyu Aragoz",
    image: "/characters/volyu-aragoz.png",
    introduction: "Volyu Aragoz was the treacherous uncle of Takval Aragoz and the chieftain of the exiled Agon tribe at the Sliyusa Ki oasis. He was a collaborator with the Lyucu, secretly betraying his own people to maintain his precarious position of power.",
    infoBox: {
        aliases: "Chief of Sliyusa Ki",
        occupation: "Agon Chieftain, Collaborator",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        relatives: [
            { text: "Takval Aragoz (nephew)", link: "/characters/takval-aragoz" },
            { text: "Souliyan Aragoz (sister)", link: "/characters/souliyan-aragoz" }
        ],
        affiliation: "Agon (Exiled), Lyucu Empire",
        nationality: { text: "Agon", link: "/concepts/agon" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Volyu is portrayed as a proud and hostile leader. He is deeply resentful of the Lyucu but chooses collaboration out of a sense of pragmatism and a desire to preserve his own power. He is treacherous and untrustworthy, viewing Théra and her Dara followers with suspicion and disdain." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "When Théra and Takval's expedition reached the Agon oasis, they were given a hostile welcome by Volyu. He demanded that Théra submit to him in vassalage, but was publicly shamed and outmaneuvered by Théra's powerful rhetoric." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
                { type: 'text', content: "It was revealed that Volyu had been betraying Agon rebels to the Lyucu for years. Théra and Takval staged a coup, deposing him but sparing his life to maintain the illusion of Agon loyalty while they secretly built their rebellion." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 14, link: "/books/the-veiled-throne#chapter-14" } },
            ]
        },
    ]
};

export default function VolyuAragozPage() {
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