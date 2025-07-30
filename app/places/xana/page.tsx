import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR XANA (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Xana",
    image: "/places/xana.png",
    introduction: "Xana is a powerful Tiro state in the northwest of Dara, composed of the twin islands of Rui and Dasu. Under the leadership of Emperor Mapidéré, Xana used its superior airship technology to conquer the other six states, founding the first unified Empire of Dara. Its patron god is Kiji, the Lord of the Air.",
    infoBox: {
        Region: "Northwestern Dara",
        Capital: "Kriphi (former)",
        PatronGod: { text: "Kiji", link: "/gods/kiji" },
        NotableCharacters: [
            { text: "Emperor Mapidéré", link: "/characters/emperor-mapidere" },
            { text: "Goran Pira", link: "/characters/goran-pira" },
            { text: "Lügo Crupo", link: "/characters/lugo-crupo" },
        ],
    },
    geography: [
        { type: 'text', content: "Xana is an archipelago state, primarily consisting of the islands Rui and Dasu." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/grace-of-kings#chapter-20" } },
        { type: 'text', content: " The island of Rui is dominated by the massive, snow-peaked volcano, Mount Kiji. A mystical lake within its crater, Lake Dako, is the sole source of the invaluable lift gas that powers the empire's airships, making it the strategic heart of Xana's military power." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/grace-of-kings#chapter-20" } },
    ],
    culture: [
        { type: 'text', content: "Xana's culture is highly organized, disciplined, and militaristic, which enabled its successful conquest of Dara. They possessed superior technology, particularly in aeronautics, giving them a decisive advantage in the Unification Wars." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/grace-of-kings#chapter-20" } },
        { type: 'text', content: " As rulers of the empire, they established a rigid and often corrupt bureaucracy, imposing heavy taxes and forced labor (corvée) upon the conquered peoples, which eventually led to widespread rebellion." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/grace-of-kings#chapter-6" } },
    ],
    history: [
        {
            event: "The Unification Wars",
            summary: [
                { type: 'text', content: "Led by King Réon, who would later style himself Emperor Mapidéré, Xana launched a massive campaign of conquest. Using its technologically advanced fleet of airships powered by the gas from Mount Kiji, Xana systematically defeated the other six Tiro states, unifying the Islands of Dara into an empire for the first time in history." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/grace-of-kings#chapter-4" } },
            ]
        },
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "After the death of Mapidéré, the empire's brutal policies led to a massive rebellion across the conquered states. The Xana homeland became the last bastion of Imperial power, from which commanders like Kindo Marana and Tanno Namen attempted to quell the uprising." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 13, link: "/books/grace-of-kings#chapter-13" } },
                { type: 'text', content: " Ultimately, Kuni Garu's forces, under the command of Marshal Gin Mazoti, used Emperor Mapidéré's own abandoned Grand Tunnels to launch a surprise attack on Rui, conquering the Xana homeland and effectively ending the empire." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/grace-of-kings#chapter-43" } },
            ]
        },
    ]
};


export default function XanaPage() {
    return <PlacePageTemplate placeData={placeData} />;
}