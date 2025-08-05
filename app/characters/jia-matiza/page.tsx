'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR JIA MATIZA (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const characterData: Character = {
    name: "Jia Matiza",
    image: "/characters/jia-matiza.png",
    introduction: "Jia Matiza is the brilliant scholar and first wife of Kuni Garu, who becomes Empress Jia of the Dandelion Dynasty. A fiercely intelligent and politically savvy woman, she is the strategic and philosophical architect behind much of her husband's success and the dynasty's foundation. Over time, she evolves into a ruthless pragmatist, willing to make any sacrifice to ensure the long-term stability of the empire she helped build.",
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
            { text: "Prince Phyro (son, adopted)", link: "/characters/prince-phyro" },
            { text: "Princess Fara (daughter)", link: "/characters/princess-fara" }
        ],
        affiliation: "House of Garu, Dandelion Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Jia is described as fiercely independent and brilliant, with a mind that sees the world in terms of systems and long-term consequences. In her youth, she was an accomplished herbalist who admired the dandelion for its hardiness and versatility, qualities she saw in Kuni Garu." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
        { type: 'text', content: " As Empress, she becomes a master of political strategy, often operating from the shadows. She is willing to be seen as a villain in the annals of history if it means creating a stable, systematic empire that doesn't rely on the whims of charismatic leaders. Her love for her family is deep, but she often prioritizes the security of the state above all else, leading her to make ruthless and morally ambiguous decisions." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 21, link: "/books/the-wall-of-storms#chapter-21" } },
        { type: 'text', content: " She believes in institutions over individuals and is willing to sacrifice reputations, including her own and those of her allies, to achieve her vision of lasting peace." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 38, link: "/books/the-wall-of-storms#chapter-38" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Jia first encounters Kuni Garu in Zudi when he cleverly intervenes to save a poor woman's son from conscription. Intrigued, she invites him to a party and they quickly form a deep intellectual and philosophical bond." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 4, link: "/books/the-grace-of-kings#chapter-4" } },
                { type: 'text', content: " During the rebellion, while Kuni is away, Jia feels isolated in high society but is mentored by the mysterious Soto Zyndu, who advises her to become an active and equal partner in Kuni's ambitions." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/the-grace-of-kings#chapter-32" } },
                { type: 'text', content: " Their partnership is tested and ultimately strengthened when Kuni returns. They forgive each other's wartime transgressions and forge a new, more mature relationship based on radical honesty. Jia becomes a key political strategist, using secret correspondence to advise Kuni and build alliances while he is exiled in Dasu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 37, link: "/books/the-grace-of-kings#chapter-37" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 39, link: "/books/the-grace-of-kings#chapter-39" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As Empress, Jia's primary concern is the stability of the dynasty and the coming succession crisis between her sons. She clashes with Marshal Gin Mazoti over economic policy, representing the agrarian traditionalists against the rising merchant class." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 13, link: "/books/the-wall-of-storms#chapter-13" } },
                { type: 'text', content: " To secure the empire's future, she orchestrates a grand, ruthless political gambit. She secretly funds the Hegemon cults to create a crisis, frames Duke Théca Kimo for the rebellion, and uses the ensuing chaos to arrest and neutralize Gin Mazoti, her most powerful political rival." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 25, link: "/books/the-wall-of-storms#chapter-25" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 29, link: "/books/the-wall-of-storms#chapter-29" } },
                { type: 'text', content: " When the Lyucu invade, she confesses her entire plot to Gin and begs her to save Dara, forming a pragmatic alliance with her former enemy. She later orchestrates an act of biological warfare, using locusts to destroy the garinafin food supply, crippling the Lyucu's primary weapon." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 38, link: "/books/the-wall-of-storms#chapter-38" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 57, link: "/books/the-wall-of-storms#chapter-57" } },
            ]
        },
        {
            era: "The Veiled Throne & Speaking Bones",
            summary: [
                { type: 'text', content: "As Regent for her son, Emperor Phyro, Jia rules Dara with an iron fist. Her long-term plans often put her at odds with her children and allies. She uses the scholar rebellion against Zomi Kidosu's examination reforms to teach Zomi a harsh lesson about the power of tradition, leading to Zomi's disgrace and resignation." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 29, link: "/books/the-veiled-throne#chapter-29" } },
                { type: 'text', content: " In 'Speaking Bones,' upon learning that Princess Théra is alive, Jia is wary, viewing her return as a threat to the stability she has worked to build. She secretly manipulates Zomi Kidosu's nascent resistance movement, feeding them misinformation to serve her own ends." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 2, link: "/books/speaking-bones#chapter-2" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 8, link: "/books/speaking-bones#chapter-8" } },
                { type: 'text', content: " Her complex, decades-long political maneuvering culminates in the final war against the Lyucu, where her grand strategy is finally revealed. Her endgame is to secure a lasting peace and a stable, unified Dara, proving herself to be one of history's most formidable, if controversial, rulers." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 38, link: "/books/speaking-bones#chapter-38" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 55, link: "/books/speaking-bones#chapter-55" } },
            ]
        },
    ]
};

export default function JiaMatizaPage() {
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