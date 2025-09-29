import type { Character, Place, God, Concept } from '../data/wiki-data'

// Base structured data interface
interface BaseStructuredData {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  image?: string
  publisher: {
    '@type': string
    name: string
    url: string
  }
  dateModified: string
  datePublished: string
  author?: {
    '@type': string
    name: string
  }
}

// Character structured data
export function generateCharacterStructuredData(character: Character, slug: string): BaseStructuredData {
  const baseUrl = 'https://dandelion-dynasty.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: character.name,
    description: character.introduction || `${character.name} from The Dandelion Dynasty series.`,
    url: `${baseUrl}/characters/${slug}`,
    image: character.image ? `${baseUrl}${character.image}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'The Dandelion Dynasty Wiki',
      url: baseUrl
    },
    dateModified: new Date().toISOString(),
    datePublished: '2024-01-01T00:00:00Z' // Approximate publication date
  }
}

// Place structured data
export function generatePlaceStructuredData(place: Place, slug: string): BaseStructuredData {
  const baseUrl = 'https://dandelion-dynasty.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: place.name,
    description: place.introduction || `${place.name} from The Dandelion Dynasty series.`,
    url: `${baseUrl}/places/${slug}`,
    image: place.image ? `${baseUrl}${place.image}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'The Dandelion Dynasty Wiki',
      url: baseUrl
    },
    dateModified: new Date().toISOString(),
    datePublished: '2024-01-01T00:00:00Z'
  }
}

// God structured data
export function generateGodStructuredData(god: God, slug: string): BaseStructuredData {
  const baseUrl = 'https://dandelion-dynasty.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: god.name,
    description: god.introduction || `${god.name} from the Dara pantheon.`,
    url: `${baseUrl}/gods/${slug}`,
    image: god.image ? `${baseUrl}${god.image}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'The Dandelion Dynasty Wiki',
      url: baseUrl
    },
    dateModified: new Date().toISOString(),
    datePublished: '2024-01-01T00:00:00Z'
  }
}

// Concept structured data
export function generateConceptStructuredData(concept: Concept, slug: string): BaseStructuredData {
  const baseUrl = 'https://dandelion-dynasty.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: concept.name,
    description: concept.introduction || `${concept.name} concept from The Dandelion Dynasty.`,
    url: `${baseUrl}/concepts/${slug}`,
    image: concept.image ? `${baseUrl}${concept.image}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'The Dandelion Dynasty Wiki',
      url: baseUrl
    },
    dateModified: new Date().toISOString(),
    datePublished: '2024-01-01T00:00:00Z'
  }
}

// Book structured data
export function generateBookStructuredData(bookTitle: string, description: string, slug: string): BaseStructuredData {
  const baseUrl = 'https://dandelion-dynasty.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: bookTitle,
    description: description || `${bookTitle} from The Dandelion Dynasty series by Ken Liu.`,
    url: `${baseUrl}/books/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Ken Liu'
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Dandelion Dynasty Wiki',
      url: baseUrl
    },
    dateModified: new Date().toISOString(),
    datePublished: '2024-01-01T00:00:00Z'
  }
}

// Website structured data
export function generateWebsiteStructuredData(): any {
  const baseUrl = 'https://dandelion-dynasty.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Dandelion Dynasty Wiki',
    description: 'The ultimate encyclopedia for Ken Liu\'s epic silkpunk fantasy series. Explore characters, places, gods, concepts, and more from the world of Dara.',
    url: baseUrl,
    publisher: {
      '@type': 'Organization',
      name: 'The Dandelion Dynasty Wiki',
      url: baseUrl
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

// Breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}
