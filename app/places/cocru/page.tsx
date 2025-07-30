import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR COCRU (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Cocru",
    image: "/places/cocru.png",
    introduction: "Cocru is a vast, martial Tiro state in the southern region of the Big Island, famed for its sun-scorched plains and proud warrior traditions. It is the homeland of both Kuni Garu and the legendary Zyndu clan, and its divine patrons are the twin gods Kana and Rapa.",
    infoBox: {
        Region: "Southern Dara",
        Capital: "Çaruza",
        PatronGods: { text: "Kana & Rapa", link: "/gods" },
        NotableCharacters: [
            { text: "Mata Zyndu", link: "/characters/mata-zyndu" },
            { text: "Kuni Garu", link: "/characters/kuni-garu" },
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
            { text: "King Thufi", link: "/characters/king-thufi" },
        ],
    },
    geography: [
        { type: 'text', content: "Located on the southern half of the Big Island, Cocru is characterized by its wide, sun-parched alluvial plains, such as the Porin Plains." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
        { type: 'text', content: " Its northern border is defined by the Liru River, which separates it from the state of Amu. The twin cities of Dimu (in Cocru) and Dimushi (in Amu) sit on opposite sides of this river, marking a key strategic crossing." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 16, link: "/books/grace-of-kings#chapter-16" } },
    ],
    culture: [
        { type: 'text', content: "Cocru's culture is deeply martial, valuing strength, honor, and military prowess above all else. Its academies are unique in that they teach the martial arts of wrestling, boxing, and swordsmanship alongside traditional scholarship." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 7, link: "/books/wall-of-storms#chapter-7" } },
        { type: 'text', content: " The people are known for being direct, proud, and fiercely loyal to their leaders and traditions. The state is the ancestral home of the Marshals of Cocru, a title held by the esteemed Zyndu clan." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/grace-of-kings#chapter-2" } },
    ],
    history: [
        {
            event: "Rebellion against Xana",
            summary: [
                { type: 'text', content: "Cocru was a hotbed of rebellion against the Xana Empire. After the initial uprising by Huno Krima, the people of Cocru found a legitimate heir to their throne, a shepherd named Thufi, and crowned him king in the capital of Çaruza." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/grace-of-kings#chapter-12" } },
                { type: 'text', content: " Mata Zyndu was named Marshal of Cocru and led its armies, becoming the rebellion's most formidable military leader." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 17, link: "/books/grace-of-kings#chapter-17" } },
            ]
        },
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "During the civil war, Cocru served as the primary power base for Mata Zyndu in his role as Hegemon. It was from here that he governed the Tiro states and waged his long war against Kuni Garu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 35, link: "/books/grace-of-kings#chapter-35" } },
            ]
        },
    ]
};


export default function CocruPage() {
    return <PlacePageTemplate placeData={placeData} />;
}