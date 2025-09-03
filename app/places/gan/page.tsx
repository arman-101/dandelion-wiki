'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR GAN ---
const placeData: Place = {
    name: "Gan",
    image: "/places/gan.png",
    introduction: "Gan is one of the six Tiro states, known as the wealthiest realm in Dara. It is a land of merchants and commerce, whose political actions are often driven by economic self-interest.",
    infoBox: {
        type: "Kingdom (Tiro State)",
        continent: "Dara",
        Ruler: "King Mocri (Rebellion)",
        PatronGod: { text: "Tazu", link: "/gods/tazu" },
        KeyExports: "Luxury Goods, Trade"
    },
    geography: [
        { type: 'text', content: "Gan's location and resources have made it the commercial hub of the Six States. Its wealth gives it significant political influence, though its military is not always the most reliable." },
    ],
    culture: [
        { type: 'text', content: "The culture of Gan is dominated by commerce and wealth. Its patron god is Tazu, the unpredictable god of chance and the sea, a fitting deity for a nation built on the risky ventures of trade. During the Dandelion Dynasty, Gan becomes the center of a rising merchant class that challenges the empire's traditionalist policies." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 13, link: "/books/the-wall-of-storms#chapter-13" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "In a stunning act of betrayal, the forces of Gan, along with those of Faça, abandoned their allies in the middle of the Battle of Wolf's Paw. Despite their treachery, Mata Zyndu's sheer prowess managed to secure a victory for the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
            ]
        },
        {
            event: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "In the era of peace, a scholar from a wealthy merchant family in Gan challenged Empress Jia's high taxes on trade during the Palace Examination. This public debate exposed a major ideological rift in the court between the agrarian traditionalists and the rising merchant class centered in Gan." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 13, link: "/books/the-wall-of-storms#chapter-13" } },
            ]
        },
    ]
};

export default function GanPage() {
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