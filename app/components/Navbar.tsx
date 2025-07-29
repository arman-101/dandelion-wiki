'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FeedbackModal from './FeedbackModal';
import { WIKI_PAGES } from '../data/wiki-data';

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

// --- SEARCH BAR COMPONENT ---
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // Update the state to expect the 'type' property
    const [results, setResults] = useState<{ title: string; path: string; type: string; }[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setResults([]);
            return;
        }
        const filtered = WIKI_PAGES.filter(page =>
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
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow click
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
                                href="#"
                                onClick={(e) => { e.preventDefault(); handleResultClick(page.path); }}
                                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors"
                            >
                                {/* Updated structure to show type */}
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


export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0 flex items-center gap-3 text-2xl font-bold text-teal-600 dark:text-teal-400">
                                <Image src="/icon.png" alt="Wiki Icon" width={32} height={32} className="rounded-md" />
                                Dandelion Dynasty Wiki
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center space-x-4">
                                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors">Home</Link>
                                <div className="relative group">
                                    <button className="flex items-center text-gray-700 dark:text-gray-300 hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none"><span>Books</span><ChevronDownIcon /></button>
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="py-1">
                                            <Link href="/books/grace-of-kings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:[color:var(--color-accent-pink)]">The Grace of Kings</Link>
                                            <Link href="/books/wall-of-storms" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:[color:var(--color-accent-pink)]">The Wall of Storms</Link>
                                            <Link href="/books/the-veiled-throne" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:[color:var(--color-accent-pink)]">The Veiled Throne</Link> {/* <-- ADD THIS */}
                                            <Link href="/books/speaking-bones" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:[color:var(--color-accent-pink)]">Speaking Bones</Link> {/* <-- ADD THIS */}
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className="flex items-center text-gray-700 dark:text-gray-300 hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none"><span>Characters</span><ChevronDownIcon /></button>
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="py-1"><span className="block px-4 py-2 text-sm text-gray-400">Coming Soon</span></div>
                                    </div>
                                </div>
                                <Link href="/places" className="text-gray-700 dark:text-gray-300 hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors">Places</Link>
                            </div>
                            <div className="ml-4">
                                <SearchBar />
                            </div>
                            <button onClick={() => setIsModalOpen(true)} className="ml-4 px-3 py-2 bg-[--color-accent-pink] text-gray-800 rounded-md text-base font-medium hover:bg-opacity-80 transition-all cursor-pointer shadow-sm hover:shadow-lg hover:scale-105 transform">
                                Give Feedback
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="-mr-2 flex lg:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                            <Link href="/books/grace-of-kings" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">The Grace of Kings</Link>
                            <Link href="/books/wall-of-storms" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">The Wall of Storms</Link>
                            <Link href="/characters" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Characters</Link>
                            <Link href="/places" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Places</Link>
                            <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                                Give Feedback
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