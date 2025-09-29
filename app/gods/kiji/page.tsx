import type { Metadata } from 'next';
import { God } from '../../data/wiki-data';
import { generateGodMetadata } from '@/app/utils/metadata';
import KijiClient from './KijiClient';

// --- DATA FOR KIJI ---
const godData: God = {
    name: "Kiji",
    introduction: "Kiji is the proud and powerful patron god of Xana, revered as the Lord of the Air and the master of wind, flight, and birds. He often meddles in mortal affairs, tempting heroes and expressing his frustration with the state of the world.",
    infoBox: {
        Patronage: { text: "Xana", link: "/places/xana" },
        Domains: "Air, Wind, Flight, Birds",
        Pawi: "Mingén Falcon",
    },
    mythology: [
        { type: 'text', content: "As a central figure in the Dara pantheon, Kiji is often depicted as proud and concerned with grand visions and the sweep of history. It was the mystical lift gas from his sacred home, Mount Kiji, that gave the Xana Empire its air superiority." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
        { type: 'text', content: " In the ancient Diaspora Wars, he blinded his brother Fithowéo in a duel, an act that defined their later relationship." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "Tempting Mortal Heroes",
            summary: [
                { type: 'text', content: "Kiji has a habit of appearing to mortals in disguise to test their character. As a beggar, he tempts Gin Mazoti to betray Kuni Garu, an offer she refuses. Later, he appears to Lady Mira, giving her a bone dagger and urging her to see Mata Zyndu's true nature, implying she should kill him." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 49, link: "/books/the-grace-of-kings#chapter-49" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 44, link: "/books/the-grace-of-kings#chapter-44" } },
            ]
        },
        {
            event: "The Lyucu Invasion",
            summary: [
                { type: 'text', content: "After the Lyucu occupy his home islands, Kiji is the most vocal of the gods in his anger. He is outraged by the desecration of Mount Kiji and the merging of his worship with that of the Lyucu god Péa. This is exemplified when the hardliner Cutanrovo Aga destroys his temple, massacres his clergy, and his pawi appears in response." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/the-wall-of-storms#chapter-40" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 30, link: "/books/the-veiled-throne#chapter-30" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateGodMetadata(godData);

export default function KijiPage() {
    return <KijiClient godData={godData} />;
}