'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Jia Matiza",
    image: "/characters/jia-matiza.png",
    introduction: "Jia Matiza is a brilliant scholar and herbalist who becomes the first wife of Kuni Garu and the first Empress of the Dandelion Dynasty. She is a major political force in her own right, known for her sharp intellect, fierce will, and unwavering dedication to building a stable and just empire.",
    infoBox: {
        aliases: "Empress Jia",
        occupation: "Scholar, Empress of Dara, Regent",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Deceased",
        gender: "Female",
        significantOther: { text: "Kuni Garu", link: "/characters/kuni-garu" },
        relatives: "Unnamed father, Timu (son), Théra (daughter), Fara (daughter)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Jia is described as beautiful, with curly, bright-red hair and large, almond-shaped dark-green eyes." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
        { type: 'text', content: " Her defining trait is her formidable intellect. She is sharp, perceptive, and often sees the long-term political consequences of actions that others miss. While she can be compassionate, she is also a ruthless political operator, willing to make morally compromising decisions and sacrifice her own reputation for what she believes is the greater good of the empire. She views governance as a science and strives to create a system that is stable and less reliant on the whims of individuals." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 21, link: "/books/the-wall-of-storms#chapter-21" } },
    ],
    history: [
        {
            era: "Meeting Kuni Garu",
            summary: [
                { type: 'text', content: "The unconventional daughter of a wealthy rancher, Jia rejected her suitors and sought out the clever bandit Kuni Garu after witnessing his defiance of an Imperial official. They formed a powerful intellectual and romantic bond, and it was she who first compared him to the hardy, resourceful dandelion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
            ]
        },
        {
            era: "The Dandelion Rebellion & Civil War",
            summary: [
                { type: 'text', content: "During Kuni's exile on Dasu, Jia served as his most important agent in Mata Zyndu's court, gathering intelligence and plotting his return via secret letters written in invisible ink." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/the-grace-of-kings#chapter-36" } },
                { type: 'text', content: " She was instrumental in the decision for Kuni to take a second wife, Risana, for political and strategic purposes, showcasing her pragmatic nature." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 37, link: "/books/the-grace-of-kings#chapter-37" } },
            ]
        },
        {
            era: "Reign of Four Placid Seas",
            summary: [
                { type: 'text', content: "As Empress, Jia became the architect of the empire's civil bureaucracy and legal systems. She often clashed with the military old guard and even her co-wife, Consort Risana, over the direction of the empire. She orchestrated the 'Emperor's Shadows' plan, sending her sons to opposite ends of Dara to train them while consolidating her own power as the future regent, a move that created deep fractures within the imperial family." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 22, link: "/books/the-wall-of-storms#chapter-22" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 29, link: "/books/the-wall-of-storms#chapter-29" } },
            ]
        },
    ]
};

export default function JiaMatizaPage() {
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