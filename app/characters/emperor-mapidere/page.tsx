'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Emperor Mapidéré",
    image: "/characters/emperor-mapidere.png",
    introduction: "Emperor Mapidéré, born King Réon of Xana, was the ambitious and ruthless conqueror who first united the Tiro states into the Empire of Dara. His reign was marked by magnificent achievements and immense cruelty, and his death created the power vacuum that sparked the Dandelion Rebellion.",
    infoBox: {
        aliases: "King Réon of Xana",
        occupation: "King, Emperor of Dara",
        placeOfBirth: { text: "Xana", link: "/places/xana" },
        status: "Deceased",
        gender: "Male",
        relatives: "Crown Prince Pulo (son), Prince Loshi (son)",
        affiliation: "House of Xana, Empire of Dara",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "In his old age, Mapidéré is described as gaunt, with hard, expressionless eyes. He wears a splendid crown of gold and gems topped with the statuette of a cruben." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
        { type: 'text', content: " Mapidéré was a ruler of grand vision and profound paranoia. He was a brilliant military strategist who used advanced airship technology to achieve what no one thought possible. However, he was also a tyrant who ruled through fear, imposing crushing taxes and brutal forced labor upon the conquered peoples. He believed that the only way to hold his empire together was through a constant display of overwhelming power and splendor." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/grace-of-kings#chapter-5" } },
    ],
    history: [
        {
            era: "The Unification Wars",
            summary: [
                { type: 'text', content: "As King Réon of Xana, he harnessed the mystical lift gas from Mount Kiji to build an unstoppable fleet of airships. Over two decades, he systematically conquered the other six Tiro states, culminating in the unification of the Islands of Dara under his single, iron-fisted rule as Emperor Mapidéré." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/grace-of-kings#chapter-4" } },
            ]
        },
        {
            era: "Reign as Emperor",
            summary: [
                { type: 'text', content: "His reign was defined by monumental engineering projects, such as the construction of the immaculate capital city of Pan and the Grand Tunnels, all built with the brutal use of corvée labor." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/grace-of-kings#chapter-6" } },
                { type: 'text', content: " In his later years, he became obsessed with his legacy and succession. A palace conspiracy orchestrated by his most trusted advisors led to the death of his chosen heir, and he died leaving the empire in the hands of a weak child and a corrupt regent, paving the way for total collapse." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/grace-of-kings#chapter-5" } },
            ]
        },
    ]
};

export default function EmperorMapiderePage() {
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