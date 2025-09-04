'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "King Shilué",
    image: "/characters/king-shilue.png",
    introduction: "King Shilué was the treacherous and opportunistic king of Faça. His attempts to play both sides during the Chrysanthemum-Dandelion War led to his swift and unceremonious downfall at the hands of Gin Mazoti.",
    infoBox: {
        aliases: "The Treacherous King",
        occupation: "King of Faça",
        placeOfBirth: { text: "Faça", link: "/places/faca" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Kingdom of Faça",
        nationality: { text: "Faça", link: "/places/faca" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Shilué is characterized by his opportunism and lack of conviction. He is a political chameleon, willing to betray any alliance if he believes it will benefit him. His cleverness is not matched by wisdom, and he ultimately overplays his hand." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "King Shilué's short and treacherous reign serves as a cautionary tale for the ambitious but disloyal nobles of the rebellion." }
            ]
        },
        {
            era: "A Treacherous Reign",
            summary: [
                { type: 'text', content: "During the Battle of Wolf's Paw, King Shilué's forces, along with those of Gan, betrayed Mata Zyndu and the Tiro Alliance, switching sides mid-battle to support the Empire." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
                { type: 'text', content: "Years later, during the war between Kuni and Mata, Marshal Gin Mazoti marched her army into the northern states. Believing he could manipulate the situation, King Shilué welcomed her into his capital, intending to betray her. Gin, having confirmed his treachery, had him executed at his own banquet and conquered his kingdom." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
            ]
        },
    ]
};

export default function KingShiluePage() {
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