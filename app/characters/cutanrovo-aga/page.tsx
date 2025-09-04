'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
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
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Cutanrovo led a brutal puritanical movement in occupied Rui, forcing the captive Prince Timu to participate in the destruction of Dara's cultural artifacts. She used the existence of Goztan Ryoto's half-Dara son, Savo, as a political weapon to attack the accommodationist faction, cementing the hardliners' control over the Lyucu court." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 25, link: "/books/the-veiled-throne#chapter-25" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 30, link: "/books/the-veiled-throne#chapter-30" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "As the Lyucu occupation began to collapse due to the withdrawal from an addictive substance, Cutanrovo's rule became even more brutal. In a final bid for power, she launched a coup, murdering Pékyu Tanvanaki. However, she was immediately betrayed and killed by her own co-conspirator, the traitor Noda Mi." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 39, link: "/books/speaking-bones#chapter-39" } },
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
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}