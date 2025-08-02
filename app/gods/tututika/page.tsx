'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TUTUTIKA ---
const godData: God = {
    name: "Tututika",
    image: "/gods/tututika.png",
    introduction: "Tututika is the patron goddess of Amu. As the youngest of the gods, she governs the domains of agriculture, beauty, and fresh water.",
    infoBox: {
        Patronage: { text: "Amu", link: "/places/amu" },
        Domains: "Agriculture, Beauty, Fresh Water",
        Pawi: "Golden Carp",
    },
    mythology: [
        { type: 'text', content: "Tututika is one of the eight children of the mother goddess Daraméa and the World Father, Thasoluo. She often displays a keen interest in the mortal world, appreciating beauty and the simple pleasures of life." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
        { type: 'text', content: " In the ancient contest to decide the Calendrical Dozen, she was drawn out of hiding by the music of coconuts and the beautiful dance of the golden carp at the mouth of the Sonaru River." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "Advising Princess Kikomi",
            summary: [
                { type: 'text', content: "Before the Battle of Arulugi, Tututika appears to a distressed Princess Kikomi. She advises the princess that power is not limited to martial strength, stating that 'a seducer is one who wins through deception rather than force,' encouraging Kikomi to use her own unique talents to influence events." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/the-grace-of-kings#chapter-24" } },
            ]
        },
        {
            event: "Discussing the Future with Lutho",
            summary: [
                { type: 'text', content: "In a quiet moment in Lutho's garden, Tututika discusses the fate of Luan Zya and the brewing storm of the Lyucu invasion. She shows her compassion and concern for the mortals, representing a more empathetic perspective among the often-detached gods." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
            ]
        },
    ]
};


export default function TututikaPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_GODS);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <TopPageNavigation
                prevPage={prevPage}
                nextPage={nextPage}
                returnLink={returnLink}
            />
            <GodPageTemplate godData={godData} />
        </>
    );
}