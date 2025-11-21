import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import MataZynduClient from './MataZynduClient';

// --- DATA FOR MATA ZYNDU (WITH FULL INLINE REFERENCES) ---
const characterData: Character = {
    name: "Mata Zyndu",
    introduction: "Mata Zyndu, the last heir of the noble Zyndu clan, is one of the two central protagonists of *The Grace of Kings*. A peerless warrior driven by a powerful code of honor and a deep-seated need for vengeance, Mata represents the philosophy of the chrysanthemum—nobility, tradition, and unbending strength in the face of adversity.",
    infoBox: {
        aliases: "The Hegemon, Marshal of Cocru, The Chrysanthemum, The Butcher of Wolf's Paw",
        occupation: "Noble Warrior, Marshal of Cocru, Hegemon of Dara",
        placeOfBirth: { text: "Farun, Tunoa Islands", link: "/places/tunoa-islands" },
        status: "Deceased",
        gender: "Male",
        significantOther: [
            { text: "Princess Kikomi", link: "/characters/princess-kikomi" },
            { text: "Lady Mira", link: "/characters/lady-mira" }
        ],
        relatives: [
            { text: "Dazu Zyndu (grandfather)", link: "" },
            { text: "Shiru Zyndu (father)", link: "" },
            { text: "Phin Zyndu (uncle)", link: "/characters/phin-zyndu" },
            { text: "Soto Zyndu (aunt)", link: "/characters/soto-zyndu" }
        ],
        affiliation: "House of Zyndu, Cocru Army, Hegemon's Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mata Zyndu is a giant of a man, physically imposing and extraordinarily strong, with a noble bearing that reflects his aristocratic heritage. His most distinct feature is his rare, double-pupiled eyes, which are said to grant him supernatural sight." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
        { type: 'text', content: "His personality is defined by an unwavering commitment to honor, a deep sense of duty to his family's legacy, and a belief in the superiority of noble blood and martial virtue. He is a man of few words but immense action, whose presence commands both respect and fear. While he values honor, his single-minded pursuit of vengeance can lead him to acts of shocking brutality, revealing a dark, ruthless streak beneath his noble exterior." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 23, link: "/books/the-grace-of-kings#chapter-23" } },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Mata Zyndu's entire life is defined by the tragic history of his clan and his singular quest to restore its honor." }
            ]
        },
        {
            era: "A Legacy of Vengeance",
            summary: [
                { type: 'text', content: "Born in the Tunoa Islands, Mata is the last heir of the once-great Zyndu clan. His grandfather, Marshal Dazu Zyndu, was a brilliant general betrayed by his own king during the Xana invasion. After being forced to surrender, Dazu's army was buried alive." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
                { type: 'text', content: "Emperor Mapidéré then ordered the extermination of the entire Zyndu clan. Only Mata's uncle, Phin Zyndu, escaped, saving the infant Mata. Raised in exile and poverty, Mata was forged by his uncle's all-consuming purpose, embodied by the constant refrain: 'Do not forget.'" },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
            ]
        },
        {
            era: "The Rebellion and Rise to Power",
            summary: [
                { type: 'text', content: "When rebellion against the Xana Empire begins, Mata seizes his opportunity. He assassinates the local Xana commander, reclaims his ancestral castle, and recovers his family's legendary weapons: the sword Na-aroénna ('The Ender of Doubts') and the cudgel Goremaw." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
                { type: 'text', content: "In a display of godlike martial prowess, he and Phin slaughter the Xana garrison, inspiring hundreds to join his cause. He forms a sworn brotherhood with Kuni Garu, becoming a key military leader in the rebellion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 19, link: "/books/the-grace-of-kings#chapter-19" } },
                { type: 'text', content: "However, the first signs of his ruthlessness appear after the fall of Dimu, where he orders the massacre of the surrendered garrison, creating the first true fracture in his friendship with Kuni." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 23, link: "/books/the-grace-of-kings#chapter-23" } },
            ]
        },
        {
            era: "Hegemon and the Civil War",
            summary: [
                { type: 'text', content: "Mata's descent into tyranny is hastened by personal tragedy, particularly the murder of his uncle Phin and the death of Princess Kikomi, which leave him emotionally shattered." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
                { type: 'text', content: "After his victory at the Battle of Wolf's Paw, he commits his most monstrous act: sacrificing 20,000 surrendered prisoners to the sea, earning the epithet 'Butcher of Wolf's Paw.'" },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
                { type: 'text', content: "Believing Kuni Garu stole his glory by capturing Pan first, Mata burns the capital, kills the boy-emperor, and declares himself Hegemon, sparking a new civil war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
                { type: 'text', content: "The brutal war culminates in Mata's army being surrounded and on the verge of collapse. The final blow comes when he discovers his confidante, Lady Mira, has taken her own life rather than watch him die. Cradling her body, he leads a final, suicidal charge and ultimately takes his own life on a snowy beach, ending the Chrysanthemum-Dandelion War." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function MataZynduPage() {
    return <MataZynduClient characterData={characterData} />;
}