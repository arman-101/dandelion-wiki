import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Doru Solofi",
    image: "/characters/doru-solofi.png",
    introduction: "Doru Solofi is a disgraced nobleman and former follower of Mata Zyndu. Alongside Noda Mi, he becomes a leader of the Hegemon Cults, a rebellion aimed at overthrowing the Dandelion Dynasty in the name of the deceased Mata.",
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
        { type: 'text', content: "Doru is a large, physically imposing man, though he lacks true martial skill. He is bitter and resentful about his loss of status after Kuni Garu's victory. He is more of a blunt instrument than a strategist, relying on the cunning of his partner, Noda Mi, to guide their rebellion. He embodies the lingering, resentful pride of the old aristocracy that was defeated in the Chrysanthemum-Dandelion War." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
    ],
    history: [
        {
            era: "The Hegemon Cults",
            summary: [
                { type: 'text', content: "Years after the war, Doru Solofi met with Noda Mi in a graveyard and swore an oath to avenge Mata Zyndu and destroy Emperor Ragin. They became the leaders of the Hegemon Cults, using 'magic mirrors' to create the illusion that Mata's ghost was leading them. Their rebellion gained significant traction in the Tunoa Islands before being cleverly dismantled by Princess Théra's scientific counter-magic." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
            ]
        },
    ]
};

export default function DoruSolofiPage() { return <CharacterPageTemplate characterData={characterData} />; }