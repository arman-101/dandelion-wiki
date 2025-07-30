import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR DASU & RUI (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Dasu & Rui",
    image: "/places/dasu-rui.png",
    introduction: "Dasu and Rui are the twin home islands of the state of Xana. Rui, dominated by the volcano Mount Kiji, is the heart of Xana's military and technological power, while Dasu is its political and civilian center.",
    infoBox: {
        Region: "Xana, Northwestern Dara",
        Capital: "Daye (Dasu)",
        PatronGod: { text: "Kiji", link: "/gods/kiji" },
        NotableFeatures: "Mount Kiji, Imperial Air Base, Grand Tunnels",
    },
    geography: [
        { type: 'text', content: "Rui is a mountainous, volcanic island. Its most significant feature is Mount Kiji, a snow-peaked volcano whose crater lake, Lake Dako, is the sole source of the invaluable lift gas used in Imperial airships." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/grace-of-kings#chapter-20" } },
        { type: 'text', content: " Dasu is a less rugged island, home to the capital city of Daye. The islands are connected by one of Emperor Mapidéré's ambitious engineering projects: the Grand Tunnels, which run under the sea." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/grace-of-kings#chapter-43" } },
    ],
    culture: [
        { type: 'text', content: "The culture of the home islands is highly disciplined and militaristic, a necessity for the conquest and administration of the empire. The people of Dasu, particularly, were known for their stoicism and adherence to order." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/wall-of-storms#chapter-5" } },
    ],
    history: [
        {
            event: "The Seat of Empire",
            summary: [
                { type: 'text', content: "For decades, Dasu and Rui served as the political and military heart of the Xana Empire. From here, Emperor Mapidéré ruled, and commanders like Kindo Marana organized their campaigns. The Imperial Air Base on Mount Kiji was the ultimate symbol of Xana's technological supremacy." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/grace-of-kings#chapter-20" } },
            ]
        },
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "After Mata Zyndu exiled Kuni Garu, he granted the island of Dasu to Kuni as a seemingly worthless fiefdom, not realizing its strategic importance or Kuni's ability to transform it." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 35, link: "/books/grace-of-kings#chapter-35" } },
                { type: 'text', content: " Later in the war, Marshal Gin Mazoti led a surprise attack through the Grand Tunnels to capture Rui, a decisive blow that crippled Mata's war effort by cutting off his access to new airships." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/grace-of-kings#chapter-43" } },
            ]
        },
    ]
};


export default function DasuRuiPage() {
    return <PlacePageTemplate placeData={placeData} />;
}