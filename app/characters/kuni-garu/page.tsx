import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

// --- DATA FOR KUNI GARU (WITH FULL INLINE REFERENCES) ---
const characterData: Character = {
    name: "Kuni Garu",
    image: "/characters/kuni-garu.png",
    introduction: "Kuni Garu, later known by his regnal name Emperor Ragin, is one of the two central protagonists of The Grace of Kings and the founder of the Dandelion Dynasty.",
    infoBox: {
        aliases: "Emperor Ragin, The Dandelion",
        occupation: "Bandit, Corvée Guard, Duke of Zudi, King of Dasu, Emperor of Dara",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Deceased",
        gender: "Male",
        significantOther: [
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
            { text: "Consort Risana", link: "/characters/consort-risana" },
        ],
        relatives: "Féso Garu (father), Naré Garu (mother), Kado Garu (brother), Prince Timu (son), Princess Théra (daughter), Prince Phyro (son), Princess Fara (daughter)",
        affiliation: "House of Garu, Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "In his youth, Kuni is described as stocky and well-muscled, with long, narrow eyes that glint with sly intelligence." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
        { type: 'text', content: " As emperor, his well-cut robes could not quite disguise his beer belly." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/wall-of-storms#chapter-3" } },
        { type: 'text', content: " He is a pragmatist at heart, valuing substance over style and people over protocol. His defining traits are his charisma, his boundless empathy for the common person, and his genius for unconventional, often audacious, solutions to complex problems." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/grace-of-kings#chapter-3" } },
        { type: 'text', content: " While he can be roguish and is not above using deception, his actions are guided by a deep-seated desire for a just and stable world where the lowly are not trampled by the powerful. He takes up farming as a hobby to honor his family roots and to remind himself of the lives of common people." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/wall-of-storms#chapter-18" } },
    ],
    history: [
        {
            era: "Early Life",
            summary: [
                { type: 'text', content: "Born in Zudi to a family of minor merchants, Kuni Garu preferred play to study, leading a small street gang." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/grace-of-kings#chapter-3" } },
                { type: 'text', content: " His life was aimless until he witnessed an assassination attempt on Emperor Mapidéré, which revealed the emperor's mortality and sparked a change in him." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/grace-of-kings#chapter-1" } },
                { type: 'text', content: " His clever defiance of a corrupt official brought him to the attention of Jia Matiza, whose intelligence and spirit inspired him to seek a more respectable life." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/grace-of-kings#chapter-4" } },
            ]
        },
        {
            era: "Rebellion against Xana Empire",
            summary: [
                { type: 'text', content: "Forced into outlawry after his prisoners deserted, Kuni became the leader of an 'honorable' bandit crew. He quickly proved to be a natural leader, using his charisma and unorthodox tactics to build a loyal following." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/grace-of-kings#chapter-8" } },
                { type: 'text', content: " He formed a crucial alliance and sworn brotherhood with the noble warrior Mata Zyndu, and with the strategic genius of Luan Zya, became a key figure in the rebellion, culminating in his daring capture of the Imperial capital, Pan." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 19, link: "/books/grace-of-kings#chapter-19" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/grace-of-kings#chapter-30" } },
            ]
        },
        {
            era: "Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "After the fall of the empire, a bitter rivalry grew between Kuni and Mata Zyndu. Exiled to the remote island of Dasu, Kuni, with the help of Marshal Gin Mazoti, built a new kind of state founded on innovation and meritocracy." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/grace-of-kings#chapter-36" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/grace-of-kings#chapter-41" } },
                { type: 'text', content: " He eventually launched a counter-attack against Mata's hegemony, a brutal civil war that ended with Mata's death and Kuni's ascension as the sole ruler of the islands." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/grace-of-kings#chapter-50" } },
            ]
        },
        {
            era: "Reign of Four Placid Seas",
            summary: [
                { type: 'text', content: "As Emperor Ragin, Kuni established a dynasty focused on peace and innovation. He grappled with the complexities of ruling a vast empire, the personal challenges of his fractured family, and his secret plan to name Princess Théra as his heir. His reign was ultimately defined by the arrival of the Lyucu Empire, forcing him and a new generation of heroes to defend Dara against a seemingly invincible foe." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/wall-of-storms#chapter-2" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/wall-of-storms#chapter-18" } },
            ]
        },
    ]
};


export default function KuniGaruPage() {
    return <CharacterPageTemplate characterData={characterData} />;
}