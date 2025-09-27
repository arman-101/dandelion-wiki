import { ALL_WIKI_PAGES, ALL_CHARACTERS, ALL_PLACES, ALL_GODS, ALL_CONCEPTS, ALL_BOOKS, OTHER_PAGES, OTHER_PAGES_LISTING } from '../data/wiki-data';

export interface WikiStats {
    totalPages: number;
    characters: number;
    places: number;
    gods: number;
    concepts: number;
    books: number;
    otherPages: number;
    lastUpdated: string;
}

/**
 * Calculate real-time wiki statistics
 */
export function calculateWikiStats(): WikiStats {
    const totalPages = ALL_WIKI_PAGES.length;
    const characters = ALL_CHARACTERS.length;
    const places = ALL_PLACES.length;
    const gods = ALL_GODS.length;
    const concepts = ALL_CONCEPTS.length;
    const books = ALL_BOOKS.length;
    const otherPages = OTHER_PAGES.length + OTHER_PAGES_LISTING.length;

    return {
        totalPages,
        characters,
        places,
        gods,
        concepts,
        books,
        otherPages,
        lastUpdated: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };
}

/**
 * Get stats by category for detailed breakdown
 */
export function getStatsByCategory() {
    const stats = calculateWikiStats();
    
    return [
        { label: 'Characters', count: stats.characters, color: 'text-blue-600 dark:text-blue-400' },
        { label: 'Places', count: stats.places, color: 'text-green-600 dark:text-green-400' },
        { label: 'Gods', count: stats.gods, color: 'text-purple-600 dark:text-purple-400' },
        { label: 'Concepts', count: stats.concepts, color: 'text-orange-600 dark:text-orange-400' },
        { label: 'Books', count: stats.books, color: 'text-red-600 dark:text-red-400' },
        { label: 'Other Pages', count: stats.otherPages, color: 'text-gray-600 dark:text-gray-400' }
    ];
}

/**
 * Get development metrics
 */
export function getDevelopmentMetrics() {
    const stats = calculateWikiStats();
    
    return {
        totalContent: stats.characters + stats.places + stats.gods + stats.concepts,
        completionRate: Math.round((stats.totalPages / 200) * 100), // Assuming target of 200 pages
        lastUpdated: stats.lastUpdated
    };
}
