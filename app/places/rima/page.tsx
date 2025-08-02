'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RIMA (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Rima",
    image: "/places/rima.png",
    introduction: "Rima is a mountainous, northern Tiro state on the Big Island, famous for its rich mines, master bladesmiths, and its divine patron, Fithowéo, the god of the forge and war.",
    infoBox: {
        Region: "Northern Dara",
        Capital: "Na Thion",
        PatronGod: { text: "Fithowéo", link: "/gods/fithoweo" },
        NotableCharacters: [{ text: "King Jizu", link: "/characters/king-jizu" }],
    },
    geography: [
        { type: 'text', content: "Rima is a rugged, mountainous land located in the northern half of the Big Island. Its terrain is defined by the Shinané Mountains, whose deep shades are home to spice estates." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/the-grace-of-kings#chapter-15" } },
        { type: 'text', content: " The state's wealth is drawn from its extensive mines, which produce high-quality ore essential for the finest weapons in Dara." },
    ],
    culture: [
        { type: 'text', content: "The culture of Rima is deeply connected to mining and smithing. Its people are known for their resilience and craftsmanship, particularly their master bladesmiths, who are considered the best in the islands." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/the-grace-of-kings#chapter-15" } },
        { type: 'text', content: " The worship of Fithowéo is central to their identity, with the forge holding a place of spiritual importance." },
    ],
    history: [
        {
            event: "Rebellion against Xana",
            summary: [
                { type: 'text', content: "Rima was one of the first of the re-established Tiro states to fall during the rebellion. The young King Jizu, a former fisherman, was betrayed by his commanders and faced the veteran Imperial general Tanno Namen." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/the-grace-of-kings#chapter-15" } },
                { type: 'text', content: " Rather than surrender, King Jizu chose a martyr's death by self-immolation, an act of defiance that served as a powerful symbol for the rest of the rebellion." },
            ]
        },
        {
            event: "The Marshal's Gambit",
            summary: [
                { type: 'text', content: "During the Chrysanthemum-Dandelion War, Rima was a neutral state. Marshal Gin Mazoti, in a brilliant strategic move to break the stalemate with Mata Zyndu, conquered Rima using unconventional tactics, including damming a river to create a path for her army. After her victory, she declared herself Queen of Rima." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
            ]
        },
    ]
};

export default function RimaPage() {
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