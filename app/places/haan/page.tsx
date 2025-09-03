'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR HAAN ---
const placeData: Place = {
    name: "Haan",
    image: "/places/haan.png",
    introduction: "Haan is one of the six Tiro states, renowned for its long history of scholarship, invention, and philosophy. It is the homeland of the brilliant strategist Luan Zya and becomes a center for scientific research under the Dandelion Dynasty.",
    infoBox: {
        type: "Kingdom (Tiro State)",
        continent: "Dara",
        capital: { text: "Ginpen", link: "/places/ginpen" },
        PatronGod: { text: "Lutho", link: "/gods/lutho" },
        KeyExports: "Knowledge, Technology, Inventions"
    },
    geography: [
        { type: 'text', content: "Located on the Big Island, Haan is a state whose identity is defined more by its intellectual contributions than its geography. Its capital, Ginpen, is a hub of learning and innovation." },
    ],
    culture: [
        { type: 'text', content: "Haan is the intellectual heart of Dara. Its culture prizes knowledge, philosophy, and invention. Its people are known for their patient, scholarly nature. The patron god of Haan is Lutho, the god of knowledge, mathematics, and strategy, perfectly reflecting the values of the kingdom." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
    ],
    history: [
        {
            event: "The Xana Conquest",
            summary: [
                { type: 'text', content: "During the Xana conquest, Haan's noble houses of inventors and scholars, including the family of Luan Zya, were systematically massacred. This brutal suppression of Haan's intellectual class was a major grievance that fueled the later rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
            ]
        },
        {
            event: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "Under Emperor Ragin, Haan's cultural importance was restored. The capital, Ginpen, became the setting for a cultural and technological renaissance led by Princess Fara and the Blossom Gang." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 28, link: "/books/the-veiled-throne#chapter-28" } },
                { type: 'text', content: "During the Lyucu War, Haan became a vital center for research. Princess Théra and Zomi Kidosu established a secret laboratory there to study the captured garinafins, leading to the scientific breakthroughs that were critical to Dara's victory." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 53, link: "/books/the-wall-of-storms#chapter-53" } },
            ]
        },
    ]
};

export default function HaanPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_PLACES]);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <PlaceNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={convertPlaceData(placeData)} infoBoxTitle="Location Information" />
        </>
    );
}