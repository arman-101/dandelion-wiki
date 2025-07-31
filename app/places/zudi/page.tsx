'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ZUDI (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Zudi",
    image: "/places/zudi.png",
    introduction: "Zudi is a major city in the northern plains of Cocru. It is most famous for being the childhood home of Kuni Garu and the site of the kite attack that revealed the emperor's vulnerability, a key inciting incident for the Dandelion Rebellion.",
    infoBox: {
        Region: "Cocru, Southern Dara",
        Type: "City",
        NotableCharacters: [
            { text: "Kuni Garu", link: "/characters/kuni-garu" },
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
        ],
    },
    geography: [
        { type: 'text', content: "Zudi is situated on the sun-parched Porin Plains in northern Cocru. It is a strategically important city, serving as a key administrative and military center for the region." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
    ],
    culture: [
        { type: 'text', content: "The culture of Zudi reflects its Cocru heritage, with a strong martial tradition. However, as a large city, it also has a bustling commercial life and a diverse population, including a significant number of Xana colonists during the Imperial Era." },
    ],
    history: [
        {
            event: "The Kite Attack",
            summary: [
                { type: 'text', content: "In the fourteenth year of Emperor Mapidéré's reign, Zudi was the site of a spectacular assassination attempt. A lone assassin from Haan used a man-lifting kite to attack the emperor during a grand procession. The event was witnessed by a young Kuni Garu and planted the seeds of his future rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
            ]
        },
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Early in the rebellion, Kuni Garu captured Zudi, transforming it from his hometown into his first major seat of power. It was here that he began to prove himself as a capable administrator, not just a bandit leader." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/grace-of-kings#chapter-14" } },
                { type: 'text', content: " The city was later besieged by Imperial General Tanno Namen, but was successfully defended by the combined forces of Kuni Garu and Mata Zyndu in the famous Battle of Zudi." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/grace-of-kings#chapter-22" } },
            ]
        },
    ]
};

export default function ZudiPage() {
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