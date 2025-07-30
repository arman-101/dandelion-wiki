import GodPageTemplate from '../../components/GodPageTemplate';
import { God } from '../../data/wiki-data';

// --- DATA FOR RAPA ---
const godData: God = {
    name: "Rapa",
    image: "/gods/rapa.png",
    introduction: "Rapa is one of the twin patrons of Cocru, sister to Kana. A serene and patient deity, she governs the domains of ice, snow, glaciers, and sleep.",
    infoBox: {
        Patronage: { text: "Cocru", link: "/places/cocru" },
        Domains: "Ice, Snow, Glaciers, Sleep",
        Pawi: "White Raven",
        Twin: "Kana"
    },
    mythology: [
        { type: 'text', content: "Representing the quiet, stilling forces of nature, Rapa is the counterpart to her fiery twin, Kana. She embodies the peace of sleep and the patient, enduring power of ice. In the story of the Calendrical Dozen, the alliance of fire and ice between the twins allowed them to be among the first to find the hidden gods." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "The Dream of Emperor Mapidéré",
            summary: [
                { type: 'text', content: "Rapa appears in Emperor Mapidéré's deathbed dream, participating in the debate among the gods over his legacy. Her presence signifies the coming 'sleep' of the Xana Empire and the end of an era." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/grace-of-kings#chapter-5" } },
            ]
        },
    ]
};


export default function RapaPage() {
    return <GodPageTemplate godData={godData} />;
}