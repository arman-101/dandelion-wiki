'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Tipo Tho",
    image: "/characters/tipo-tho.png",
    introduction: "Tipo Tho is a Dara marine commander and a key military leader in Princess Théra's expedition to Ukyu-Gondé. He is a brave and capable officer, essential to the success of the rebellion's military operations.",
    infoBox: {
        aliases: "Commander Tho",
        occupation: "Marine Commander",
        placeOfBirth: "Dara",
        status: "Alive",
        gender: "Male",
        affiliation: "Dara Expeditionary Force, Agon Rebellion",
        nationality: "Dara",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Tipo is a professional and highly competent military officer. He is courageous, disciplined, and fiercely loyal to Princess Théra. He represents the best of the Dara military, adapting to the unfamiliar challenges of a new continent and a new kind of warfare." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 9, link: "/books/the-veiled-throne#chapter-9" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As a commander in Théra's expeditionary force, Tipo Tho led the daring boarding party that infiltrated the Lyucu city-ship. He and his marines drilled through the hull from the submerged flagship *Dissolver of Sorrows*, planting explosive charges and fighting a running battle through the ship's interior. His leadership was crucial to the success of this high-risk operation, which resulted in the capture of the enemy vessel." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 9, link: "/books/the-veiled-throne#chapter-9" } },
            ]
        },
    ]
};

export default function TipoThoPage() {
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