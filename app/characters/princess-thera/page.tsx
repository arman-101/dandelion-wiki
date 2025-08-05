'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Princess Théra",
    image: "/characters/princess-thera.png",
    introduction: "Princess Théra is the brilliant, adventurous, and scientifically-minded eldest daughter of Emperor Ragin and Empress Jia. Possessing her father's charisma and her mother's intellect, she was secretly chosen by Kuni to be his heir. She later abdicates to lead a rebellion against the Lyucu in their homeland, becoming a legendary figure in her own right.",
    infoBox: {
        aliases: "Empress Üna",
        occupation: "Princess, Empress of Dara, Rebel Leader",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
        relatives: "Kuni Garu (father), Jia Matiza (mother), Prince Timu (brother), Prince Phyro (brother), Princess Fara (sister), Tanto Aragoz (son), Rokiri Aragoz (son)",
        affiliation: "Dandelion Court, Dara Expeditionary Force, Agon Rebellion",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Théra is clever, courageous, and endlessly curious. From a young age, she displays a keen and intuitive understanding of politics, often seeing the subtext that her more literal-minded brother Timu misses." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 11, link: "/books/the-wall-of-storms#chapter-11" } },
        { type: 'text', content: " She has a scientific and rational mind, seeking logical explanations for seemingly magical phenomena. This allows her to deduce the scientific principles behind the Hegemon cult's 'magic mirrors' and later, the biology of the garinafins. She is a natural leader who inspires loyalty through her intelligence and bravery." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 26, link: "/books/the-wall-of-storms#chapter-26" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 53, link: "/books/the-wall-of-storms#chapter-53" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As a young princess, Théra, along with her brothers, saved the scholar Zomi Kidosu from an extortionist. Her father, Emperor Ragin, secretly recognized her potential and confided in Luan Zya his intention to name her as his heir, a radical break from tradition." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
                { type: 'text', content: "She single-handedly ended the Hegemon cult rebellion in Tunoa by using her scientific knowledge to create a counter-illusion, projecting an image that shattered the rebels' faith. This act saved her brother Phyro and cemented her reputation as a hero." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
                { type: 'text', content: "After her father's death, she was named his successor, but chose to abdicate in favor of Phyro. Instead, she married the Agon prince Takval Aragoz and led an expedition across the Wall of Storms to wage war on the Lyucu in their homeland." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 58, link: "/books/the-wall-of-storms#chapter-58" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 62, link: "/books/the-wall-of-storms#chapter-62" } },
            ]
        },
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "In Ukyu-Gondé, Théra and Takval forged an alliance with the exiled Agon tribes and began a long, grueling rebellion. After a devastating attack on their secret base, she and the survivors were forced into exile in the World's Edge Mountains. There, they discovered a garinafin boneyard and ancient knowledge that allowed them to create new 'living bone' technologies, turning the tide of their war. Her rebellion became a crucial second front, weakening the Lyucu Empire from within and aiding the war effort back in Dara." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 20, link: "/books/speaking-bones#chapter-20" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 29, link: "/books/speaking-bones#chapter-29" } },
            ]
        },
    ]
};

export default function PrincessTheraPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}