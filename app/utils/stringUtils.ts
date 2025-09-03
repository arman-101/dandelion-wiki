/**
 * String manipulation and formatting utilities
 */

/**
 * Converts camelCase or PascalCase strings to readable labels
 * @param key - The camelCase string to format
 * @returns Formatted string with proper capitalization and spacing
 * @example formatLabel('firstName') => 'First Name'
 * @example formatLabel('placeOfBirth') => 'Place Of Birth'
 */
export function formatLabel(key: string): string {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
}

/**
 * Converts a string to a URL-friendly slug
 * @param text - The text to convert to a slug
 * @returns URL-friendly slug
 * @example toSlug('The Grace of Kings') => 'the-grace-of-kings'
 */
export function toSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim();
}

/**
 * Capitalizes the first letter of each word in a string
 * @param text - The text to convert to title case
 * @returns Title cased string
 * @example toTitleCase('the grace of kings') => 'The Grace Of Kings'
 */
export function toTitleCase(text: string): string {
    return text.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

/**
 * Truncates text to a specified length with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @param suffix - Suffix to add when truncated (default: '...')
 * @returns Truncated text with suffix if needed
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Extracts the first sentence from a text block
 * @param text - The text to extract from
 * @returns The first sentence
 */
export function getFirstSentence(text: string): string {
    const match = text.match(/^[^.!?]*[.!?]/);
    return match ? match[0].trim() : text;
}

/**
 * Removes markdown-style formatting from text
 * @param text - Text with potential markdown formatting
 * @returns Clean text without markdown
 */
export function stripMarkdown(text: string): string {
    return text
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
        .replace(/\*(.*?)\*/g, '$1') // Remove italic
        .replace(/\[\[([^|]+)\|([^\]]+)\]\]/g, '$1') // Remove wiki links, keep text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links, keep text
        .trim();
}
