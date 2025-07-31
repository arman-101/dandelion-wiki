'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TAN ADÜ (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Tan Adü",
    image: "/places/tan-adu.png",
    introduction: "Tan Adü is a remote southern island, considered 'savage' by the people of the Tiro states. It is the home of a people who live in close harmony with nature and are famed for their unique skill as cruben-riders.",
    infoBox: {
        Region: "Southern Dara",
        NotableFeatures: "Home to cruben-riders",
    },
    geography: [
        { type: 'text', content: "A remote island located far to the south of the Big Island, Tan Adü is largely untouched by the politics and technology of the Tiro states. Its environment is wild and primal, suitable for the massive, horned sea beasts known as cruben." },
    ],
    culture: [
        { type: 'text', content: "The people of Tan Adü live a tribal, nature-worshipping existence. While viewed as primitive by outsiders, they possess a deep and unique bond with the cruben, which they are able to ride as powerful naval mounts. This skill makes them formidable and highly sought-after allies in warfare." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/grace-of-kings#chapter-28" } },
    ],
    history: [
        {
            event: "Luan Zya's Exile",
            summary: [
                { type: 'text', content: "After his failed assassination attempt on Emperor Mapidéré, Luan Zya wandered Dara and eventually lived among the people of Tan Adü for a time, learning their customs and earning their respect." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/grace-of-kings#chapter-18" } },
            ]
        },
        {
            event: "The Capture of Pan",
            summary: [
                { type: 'text', content: "During the rebellion, Luan Zya recruited the cruben-riders of Tan Adü for Kuni Garu's audacious plan to attack the Imperial capital. Their unique naval capabilities were instrumental in the surprise assault and capture of Pan, a turning point in the war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/grace-of-kings#chapter-30" } },
            ]
        },
    ]
};

export default function TanAduPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}