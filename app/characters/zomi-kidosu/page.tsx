'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Zomi Kidosu",
    image: "/characters/zomi-kidosu.png",
    introduction: "Zomi Kidosu is a brilliant, crippled scholar from Dasu who rises from poverty to become one of the most influential figures in the Dandelion Dynasty. As the student of Luan Zya, she is a radical thinker who champions innovation and meritocracy over tradition.",
    infoBox: {
        aliases: "Mimi",
        occupation: "Scholar, Farsight Secretary, Advisor",
        placeOfBirth: { text: "Dasu", link: "/places/dasu" },
        status: "Alive",
        gender: "Female",
        relatives: "Oga Kidosu (father), Aki Kidosu (mother)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Dasu", link: "/places/dasu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Zomi has a scarred face and a paralyzed left leg from a childhood lightning strike, for which she wears a mechanical leg brace invented by Luan Zya." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/wall-of-storms#chapter-5" } },
        { type: 'text', content: " She is fiercely intelligent, with a mind that sees the world through the lens of an engineer, always looking to deconstruct and improve flawed systems. She is impatient with tradition for its own sake and is a passionate advocate for the common people, having experienced their struggles firsthand. Her bold, often confrontational, style makes her a disruptive but essential voice in the Imperial court." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 16, link: "/books/wall-of-storms#chapter-16" } },
    ],
    history: [
        {
            era: "Early Life and Tutelage",
            summary: [
                { type: 'text', content: "Born as Mimi in a poor fishing village on Dasu, she was discovered by a disguised Luan Zya, who recognized her extraordinary intellect. He became her teacher, giving her a formal education in engineering and philosophy and bestowing upon her the name Zomi." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/wall-of-storms#chapter-5" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/wall-of-storms#chapter-7" } },
            ]
        },
        {
            era: "The Grand Examination",
            summary: [
                { type: 'text', content: "Zomi traveled to Pan to participate in the first Grand Examination. In her final presentation before the emperor, she delivered a shocking and radical critique of the entire examination system, arguing that its reliance on classical logograms was a tool of oppression against the poor. Her bold proposal to use the simpler zyndari script cemented her reputation as a brilliant but dangerous thinker." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 15, link: "/books/wall-of-storms#chapter-15" } },
            ]
        },
        {
            era: "Service to the Empire",
            summary: [
                { type: 'text', content: "After the examination, she was appointed to the College of Advocates and later served as an advisor to Queen Gin Mazoti in Géjira. She was eventually blackmailed by Empress Jia into signing a false confession against Gin, an act that haunted her but was done to protect her family. She later becomes a close confidante and companion to Princess Théra." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 30, link: "/books/wall-of-storms#chapter-30" } },
            ]
        },
    ]
};

export default function ZomiKidosuPage() {
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