import GodPageTemplate from '../../components/GodPageTemplate';
import { God } from '../../data/wiki-data';

// --- DATA FOR LUTHO ---
const godData: God = {
    name: "Lutho",
    image: "/gods/lutho.png",
    introduction: "Lutho is the wise and patient patron god of Haan. He governs the domains of fishermen, divination, mathematics, and knowledge.",
    infoBox: {
        Patronage: { text: "Haan", link: "/places/haan" },
        Domains: "Fishermen, Divination, Mathematics, Knowledge",
        Pawi: "Sea Turtle",
    },
    mythology: [
        { type: 'text', content: "Lutho is one of the most intellectually inclined gods, representing the pursuit of wisdom and the understanding of patterns. He is a calm and contemplative figure who often guides mortals with riddles and subtle hints rather than direct intervention." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/grace-of-kings#chapter-5" } },
        { type: 'text', content: " In the tale of the Calendrical Dozen, he was discovered by the whales, to whom he offered only mysterious gestures, suggesting that some lessons must be understood through contemplation rather than words." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "Mentoring Luan Zya",
            summary: [
                { type: 'text', content: "Disguised as a mysterious teacher, Lutho finds the wandering Luan Zya and gifts him Gitré Üthu, a magical self-writing book. This act provides Luan with the strategic knowledge necessary to aid Kuni Garu's rebellion, showcasing Lutho's method of empowering mortals with knowledge rather than direct aid." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/grace-of-kings#chapter-18" } },
            ]
        },
    ]
};


export default function LuthoPage() {
    return <GodPageTemplate godData={godData} />;
}