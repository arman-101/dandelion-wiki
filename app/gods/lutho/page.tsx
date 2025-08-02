'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR LUTHO ---
const godData: God = {
    name: "Lutho",
    image: "/gods/lutho.png",
    introduction: "Lutho is the god of wisdom, knowledge, and strategy in the pantheon of Dara. He is often depicted as an old fisherman and is known for his gift of the magical book Gitré Üthu to Luan Zya, which grants unparalleled strategic and philosophical insight.",
    infoBox: {
        "Domain": "Wisdom, Knowledge, Strategy",
        "Symbol": "Sea Turtle (Pawi)",
        "Sacred Text": { text: "Gitré Üthu", link: "/concepts/gitre-uthu" },
        "Key Devotee": { text: "Luan Zya", link: "/characters/luan-zya" },
        "First Mentioned": { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        "Appearance": "Often appears as an old fisherman"
    },
    mythology: [
        { type: 'text', content: "Lutho is one of the major gods in the pantheon of Dara, representing wisdom, knowledge, and strategic thinking. He is often depicted as an old fisherman, symbolizing the patience and wisdom that comes from years of experience and observation." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
        { type: 'text', content: " His pawi, or animal companion, is a sea turtle, which represents longevity, wisdom, and the slow but steady accumulation of knowledge over time. The sea turtle's ability to navigate vast oceans mirrors Lutho's role as a guide for those seeking wisdom and strategic insight." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
        { type: 'text', content: " Lutho is known for his gift of the magical book Gitré Üthu to Luan Zya, a self-writing tome that contains boundless knowledge of strategy and philosophy. This gift transforms Luan from a vengeance-driven assassin into one of the most brilliant strategists in the history of Dara." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
    ],
    appearances: [
        {
            event: "The Gift of Gitré Üthu",
            summary: [
                { type: 'text', content: "Lutho appears to Luan Zya disguised as an old fisherman on a pier after Luan's years of wandering and seeking vengeance. The god recognizes Luan's potential and gifts him the magical book Gitré Üthu, which grants him unparalleled strategic and philosophical insight." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
                { type: 'text', content: " This encounter marks a turning point in Luan's life, transforming him from a lone assassin into a master strategist who will play a crucial role in the rebellion against the Xana Empire and the establishment of the Dandelion Dynasty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
            ]
        },
        {
            event: "Divine Council",
            summary: [
                { type: 'text', content: "Lutho participates in the divine council that appears to Emperor Mapidéré in his dying dream, alongside the other major gods of Dara. The gods argue over the emperor's legacy and the future of the empire, foreshadowing the coming war and the rise of new powers." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'text', content: " This appearance establishes Lutho as one of the major deities who actively influence the course of human history, though his interventions are typically more subtle than those of other gods." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
        {
            event: "Continued Influence",
            summary: [
                { type: 'text', content: "Though Lutho's direct appearances are rare, his influence continues to be felt through the knowledge contained in Gitré Üthu and the strategic wisdom that Luan Zya brings to the Dandelion Dynasty. The god's philosophy of patient accumulation of knowledge and strategic thinking becomes a cornerstone of the new empire's approach to governance and warfare." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
                { type: 'text', content: " Lutho's emphasis on wisdom over brute force and his belief in the power of knowledge to transform the world align with the dandelion philosophy that Kuni Garu will come to embody as emperor." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
            ]
        },
    ]
};

export default function LuthoPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_GODS);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <GodPageTemplate godData={godData} />
        </>
    );
}