import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "King Mocri",
    image: "/characters/king-mocri.png",
    introduction: "King Mocri was the proud and honorable king of the wealthy state of Gan during the Dandelion Rebellion. He was a respected warrior and a key member of the Tiro Alliance.",
    infoBox: {
        aliases: "None",
        occupation: "King of Gan",
        status: "Deceased",
        gender: "Male",
        affiliation: "Tiro Rebellion",
        nationality: { text: "Gan", link: "/places/gan" },
        firstAppeared: "The Grace of Kings",
        lastAppeared: "The Wall of Storms"
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mocri is a classic nobleman: proud, confident in his abilities, and deeply committed to the traditions of honor and martial prowess. He is a skilled fighter and a respected leader among the Tiro kings, though his pride can sometimes border on arrogance." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "King Mocri was a central figure in the Grand Council of the Tiro Alliance. His most famous moment was his duel with Mata Zyndu, which was intended to decide who would become the Princeps of the rebellion. Though he was defeated by Mata's superior strength, the duel became a legendary tale told by storytellers for years to come." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/wall-of-storms#chapter-1" } },
                { type: 'text', content: " Like the King of Faça, his forces pragmatically held back during the Battle of Wolf's Paw, an act seen by Mata as a betrayal." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/grace-of-kings#chapter-29" } },
            ]
        },
    ]
};

export default function KingMocriPage() { return <CharacterPageTemplate characterData={characterData} />; }