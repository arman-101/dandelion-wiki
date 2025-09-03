import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

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
                { type: 'text', content: "King Jizu's short reign and heroic death became a potent symbol of noble sacrifice for the rebellion." }
            ]
        },
        {
            era: "The Fisherman King's Martyrdom",
            summary: [
                { type: 'text', content: "When the Xana general Tanno Namen launched a swift and brutal campaign through Rima, Jizu's commanders proved treacherous and his ministers offered only cowardly advice. With his capital besieged, Jizu chose an honorable death over a dishonorable life. He walked out alone to meet Namen's army and, after securing a promise that his people would be spared, set himself ablaze. His martyrdom became a powerful rallying cry for the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/the-grace-of-kings#chapter-15" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function KingJizuPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}