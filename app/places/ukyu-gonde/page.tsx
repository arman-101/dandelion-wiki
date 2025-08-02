'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR UKYU-GONDÉ (WITH FULL INLINE REFERENCES FROM ALL FOUR BOOKS) ---
const placeData: Place = {
    name: "Ukyu-Gondé",
    image: "/places/ukyu-gonde.png",
    introduction: "Ukyu-Gondé is a vast region beyond the Wall of Storms, home to the nomadic Agon people and later conquered by the Lyucu Empire. It becomes the setting for Princess Théra's rebellion and a crucial battleground in the war against Lyucu domination.",
    infoBox: {
        type: "Region",
        location: "Beyond the Wall of Storms",
        climate: "Harsh scrublands and grasslands",
        population: "Agon nomads, Lyucu settlers",
        ruler: "Lyucu Empire (conquered), Agon tribes (original)",
        significance: "Home of the Agon people, Lyucu conquest, Rebellion headquarters",
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    geography: [
        { type: 'text', content: "Ukyu-Gondé is a vast region of harsh scrublands and grasslands, characterized by its unforgiving climate and sparse vegetation. The landscape is dominated by rolling plains, rocky outcrops, and seasonal rivers that provide the only reliable sources of water." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 1, link: "/books/the-veiled-throne#chapter-1" } },
        { type: 'text', content: " The region is home to various wildlife adapted to the harsh conditions, including the massive garinafin war beasts that the Lyucu use for transportation and warfare. The terrain provides both challenges and opportunities for the nomadic peoples who call it home." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
    ],
    culture: [
        { type: 'text', content: "The original inhabitants of Ukyu-Gondé are the Agon people, a nomadic tribe with a rich cultural heritage based on their connection to the land and their warrior traditions. The Agon have a deep spiritual connection to their environment and maintain ancient customs passed down through generations." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
        { type: 'text', content: " The Lyucu conquest brings dramatic cultural changes, as the invaders impose their own customs and social structures. The Lyucu establish permanent settlements and introduce their garinafin-based economy, fundamentally altering the traditional nomadic way of life." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 3, link: "/books/the-veiled-throne#chapter-3" } },
        { type: 'text', content: " Despite the conquest, the Agon maintain their cultural identity and traditions, often practicing them in secret. Their resilience and determination to preserve their heritage becomes a source of strength in the resistance movement." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 10, link: "/books/speaking-bones#chapter-10" } },
    ],
    history: [
        {
            event: "The Agon Homeland",
            summary: [
                { type: 'text', content: "Ukyu-Gondé has been the homeland of the Agon people for generations, a nomadic tribe who have adapted to the harsh conditions of the scrublands. The Agon have developed a sophisticated understanding of their environment and maintain a rich cultural heritage." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
                { type: 'text', content: " The Agon way of life is centered around their connection to the land, their warrior traditions, and their spiritual practices. They have maintained their independence and cultural identity despite the challenges of their harsh environment." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 10, link: "/books/speaking-bones#chapter-10" } },
            ]
        },
        {
            event: "The Lyucu Conquest",
            summary: [
                { type: 'text', content: "The Lyucu Empire, led by Pékyu Tenryo, conquers Ukyu-Gondé and subjugates the Agon people. The conquest is marked by violence and cultural suppression, as the Lyucu impose their own social structures and customs on the region." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 3, link: "/books/the-veiled-throne#chapter-3" } },
                { type: 'text', content: " The Lyucu establish permanent settlements and introduce their garinafin-based economy, fundamentally altering the traditional nomadic way of life. They use the region as a base for their expansion and as a source of resources and labor." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 5, link: "/books/the-veiled-throne#chapter-5" } },
            ]
        },
        {
            event: "The Arrival of Princess Théra",
            summary: [
                { type: 'text', content: "Princess Théra's expedition through the Wall of Storms brings her to Ukyu-Gondé, where she discovers the subjugated Agon people. She forms an alliance with Prince Takval Aragoz, the Agon leader, and begins to build a coalition of resistance against the Lyucu Empire." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 7, link: "/books/the-veiled-throne#chapter-7" } },
                { type: 'text', content: " Théra's arrival marks a turning point for the region, as she brings new hope and a vision of freedom from Lyucu domination. Her alliance with the Agon combines Dara's technological innovations with Agon warrior traditions." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 8, link: "/books/the-veiled-throne#chapter-8" } },
            ]
        },
        {
            event: "The Rebellion and Guerrilla Warfare",
            summary: [
                { type: 'text', content: "Ukyu-Gondé becomes the headquarters for Princess Théra's rebellion against the Lyucu Empire. The region's harsh terrain and the Agon's knowledge of the land provide ideal conditions for guerrilla warfare." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 9, link: "/books/speaking-bones#chapter-9" } },
                { type: 'text', content: " The rebellion achieves several significant victories, including successful raids on Lyucu supply convoys and the establishment of secret bases throughout the region. The resistance movement gains momentum as more people join the cause." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 10, link: "/books/speaking-bones#chapter-10" } },
            ]
        },
        {
            event: "The Discovery of Ancient Ruins",
            summary: [
                { type: 'text', content: "During the rebellion, the Agon discover the ruins of an ancient city, Taten-ryo-alvovo, the City of Ghosts. The city is a place of great spiritual power and a repository of lost knowledge." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 10, link: "/books/speaking-bones#chapter-10" } },
                { type: 'text', content: " The discovery of the ancient ruins is a turning point for the Agon, as they begin to reclaim their own history and culture from the shadow of Lyucu domination. The city becomes a symbol of their resilience and cultural heritage." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 10, link: "/books/speaking-bones#chapter-10" } },
            ]
        },
        {
            event: "The Ongoing Struggle",
            summary: [
                { type: 'text', content: "Ukyu-Gondé remains a contested region, with the rebellion continuing to fight against Lyucu domination. The region has become a symbol of resistance and hope for those who refuse to accept foreign rule." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 9, link: "/books/speaking-bones#chapter-9" } },
                { type: 'text', content: " The ongoing struggle in Ukyu-Gondé represents the broader conflict between the forces of oppression and the desire for freedom and self-determination. The region's future remains uncertain as the war continues." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 10, link: "/books/speaking-bones#chapter-10" } },
            ]
        },
    ]
};

export default function UkyuGondePage() {
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