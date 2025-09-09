

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import TheGrandExaminationClient from './TheGrandExaminationClient.tsx';

// --- DATA FOR THE GRAND EXAMINATION ---
const conceptData: Concept = {
    name: "The Grand Examination",
    image: "/concepts/grand-examination.png",
    introduction: "The Grand Examination is a revolutionary system established by the Dandelion Dynasty to select civil servants. It is designed to replace the old system of aristocratic privilege with a meritocracy based on intellect and skill, open to all citizens regardless of birth.",
    infoBox: {
        Type: "Meritocratic Civil Service Test",
        Location: { text: "Pan", link: "/places/pan" },
        KeyProponent: { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" },
    },
    details: [
        { type: 'text', content: "The first Grand Examination was a cornerstone of the new dynasty's philosophy. Thousands of scholars from across Dara were brought to Pan, sealed in individual stalls for three days, and made to answer a single policy question posed by the Emperor." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
        { type: 'text', content: "The Examination became a major political event. At the final stage, the Palace Examination, the scholar Zomi Kidosu delivered a blistering critique of the system itself, arguing its reliance on classical logograms was a barrier to the poor and perpetuated class privilege. Her speech sparked a riot among failed scholars." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 15, link: "/books/the-wall-of-storms#chapter-15" } },
        { type: 'text', content: "Years later, Zomi, now Farsight Secretary, attempted to reform the exam by requiring essays in the vernacular. This sparked another rebellion of scholars, which Empress Jia used to teach Zomi a harsh lesson about the power of tradition, leading to Zomi's public disgrace and resignation." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 29, link: "/books/the-veiled-throne#chapter-29" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function TheGrandExaminationPage() {
    return <TheGrandExaminationClient conceptData={conceptData} />;
}