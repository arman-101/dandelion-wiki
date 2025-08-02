'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR TAZU (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const godData: God = {
    name: "Tazu",
    image: "/gods/tazu.png",
    introduction: "Tazu is the god of chance, randomness, and the unpredictable forces that shape human destiny. He represents the chaotic and uncertain aspects of life, often appearing in moments of crisis or when characters must make difficult choices.",
    infoBox: {
        domains: "Chance, Randomness, Unpredictability, Destiny",
        pawi: { text: "Shark", link: "/concepts/pawi" },
        symbols: "Dice, unpredictable storms, sudden changes",
        temperament: "Unpredictable, playful, sometimes cruel",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    mythology: [
        { type: 'text', content: "Tazu is one of the major gods of Dara, representing the forces of chance and randomness that influence human lives. He is often depicted as unpredictable and capricious, embodying the idea that even the best-laid plans can be disrupted by unforeseen events." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
        { type: 'text', content: " His pawi is the shark, a creature that embodies the unpredictable and dangerous nature of the sea. Like the shark, Tazu represents the sudden, unexpected events that can change the course of history and individual lives." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
        { type: 'text', content: " Tazu is often invoked during moments of uncertainty or when characters must rely on luck rather than skill or planning. He represents the acknowledgment that human control over events is limited and that chance plays a significant role in determining outcomes." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
    ],
    appearances: [
        {
            event: "The Grand Examination",
            summary: [
                { type: 'text', content: "During the first Grand Examination, Zomi Kidosu prays to both Lutho (god of calculation) and Tazu (god of chance) as she completes her essay. This reflects the dual nature of the examination - part skill and preparation, part luck and timing." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
                { type: 'text', content: " The examination itself becomes a test of both the candidates' abilities and their ability to handle the unpredictable elements of the process, embodying Tazu's domain of chance and randomness." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
            ]
        },
        {
            event: "The Fallen Kings",
            summary: [
                { type: 'text', content: "Tazu appears in conversation with Kiji in the winds, discussing the instability of the Dandelion Throne. He hints at the role that chance and betrayal played in the foundation of the dynasty, suggesting that the throne's legitimacy is tainted by its origins." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
                { type: 'text', content: " This appearance establishes Tazu as an observer of human affairs who understands the role that chance and unpredictable events play in shaping history and political power." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
            ]
        },
        {
            event: "Zomi's Childhood Vision",
            summary: [
                { type: 'text', content: "In Zomi Kidosu's childhood, she witnesses a divine battle between the pawi of Lutho (a turtle) and Tazu (a shark). This vision represents the fundamental conflict between order and chaos, calculation and chance, that shapes human existence." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
                { type: 'text', content: " The lightning strike that scars Zomi and paralyzes her leg is seen as a manifestation of Tazu's influence, a random event that changes the course of her life and sets her on the path to becoming one of the most important figures in the empire." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
            ]
        },
        {
            event: "The Lyucu Crisis",
            summary: [
                { type: 'text', content: "Throughout the Lyucu invasion and the subsequent crisis, Tazu's influence is felt in the unpredictable nature of warfare and the role that chance plays in determining the outcomes of battles and political struggles." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
                { type: 'text', content: " The arrival of the Lyucu themselves represents a massive disruption to the established order, embodying Tazu's domain of sudden, unpredictable change that can overturn even the most stable societies." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
            ]
        },
        {
            event: "The Rebellion and Resistance",
            summary: [
                { type: 'text', content: "In the later books, Tazu's influence continues to be felt in the unpredictable nature of guerrilla warfare and the role that chance plays in the success or failure of resistance movements." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 9, link: "/books/speaking-bones#chapter-9" } },
                { type: 'text', content: " The discovery of Princess Théra's message and the subsequent development of the resistance movement demonstrate how random events can have profound consequences for the course of history." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 1, link: "/books/speaking-bones#chapter-1" } },
            ]
        },
    ]
};

export default function TazuPage() {
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