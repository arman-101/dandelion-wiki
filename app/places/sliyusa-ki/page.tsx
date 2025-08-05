'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR SLIYUSA KI ---
const placeData: Place = {
    name: "Sliyusa Ki",
    image: "/places/sliyusa-ki.png",
    introduction: "Sliyusa Ki is a major oasis in the vast Lurodia Tanta desert. It is the home of Takval Aragoz's tribe and becomes the first base of operations and political center for the Agon resistance against the Lyucu.",
    infoBox: {
        type: "Oasis Settlement",
        location: { text: "Lurodia Tanta", link: "/places/lurodia-tanta" },
        continent: { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" },
        KeyResidents: [
            { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
            { text: "Volyu Aragoz", link: "/characters/volyu-aragoz" },
            { text: "Souliyan Aragoz", link: "/characters/souliyan-aragoz" }
        ]
    },
    geography: [
        { type: 'text', content: "As an oasis, Sliyusa Ki is a rare point of life and water in the endless desert, making it a natural center for the exiled Agon people to gather." },
    ],
    culture: [
        { type: 'text', content: "The oasis is the heart of the exiled Agon culture. It is a place of deep-seated traditions, warrior pride, and complex clan politics. It is here that Théra must prove her worth and forge a true alliance with a proud and skeptical people." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
    ],
    history: [
        {
            event: "The Forging of an Alliance",
            summary: [
                { type: 'text', content: "Sliyusa Ki is where Théra's expedition makes first contact with the exiled Agon. The welcome is hostile, led by the treacherous chieftain Volyu Aragoz. Théra, through a powerful display of rhetoric and courage, wins over the other chieftains and, with the help of Takval's mother Souliyan, deposes Volyu. The oasis then becomes the first capital of the unified Agon rebellion, where the political and personal alliance between Théra and Takval is consummated." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 14, link: "/books/the-veiled-throne#chapter-14" } },
            ]
        },
    ]
};

export default function SliyusaKiPage() {
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