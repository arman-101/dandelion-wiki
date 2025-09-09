

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import GitrthuClient from './GitrthuClient';

// --- DATA FOR GITRÉ ÜTHU ---
const conceptData: Concept = {
    name: "Gitré Üthu",
    image: "/concepts/gitre-uthu.png",
    introduction: "Gitré Üthu is a magical, self-writing book of military strategy and philosophy. It was gifted to Luan Zya by the god Lutho and contains the distilled wisdom of countless scholars and generals from Dara's history.",
    infoBox: {
        Type: "Magical Artifact",
        GivenBy: { text: "Lutho", link: "/gods/lutho" },
        Owner: { text: "Luan Zya", link: "/characters/luan-zya" },
        Content: "Military Strategy, Philosophy, History",
    },
    details: [
        { type: 'text', content: "After his failed kite attack, a wandering Luan Zya encountered the god Lutho in disguise, who gave him the book. The pages of Gitré Üthu are blank, but when a reader contemplates a problem, the book fills with relevant text and diagrams." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
        { type: 'text', content: "The book is not a simple instruction manual; it offers possibilities and perspectives, requiring a wise reader to interpret its lessons. It served as Luan Zya's most powerful tool, providing the strategic insights that allowed Kuni Garu's rebels to defeat a mighty empire." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
        { type: 'text', content: "Luan Zya died clutching the book, and inside, his student Zomi Kidosu found a final, coded message containing the secret to defeating the Lyucu invasion fleet." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 51, link: "/books/the-wall-of-storms#chapter-51" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function GitrthuPage() {
    return <GitrthuClient conceptData={conceptData} />;
}