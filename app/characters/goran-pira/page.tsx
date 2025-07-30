import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Goran Pira",
    image: "/characters/goran-pira.png",
    introduction: "Goran Pira was the Imperial Chatelain and a childhood friend of Emperor Mapidéré. A master of court intrigue, he harbored a secret, decades-long grudge against the emperor and secretly orchestrated the downfall of the Xana Dynasty from the highest position of power.",
    infoBox: {
        aliases: "The Chatelain",
        occupation: "Imperial Chatelain, Prime Minister",
        status: "Deceased",
        gender: "Male",
        affiliation: "Empire of Dara",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Pira is a quiet, observant, and patient man. He appears to be a loyal and unassuming servant of the throne, but this persona masks a brilliant, calculating mind and a heart filled with a cold, burning desire for revenge. He is a master manipulator, able to play the long game and turn his enemies against each other without ever revealing his own hand." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 11, link: "/books/grace-of-kings#chapter-11" } },
    ],
    history: [
        {
            era: "The Secret Grudge",
            summary: [
                { type: 'text', content: "As a young man, Goran Pira fell in love with a serving woman named Lady Maing. When Emperor Mapidéré took her as a concubine and later had her and Pira's secret son killed, Pira's love turned to a deep and abiding hatred. For the rest of his life, he plotted the complete and utter destruction of the House of Xana as vengeance." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 11, link: "/books/grace-of-kings#chapter-11" } },
            ]
        },
        {
            era: "Orchestrating the Collapse",
            summary: [
                { type: 'text', content: "Pira was a key player in the conspiracy to enthrone the weak Prince Loshi. Later, he skillfully manipulated the young Emperor Erishi into believing that Regent Lügo Crupo was a traitor. After orchestrating Crupo's execution, Pira became Prime Minister, gaining total control of the Imperial court and using his power to ensure the rebellion succeeded and the empire he served was destroyed." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 25, link: "/books/grace-of-kings#chapter-25" } },
            ]
        },
    ]
};

export default function GoranPiraPage() { return <CharacterPageTemplate characterData={characterData} />; }