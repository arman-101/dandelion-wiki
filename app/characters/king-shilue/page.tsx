'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "King Shilué",
    image: "/characters/king-shilue.png",
    introduction: "King Shilué was the treacherous and opportunistic king of Faça during the Chrysanthemum-Dandelion War. His attempt to play both sides of the conflict led to his swift downfall.",
    infoBox: {
        aliases: "None",
        occupation: "King of Faça",
        status: "Deceased",
        gender: "Male",
        affiliation: "Faça",
        nationality: { text: "Faça", link: "/places/faca" },
        firstAppeared: "The Grace of Kings",
        lastAppeared: "The Grace of Kings"
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Shilué is a cunning but ultimately foolish ruler. He believes himself to be a master of political maneuvering, but he overestimates his own cleverness and fails to grasp the true nature of the powerful figures he is dealing with, like Gin Mazoti. He is driven by self-interest and a desire to expand his own power, with little regard for honor or loyalty." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
    ],
    history: [
        {
            era: "The Marshal's Gambit",
            summary: [
                { type: 'text', content: "During the war between Kuni Garu and Mata Zyndu, King Shilué declared Faça neutral. When Marshal Gin Mazoti marched her army into his territory, Shilué welcomed her, intending to betray her and seize her army. Gin, however, saw through his plot immediately. She accepted his hospitality, and then promptly had him executed for his treachery before claiming the state of Faça for herself." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
            ]
        },
    ]
};

export default function KingShiluePage() {
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