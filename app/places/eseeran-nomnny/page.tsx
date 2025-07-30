import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR ESEERAN NOMNNY (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Eseeran Nomnny",
    image: "/places/eseeran-nomnny.png",
    introduction: "The Eseeran Nomnny is a large, mysterious southern continent that appears on world maps. It is separated from the Lyucu Lands by the Chois Sea, but its people and history remain largely unknown to the inhabitants of Dara.",
    infoBox: {
        Region: "Southeastern Continent",
        Status: "Largely unexplored by the people of Dara",
        NotableFeatures: "Separated from Lyucu Lands by the Chois Sea",
    },
    geography: [
        { type: 'text', content: "Located south of Ukyu & Gondé, the Eseeran Nomnny is a massive landmass. Its specific geography, climate, and features are not detailed in the chronicles of the Dandelion Dynasty, making it a land of mystery." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 0, link: "/books/wall-of-storms" } }, // Corrected 'Map' to 'chapter'
    ],
    culture: [
        { type: 'text', content: "The culture of the Eseeran Nomnny is unknown, as the narrative of the Dandelion Dynasty does not feature any interaction with its inhabitants." },
    ],
    history: [
        {
            event: "Role in the Saga",
            summary: [
                { type: 'text', content: "The Eseeran Nomnny serves primarily as a world-building element, illustrating the vastness of the world beyond the immediate conflict between Dara and the Lyucu Empire. Its presence on the map suggests other powers and civilizations may exist, but they do not play a direct role in the events of the series." },
            ]
        },
    ]
};


export default function EseeranNomnnyPage() {
    return <PlacePageTemplate placeData={placeData} />;
}