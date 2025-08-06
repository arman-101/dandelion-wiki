import React from 'react';

/**
 * Converts asterisk-wrapped text (*text*) to bold JSX formatting
 * @param text - The text containing asterisk-wrapped words
 * @returns Array of React elements with bold formatting applied
 */
export function formatAsteriskToBold(text: string): React.ReactNode[] {
    if (!text.includes('*')) {
        return [text];
    }

    const parts: React.ReactNode[] = [];
    const regex = /\*([^*]+)\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        // Add text before the asterisk
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        
        // Add the bold text (without asterisks)
        parts.push(
            React.createElement('strong', {
                key: `bold-${match.index}`,
                className: 'font-bold'
            }, match[1])
        );
        
        lastIndex = match.index + match[0].length;
    }

    // Add any remaining text after the last asterisk
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
} 