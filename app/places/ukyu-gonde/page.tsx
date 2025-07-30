import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR UKYU & GONDÉ (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Ukyu & Gondé",
    image: "/places/ukyu-gonde.png",
    introduction: "Ukyu and Gondé are the two vast, harsh continents across the eastern sea from Dara, collectively known as the Lyucu Lands. They are the homeland of the Lyucu, a nomadic and fierce warrior people who launch a massive invasion of Dara.",
    infoBox: {
        Region: "Eastern Continent",
        Capital: "Ukyu-Gondé",
        NotableInhabitants: "The Lyucu people",
        NotableCharacters: [
            { text: "Emperor Rídaro", link: "/characters/ridaro" },
            { text: "Princess Mirror", link: "/characters/princess-mirror" },
            { text: "Prince Coda", link: "/characters/prince-coda" },
        ],
    },
    geography: [
        { type: 'text', content: "Separated from Dara by the Wall of Storms, the Lyucu Lands consist of vast, windswept scrublands and harsh, arid plains." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 0, link: "/books/wall-of-storms" } }, // Corrected 'Map' to 'chapter'
        { type: 'text', content: " The environment is challenging, leading its inhabitants to adopt a nomadic lifestyle. The land is home to massive, fearsome beasts like the garinafin, which the Lyucu have domesticated for war." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/wall-of-storms#chapter-46" } },
    ],
    culture: [
        { type: 'text', content: "Lyucu culture is martial, nomadic, and highly hierarchical. Society is organized into clans, all under the absolute rule of the Pékyu Emperor. They are masters of animal husbandry, particularly with their giant garinafin war mounts, and possess a deep, almost spiritual connection to these beasts." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/wall-of-storms#chapter-46" } },
        { type: 'text', content: " Their technology and philosophy are vastly different from Dara's, relying on brute force, disciplined conquest, and a rigid social order rather than the diverse 'Hundred Schools' of thought found in the west." },
    ],
    history: [
        {
            event: "The Invasion of Dara",
            summary: [
                { type: 'text', content: "After generations of isolation, the Lyucu people, united under a powerful emperor, developed massive 'city-ships' capable of crossing the Wall of Storms. Their subsequent invasion of Dara is the central conflict of the latter half of the Dandelion Dynasty saga, pitting their overwhelming force against the ingenuity and determination of the people of Dara." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 35, link: "/books/wall-of-storms#chapter-35" } },
            ]
        },
    ]
};


export default function UkyuGondePage() {
    return <PlacePageTemplate placeData={placeData} />;
}