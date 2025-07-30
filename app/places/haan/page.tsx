import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR HAAN (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Haan",
    image: "/places/haan.png",
    introduction: "Haan is a woodsy and learned Tiro state in the northern half of the Big Island, renowned for its deep philosophical traditions, prestigious academies, and skilled inventors. Its patron god is Lutho, the god of knowledge and divination.",
    infoBox: {
        Region: "Northern Dara",
        Capital: "Ginpen",
        PatronGod: { text: "Lutho", link: "/gods/lutho" },
        NotableCharacters: [
            { text: "Luan Zya", link: "/characters/luan-zya" },
            { text: "Kita Thu", link: "/characters/kita-thu" },
        ],
    },
    geography: [
        { type: 'text', content: "Located in the northern part of the Big Island, Haan is characterized by its dense forests and proximity to the Damu Mountains." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/grace-of-kings#chapter-18" } },
        { type: 'text', content: " Its capital, Ginpen, is famed for its private academies and is considered a major center of learning, rivaling even Pan." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/grace-of-kings#chapter-18" } },
        { type: 'text', content: " The Zathin Gulf is a notable body of water within its territory." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 15, link: "/books/grace-of-kings#chapter-15" } },
    ],
    culture: [
        { type: 'text', content: "Haanese culture places a profound emphasis on scholarship, philosophy, and invention. The people are known for their intellectual pursuits and contributions to the Hundred Schools of thought." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/grace-of-kings#chapter-18" } },
        { type: 'text', content: " It was the birthplace of many famous scholars and engineers, including the Zya family. The state's artisans were also known for creating advanced technologies, such as the man-lifting kite used in the assassination attempt on Emperor Mapidéré." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
    ],
    history: [
        {
            event: "The Unification Wars",
            summary: [
                { type: 'text', content: "Haan was one of the last states to fall to Emperor Mapidéré's conquest, and its people harbored a deep resentment towards the Xana Empire. This resentment fueled assassination plots and resistance movements, such as Luan Zya's daring kite attack." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
            ]
        },
        {
            event: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "During the Grand Examinations under Emperor Ragin, scholars from Haan performed exceptionally well, reflecting the state's strong academic traditions. This success, however, caused political tension and accusations of bias from other regions." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 15, link: "/books/wall-of-storms#chapter-15" } },
            ]
        },
    ]
};


export default function HaanPage() {
    return <PlacePageTemplate placeData={placeData} />;
}