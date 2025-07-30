import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR GAN (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Gan",
    image: "/places/gan.png",
    introduction: "Gan is a wealthy and sophisticated Tiro state in southern Dara, comprised of the island of Wolf's Paw and, historically, the rich mainland territory of Géjira. It is a major naval and economic power, and its patron god is Tazu, the chaotic master of the seas.",
    infoBox: {
        Region: "Southern Dara",
        Capital: "Toaza",
        PatronGod: { text: "Tazu", link: "/gods/tazu" },
        NotableCharacters: [
            { text: "King Mocri", link: "/characters/king-mocri" },
            { text: "Naroca Huza", link: "/characters/naroca-huza" },
        ],
    },
    geography: [
        { type: 'text', content: "The state of Gan primarily occupies the large southern island of Wolf's Paw. It is separated from the mainland's Itanti Peninsula by the treacherous Kishi Channel, which is home to a deadly whirlpool." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/grace-of-kings#chapter-31" } },
        { type: 'text', content: " Historically, Gan also controlled the fertile alluvial plains of Géjira on the Big Island, making it an agricultural powerhouse. Its capital, Toaza, is a bustling port city known as the 'Port That Never Slept'." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 35, link: "/books/grace-of-kings#chapter-35" } },
    ],
    culture: [
        { type: 'text', content: "Gan's culture is defined by its wealth, sophistication, and maritime focus. As a major trading state, its people are cosmopolitan and its merchants are influential across Dara." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 13, link: "/books/wall-of-storms#chapter-13" } },
        { type: 'text', content: " The state is also known for its skilled artisans, particularly its lace makers." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 9, link: "/books/wall-of-storms#chapter-9" } },
    ],
    history: [
        {
            event: "Rebellion against Xana",
            summary: [
                { type: 'text', content: "Gan was a key member of the Tiro alliance during the rebellion against the Xana Empire, with its champion, King Mocri, being a respected figure among the rebels." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 12, link: "/books/grace-of-kings#chapter-12" } },
                { type: 'text', content: " However, during the pivotal Battle of Wolf's Paw, the armies of Gan, alongside those of Faça, pragmatically betrayed Mata Zyndu by holding back their forces, showcasing a willingness to prioritize self-preservation over alliances." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/grace-of-kings#chapter-29" } },
            ]
        },
        {
            event: "The Hegemony and Dandelion Dynasty",
            summary: [
                { type: 'text', content: "As punishment for their betrayal, Hegemon Mata Zyndu stripped Gan of its rich mainland territory of Géjira, which was later granted to Marshal Gin Mazoti." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 35, link: "/books/grace-of-kings#chapter-35" } },
                { type: 'text', content: " This significantly diminished Gan's power, though it remained an important naval and economic state within Emperor Ragin's new empire." },
            ]
        },
    ]
};


export default function GanPage() {
    return <PlacePageTemplate placeData={placeData} />;
}