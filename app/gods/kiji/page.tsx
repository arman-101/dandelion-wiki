'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR KIJI ---
const godData: God = {
    name: "Kiji",
    image: "/gods/kiji.png",
    introduction: "Kiji is the proud and powerful patron god of Xana, revered as the Lord of the Air and the master of wind, flight, and birds. He often meddles in mortal affairs, tempting heroes and expressing his frustration with the state of the world.",
    infoBox: {
        Patronage: { text: "Xana", link: "/places/xana" },
        Domains: "Air, Wind, Flight, Birds",
        Pawi: "Mingén Falcon",
    },
    mythology: [
        { type: 'text', content: "As one of the eight children of Daraméa and Thasoluo, Kiji is a central figure in the Dara pantheon. He is often depicted as proud and concerned with grand visions and the sweep of history, sometimes at the expense of mortal details. It was his mystical lift gas from Mount Kiji that gave the Xana Empire its air superiority." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
        { type: 'text', content: " During the Diaspora Wars, he blinded his brother Fithowéo in a duel, an act that defined their later relationship." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "Tempting Mortal Heroes",
            summary: [
                { type: 'text', content: "Kiji has a habit of appearing to mortals in disguise to test their character. Disguised as a beggar, he tempts Gin Mazoti to betray Kuni Garu, an offer she refuses. Years later, he appears to a woman in Mata Zyndu's household, urging her to see the Hegemon's true, brutal nature and implying she should kill him." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 49, link: "/books/the-grace-of-kings#chapter-49" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 44, link: "/books/the-grace-of-kings#chapter-44" } },
            ]
        },
        {
            event: "The Lyucu Invasion",
            summary: [
                { type: 'text', content: "After the Lyucu invade and occupy his home islands of Rui and Dasu, Kiji is the most vocal of the gods in his anger. He is outraged by the desecration of his sacred Mount Kiji and the syncretization of his worship with that of the Lyucu god Péa. He is constantly frustrated by the other gods' adherence to their pact of non-interference." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/the-wall-of-storms#chapter-40" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 45, link: "/books/the-wall-of-storms#chapter-45" } },
            ]
        },
    ]
};


export default function KijiPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_GODS]);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <TopPageNavigation
                prevPage={prevPage}
                nextPage={nextPage}
                returnLink={returnLink}
            />
            <GodPageTemplate godData={godData} />
        </>
    );
}