import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import KuniGaruClient from './KuniGaruClient';

// --- DATA FOR KUNI GARU (WITH FULL INLINE REFERENCES) ---
const characterData: Character = {
    name: "Kuni Garu",
    introduction: "Kuni Garu, later known by his regnal name Emperor Ragin, is one of the two central protagonists of *The Grace of Kings* and the founder of the Dandelion Dynasty. A charismatic and clever rogue who rises from humble origins to become emperor, Kuni represents the philosophy of the dandelion—resilience, adaptability, and strength found in common places.",
    infoBox: {
        aliases: "Emperor Ragin, The Dandelion, King of Dasu, Duke of Zudi",
        occupation: "Bandit, Corvée Guard, Duke, King, Emperor of Dara",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Deceased",
        gender: "Male",
        significantOther: [
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
            { text: "Consort Risana", link: "/characters/consort-risana" },
            { text: "Consort Fina", link: "" },
        ],
        relatives: [
            { text: "Féso Garu (father)", link: "" },
            { text: "Naré Garu (mother)", link: "" },
            { text: "Kado Garu (brother)", link: "" },
            { text: "Prince Timu (son)", link: "/characters/prince-timu" },
            { text: "Princess Théra (daughter)", link: "/characters/princess-thera" },
            { text: "Prince Phyro (son)", link: "/characters/prince-phyro" },
            { text: "Princess Fara (daughter)", link: "/characters/princess-fara" },
            { text: "Prince Gimoto (nephew)", link: "/characters/prince-gimoto" }
        ],
        affiliation: "House of Garu, Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "In his youth, Kuni is described as having long, narrow eyes that glint with sly intelligence. He is not conventionally handsome but possesses a natural charisma that draws people to him, a trait he uses to masterfully talk his way out of trouble." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
        { type: 'text', content: " As emperor, his well-cut robes could not quite disguise his beer belly, a testament to his humble tastes and refusal to adopt the pretensions of nobility." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/the-wall-of-storms#chapter-3" } },
        { type: 'text', content: " He is a pragmatist at heart, valuing substance over style and people over protocol. His defining traits are his boundless empathy for the common person and his genius for unconventional, often audacious, solutions to complex problems. This is symbolized by his personal emblem, the dandelion, which he admires for its resilience, practicality, and resourcefulness." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
        { type: 'text', content: " While he can be roguish and is not above using deception, his actions are guided by a deep-seated desire for a just and stable world where the lowly are not trampled by the powerful. He later takes up farming as a hobby to honor his family roots and to remind himself of the lives of common people." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Kuni Garu's journey from a street rogue in Zudi to the emperor of Dara unfolds throughout the first book of the Dandelion Dynasty." }
            ]
        },
        {
            era: "Rebellion Against the Xana Empire",
            summary: [
                { type: 'text', content: "Kuni's life changed upon witnessing the mortality of Emperor Mapidéré, and he was inspired by the brilliant Jia Matiza to seek a more respectable life." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
                { type: 'text', content: "Forced into outlawry after his corvée prisoners deserted, he became a bandit leader, learning pragmatism after an early, bloody failure." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
                { type: 'text', content: "His natural leadership flourished during the rebellion. He liberated his hometown, forged a sworn brotherhood with the warrior Mata Zyndu, and gained the allegiance of the strategist Luan Zya." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 19, link: "/books/the-grace-of-kings#chapter-19" } },
                { type: 'text', content: "His greatest military triumph was the surprise capture of the Imperial capital, Pan, using cruben-riders, which effectively ended the Xana Dynasty." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
        {
            era: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "After Mata Zyndu burned Pan and declared himself Hegemon, a bitter civil war erupted. Kuni was exiled to the remote island of Dasu, where, with the help of Marshal Gin Mazoti and his wives, he built an innovative new state founded on meritocracy." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/the-grace-of-kings#chapter-36" } },
                { type: 'text', content: "Launching a counter-attack through abandoned undersea tunnels, Kuni waged a brutal war against Mata. The conflict ended with Mata's defeat and suicide, leaving Kuni the undisputed ruler of the islands." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
                { type: 'text', content: "He was crowned Emperor Ragin, the first Dandelion Emperor of a unified Dara, reaffirming his identity as an emperor of the common people." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As Emperor Ragin, Kuni's reign is tested by internal court politics and the arrival of a devastating foreign invasion." }
            ]
        },
        {
            era: "Reign and the Lyucu War",
            summary: [
                { type: 'text', content: "Kuni's reign was focused on peace, but his court was fractured by political infighting between the 'swords' and the 'abacus' factions. He secretly planned to bypass his sons and name the brilliant Princess Théra as his heir to avert a future civil war." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
                { type: 'text', content: "The arrival of the Lyucu invasion force shattered this peace. Heartbroken by the betrayal of his son, Prince Timu, who became a puppet emperor for the invaders, and weakened by illness, Kuni was captured." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 56, link: "/books/the-wall-of-storms#chapter-56" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 58, link: "/books/the-wall-of-storms#chapter-58" } },
                { type: 'text', content: "Chained to the mast of the Lyucu flagship at the Battle of Zathin Gulf, he delivered a final, rousing speech to his army, named Théra his successor, and took his own life to free his soldiers from having to protect him." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 58, link: "/books/the-wall-of-storms#chapter-58" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function KuniGaruPage() {
    return <KuniGaruClient characterData={characterData} />;
}