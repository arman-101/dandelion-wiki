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
        aliases: "The Hegemon, Marshal of Cocru, The Chrysanthemum",
        occupation: "Noble Warrior, Marshal of Cocru, Hegemon of Dara",
        placeOfBirth: { text: "Farun, Tunoa Islands", link: "/places/tunoa-islands" },
        status: "Deceased",
        gender: "Male",
        significantOther: "Princess Kikomi (lover)",
        relatives: "Dazu Zyndu (grandfather), Phin Zyndu (uncle), Soto Zyndu (aunt)",
        affiliation: "House of Zyndu, Cocru Army, Hegemon's Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mata Zyndu is described as physically imposing and extraordinarily strong, with a noble bearing that reflects his aristocratic heritage. His appearance is marked by his martial prowess and the weight of his family's tragic history." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
        { type: 'text', content: " His personality is defined by his unwavering commitment to honor, his deep sense of duty to his family's legacy, and his belief in the superiority of noble blood and martial virtue. He is a man of few words but immense action, whose presence commands respect and fear." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
    ],
    history: [
        {
            era: "Early Life and Family Tragedy",
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
            era: "Rebellion and Rise to Power",
            summary: [
                { type: 'text', content: "When the rebellion against the Xana Empire begins, Mata seizes his opportunity for vengeance. He assassinates the local Xana commander, Datun Zatoma, and reclaims his ancestral castle, recovering his grandfather's legendary weapons: the composite bronze-and-steel sword Na-aroénna ('The Ender of Doubts') and the fearsome toothed cudgel Goremaw." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
                { type: 'text', content: " His godlike martial prowess is unleashed as he and Phin single-handedly slaughter most of the two-hundred-man Xana garrison in a brutal, bloody battle through the castle's halls. News of his incredible victory spreads, inspiring hundreds of volunteers to join his cause." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/the-grace-of-kings#chapter-7" } },
                { type: 'text', content: " He forms a crucial alliance and sworn brotherhood with Kuni Garu, becoming a key figure in the rebellion and eventually being named Marshal of Cocru." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 19, link: "/books/the-grace-of-kings#chapter-19" } },
            ]
        },
        {
            era: "The Hegemon and Civil War",
            summary: [
                { type: 'text', content: "After the fall of the Xana Empire, Mata becomes consumed by paranoia and betrayal. Believing that Kuni has stolen his glory by capturing Pan first, he burns the Imperial capital to the ground and declares himself Hegemon, the new de facto ruler of the Islands of Dara." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
                { type: 'text', content: " He redraws the map of Dara, creating a new political order that suits his vision of a restored world, and exiles Kuni to the remote island of Dasu. However, his reign is marked by brutality and the tragic death of his uncle Phin at the hands of Princess Kikomi, which devastates him emotionally." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/the-grace-of-kings#chapter-31" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
            ]
        },
        {
            era: "Final Battle and Death",
            summary: [
                { type: 'text', content: "The civil war between Mata and Kuni culminates in a brutal conflict that lasts for years. After three years of grueling war, Mata's forces are starving and depleted. Kuni offers a peace treaty to divide the islands between them, which a weary Mata accepts." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
                { type: 'text', content: " However, Luan Zya convinces Kuni that true, lasting peace is impossible while Mata lives, and Kuni breaks the treaty to launch a massive surprise attack. The final confrontation takes place at Rana Kida, where Mata, surrounded and with his army's morale broken, makes a final, heroic last stand with his most loyal followers." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
                { type: 'text', content: " Facing insurmountable odds, he takes his own life on a snowy beach rather than be captured, ending the long and bloody Chrysanthemum-Dandelion War." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
    ]
};

export default function MataZynduPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}