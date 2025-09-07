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
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent-pink transition-colors"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light">
                    <SearchIcon />
                </div>
            </div>
            
            {isFocused && results.length > 0 && (
                <ul className="absolute z-10 w-full mt-2 bg-bg-card dark:bg-bg-card border border-border-secondary dark:border-border-primary rounded-lg shadow-xl max-h-60 overflow-y-auto p-1">
                    {results.map(page => (
                        <li key={page.path}>
                            <a
                                href={page.path}
                                onClick={(e) => { e.preventDefault(); handleResultClick(page.path); }}
                                className="block px-4 py-3 text-text-secondary dark:text-text-secondary hover:bg-bg-tertiary dark:hover:bg-border-primary hover:text-link dark:hover:text-accent-pink transition-all duration-200 cursor-pointer rounded-md mx-1 my-0.5"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">{page.title}</span>
                                    <span className="text-xs italic text-text-light bg-bg-secondary dark:bg-border-secondary px-2 py-1 rounded-full">{page.type}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
