'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Cutanrovo Aga",
    image: "/characters/cutanrovo-aga.png",
    introduction: "Cutanrovo Aga is a fanatical and puritanical Lyucu thane and the leader of the hardline faction in occupied Dara. She is a primary antagonist within the Lyucu court, driving a brutal campaign of cultural erasure against the people of Dara.",
    infoBox: {
        aliases: "The Hardliner",
        occupation: "Lyucu Thane",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Female",
        affiliation: "Lyucu Empire (Hardline Faction)",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Cutanrovo is a zealot, driven by a fanatical belief in the superiority of Lyucu culture and the need to purge all foreign influences. She is ruthless, ambitious, and politically savvy, using the purges to consolidate her own power and undermine her rivals, such as Goztan Ryoto and Pékyu Tanvanaki. Her actions represent the most brutal and uncompromising aspects of the Lyucu occupation." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 16, link: "/books/the-veiled-throne#chapter-16" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Cutanrovo leads the puritanical movement in occupied Rui, forcing the captive Prince Timu to participate in the destruction of the Temple of Kiji and its library. She uses the defection of Goztan Ryoto's son, Savo, as a political weapon to attack the accommodationist faction, sentencing the boy and his Dara tutor to death in absentia and stripping Goztan of her power." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 16, link: "/books/the-veiled-throne#chapter-16" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Her reign of terror plunges the Lyucu court into a state of paranoia and madness. Her fanaticism ultimately leads to the collapse of the Lyucu regime from within, as her brutal policies alienate the populace and create deep divisions within the Lyucu leadership, culminating in her downfall." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 39, link: "/books/speaking-bones#chapter-39" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 43, link: "/books/speaking-bones#chapter-43" } },
            ]
        },
    ]
};

export default function CutanrovoAgaPage() {
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