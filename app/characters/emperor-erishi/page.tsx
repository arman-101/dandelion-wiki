'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Emperor Erishi",
    image: "/characters/emperor-erishi.png",
    introduction: "The second and last ruler of the Xana Dynasty, Emperor Erishi (born Prince Loshi) was a weak, foolish, and decadent boy-emperor whose complete detachment from reality hastened the collapse of his father's empire.",
    infoBox: {
        aliases: "Prince Loshi",
        occupation: "Emperor of Dara",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Deceased",
        gender: "Male",
        relatives: "Emperor Mapidéré (father), Crown Prince Pulo (brother)",
        affiliation: "House of Xana, Xana Empire",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Erishi is portrayed as a sheltered and childish youth, completely oblivious to the suffering of his people and the political turmoil consuming his empire. His primary concerns are lavish, absurd fantasies, such as building a maze made of meat or filling the seas of his giant map room with wine." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
        { type: 'text', content: "He is easily manipulated by his powerful advisors, Lügo Crupo and Goran Pira, and shows no capacity or interest in the duties of governance. His foolishness is legendary, exemplified by his infamous quote, 'Why do they insist on eating rice? Meat is so much better!'" },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Prince Loshi was placed on the throne as Emperor Erishi through the machinations of Goran Pira and Lügo Crupo, who forged a decree from the dying Emperor Mapidéré and murdered the true heir." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'text', content: "His reign was a disaster, marked by famine and rebellion, to which he remained utterly indifferent, delegating all power to his regents." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
                { type: 'text', content: "After Kuni Garu's forces captured Pan, Erishi was taken prisoner. He remained a terrified pawn until Mata Zyndu, in a fit of rage, burned Pan to the ground, killing the boy-emperor in the flames and ending the Xana Dynasty for good." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
            ]
        },
    ]
};

export default function EmperorErishiPage() {
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