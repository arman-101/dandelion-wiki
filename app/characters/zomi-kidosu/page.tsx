'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ZOMI KIDOSU (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const characterData: Character = {
    name: "Zomi Kidosu",
    image: "/characters/zomi-kidosu.png",
    introduction: "Zomi Kidosu is a brilliant scholar and radical thinker who rises from humble origins to become one of the most influential figures in the Dandelion Dynasty. Her journey from a crippled child in Dasu to a key advisor in the imperial court represents the dandelion philosophy in action.",
    infoBox: {
        aliases: "Mimi (birth name), Pearl of Fire",
        occupation: "Scholar, Grand Examination Winner, Imperial Advisor",
        placeOfBirth: { text: "Dasu", link: "/places/dasu-rui" },
        status: "Alive",
        gender: "Female",
        relatives: "Oga Kidosu (father), Aki Kidosu (mother)",
        affiliation: "Dandelion Court, Imperial Bureaucracy",
        nationality: { text: "Dara", link: "/places/dara" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Zomi Kidosu is described as having a scarred face and a paralyzed left leg, the result of being struck by lightning during a childhood vision. Despite her physical limitations, she possesses an extraordinary intellect and a fierce, independent spirit." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
        { type: 'text', content: " Her personality is marked by her radical thinking, her impatience with tradition and inefficiency, and her deep commitment to meritocracy and social justice. She has a unique way of approaching problems, often seeing solutions that others miss." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/the-wall-of-storms#chapter-7" } },
    ],
    history: [
        {
            era: "Early Life and Tragedy",
            summary: [
                { type: 'text', content: "Born as Mimi to a poor fishing-farming family in Dasu, Zomi's life is marked by tragedy from the beginning. On the day of her birth, a great storm destroys Emperor Mapidéré's expedition to find the Land of the Immortals, and her father Oga is conscripted into the search party and lost at sea." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
                { type: 'text', content: " At age five, Zomi is struck by lightning during a vision of a divine battle between the pawi of Lutho (a turtle) and Tazu (a shark). The incident leaves her with a scarred face and a paralyzed left leg, but also awakens her extraordinary intellect." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
            ]
        },
        {
            era: "Education Under Luan Zya",
            summary: [
                { type: 'text', content: "Zomi's life changes when she encounters a mysterious learned man named 'Toru Noki' in the market. Impressed by her raw intelligence and unique way of thinking, he reveals himself to be the legendary Luan Zya and offers to become her teacher." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/the-wall-of-storms#chapter-5" } },
                { type: 'text', content: " Luan Zya begins Zomi's education, teaching her engineering principles, diverse philosophies, and the construction of ideas using logograms. He invents a revolutionary mechanical leg brace that allows her to walk with ease, and bestows upon her the formal name Zomi, meaning 'Pearl of Fire.'" },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/the-wall-of-storms#chapter-7" } },
            ]
        },
        {
            era: "Advanced Studies and Philosophical Development",
            summary: [
                { type: 'text', content: "Luan Zya continues Zomi's education aboard his hot-air balloon, Curious Turtle, teaching her to fly by understanding wind patterns and introducing her to the philosophies of Patternism and Incentivism. Zomi's quick, practical mind often clashes with Luan's more abstract teachings." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 10, link: "/books/the-wall-of-storms#chapter-10" } },
                { type: 'text', content: " Despite their differences, Zomi proves to be a brilliant student, grasping complex concepts through her own unique and often humorous lens. Their journey over the sea, where they witness a cruben, solidifies their deep teacher-student bond." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 10, link: "/books/the-wall-of-storms#chapter-10" } },
            ]
        },
        {
            era: "Arrival in Pan and the Grand Examination",
            summary: [
                { type: 'text', content: "Zomi arrives in Pan to take the first Grand Examination of the Dandelion Dynasty. Her journey is marked by a confrontation with a bully at the Three-Legged Jug tavern, where she demonstrates her courage and quick thinking, earning the admiration of Princess Théra and Prince Phyro." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#chapter-1" } },
                { type: 'text', content: " During the grueling three-day examination, Zomi endures immense pressure and strict conditions. She completes her essay on proposing a single policy to improve the lives of the people, feeling she has done her best but knowing her fate is now out of her hands." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 4, link: "/books/the-wall-of-storms#chapter-4" } },
            ]
        },
        {
            era: "The Palace Examination and Court Politics",
            summary: [
                { type: 'text', content: "Zomi is among the top ten scholars who present their policy proposals to the emperor and assembled court. Her radical ideas and unconventional thinking make her stand out, though they also make her a target for conservative factions within the court." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 9, link: "/books/the-wall-of-storms#chapter-9" } },
                { type: 'text', content: " As she becomes involved in court politics, Zomi begins to understand the complex web of alliances and rivalries that govern the empire. She forms important relationships with key figures, including Princess Théra, who shares her interest in innovation and reform." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 16, link: "/books/the-wall-of-storms#chapter-16" } },
            ]
        },
        {
            era: "The Lyucu Crisis and Political Intrigue",
            summary: [
                { type: 'text', content: "When the Lyucu Empire invades Dara, Zomi witnesses the devastating power of the garinafin war beasts and the limitations of Dara's traditional military. She begins to advocate for radical reforms and technological innovation to counter the threat." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
                { type: 'text', content: " During the crisis, Zomi becomes increasingly involved in political intrigue, working with various factions to develop strategies for resistance. Her radical ideas and willingness to challenge traditional authority make her both an asset and a liability to the court." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 30, link: "/books/the-wall-of-storms#chapter-30" } },
            ]
        },
        {
            era: "The Message from Théra and Continued Resistance",
            summary: [
                { type: 'text', content: "Years after Princess Théra's expedition through the Wall of Storms, Zomi receives a package containing a turtle shell with a secret message from Théra, confirming that she is alive and leading a rebellion in Ukyu-Gondé." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 1, link: "/books/speaking-bones#chapter-1" } },
                { type: 'text', content: " The discovery reignites Zomi's hope and sets her on a new path. She begins to secretly build a coalition of allies to support Théra's cause, putting her in direct conflict with Empress Jia and the established order." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
                { type: 'text', content: " Zomi's idealism is tested as she is forced to adopt the same methods of secrecy and manipulation that she once condemned. She becomes a key figure in the resistance movement, working to undermine Lyucu influence and support Théra's rebellion." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 5, link: "/books/speaking-bones#chapter-5" } },
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