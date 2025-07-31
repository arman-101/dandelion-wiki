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
    introduction: "The Kishi Channel is a notoriously treacherous strait separating the island of Wolf's Paw from the mainland's Itanti Peninsula. It is home to a massive, permanent whirlpool that makes naval passage nearly impossible.",
    infoBox: {
        Region: "Between Gan and the Big Island",
        Type: "Strait / Whirlpool",
        PatronGod: { text: "Tazu", link: "/gods/tazu" },
    },
    geography: [
        { type: 'text', content: "The channel is defined by its powerful and deadly whirlpool, a permanent fixture of the seascape believed to be a manifestation of the chaotic god Tazu." },
    ],
    culture: [
        { type: 'text', content: "The Kishi Channel is a place of legend and fear among sailors. It is seen as the domain of Tazu, a place where the god's chaotic nature is on full display." },
    ],
    history: [
        {
            event: "The Slaughter at Wolf's Paw",
            summary: [
                { type: 'text', content: "The Kishi Channel became the site of one of the most horrific events of the Chrysanthemum-Dandelion War. Trapped on Wolf's Paw by a naval blockade, Mata Zyndu made a pact with Tazu. He sacrificed 20,000 surrendered Imperial soldiers by sending them into the whirlpool on flimsy barges. In exchange, Tazu temporarily calmed the waters, allowing Mata's army to escape to the mainland." },
            ]
        },
    ]
};

export default function KishiChannelPage() {
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