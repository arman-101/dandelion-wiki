'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Kindo Marana",
    image: "/characters/kindo-marana.png",
    introduction: "Kindo Marana was the Minister of Finance for the Xana Empire who was unexpectedly appointed Commander-in-Chief of the Imperial Army during the Dandelion Rebellion. Despite his lack of military experience, he proved to be a surprisingly pragmatic and effective commander.",
    infoBox: {
        aliases: "None",
        occupation: "Minister of Finance, Commander-in-Chief",
        status: "Deceased",
        gender: "Male",
        affiliation: "Empire of Dara",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Marana is a meticulous and numbers-oriented bureaucrat. He is not a warrior but approaches military command like an accounting problem, focusing on logistics, resources, and practical solutions rather than glory or honor. This makes him a methodical and often underestimated opponent. While loyal to the empire, his primary motivation is efficiency and order." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 13, link: "/books/the-grace-of-kings#chapter-13" } },
    ],
    history: [
        {
            era: "Appointment as Commander",
            summary: [
                { type: 'text', content: "Annoyed by Marana's constant complaints about the cost of the rebellion, Regent Lügo Crupo mockingly appointed him Commander-in-Chief. To everyone's surprise, Marana took the job seriously, applying his bureaucratic skills to organize the faltering Imperial war effort. He brought the legendary general Tanno Namen out of retirement and successfully rebuilt the Imperial air force." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 10, link: "/books/the-grace-of-kings#chapter-10" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
            ]
        },
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Marana led the Imperial forces against the Tiro rebels, achieving several key victories, including the conquest of Arulugi. He was eventually outmaneuvered and defeated by Mata Zyndu at the Battle of Wolf's Paw." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
                { type: 'text', content: " After being held as a prisoner by Mata, he was eventually put in charge of the Hegemon's navy. He was killed by the double agent Dafiro Miro during Gin Mazoti's surprise attack on Rui." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
            ]
        },
    ]
};

export default function KindoMaranaPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}