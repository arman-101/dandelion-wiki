'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR GINPEN ---
const placeData: Place = {
    name: "Ginpen",
    image: "/places/ginpen.png",
    introduction: "Ginpen is the capital city of the learned kingdom of Haan. It is the birthplace of Luan Zya and later becomes the stage for a grassroots cultural and technological movement led by Princess Fara and the Blossom Gang.",
    infoBox: {
        type: "Capital City",
        state: { text: "Haan", link: "/places/haan" },
        continent: { text: "Dara", link: "/places/dara" },
        KeyResidents: [
            { text: "Luan Zya", link: "/characters/luan-zya" },
            { text: "Princess Fara", link: "/characters/princess-fara" },
            { text: "The Blossom Gang", link: "/concepts/the-blossom-gang" }
        ]
    },
    geography: [
        { type: 'text', content: "Ginpen is a major city in Haan, known for its centers of learning and culture." },
    ],
    culture: [
        { type: 'text', content: "The city is the intellectual heart of Dara, a place of scholarship and invention. During the Dandelion Dynasty, it becomes a hub of 'silkpunk' innovation, where artists and engineers like the Blossom Gang create marvels like self-driving carts and immersive theatrical rides. It is a city that values creativity and storytelling as much as wealth and power." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 21, link: "/books/the-veiled-throne#chapter-21" } },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 22, link: "/books/the-veiled-throne#chapter-22" } },
    ],
    history: [
        {
            event: "The Xana Conquest",
            summary: [
                { type: 'text', content: "During the conquest, the noble families of inventors in Ginpen, including Luan Zya's clan, were massacred by the Xana forces, a brutal act intended to break the spirit of the learned kingdom." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
            ]
        },
        {
            event: "The Reign of Season of Storms",
            summary: [
                { type: 'text', content: "Years into the Dandelion Dynasty's reign, Ginpen becomes the setting for a vibrant cultural conflict centered around a restaurant rivalry. Princess Fara, in disguise as 'Dandelion,' allies with the Blossom Gang. Their contest against the ruthless merchant Tiphan Huto showcases an explosion of creativity, from innovative cooking to programmable carts and elaborate theatrical entertainments. This renaissance from the common folk stands in contrast to the high politics of Pan and becomes a new source of strength and innovation for the empire." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 46, link: "/books/the-veiled-throne#chapter-46" } },
            ]
        },
    ]
};

export default function GinpenPage() {
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