'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Kinri",
    image: "/characters/kinri.png",
    introduction: "Kinri is a young man of mixed Lyucu-Dara heritage, born and raised in the occupied territories. His journey of self-discovery, from a refugee to the truth of his identity as Savo Ryoto—the son of the powerful Lyucu thane Goztan Ryoto and the Dara storyteller Oga Kidosu—places him at the heart of the series' themes of identity, family, and cultural conflict.",
    infoBox: {
        aliases: "Savo Ryoto",
        occupation: "Refugee, Inventor, Spy",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        significantOther: { text: "Princess Fara", link: "/characters/princess-fara" },
        relatives: [
            { text: "Goztan Ryoto (mother)", link: "/characters/goztan-ryoto" },
            { text: "Oga Kidosu (father)", link: "/characters/oga-kidosu" },
            { text: "Zomi Kidosu (sister)", link: "/characters/zomi-kidosu" }
        ],
        affiliation: "The Blossom Gang, Dandelion Court",
        nationality: "Lyucu-Daran",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Kinri is intelligent, resourceful, and haunted by his past. Having witnessed the brutality of the Lyucu purges, he is driven by a deep need for truth and justice. He has a natural talent for engineering and invention, a trait he shares with his newfound sister, Zomi. His love for Princess Fara forces him to confront the deep divisions between his two cultures and to forge a new identity for himself that honors both sides of his heritage." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 19, link: "/books/the-veiled-throne#chapter-19" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As a boy named Savo in occupied Rui, he was tutored by a Dara scholar, Nazu Tei, who taught him to question official histories. After witnessing a massacre and the arrest of his teacher, his mother, Goztan Ryoto, arranged for his escape to Dara as a refugee, giving him the name Kinri." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 23, link: "/books/the-veiled-throne#chapter-23" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 24, link: "/books/the-veiled-throne#chapter-24" } },
                { type: 'text', content: "In Ginpen, he fell in with the Blossom Gang and fell in love with Princess Fara (disguised as 'Dandelion'). He used his inventive talents to help them win the restaurant contest. Their investigation into a corrupt merchant led them to the secret facility, Last Bite, where he discovered his true parentage and his connection to Zomi Kidosu. This revelation caused him to embrace his Lyucu identity, creating a painful rift with Fara and forcing him to become a fugitive." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 21, link: "/books/the-veiled-throne#chapter-21" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "As a fugitive, Kinri traveled to the port city of Dimushi and formed an unlikely alliance with pirates and disgraced nobles. On behalf of Zomi's resistance movement, he led a daring mission to Kriphi to rescue his half-brother, Prince Timu. The mission put him face-to-face with his complicated family history and the brutal politics of the Lyucu court. His journey represents the hope for a future where the two cultures can coexist." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 12, link: "/books/speaking-bones#chapter-12" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 17, link: "/books/speaking-bones#chapter-17" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 21, link: "/books/speaking-bones#chapter-21" } },
            ]
        },
    ]
};

export default function KinriPage() {
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