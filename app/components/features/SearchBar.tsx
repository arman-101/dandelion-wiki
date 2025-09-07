'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ALL_WIKI_PAGES } from '../../data/wiki-data';
import { SearchIcon } from '../ui/Icons';

interface SearchBarProps {
    className?: string;
    placeholder?: string;
}

export default function SearchBar({ 
    className = "w-full", 
    placeholder = "Search the wiki..." 
}: SearchBarProps) {
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
        <div className={`relative ${className}`}>
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light">
                    <SearchIcon />
                </div>
            </div>
            
            {isFocused && results.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-bg-card dark:bg-bg-card border border-border-secondary dark:border-border-secondary rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {results.map(page => (
                        <li key={page.path}>
                            <a
                                href={page.path}
                                onClick={(e) => { e.preventDefault(); handleResultClick(page.path); }}
                                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors"
                            >
                                <div className="flex justify-between items-center">
                                    <span>{page.title}</span>
                                    <span className="text-xs italic text-text-light dark:text-gray-500">{page.type}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
