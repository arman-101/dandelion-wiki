import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Zopa Shigin",
    image: "/characters/zopa-shigin.png",
    introduction: "Zopa Shigin was a sturdy corvée laborer from Cocru and the co-conspirator of Huno Krima. He was an instrumental figure in the very beginning of the rebellion against the Xana Empire, though his life was tragically cut short by his friend's growing paranoia.",
    infoBox: {
        aliases: "The Co-Conspirator",
        occupation: "Corvée Laborer, Rebel Leader",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Deceased",
        gender: "Male",
        affiliation: "First Cocru Rebellion",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Shigin is described as powerfully built and is presented as the more grounded of the two initial rebel leaders. He is a loyal friend to Huno Krima, providing steady support for Krima's charismatic leadership. His tragic end illustrates the corrupting nature of power and the dangers of unchecked ambition." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Zopa Shigin was a key figure at the dawn of the rebellion, whose loyalty was tragically repaid with betrayal." }
            ]
        },
        {
            era: "The First Rebel's Right Hand",
            summary: [
                { type: 'text', content: "Facing execution alongside Huno Krima for a delayed corvée assignment, Shigin helped create the fake 'fish prophecy' that sparked the first major uprising against the Xana." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
                { type: 'text', content: "He and Krima were successful in their early rebellion, finding the lost heir Thufi and placing him on the throne of Cocru." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
                { type: 'text', content: "However, as Krima's power and paranoia grew, he came to see his old friend as a threat. After declaring himself King of West Cocru, Krima had Zopa Shigin secretly murdered, a brutal act that marked the beginning of his own downfall." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 16, link: "/books/the-grace-of-kings#chapter-16" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function ZopaShiginPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}