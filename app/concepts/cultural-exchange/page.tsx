import ConceptPageTemplate from '../../components/ConceptPageTemplate';

const culturalExchangeData = {
    name: "Cultural Exchange",
    image: "/concepts/kuni-garu.png", // Placeholder image
    introduction: "The complex interactions and mutual influences between Dara and Lyucu cultures during occupation.",
    infoBox: {
        "Type": "Social Phenomenon",
        "Primary Aspect": "Cross-Cultural Interaction",
        "Key Elements": [
            { text: "Language Exchange", link: "#" },
            { text: "Technological Sharing", link: "#" },
            { text: "Religious Syncretism", link: "#" },
            { text: "Social Integration", link: "#" }
        ],
        "Book Appearances": [
            { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
            { text: "Speaking Bones", link: "/books/speaking-bones" }
        ]
    },
    details: [
        { type: "text" as const, content: "Cultural Exchange represents the complex and often contradictory interactions between Dara and Lyucu cultures during the occupation period. This phenomenon encompasses everything from language learning and technological sharing to religious syncretism and social integration, creating a unique hybrid culture that emerges from the forced coexistence of two very different societies." }
    ]
};

export default function CulturalExchangePage() {
    return <ConceptPageTemplate conceptData={culturalExchangeData} />;
} 