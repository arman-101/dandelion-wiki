'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Emperor Erishi",
    image: "/characters/emperor-erishi.png",
    introduction: "Emperor Erishi, born Prince Loshi, was the second and last emperor of the Xana Dynasty. Placed on the throne as a child, he was a weak and ineffective ruler whose decadent and foolish reign created the conditions for the Dandelion Rebellion.",
    infoBox: {
        aliases: "Prince Loshi",
        occupation: "Emperor of Dara",
        status: "Deceased",
        gender: "Male",
        relatives: "Emperor Mapidéré (father), Crown Prince Pulo (brother)",
        affiliation: "House of Xana, Empire of Dara",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Erishi is depicted as a spoiled, petulant, and unintelligent young man, completely disconnected from the realities of his empire. He is obsessed with decadent pleasures and elaborate toys, famously building a maze out of meat while his people starved. He possessed none of his father's vision or strength, making him an ideal puppet for the powerful figures at his court." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
    ],
    history: [
        {
            era: "Ascension to the Throne",
            summary: [
                { type: 'text', content: "Following the death of Emperor Mapidéré, a palace conspiracy led by Lügo Crupo and Goran Pira saw the true heir, Prince Pulo, murdered. Loshi, a younger and more pliable prince, was installed on the throne and given the regnal name Erishi. His reign was a disaster, marked by famine and the rapid decay of Imperial authority." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Erishi remained a non-entity throughout the rebellion, delegating all power to his regents, first Lügo Crupo and then Goran Pira. He was captured by Kuni Garu when Pan fell. He was ultimately killed by Mata Zyndu when the Hegemon burned the Imperial capital to the ground, bringing a final, ignominious end to the Xana Dynasty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
            ]
        },
    ]
};

export default function EmperorErishiPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}