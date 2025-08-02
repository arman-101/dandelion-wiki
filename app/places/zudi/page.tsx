'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ZUDI ---
const placeData: Place = {
    name: "Zudi",
    image: "/places/zudi.png",
    introduction: "Zudi is a bustling port city in Cocru and the birthplace of Kuni Garu, the founder of the Dandelion Dynasty. It serves as a crucial strategic location during the rebellion against the Xana Empire and becomes a symbol of Kuni's rise from common origins to imperial power.",
    infoBox: {
        "Type": "Port City",
        "Region": { text: "Cocru", link: "/places/cocru" },
        "Significance": "Birthplace of Kuni Garu and key strategic location during the rebellion",
        "Notable Residents": [
            { text: "Kuni Garu", link: "/characters/kuni-garu" },
            { text: "Jia Matiza", link: "/characters/jia-matiza" },
            { text: "Rin Coda", link: "/characters/rin-coda" }
        ],
        "First Mentioned": { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        "Key Events": "Site of Imperial Procession, Kuni's first victory, Battle of Zudi"
    },
    geography: [
        { type: 'text', content: "Zudi is located in Cocru and serves as a major port city with access to both river and sea trade routes. The city is characterized by its bustling marketplace, where merchants from across the Islands of Dara gather to trade goods and information." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'text', content: " The city features a well-developed infrastructure with a mayor's house that serves as the administrative center, and the Splendid Urn tavern, which becomes a gathering place for the rebel leaders during the war against the Xana Empire." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
    ],
    culture: [
        { type: 'text', content: "Zudi's culture reflects its status as a trading hub, with a diverse population that includes merchants, craftsmen, and common folk from various backgrounds. The city is known for its pragmatic approach to life and its acceptance of people based on their abilities rather than their birth." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 3, link: "/books/the-grace-of-kings#chapter-3" } },
        { type: 'text', content: " This cultural openness and emphasis on merit over birthright directly influences Kuni Garu's philosophy and his later policies as emperor. The city's marketplace serves as a microcosm of the larger world, where people from all walks of life interact and trade." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
    ],
    history: [
        {
            event: "Imperial Procession and Assassination Attempt",
            summary: [
                { type: 'text', content: "Zudi gains historical significance when Emperor Mapidéré's grand Imperial Procession passes through the city. During this event, a fourteen-year-old Kuni Garu witnesses an assassination attempt on the emperor by a man from Haan using a sophisticated man-lifting kite." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'text', content: " This event marks a turning point in Kuni's life, as he sees the raw fear in the emperor's eyes and realizes that even the most powerful man in the world is mortal. This revelation sparks his transformation from a carefree youth to someone who begins to think about power and justice." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
            ]
        },
        {
            event: "Kuni's Rise to Power",
            summary: [
                { type: 'text', content: "After the rebellion begins, Kuni Garu successfully captures Zudi using clever tactics and deception. Once in control, he surprises everyone by proving to be a diligent and highly effective administrator, working tirelessly to restore order and win over the city's bureaucrats and elders." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
                { type: 'text', content: " He implements innovative solutions to governance problems, such as the lottery scheme devised by his advisor Cogo Yelu, where purchase receipts double as lottery tickets, effectively turning every citizen into a de facto tax collector for Kuni's government." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 14, link: "/books/the-grace-of-kings#chapter-14" } },
            ]
        },
        {
            event: "Battle of Zudi",
            summary: [
                { type: 'text', content: "Zudi becomes the site of a crucial battle when General Tanno Namen, at the head of a massive Imperial army, lays siege to the city. Kuni and Mata Zyndu defend the city together in a perfect synthesis of their complementary styles." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/the-grace-of-kings#chapter-22" } },
                { type: 'text', content: " Mata demonstrates incredible battlefield prowess, fighting on the walls like a god of war and inspiring the soldiers with his valor. Kuni, meanwhile, uses clever tricks and psychological warfare, such as dressing civilians in paper armor to create the illusion of a larger army and using singers to taunt the enemy with insulting songs." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/the-grace-of-kings#chapter-22" } },
                { type: 'text', content: " The victory breaks the siege and forces the Imperial army to retreat, cementing the legendary status of the Kuni-Mata partnership and establishing Zudi as a symbol of resistance against the empire." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 22, link: "/books/the-grace-of-kings#chapter-22" } },
            ]
        },
        {
            event: "Coronation and Legacy",
            summary: [
                { type: 'text', content: "After becoming emperor, Kuni returns to Zudi for his coronation ceremony, holding one last informal banquet with his oldest friends in his hometown. He reflects on his long journey from bandit to emperor and celebrates the dandelion, affirming his identity as a ruler of the common people." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
                { type: 'text', content: " Zudi's transformation from a simple port city to the birthplace of an emperor becomes a powerful symbol of the dandelion philosophy - that greatness can emerge from the most common of places." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
            ]
        },
    ]
};

export default function ZudiPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}