'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR KIRI VALLEY ---
const placeData: Place = {
    name: "Kiri Valley",
    image: "/places/kiri-valley.png",
    introduction: "Kiri Valley is a secret, hidden valley within the World's Edge Mountains of Ukyu-Gondé. It served as the main hidden base for the Agon rebellion, a place of community and preparation, before its tragic destruction.",
    infoBox: {
        type: "Hidden Valley / Rebel Base",
        location: { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
        continent: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyEvents: "Destruction of the Agon Base"
    },
    geography: [
        { type: 'text', content: "A fertile and well-hidden valley, its remote location in the massive World's Edge mountain range made it an ideal location for a secret military base, shielded from Lyucu patrols." },
    ],
    culture: [
        { type: 'text', content: "For several years, Kiri Valley was the heart of the growing rebellion. It was a place where Dara technology and Agon tradition began to merge. It was here that Théra and Takval raised their sons, Tanto and Rokiri, who grew up embracing the Agon craft of building 'living bones'." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 26, link: "/books/the-veiled-throne#chapter-26" } },
    ],
    history: [
        {
            event: "Destruction of the Rebellion's Heart",
            summary: [
                { type: 'text', content: "The peace of Kiri Valley was shattered when the Lyucu commander Cudyu Roatan launched a devastating surprise attack. The base was completely destroyed in the assault. The battle resulted in the heroic deaths of key rebel leaders, including Souliyan Aragoz, Toof, and Radia, and culminated in the capture of Théra and Takval's two sons. The fall of Kiri Valley was a catastrophic blow to the Agon rebellion, forcing the survivors into a desperate flight into the mountains." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
            ]
        },
    ]
};

export default function KiriValleyPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_PLACES]);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}