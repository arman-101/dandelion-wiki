'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR PRINCE PHYRO (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const characterData: Character = {
    name: "Prince Phyro",
    image: "/characters/prince-phyro.png",
    introduction: "Prince Phyro is the mischievous and clever youngest son of Emperor Ragin and Empress Jia. He grows from a playful child into a complex ruler who must navigate the challenges of war, political intrigue, and the weight of his crown during the Lyucu crisis.",
    infoBox: {
        aliases: "Emperor Phyro, The Young Emperor",
        occupation: "Prince of Dara, Emperor of Dara",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Alive",
        gender: "Male",
        relatives: "Emperor Ragin (father), Empress Jia (mother), Princess Théra (sister), Prince Timu (brother), Princess Fara (sister)",
        affiliation: "House of Garu, Dandelion Court",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Prince Phyro is described as mischievous and clever from a young age, often getting into trouble with his siblings but demonstrating quick thinking and natural leadership abilities. He has a playful spirit that endears him to others while masking his growing political awareness." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
        { type: 'text', content: " As he matures, Phyro develops into a thoughtful and conflicted ruler, torn between his duty to his people and his mother's pacifist policies. He possesses his father's pragmatism and his mother's political acumen, but struggles to find his own path as emperor." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
    ],
    history: [
        {
            era: "Early Life and Education",
            summary: [
                { type: 'text', content: "Prince Phyro grows up in the Imperial Palace in Pan alongside his siblings, Princess Théra and Prince Timu. He receives a comprehensive education under the tutelage of Imperial Tutor Zato Ruthi, though he often chafes against the rigid structure of formal education." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
                { type: 'text', content: " Phyro demonstrates his cleverness and leadership abilities early on, particularly when he helps his sister Théra drive away a bully from the Three-Legged Jug tavern. His mischievous nature often gets him into trouble, but also reveals his quick thinking and ability to rally others." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
            ]
        },
        {
            era: "The Grand Examination and Court Politics",
            summary: [
                { type: 'text', content: "During the first Grand Examination of the Dandelion Dynasty, Phyro witnesses the arrival of Zomi Kidosu and becomes intrigued by the brilliant scholar's unconventional thinking. He begins to question the rigid structures of Dara society and develops an interest in innovation and reform." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
                { type: 'text', content: " As he grows older, Phyro becomes increasingly aware of the political tensions within the court, particularly between his mother Empress Jia and the various factions vying for influence. He begins to develop his own political philosophy, influenced by his father's dandelion philosophy but with his own unique perspective." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
            ]
        },
        {
            era: "The Lyucu Invasion and Crisis",
            summary: [
                { type: 'text', content: "When the Lyucu Empire invades Dara with their garinafin war beasts, Phyro witnesses the devastating power of the invaders firsthand. The fall of Pan and the capture of his family forces him to confront the limitations of Dara's traditional military and political structures." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
                { type: 'text', content: " During the crisis, Phyro demonstrates remarkable courage and leadership, helping to organize resistance efforts and protect civilians. He begins to formulate his own ideas about how to counter the Lyucu threat, often clashing with his mother's more cautious approach." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
            ]
        },
        {
            era: "Ascension to the Throne",
            summary: [
                { type: 'text', content: "After the death of his father Emperor Ragin, Phyro ascends to the throne as Emperor Phyro. He inherits a fractured empire facing the constant threat of Lyucu invasion, and must navigate the complex political landscape while developing his own leadership style." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 15, link: "/books/the-veiled-throne#chapter-15" } },
                { type: 'text', content: " As emperor, Phyro struggles with the weight of his crown and the conflicting advice of his advisors. He is torn between his duty to prepare for war with the Lyucu and his mother's pacifist policies, which he increasingly questions." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
            ]
        },
        {
            era: "Military Preparation and the Garinafin Training Program",
            summary: [
                { type: 'text', content: "At the secret garinafin training base in Tiro Cozo, Emperor Phyro oversees the development of Dara's first air force. The arrival of the Lyucu defector Ouro provides a new opportunity to train Dara pilots in the art of garinafin warfare." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
                { type: 'text', content: " Phyro works closely with Ouro, despite the Lyucu warrior's harsh methods and questionable loyalty. The emperor begins to develop a new understanding of warfare and the cultural differences between Dara and the Lyucu, preparing for the inevitable conflict." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
            ]
        },
        {
            era: "Political Intrigue and the Resistance Movement",
            summary: [
                { type: 'text', content: "As emperor, Phyro becomes increasingly aware of the resistance movement growing within his own court. He discovers that Zomi Kidosu has been secretly building a coalition to support his sister Théra's rebellion in Ukyu-Gondé." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
                { type: 'text', content: " Phyro must navigate the complex political landscape, balancing his mother's influence with the growing calls for more aggressive action against the Lyucu. He begins to question whether his mother's pacifist policies are truly in the best interests of the empire." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 8, link: "/books/speaking-bones#chapter-8" } },
            ]
        },
        {
            era: "The Weight of Leadership and Future Challenges",
            summary: [
                { type: 'text', content: "As Emperor Phyro continues to rule, he faces the daunting challenge of preparing his empire for war while maintaining internal stability. He must balance the demands of various factions, from the military old guard to the new civil bureaucracy." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
                { type: 'text', content: " Phyro's reign is marked by his struggle to find his own voice as a leader, separate from his parents' legacies. He must decide whether to continue his mother's policies of appeasement or adopt a more aggressive stance against the Lyucu threat." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 8, link: "/books/speaking-bones#chapter-8" } },
            ]
        },
    ]
};

export default function PrincePhyroPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}