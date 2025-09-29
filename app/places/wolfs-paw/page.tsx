

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import WolfsPawClient from './WolfsPawClient';

// --- DATA FOR WOLF'S PAW ---
const placeData: Place = {
    name: "Wolf's Paw",
    image: "/places/wolfs-paw.jpeg",
    introduction: "Wolf's Paw is a southern island, part of the state of Gan, separated from the mainland by the treacherous Kishi Channel. It was the site of one of the largest battles of the Dandelion Rebellion and one of Mata Zyndu's most horrific atrocities.",
    infoBox: {
        type: "Island",
        state: { text: "Gan", link: "/places/gan" },
        continent: "Dara",
        KeyLandmark: { text: "Kishi Channel", link: "/places/kishi-channel" }
    },
    geography: [
        { type: 'text', content: "A large island off the southern coast, its proximity to the Kishi Channel, a deadly whirlpool, makes naval passage extremely dangerous." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
    ],
    culture: [
        { type: 'text', content: "The culture of Wolf's Paw is aligned with its parent state of Gan, but its history is forever marked by the devastating battle and subsequent massacre that took place on its shores." },
    ],
    history: [
        {
            event: "Battle of Wolf's Paw",
            summary: [
                { type: 'text', content: "The island was the site of the climactic battle between the main rebel forces, led by a grief-stricken Mata Zyndu, and the Imperial armies. Despite the mid-battle betrayal of his allies, Mata's godlike fury turned the tide, leading to a crushing rebel victory." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
            ]
        },
        {
            event: "The Massacre at Wolf's Paw",
            summary: [
                { type: 'text', content: "After the battle, Mata's army was trapped on the island. Tempted by the goddess Kana, Mata committed a monstrous act, sacrificing 20,000 surrendered prisoners to the sea god Tazu. The act earned Mata the infamous title 'Butcher of Wolf's Paw' and marked his definitive break from his code of honor." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function WolfsPawPage() {
    return <WolfsPawClient placeData={placeData} />;
}