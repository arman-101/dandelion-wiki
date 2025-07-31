'use client'; // FIX 1: Add this directive at the very top of the file

import GodPageTemplate from '../../components/GodPageTemplate';
import { God } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation'; // Note: Changed to .tsx assuming it's a TSX file
import { getSurroundingPages } from '@/app/utils/navigationUtils';
import { ALL_GODS } from '@/app/data/wiki-data'; // Removed unused ALL_CHARACTERS and ALL_PLACES

// --- DATA FOR FITHOWÉO ---
const godData: God = {
    name: "Fithowéo",
    image: "/gods/fithoweo.png",
    introduction: "Fithowéo is the formidable patron god of Rima, presiding over war, the hunt, and the forge. He is a deity of conflict, struggle, and strength.",
    infoBox: {
        Patronage: { text: "Rima", link: "/places/rima" },
        Domains: "War, The Hunt, The Forge",
        Pawi: "Wolf",
    },
    mythology: [
        { type: 'text', content: "Blinded by his brother Kiji during the Diaspora Wars, Fithowéo initially hid from the world in shame. He learned from a humble orchid that true sight is not limited to the eyes and that his duty was to represent not just victory, but the courage to fight against overwhelming odds. He now 'sees' through sound and other senses, and wears eyes of obsidian." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "The Divine Debate",
            summary: [
                { type: 'text', content: "Fithowéo is a key voice in the gods' debate over Emperor Mapidéré's legacy and later, over the Lyucu invasion. He often represents the perspective of martial honor and the necessity of conflict, but his blindness has given him a deeper understanding of struggle beyond simple victory." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/grace-of-kings#chapter-5" } },
            ]
        },
        {
            event: "Mentoring Princess Théra",
            summary: [
                { type: 'text', content: "Disguised as a master craftsman, Fithowéo appears to Princess Théra in the palace. He teaches her about the interference patterns of waves using a musical instrument, providing her with the crucial insight needed to understand and ultimately defeat the 'magic mirrors' used by the Hegemon cults. This act shows his role as a teacher of unconventional warfare and strategy." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 26, link: "/books/wall-of-storms#chapter-26" } },
            ]
        },
    ]
};


export default function FithoweoPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_GODS);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    // FIX 2: Wrap your returned JSX in parentheses ()
    return (
        <>
            <TopPageNavigation
                prevPage={prevPage}
                nextPage={nextPage}
                returnLink={returnLink}
            />
            <GodPageTemplate godData={godData} />
        </>
    );
}