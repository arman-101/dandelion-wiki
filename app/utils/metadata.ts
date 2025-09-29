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
    const enhancedDescription = truncate(`${baseDescription} Explore the complete biography, history, and role of ${character.name} in Ken Liu's silkpunk fantasy series.`);
    const imageUrl = typeof character.image === 'string' ? character.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'characters') : null;
    const url = slug ? `/characters/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-dynasty.com${url}` : undefined;

    return {
        title,
        description: enhancedDescription,
        keywords: [
            character.name,
            'Dandelion Dynasty character',
            'Ken Liu',
            'The Grace of Kings',
            'silkpunk fantasy',
            'Dara character',
            ...(character.name.split(' '))
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
    const enhancedDescription = truncate(`${baseDescription} Discover the geography, history, and significance of ${place.name} in Ken Liu's world of Dara.`);
    const imageUrl = typeof place.image === 'string' ? place.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'places') : null;
    const url = slug ? `/places/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-dynasty.com${url}` : undefined;

    return {
        title,
        description: enhancedDescription,
        keywords: [
            place.name,
            'Dandelion Dynasty location',
            'Ken Liu',
            'Dara geography',
            'silkpunk world',
            'fantasy locations',
            ...(place.name.split(' '))
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
    const enhancedDescription = truncate(`${baseDescription} Learn about ${god.name}, a deity from the Dandelion Dynasty pantheon in Ken Liu's silkpunk fantasy world.`);
    const imageUrl = typeof god.image === 'string' ? god.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'gods') : null;
    const url = slug ? `/gods/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-dynasty.com${url}` : undefined;

    return {
        title,
        description: enhancedDescription,
        keywords: [
            god.name,
            'Dandelion Dynasty gods',
            'Dara pantheon',
            'Ken Liu',
            'silkpunk mythology',
            'fantasy deities',
            ...(god.name.split(' '))
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
    const enhancedDescription = truncate(`${baseDescription} Explore ${concept.name} and its role in Ken Liu's silkpunk fantasy series, The Dandelion Dynasty.`);
    const imageUrl = typeof concept.image === 'string' ? concept.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'concepts') : null;
    const url = slug ? `/concepts/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-dynasty.com${url}` : undefined;

    return {
        title,
        description: enhancedDescription,
        keywords: [
            concept.name,
            'Dandelion Dynasty concepts',
            'Ken Liu',
            'silkpunk technology',
            'Dara worldbuilding',
            'fantasy concepts',
            ...(concept.name.split(' '))
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
    const desc = truncate(`${baseDesc} Complete chapter guide, character appearances, and detailed summary.`);
    const canonicalUrl = slug ? `https://dandelion-dynasty.com/books/${slug}` : undefined;

    return {
        title,
        description: desc,
        keywords: [
            bookTitle,
            'Ken Liu',
            'Dandelion Dynasty',
            'silkpunk fantasy',
            'book summary',
            'chapter guide',
            'fantasy series',
            'Dara'
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
    const desc = truncate(description || `${pageTitle} - The Dandelion Dynasty Wiki`);
    const canonicalUrl = slug ? `https://dandelion-dynasty.com${slug}` : undefined;

    return {
        title,
        description: desc,
        keywords: [
            pageTitle,
            'Dandelion Dynasty',
            'Ken Liu',
            'silkpunk',
            'fantasy wiki'
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


