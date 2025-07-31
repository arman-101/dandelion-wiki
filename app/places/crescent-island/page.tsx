'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR CRESCENT ISLAND ---
const placeData: Place = {
    name: "Crescent Island",
    image: "/places/crescent-island.png",
    introduction: "Crescent Island is a large, sparsely populated island in the northwest of Dara, known for its untamed wilderness. It served as a royal hunting preserve for the Xana emperors and later as a place of learning for Luan Zya and Zomi Kidosu.",
    infoBox: {
        Region: "Northwestern Dara",
        NotableFeatures: "Unsettled wilderness, royal hunting preserve",
    },
    geography: [
        { type: 'text', content: "A large, crescent-shaped island, it is located north of the Big Island. The landscape is wild and untamed, covered in dense forests and mountains. It is home to a small, isolated hamlet of people who live a traditional, simple life, largely untouched by the politics of the mainland." },
    ],
    culture: [
        { type: 'text', content: "The island does not have a distinct widespread culture due to its lack of settlement. The small communities that exist there live in a manner close to nature, preserving ancient customs." },
    ],
    history: [
        {
            event: "Luan Zya's Tutelage of Zomi Kidosu",
            summary: [
                { type: 'text', content: "Five years before the first Grand Examination of the Dandelion Dynasty, Luan Zya took his student, Zomi Kidosu, to Crescent Island as part of her education. Here, he taught her philosophy and engineering through practical lessons, including flying a hot-air balloon and interacting with the local hamlet." },
            ]
        },
    ]
};

export default function CrescentIslandPage() {
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