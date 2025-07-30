import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR FAÇA (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Faça",
    image: "/places/faca.png",
    introduction: "Faça is a craggy, northern Tiro state located on the Big Island. It is known for its foggy highlands, hardy people, rich wool production, and a unique tradition of street magic based on the 'silkmotic force.' Its patron god is Rufizo, the Divine Healer.",
    infoBox: {
        Region: "Northern Dara",
        Capital: "Boama",
        PatronGod: { text: "Rufizo", link: "/gods/rufizo" },
        NotableCharacters: [
            { text: "King Shilué", link: "/characters/king-shilue" },
            { text: "Miza Crun", link: "/characters/miza-crun" },
        ],
    },
    geography: [
        { type: 'text', content: "Faça occupies the northern half of the Big Island, characterized by rocky highlands that are often shrouded in fog." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/grace-of-kings#chapter-48" } },
        { type: 'text', content: " The landscape is rugged and mountainous, suitable for sheep pastures which are a key part of its economy. The famed Rufizo Falls, whose mists are celebrated in song, are located within its borders." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/grace-of-kings#chapter-48" } },
    ],
    culture: [
        { type: 'text', content: "The people of Faça are known to be hardy and resilient, shaped by their challenging environment. The state is a major producer of wool." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/grace-of-kings#chapter-48" } },
        { type: 'text', content: " Faça has a unique and famous tradition of street performers and magicians who have developed a practical science around the 'silkmotic force' (static electricity), creating elaborate illusions and devices for entertainment and, later, for warfare." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 25, link: "/books/wall-of-storms#chapter-25" } },
    ],
    history: [
        {
            event: "Rebellion against Xana",
            summary: [
                { type: 'text', content: "Like the other Tiro states, Faça re-established its independence during the rebellion against the Xana Empire." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/grace-of-kings#chapter-12" } },
            ]
        },
        {
            event: "The Marshal's Gambit",
            summary: [
                { type: 'text', content: "During the Chrysanthemum-Dandelion War, King Shilué of Faça attempted to remain neutral and play both sides. When Gin Mazoti marched her army into his territory, he welcomed her, believing he could manipulate the situation to his advantage. Gin saw through his treachery, promptly had him executed, and conquered the state, declaring herself Queen of both Rima and Faça." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/grace-of-kings#chapter-48" } },
            ]
        },
    ]
};


export default function FacaPage() {
    return <PlacePageTemplate placeData={placeData} />;
}