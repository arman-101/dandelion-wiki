'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const placeData: Place = {
    name: "Taten-ryo-alvovo",
    image: "/places/taten-ryo-alvovo.png",
    introduction: "Taten-ryo-alvovo, the 'City of Ghosts,' is an ancient and sacred Agon ruin. It serves as a refuge for the child survivors of the Kiri Valley massacre and becomes the site where the Agon and Lyucu people rediscover their true, shared history.",
    infoBox: {
        type: "Ancient Ruins / Settlement",
        location: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        Significance: "Rediscovery of Agon/Lyucu history",
        KeyResidents: [
            { text: "Tanto Aragoz", link: "/characters/tanto-aragoz" },
            { text: "Sataari", link: "/characters/sataari" }
        ]
    },
    geography: [
        { type: 'text', content: "An ancient, ruined city containing massive burial mounds, or barrows. These tombs hold the secrets of a forgotten civilization from the mythical 'Fifth Age'." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
    ],
    culture: [
        { type: 'text', content: "The site is sacred and forbidden in Agon lore, believed to be cursed. However, it becomes a place of rebirth and new knowledge. Under Théra's leadership, it is renamed Taten-ryo-runa, the 'Gathering of Life,' a new settlement dedicated to peace, farming, and cooperation between all the peoples of the continent." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 56, link: "/books/speaking-bones#chapter-56" } },
    ],
    history: [
        {
            event: "A New Beginning",
            summary: [
                { type: 'text', content: "The child survivors of the Kiri Valley massacre, led by Sataari and Razutana Pon, found refuge at the ruins. It was here that Tanto Aragoz explored the Great Barrow and discovered ancient farming tools and paintings, revealing that the Agon's nomadic culture was not their original way of life." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 5, link: "/books/speaking-bones#chapter-5" } },
                { type: 'text', content: "Princess Théra and her followers later made the city their home. Using 'speaking bones' technology, they deciphered the voices of their ancestors from the barrows, learning their true history and broadcasting it across the land as a message of peace and unity." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 51, link: "/books/speaking-bones#chapter-51" } },
            ]
        },
    ]
};

export default function TatenRyoAlvovoPage() {
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