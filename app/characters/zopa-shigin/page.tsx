'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

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
        { type: 'text', content: "Shigin is described as sturdy and is presented as the more grounded and perhaps less imaginative of the two initial rebel leaders. He is a loyal friend to Huno Krima, providing the steady support for Krima's charismatic leadership. His tragic end illustrates the corrupting nature of power and the dangers of unchecked ambition." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Facing execution alongside his friend Huno Krima for a delayed corvée assignment, Shigin helped create the fake 'fish prophecy' that sparked the first major uprising against the Xana." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/the-grace-of-kings#chapter-6" } },
                { type: 'text', content: "He and Krima were successful in their early rebellion, finding the lost heir Thufi and placing him on the throne of Cocru." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
                { type: 'text', content: "However, as Krima's power and paranoia grew, he came to see his old friend as a threat. After declaring himself King of West Cocru, Krima had his loyal friend Zopa Shigin executed, a brutal act that marked the beginning of the end for the first rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 16, link: "/books/the-grace-of-kings#chapter-16" } },
            ]
        },
    ]
};

export default function ZopaShiginPage() {
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