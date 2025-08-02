'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR PRINCESS THÉRA (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const characterData: Character = {
    name: "Princess Théra",
    image: "/characters/princess-thera.png",
    introduction: "Princess Théra is the brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia. She becomes a central figure in the later books, leading a daring expedition through the Wall of Storms and establishing a rebellion in Ukyu-Gondé against the Lyucu Empire.",
    infoBox: {
        aliases: "The Pearl of Fire, The Rebel Princess",
        occupation: "Princess of Dara, Expedition Leader, Rebel Commander",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
        relatives: "Emperor Ragin (father), Empress Jia (mother), Prince Timu (brother), Prince Phyro (brother), Princess Fara (sister)",
        affiliation: "House of Garu, Dandelion Court, Agon Rebellion",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Princess Théra is described as clever, adventurous, and possessing a natural leadership quality that emerges even in childhood. She has a quick wit and a talent for rallying people to her cause, as demonstrated when she helps drive away a bully from the Three-Legged Jug tavern." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
        { type: 'text', content: " As she matures, Théra develops into a brilliant strategist and charismatic leader, capable of inspiring loyalty and devising innovative solutions to complex problems. Her personality combines her father's pragmatism with her mother's political acumen, making her a formidable opponent and ally." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
    ],
    history: [
        {
            era: "Early Life and Education",
            summary: [
                { type: 'text', content: "Princess Théra grows up in the Imperial Palace in Pan alongside her brothers, Prince Timu and Prince Phyro. She receives a comprehensive education under the tutelage of Imperial Tutor Zato Ruthi, though she often chafes against the rigid structure of formal education." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
                { type: 'text', content: " Her natural leadership abilities become apparent early on, as she demonstrates quick thinking and the ability to rally others to her cause. She forms a close bond with her brothers, particularly Prince Phyro, with whom she shares a mischievous streak." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
            ]
        },
        {
            era: "The Grand Examination and Court Politics",
            summary: [
                { type: 'text', content: "During the first Grand Examination of the Dandelion Dynasty, Théra witnesses the arrival of Zomi Kidosu and becomes intrigued by the brilliant scholar's unconventional thinking. She begins to question the rigid structures of Dara society and the limitations placed on women and commoners." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
                { type: 'text', content: " As she grows older, Théra becomes increasingly aware of the political tensions within the court, particularly between her mother Empress Jia and the various factions vying for influence. She begins to develop her own political philosophy, influenced by her father's dandelion philosophy but with her own unique perspective." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
            ]
        },
        {
            era: "The Lyucu Invasion and Crisis",
            summary: [
                { type: 'text', content: "When the Lyucu Empire invades Dara with their garinafin war beasts, Théra witnesses the devastating power of the invaders firsthand. The fall of Pan and the capture of her family forces her to confront the limitations of Dara's traditional military and political structures." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
                { type: 'text', content: " During the crisis, Théra demonstrates remarkable courage and leadership, helping to organize resistance efforts and protect civilians. She begins to formulate a plan to seek help from beyond the Wall of Storms, believing that the solution to Dara's problems lies in the unknown lands beyond." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
            ]
        },
        {
            era: "The Expedition Through the Wall of Storms",
            summary: [
                { type: 'text', content: "Théra leads a daring expedition through the Wall of Storms, a seemingly impassable barrier that separates Dara from the unknown lands beyond. Her journey is aided by a pod of cruben, massive sea creatures that help guide her fleet through the treacherous waters." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 30, link: "/books/the-wall-of-storms#chapter-30" } },
                { type: 'text', content: " The expedition faces numerous challenges, including encounters with Lyucu patrols and the harsh conditions of the open sea. Théra's leadership and strategic thinking prove crucial to the survival of her crew, and she begins to develop a new understanding of the world beyond Dara." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
            ]
        },
        {
            era: "Arrival in Ukyu-Gondé and Alliance with the Agon",
            summary: [
                { type: 'text', content: "Upon reaching Ukyu-Gondé, Théra discovers the Agon people, a nomadic tribe who have been subjugated by the Lyucu. She forms an alliance with Prince Takval Aragoz, the Agon leader, and begins to build a coalition of resistance against the Lyucu Empire." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
                { type: 'text', content: " Théra's relationship with Takval develops into a deep partnership, both political and personal. Together, they work to unite the various factions opposed to Lyucu rule, combining Dara's technological innovations with Agon warrior traditions." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 8, link: "/books/the-veiled-throne#chapter-8" } },
            ]
        },
        {
            era: "The Rebellion and Guerrilla Warfare",
            summary: [
                { type: 'text', content: "Théra leads a sophisticated guerrilla campaign against the Lyucu, using innovative tactics that combine Dara technology with Agon mobility. Her forces achieve several significant victories, including the successful raid on a Lyucu supply convoy." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 9, link: "/books/speaking-bones#chapter-9" } },
                { type: 'text', content: " The rebellion gains momentum as more people join the cause, inspired by Théra's leadership and the promise of freedom from Lyucu oppression. She establishes a network of secret bases and communication systems, building a resistance movement that spans the entire region." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 10, link: "/books/speaking-bones#chapter-10" } },
            ]
        },
        {
            era: "The Message and Return to Dara",
            summary: [
                { type: 'text', content: "After years of leading the rebellion, Théra sends a secret message back to Dara, encoded in a turtle shell and delivered to Zomi Kidosu. The message confirms that she is alive and continuing the fight against the Lyucu." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 1, link: "/books/speaking-bones#chapter-1" } },
                { type: 'text', content: " The discovery of Théra's survival reignites hope in Dara and forces the court to reconsider its policies toward the Lyucu threat. Her continued resistance serves as an inspiration to those who refuse to accept Lyucu domination." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
            ]
        },
    ]
};

export default function PrincessTheraPage() {
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