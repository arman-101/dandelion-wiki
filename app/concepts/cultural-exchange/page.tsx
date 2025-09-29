

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import CulturalExchangeClient from './CulturalExchangeClient';

// --- DATA FOR CULTURAL EXCHANGE ---
const conceptData: Concept = {
    name: "Cultural Exchange",
    introduction: "Cultural Exchange is a central theme in the series, representing the complex interactions and mutual influences between the diverse peoples of Dara and Ukyu-Gondé. It encompasses everything from language and technology to philosophy and warfare.",
    infoBox: {
        "Type": "Social Phenomenon",
        "Key Elements": "Language, Technology, Philosophy, Warfare",
        "Book Appearances": "All Books"
    },
    details: [
        { type: 'text', content: "The series explores how cultures are shaped by conflict and contact. The most significant example is the long-term interaction between Dara and the Lyucu. The Lyucu's initial contact with Mapidéré's expedition was a one-sided exchange where they absorbed Dara's technology for conquest." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
        { type: 'text', content: "This dynamic is reversed during the war. Dara is forced to innovate and adopt new ways of thinking to survive, culminating in them creating their own garinafin army. At the same time, the occupation forces deep, personal exchanges, such as the tutelage of Savo Ryoto by a Dara scholar and the romance between Savo and Princess Fara." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 22, link: "/books/the-veiled-throne#chapter-22" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
        { type: 'text', content: "A powerful symbol of this exchange is the mysterious child Thoryo, whose education forces Dara, Lyucu, and Agon characters to teach each other in order to teach her. The series concludes with a new era founded on this hard-won understanding, with a Daran-Agon rebellion creating a new society in Ukyu-Gondé and a Lyucu princess co-ruling a reconstructed province in Dara." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 11, link: "/books/the-veiled-throne#chapter-11" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 55, link: "/books/speaking-bones#chapter-55" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function CulturalExchangePage() {
    return <CulturalExchangeClient conceptData={conceptData} />;
}