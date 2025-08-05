'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Princess Fara",
    image: "/characters/princess-fara.png",
    introduction: "Princess Fara is the youngest child of Emperor Ragin and Empress Jia. A talented artist, inventor, and storyteller, she operates under the public alias 'Dandelion,' becoming the heart of a grassroots cultural and technological renaissance in Ginpen, often standing in opposition to the rigid control of her own mother.",
    infoBox: {
        aliases: "Dandelion",
        occupation: "Princess, Artist, Inventor, Storyteller",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Kinri (Savo Ryoto)", link: "/characters/kinri" },
        relatives: "Kuni Garu (father), Jia Matiza (mother), Prince Timu (brother), Princess Théra (sister), Prince Phyro (brother)",
        affiliation: "Dandelion Court, The Blossom Gang",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Fara is intelligent, creative, and empathetic. She possesses a deep curiosity about the world, which manifests in her artistic and scientific pursuits, such as building a camera obscura and a 'writing zither'. She has a strong sense of justice and a deep connection to the common people, often using her art and influence to help them. Her romance with the Lyucu refugee Kinri challenges her worldview and places her at the center of the series' core conflicts of identity and culture." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 15, link: "/books/the-veiled-throne#chapter-15" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 34, link: "/books/speaking-bones#chapter-34" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Years after the war, Fara has grown into a talented young artist. Under the guise of 'Dandelion,' she travels to Ginpen and becomes embroiled in a rivalry between two restaurants. She allies with the underdog Splendid Urn and the brilliant outcasts of the Blossom Gang. Together, they use storytelling and incredible 'silkpunk' inventions—like self-driving delivery carts and a thrilling cart ride—to defeat their wealthy and unscrupulous rival, Tiphan Huto." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 21, link: "/books/the-veiled-throne#chapter-21" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 22, link: "/books/the-veiled-throne#chapter-22" } },
                { type: 'text', content: "During this time, she meets and falls in love with Kinri, a young Lyucu refugee. Their investigation into Tiphan Huto's crimes leads them to the secret Imperial research facility, Last Bite, where Kinri's true identity as Zomi Kidosu's brother is revealed. The revelation creates a painful rift between them, as Kinri embraces his Lyucu heritage." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 46, link: "/books/the-veiled-throne#chapter-46" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Fara continues to be a central figure in the cultural and political landscape of Dara. In the midst of the final battle for Pan, she is reunited with her long-lost siblings. In the aftermath of the war, she becomes a renowned artist, creating a vast, interactive sculpture that tells the story of the Dandelion Dynasty, solidifying her role as the keeper of the empire's stories and spirit." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 41, link: "/books/speaking-bones#chapter-41" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 47, link: "/books/speaking-bones#chapter-47" } },
            ]
        },
    ]
};

export default function PrincessFaraPage() {
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