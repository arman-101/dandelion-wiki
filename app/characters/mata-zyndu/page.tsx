'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR MATA ZYNDU (WITH FULL INLINE REFERENCES) ---
const characterData: Character = {
    name: "Mata Zyndu",
    image: "/characters/mata-zyndu.png",
    introduction: "Mata Zyndu, the last heir of the noble Zyndu clan, is one of the two central protagonists of The Grace of Kings. A peerless warrior driven by honor and vengeance, Mata represents the philosophy of the chrysanthemum - nobility, tradition, and unbending honor in the face of adversity.",
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
            { text: "Phin Zyndu (uncle)", link: "/characters/phin-zyndu" },
            { text: "Soto Zyndu (aunt)", link: "/characters/soto-zyndu" }
        ],
        affiliation: "House of Zyndu, Cocru Army, Hegemon's Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mata Zyndu is described as physically imposing and extraordinarily strong, with a noble bearing that reflects his aristocratic heritage. [cite: 310] His most distinct feature is his rare, double-pupiled eyes, which are said to grant him supernatural sight and make it impossible for others to meet his gaze. [cite: 314, 315] His personality is defined by his unwavering commitment to honor, his deep sense of duty to his family's legacy, and his belief in the superiority of noble blood and martial virtue. He is a man of few words but immense action, whose presence commands respect and fear." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
    ],
    history: [
        {
            era: "Early Life and Family Tragedy (The Grace of Kings)",
            summary: [
                { type: 'text', content: "Born in Farun in the Tunoa Islands, Mata is the last heir of the once-great Zyndu clan. His grandfather, Marshal Dazu Zyndu, was a brilliant Cocru general known as the 'Bearded Tortoise' for his unbeatable defensive tactics against the Xana invasion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
                { type: 'text', content: " However, Dazu was betrayed by his own suspicious king, forced into an open battle, and captured. The Xana general Gotha Tonyeti reneged on his promise of safety and had Dazu's entire surrendered army buried alive. The Zyndu Clan was systematically exterminated, with only Mata's uncle Phin escaping with the infant Mata." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
                { type: 'text', content: " Raised in exile with the singular purpose of vengeance, Mata's life has been shaped by his uncle's constant refrain: 'Do not forget.'" },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
            ]
        },
        {
            era: "Rebellion and Rise to Power (The Grace of Kings)",
            summary: [
                { type: 'text', content: "When the rebellion against the Xana Empire begins, Mata seizes his opportunity for vengeance. He assassinates the local Xana commander and reclaims his ancestral castle, recovering his grandfather's legendary weapons: the composite bronze-and-steel sword Na-aroénna ('The Ender of Doubts') and the fearsome toothed cudgel Goremaw." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
                { type: 'text', content: " His godlike martial prowess is unleashed as he and Phin single-handedly slaughter most of the two-hundred-man Xana garrison. News of his incredible victory spreads, inspiring hundreds of volunteers to join his cause." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
                { type: 'text', content: " He forms a crucial alliance and sworn brotherhood with [[Kuni Garu|/characters/kuni-garu]], becoming a key figure in the rebellion and eventually being named Marshal of Cocru." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 19, link: "/books/the-grace-of-kings#chapter-19" } },
            ]
        },
        {
            era: "The Hegemon and Civil War (The Grace of Kings)",
            summary: [
                { type: 'text', content: "After the fall of the Xana Empire, Mata becomes consumed by paranoia and betrayal. Believing that [[Kuni Garu|/characters/kuni-garu]] has stolen his glory by capturing Pan first, he burns the Imperial capital and declares himself Hegemon." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
                { type: 'text', content: " His reign is marked by brutality, most notably the massacre of 20,000 prisoners at Wolf's Paw. His emotional state deteriorates further after the tragic deaths of his uncle Phin and Princess Kikomi, which devastates him." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
                { type: 'text', content: " During this time, his only solace comes from his growing bond with Lady Mira, a woman from his homeland who becomes his confidante and reminds him of a life beyond war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
            ]
        },
        {
            era: "Final Battle and Death (The Grace of Kings)",
            summary: [
                { type: 'text', content: "The civil war between Mata and [[Kuni Garu|/characters/kuni-garu]] culminates in a brutal conflict. After three years of war, Mata's forces are starving and depleted. He accepts a peace treaty from Kuni, only for Kuni to break it and launch a massive surprise attack." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
                { type: 'text', content: " The final confrontation takes place at Rana Kida, where Mata's army is surrounded. As his army's morale collapses, he returns to his tent to discover that Lady Mira has taken her own life rather than watch him die. Her death is the final blow that shatters his will." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
                { type: 'text', content: " After a final, heroic charge, he takes his own life on a snowy beach rather than be captured, ending the long and bloody Chrysanthemum-Dandelion War." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
    ]
};

export default function MataZynduPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}