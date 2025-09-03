/**
 * Data manipulation and processing utilities
 */

/**
 * Groups an array of items by a specified key
 * @param items - Array of items to group
 * @param keyFn - Function to extract the grouping key from each item
 * @returns Object with keys as group names and values as arrays of items
 */
export function groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {
    return items.reduce((groups, item) => {
        const key = keyFn(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {} as Record<string, T[]>);
}

/**
 * Sorts an array of items by a specified key
 * @param items - Array of items to sort
 * @param keyFn - Function to extract the sorting key from each item
 * @param direction - Sort direction ('asc' or 'desc')
 * @returns Sorted array
 */
export function sortBy<T>(
    items: T[], 
    keyFn: (item: T) => string | number, 
    direction: 'asc' | 'desc' = 'asc'
): T[] {
    return [...items].sort((a, b) => {
        const aVal = keyFn(a);
        const bVal = keyFn(b);
        
        if (aVal < bVal) return direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return direction === 'asc' ? 1 : -1;
        return 0;
    });
}

/**
 * Filters items by multiple criteria
 * @param items - Array of items to filter
 * @param filters - Object with filter criteria
 * @returns Filtered array
 */
export function filterBy<T extends Record<string, any>>(
    items: T[], 
    filters: Partial<Record<keyof T, any>>
): T[] {
    return items.filter(item => {
        return Object.entries(filters).every(([key, value]) => {
            if (value === undefined || value === null) return true;
            return item[key] === value;
        });
    });
}

/**
 * Searches items by text content in specified fields
 * @param items - Array of items to search
 * @param searchTerm - Search term
 * @param searchFields - Fields to search in
 * @returns Filtered array with matching items
 */
export function searchItems<T extends Record<string, any>>(
    items: T[], 
    searchTerm: string, 
    searchFields: (keyof T)[]
): T[] {
    if (!searchTerm.trim()) return items;
    
    const term = searchTerm.toLowerCase();
    return items.filter(item => {
        return searchFields.some(field => {
            const value = item[field];
            if (typeof value === 'string') {
                return value.toLowerCase().includes(term);
            }
            return false;
        });
    });
}

/**
 * Gets a random sample of items from an array
 * @param items - Array to sample from
 * @param count - Number of items to sample
 * @returns Array with random sample of items
 */
export function sampleItems<T>(items: T[], count: number): T[] {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/**
 * Chunks an array into smaller arrays of specified size
 * @param items - Array to chunk
 * @param size - Size of each chunk
 * @returns Array of chunks
 */
export function chunkArray<T>(items: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < items.length; i += size) {
        chunks.push(items.slice(i, i + size));
    }
    return chunks;
}

/**
 * Removes duplicate items from an array based on a key function
 * @param items - Array with potential duplicates
 * @param keyFn - Function to extract unique key from each item
 * @returns Array with duplicates removed
 */
export function uniqueBy<T>(items: T[], keyFn: (item: T) => string | number): T[] {
    const seen = new Set();
    return items.filter(item => {
        const key = keyFn(item);
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

/**
 * Creates a lookup map from an array for O(1) access
 * @param items - Array of items
 * @param keyFn - Function to extract the key for each item
 * @returns Map with keys and corresponding items
 */
export function createLookupMap<T>(items: T[], keyFn: (item: T) => string): Map<string, T> {
    return new Map(items.map(item => [keyFn(item), item]));
}
