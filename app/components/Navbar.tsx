'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FeedbackModal from './FeedbackModal';
import {
    ALL_WIKI_PAGES,
    ALL_BOOKS,
    MAIN_CHARACTERS,
    PLACES_TIRO_STATES,
    PLACES_BEYOND_DARA,
    MAIN_GODS,
    OTHER_PAGES
} from '../data/wiki-data';

// --- ICONS ---
const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
);
const CoffeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-2.25 2.25m0 0l-2.25 2.25M17.25 10.5l2.25 2.25m-4.5 0l2.25 2.25M15 21H9a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2z" />
    </svg>
);

// --- SEARCH BAR COMPONENT ---
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<(typeof ALL_WIKI_PAGES)>([]);
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setResults([]);
            return;
        }
        const filtered = ALL_WIKI_PAGES.filter(page =>
            page.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered);
    }, [searchTerm]);

    const handleResultClick = (path: string) => {
        router.push(path);
        setSearchTerm('');
        setResults([]);
        setIsFocused(false);
    };

    return (
        <div className="relative w-full md:w-64">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search the wiki..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <SearchIcon />
                </div>
            </div>
            {isFocused && results.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {results.map(page => (
                        <li key={page.path}>
                            <a
                                href={page.path}
                                onClick={(e) => { e.preventDefault(); handleResultClick(page.path); }}
                                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors"
                            >
                                <div className="flex justify-between items-center">
                                    <span>{page.title}</span>
                                    <span className="text-xs italic text-gray-400 dark:text-gray-500">{page.type}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// --- MAIN NAVBAR COMPONENT ---
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const DropdownItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
        <Link href={href} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:[color:var(--color-accent-pink)] transition-colors">
            {children}
        </Link>
    );

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0 flex items-center gap-3 text-2xl font-bold text-teal-600 dark:text-teal-400">
                                <Image src="/icon.png" alt="Wiki Icon" width={32} height={32} className="rounded-md" />
                                TDD Wiki
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center gap-2">
                            {/* Main Nav Links */}
                            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors">
                                Home
                            </Link>
                            {/* Books Dropdown */}
                            <div className="relative group">
                                <button onClick={() => router.push('/books')} className="flex items-center text-gray-700 dark:text-gray-300 hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none cursor-pointer">
                                    <span>Books</span>
                                    <ChevronDownIcon />
                                </button>
                                <div className="absolute left-0 top-full mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="py-1">
                                        {ALL_BOOKS.map(book => (
                                            <DropdownItem key={book.path} href={book.path}>
                                                {book.title}
                                            </DropdownItem>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Characters Dropdown */}
                            <div className="relative group">
                                <button onClick={() => router.push('/characters')} className="flex items-center text-gray-700 dark:text-gray-300 hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none cursor-pointer">
                                    <span>Characters</span>
                                    <ChevronDownIcon />
                                </button>
                                <div className="absolute left-0 top-full mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="py-1">
                                        {MAIN_CHARACTERS.map(char => (
                                            <DropdownItem key={char.path} href={char.path}>
                                                {char.title}
                                            </DropdownItem>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* More Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-gray-700 dark:text-gray-300 hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none">
                                    <span>More</span>
                                    <ChevronDownIcon />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="py-1">
                                        <div className="relative group/submenu">
                                            <Link href="/places" className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:[color:var(--color-accent-pink)] transition-colors">
                                                <span>Places</span>
                                                <span className="text-xs">▶</span>
                                            </Link>
                                            <div className="absolute left-full top-0 -mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                                <div className="py-1 font-semibold text-xs px-4 pt-2 pb-1 text-gray-400">Tiro States</div>
                                                {PLACES_TIRO_STATES.map(p => (
                                                    <DropdownItem key={p.path} href={p.path}>
                                                        {p.title}
                                                    </DropdownItem>
                                                ))}
                                                <hr className="my-1 border-gray-200 dark:border-gray-600" />
                                                <div className="py-1 font-semibold text-xs px-4 pt-1 pb-1 text-gray-400">Beyond Dara</div>
                                                {PLACES_BEYOND_DARA.map(p => (
                                                    <DropdownItem key={p.path} href={p.path}>
                                                        {p.title}
                                                    </DropdownItem>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative group/submenu">
                                            <Link href="/gods" className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:[color:var(--color-accent-pink)] transition-colors">
                                                <span>Gods</span>
                                                <span className="text-xs">▶</span>
                                            </Link>
                                            <div className="absolute left-full top-0 -mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                                <div className="py-1">
                                                    {MAIN_GODS.map(g => (
                                                        <DropdownItem key={g.path} href={g.path}>
                                                            {g.title}
                                                        </DropdownItem>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <DropdownItem href="/concepts">Concepts</DropdownItem>
                                        <DropdownItem href="/maps">Maps</DropdownItem>
                                        <hr className="my-1 border-gray-200 dark:border-gray-600" />
                                        {OTHER_PAGES.map(page => (
                                            <DropdownItem key={page.path} href={page.path}>
                                                {page.title}
                                            </DropdownItem>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Action Items */}
                            <div className="flex items-center border-l border-gray-200 dark:border-gray-700 ml-4 pl-4 gap-2">
                                <SearchBar />
                                <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition-all whitespace-nowrap">
                                    Feedback
                                </button>
                                <a href="https://buymeacoffee.com/darknebulax1" target='_blank' rel="noopener noreferrer" className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[--color-accent-pink] transition-colors" aria-label="Buy Me A Coffee">
                                    <CoffeeIcon />
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="-mr-2 flex lg:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none ml-2">
                                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 dark:border-gray-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </Link>
                            <Link href="/books" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Books
                            </Link>
                            <Link href="/characters" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Characters
                            </Link>
                            <Link href="/places" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Places
                            </Link>
                            <Link href="/gods" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Gods
                            </Link>
                            <Link href="/concepts" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Concepts
                            </Link>
                            <Link href="/maps" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Maps
                            </Link>
                            <hr className="my-1 border-gray-200 dark:border-gray-600" />
                            {OTHER_PAGES.map(page => (
                                <Link key={page.path} href={page.path} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                    {page.title}
                                </Link>
                            ))}
                            <hr className="my-1 border-gray-200 dark:border-gray-600" />
                            <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Feedback
                            </button>
                            <div className="p-2">
                                <SearchBar />
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <FeedbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}