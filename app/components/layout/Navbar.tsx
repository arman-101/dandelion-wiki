'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchBar from '../features/SearchBar';
import { ThemeToggleButton } from '../features/ThemeToggleButton';
import { ChevronDownIcon, MenuIcon, XIcon, CoffeeIcon } from '../ui/Icons';
import {
    ALL_BOOKS,
    PLACES_TIRO_STATES,
    PLACES_BEYOND_DARA,
    MAIN_GODS,
    OTHER_PAGES,
    CHARACTERS_BY_BOOK_NAV
} from '../../data/wiki-data';

// Extract FeedbackModal import
import FeedbackModal from '../features/FeedbackModal';

interface DropdownItemProps {
    href: string;
    children: React.ReactNode;
}

const DropdownItem = ({ href, children }: DropdownItemProps) => (
    <Link href={href} className="block px-4 py-2 text-sm text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary hover:[color:var(--color-accent-pink)] transition-colors">
        {children}
    </Link>
);

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav className="bg-bg-primary dark:bg-bg-tertiary shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0 flex items-center gap-3 text-2xl font-bold text-link dark:text-link-dark">
                                <Image src="/icon.png" alt="Wiki Icon" width={32} height={32} className="rounded-md" />
                                TDD Wiki
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center gap-2">
                            {/* Main Nav Links */}
                            <Link href="/" className="text-text-secondary dark:text-text-secondary hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors">
                                Home
                            </Link>
                            
                            {/* Books Dropdown */}
                            <div className="relative group">
                                <button onClick={() => router.push('/books')} className="flex items-center text-text-secondary dark:text-text-secondary hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none cursor-pointer">
                                    <span>Books</span>
                                    <ChevronDownIcon />
                                </button>
                                <div className="absolute left-0 top-full mt-2 w-56 rounded-md shadow-lg bg-bg-primary dark:bg-bg-card ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                                <button onClick={() => router.push('/characters')} className="flex items-center text-text-secondary dark:text-text-secondary hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none cursor-pointer">
                                    <span>Characters</span>
                                    <ChevronDownIcon />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-md shadow-lg bg-bg-card dark:bg-bg-card ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="py-1">
                                        <Link href="/characters" className="flex justify-between items-center px-4 py-2 text-sm text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary hover:[color:var(--color-accent-pink)] transition-colors">
                                            All Characters
                                        </Link>
                                        <hr className="my-1 border-border-secondary dark:border-border-secondary" />
                                        
                                        {/* Character submenus */}
                                        {Object.entries(CHARACTERS_BY_BOOK_NAV).map(([bookKey, characters]) => (
                                            <div key={bookKey} className="relative group/submenu">
                                                <div className="flex justify-between items-center px-4 py-2 text-sm text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary hover:[color:var(--color-accent-pink)] transition-colors">
                                                    <span>{bookKey} Characters</span>
                                                    <span className="text-xs">▶</span>
                                                </div>
                                                <div className="absolute left-full top-0 -mt-1 w-56 rounded-md shadow-lg bg-bg-card dark:bg-bg-card ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                                    <div className="py-1">
                                                        {characters.map((char) => (
                                                            <DropdownItem key={`${bookKey}-${char.link}`} href={char.link}>
                                                                {char.name}
                                                            </DropdownItem>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* More Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-text-secondary dark:text-text-secondary hover:[color:var(--color-accent-pink)] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none">
                                    <span>More</span>
                                    <ChevronDownIcon />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-md shadow-lg bg-bg-card dark:bg-bg-card ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="py-1">
                                        <div className="relative group/submenu">
                                            <Link href="/places" className="flex justify-between items-center px-4 py-2 text-sm text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary hover:[color:var(--color-accent-pink)] transition-colors">
                                                <span>Places</span>
                                                <span className="text-xs">▶</span>
                                            </Link>
                                            <div className="absolute left-full top-0 -mt-1 w-56 rounded-md shadow-lg bg-bg-card dark:bg-bg-card ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                                <div className="py-1 font-semibold text-xs px-4 pt-2 pb-1 text-text-light">Tiro States</div>
                                                {PLACES_TIRO_STATES.map(p => (
                                                    <DropdownItem key={p.path} href={p.path}>
                                                        {p.title}
                                                    </DropdownItem>
                                                ))}
                                                <hr className="my-1 border-border-secondary dark:border-border-secondary" />
                                                <div className="py-1 font-semibold text-xs px-4 pt-1 pb-1 text-text-light">Beyond Dara</div>
                                                {PLACES_BEYOND_DARA.map(p => (
                                                    <DropdownItem key={p.path} href={p.path}>
                                                        {p.title}
                                                    </DropdownItem>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative group/submenu">
                                            <Link href="/gods" className="flex justify-between items-center px-4 py-2 text-sm text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary hover:[color:var(--color-accent-pink)] transition-colors">
                                                <span>Gods</span>
                                                <span className="text-xs">▶</span>
                                            </Link>
                                            <div className="absolute left-full top-0 -mt-1 w-56 rounded-md shadow-lg bg-bg-card dark:bg-bg-card ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
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
                                        <hr className="my-1 border-border-secondary dark:border-border-secondary" />
                                        <div className="relative group/submenu">
                                            <Link href="/other/pages" className="flex justify-between items-center px-4 py-2 text-sm text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary hover:[color:var(--color-accent-pink)] transition-colors">
                                                <span>Other Pages</span>
                                                <span className="text-xs">▶</span>
                                            </Link>
                                            <div className="absolute left-full top-0 -mt-1 w-56 rounded-md shadow-lg bg-bg-card dark:bg-bg-card ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                                <div className="py-1">
                                                    {OTHER_PAGES.map(page => (
                                                        <DropdownItem key={page.path} href={page.path}>
                                                            {page.title}
                                                        </DropdownItem>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Action Items */}
                            <div className="flex items-center border-l border-border-secondary dark:border-border-primary ml-4 pl-4 gap-2">
                                <SearchBar />
                                <ThemeToggleButton />
                                <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark transition-all whitespace-nowrap">
                                    Feedback
                                </button>
                                <a href="https://buymeacoffee.com/darknebulax1" target='_blank' rel="noopener noreferrer" className="p-2 rounded-full text-text-light dark:text-text-light hover:bg-bg-tertiary dark:hover:bg-border-primary hover:text-[--color-accent-pink] transition-colors" aria-label="Buy Me A Coffee">
                                    <CoffeeIcon />
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="-mr-2 flex lg:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-bg-tertiary dark:bg-bg-card inline-flex items-center justify-center p-2 rounded-md text-text-light hover:text-text-primary hover:bg-border-primary dark:hover:bg-border-primary focus:outline-none ml-2">
                                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-border-secondary dark:border-border-primary">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <div className="p-2">
                                <SearchBar />
                            </div>
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Home
                            </Link>
                            <Link href="/books" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Books
                            </Link>
                            <Link href="/characters" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Characters
                            </Link>
                            <Link href="/places" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Places
                            </Link>
                            <Link href="/gods" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Gods
                            </Link>
                            <Link href="/concepts" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Concepts
                            </Link>
                            <Link href="/maps" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Maps
                            </Link>
                            <Link href="/other/pages" onClick={() => setIsMobileMenuOpen(false)} className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Other Pages
                            </Link>

                            <hr className="my-1 border-border-secondary dark:border-border-secondary" />
                            
                            <Link href="https://buymeacoffee.com/darknebulax1" target='_blank' className="text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Cup a coffee?
                            </Link>
                            <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full text-left text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary block px-3 py-2 rounded-md text-base font-medium">
                                Feedback
                            </button>
                            <div className="flex items-center justify-start p-2">
                                <ThemeToggleButton />
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <FeedbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
