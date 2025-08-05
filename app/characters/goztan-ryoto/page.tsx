'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Goztan Ryoto",
    image: "/characters/goztan-ryoto.png",
    introduction: "Goztan Ryoto is a powerful and independent Lyucu thane, the mother of Kinri (Savo Ryoto), and a key political player in both Ukyu-Gondé and occupied Dara. She leads the accommodationist faction of the Lyucu, advocating for a more pragmatic and integrated approach to ruling the conquered territories.",
    infoBox: {
        aliases: "Thane Ryoto",
        occupation: "Lyucu Thane, Political Leader",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Oga Kidosu", link: "/characters/oga-kidosu" },
        relatives: { text: "Kinri (Savo Ryoto) (son)", link: "/characters/kinri" },
        affiliation: "Lyucu Empire (Accommodationist Faction)",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Goztan is a formidable warrior and a shrewd political operator. She is fiercely independent, having broken from Lyucu tradition by claiming her lineage through her father after killing her own mother to reclaim her birthright. She is pragmatic and distrustful of Dara culture, but her experiences and her love for her half-Dara son lead her to oppose the fanatical purges of the hardline faction." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 5, link: "/books/the-veiled-throne#chapter-5" } },
        { type: 'text', content: "She possesses a deep, albeit complicated, sense of honor and is a key figure in the internal power struggles of the Lyucu court." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Flashbacks reveal Goztan's early life: as a young warrior, she was a 'sexual companion' to a Dara captain during Mapidéré's expedition as part of Pékyu Tenryo's plan. She became pregnant and later had a complex relationship with the Dara slave Oga Kidosu, with whom she had a son, Savo (Kinri)." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 3, link: "/books/the-veiled-throne#chapter-3" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 4, link: "/books/the-veiled-throne#chapter-4" } },
                { type: 'text', content: "In occupied Dara, she became the leader of the accommodationist faction, opposing the brutal cultural purges of the hardliner Cutanrovo Aga. When her son Savo's identity was revealed, Cutanrovo used it as a political weapon against her. Goztan was stripped of much of her power but continued to be a powerful voice of moderation within the fracturing Lyucu leadership." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 33, link: "/books/speaking-bones#chapter-33" } },
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
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}