import GodPageTemplate from '../../components/GodPageTemplate';
import { God } from '../../data/wiki-data';

// --- DATA FOR KIJI ---
const godData: God = {
    name: "Kiji",
    image: "/gods/kiji.png",
    introduction: "Kiji is the patron god of Xana, revered as the Lord of the Air and the master of wind, flight, and birds.",
    infoBox: {
        Patronage: { text: "Xana", link: "/places/xana" },
        Domains: "Air, Wind, Flight, Birds",
        Pawi: "Mingén Falcon",
        Appearance: "Favors a white traveling cloak"
    },
    mythology: [
        { type: 'text', content: "As one of the eight children of Daraméa and Thasoluo, Kiji is a central figure in the Dara pantheon. He is often depicted as proud and concerned with grand visions and the sweep of history, sometimes at the expense of mortal details." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/grace-of-kings#chapter-5" } },
        { type: 'text', content: " During the Diaspora Wars, he blinded his brother Fithowéo in a duel, an act that defined their later relationship." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "Temptation of Gin Mazoti",
            summary: [
                { type: 'text', content: "Disguised as a beggar in a white cape, Kiji visits Gin Mazoti in Boama. He tempts her to betray Kuni Garu, arguing that a ruler will always grow to fear a subordinate who is too powerful. Gin, however, rejects his cynical view of power and reaffirms her loyalty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 49, link: "/books/grace-of-kings#chapter-49" } },
            ]
        },
        {
            event: "The Invasion of Dara",
            summary: [
                { type: 'text', content: "After the Lyucu invasion, Kiji is the most vocal of the gods in his anger and desire for intervention, as his home island of Rui and his sacred Mount Kiji have been desecrated. He is frustrated by the other gods' adherence to their pact of non-interference." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/wall-of-storms#chapter-40" } },
            ]
        },
    ]
};


export default function KijiPage() {
    return <GodPageTemplate godData={godData} />;
}