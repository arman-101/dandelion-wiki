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
    const title = `${character.name} — Character | Dandelion Dynasty Wiki`;
    const description = truncate(character.introduction || `${character.name} from The Dandelion Dynasty.`);
    const imageUrl = typeof character.image === 'string' ? character.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'characters') : null;
    const url = slug ? `/characters/${slug}` : undefined;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            url,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generatePlaceMetadata(place: Place): Metadata {
    const title = `${place.name} — Place | Dandelion Dynasty Wiki`;
    const description = truncate(place.introduction || `${place.name} in The Dandelion Dynasty.`);
    const imageUrl = typeof place.image === 'string' ? place.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'places') : null;
    const url = slug ? `/places/${slug}` : undefined;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            url,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generateGodMetadata(god: God): Metadata {
    const title = `${god.name} — God | Dandelion Dynasty Wiki`;
    const description = truncate(god.introduction || `${god.name} from the Dara pantheon.`);
    const imageUrl = typeof god.image === 'string' ? god.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'gods') : null;
    const url = slug ? `/gods/${slug}` : undefined;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            url,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}

export function generateConceptMetadata(concept: Concept): Metadata {
    const title = `${concept.name} — Concept | Dandelion Dynasty Wiki`;
    const description = truncate(concept.introduction || `${concept.name} concept from The Dandelion Dynasty.`);
    const imageUrl = typeof concept.image === 'string' ? concept.image : '';
    const slug = imageUrl ? extractSlugFromImage(imageUrl, 'concepts') : null;
    const url = slug ? `/concepts/${slug}` : undefined;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: imageUrl ? [{ url: imageUrl }] : undefined,
            url,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: imageUrl ? [imageUrl] : undefined
        }
    };
}


