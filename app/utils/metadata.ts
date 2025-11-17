import type { Metadata } from 'next';
import type { Character, Place, God, Concept } from '../data/wiki-data';

function truncate(text: string, max = 160): string {
    const clean = text.replace(/\s+/g, ' ').trim();
    if (clean.length <= max) return clean;
    return clean.slice(0, max - 1).trimEnd() + '…';
}

function extractSlugFromImage(imagePath: string, folder: 'characters' | 'places' | 'gods' | 'concepts'): string | null {
    const match = new RegExp(`^/${folder}/([^./]+)\\.[a-zA-Z0-9]+$`).exec(imagePath);
    return match ? match[1] : null;
}

export function generateCharacterMetadata(character: Character): Metadata {
    const title = `${character.name}`;
    const baseDescription = character.introduction || `${character.name} from The Dandelion Dynasty.`;
    const enhancedDescription = truncate(`${character.name} - ${baseDescription} Complete biography and history of ${character.name} in Ken Liu's Dandelion Dynasty silkpunk fantasy series. Explore ${character.name}'s role in the world of Dara.`);
    const imageUrl = typeof character.image === 'string' ? character.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'characters') : null;
    const url = slug ? `/characters/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-dynasty.com${url}` : undefined;

    return {
        title,
        description: enhancedDescription,
        keywords: [
            // Character name variations
            character.name,
            ...(character.name.split(' ')),
            // Series keywords
            'Dandelion Dynasty',
            'The Dandelion Dynasty',
            'Dandelion Dynasty character',
            'Dandelion Dynasty characters',
            // Author
            'Ken Liu',
            'Ken Liu character',
            'Ken Liu Dandelion Dynasty',
            // Books
            'The Grace of Kings',
            'Grace of Kings',
            'Wall of Storms',
            'Veiled Throne',
            'Speaking Bones',
            // Genre & World
            'silkpunk fantasy',
            'silkpunk',
            'Dara',
            'Dara character',
            'world of Dara',
            // Content type
            'character biography',
            'character guide',
            'fantasy character'
        ],
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${character.name} | The Dandelion Dynasty Wiki`,
            description: enhancedDescription,
            images: imageUrl ? [{ url: imageUrl, alt: `Portrait of ${character.name}` }] : undefined,
            url: canonicalUrl,
            type: 'article',
            siteName: 'The Dandelion Dynasty Wiki',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${character.name} | The Dandelion Dynasty Wiki`,
            description: enhancedDescription,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generatePlaceMetadata(place: Place): Metadata {
    const title = `${place.name}`;
    const baseDescription = place.introduction || `${place.name} in The Dandelion Dynasty.`;
    const enhancedDescription = truncate(`${place.name} - ${baseDescription} Explore the geography, history, and significance of ${place.name} in Ken Liu's Dandelion Dynasty. Discover ${place.name} in the world of Dara.`);
    const imageUrl = typeof place.image === 'string' ? place.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'places') : null;
    const url = slug ? `/places/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-dynasty.com${url}` : undefined;

    return {
        title,
        description: enhancedDescription,
        keywords: [
            // Place name variations
            place.name,
            ...(place.name.split(' ')),
            // Series keywords
            'Dandelion Dynasty',
            'The Dandelion Dynasty',
            'Dandelion Dynasty location',
            'Dandelion Dynasty places',
            'Dandelion Dynasty geography',
            // Author
            'Ken Liu',
            'Ken Liu world',
            'Ken Liu Dandelion Dynasty',
            // World
            'Dara',
            'Dara geography',
            'world of Dara',
            'Islands of Dara',
            // Genre
            'silkpunk world',
            'silkpunk',
            'silkpunk fantasy',
            // Content type
            'fantasy locations',
            'fantasy geography',
            'fantasy world'
        ],
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${place.name} | The Dandelion Dynasty Wiki`,
            description: enhancedDescription,
            images: imageUrl ? [{ url: imageUrl, alt: `Map of ${place.name}` }] : undefined,
            url: canonicalUrl,
            type: 'article',
            siteName: 'The Dandelion Dynasty Wiki',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${place.name} | The Dandelion Dynasty Wiki`,
            description: enhancedDescription,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generateGodMetadata(god: God): Metadata {
    const title = `${god.name}`;
    const baseDescription = god.introduction || `${god.name} from the Dara pantheon.`;
    const enhancedDescription = truncate(`${god.name} - ${baseDescription} Learn about ${god.name}, a deity from Ken Liu's Dandelion Dynasty. Explore ${god.name} in the pantheon of Dara's silkpunk fantasy world.`);
    const imageUrl = typeof god.image === 'string' ? god.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'gods') : null;
    const url = slug ? `/gods/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-dynasty.com${url}` : undefined;

    return {
        title,
        description: enhancedDescription,
        keywords: [
            // God name variations
            god.name,
            ...(god.name.split(' ')),
            // Series keywords
            'Dandelion Dynasty',
            'The Dandelion Dynasty',
            'Dandelion Dynasty gods',
            'Dandelion Dynasty deities',
            'Dandelion Dynasty pantheon',
            // Author
            'Ken Liu',
            'Ken Liu gods',
            'Ken Liu Dandelion Dynasty',
            // World
            'Dara pantheon',
            'Dara gods',
            'Dara deities',
            'world of Dara',
            // Genre
            'silkpunk mythology',
            'silkpunk',
            'silkpunk fantasy',
            // Content type
            'fantasy deities',
            'fantasy gods',
            'fantasy mythology'
        ],
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${god.name} | The Dandelion Dynasty Wiki`,
            description: enhancedDescription,
            images: imageUrl ? [{ url: imageUrl, alt: `Representation of ${god.name}` }] : undefined,
            url: canonicalUrl,
            type: 'article',
            siteName: 'The Dandelion Dynasty Wiki',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${god.name} | The Dandelion Dynasty Wiki`,
            description: enhancedDescription,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generateConceptMetadata(concept: Concept): Metadata {
    const title = `${concept.name}`;
    const baseDescription = concept.introduction || `${concept.name} concept from The Dandelion Dynasty.`;
    const enhancedDescription = truncate(`${concept.name} - ${baseDescription} Explore ${concept.name} in Ken Liu's Dandelion Dynasty silkpunk fantasy. Learn about ${concept.name} in the world of Dara.`);
    const imageUrl = typeof concept.image === 'string' ? concept.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'concepts') : null;
    const url = slug ? `/concepts/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-dynasty.com${url}` : undefined;

    return {
        title,
        description: enhancedDescription,
        keywords: [
            // Concept name variations
            concept.name,
            ...(concept.name.split(' ')),
            // Series keywords
            'Dandelion Dynasty',
            'The Dandelion Dynasty',
            'Dandelion Dynasty concepts',
            'Dandelion Dynasty technology',
            'Dandelion Dynasty worldbuilding',
            // Author
            'Ken Liu',
            'Ken Liu technology',
            'Ken Liu Dandelion Dynasty',
            // Technology & World
            'silkpunk technology',
            'silkpunk',
            'silkpunk fantasy',
            'Dara worldbuilding',
            'world of Dara',
            // Content type
            'fantasy concepts',
            'fantasy technology',
            'worldbuilding'
        ],
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${concept.name} | The Dandelion Dynasty Wiki`,
            description: enhancedDescription,
            images: imageUrl ? [{ url: imageUrl, alt: `Illustration of ${concept.name}` }] : undefined,
            url: canonicalUrl,
            type: 'article',
            siteName: 'The Dandelion Dynasty Wiki',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${concept.name} | The Dandelion Dynasty Wiki`,
            description: enhancedDescription,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

// Book metadata generator
export function generateBookMetadata(bookTitle: string, description?: string, slug?: string): Metadata {
    const title = `${bookTitle}`;
    const baseDesc = description || `${bookTitle} from The Dandelion Dynasty series by Ken Liu.`;
    const desc = truncate(`${bookTitle} - ${baseDesc} Complete chapter-by-chapter guide, character appearances, and detailed summary of ${bookTitle} from Ken Liu's Dandelion Dynasty.`);
    const canonicalUrl = slug ? `https://dandelion-dynasty.com/books/${slug}` : undefined;

    return {
        title,
        description: desc,
        keywords: [
            // Book title variations
            bookTitle,
            `The ${bookTitle}`,
            // Series keywords
            'Dandelion Dynasty',
            'The Dandelion Dynasty',
            'Dandelion Dynasty books',
            'Dandelion Dynasty series',
            // Author
            'Ken Liu',
            'Ken Liu books',
            'Ken Liu Dandelion Dynasty',
            // World
            'Dara',
            'world of Dara',
            // Genre
            'silkpunk fantasy',
            'silkpunk',
            'epic fantasy',
            // Content type
            'book summary',
            'chapter guide',
            'book guide',
            'fantasy series',
            'reading guide'
        ],
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${bookTitle} | The Dandelion Dynasty Wiki`,
            description: desc,
            url: canonicalUrl,
            type: 'article',
            siteName: 'The Dandelion Dynasty Wiki',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${bookTitle} | The Dandelion Dynasty Wiki`,
            description: desc
        }
    };
}

// Generic page metadata generator
export function generatePageMetadata(pageTitle: string, description?: string, slug?: string): Metadata {
    const title = `${pageTitle}`;
    const desc = truncate(description || `${pageTitle} - Complete guide from The Dandelion Dynasty Wiki by Ken Liu. Explore the world of Dara and silkpunk fantasy.`);
    const canonicalUrl = slug ? `https://dandelion-dynasty.com${slug}` : undefined;

    return {
        title,
        description: desc,
        keywords: [
            // Page title
            pageTitle,
            // Series keywords
            'Dandelion Dynasty',
            'The Dandelion Dynasty',
            'Dandelion Dynasty wiki',
            // Author
            'Ken Liu',
            'Ken Liu Dandelion Dynasty',
            // Genre
            'silkpunk',
            'silkpunk fantasy',
            // World
            'Dara',
            'world of Dara',
            // Content type
            'fantasy wiki',
            'wiki guide',
            'encyclopedia'
        ],
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${pageTitle} | The Dandelion Dynasty Wiki`,
            description: desc,
            url: canonicalUrl,
            type: 'website',
            siteName: 'The Dandelion Dynasty Wiki',
        },
        twitter: {
            card: 'summary',
            title: `${pageTitle} | The Dandelion Dynasty Wiki`,
            description: desc
        }
    };
}


