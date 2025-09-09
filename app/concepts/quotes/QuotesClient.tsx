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
        bookLink: "/books/the-grace-of-kings",
        chapter: 1
    },
    {
        text: "A dandelion seed can grow anywhere, even in the cracks of a stone wall.",
        speaker: "Jia Matiza",
        characterLink: "/characters/jia-matiza",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings",
        chapter: 4
    },
    {
        text: "The chrysanthemum blooms last against the winter wind.",
        speaker: "Mata Zyndu",
        characterLink: "/characters/mata-zyndu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings",
        chapter: 21
    },
    {
        text: "A true leader serves the people, not the other way around.",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "The Grace of Kings",
        bookLink: "/books/the-grace-of-kings",
        chapter: 51
    },
    // --- The Wall of Storms ---
    {
        text: "The sword and the abacus must work together, not against each other.",
        speaker: "Empress Jia",
        characterLink: "/characters/jia-matiza",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms",
        chapter: 8
    },
    {
        text: "Innovation comes not from rejecting the past, but from understanding it.",
        speaker: "Luan Zya",
        characterLink: "/characters/luan-zya",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms",
        chapter: 15
    },
    {
        text: "The greatest victory is the one that prevents the next war.",
        speaker: "Gin Mazoti",
        characterLink: "/characters/gin-mazoti",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms",
        chapter: 32
    },
    {
        text: "Power without wisdom is like a sword without a handle.",
        speaker: "Consort Risana",
        characterLink: "/characters/consort-risana",
        book: "The Wall of Storms",
        bookLink: "/books/the-wall-of-storms",
        chapter: 55
    },
    // --- The Veiled Throne ---
    {
        text: "The greatest enemy is not the one who fights you, but the one who makes you forget who you are.",
        speaker: "Princess Théra",
        characterLink: "/characters/princess-thera",
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne",
        chapter: 10
    },
    {
        text: "Sometimes the most revolutionary act is simply to remember.",
        speaker: "Çami Phithadapu",
        characterLink: "/characters/cami-phithadapu",
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne",
        chapter: 25
    },
    {
        text: "The past is not dead; it is not even past.",
        speaker: "Takval Aragoz",
        characterLink: "/characters/takval-aragoz",
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne",
        chapter: 40
    },
    {
        text: "True strength lies not in conquering others, but in conquering oneself.",
        speaker: "Savo Ryoto",
        characterLink: "/characters/souliyan-aragoz",
        book: "The Veiled Throne",
        bookLink: "/books/the-veiled-throne",
        chapter: 55
    },
    // --- Speaking Bones ---
    {
        text: "The voices of the ancestors are not silent; we have simply forgotten how to listen.",
        speaker: "Thoryo",
        characterLink: "/characters/thoryo",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones",
        chapter: 5
    },
    {
        text: "Peace is not the absence of conflict, but the presence of understanding.",
        speaker: "Princess Fara",
        characterLink: "/characters/princess-fara",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones",
        chapter: 20
    },
    {
        text: "The greatest magic is the magic of memory, for it can bring the dead back to life.",
        speaker: "Çami Phithadapu",
        characterLink: "/characters/cami-phithadapu",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones",
        chapter: 45
    },
    {
        text: "In the end, we are all just stories. Make yours worth telling.",
        speaker: "Kuni Garu",
        characterLink: "/characters/kuni-garu",
        book: "Speaking Bones",
        bookLink: "/books/speaking-bones",
        chapter: 60
    }
];

export default function QuotesClient() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    return (
        <>
            <ConceptNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-text-primary dark:text-text-primary mb-4">
                        Memorable Quotes
                    </h1>
                    <p className="text-lg text-text-secondary dark:text-text-secondary">
                        Wisdom, wit, and philosophy from The Dandelion Dynasty series
                    </p>
                </div>

                <div className="grid gap-6">
                    {quotes.map((quote, index) => (
                        <div key={index} className="bg-background-secondary dark:bg-background-secondary border border-border-primary dark:border-border-primary rounded-lg p-6 shadow-sm">
                            <blockquote className="text-lg italic text-text-primary dark:text-text-primary mb-4 leading-relaxed">
                                "{quote.text}"
                            </blockquote>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <p className="text-text-secondary dark:text-text-secondary">
                                    {quote.characterLink ? (
                                        <Link href={quote.characterLink} className="font-medium hover:underline">
                                            {quote.speaker}
                                        </Link>
                                    ) : (
                                        `- ${quote.speaker}`
                                    )}
                                </p>
                                <p className="text-sm text-text-light dark:text-text-light">
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
