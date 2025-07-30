import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

// --- DATA FOR CRESCENT ISLAND (WITH FULL REFERENCES) ---
const placeData: Place = {
    name: "Crescent Island",
    image: "/places/crescent-island.png",
    introduction: "Crescent Island is a large, sparsely populated island in the northwest of Dara, known for its untamed wilderness. It served as a royal hunting preserve for the Xana emperors and later as a place of learning for Luan Zya and Zomi Kidosu.",
    infoBox: {
        Region: "Northwestern Dara",
        NotableFeatures: "Unsettled wilderness, royal hunting preserve",
    },
    geography: [
        { type: 'text', content: "A large, crescent-shaped island, it is located north of the Big Island. The landscape is wild and untamed, covered in dense forests and mountains. It is home to a small, isolated hamlet of people who live a traditional, simple life, largely untouched by the politics of the mainland." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 12, link: "/books/wall-of-storms#chapter-12" } },
    ],
    culture: [
        { type: 'text', content: "The island does not have a distinct widespread culture due to its lack of settlement. The small communities that exist there live in a manner close to nature, preserving ancient customs. For the Xana Empire, it was valued not for its culture but for its wild game, serving as an exclusive hunting ground for the emperor and his court." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 14, link: "/books/wall-of-storms#chapter-14" } },
    ],
    history: [
        {
            event: "Luan Zya's Tutelage of Zomi Kidosu",
            summary: [
                { type: 'text', content: "Five years before the first Grand Examination of the Dandelion Dynasty, Luan Zya took his student, Zomi Kidosu, to Crescent Island as part of her education. Here, he taught her philosophy and engineering through practical lessons, including flying a hot-air balloon and interacting with the local hamlet." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 10, link: "/books/wall-of-storms#chapter-10" } },
                { type: 'text', content: " Their time on the island was marked by a dramatic forest fire, accidentally started by a noble hunting party. Zomi's quick thinking and innovative use of a controlled backburn saved both her teacher and the local settlement, a key moment in her development." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 14, link: "/books/wall-of-storms#chapter-14" } },
            ]
        },
    ]
};


export default function CrescentIslandPage() {
    return <PlacePageTemplate placeData={placeData} />;
}