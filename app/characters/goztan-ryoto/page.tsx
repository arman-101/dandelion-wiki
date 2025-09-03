'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Goztan Ryoto",
    image: "/characters/goztan-ryoto.png",
    introduction: "Goztan Ryoto is a powerful and independent Lyucu thane, the mother of Kinri (Savo Ryoto), and a key political player in both Ukyu-Gondé and occupied Dara. She leads the accommodationist faction of the Lyucu, advocating for a more pragmatic and integrated approach to ruling the conquered territories.",
    infoBox: {
        aliases: "Thane Ryoto",
        occupation: "Lyucu Thane, Political Leader, Admiral",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Oga Kidosu", link: "/characters/oga-kidosu" },
        relatives: { text: "Kinri (Savo Ryoto) (son)", link: "/characters/kinri" },
        affiliation: "Lyucu Empire (Accommodationist Faction)",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Goztan is a formidable warrior and a shrewd political operator. She is fiercely independent, having broken from Lyucu tradition by claiming her lineage through her father after killing her own mother to reclaim her birthright. She is pragmatic and distrustful of Dara culture, but her experiences and her love for her half-Dara son lead her to oppose the fanatical purges of the hardline faction." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 5, link: "/books/the-veiled-throne#chapter-5" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Flashbacks reveal Goztan's early life, where she was a 'companion' to a Dara captain during Mapidéré's expedition and later had a son, Savo (Kinri), with the Dara slave Oga Kidosu. In occupied Dara, she became the leader of the accommodationist faction, opposing the brutal purges of the hardliner Cutanrovo Aga. After Cutanrovo exposed her son, Goztan was stripped of power but arranged for his escape." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 3, link: "/books/the-veiled-throne#chapter-3" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Goztan commanded the Lyucu fleet against Emperor Phyro at the Battle of Crescent Island, where she was honorably defeated and surrendered." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 26, link: "/books/speaking-bones#chapter-26" } },
                { type: 'text', content: "After the collapse of the Lyucu regime, she executed the traitor Noda Mi and, alongside Princess Dyana, took command of the Lyucu survivors. She then led the delegation to Pan to negotiate the final surrender with the Dandelion Court, helping to forge a future for her people in a world they had failed to conquer." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 43, link: "/books/speaking-bones#chapter-43" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 47, link: "/books/speaking-bones#chapter-47" } },
            ]
        },
    ]
};

export default function GoztanRyotoPage() {
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