'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Razutana Pon",
    image: "/characters/razutana-pon.png",
    introduction: "Razutana Pon is a Dara scholar of the Cultivationism school and a member of Princess Théra's expedition. She is one of the adult guardians who survives the Kiri Valley massacre and protects the children in the wilderness.",
    infoBox: {
        aliases: "The Scholar",
        occupation: "Scholar",
        placeOfBirth: { text: "Dara", link: "/places/dara" },
        status: "Alive",
        gender: "Female",
        affiliation: "Dara Expeditionary Force, Agon Rebellion",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Razutana is a dedicated scholar, though her clumsiness sometimes causes problems, such as accidentally setting off an explosion during the boarding of the Lyucu city-ship. She is courageous and resilient, surviving the destruction of the Agon base and taking on the responsibility of caring for the surviving children in a harsh, unforgiving environment." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 9, link: "/books/the-veiled-throne#chapter-9" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "A scholar on Théra's expedition, Razutana's practical knowledge is tested in the extreme. After the Lyucu attack on Kiri Valley, she and the Agon shaman Sataari become the sole adult guardians for a small band of children, including the sons of Théra. They lead the children through the desolate salt flats, a grueling journey of survival that tests their endurance to the limit." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
            ]
        },
    ]
};

export default function RazutanaPonPage() {
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