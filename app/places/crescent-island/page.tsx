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
    introduction: "Crescent Island is a remote, isolated island that serves as a key location in the education of Zomi Kidosu. It later becomes the site of a pivotal and bloody battle during the war against the Lyucu.",
    infoBox: {
        type: "Island",
        continent: { text: "Dara", link: "/places/dara" },
        KeyEvents: "Zomi's education, Battle of Crescent Island"
    },
    geography: [
        { type: 'text', content: "Crescent Island is remote and sparsely populated, home to small hamlets of people who live a traditional life and speak an archaic dialect. It features treacherous mountains and is prone to natural disasters like forest fires." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 12, link: "/books/the-wall-of-storms#chapter-12" } },
    ],
    culture: [
        { type: 'text', content: "The inhabitants of Crescent Island live a simple, traditional life, preserving ancient customs and language. This makes the island a living museum of Dara's history and a perfect outdoor classroom for a student of philosophy and linguistics like Zomi." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 12, link: "/books/the-wall-of-storms#chapter-12" } },
    ],
    history: [
        {
            event: "The Education of Zomi Kidosu",
            summary: [
                { type: 'text', content: "Luan Zya took his young student, Zomi Kidosu, to Crescent Island to continue her education. There, he taught her the deeper principles of logogram construction by communicating with an elder who spoke an archaic dialect. The island was also the site of a dramatic forest fire where Zomi's practical genius saved both the hamlet and her teacher's life." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 12, link: "/books/the-wall-of-storms#chapter-12" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 14, link: "/books/the-wall-of-storms#chapter-14" } },
            ]
        },
        {
            event: "The Battle of Crescent Island",
            summary: [
                { type: 'text', content: "During the Lyucu War, the invaders established a foothold on Crescent Island, leading to a military stalemate. The Dandelion court gave command of the Dara fleet to the newly trained Aya Mazoti. In a multi-part, brutal battle, Aya used deception and unconventional tactics, including the aid of the Fish-Herder's swamp rebels, to break the stalemate and achieve a costly but decisive victory for Dara." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 24, link: "/books/speaking-bones#chapter-24" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 25, link: "/books/speaking-bones#chapter-25" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 26, link: "/books/speaking-bones#chapter-26" } },
            ]
        },
    ]
};

export default function CrescentIslandPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_PLACES]);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}