import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Noda Mi",
    image: "/characters/noda-mi.png",
    introduction: "Noda Mi is a cunning and ambitious nobleman who once served Mata Zyndu. He is the strategic mastermind behind the Hegemon Cults, a rebellion that uses technology and religious fervor to challenge the Dandelion Throne.",
    infoBox: {
        aliases: "None",
        occupation: "Nobleman, Rebel Leader",
        status: "Deceased",
        gender: "Male",
        affiliation: "Hegemon Cults",
        nationality: "Cocru",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Noda Mi is described as having a sharp, intelligent face. He is a clever and resourceful strategist, but his ambition is poisoned by bitterness over his fall from power. He is adept at using propaganda and deception, as shown by his brilliant use of the 'magic mirrors' to create a fanatical following. He is the brains of the rebellion, complementing Doru Solofi's role as its figurehead." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
    ],
    history: [
        {
            era: "The Hegemon Cults",
            summary: [
                { type: 'text', content: "Noda Mi formed a pact with Doru Solofi to overthrow Emperor Ragin. It was Noda who devised the strategy of using the 'magic mirrors' to project an image of Mata Zyndu, turning their political rebellion into a powerful religious movement. After their defeat at the hands of Princess Théra, he and Doru fled to Géjira and sought refuge with Queen Gin Mazoti, an act which created a major political crisis for the Dandelion Court." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 20, link: "/books/wall-of-storms#chapter-20" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 28, link: "/books/wall-of-storms#chapter-28" } },
            ]
        },
    ]
};

export default function NodaMiPage() { return <CharacterPageTemplate characterData={characterData} />; }