'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Zato Ruthi",
    image: "/characters/zato-ruthi.png",
    introduction: "Zato Ruthi is the stern and deeply traditional Imperial Tutor for the children of Emperor Ragin. He is a respected scholar from Haan who embodies the classical ideals of education and propriety.",
    infoBox: {
        aliases: "Imperial Tutor",
        occupation: "Scholar, Tutor",
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court",
        nationality: { text: "Haan", link: "/places/haan" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: "Speaking Bones"
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Zato Ruthi is an elderly scholar who carries himself with an air of immense dignity and seriousness. He is a staunch traditionalist who believes in a rigorous, classical education and has little patience for the pranks and modern curiosities of his royal pupils, particularly Princess Théra. Despite his stern exterior, he is deeply dedicated to his duty and the proper upbringing of the heirs." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/the-wall-of-storms#chapter-3" } },
    ],
    history: [
        {
            era: "Tutor to the Imperial Children",
            summary: [
                { type: 'text', content: "Zato Ruthi was responsible for the education of Princes Timu and Phyro, and Princess Théra. He frequently clashed with the children over their behavior, at one point attempting to resign in fury after they painted a mocking poem on his robe. He was skillfully placated by Emperor Ragin and Empress Jia, who reframed the prank as a clever apology. His traditional curriculum, focused on classics and propriety, often frustrated the engineering-minded Théra." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/the-wall-of-storms#chapter-3" } },
            ]
        },
    ]
};

export default function ZatoRuthiPage() {
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