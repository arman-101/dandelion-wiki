import CharacterPageTemplate from '../../components/CharacterPageTemplate';

const tanvanakiData = {
    name: "Tanvanaki",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu princess and leader who plays a significant role in the occupation of Dara.",
    infoBox: {
        "Origin": "Lyucu Lands",
        "Role": "Lyucu Leader",
        "Book Appearances": [
            { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
        ]
    },
    appearanceAndPersonality: [
        { type: "text" as const, content: "Tanvanaki is a Lyucu princess who emerges as a key figure during the occupation of Dara. Her leadership and strategic thinking make her a formidable presence in the political landscape of occupied Dara." }
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: "text" as const, content: "Tanvanaki plays a significant role in the Lyucu occupation of Dara, demonstrating both military prowess and political acumen. Her actions and decisions have far-reaching consequences for both the Lyucu and the people of Dara." }
            ]
        }
    ]
};

export default function TanvanakiPage() {
    return <CharacterPageTemplate characterData={tanvanakiData} />;
} 