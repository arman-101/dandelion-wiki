/**
 * Centralized utility exports
 * This makes importing utilities easier and more organized
 */

// String utilities
export {
    formatLabel,
    toSlug,
    toTitleCase,
    truncateText,
    getFirstSentence,
    stripMarkdown
} from './stringUtils';

// Data manipulation utilities
export {
    groupBy,
    sortBy,
    filterBy,
    searchItems,
    sampleItems,
    chunkArray,
    uniqueBy,
    createLookupMap
} from './dataUtils';

// Navigation utilities
export {
    getSurroundingPages,
    getSequenceNavigation,
    generateBreadcrumbs,
    groupPagesByType,
    findRelatedPages
} from './navigationUtils';

// Text formatting utilities (existing)
export {
    formatAsteriskToBold,
    formatLinksInText
} from './textFormatting';

// Type utilities
export {
    isDefined,
    isNonEmptyString,
    hasProperty,
    isNonEmptyArray,
    isNavigationLink,
    safeGet,
    createKeyValuePair,
    filterDefined,
    typedKeys,
    typedEntries
} from './typeUtils';

// React hooks (client-side only)
export {
    useSearch,
    useSort,
    usePagination,
    useLocalStorage,
    useScroll,
    useFavorites
} from './hooks';

// Re-export types for convenience
export type {
    NavigationLink,
    ContentItem,
    Optional,
    RequiredFields
} from './typeUtils';
