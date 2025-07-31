'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR DASU & RUI ---
const placeData: Place = {
    name: "Dasu & Rui",
    image: "/places/dasu-rui.png",
    introduction: "Dasu and Rui are the twin home islands of the state of Xana. Rui, dominated by the volcano Mount Kiji, is the heart of Xana's military and technological power, while Dasu is its political and civilian center.",
    infoBox: {
        Region: "Xana, Northwestern Dara",
        Capital: "Daye (Dasu)",
        PatronGod: { text: "Kiji", link: "/gods/kiji" },
        NotableFeatures: "Mount Kiji, Imperial Air Base, Grand Tunnels",
    },
    geography: [
        { type: 'text', content: "Rui is a mountainous, volcanic island. Its most significant feature is Mount Kiji, a snow-peaked volcano whose crater lake, Lake Dako, is the sole source of the invaluable lift gas used in Imperial airships." },
    ],
    culture: [
        { type: 'text', content: "The culture of the home islands is highly disciplined and militaristic, a necessity for the conquest and administration of the empire. The people of Dasu, particularly, were known for their stoicism and adherence to order." },
    ],
    history: [
        {
            event: "The Seat of Empire",
            summary: [
                { type: 'text', content: "For decades, Dasu and Rui served as the political and military heart of the Xana Empire. From here, Emperor Mapidéré ruled, and commanders like Kindo Marana organized their campaigns." },
            ]
        },
    ]
};

export default function DasuRuiPage() {
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