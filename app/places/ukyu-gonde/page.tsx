'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR UKYU & GONDÉ ---
const placeData: Place = {
    name: "Ukyu & Gondé",
    image: "/places/ukyu-gonde.png",
    introduction: "Ukyu & Gondé is the vast, harsh continent across the eastern sea from Dara, separated by the impassable Wall of Storms. It is the homeland of the nomadic, garinafin-riding Lyucu people and their ancient rivals, the Agon.",
    infoBox: {
        type: "Continent",
        KeyPeoples: [
            { text: "Lyucu", link: "/concepts/lyucu" },
            { text: "Agon", link: "/concepts/agon" }
        ],
        KeyLandmarks: [
            { text: "Lurodia Tanta", link: "/places/lurodia-tanta" },
            { text: "World's Edge Mountains", link: "/places/worlds-edge-mountains" },
            { text: "Sea of Tears", link: "/places/sea-of-tears" }
        ]
    },
    geography: [
        { type: 'text', content: "The continent is primarily composed of vast, harsh scrublands and deserts, such as the Lurodia Tanta. This unforgiving environment forged its inhabitants into hardy, nomadic peoples. It is a land of massive scale, with geographical features like the World's Edge Mountains and the Sea of Tears." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 48, link: "/books/the-wall-of-storms#chapter-48" } },
    ],
    culture: [
        { type: 'text', content: "The dominant cultures are the Lyucu and the Agon, two peoples shaped by their symbiotic and often brutal relationship with the flying war beasts, the garinafins. Their societies are nomadic, martial, and organized into clans, valuing strength and survival above all else. It is a land of deep history, with ancient, forgotten civilizations evidenced by the massive geoglyphs in the salt flats." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 48, link: "/books/the-wall-of-storms#chapter-48" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 43, link: "/books/the-veiled-throne#chapter-43" } },
    ],
    history: [
        {
            event: "The Lost Expedition",
            summary: [
                { type: 'text', content: "Ukyu & Gondé was the destination of Emperor Mapidéré's lost expedition. The Dara fleet, after surviving the Wall of Storms, was not destroyed by plague as the Lyucu later claimed, but was systematically tricked, disarmed, and enslaved by the cunning Pékyu Tenryo. For years, the Lyucu learned Dara's technology and tactics from their captives before slaughtering them." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
            ]
        },
        {
            event: "The Dara Rebellion",
            summary: [
                { type: 'text', content: "After the Lyucu invasion of Dara, Ukyu & Gondé became the target of a counter-invasion led by Princess Théra and Takval Aragoz. They forged an alliance with the exiled Agon tribes and waged a long guerrilla war against the Lyucu empire from within its own borders, creating a critical second front that was instrumental in the ultimate defeat of the Lyucu." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
            ]
        },
    ]
};

export default function UkyuGondePage() {
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