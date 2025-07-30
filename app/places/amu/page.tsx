import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR AMU (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Amu",
    image: "/places/amu.png",
    introduction: "Amu is one of the seven original states of Tiro, located in north-central Dara. It includes the island of Arulugi and the fertile mainland region of Géfica. Amu is known for its elegance, sophistication, and the divine patronage of Tututika, the goddess of agriculture and beauty.",
    infoBox: {
        Region: "North-central Dara",
        Capital: "Müning",
        PatronGod: { text: "Tututika", link: "/gods/tututika" },
        NotableCharacters: [
            { text: "Consort Risana", link: "/characters/consort-risana" },
            { text: "Princess Kikomi", link: "/characters/princess-kikomi" },
        ],
    },
    geography: [
        { type: 'text', content: "The state of Amu is split between the medium-sized island of Arulugi and the northeastern region of the Big Island." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 38, link: "/books/grace-of-kings#chapter-38" } },
        { type: 'text', content: " The island of Arulugi, whose name means 'beautiful' in Classical Ano, features white sand beaches, green hills, and deep jungle valleys. Its capital, Müning, is a 'City in the Lake,' built atop several small islands in the shallow Lake Toyemotika." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/grace-of-kings#chapter-24" } },
        { type: 'text', content: " The mainland portion of Amu contains the fertile fields of Géfica, which spread parallel to the Liru River. It is also home to Lake Tututika and the Imperial Capital of Pan." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 26, link: "/books/grace-of-kings#chapter-26" } },
    ],
    culture: [
        { type: 'text', content: "Amu culture is considered the most refined and sophisticated in Dara. The capital of Müning resembles a 'filigreed diadem floating over the water,' with tall, narrow houses connected by a network of arching bridges and hanging platforms." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/grace-of-kings#chapter-24" } },
        { type: 'text', content: " The people of Amu place a high value on poetry, music, and aesthetics, and its nobles are known for dancing at night in silk slippers and sipping tea. Floating gardens of fruits and vegetables drift around the islands of the capital." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/grace-of-kings#chapter-24" } },
    ],
    history: [
        {
            event: "The Unification Wars",
            summary: [
                { type: 'text', content: "During Emperor Mapidéré's conquest of the Tiro states, Amu was a key battleground. The Imperial forces under Kindo Marana eventually conquered the island of Arulugi in a major naval and aerial battle." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 24, link: "/books/grace-of-kings#chapter-24" } },
            ]
        },
        {
            event: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "After the fall of the Xana Empire, Amu was re-established as an independent state. Following the Chrysanthemum-Dandelion War, Emperor Ragin granted the island of Arulugi to Théca Kimo as a dukedom, while the mainland portion, Géfica, was given to Kuni Garu himself." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 35, link: "/books/grace-of-kings#chapter-35" } },
            ]
        },
    ]
};


export default function AmuPage() {
    return <PlacePageTemplate placeData={placeData} />;
}