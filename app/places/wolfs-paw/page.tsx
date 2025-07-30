import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR WOLF'S PAW (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Wolf's Paw",
    image: "/places/wolfs-paw.png",
    introduction: "Wolf's Paw is a large southern island that constitutes a major part of the state of Gan. It is a strategically vital location, separated from the mainland by the infamous Kishi Channel, and was the site of one of the most pivotal and brutal battles of the Dandelion Rebellion.",
    infoBox: {
        Region: "Gan, Southern Dara",
        PatronGod: { text: "Tazu", link: "/gods/tazu" },
        NotableFeatures: "Kishi Channel",
    },
    geography: [
        { type: 'text', content: "A large island that forms the heart of Gan, Wolf's Paw is separated from the Itanti Peninsula on the Big Island by the Kishi Channel. This channel is home to a massive, permanent whirlpool, making naval passage extremely dangerous and often impossible." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/grace-of-kings#chapter-31" } },
    ],
    culture: [
        { type: 'text', content: "As part of Gan, the culture on Wolf's Paw is sophisticated and trade-oriented. Its strategic position makes it a key naval territory." },
    ],
    history: [
        {
            event: "Battle of Wolf's Paw",
            summary: [
                { type: 'text', content: "This island was the site of the decisive battle where Mata Zyndu's rebel forces faced the combined Imperial armies of Kindo Marana and Tanno Namen. Despite being betrayed by his allies from Faça and Gan, Mata's personal prowess won the day, leading to the capture of Marana and the suicide of Namen." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/grace-of-kings#chapter-29" } },
            ]
        },
        {
            event: "The Slaughter at Wolf's Paw",
            summary: [
                { type: 'text', content: "Following the battle, Mata was trapped on the island by a naval blockade. To secure passage, he made a horrific pact with the god Tazu, sacrificing 20,000 surrendered Imperial prisoners to the whirlpool in the Kishi Channel. This act earned him the name 'Butcher of Wolf's Paw' and forever stained his honor." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/grace-of-kings#chapter-31" } },
            ]
        },
    ]
};


export default function WolfsPawPage() {
    return <PlacePageTemplate placeData={placeData} />;
}