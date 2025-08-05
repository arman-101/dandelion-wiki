'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "King Jizu",
    image: "/characters/king-jizu.png",
    introduction: "King Jizu was a former fisherman who was reluctantly elevated to the throne of Rima during the Dandelion Rebellion. His noble self-sacrifice in the face of certain defeat became a powerful symbol of resistance for the rebel cause.",
    infoBox: {
        aliases: "The Fisherman King",
        occupation: "Fisherman, King of Rima",
        placeOfBirth: { text: "Rima", link: "/places/rima" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Kingdom of Rima, Tiro Alliance",
        nationality: { text: "Rima", link: "/places/rima" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Jizu is portrayed as a simple, honorable man who never wanted the crown. He is out of his depth as a king, surrounded by cowardly and treacherous advisors. However, when faced with the ultimate test, he displays immense courage and a deep commitment to the honor of his people and his title." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/the-grace-of-kings#chapter-15" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "During the rebellion, Jizu was made King of Rima. When the Xana general Tanno Namen launched a swift and brutal campaign through his kingdom, Jizu's commanders proved treacherous and his ministers offered only cowardly advice. With his capital besieged, Jizu chose a noble death over surrender. He walked out to meet General Namen, set himself on fire, and burned to death while holding the Seal of Rima. His martyrdom became a powerful rallying cry for the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/the-grace-of-kings#chapter-15" } },
            ]
        },
    ]
};

export default function KingJizuPage() {
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