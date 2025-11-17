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

// FAQ structured data for homepage
export function generateFAQStructuredData(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is The Dandelion Dynasty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Dandelion Dynasty is an epic silkpunk fantasy series by Ken Liu, set in the fictional world of Dara. The series comprises four books: The Grace of Kings, The Wall of Storms, The Veiled Throne, and Speaking Bones.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who wrote The Dandelion Dynasty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Dandelion Dynasty series was written by Ken Liu, an acclaimed science fiction and fantasy author known for his innovative silkpunk worldbuilding and reimagining of Asian history and mythology.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is silkpunk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Silkpunk is a genre term coined by Ken Liu that blends ancient Asian technology and aesthetics with fantastical innovations. In The Dandelion Dynasty, this includes garinafins (massive flying creatures), crubens (underwater vessels), and ingenious airships powered by wind and steam.'
        }
      },
      {
        '@type': 'Question',
        name: 'What books are in The Dandelion Dynasty series?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Dandelion Dynasty series consists of four books in order: 1) The Grace of Kings, 2) The Wall of Storms, 3) The Veiled Throne, and 4) Speaking Bones. All are set in the world of Dara.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who are the main characters in The Dandelion Dynasty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The main characters include Kuni Garu (the cunning emperor), Mata Zyndu (the fearsome warrior), Jia Matiza (empress and strategist), Zomi Kidosu (engineer and scholar), Théra (princess and explorer), and Phyro Garu (prince and military leader).'
        }
      },
      {
        '@type': 'Question',
        name: 'What is Dara in The Dandelion Dynasty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dara, also known as the Islands of Dara, is the fictional world where The Dandelion Dynasty takes place. It consists of multiple islands including Pan, Xana, Rui, Dasu, and others, each with unique cultures, geography, and political systems.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are garinafins in The Dandelion Dynasty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Garinafins are massive flying creatures native to the Lyucu Empire. They are dragon-like beasts that can be ridden and used in warfare, representing one of the most iconic elements of Ken Liu\'s silkpunk technology in the series.'
        }
      }
    ]
  }
}

// Organization structured data
export function generateOrganizationStructuredData(): any {
  const baseUrl = 'https://dandelion-dynasty.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Dandelion Dynasty Wiki',
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    description: 'Complete encyclopedia for Ken Liu\'s The Dandelion Dynasty silkpunk fantasy series',
    sameAs: [
      // Add social media links here when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Community',
      url: baseUrl
    }
  }
}

// Series structured data (Book Series)
export function generateSeriesStructuredData(): any {
  const baseUrl = 'https://dandelion-dynasty.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BookSeries',
    name: 'The Dandelion Dynasty',
    description: 'An epic silkpunk fantasy series by Ken Liu set in the world of Dara',
    author: {
      '@type': 'Person',
      name: 'Ken Liu',
      description: 'Acclaimed science fiction and fantasy author'
    },
    url: baseUrl,
    genre: ['Fantasy', 'Epic Fantasy', 'Silkpunk'],
    hasPart: [
      {
        '@type': 'Book',
        name: 'The Grace of Kings',
        position: 1,
        url: `${baseUrl}/books/the-grace-of-kings`,
        author: { '@type': 'Person', name: 'Ken Liu' }
      },
      {
        '@type': 'Book',
        name: 'The Wall of Storms',
        position: 2,
        url: `${baseUrl}/books/the-wall-of-storms`,
        author: { '@type': 'Person', name: 'Ken Liu' }
      },
      {
        '@type': 'Book',
        name: 'The Veiled Throne',
        position: 3,
        url: `${baseUrl}/books/the-veiled-throne`,
        author: { '@type': 'Person', name: 'Ken Liu' }
      },
      {
        '@type': 'Book',
        name: 'Speaking Bones',
        position: 4,
        url: `${baseUrl}/books/speaking-bones`,
        author: { '@type': 'Person', name: 'Ken Liu' }
      }
    ]
  }
}
