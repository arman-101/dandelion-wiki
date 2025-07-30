import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data'; // Import from the new central location

// --- DATA FOR KUNI GARU (Now located directly in the page file) ---
const characterData: Character = {
    name: "Kuni Garu",
    image: "/characters/kuni-garu.png",
    introduction: "Kuni Garu, later known by his regnal name Emperor Ragin, is one of the two central protagonists of The Grace of Kings and the founder of the Dandelion Dynasty.",
    infoBox: {
        aliases: "Emperor Ragin, The Dandelion",
        occupation: "Bandit, Corvée Guard, Duke of Zudi, King of Dasu, Emperor of Dara",
        placeOfBirth: "Zudi",
        status: "Deceased (by the end of the series)",
        gender: "Male",
        significantOther: "Jia Matiza, Consort Risana",
        relatives: "Féso Garu (father), Naré Garu (mother), Kado Garu (brother), Prince Timu (son), Princess Théra (daughter), Prince Phyro (son), Princess Fara (daughter)",
        affiliation: "House of Garu, Dandelion Court, Empire of Dara",
        nationality: "Cocru",
        firstAppeared: "The Grace of Kings",
        lastAppeared: "Speaking Bones"
    },
    appearanceAndPersonality: "In his youth, Kuni is described as stocky and well-muscled, with long, narrow eyes that glint with sly intelligence. He is a pragmatist at heart, valuing substance over style and people over protocol. His defining traits are his charisma, his boundless empathy for the common person, and his genius for unconventional, often audacious, solutions to complex problems. While he can be roguish and is not above using deception, his actions are guided by a deep-seated desire for a just and stable world where the lowly are not trampled by the powerful.",
    history: [
        {
            era: "Early Life",
            summary: "Born in Zudi to a family of minor merchants, Kuni Garu preferred play to study, leading a small street gang. His life was aimless until he witnessed an assassination attempt on Emperor Mapidéré, which revealed the emperor's mortality and sparked a change in him. His clever defiance of a corrupt official brought him to the attention of Jia Matiza, whose intelligence and spirit inspired him to seek a more respectable life.",
            references: [{ book: "The Grace of Kings", chapter: 3, link: "/books/grace-of-kings#chapter-3" }]
        },
        {
            era: "Rebellion against Xana Empire",
            summary: "Forced into outlawry after his prisoners deserted, Kuni became the leader of an 'honorable' bandit crew. He quickly proved to be a natural leader, using his charisma and unorthodox tactics to build a loyal following. He formed a crucial alliance and sworn brotherhood with the noble warrior Mata Zyndu, and with the strategic genius of Luan Zya, became a key figure in the rebellion, culminating in his daring capture of the Imperial capital, Pan.",
            references: [{ book: "The Grace of Kings", chapter: 8, link: "/books/grace-of-kings#chapter-8" }, { book: "The Grace of Kings", chapter: 30, link: "/books/grace-of-kings#chapter-30" }]
        },
        {
            era: "Chrysanthemum-Dandelion War",
            summary: "After the fall of the empire, a bitter rivalry grew between Kuni and Mata Zyndu over their conflicting visions for the future of Dara. Exiled to the remote island of Dasu, Kuni, with the help of Marshal Gin Mazoti, built a new kind of state founded on innovation and meritocracy. He eventually launched a counter-attack against Mata's hegemony, a brutal civil war that ended with Mata's death and Kuni's ascension as the sole ruler of the islands.",
            references: [{ book: "The Grace of Kings", chapter: 35, link: "/books/grace-of-kings#chapter-35" }, { book: "The Grace of Kings", chapter: 50, link: "/books/grace-of-kings#chapter-50" }]
        },
    ]
};


export default function KuniGaruPage() {
    return <CharacterPageTemplate characterData={characterData} />;
}