'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Pon Naye",
    image: "/characters/pon-naye.png",
    introduction: "Pon Naye was a courageous and stoic Dara airship squadron commander who served under Marshal Gin Mazoti. He is remembered for his heroic sacrifice during the first major battle against the Lyucu.",
    infoBox: {
        aliases: "Commander Naye",
        occupation: "Airship Commander",
        placeOfBirth: { text: "Dara", link: "/places/dara" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Dara Imperial Air Force",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Pon Naye is the epitome of a brave and dedicated soldier. He is a man of few words, defined by his actions and his unwavering courage in the face of impossible odds. He is a practical atheist, stating that he has never prayed despite facing death daily, putting his faith in his skills and his comrades." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Commander Pon Naye led a squadron of new 'phantom' airships during Marshal Gin's daring counter-invasion of Rui. During the Battle of Kriphi Harbor, his squadron launched a devastating surprise attack on the Lyucu fleet. When a garinafin attacked his ship, Pon Naye made the ultimate sacrifice, ordering his crew to abandon ship while he steered the damaged vessel on a suicidal ramming course, successfully killing the war beast and securing a key moment in Dara's first victory against the invaders." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 42, link: "/books/the-wall-of-storms#chapter-42" } },
            ]
        },
    ]
};

export default function PonNayePage() {
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