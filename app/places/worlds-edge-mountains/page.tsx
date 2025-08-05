'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR WORLD'S EDGE MOUNTAINS ---
const placeData: Place = {
    name: "World's Edge Mountains",
    image: "/places/worlds-edge-mountains.png",
    introduction: "The World's Edge Mountains are a massive, formidable mountain range that marks the eastern boundary of the continent of Ukyu-Gondé. They serve as a place of refuge and rebirth for the Agon rebellion after a catastrophic defeat.",
    infoBox: {
        type: "Mountain Range",
        location: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyLandmarks: "Kiri Valley, The Garinafin Boneyard"
    },
    geography: [
        { type: 'text', content: "A vast and rugged mountain range, difficult to traverse and largely unexplored. Its hidden valleys and remote peaks provide a natural sanctuary for those fleeing persecution." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 17, link: "/books/the-veiled-throne#chapter-17" } },
    ],
    culture: [
        { type: 'text', content: "The mountains are a place of deep spiritual significance for the Agon. They contain sacred sites like the garinafin boneyard and ancient places of wisdom like the Temple of Still and Flowing Waters. It is in these mountains that the rebellion rediscovers its own history and forges a new future." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 29, link: "/books/speaking-bones#chapter-29" } },
    ],
    history: [
        {
            event: "Refuge and Rediscovery",
            summary: [
                { type: 'text', content: "After the destruction of their base in Kiri Valley, Princess Théra and the other survivors fled into the World's Edge Mountains. Consumed by grief, Théra's journey through the mountains was both a physical and a psychological one." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 45, link: "/books/the-veiled-throne#chapter-45" } },
                { type: 'text', content: "It was here that the rebellion had its most important breakthrough. Guided by the shaman Sataari, they discovered a vast, ancient boneyard of garinafins. The bones found there, combined with the knowledge from a remote monastery, allowed them to create 'living bone' technology and the powerful 'cloud-garinafins,' giving them a devastating new weapon and turning the tide of their war against the Lyucu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 29, link: "/books/speaking-bones#chapter-29" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 31, link: "/books/speaking-bones#chapter-31" } },
            ]
        },
    ]
};

export default function WorldsEdgeMountainsPage() {
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