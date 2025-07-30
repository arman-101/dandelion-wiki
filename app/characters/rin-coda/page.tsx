import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Rin Coda",
    image: "/characters/rin-coda.png",
    introduction: "Rin Coda is Kuni Garu's childhood friend from Zudi. A timid and cautious scholar, he serves as a moral compass and a steady, loyal advisor to Kuni throughout his rise to power.",
    infoBox: {
        aliases: "None",
        occupation: "Scholar, Imperial Advisor",
        status: "Alive",
        gender: "Male",
        relatives: "Fara (wife)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Rin is described as gangly and nervous-looking. He is the opposite of Kuni in many ways: cautious where Kuni is bold, and scholarly where Kuni is street-smart. He is fundamentally decent and kind, often serving as the voice of reason and morality in Kuni's council. He is a loyal friend who is not afraid to speak difficult truths to the emperor." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
    ],
    history: [
        {
            era: "Friendship with Kuni Garu",
            summary: [
                { type: 'text', content: "Rin was with Kuni on the day of the kite attack in Zudi. He remained a loyal friend throughout Kuni's time as a bandit and was one of the first to join him after Kuni became a rebel leader. His famous proverb, 'No fish can live in perfectly clear water,' became a guiding principle for Kuni's pragmatic style of governance." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/grace-of-kings#chapter-14" } },
            ]
        },
        {
            era: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "Under Emperor Ragin, Rin became a trusted minister and a key member of the inner circle. He married Princess Théra's devoted handmaiden, Fara, further cementing his place within the Imperial family." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 34, link: "/books/wall-of-storms#chapter-34" } },
            ]
        },
    ]
};

export default function RinCodaPage() { return <CharacterPageTemplate characterData={characterData} />; }