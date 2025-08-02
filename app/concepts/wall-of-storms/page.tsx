'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THE WALL OF STORMS (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const conceptData: Concept = {
    name: "The Wall of Storms",
    image: "/concepts/wall-of-storms.png",
    introduction: "The Wall of Storms is a seemingly impassable barrier of perpetual storms and treacherous seas that separates Dara from the unknown lands beyond. It becomes a crucial element in the story when Princess Théra leads a daring expedition through it to seek allies against the Lyucu Empire.",
    infoBox: {
        type: "Natural Barrier",
        location: "Eastern Sea, separating Dara from Ukyu-Gondé",
        nature: "Perpetual storm system with treacherous currents",
        significance: "Geographic isolation, Expedition route, Symbol of the unknown",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    details: [
        { type: 'text', content: "The Wall of Storms is a massive, seemingly permanent storm system that creates an impassable barrier in the eastern sea. It consists of violent storms, treacherous currents, and unpredictable weather patterns that have prevented any successful crossing for generations." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 30, link: "/books/the-wall-of-storms#chapter-30" } },
        { type: 'text', content: " The storms are so intense and unpredictable that they have effectively isolated Dara from the lands beyond, creating a natural boundary that has shaped the island's history and development. The barrier has been considered impossible to cross, leading to the belief that Dara is the only inhabited land in the world." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 30, link: "/books/the-wall-of-storms#chapter-30" } },
        { type: 'text', content: " However, the Wall of Storms is not completely impenetrable. Princess Théra's expedition discovers that with the right knowledge, timing, and assistance, it is possible to navigate through the barrier. Her journey reveals that the storms follow certain patterns that can be understood and exploited." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
        { type: 'text', content: " The expedition's success in crossing the Wall of Storms is aided by a pod of cruben, massive sea creatures that help guide the fleet through the treacherous waters. The cruben's knowledge of the sea and their ability to navigate the storms proves crucial to the expedition's survival." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
        { type: 'text', content: " The Wall of Storms serves as both a physical and metaphorical barrier throughout the story. It represents the unknown, the limits of human knowledge, and the courage required to venture into uncharted territory. Princess Théra's decision to lead an expedition through it symbolizes her willingness to challenge conventional wisdom and seek solutions beyond the familiar." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 30, link: "/books/the-wall-of-storms#chapter-30" } },
        { type: 'text', content: " The successful crossing of the Wall of Storms opens up new possibilities for Dara, revealing that there are other lands and peoples beyond the barrier. This discovery fundamentally changes the characters' understanding of their world and their place in it." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
        { type: 'text', content: " In the later books, the Wall of Storms continues to play a role as a communication barrier between Dara and Princess Théra's rebellion in Ukyu-Gondé. The difficulty of crossing the barrier makes communication and coordination between the two regions extremely challenging." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 1, link: "/books/speaking-bones#chapter-1" } },
        { type: 'text', content: " The Wall of Storms also serves as a symbol of the broader themes of the series, particularly the idea that apparent barriers and limitations can be overcome through innovation, courage, and cooperation. It represents the human capacity to adapt and find solutions to seemingly impossible challenges." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
    ]
};

export default function WallOfStormsPage() {
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