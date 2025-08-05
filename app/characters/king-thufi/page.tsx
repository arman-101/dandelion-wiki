'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "King Thufi",
    image: "/characters/king-thufi.png",
    introduction: "King Thufi was a humble shepherd and the lost heir to the throne of Cocru. Discovered by the rebels Huno Krima and Zopa Shigin, he was installed as King of Cocru and later declared himself Princeps, the supreme commander of the allied Tiro states, during the Dandelion Rebellion.",
    infoBox: {
        aliases: "The Shepherd King, Princeps",
        occupation: "Shepherd, King of Cocru, Princeps",
        placeOfBirth: { text: "Cocru", link: "/places/cocru" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Tiro Alliance",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Thufi is portrayed as a simple and honorable man, initially overwhelmed by the burdens of kingship. He is not a natural warrior or politician, but he possesses a core of decency and a genuine desire to do what is right for his people. He is a reluctant leader who rises to the occasion when his people need him most." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "A simple shepherd, Thufi was found by Huno Krima and Zopa Shigin and revealed to be the last heir of the Cocru royal line. He was crowned King of Cocru in the old capital of Çaruza, becoming a powerful symbol for the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/the-grace-of-kings#chapter-12" } },
                { type: 'text', content: "Frustrated by the infighting among the restored Tiro kings, and backed by the military might of Mata Zyndu, Thufi decisively ended the bickering at the Grand Council of War by declaring himself Princeps, the supreme commander of the allied forces." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/the-grace-of-kings#chapter-26" } },
                { type: 'text', content: "It was Thufi who made the 'Princeps's Promise': the public declaration that whoever captured the Imperial capital of Pan would be granted kingship over the rich territory of Géfica. This promise set Kuni Garu on his path to glory but also became a major point of contention between Kuni and Mata, ultimately leading to the civil war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/the-grace-of-kings#chapter-26" } },
            ]
        },
    ]
};

export default function KingThufiPage() {
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