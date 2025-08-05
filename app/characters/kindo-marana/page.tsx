'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Kindo Marana",
    image: "/characters/kindo-marana.png",
    introduction: "Kindo Marana was the unassuming chief tax collector for the Xana Empire who, despite having no military experience, was appointed Commander-in-Chief by Lügo Crupo. He proved to be a surprisingly competent and meticulous commander, approaching war with the methodical efficiency of a bureaucrat.",
    infoBox: {
        aliases: "The Tax Collector",
        occupation: "Minister of Finance, Commander-in-Chief",
        placeOfBirth: { text: "Xana", link: "/places/xana" },
        status: "Deceased",
        gender: "Male",
        affiliation: "Xana Empire, Hegemon's Court",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Marana is presented as a career bureaucrat, meticulous and detail-oriented. He is not a warrior by nature but applies the principles of accounting and administration to the art of war with surprising success. He is pragmatic and logical, seeing the empire's problems as a complex audit that requires careful management of assets and liabilities." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 13, link: "/books/the-grace-of-kings#chapter-13" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Appointed Commander-in-Chief by a dismissive Lügo Crupo, Marana methodically took inventory of the empire's weakened forces and developed a pragmatic plan to turn prisoners and laborers into soldiers." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 13, link: "/books/the-grace-of-kings#chapter-13" } },
                { type: 'text', content: "He traveled to the Xana home island of Rui to rebuild the Imperial air force, ruthlessly executing the corrupt base administrators and restoring the fleet to its former glory. He also proved a clever naval tactician, defeating the Amu navy at the Battle of Arulugi using hidden boats and nets." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
                { type: 'text', content: "Marana was ultimately captured by Mata Zyndu's forces at the Battle of Wolf's Paw. After the war, he served Mata as a commander before being killed by the double-agent Dafiro Miro during Gin Mazoti's surprise attack on Rui." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
    ]
};

export default function KindoMaranaPage() {
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