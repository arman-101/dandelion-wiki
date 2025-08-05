'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Aya Mazoti",
    image: "/characters/aya-mazoti.png",
    introduction: "Aya Mazoti is the daughter of the legendary Marshal Gin Mazoti and the brilliant strategist Luan Zya. A skilled commander in her own right, she is driven by a fierce desire to live up to her parents' legacy and restore her family's honor.",
    infoBox: {
        aliases: "The Marshal's Daughter",
        occupation: "Princess, Commander",
        placeOfBirth: { text: "Dara", link: "/places/dara" },
        status: "Alive",
        gender: "Female",
        relatives: "Gin Mazoti (mother), Luan Zya (father)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Aya inherits her mother's fierce determination and her father's strategic mind. She is proud, ambitious, and deeply conscious of the immense legacy she has to uphold. After an early failure, she dedicates herself to becoming a master of the martial arts, seeking to prove that she is a worthy successor to her parents." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 6, link: "/books/speaking-bones#chapter-6" } },
    ],
    history: [
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "After a disastrous first military command, a humbled Aya travels to the remote warrior monasteries of Eseeran Nomnny. There, she undergoes a brutal training regimen under the legendary Sword-Saint, transforming herself from a princess into a hardened and formidable warrior." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 40, link: "/books/the-veiled-throne#chapter-40" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 6, link: "/books/speaking-bones#chapter-6" } },
                { type: 'text', content: "She returns to Dara a seasoned commander and is given command of the Dara fleet. At the pivotal Battle of Crescent Island, she uses her tactical genius, employing deception and unconventional tactics to break the stalemate and lead the Dara forces to a decisive, though costly, victory against the Lyucu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 24, link: "/books/speaking-bones#chapter-24" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 25, link: "/books/speaking-bones#chapter-25" } },
            ]
        },
    ]
};

export default function AyaMazotiPage() {
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