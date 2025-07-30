import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Luan Zya",
    image: "/characters/luan-zya.png",
    introduction: "Luan Zya is a brilliant scholar, inventor, and strategist from Haan, and one of the most pivotal figures in the Dandelion Rebellion. He serves as the chief strategist and a close advisor to Kuni Garu, guiding him with wisdom from both books and his unique life experiences.",
    infoBox: {
        aliases: "The Kite-Rider, Toru Noki",
        occupation: "Assassin, Strategist, Prime Minister of Dara, Teacher",
        placeOfBirth: { text: "Ginpen", link: "/places/ginpen" },
        status: "Deceased",
        gender: "Male",
        affiliation: "House of Zya, Dandelion Court",
        nationality: { text: "Haan", link: "/places/haan" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Luan Zya is described as lean and gaunt, with an intense and scholarly demeanor. As the mysterious assassin, he has skin 'as black as sand' and bright green eyes." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
        { type: 'text', content: " He is a man of immense intellect and patience, embodying the Haanese love for philosophy and invention. He believes in the power of knowledge and carefully planned change, symbolized by his belief that a dandelion can eventually crack a paving stone. Though he can be ruthless in strategy, he is fundamentally driven by a desire to create a better, more just world." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/grace-of-kings#chapter-18" } },
    ],
    history: [
        {
            era: "Early Life & The Kite Attack",
            summary: [
                { type: 'text', content: "The last scion of a noble family of inventors, Luan Zya's family was massacred during the Xana conquest. He became a lone assassin, culminating in his famous but failed kite attack on Emperor Mapidéré in Zudi. Afterwards, he wandered Dara, living among the people of Tan Adü and eventually being gifted a magical, self-writing strategy book by the god Lutho." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/grace-of-kings#chapter-18" } },
            ]
        },
        {
            era: "The Dandelion Rebellion & Civil War",
            summary: [
                { type: 'text', content: "He joined Kuni Garu and Mata Zyndu, becoming their chief strategist and the intellectual architect of their rebellion. It was his audacious plans, such as the alliance with Tan Adü to capture Pan, that often turned the tide of the war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/grace-of-kings#chapter-28" } },
                { type: 'text', content: " He remained loyal to Kuni during the civil war, providing the crucial strategic advice that allowed the nascent state of Dasu to challenge and eventually defeat Mata Zyndu's hegemony." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 42, link: "/books/grace-of-kings#chapter-42" } },
            ]
        },
        {
            era: "Reign of Four Placid Seas",
            summary: [
                { type: 'text', content: "As Prime Minister, Luan Zya was instrumental in establishing the new dynasty's institutions. He also took on a young, crippled girl from Dasu named Mimi as his student, renaming her Zomi Kidosu and training her to be his intellectual heir." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 5, link: "/books/wall-of-storms#chapter-5" } },
                { type: 'text', content: " Ever the explorer, he eventually tired of court life and set out on an expedition to cross the Wall of Storms and discover the lands beyond, a journey from which he would not return." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/wall-of-storms#chapter-18" } },
            ]
        },
    ]
};

export default function LuanZyaPage() { return <CharacterPageTemplate characterData={characterData} />; }