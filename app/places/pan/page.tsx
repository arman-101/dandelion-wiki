import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR PAN (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Pan",
    image: "/places/pan.png",
    introduction: "Pan, known as the 'Immaculate City,' was the grand Imperial capital built by Emperor Mapidéré to centralize his rule over Dara. It is located on the mainland portion of Amu, near Lake Tututika.",
    infoBox: {
        Region: "Amu, Northern Dara",
        Type: "Imperial Capital",
        BuiltBy: "Emperor Mapidéré",
        NotableFeatures: "Wide avenues, nine administrative bureaus, Palace of the Mists of the Mind",
    },
    geography: [
        { type: 'text', content: "Pan is a meticulously planned city, designed for both grandeur and administrative efficiency. It is located near Lake Tututika and is connected to the southern states via the Liru River." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/grace-of-kings#chapter-9" } },
        { type: 'text', content: " Its design features wide, straight avenues and is organized around the nine Imperial bureaus, with the grand palace at its heart. The city was constructed using the labor of hundreds of thousands of corvée workers." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 6, link: "/books/grace-of-kings#chapter-6" } },
    ],
    culture: [
        { type: 'text', content: "As the Imperial capital, Pan was the center of political power and intrigue. Its culture was dominated by the rigid bureaucracy of the Xana Empire, with court life revolving around figures like the Regent and the Chatelain. Under Emperor Erishi, the court became known for its decadence and disconnection from the suffering of the common people." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/grace-of-kings#chapter-9" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "During the rebellion, Pan was the last major stronghold of the Xana Empire on the Big Island. Kuni Garu, with the aid of Luan Zya and the cruben-riders of Tan Adü, captured the city in a brilliant surprise attack while Mata Zyndu's forces were engaged elsewhere." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/grace-of-kings#chapter-30" } },
            ]
        },
        {
            event: "The Hegemony",
            summary: [
                { type: 'text', content: "Believing Kuni had stolen his glory, Mata Zyndu marched on the captured capital. In a fit of rage, he burned Pan to the ground and killed Emperor Erishi, effectively ending the Xana Empire and beginning his own reign as Hegemon." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/grace-of-kings#chapter-33" } },
            ]
        },
        {
            event: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "After the Chrysanthemum-Dandelion War, Emperor Ragin (Kuni Garu) rebuilt Pan and established it as the capital of his new dynasty, making it once again the center of a unified Dara." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/wall-of-storms#chapter-1" } },
            ]
        },
    ]
};


export default function PanPage() {
    return <PlacePageTemplate placeData={placeData} />;
}