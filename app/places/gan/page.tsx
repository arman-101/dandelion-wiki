'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR GAN ---
const placeData: Place = {
    name: "Gan",
    image: "/places/gan.png",
    introduction: "Gan is a wealthy and sophisticated Tiro state in southern Dara, comprised of the island of Wolf's Paw and, historically, the rich mainland territory of Géjira. It is a major naval and economic power, and its patron god is Tazu, the chaotic master of the seas.",
    infoBox: {
        Region: "Southern Dara",
        Capital: "Toaza",
        PatronGod: { text: "Tazu", link: "/gods/tazu" },
        NotableCharacters: [
            { text: "King Mocri", link: "/characters/king-mocri" },
        ],
    },
    geography: [
        { type: 'text', content: "The state of Gan primarily occupies the large southern island of Wolf's Paw. It is separated from the mainland's Itanti Peninsula by the treacherous Kishi Channel, which is home to a deadly whirlpool." },
    ],
    culture: [
        { type: 'text', content: "Gan's culture is defined by its wealth, sophistication, and maritime focus. As a major trading state, its people are cosmopolitan and its merchants are influential across Dara." },
    ],
    history: [
        {
            event: "The Hegemony and Dandelion Dynasty",
            summary: [
                { type: 'text', content: "As punishment for their betrayal, Hegemon Mata Zyndu stripped Gan of its rich mainland territory of Géjira, which was later granted to Marshal Gin Mazoti." },
            ]
        },
    ]
};

export default function GanPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation
                prevPage={prevPage}
                nextPage={nextPage}
                returnLink={returnLink}
            />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}