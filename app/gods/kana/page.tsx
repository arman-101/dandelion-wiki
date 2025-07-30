import GodPageTemplate from '../../components/GodPageTemplate';
import { God } from '../../data/wiki-data';

// --- DATA FOR KANA ---
const godData: God = {
    name: "Kana",
    image: "/gods/kana.png",
    introduction: "Kana is one of the twin patrons of Cocru, sister to Rapa. She is a formidable and often terrifying goddess who presides over fire, ash, cremation, and death.",
    infoBox: {
        Patronage: { text: "Cocru", link: "/places/cocru" },
        Domains: "Fire, Ash, Cremation, Death",
        Pawi: "Black Raven",
        Twin: "Rapa"
    },
    mythology: [
        { type: 'text', content: "As a daughter of Daraméa, Kana represents one of the most destructive and transformative forces in the world. Her presence is often felt in moments of great calamity, such as volcanic eruptions and the fires of war." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/wall-of-storms#chapter-2" } },
        { type: 'text', content: " She and her twin, Rapa, are intrinsically linked, representing the dual nature of existence—the heat of life and the cold of sleep, the finality of death and the peace of rest." },
    ],
    appearances: [
        {
            event: "The Temptation of Mata Zyndu",
            summary: [
                { type: 'text', content: "Disguised as an old woman, Kana appears to Mata Zyndu on the shores of Wolf's Paw. Knowing his desperation to move his army, she tempts him with a ruthless plan: to sacrifice his 20,000 prisoners to the god Tazu in exchange for safe passage through the Kishi Channel. Mata agrees, leading to one of his most infamous atrocities." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/grace-of-kings#chapter-31" } },
            ]
        },
    ]
};


export default function KanaPage() {
    return <GodPageTemplate godData={godData} />;
}