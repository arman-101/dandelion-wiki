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
    const description = truncate(character.introduction || `${character.name} from The Dandelion Dynasty.`);
    const imageUrl = typeof character.image === 'string' ? character.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'characters') : null;
    const url = slug ? `/characters/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-wiki.vercel.app${url}` : undefined;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${character.name} | The Dandelion Dynasty Wiki`,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            url: canonicalUrl,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: `${character.name} | The Dandelion Dynasty Wiki`,
            description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generatePlaceMetadata(place: Place): Metadata {
    const title = `${place.name}`;
    const description = truncate(place.introduction || `${place.name} in The Dandelion Dynasty.`);
    const imageUrl = typeof place.image === 'string' ? place.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'places') : null;
    const url = slug ? `/places/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-wiki.vercel.app${url}` : undefined;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${place.name} | The Dandelion Dynasty Wiki`,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            url: canonicalUrl,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: `${place.name} | The Dandelion Dynasty Wiki`,
            description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generateGodMetadata(god: God): Metadata {
    const title = `${god.name}`;
    const description = truncate(god.introduction || `${god.name} from the Dara pantheon.`);
    const imageUrl = typeof god.image === 'string' ? god.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'gods') : null;
    const url = slug ? `/gods/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-wiki.vercel.app${url}` : undefined;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${god.name} | The Dandelion Dynasty Wiki`,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            url: canonicalUrl,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: `${god.name} | The Dandelion Dynasty Wiki`,
            description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generateConceptMetadata(concept: Concept): Metadata {
    const title = `${concept.name}`;
    const description = truncate(concept.introduction || `${concept.name} concept from The Dandelion Dynasty.`);
    const imageUrl = typeof concept.image === 'string' ? concept.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'concepts') : null;
    const url = slug ? `/concepts/${slug}` : undefined;
    const canonicalUrl = url ? `https://dandelion-wiki.vercel.app${url}` : undefined;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${concept.name} | The Dandelion Dynasty Wiki`,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            url: canonicalUrl,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: `${concept.name} | The Dandelion Dynasty Wiki`,
            description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

// Book metadata generator
export function generateBookMetadata(bookTitle: string, description?: string, slug?: string): Metadata {
    const title = `${bookTitle}`;
    const desc = truncate(description || `${bookTitle} from The Dandelion Dynasty series by Ken Liu.`);
    const canonicalUrl = slug ? `https://dandelion-wiki.vercel.app/books/${slug}` : undefined;

    return {
        title,
        description: desc,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${bookTitle} | The Dandelion Dynasty Wiki`,
            description: desc,
            url: canonicalUrl,
            type: 'article'
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
    const canonicalUrl = slug ? `https://dandelion-wiki.vercel.app${slug}` : undefined;

    return {
        title,
        description: desc,
        alternates: {
            canonical: canonicalUrl
        },
        openGraph: {
            title: `${pageTitle} | The Dandelion Dynasty Wiki`,
            description: desc,
            url: canonicalUrl,
            type: 'website'
        },
        twitter: {
            card: 'summary',
            title: `${pageTitle} | The Dandelion Dynasty Wiki`,
            description: desc
        }
    };
}


