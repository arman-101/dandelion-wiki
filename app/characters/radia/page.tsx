'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Radia",
    image: "/characters/radia.png",
    introduction: "Radia was a Lyucu warrior and the companion of the pilot Toof. Captured alongside him by Théra's expedition, she defected to the Agon resistance and heroically sacrificed her life for their cause.",
    infoBox: {
        aliases: "The Defector",
        occupation: "Warrior",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Female",
        significantOther: { text: "Toof", link: "/characters/toof" },
        affiliation: "Lyucu Empire, Agon Rebellion",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Radia is a capable Lyucu warrior, loyal to her partner Toof. Like him, her experiences as a captive among the Dara and Agon lead her to reconsider her loyalties. She is courageous and ultimately chooses to give her life to protect the rebellion's future." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Radia was captured along with Toof after their city-ship was crippled by Théra's forces. After the Lyucu attack on Kiri Valley, she and Toof staged a fake betrayal, 'capturing' Théra's children to help them escape." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 31, link: "/books/the-veiled-throne#chapter-31" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "In the Lyucu capital of Taten, Radia and Toof freed the captive juvenile garinafins, sparking the uprising that led to Pékyu Cudyu's death. In the ensuing chaos, Radia led a suicide mission, piloting a garinafin to destroy the Lyucu invasion fleet's city-ships. She succeeded in sinking all but one before perishing in the attack." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 16, link: "/books/speaking-bones#chapter-16" } },
            ]
        },
    ]
};

export default function RadiaPage() {
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