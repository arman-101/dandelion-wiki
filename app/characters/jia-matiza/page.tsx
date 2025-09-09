import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import JiaMatizaClient from './JiaMatizaClient';

// --- DATA FOR JIA MATIZA (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const characterData: Character = {
    name: "Jia Matiza",
    image: "/characters/jia-matiza.png",
    introduction: "Jia Matiza is the brilliant scholar and first wife of Kuni Garu, who becomes Empress Jia of the Dandelion Dynasty. A fiercely intelligent and politically savvy woman, she is the strategic and philosophical architect behind much of her husband's success. Over time, she evolves into a ruthless pragmatist, willing to make any sacrifice and be seen as a villain by history to ensure the long-term stability of the empire she helped build.",
    infoBox: {
        aliases: "Empress Jia, Dowager Empress, Regent",
        occupation: "Herbalist, Scholar, Empress of Dara, Regent",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Kuni Garu", link: "/characters/kuni-garu" },
        relatives: [
            { text: "Prince Timu (son)", link: "/characters/prince-timu" },
            { text: "Princess Théra (daughter)", link: "/characters/princess-thera" },
            { text: "Prince Phyro (son, by adoption)", link: "/characters/prince-phyro" },
            { text: "Princess Fara (daughter, by adoption)", link: "/characters/princess-fara" }
        ],
        affiliation: "House of Garu, Dandelion Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Jia is described as fiercely independent and brilliant, with a mind that sees the world in terms of systems and long-term consequences. In her youth, she was an accomplished herbalist who admired the dandelion for its hardiness and versatility, qualities she saw in Kuni Garu." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
        { type: 'text', content: "As Empress, she becomes a master of political strategy, often operating from the shadows. She adheres to a strict Moralist philosophy, believing that unchecked commercialism and the power of individual warlords threaten the agrarian foundation of the empire." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 13, link: "/books/the-wall-of-storms#chapter-13" } },
        { type: 'text', content: "Her love for her family is deep, but she prioritizes the security of the state above all else, leading her to make ruthless and morally ambiguous decisions. She is willing to sacrifice reputations—including her own—to achieve her vision of a lasting peace built on stable institutions rather than the whims of charismatic men." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 21, link: "/books/the-wall-of-storms#chapter-21" } },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 38, link: "/books/the-wall-of-storms#chapter-38" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Jia's early life in Zudi and her developing partnership with Kuni Garu established the foundation of the Dandelion Dynasty." }
            ]
        },
        {
            era: "Forging a Partnership",
            summary: [
                { type: 'text', content: "Jia first encountered Kuni Garu when he cleverly saved a poor woman's son from conscription. Intrigued by his audacity and recognizing his hidden potential, she initiated a courtship, and they formed a deep intellectual bond." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
                { type: 'text', content: "During the rebellion, Jia was mentored by the politically brilliant Soto Zyndu, who advised her to become an active and equal partner in Kuni's ambitions. After a long separation, she and Kuni reconciled and forged a new, stronger partnership based on radical honesty, with Jia becoming a key political strategist, advising him via secret letters during his exile on Dasu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/the-grace-of-kings#chapter-32" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 37, link: "/books/the-grace-of-kings#chapter-37" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 39, link: "/books/the-grace-of-kings#chapter-39" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As Empress, Jia embarked on a ruthless, multi-year shadow war to secure the dynasty's future against both internal and external threats." }
            ]
        },
        {
            era: "The Empress's Grand Game",
            summary: [
                { type: 'text', content: "Believing that powerful, independent military nobles were a threat to peace, Jia orchestrated a plot to neutralize them. She secretly funded Hegemon cults to create a crisis and framed the loyal Duke Théca Kimo for treason." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 21, link: "/books/the-wall-of-storms#chapter-21" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 25, link: "/books/the-wall-of-storms#chapter-25" } },
                { type: 'text', content: "Her endgame was to ensnare her greatest political rival, Marshal Gin Mazoti. She blackmailed Zomi Kidosu into signing a false confession, which she used to have Gin arrested for treason, thus consolidating her own power." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 29, link: "/books/the-wall-of-storms#chapter-29" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 30, link: "/books/the-wall-of-storms#chapter-30" } },
                { type: 'text', content: "When the Lyucu invaded, Jia masterminded an act of biological warfare, unleashing locusts to destroy the garinafins' food supply. After Kuni's death, she became Regent and coerced her rival, Consort Risana, into suicide, securing absolute control of the court." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 57, link: "/books/the-wall-of-storms#chapter-57" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 62, link: "/books/the-wall-of-storms#chapter-62" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As Regent for her son, Emperor Phyro, Jia ruled from behind a 'veiled throne,' keeping him on a tight leash while executing her complex plans against the Lyucu occupation." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Jia's grand, secret strategy to defeat the Lyucu was finally revealed. For years, she had secretly supplied them with a highly addictive, cultivated strain of tolyusa. By cutting off the supply, she caused the Lyucu military and society to collapse from within due to debilitating withdrawal." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 37, link: "/books/speaking-bones#chapter-37" } },
                { type: 'text', content: "However, her ruthless methods led to her downfall. When her son Phyro learned she had murdered his mother, Risana, he launched a rebellion. The uprising was fueled by mass-produced books detailing Jia's crimes. Phyro confronted her in a secret bunker, detonating a bomb that killed him and left Jia grievously wounded." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 44, link: "/books/speaking-bones#chapter-44" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 48, link: "/books/speaking-bones#chapter-48" } },
                { type: 'text', content: "Defeated and disgraced, Jia finally relented, providing the antidote to the tolyusa addiction and accepting that a new generation, led by Princess Fara, must build a future based on truth rather than her calculated deceptions." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 52, link: "/books/speaking-bones#chapter-52" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function JiaMatizaPage() {
    return <JiaMatizaClient characterData={characterData} />;
}