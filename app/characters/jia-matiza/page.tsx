'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR JIA MATIZA (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const characterData: Character = {
    name: "Jia Matiza",
    image: "/characters/jia-matiza.png",
    introduction: "Jia Matiza is the brilliant scholar and first wife of Emperor Ragin, who becomes Empress Jia and the political architect of the Dandelion Dynasty. Her intelligence, strategic thinking, and complex relationship with power make her one of the most influential figures in the empire.",
    infoBox: {
        aliases: "Empress Jia, The Political Architect",
        occupation: "Scholar, Empress of Dara, Political Strategist",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Emperor Ragin", link: "/characters/kuni-garu" },
        relatives: "Princess Théra (daughter), Prince Timu (son), Prince Phyro (son), Princess Fara (daughter)",
        affiliation: "House of Garu, Dandelion Court",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Jia Matiza is described as beautiful and intelligent, with a sharp mind and a deep understanding of politics and human nature. She possesses a natural charisma and the ability to read people, making her an effective political operator." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
        { type: 'text', content: " As she matures into Empress Jia, she becomes increasingly pragmatic and calculating, willing to make difficult decisions for the good of the empire. She is a master of political intrigue and understands the importance of maintaining stability and control." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/the-wall-of-storms#chapter-3" } },
    ],
    history: [
        {
            era: "Early Life and Meeting Kuni Garu",
            summary: [
                { type: 'text', content: "Jia Matiza grows up in Zudi, where she develops a reputation for intelligence and beauty. She first meets Kuni Garu when he cleverly defies a corrupt corvée administrator, an act that brings him to her attention and inspires him to seek a more respectable life." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
                { type: 'text', content: " Jia's intelligence and spirit inspire Kuni to change his ways and pursue a more honorable path. Their relationship develops into a deep partnership based on mutual respect and shared goals." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
            ]
        },
        {
            era: "The Rebellion and Rise to Power",
            summary: [
                { type: 'text', content: "During the rebellion against Emperor Mapidéré, Jia serves as Kuni's political advisor and strategist. Her understanding of court politics and human nature proves invaluable to the success of the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
                { type: 'text', content: " Jia's political acumen helps Kuni navigate the complex web of alliances and rivalries that characterize the rebellion. She becomes known as the 'Political Architect' of the Dandelion Dynasty, shaping the new empire's governance structure." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/the-grace-of-kings#chapter-36" } },
            ]
        },
        {
            era: "Empress Jia and Court Politics",
            summary: [
                { type: 'text', content: "As Empress Jia, she becomes one of the most powerful figures in the empire, working alongside her husband to establish the Dandelion Dynasty. She plays a crucial role in managing the complex politics of the court and maintaining stability." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/the-wall-of-storms#chapter-3" } },
                { type: 'text', content: " Jia's relationship with Consort Risana, Kuni's second wife, becomes a source of tension within the court. The two women represent different approaches to power and influence, creating a subtle but significant political rivalry." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
            ]
        },
        {
            era: "The Grand Examination and Meritocracy",
            summary: [
                { type: 'text', content: "Jia plays a key role in establishing the Grand Examination system, which selects officials based on merit rather than birth. This innovation represents a fundamental shift in Dara's governance and reflects her commitment to creating a more just society." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
                { type: 'text', content: " The examination system becomes one of the Dandelion Dynasty's most important legacies, opening up opportunities for talented individuals from all backgrounds to serve the empire." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 9, link: "/books/the-wall-of-storms#chapter-9" } },
            ]
        },
        {
            era: "The Lyucu Crisis and Political Intrigue",
            summary: [
                { type: 'text', content: "When the Lyucu Empire invades Dara, Jia faces the challenge of maintaining stability while preparing for war. Her pragmatic approach to politics is tested as she must balance various factions and interests within the court." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
                { type: 'text', content: " During the crisis, Jia demonstrates her political skill by managing the complex web of alliances and rivalries that emerge. She becomes increasingly focused on maintaining control and stability in the face of external threats." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 30, link: "/books/the-wall-of-storms#chapter-30" } },
            ]
        },
        {
            era: "Conflict with Zomi Kidosu",
            summary: [
                { type: 'text', content: "In Speaking Bones, Jia's relationship with Zomi Kidosu becomes increasingly strained. The two women, once allies, find themselves on opposite sides of a political divide over how to respond to Princess Théra's rebellion." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
                { type: 'text', content: " Jia, ever the pragmatist, is skeptical of the message from Théra and wary of the political instability it could cause. She sees Théra's return as a threat to her carefully laid plans for the empire and her son, Emperor Phyro." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
                { type: 'text', content: " The conflict between Jia and Zomi represents a fundamental philosophical difference in their approaches to governance: Zomi's faith in radical transparency and innovation versus Jia's belief in control and stability." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 5, link: "/books/speaking-bones#chapter-5" } },
            ]
        },
        {
            era: "Political Manipulation and Control",
            summary: [
                { type: 'text', content: "As the resistance movement grows, Jia demonstrates her mastery of political intrigue by secretly manipulating events to serve her own long-term goals. She begins to feed Zomi's network misinformation, steering the rebellion in directions that serve her interests." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 8, link: "/books/speaking-bones#chapter-8" } },
                { type: 'text', content: " Jia's actions reveal her ruthless pragmatism and her profound understanding of human nature. She is willing to use any means necessary to maintain control and protect the empire she helped build." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 8, link: "/books/speaking-bones#chapter-8" } },
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