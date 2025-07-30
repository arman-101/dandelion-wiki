import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Mün Çakri",
    image: "/characters/mun-cakri.png",
    introduction: "Mün Çakri is a former butcher and a man of immense physical strength who becomes one of Kuni Garu's most loyal and steadfast followers. He serves as Kuni's personal bodyguard and a symbol of unwavering loyalty.",
    infoBox: {
        aliases: "None",
        occupation: "Butcher, Bodyguard, General",
        status: "Deceased",
        gender: "Male",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mün Çakri is a large and powerfully built man, befitting his past as a butcher. He is simple, direct, and possesses a deep, unshakable loyalty to Kuni Garu, whom he trusts implicitly. He is not a strategist or a politician, but he is a fearsome warrior and a reliable friend. His defining moment of character is at Mata Zyndu's banquet, where he is willing to die to protect Kuni from an assassination attempt." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 34, link: "/books/grace-of-kings#chapter-34" } },
    ],
    history: [
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Mün Çakri was one of the first men to join Kuni Garu's bandit crew in the mountains outside Zudi. He quickly became Kuni's most trusted enforcer and bodyguard, his simple loyalty a grounding force for the often-scheming Kuni." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/grace-of-kings#chapter-8" } },
            ]
        },
        {
            era: "The Dandelion Dynasty",
            summary: [
                { type: 'text', content: "After Kuni became emperor, Mün Çakri remained a key figure in his inner circle, eventually being elevated to the status of a high-ranking general. He represented the humble origins and unwavering loyalty upon which the Dandelion Dynasty was founded." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/wall-of-storms#chapter-8" } },
            ]
        },
    ]
};

export default function MunCakriPage() { return <CharacterPageTemplate characterData={characterData} />; }