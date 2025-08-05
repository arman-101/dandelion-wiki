'use client';

import GodPageTemplate from '../../components/GodPageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR FITHOWÉO ---
const godData: God = {
    name: "Fithowéo",
    image: "/gods/fithoweo.png",
    introduction: "Fithowéo is the formidable patron god of Rima, presiding over war, the hunt, and the forge. Once blinded in a divine conflict, he embodies the courage to fight on when all seems lost, valuing resilience and strategy over simple victory.",
    infoBox: {
        Patronage: { text: "Rima", link: "/places/rima" },
        Domains: "War, The Hunt, The Forge",
        Pawi: "Wolf",
    },
    mythology: [
        { type: 'text', content: "Blinded by his brother Kiji during the Diaspora Wars, Fithowéo initially hid from the world in shame and self-pity. He was taught by a humble, night-blooming orchid that true sight is not limited to the eyes and that his duty was to represent not just victory, but the courage to fight against overwhelming odds. Inspired, he took obsidian stones for eyes and rejoined the world, having learned to 'see' through sound and other senses." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 6, link: "/books/the-wall-of-storms#chapter-6" } },
    ],
    appearances: [
        {
            event: "The Divine Debate",
            summary: [
                { type: 'text', content: "Fithowéo is a key voice in the gods' debates. He argues over Emperor Mapidéré's legacy and is later a proponent for intervening against the Lyucu, questioning whether the gods' pact should apply to foreign invaders." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 45, link: "/books/the-wall-of-storms#chapter-45" } },
            ]
        },
        {
            event: "Mentoring Princess Théra",
            summary: [
                { type: 'text', content: "Disguised as a master craftsman in the palace, Fithowéo appears to Princess Théra. He teaches her about the interference patterns of waves using a musical instrument, providing her with the crucial insight needed to understand and scientifically defeat the 'magic mirrors' used by the Hegemon cults. This act shows his role as a teacher of unconventional warfare and strategy, guiding a hero who fights with intellect rather than a sword." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 26, link: "/books/the-wall-of-storms#chapter-26" } },
            ]
        },
    ]
};


export default function FithoweoPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_GODS]);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

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