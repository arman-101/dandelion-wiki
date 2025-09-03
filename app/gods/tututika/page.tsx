'use client';

import PageTemplate, { convertGodData } from '../../components/layout/PageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { GodNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TUTUTIKA ---
const godData: God = {
    name: "Tututika",
    image: "/gods/tututika.png",
    introduction: "Tututika is the patron goddess of Amu. As the youngest of the gods, she governs the domains of agriculture, beauty, and fresh water, and often shows a particular interest in the lives and choices of mortal women.",
    infoBox: {
        Patronage: { text: "Amu", link: "/places/amu" },
        Domains: "Agriculture, Beauty, Fresh Water, Seduction",
        Pawi: "Golden Carp",
    },
    mythology: [
        { type: 'text', content: "Tututika often displays a keen interest in the mortal world, appreciating beauty, art, and nature. The Imperial Capital of Pan was built on the shores of the sacred lake that bears her name." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
    ],
    appearances: [
        {
            event: "Advising Princess Kikomi",
            summary: [
                { type: 'text', content: "Before the Battle of Arulugi, Tututika appears in a vision to a distressed Princess Kikomi. She advises the princess that power is not limited to martial strength, stating that 'a seducer is one who wins through deception rather than force,' encouraging Kikomi to embrace her own unique talents to influence events." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
            ]
        },
        {
            event: "Mentoring Princess Théra",
            summary: [
                { type: 'text', content: "Disguised as a mysterious lady at Lake Tututika, she speaks with a young Princess Théra in metaphors. She uses the ripples in the lake to hint at the scientific principles behind the 'magic mirrors', telling Théra that 'light, in its true nature, shares much with these waves,' setting the princess on the path to her first great scientific discovery." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
            ]
        },
    ]
};


export default function TututikaPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_GODS]);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <GodNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={convertGodData(godData)} infoBoxTitle="Divine Information" />
        </>
    );
}