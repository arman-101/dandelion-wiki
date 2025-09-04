'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ALL_CONCEPTS } from '@/app/data/wiki-data';
import { ConceptNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const quotes = [
    // --- The Grace of Kings ---
    {
        text: "The emperor is just a man, after all.",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-1"
    },
    {
        text: "Do not forget.",
        speaker: "Phin Zyndu",
        characterLink: "/characters/phin-zyndu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-2"
    },
    {
        text: "A bright and tenacious flower will not bloom in obscurity.",
        speaker: "Old Xana Woman",
        characterLink: null,
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-3"
    },
    {
        text: "All life is an experiment. Who can plan so far ahead?",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-4"
    },
    {
        text: "Great men are always misunderstood by their own age. And great seldom means good.",
        speaker: "Tututika",
        characterLink: "/gods/tututika",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-5"
    },
    {
        text: "If you try to obey the law, and the judges call you a criminal anyway, then you might as well live up to the name.",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-8"
    },
    {
        text: "A man’s circumstances are not determined by his talents, but by where he chooses to put his talents to work.",
        speaker: "Lügo Crupo",
        characterLink: "/characters/lugo-crupo",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-10"
    },
    {
        text: "No fish can live in perfectly clear water.",
        speaker: "Rin Coda",
        characterLink: "/characters/rin-coda",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-14"
    },
    {
        text: "Show is substance.",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-17"
    },
    {
        text: "I refuse to believe in the futility of change, because I have seen how the lowly dandelion, with time and patience, can crack the strongest paving stone.",
        speaker: "Luan Zya",
        characterLink: "/characters/luan-zya",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-18"
    },
    {
        text: "What’s ‘dirty’ about winning?",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-22"
    },
    {
        text: "To be a hegemon is to be a slave to the idea of being a hegemon.",
        speaker: "Torulu Pering",
        characterLink: null,
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-35"
    },
    {
        text: "When you learn enough about the world, even a blade of grass can be a weapon.",
        speaker: "The Dockmaster",
        characterLink: null,
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-40"
    },
    {
        text: "The dandelion is a common flower, a flower of the people.",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings#chapter-51"
    },

    // --- The Wall of Storms ---
    {
        text: "A sincere apology must come from the heart and not be done for mere show.",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-3"
    },
    {
        text: "Talent is like a pretty feather in the tail of a peacock, daughter. It brings joy to the powerful but only sorrow to the bird.",
        speaker: "Aki Kidosu",
        characterLink: null,
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-5"
    },
    {
        text: "True courage is to insist on seeing when all around you is darkness.",
        speaker: "The Orchid",
        characterLink: null,
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-6"
    },
    {
        text: "A young dynasty must pass through a wall of storms before the first succession.",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-18"
    },
    {
        text: "To achieve a better life for the people, why must I choose to stain my name in the annals of Dara?",
        speaker: "Jia Matiza",
        characterLink: "/characters/jia-matiza",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-21"
    },
    {
        text: "The grace of kings lies in graceful lies.",
        speaker: "Noda Mi",
        characterLink: "/characters/noda-mi",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-27"
    },
    {
        text: "Good and evil are mere labels we place on deeds that benefit or harm us.",
        speaker: "Pékyu Tenryo",
        characterLink: "/characters/pekyu-tenryo",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-40"
    },
    {
        text: "We don’t fight to leave a name; we fight because it’s the right thing to do.",
        speaker: "Captain Atamu",
        characterLink: null,
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-52"
    },

    // --- The Veiled Throne ---
    {
        text: "A lie became the truth when enough people had reasons to pretend it was true.",
        speaker: "Narrator",
        characterLink: null,
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne#chapter-3"
    },
    {
        text: "Aphorisms can’t help you survive, but the ability to hold in mind competing ideals just might.",
        speaker: "Oga Kidosu",
        characterLink: "/characters/oga-kidosu",
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne#chapter-6"
    },
    {
        text: "The heart isn’t a fixed pool like a water bubble in the grass sea; it grows and swells like the ocean.",
        speaker: "Princess Théra",
        characterLink: "/characters/princess-thera",
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne#chapter-14"
    },
    {
        text: "We are a family of choice, and we seek a life of clean conscience and constant learning.",
        speaker: "Widi Tucru",
        characterLink: "/characters/the-blossom-gang",
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne#chapter-34"
    },
    {
        text: "Love, once given, cannot be rescinded.",
        speaker: "Princess Fara",
        characterLink: "/characters/princess-fara",
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne#chapter-46"
    },

    // --- Speaking Bones ---
    {
        text: "There's always a second act. Always.",
        speaker: "Princess Théra",
        characterLink: "/characters/princess-thera",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones#chapter-4"
    },
    {
        text: "When everything you’ve tried has failed, the only path left is to do something impossible, something new.",
        speaker: "Princess Théra",
        characterLink: "/characters/princess-thera",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones#chapter-8"
    },
    {
        text: "It is enough that we have loved and are loved. There is no meaning in eternity; only now, only here.",
        speaker: "Thoryo",
        characterLink: "/characters/thoryo",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones#chapter-11"
    },
    {
        text: "The people of Dara speak for themselves. I have never served you; I serve the people of Dara.",
        speaker: "Cogo Yelu",
        characterLink: "/characters/cogo-yelu",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones#chapter-50"
    },
    {
        text: "To tell a new story of where to go, we must first understand the story of where we came from.",
        speaker: "Sataari",
        characterLink: "/characters/sataari",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones#chapter-51"
    },
    {
        text: "Where doubt ends, evil begins.",
        speaker: "Empress Shizona (Fara)",
        characterLink: "/characters/princess-fara",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones#chapter-53"
    },
    {
        text: "The universe is knowable.",
        speaker: "Luan Zya",
        characterLink: "/characters/luan-zya",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms#chapter-44"
    },
];


export default function QuotesPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    return (
        <>
            <ConceptNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Memorable Quotes</h1>
                <div className="space-y-8">
                    {quotes.map((quote, index) => (
                        <div key={index} className="border-l-4 border-teal-500 pl-6">
                            <blockquote className="text-xl italic text-gray-800 dark:text-gray-200 leading-relaxed">
                                &ldquo;{quote.text}&rdquo;
                            </blockquote>
                            <div className="mt-4 text-right">
                                <p className="font-semibold text-gray-700 dark:text-gray-300">
                                    {quote.characterLink ? (
                                        <Link href={quote.characterLink} className="hover:text-teal-500 transition-colors">
                                            - {quote.speaker}
                                        </Link>
                                    ) : (
                                        `- ${quote.speaker}`
                                    )}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    from <Link href={quote.bookLink} className="italic hover:underline">{quote.book}</Link>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}