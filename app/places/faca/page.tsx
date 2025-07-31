'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR FAÇA ---
const placeData: Place = {
    name: "Faça",
    image: "/places/faca.png",
    introduction: "Faça is a craggy, northern Tiro state located on the Big Island. It is known for its foggy highlands, hardy people, rich wool production, and a unique tradition of street magic based on the 'silkmotic force.' Its patron god is Rufizo, the Divine Healer.",
    infoBox: {
        Region: "Northern Dara",
        Capital: "Boama",
        PatronGod: { text: "Rufizo", link: "/gods/rufizo" },
        NotableCharacters: [
            { text: "King Shilué", link: "/characters/king-shilue" },
        ],
    },
    geography: [
        { type: 'text', content: "Faça occupies the northern half of the Big Island, characterized by rocky highlands that are often shrouded in fog." },
    ],
    culture: [
        { type: 'text', content: "The people of Faça are known to be hardy and resilient, shaped by their challenging environment. The state is a major producer of wool." },
    ],
    history: [
        {
            event: "The Marshal's Gambit",
            summary: [
                { type: 'text', content: "During the Chrysanthemum-Dandelion War, King Shilué of Faça attempted to remain neutral and play both sides. When Gin Mazoti marched her army into his territory, he welcomed her, believing he could manipulate the situation to his advantage. Gin saw through his treachery, promptly had him executed, and conquered the state, declaring herself Queen of both Rima and Faça." },
            ]
        },
    ]
};

export default function FacaPage() {
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