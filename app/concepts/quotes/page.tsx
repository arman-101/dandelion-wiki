'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ALL_CONCEPTS } from '@/app/data/wiki-data';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const quotes = [
  {
    text: "A hegemon is a hegemon. The imperial grace is only the shadow of the imperial sword.",
    speaker: "Kuni Garu",
    characterLink: "/characters/kuni-garu",
    book: "The Grace of Kings",
    bookLink: "/books/the-grace-of-kings"
  },
  {
    text: "To win a battle, you have to be willing to lose it.",
    speaker: "Mata Zyndu",
    characterLink: "/characters/mata-zyndu",
    book: "The Grace of Kings",
    bookLink: "/books/the-grace-of-kings"
  },
  {
    text: "The powerful are always lied to. We have to be experts at seeing through flattery.",
    speaker: "Jia Matiza",
    characterLink: "/characters/jia-matiza",
    book: "The Grace of Kings",
    bookLink: "/books/the-grace-of-kings"
  },
  {
    text: "History is a set of lies agreed upon. I prefer the truth of the moment.",
    speaker: "Gin Mazoti",
    characterLink: "/characters/gin-mazoti",
    book: "The Wall of Storms",
    bookLink: "/books/the-wall-of-storms"
  },
  {
    text: "The people are a great ocean. Their movements are slow, but they are irresistible.",
    speaker: "Luan Zya",
    characterLink: "/characters/luan-zya",
    book: "The Grace of Kings",
    bookLink: "/books/the-grace-of-kings"
  },
  {
    text: "When you can’t win by being better, you win by being different.",
    speaker: "Empress Rina",
    characterLink: "/characters/rina",
    book: "The Wall of Storms",
    bookLink: "/books/the-wall-of-storms"
  },
  {
    text: "A scholar's ink is the blood of a soldier.",
    speaker: "Goztan",
    characterLink: "/characters/goztan",
    book: "The Veiled Throne",
    bookLink: "/books/the-veiled-throne"
  },
  {
    text: "We make choices, and then our choices make us.",
    speaker: "Théra",
    characterLink: "/characters/thera",
    book: "The Veiled Throne",
    bookLink: "/books/the-veiled-throne"
  },
  {
    text: "Power is a story. The better story wins.",
    speaker: "Cogo",
    characterLink: "/characters/cogo",
    book: "Speaking Bones",
    bookLink: "/books/speaking-bones"
  },
  {
    text: "The past is a weapon. The trick is to know which end to hold.",
    speaker: "Phyro",
    characterLink: "/characters/phyro",
    book: "The Veiled Throne",
    bookLink: "/books/the-veiled-throne"
  },
  {
    text: "Tradition is just the consensus of the dead. We, the living, have our own consensus to make.",
    speaker: "Zomi Kidosu",
    characterLink: "/characters/zomi-kidosu",
    book: "The Wall of Storms",
    bookLink: "/books/the-wall-of-storms"
  },
  {
    text: "Honor is the armor of the righteous. But even the best armor can become a cage.",
    speaker: "Mata Zyndu",
    characterLink: "/characters/mata-zyndu",
    book: "The Grace of Kings",
    bookLink: "/books/the-grace-of-kings"
  },
  {
    text: "To build a new world, you must first be willing to shatter the old one.",
    speaker: "Timu",
    characterLink: "/characters/timu",
    book: "Speaking Bones",
    bookLink: "/books/speaking-bones"
  },
  {
    text: "A throne is the most comfortable chair in the world, and also the most painful.",
    speaker: "Princess Tutu",
    characterLink: "/characters/tutu",
    book: "The Veiled Throne",
    bookLink: "/books/the-veiled-throne"
  },
  {
    text: "Justice is not a destination. It is a direction.",
    speaker: "Kuni Garu",
    characterLink: "/characters/kuni-garu",
    book: "Speaking Bones",
    bookLink: "/books/speaking-bones"
  },
  {
    text: "Cleverness is a tool, not a virtue. A hammer can build a house or cave in a skull.",
    speaker: "Jia Matiza",
    characterLink: "/characters/jia-matiza",
    book: "The Wall of Storms",
    bookLink: "/books/the-wall-of-storms"
  },
  {
    text: "Some chains are forged of love. They are the strongest and the cruelest.",
    speaker: "Soto",
    characterLink: "/characters/soto",
    book: "The Veiled Throne",
    bookLink: "/books/the-veiled-throne"
  },
  {
    text: "Never mistake a map for the territory. The world is always wilder than our descriptions of it.",
    speaker: "Luan Zya",
    characterLink: "/characters/luan-zya",
    book: "The Grace of Kings",
    bookLink: "/books/the-grace-of-kings"
  },
  {
    text: "A free person is not someone who has no master, but someone who is their own master.",
    speaker: "Gin Mazoti",
    characterLink: "/characters/gin-mazoti",
    book: "The Wall of Storms",
    bookLink: "/books/the-wall-of-storms"
  }
];


export default function QuotesPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

  return (
    <>
        <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
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