'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR KUNI GARU (WITH FULL INLINE REFERENCES) ---
const characterData: Character = {
    name: "Kuni Garu",
    image: "/characters/kuni-garu.png",
    introduction: "Kuni Garu, later known by his regnal name Emperor Ragin, is one of the two central protagonists of The Grace of Kings and the founder of the Dandelion Dynasty. A charismatic bandit who rises from humble origins to become emperor, Kuni represents the philosophy of the dandelion - resilience, adaptability, and strength found in common places.",
    infoBox: {
        aliases: "Emperor Ragin, The Dandelion, King of Dasu, Duke of Zudi",
        occupation: "Bandit, Corvée Guard, Duke of Zudi, King of Dasu, Emperor of Dara",
        placeOfBirth: { text: "Zudi", link: "/places/zudi" },
        status: "Deceased",
        gender: "Male",
        significantOther: [
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
            { text: "Consort Risana", link: "/characters/consort-risana" },
        ],
        relatives: [
            { text: "Féso Garu (father)", link: "" },
            { text: "Naré Garu (mother)", link: "" },
            { text: "Kado Garu (brother)", link: "" },
            { text: "Prince Timu (son)", link: "/characters/prince-timu" },
            { text: "Princess Théra (daughter)", link: "/characters/princess-thera" },
            { text: "Prince Phyro (son)", link: "/characters/prince-phyro" },
            { text: "Princess Fara (daughter)", link: "/characters/princess-fara" }
        ],
        affiliation: "House of Garu, Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "In his youth, Kuni is described as stocky and well-muscled, with long, narrow eyes that glint with sly intelligence. His appearance reflects his common origins - he is not conventionally handsome but possesses a natural charisma that draws people to him." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'text', content: " As emperor, his well-cut robes could not quite disguise his beer belly, a testament to his humble tastes and refusal to adopt the pretensions of nobility." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 3, link: "/books/the-wall-of-storms#chapter-3" } },
        { type: 'text', content: " He is a pragmatist at heart, valuing substance over style and people over protocol. His defining traits are his charisma, his boundless empathy for the common person, and his genius for unconventional, often audacious, solutions to complex problems." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
        { type: 'text', content: " While he can be roguish and is not above using deception, his actions are guided by a deep-seated desire for a just and stable world where the lowly are not trampled by the powerful. He takes up farming as a hobby to honor his family roots and to remind himself of the lives of common people." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
    ],
    history: [
        {
            era: "Early Life and Awakening (The Grace of Kings)",
            summary: [
                { type: 'text', content: "Born in Zudi to a family of minor merchants, Kuni Garu preferred play to study, leading a small street gang and living a carefree existence. His life was aimless until he witnessed an assassination attempt on Emperor Mapidéré during an Imperial Procession, which revealed the emperor's mortality and sparked a fundamental change in him." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'text', content: " His clever defiance of a corrupt corvée administrator, where he impersonated a merchant's son to save a poor family, brought him to the attention of Jia Matiza, whose intelligence and spirit inspired him to seek a more respectable life." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
            ]
        },
        {
            era: "Rebellion against Xana Empire (The Grace of Kings)",
            summary: [
                { type: 'text', content: "Forced into outlawry after his prisoners deserted to join Huno Krima's rebellion, Kuni became the leader of an 'honorable' bandit crew in the Er-Mé Mountains. He quickly proved to be a natural leader, using his charisma and unorthodox tactics to build a loyal following." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 8, link: "/books/the-grace-of-kings#chapter-8" } },
                { type: 'text', content: " He formed a crucial alliance and sworn brotherhood with the noble warrior Mata Zyndu, and with the strategic genius of Luan Zya, became a key figure in the rebellion. His capture of Zudi demonstrated his administrative skills, and his daring capture of the Imperial capital, Pan, using cruben-riders from Tan Adü, cemented his reputation as a brilliant strategist." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 19, link: "/books/the-grace-of-kings#chapter-19" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 28, link: "/books/the-grace-of-kings#chapter-28" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
            ]
        },
        {
            era: "Chrysanthemum-Dandelion War (The Grace of Kings)",
            summary: [
                { type: 'text', content: "After the fall of the empire, a bitter rivalry grew between Kuni and Mata Zyndu. Exiled to the remote island of Dasu, Kuni, with the help of Marshal Gin Mazoti and his wives Jia and Risana, built a new kind of state founded on innovation and meritocracy." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 36, link: "/books/the-grace-of-kings#chapter-36" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/the-grace-of-kings#chapter-41" } },
                { type: 'text', content: " He eventually launched a counter-attack against Mata's hegemony, a brutal civil war that ended with Mata's death at Rana Kida and Kuni's ascension as the sole ruler of the islands." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
        {
            era: "Reign of Four Placid Seas (The Wall of Storms)",
            summary: [
                { type: 'text', content: "As Emperor Ragin, Kuni established a dynasty focused on peace and innovation. He grappled with the complexities of ruling a vast empire, the personal challenges of his fractured family, and his secret plan to name Princess Théra as his heir. His reign was ultimately defined by the arrival of the Lyucu Empire, forcing him and a new generation of heroes to defend Dara against a seemingly invincible foe." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 2, link: "/books/the-wall-of-storms#chapter-2" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/the-wall-of-storms#chapter-18" } },
                { type: 'text', content: "During the Lyucu invasion, Kuni was captured and used as a human shield by Pékyu Tenryo at the Battle of Zathin Gulf. In a final act of defiance, he delivered a speech to his army, named Théra his successor, and took his own life." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 58, link: "/books/the-wall-of-storms#chapter-58" } },
            ]
        },
    ]
};

export default function KuniGaruPage() {
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