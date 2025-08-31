'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR GARINAFIN (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const conceptData: Concept = {
    name: "Garinafin",
    image: "/concepts/garinafin.png",
    introduction: "Garinafin are massive, flying war beasts native to Ukyu-Gondé that serve as the primary military force of the Lyucu Empire. These fearsome creatures combine the power of dragons with the intelligence and trainability of domesticated animals, making them devastating weapons of war.",
    infoBox: {
        type: "War Beast",
        origin: "Ukyu-Gondé",
        size: "Massive, capable of carrying multiple riders",
        abilities: "Flight, fire-breathing, intelligence, trainability",
        significance: "Lyucu military dominance, Air warfare, Cultural symbol",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    details: [
        { type: 'text', content: "Garinafin are massive, flying creatures that resemble dragons in appearance and capabilities. They possess leathery wings, scaled bodies, and the ability to breathe fire, making them formidable weapons of war. Despite their fearsome nature, they are highly intelligent and can be trained to serve their riders." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
        { type: 'text', content: " The Lyucu people have developed a deep, almost spiritual connection with garinafin, treating them as both military assets and cultural symbols. The relationship between rider and mount is complex, requiring years of training and a deep understanding of the creature's behavior and needs." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 1, link: "/books/the-veiled-throne#chapter-1" } },
        { type: 'text', content: " Garinafin are not merely beasts of war but integral parts of Lyucu society. They serve as transportation, symbols of status, and the foundation of the Lyucu military doctrine. The ability to ride and command garinafin is a mark of prestige and power within Lyucu culture." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 1, link: "/books/the-veiled-throne#chapter-1" } },
        { type: 'text', content: " The arrival of garinafin in Dara during the Lyucu invasion represents a fundamental shift in warfare. The creatures' ability to fly and breathe fire makes them nearly invincible against traditional ground forces, forcing the people of Dara to develop new strategies and technologies to counter them." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
        { type: 'text', content: " Princess Théra's expedition encounters garinafin in Ukyu-Gondé, where she learns about their nature and capabilities firsthand. She witnesses the deep bond between Lyucu riders and their mounts, as well as the creatures' vulnerability to certain tactics and environmental conditions." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
        { type: 'text', content: " In Speaking Bones, Dara begins to develop its own garinafin program under Emperor Phyro's leadership. The arrival of the Lyucu defector Ofluro provides the empire with crucial knowledge about garinafin training and warfare, allowing them to begin building their own air force." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
        { type: 'text', content: " The development of Dara's garinafin program represents a significant technological and cultural shift. The empire must adapt to a new form of warfare while also learning to care for and train creatures that are fundamentally different from any animals they have encountered before." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
        { type: 'text', content: " Garinafin also play a role in the broader themes of the series, particularly the idea that apparent advantages can become vulnerabilities when circumstances change. The Lyucu's reliance on garinafin makes them vulnerable to tactics that exploit the creatures' limitations and the bond between rider and mount." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 10, link: "/books/the-veiled-throne#chapter-10" } },
        { type: 'text', content: " The garinafin serve as a symbol of the broader conflict between different ways of life and thinking. They represent the Lyucu's emphasis on brute force and domination, contrasting with Dara's focus on innovation, cooperation, and adaptability." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/the-wall-of-storms#chapter-24" } },
    ]
};

export default function GarinafinPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <ConceptPageTemplate conceptData={conceptData} />
        </>
    );
}