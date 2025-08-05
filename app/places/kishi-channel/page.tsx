'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR KISHI CHANNEL ---
const placeData: Place = {
    name: "Kishi Channel",
    image: "/places/kishi-channel.png",
    introduction: "The Kishi Channel is a notoriously treacherous strait separating the island of Wolf's Paw from the mainland of Gan. It is infamous for a massive, permanent whirlpool that makes naval passage nearly impossible, and was the site of one of the most horrific events of the Dandelion Rebellion.",
    infoBox: {
        type: "Strait / Whirlpool",
        location: { text: "Between Gan and Wolf's Paw", link: "/places/gan" },
        continent: "Dara",
        ControllingDeity: { text: "Tazu", link: "/gods/tazu" }
    },
    geography: [
        { type: 'text', content: "The channel is defined by a massive and deadly whirlpool, a supernatural or extreme natural phenomenon that destroys any ship that enters it. This makes it a formidable naval obstacle, effectively blockading the island of Wolf's Paw from one side." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
    ],
    culture: [
        { type: 'text', content: "The Kishi Channel is a place of dread and superstition among the sailors of Dara. It is seen as the domain of the unpredictable sea god Tazu. The massacre that occurred there has only added to its dark legend, making it a place synonymous with death and sacrifice." },
    ],
    history: [
        {
            event: "The Massacre at Wolf's Paw",
            summary: [
                { type: 'text', content: "After his great victory at the Battle of Wolf's Paw, Mata Zyndu's army was trapped on the island. In a moment of cold-blooded desperation, and tempted by the goddess Kana, Mata made a pact with the sea god Tazu. He marched 20,000 surrendered Xana prisoners onto makeshift ships and sent them directly into the Kishi Channel's whirlpool as a human sacrifice. The sea god, pleased with the offering, calmed the waters, allowing Mata's own fleet to pass safely. This monstrous act forever stained Mata's reputation and was a key moment in his descent from honorable warrior to ruthless tyrant." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
            ]
        },
    ]
};

export default function KishiChannelPage() {
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