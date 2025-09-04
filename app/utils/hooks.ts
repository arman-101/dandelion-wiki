'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { searchItems, sortBy } from './dataUtils';

/**
 * Custom React hooks for common wiki functionality
 */

/**
 * Hook for managing search functionality with debouncing
 * @param items - Array of items to search
 * @param searchFields - Fields to search in
 * @param debounceMs - Debounce delay in milliseconds
 * @returns Search state and functions
 */
export function useSearch<T extends Record<string, any>>(
    items: T[],
    searchFields: (keyof T)[],
    debounceMs: number = 300
) {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');

    // Debounce the search term
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, debounceMs);

        return () => clearTimeout(timer);
    }, [searchTerm, debounceMs]);

    // Perform the search
    const results = useMemo(() => {
        return searchItems(items, debouncedTerm, searchFields);
    }, [items, debouncedTerm, searchFields]);

    return {
        searchTerm,
        setSearchTerm,
        results,
        isSearching: searchTerm !== debouncedTerm
    };
}

/**
 * Hook for managing sorting functionality
 * @param items - Array of items to sort
 * @param defaultSortKey - Default field to sort by
 * @param defaultDirection - Default sort direction
 * @returns Sort state and functions
 */
export function useSort<T extends Record<string, any>>(
    items: T[],
    defaultSortKey: keyof T,
    defaultDirection: 'asc' | 'desc' = 'asc'
) {
    const [sortKey, setSortKey] = useState<keyof T>(defaultSortKey);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(defaultDirection);

    const sortedItems = useMemo(() => {
        return sortBy(items, (item) => item[sortKey], sortDirection);
    }, [items, sortKey, sortDirection]);

    const handleSort = useCallback((key: keyof T) => {
        if (key === sortKey) {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDirection('asc');
        }
    }, [sortKey]);

    return {
        sortedItems,
        sortKey,
        sortDirection,
        handleSort
    };
}

/**
 * Hook for managing pagination
 * @param items - Array of items to paginate
 * @param itemsPerPage - Number of items per page
 * @returns Pagination state and functions
 */
export function usePagination<T>(items: T[], itemsPerPage: number = 10) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const goToPage = useCallback((page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    }, [totalPages]);

    const goToNextPage = useCallback(() => {
        goToPage(currentPage + 1);
    }, [currentPage, goToPage]);

    const goToPrevPage = useCallback(() => {
        goToPage(currentPage - 1);
    }, [currentPage, goToPage]);

    // Reset to first page when items change
    useEffect(() => {
        setCurrentPage(1);
    }, [items.length]);

    return {
        currentItems,
        currentPage,
        totalPages,
        goToPage,
        goToNextPage,
        goToPrevPage,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1
    };
}

/**
 * Hook for managing local storage with type safety
 * @param key - Storage key
 * @param defaultValue - Default value if nothing in storage
 * @returns Current value and setter function
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return defaultValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            // Silently handle localStorage errors in SSR environments
            return defaultValue;
        }
    });

    const setStoredValue = useCallback((newValue: T | ((prev: T) => T)) => {
        try {
            const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
            setValue(valueToStore);
            
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch {
            // Silently handle localStorage errors in SSR environments
        }
    }, [key, value]);

    return [value, setStoredValue] as const;
}

/**
 * Hook for managing scroll position and visibility
 * @param threshold - Scroll threshold in pixels
 * @returns Scroll state
 */
export function useScroll(threshold: number = 100) {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolledPast, setIsScrolledPast] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setScrollY(currentScrollY);
            setIsScrolledPast(currentScrollY > threshold);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [threshold]);

    return {
        scrollY,
        isScrolledPast
    };
}

/**
 * Hook for managing favorites/bookmarks functionality
 * @param storageKey - Local storage key for favorites
 * @returns Favorites state and functions
 */
export function useFavorites(storageKey: string = 'wiki-favorites') {
    const [favorites, setFavorites] = useLocalStorage<string[]>(storageKey, []);

    const addFavorite = useCallback((path: string) => {
        setFavorites(prev => [...prev.filter(p => p !== path), path]);
    }, [setFavorites]);

    const removeFavorite = useCallback((path: string) => {
        setFavorites(prev => prev.filter(p => p !== path));
    }, [setFavorites]);

    const toggleFavorite = useCallback((path: string) => {
        if (favorites.includes(path)) {
            removeFavorite(path);
        } else {
            addFavorite(path);
        }
    }, [favorites, addFavorite, removeFavorite]);

    const isFavorite = useCallback((path: string) => {
        return favorites.includes(path);
    }, [favorites]);

    return {
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite
    };
}
