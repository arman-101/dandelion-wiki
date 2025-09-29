# 🤖 AI Instructions for Dandelion Wiki

This comprehensive guide provides all the information needed for AI assistants to work effectively with the Dandelion Dynasty Wiki codebase.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack & Versions](#tech-stack--versions)
- [Directory Structure](#directory-structure)
- [Color System](#color-system)
- [Creating New Pages](#creating-new-pages)
- [Component Usage](#component-usage)
- [Data Management](#data-management)
- [Styling Guidelines](#styling-guidelines)
- [Development Workflow](#development-workflow)

## 🎯 Project Overview

**The Dandelion Dynasty Wiki** is a fan-created encyclopedia for Ken Liu's epic silkpunk fantasy series. It's built as a comprehensive, searchable resource covering books, characters, places, gods, concepts, and maps from the series.

### Key Features
- 📚 **Content Coverage**: 4 books, 100+ characters, places, gods, concepts
- 🔍 **Live Search**: Real-time search across all wiki pages
- 🌙 **Dark/Light Mode**: Seamless theme switching
- 📱 **Fully Responsive**: Optimized for all devices
- 🎨 **Centralized Colors**: Easy theme customization
- ⚡ **Fast Performance**: Next.js 15 with optimizations

## 🛠️ Tech Stack & Versions

### Core Framework
```json
{
  "next": "15.4.4",
  "react": "19.1.0",
  "typescript": "5",
  "tailwindcss": "3.4.17"
}
```

### Key Dependencies
```json
{
  "next-themes": "latest",
  "lucide-react": "latest",
  "@vercel/analytics": "latest",
  "@vercel/speed-insights": "latest"
}
```

### Development Tools
- **Package Manager**: npm
- **Styling**: Tailwind CSS with custom color system
- **Icons**: Lucide React + custom SVGs
- **Deployment**: Vercel
- **TypeScript**: Strict mode enabled
- **Domain**: dandelion-dynasty.com (primary), dandelion-wiki.vercel.app (legacy)

## 📁 Directory Structure

```
dandelion-wiki/
├── app/                          # Next.js App Router
│   ├── globals.css              # 🎨 CENTRALIZED COLORS HERE
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Homepage (6 main category links)
│   ├── not-found.tsx           # 404 page
│   │
│   ├── books/                   # Book category
│   │   ├── page.tsx            # Books listing page
│   │   ├── the-grace-of-kings/
│   │   ├── the-wall-of-storms/
│   │   ├── the-veiled-throne/
│   │   └── speaking-bones/
│   │
│   ├── characters/              # Characters category
│   │   ├── page.tsx            # Characters listing page
│   │   ├── mata-zyndu/
│   │   ├── kuni-garu/
│   │   └── [other-characters]/
│   │
│   ├── places/                  # Places category
│   │   ├── page.tsx            # Places listing page
│   │   └── [place-names]/
│   │
│   ├── gods/                    # Gods category
│   │   ├── page.tsx            # Gods listing page
│   │   └── [god-names]/
│   │
│   ├── concepts/                # Concepts category
│   │   ├── page.tsx            # Concepts listing page
│   │   └── [concept-names]/
│   │
│   ├── maps/                    # Maps category
│   │   └── page.tsx            # Maps page
│   │
│   ├── other/                   # Other pages
│   │   ├── all-pages/
│   │   ├── about-wiki/
│   │   ├── about-author/
│   │   └── contributing/
│   │
│   ├── components/              # Reusable components
│   │   ├── features/           # Feature components
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FeedbackModal.tsx
│   │   │   └── ThemeToggleButton.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeProviders.tsx
│   │   └── ui/                 # UI components
│   │       ├── Icons.tsx
│   │       ├── InfoBox.tsx
│   │       └── ContentRenderer.tsx
│   │
│   ├── data/                    # Data management
│   │   └── wiki-data.ts        # 📊 ALL CONTENT DATA
│   │
│   └── utils/                   # Utility functions
│       ├── hooks.ts
│       └── dataUtils.ts
│
├── public/                      # Static assets
│   ├── icon.png
│   └── [images]/
│
├── tailwind.config.js          # 🎨 Custom color classes
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
└── tsconfig.json              # TypeScript config
```

## 🎨 Color System

### 🚨 CRITICAL: Centralized Color Management

**Primary File**: `app/globals.css` (lines ~10-70)

All colors are centralized using CSS variables. **NEVER** use hardcoded Tailwind color classes like `text-teal-600` in new components.

#### Color Variables Structure
```css
:root {
  /* Brand Colors */
  --color-primary: #0d9488;        /* teal-600 - main brand */
  --color-primary-light: #14b8a6;  /* teal-500 - lighter variant */
  --color-primary-dark: #0f766e;   /* teal-700 - darker variant */
  --color-accent-pink: #F5BABB;    /* accent color */
  
  /* Text Colors */
  --color-text-primary: #111827;   /* main text */
  --color-text-secondary: #374151; /* secondary text */
  --color-text-muted: #4b5563;     /* muted text */
  --color-text-light: #6b7280;     /* light text */
  
  /* Background Colors */
  --color-bg-primary: #ffffff;     /* main background */
  --color-bg-secondary: #f9fafb;   /* secondary background */
  --color-bg-tertiary: #f3f4f6;    /* tertiary background */
  --color-bg-card: #ffffff;        /* card backgrounds */
  
  /* Interactive Colors */
  --color-link: #0d9488;           /* links */
  --color-link-hover: #14b8a6;     /* link hovers */
  --color-link-dark: #2dd4bf;      /* dark mode links */
}
```

#### Custom Tailwind Classes
Use these classes instead of hardcoded colors:
```css
/* Text */
text-text-primary, text-text-secondary, text-text-muted, text-text-light
text-link, text-link-dark

/* Backgrounds */
bg-bg-primary, bg-bg-secondary, bg-bg-tertiary, bg-bg-card
bg-primary, bg-primary-light, bg-primary-dark

/* Borders */
border-border-primary, border-border-secondary

/* Hover States */
hover:text-link, hover:bg-primary, hover:border-primary-light
```

### 🔄 Changing Colors Site-Wide

**File:** `app/globals.css` (lines ~10-36)

#### Quick Examples:

**Purple Theme:**
```css
--color-primary: #7c3aed;        /* purple-600 */
--color-primary-light: #8b5cf6;  /* purple-500 */
--color-primary-dark: #6d28d9;   /* purple-700 */
```

**Ocean Blue Theme:**
```css
--color-primary: #0ea5e9;        /* sky-500 */
--color-primary-light: #38bdf8;  /* sky-400 */
--color-primary-dark: #0284c7;   /* sky-600 */
```

**Forest Green Theme:**
```css
--color-primary: #059669;        /* emerald-600 */
--color-primary-light: #10b981;  /* emerald-500 */
--color-primary-dark: #047857;   /* emerald-700 */
```

**What Updates Automatically:**
- ✅ All navigation links and buttons
- ✅ All hover effects and focus states  
- ✅ All icon backgrounds and accents
- ✅ Dark mode colors automatically
- ✅ 100+ components across entire site

### ❌ Don't Use
- `text-teal-600`, `bg-blue-500`, etc. (hardcoded colors)
- Inline styles with colors
- Color values directly in components

### ✅ Do Use
- `text-primary`, `bg-bg-card`, etc. (centralized classes)
- CSS variables for custom components
- Consistent color patterns

## 📄 Creating New Pages with SEO & Titles

### 🎯 **CRITICAL: SEO & Title Requirements**

**ALL new pages MUST follow the server/client component pattern for proper SEO and page titles.**

### 1. Individual Pages (Characters, Gods, Places, Concepts)

**File Location**: `app/[category]/[page-name]/page.tsx`

**Required Pattern**: Server Component + Client Component

#### Step 1: Create the Server Component (page.tsx)
```tsx
import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data'; // or Concept, Place, God
import { generateCharacterMetadata } from '@/app/utils/metadata'; // or generateConceptMetadata, etc.
import CharacterNameClient from './CharacterNameClient'; // Note: No .tsx extension

// --- DATA FOR CHARACTER NAME ---
const characterData: Character = {
    name: "Character Name",
    image: "/characters/character-name.png",
    introduction: "Brief introduction about the character...",
    infoBox: {
        aliases: "Alias Name",
        occupation: "Occupation",
        placeOfBirth: "Birth Place",
        status: "Alive/Dead",
        gender: "Male/Female",
        // ... other info
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Description of appearance and personality..." },
        { type: 'ref', data: { book: "Book Name", chapter: 1, link: "/books/book-name#chapter-1" } },
    ],
    history: [
        {
            era: "Book Name",
            summary: [
                { type: 'text', content: "Historical events..." },
                { type: 'ref', data: { book: "Book Name", chapter: 5, link: "/books/book-name#chapter-5" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function CharacterNamePage() {
    return <CharacterNameClient characterData={characterData} />;
}
```

#### Step 2: Create the Client Component (CharacterNameClient.tsx)
```tsx
'use client';

import { usePathname } from 'next/navigation';
import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

interface CharacterNameClientProps {
    characterData: Character;
}

export default function CharacterNameClient({ characterData }: CharacterNameClientProps) {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}
```

### 🖼️ Adding Images to Individual Pages

**Current State**: Individual pages (characters, gods, places, concepts) use `PageTemplate` component which displays both images (when available) and the `InfoBox` in the sidebar.

**Image Display is Optional**: The PageTemplate component automatically displays images when they are provided in the data, but gracefully handles pages without images.

**Mobile-First Layout**: The PageTemplate uses a mobile-first approach where:
1. **Page title and introduction** appear at the top
2. **Image and InfoBox** appear next (on mobile) or in sidebar (on desktop)
3. **Content sections** follow below

**To Add Images to Individual Pages:**

#### Option 1: Modify PageTemplate Component
**File**: `app/components/layout/PageTemplate.tsx`

Add image display in the sidebar before the InfoBox:

```tsx
import React from 'react';
import Image from 'next/image'; // Add this import
import { formatLinksInText } from '../../utils/textFormatting';
import InfoBox, { InfoBoxData } from '../ui/InfoBox';
import ContentRenderer from '../ui/ContentRenderer';
import { ContentBlock } from '../../data/wiki-data';

// ... existing code ...

export default function PageTemplate({ 
    pageData, 
    infoBoxTitle,
    className = "" 
}: PageTemplateProps) {
    // ... existing renderSection function ...

    return (
        <div className={className}>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content Area */}
                <div className="w-full lg:w-2/3 order-2 lg:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary mb-4">
                        {pageData.name}
                    </h1>
                    <p className="text-lg italic text-text-muted dark:text-text-light mb-8 border-l-4 border-gray-300 dark:border-border-secondary pl-4">
                        {formatLinksInText(pageData.introduction)}
                    </p>

                    <div className="space-y-8">
                        {pageData.sections.map(renderSection)}
                    </div>
                </div>

                {/* Sidebar with Image and InfoBox */}
                <div className="w-full lg:w-1/3 order-1 lg:order-2">
                    <div className="sticky top-24 space-y-6">
                        {/* Add Image Display */}
                        {pageData.image && (
                            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                                <Image 
                                    src={pageData.image}
                                    alt={`Image of ${pageData.name}`}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "top" }}
                                />
                            </div>
                        )}
                        
                        <InfoBox 
                            title={infoBoxTitle}
                            data={pageData.infoBox}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
```

#### Option 2: Create Custom Page Layout
For pages that need different image layouts, create a custom component:

```tsx
'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';
import InfoBox from '@/app/components/ui/InfoBox';

interface CustomCharacterClientProps {
    characterData: Character;
}

export default function CustomCharacterClient({ characterData }: CustomCharacterClientProps) {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-2/3">
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary mb-4">
                            {characterData.name}
                        </h1>
                        {/* Add your content sections here */}
                    </div>

                    {/* Sidebar with Image */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24 space-y-6">
                            {/* Character Image */}
                            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                                <Image 
                                    src={characterData.image}
                                    alt={`Portrait of ${characterData.name}`}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "top" }}
                                />
                            </div>
                            
                            {/* Info Box */}
                            <InfoBox 
                                title="Biographical Information"
                                data={characterData.infoBox}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
```

**Image Requirements:**
- **File Format**: PNG preferred, JPG acceptable
- **Location**: `public/[category]/[slug].png`
- **Dimensions**: Minimum 400x400px, recommended 800x800px
- **Aspect Ratio**: Square (1:1) works best for consistent display
- **File Size**: Optimize for web (under 500KB recommended)

**Data Structure Requirements:**
Ensure your data includes the `image` property:
```typescript
const characterData: Character = {
    name: "Character Name",
    image: "/characters/character-name.png", // Add this
    // ... rest of data
};
```

### 2. Page Types & Metadata Functions

#### Character Pages
- **Server Component**: `page.tsx` with `generateCharacterMetadata(characterData)`
- **Client Component**: `[Name]Client.tsx` with `CharacterNavigation`
- **Data Type**: `Character` from `wiki-data.ts`
- **Navigation**: `ALL_CHARACTERS` array

#### Concept Pages
- **Server Component**: `page.tsx` with `generateConceptMetadata(conceptData)`
- **Client Component**: `[Name]Client.tsx` with `ConceptNavigation`
- **Data Type**: `Concept` from `wiki-data.ts`
- **Navigation**: `ALL_CONCEPTS` array

#### Place Pages
- **Server Component**: `page.tsx` with `generatePlaceMetadata(placeData)`
- **Client Component**: `[Name]Client.tsx` with `PlaceNavigation`
- **Data Type**: `Place` from `wiki-data.ts`
- **Navigation**: `ALL_PLACES` array

#### God Pages
- **Server Component**: `page.tsx` with `generateGodMetadata(godData)`
- **Client Component**: `[Name]Client.tsx` with `GodNavigation`
- **Data Type**: `God` from `wiki-data.ts`
- **Navigation**: `ALL_GODS` array

### 3. Special Pages (Quotes, etc.)

For pages that don't follow the standard pattern:

```tsx
import type { Metadata } from 'next';
import SpecialPageClient from './SpecialPageClient';

export const metadata: Metadata = {
    title: 'Page Title',
    description: 'Page description for SEO...',
    openGraph: {
        title: 'Page Title | The Dandelion Dynasty Wiki',
        description: 'Page description for social media...',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'Page Title | The Dandelion Dynasty Wiki',
        description: 'Page description for Twitter...'
    }
};

export default function SpecialPage() {
    return <SpecialPageClient />;
}
```

### 4. Title Format Requirements

**ALL pages must follow this exact format:**
- **Home**: "Home | The Dandelion Dynasty Wiki"
- **Characters**: "Character Name | The Dandelion Dynasty Wiki"
- **Concepts**: "Concept Name | The Dandelion Dynasty Wiki"
- **Places**: "Place Name | The Dandelion Dynasty Wiki"
- **Gods**: "God Name | The Dandelion Dynasty Wiki"
- **Books**: "Book Name | The Dandelion Dynasty Wiki"

### 5. File Naming Conventions

#### Client Component Names
- **Characters**: `KuniGaruClient.tsx`, `MataZynduClient.tsx`
- **Concepts**: `GarinafinClient.tsx`, `TheDandelionClient.tsx`
- **Places**: `PanClient.tsx`, `XanaClient.tsx`
- **Gods**: `KijiClient.tsx`, `FithoweoClient.tsx`

**Rules:**
- Remove spaces and special characters
- Use PascalCase
- Add "Client" suffix
- Match the data name exactly

#### Server Component Names
- **Characters**: `KuniGaruPage()`, `MataZynduPage()`
- **Concepts**: `GarinafinPage()`, `TheDandelionPage()`
- **Places**: `PanPage()`, `XanaPage()`
- **Gods**: `KijiPage()`, `FithoweoPage()`

### 6. Import Guidelines

**CRITICAL**: When importing client components, do NOT include the `.tsx` extension:

```tsx
// ✅ Correct
import CharacterNameClient from './CharacterNameClient';
import PlaceNameClient from './PlaceNameClient';

// ❌ Incorrect
import CharacterNameClient from './CharacterNameClient.tsx';
import PlaceNameClient from './PlaceNameClient.tsx';
```

### 7. Image Handling

**Images are Optional**: The PageTemplate component automatically handles pages with or without images:

```tsx
// ✅ With image
const placeData: Place = {
    name: "Place Name",
    image: "/places/place-name.jpeg", // Image will be displayed
    introduction: "Description...",
    // ... rest of data
};

// ✅ Without image (empty string or undefined)
const placeData: Place = {
    name: "Place Name",
    image: "", // No image will be displayed
    introduction: "Description...",
    // ... rest of data
};
```

**Image Requirements** (when using images):
- **File Format**: PNG, JPG, or JPEG
- **Location**: `public/[category]/[slug].{png|jpg|jpeg}`
- **Dimensions**: Minimum 400x400px, recommended 800x800px
- **Aspect Ratio**: Square (1:1) works best for consistent display
- **File Size**: Optimize for web (under 500KB recommended)

### 8. SEO Checklist

Before creating any new page, ensure:

- [ ] **Server Component**: Exports `metadata` using appropriate `generate*Metadata` function
- [ ] **Client Component**: Handles all interactive functionality
- [ ] **Title Format**: Follows "Name | The Dandelion Dynasty Wiki" pattern
- [ ] **Description**: Includes relevant, descriptive content
- [ ] **OpenGraph**: Proper social media metadata
- [ ] **Twitter Cards**: Twitter-specific metadata
- [ ] **Navigation**: Proper prev/next navigation
- [ ] **Data Registration**: Added to appropriate data arrays in `wiki-data.ts`
- [ ] **Import Guidelines**: Client components imported without `.tsx` extension
- [ ] **Image Handling**: Images are optional and handled gracefully

### 9. Common Mistakes to Avoid

❌ **Don't:**
- Put `'use client'` in server components
- Export `metadata` from client components
- Use hardcoded titles without the "Wiki" suffix
- Forget to create client components for interactive pages
- Skip the navigation setup
- Include `.tsx` extension when importing client components
- Assume all pages need images

✅ **Do:**
- Always use the server/client pattern
- Follow the exact title format
- Include proper metadata for SEO
- Test that titles appear correctly in browser
- Ensure navigation works properly
- Import client components without `.tsx` extension
- Handle images as optional in PageTemplate

### 8. Metadata Utility Functions

**Location**: `app/utils/metadata.ts`

The following functions generate proper SEO metadata for each page type:

#### Available Functions:
- `generateCharacterMetadata(characterData)` - For character pages
- `generateConceptMetadata(conceptData)` - For concept pages  
- `generatePlaceMetadata(placeData)` - For place pages
- `generateGodMetadata(godData)` - For god pages
- `generateBookMetadata(bookData)` - For book pages
- `generatePageMetadata(title, description)` - For general pages

#### Example Usage:
```tsx
import { generateCharacterMetadata } from '@/app/utils/metadata';

export const metadata: Metadata = generateCharacterMetadata(characterData);
```

#### What These Functions Provide:
- **Title**: "Page Name | The Dandelion Dynasty Wiki"
- **Description**: SEO-optimized description
- **OpenGraph**: Social media sharing metadata
- **Twitter Cards**: Twitter-specific metadata
- **Keywords**: Relevant search terms

### 9. Testing Your New Pages

After creating a new page:

1. **Build Test**: Run `npm run build` to ensure no errors
2. **Title Check**: Visit the page and verify the browser title
3. **Navigation Test**: Check prev/next navigation works
4. **Search Test**: Ensure the page appears in search results
5. **Responsive Test**: Check mobile/desktop layouts
6. **Dark Mode Test**: Verify dark mode works correctly

### 2. Category Listing Pages

**File Location**: `app/[category]/page.tsx`

**Template Structure (Text-Only Version)**:
```tsx
'use client';

import Link from 'next/link';
import { CATEGORY_DATA } from '../data/wiki-data';

export default function CategoryPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-8 border-b pb-4">
        Category Name
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORY_DATA.map(item => (
          <Link 
            href={item.link} 
            key={item.name}
            className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-text-primary dark:text-text-primary mt-1 group-hover:text-link dark:group-hover:text-accent-pink transition-colors">
                {item.name}
              </h2>
              <p className="text-sm text-text-muted dark:text-text-light mt-2">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

**Template Structure (With Images Version)**:
```tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CATEGORY_DATA } from '../data/wiki-data';

export default function CategoryPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-8 border-b pb-4">
        Category Name
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORY_DATA.map(item => (
          <Link 
            href={item.link} 
            key={item.name}
            className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="relative w-full h-64">
              <Image 
                src={item.image}
                alt={`Image of ${item.name}`}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-text-primary dark:text-text-primary mt-1 group-hover:text-link dark:group-hover:text-accent-pink transition-colors">
                {item.name}
              </h2>
              <p className="text-sm text-text-muted dark:text-text-light mt-2">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

**To Add Images Back to Listing Pages:**

1. **Import Image Component**: Add `import Image from 'next/image';` at the top
2. **Add Image Container**: Insert the image div before the text content:
   ```tsx
   <div className="relative w-full h-64">
     <Image 
       src={item.image}
       alt={`Image of ${item.name}`}
       fill
       style={{ objectFit: "cover", objectPosition: "top" }}
     />
   </div>
   ```
3. **Adjust Text Padding**: Change `p-6` to `p-4` in the text container
4. **Ensure Data Has Images**: Make sure your data includes `image` property for each item

**Image Positioning Options:**
- `objectPosition: "top"` - For character portraits (faces at top)
- `objectPosition: "center"` - For general images
- `objectPosition: "bottom"` - For images where bottom is important

### 3. Adding New Category to Homepage

**File**: `app/page.tsx`

Add new category card to the grid (after the existing 6 cards):

```tsx
<Link href="/new-category" className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 transform hover:-translate-y-1">
  <div className="text-center">
    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
      <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Add appropriate icon path */}
      </svg>
    </div>
    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Category Title</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">Category description</p>
  </div>
</Link>
```

**Note**: Homepage uses hardcoded teal colors (not centralized) to maintain original design.

## 🧩 Component Usage

### Core Components

#### 1. PageTemplate
**Purpose**: Consistent page layout with navigation and image modal support
**Location**: `app/components/layout/PageTemplate.tsx`

**Layout Structure**:
1. **Page Title & Introduction** - Always at the top
2. **Image & InfoBox** - Next on mobile, sidebar on desktop  
3. **Content Sections** - Below the image/info area

**Features**:
- **Optional images** with click-to-expand modal
- **Mobile-first responsive design**
- **Consistent spacing and typography**
- **InfoBox integration**

```tsx
<PageTemplate 
  pageData={convertPlaceData(placeData)} 
  infoBoxTitle="Location Information"
/>
```

#### 2. InfoBox
**Purpose**: Display structured information
**Location**: `app/components/ui/InfoBox.tsx`
```tsx
<InfoBox 
  title="Quick Info"
  items={[
    { label: "Key", value: "Value" },
    { label: "Link", value: { text: "Link Text", link: "/path" } }
  ]}
  className="mb-6" // optional
/>
```

#### 3. ContentRenderer
**Purpose**: Render markdown-like content
**Location**: `app/components/ui/ContentRenderer.tsx`
```tsx
<ContentRenderer content={`
  ## Heading
  Regular text with **bold** and *italic*.
  
  ### Subheading
  More content...
`} />
```

#### 4. SearchBar
**Purpose**: Site-wide search functionality
**Location**: `app/components/features/SearchBar.tsx`
```tsx
<SearchBar 
  placeholder="Search..." 
  className="w-full"
/>
```

### Layout Components

#### Navbar
- Responsive navigation with dropdowns
- Theme toggle integration
- Search bar integration
- Uses centralized colors

#### Footer
- Site information and links
- Consistent styling
- Social/external links

#### ThemeProviders
- Wraps app for theme functionality
- Handles dark/light mode switching

## 📊 Data Management

### Primary Data File
**Location**: `app/data/wiki-data.ts`

**Structure**:
```typescript
// Export arrays for each category
export const ALL_BOOKS = [
  {
    title: "Book Title",
    path: "/books/book-slug",
    description: "Brief description",
    // ... other properties
  }
];

export const CHARACTERS_DATA = [
  {
    name: "Character Name",
    link: "/characters/character-slug",
    description: "Brief description",
    status: "Alive/Dead",
    // ... other properties
  }
];

// Combine all for search
export const ALL_WIKI_PAGES = [
  ...ALL_BOOKS.map(book => ({ ...book, type: 'Book' })),
  ...CHARACTERS_DATA.map(char => ({ ...char, type: 'Character', title: char.name })),
  // ... other categories
];
```

### Adding New Data
1. Add items to appropriate category array
2. Update `ALL_WIKI_PAGES` to include new items
3. Ensure consistent structure with `title`, `path`, `type` properties

### Navigation Data
```typescript
// For navbar dropdowns
export const CHARACTERS_BY_BOOK_NAV = {
  "Grace of Kings": [
    { name: "Character Name", link: "/characters/character-slug" }
  ],
  // ... other books
};
```

## 🎨 Design System & Styling Guidelines

### 🚨 CENTRALIZED DESIGN SYSTEM RULES

**ALL pages must follow these exact patterns to ensure consistency:**

#### 1. 📏 Grid Layouts (STANDARDIZED)
```tsx
// ✅ REQUIRED: All listing pages use 4-column grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"

// ❌ NEVER use these variations:
// "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" (3 columns)
// "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" (missing xl:grid-cols-4)
```

#### 2. 🖼️ Card Component Standard (REQUIRED)
```tsx
// ✅ EXACT template for ALL listing page cards:
className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-border-primary dark:border-border-secondary"

// Content inside cards:
<div className="p-6">
  <h2 className="text-xl font-bold text-text-primary dark:text-text-primary group-hover:text-accent-pink transition-colors">{item.name}</h2>
  <p className="text-sm text-text-muted dark:text-text-muted mt-2">{item.description}</p>
</div>
```

#### 3. 📝 Page Headings Standard (REQUIRED)
```tsx
// ✅ EXACT template for ALL listing page headings:
className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-8 border-b pb-4"

// ❌ NEVER use mb-4 - always use mb-8 for consistency
```

#### 4. 🎯 Hover Effects Standard (REQUIRED)
```tsx
// ✅ EXACT hover effect for ALL cards:
group-hover:text-accent-pink

// ❌ NEVER use these variations:
// group-hover:text-[color:var(--color-accent-pink)]
// group-hover:[color:var(--color-accent-pink)]
// group-hover:text-link dark:group-hover:text-accent-pink
```

#### 5. 🔲 Border Standard (REQUIRED)
```tsx
// ✅ ALL cards must have borders:
border border-border-primary dark:border-border-secondary
```

#### 6. 📐 Spacing Standards
```tsx
// ✅ Container spacing:
className="max-w-6xl mx-auto px-4 py-8" // For listing pages
className="max-w-6xl mx-auto"          // For individual pages

// ✅ Card spacing:
className="p-6"     // Card content padding
className="gap-8"   // Grid gap
className="mb-8"    // Heading bottom margin
```

### 🎨 Individual Styling Guidelines

#### 1. Use Centralized Colors
```tsx
// ✅ Good
className="text-text-primary bg-bg-card hover:text-accent-pink"

// ❌ Bad
className="text-gray-900 bg-white hover:text-teal-600"
```

#### 2. Responsive Design
```tsx
// Always include responsive classes
className="text-sm md:text-base lg:text-lg"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
```

#### 3. Dark Mode Support
```tsx
// Include dark mode variants for ALL elements
className="bg-bg-card dark:bg-bg-card text-text-primary dark:text-text-primary"
```

#### 4. Smooth Transitions
```tsx
// All interactive elements need transitions
className="transition-all duration-200 hover:transform hover:-translate-y-1"
className="transition-colors" // For text color changes
```

### 🚀 Quick Reference Templates

#### Listing Page Template
```tsx
'use client';

import Link from 'next/link';
import { CATEGORY_DATA } from '../data/wiki-data';

export default function CategoryPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-8 border-b pb-4">
                Category Name
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {CATEGORY_DATA.map((item) => (
                    <Link 
                        href={item.link} 
                        key={item.name}
                        className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-border-primary dark:border-border-secondary"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-text-primary dark:text-text-primary group-hover:text-accent-pink transition-colors">
                                {item.name}
                            </h2>
                            <p className="text-sm text-text-muted dark:text-text-muted mt-2">
                                {item.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
```

#### Card Component Template (for custom components)
```tsx
<Link 
    href={item.link} 
    key={item.name}
    className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-border-primary dark:border-border-secondary"
>
    <div className="p-6">
        <h2 className="text-xl font-bold text-text-primary dark:text-text-primary group-hover:text-accent-pink transition-colors">
            {item.name}
        </h2>
        <p className="text-sm text-text-muted dark:text-text-muted mt-2">
            {item.description}
        </p>
    </div>
</Link>
```

### ⚠️ Design Enforcement Checklist

Before any page goes live, verify:

- [ ] **Grid Layout**: Uses `xl:grid-cols-4` for 4-column layout
- [ ] **Borders**: All cards have `border border-border-primary dark:border-border-secondary`
- [ ] **Hover Effect**: Uses `group-hover:text-accent-pink` (not variations)
- [ ] **Heading**: Uses `mb-8` spacing (not `mb-4`)
- [ ] **Card Padding**: Uses `p-6` for content
- [ ] **Gap**: Uses `gap-8` for grid spacing
- [ ] **Container**: Uses `max-w-6xl mx-auto px-4 py-8` for listing pages
- [ ] **Shadows**: Uses `shadow-lg hover:shadow-2xl` for cards
- [ ] **Transform**: Uses `hover:-translate-y-1` for lift effect
- [ ] **Colors**: Only uses centralized color classes
- [ ] **Dark Mode**: Every class has dark mode variant

## 🔄 Development Workflow

### 1. Starting Development
```bash
npm install
npm run dev
# Server runs on http://localhost:3000 (or 3001 if 3000 is busy)
```

### 2. Contributing Guidelines

#### Content Standards:
- Be faithful to the canon (book references encouraged)
- Keep tone neutral and encyclopedic
- Prefer concise sections over long text walls
- Use internal links for cross-references
- Add citations when possible

#### File Naming:
- Slugs: lowercase and hyphenated (e.g., `kuni-garu`)
- Images: `public/<category>/<slug>.png` (PNG preferred)
- Always register pages in `app/data/wiki-data.ts`

### 2. Creating New Pages
1. Create directory: `app/[category]/[page-name]/`
2. Add `page.tsx` file
3. Update `wiki-data.ts` with new entry
4. Test navigation and search

### 3. Adding New Category
1. Create directory: `app/[category]/`
2. Create listing page: `app/[category]/page.tsx`
3. Add individual pages: `app/[category]/[item]/page.tsx`
4. Update homepage with new category card
5. Update navbar if needed
6. Update `wiki-data.ts`

### 4. Testing Checklist
- [ ] Page loads correctly
- [ ] Search finds the new content
- [ ] Navigation works
- [ ] Responsive design works
- [ ] Dark mode works
- [ ] Colors use centralized system
- [ ] **Design System Compliance:**
  - [ ] Grid layout is 4 columns (`xl:grid-cols-4`)
  - [ ] Cards have borders and correct hover effects
  - [ ] Headings use `mb-8` spacing
  - [ ] All elements follow centralized design patterns

## 🖼️ Image Management

### Current Image Status
**As of latest update**: Images have been removed from:
- ✅ **Listing Pages**: Characters, Gods, Places, Concepts (text-only cards)
- ✅ **Individual Pages**: All character, god, place, and concept pages (InfoBox only in sidebar)

### Quick Image Restoration Guide

#### For Listing Pages (Characters, Gods, Places, Concepts)
**Files to modify**: `app/[category]/page.tsx`

1. **Add Image import**: `import Image from 'next/image';`
2. **Add image container** before text content:
   ```tsx
   <div className="relative w-full h-64">
     <Image 
       src={item.image}
       alt={`Image of ${item.name}`}
       fill
       style={{ objectFit: "cover", objectPosition: "top" }}
     />
   </div>
   ```
3. **Adjust padding**: Change `p-6` to `p-4` in text container

#### For Individual Pages
**File to modify**: `app/components/layout/PageTemplate.tsx`

1. **Add Image import**: `import Image from 'next/image';`
2. **Add image display** in sidebar before InfoBox:
   ```tsx
   {pageData.image && (
     <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
       <Image 
         src={pageData.image}
         alt={`Image of ${pageData.name}`}
         fill
         style={{ objectFit: "cover", objectPosition: "top" }}
       />
     </div>
   )}
   ```

### Image File Organization
```
public/
├── characters/          # Character portraits
│   ├── kuni-garu.png
│   ├── mata-zyndu.png
│   └── ...
├── gods/               # God representations
│   ├── kiji.png
│   ├── fithoweo.png
│   └── ...
├── places/             # Location images
│   ├── pan.png
│   ├── xana.png
│   └── ...
└── concepts/           # Concept illustrations
    ├── garinafin.png
    ├── cruben.png
    └── ...
```

### Image Optimization Tips
- **Format**: PNG for transparency, JPG for photos
- **Size**: 400x400px minimum, 800x800px recommended
- **Compression**: Use tools like TinyPNG or ImageOptim
- **Alt Text**: Always include descriptive alt text for accessibility

## 🚨 Common Pitfalls

### 1. Color System
- **Don't** use hardcoded Tailwind colors
- **Do** use centralized color classes
- **Exception**: Homepage uses hardcoded teal (by design)

### 2. Data Structure
- Ensure all pages have `title`, `path`, and `type` properties
- Update `ALL_WIKI_PAGES` when adding new content
- Maintain consistent naming conventions

### 3. Component Usage
- Use existing components when possible
- Follow established patterns
- Maintain TypeScript types

### 4. File Organization
- Follow the directory structure
- Use kebab-case for URLs and file names
- Keep related files together

### 5. Image Management
- **Don't** forget to add `image` property to data objects
- **Do** use Next.js Image component for optimization
- **Remember** to update both listing and individual pages consistently

## 🎯 Best Practices

### 1. Performance
- Use Next.js Image component for images
- Implement proper loading states
- Optimize bundle size

### 2. Accessibility
- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain color contrast ratios

### 3. SEO
- Use proper heading hierarchy
- Include meta descriptions
- Implement structured data

### 4. Maintainability
- Write clear, commented code
- Follow TypeScript best practices
- Use consistent naming conventions

## 📚 Additional Resources

### Project Files to Reference
- `app/globals.css` - Color system
- `app/data/wiki-data.ts` - Content data
- `app/components/` - Reusable components
- `tailwind.config.js` - Custom Tailwind config

### External Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

---

## 🔍 SEO Best Practices & Optimization

### 🎯 SEO Overview

**Primary Domain**: `https://dandelion-dynasty.com`  
**Goal**: Rank #1 for all Dandelion Dynasty-related searches (characters, places, gods, concepts, books)

### 🚀 SEO Implementation

The wiki uses a comprehensive SEO strategy with:
- **Canonical URLs** pointing to dandelion-dynasty.com
- **Rich metadata** with extensive keywords
- **Structured data** (JSON-LD) for search engines
- **Optimized descriptions** with character/place names
- **Sitemap** with all pages
- **Robots.txt** configuration

### 📊 SEO Files & Configuration

#### 1. Root Layout (`app/layout.tsx`)
**Purpose**: Site-wide SEO metadata and structured data

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://dandelion-dynasty.com'),
  title: {
    template: '%s | The Dandelion Dynasty Wiki',
    default: 'The Dandelion Dynasty Wiki'
  },
  description: '...',
  keywords: [
    // Series & Author
    'Dandelion Dynasty', 'Ken Liu', 'silkpunk', 'fantasy series', 'Dara',
    // Books
    'Grace of Kings', 'Wall of Storms', 'Veiled Throne', 'Speaking Bones',
    // Main Characters
    'Kuni Garu', 'Mata Zyndu', 'Jia Matiza', 'Zomi Kidosu', 'Théra', 'Phyro Garu',
    // Major Concepts
    'garinafin', 'cruben', 'airship', 'silkpunk technology',
    // Places
    'Pan', 'Xana', 'Rui', 'Dasu', 'Géjira', 'Ukyu-Gondé', 'Lyucu Empire',
    // Content Type
    'wiki', 'encyclopedia', 'character guide', 'book summary'
  ],
  // ... rest of metadata
}
```

**Key Features**:
- **metadataBase**: All relative URLs automatically use dandelion-dynasty.com
- **Extensive keywords**: Includes main characters, places, concepts for better discoverability
- **Structured data**: Embedded JSON-LD for search engines

#### 2. Metadata Utility (`app/utils/metadata.ts`)
**Purpose**: Generate SEO-optimized metadata for each page type

**Enhanced Features**:
- ✅ Uses dandelion-dynasty.com for all canonical URLs
- ✅ Enhanced descriptions with character/place/concept names
- ✅ Page-specific keywords for better ranking
- ✅ Alt text for images
- ✅ Proper OpenGraph and Twitter cards

**Functions Available**:
```typescript
// Character pages - includes character name in keywords
generateCharacterMetadata(character: Character)

// Place pages - includes location-specific keywords
generatePlaceMetadata(place: Place)

// God pages - includes mythology keywords
generateGodMetadata(god: God)

// Concept pages - includes worldbuilding keywords
generateConceptMetadata(concept: Concept)

// Book pages - includes book title and series keywords
generateBookMetadata(bookTitle: string, description?: string, slug?: string)

// General pages - includes basic keywords
generatePageMetadata(pageTitle: string, description?: string, slug?: string)
```

#### 3. Structured Data (`app/utils/structuredData.ts`)
**Purpose**: Provide semantic information to search engines

**Available Functions**:
```typescript
// Character pages - uses "Person" schema type
generateCharacterStructuredData(character: Character, slug: string)

// Place pages - uses "Place" schema type
generatePlaceStructuredData(place: Place, slug: string)

// God pages - uses "Thing" schema type
generateGodStructuredData(god: God, slug: string)

// Concept pages - uses "Thing" schema type
generateConceptStructuredData(concept: Concept, slug: string)

// Book pages - uses "Book" schema type with author
generateBookStructuredData(bookTitle: string, description: string, slug: string)

// Site-wide - includes search action
generateWebsiteStructuredData()

// Navigation breadcrumbs
generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>)
```

**What Structured Data Provides**:
- Search engines understand page content better
- Rich snippets in search results
- Knowledge graph integration
- Better categorization

#### 4. Sitemap (`app/sitemap.ts`)
**Purpose**: Help search engines discover all pages

**Current Configuration**:
- **Homepage**: Priority 1.0, weekly updates
- **Category pages**: Priority 0.9, weekly updates
- **Character pages**: Priority 0.8, monthly updates
- **Book pages**: Priority 0.8, monthly updates
- **Place/God/Concept pages**: Priority 0.7, monthly updates
- **Other pages**: Priority 0.6, monthly updates

**Automatically generates** from wiki data:
- All character pages from `ALL_CHARACTERS`
- All place pages from `ALL_PLACES`
- All god pages from `ALL_GODS`
- All concept pages from `ALL_CONCEPTS`
- All book pages from `ALL_BOOKS`

#### 5. Robots.txt (`app/robots.ts`)
**Purpose**: Control search engine crawling

```typescript
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,  // 1 second between requests
      }
    ],
    sitemap: 'https://dandelion-dynasty.com/sitemap.xml',
  }
}
```

### 🎯 SEO Best Practices for New Pages

#### 1. Use Enhanced Descriptions
**Good Description**:
```typescript
"Kuni Garu, the cunning Emperor of Dara. Explore the complete biography, history, and role of Kuni Garu in Ken Liu's silkpunk fantasy series."
```

**Why It Works**:
- Includes character name multiple times
- Mentions the series and author
- Describes what users will find
- Uses relevant keywords (biography, history, role)

#### 2. Include Relevant Keywords
**For Characters**:
```typescript
keywords: [
  'Character Name',
  'Dandelion Dynasty character',
  'Ken Liu',
  'The Grace of Kings',
  'silkpunk fantasy',
  'Dara character',
  ...character.name.split(' ')  // Individual name parts
]
```

**For Places**:
```typescript
keywords: [
  'Place Name',
  'Dandelion Dynasty location',
  'Ken Liu',
  'Dara geography',
  'silkpunk world',
  'fantasy locations'
]
```

#### 3. Add Alt Text to Images
```typescript
openGraph: {
  images: imageUrl ? [{ 
    url: imageUrl, 
    alt: `Portrait of ${character.name}` 
  }] : undefined
}
```

#### 4. Use Canonical URLs
```typescript
const canonicalUrl = `https://dandelion-dynasty.com/characters/${slug}`;

alternates: {
  canonical: canonicalUrl
}
```

### 📈 SEO Monitoring & Improvement

#### Google Search Console Setup
1. Verify ownership of dandelion-dynasty.com
2. Submit sitemap: `https://dandelion-dynasty.com/sitemap.xml`
3. Monitor:
   - Indexing status
   - Search queries
   - Click-through rates
   - Page performance

#### Add Verification Code
Update `app/layout.tsx`:
```typescript
verification: {
  google: 'your-google-site-verification-code',
}
```

#### Key Metrics to Track
- **Impressions**: How many times your site appears in search
- **Clicks**: How many people click through
- **Average Position**: Your ranking for queries
- **CTR**: Click-through rate

### 🎨 SEO-Friendly Content Guidelines

#### Page Titles
**Format**: `[Page Name] | The Dandelion Dynasty Wiki`
- ✅ "Kuni Garu | The Dandelion Dynasty Wiki"
- ✅ "The Grace of Kings | The Dandelion Dynasty Wiki"
- ❌ "Kuni Garu" (missing branding)
- ❌ "Kuni Garu - Dandelion Wiki" (inconsistent format)

#### Meta Descriptions
**Length**: 120-160 characters
**Structure**: [Entity name] + [brief description] + [context/series]

**Good Examples**:
- "Kuni Garu, the cunning Emperor of Dara. Explore his complete biography, rise to power, and legacy in Ken Liu's silkpunk fantasy series."
- "Pan, the archipelago nation. Discover the geography, history, and significance of Pan in Ken Liu's world of Dara."

#### Headings Hierarchy
```tsx
<h1>Character Name</h1>           {/* Page title */}
<h2>Appearance and Personality</h2> {/* Main sections */}
<h3>Physical Description</h3>      {/* Subsections */}
```

#### Internal Linking
- Link to related characters, places, and concepts
- Use descriptive anchor text
- Example: "Kuni Garu" instead of "click here"

### 🔗 URL Structure

#### Best Practices
```
✅ Good URLs:
https://dandelion-dynasty.com/characters/kuni-garu
https://dandelion-dynasty.com/places/pan
https://dandelion-dynasty.com/gods/kiji

❌ Avoid:
/characters?id=123
/page.php?name=kuni-garu
/characters/Kuni-Garu (mixed case)
```

#### Slug Guidelines
- Use lowercase
- Use hyphens, not underscores
- Remove special characters
- Keep it short and descriptive
- Match the entity name

### 📱 Technical SEO

#### Performance Optimization
- ✅ Next.js Image component for optimization
- ✅ Static generation for all pages
- ✅ Minimal JavaScript bundles
- ✅ Fast page loads (<2 seconds)

#### Mobile-First
- ✅ Responsive design
- ✅ Touch-friendly navigation
- ✅ Readable text sizes
- ✅ Properly sized tap targets

#### Core Web Vitals
Monitor these metrics:
- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### 🎯 Ranking Strategy

#### Target Keywords by Category

**Characters**:
- "[Character Name] Dandelion Dynasty"
- "[Character Name] Ken Liu"
- "[Character Name] Grace of Kings"
- "Who is [Character Name]"

**Places**:
- "[Place Name] Dandelion Dynasty"
- "[Place Name] Dara"
- "[Place Name] Ken Liu world"

**Concepts**:
- "What is [Concept]"
- "[Concept] Dandelion Dynasty"
- "[Concept] silkpunk"
- "Garinafin flying creature"

**Books**:
- "Grace of Kings summary"
- "Grace of Kings characters"
- "Dandelion Dynasty reading order"

#### Content Quality
- ✅ Comprehensive information
- ✅ Regular updates
- ✅ Cite sources (book references)
- ✅ Unique content (not copied)
- ✅ Well-structured with headings

### 🚨 SEO Checklist for New Pages

Before publishing any new page:

- [ ] **Metadata**: Uses appropriate generate*Metadata function
- [ ] **Title**: Follows "Name | The Dandelion Dynasty Wiki" format
- [ ] **Description**: Enhanced with keywords and context
- [ ] **Keywords**: Includes relevant search terms
- [ ] **Canonical URL**: Points to dandelion-dynasty.com
- [ ] **Images**: Have descriptive alt text
- [ ] **Structured Data**: Added if applicable (for major pages)
- [ ] **Internal Links**: Links to related pages
- [ ] **Heading Hierarchy**: Proper h1, h2, h3 structure
- [ ] **URL Slug**: Lowercase, hyphenated, descriptive
- [ ] **Content Quality**: Comprehensive and accurate
- [ ] **Mobile Responsive**: Looks good on all devices
- [ ] **Data Registration**: Added to wiki-data.ts arrays
- [ ] **Sitemap**: Automatically included via data arrays

### 🎓 SEO Resources

#### Tools to Use
- **Google Search Console**: Monitor search performance
- **Google PageSpeed Insights**: Check performance
- **Lighthouse**: Audit SEO, performance, accessibility
- **Ahrefs/SEMrush**: Track keyword rankings (optional)

#### Key Documents
- [Google Search Central](https://developers.google.com/search)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org/)

---

## 🤖 AI Assistant Guidelines

When working with this codebase:

1. **Always check** the color system before adding colors
2. **Reference existing patterns** before creating new components
3. **Update data files** when adding new content
4. **Test responsive design** and dark mode
5. **Follow TypeScript** strict mode requirements
6. **Maintain consistency** with existing code style
7. **🚨 CRITICAL: Follow SEO & Title Requirements** for all new pages
8. **Use server/client component pattern** for proper metadata
9. **Test page titles** appear correctly in browser
10. **Ensure proper navigation** between pages
11. **🚨 CRITICAL: Import client components WITHOUT .tsx extension**
12. **Handle images as optional** - PageTemplate gracefully handles pages with or without images
13. **Use proper image paths** when adding images to data objects
14. **🚨 CRITICAL: Update INSTRUCTIONS.md when making template changes** - Always document template modifications, layout changes, and new features
15. **Test mobile responsiveness** - Ensure all changes work on mobile devices
16. **🚨 CRITICAL: SEO Optimization** - Use enhanced metadata, keywords, and canonical URLs pointing to dandelion-dynasty.com
17. **Implement structured data** for major pages using appropriate schema types
18. **Follow SEO best practices** outlined in the SEO section above

### 🎯 **SEO & Title Requirements (MANDATORY)**

**EVERY new page MUST:**
- Use the server/client component pattern
- Export proper `metadata` using utility functions from `app/utils/metadata.ts`
- Follow the exact title format: "Name | The Dandelion Dynasty Wiki"
- Include enhanced descriptions with relevant keywords
- Use canonical URLs pointing to `https://dandelion-dynasty.com`
- Include OpenGraph and Twitter metadata with alt text for images
- Add structured data for major pages (characters, places, gods, concepts, books)
- Have proper navigation (prev/next/return links)
- Be registered in the appropriate data arrays for sitemap generation

**NEVER:**
- Create pages without proper metadata
- Use hardcoded titles without "Wiki" suffix
- Use old domain (dandelion-wiki.vercel.app) for canonical URLs
- Skip keyword optimization in metadata
- Forget alt text for images
- Mix server and client code in the same component
- Skip the navigation setup

This wiki is a labor of love for the Dandelion Dynasty series. Maintain the high quality and attention to detail that makes it special! ✨

---

## 📏 DESIGN SYSTEM SUMMARY

### ✅ STANDARDIZED ELEMENTS

All pages now follow these exact specifications:

#### 🎯 Grid Layout
- **ALL listing pages**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8`
- **4 columns on extra-large screens** (your preference implemented)
- **Consistent gap-8** across all grids

#### 🎨 Card Design
- **ALL cards have borders**: `border border-border-primary dark:border-border-secondary`
- **Consistent shadows**: `shadow-lg hover:shadow-2xl`
- **Uniform hover lift**: `hover:-translate-y-1`
- **Standard padding**: `p-6` for card content

#### 🔗 Hover Effects
- **ALL cards**: `group-hover:text-accent-pink` (standardized pink hover)
- **Smooth transitions**: `transition-colors` for text changes
- **NO MORE inconsistent hover patterns**

#### 📐 Heading Spacing
- **ALL main headings**: `mb-8` distance from content (32px)
- **NO MORE `mb-4`** variations
- **Consistent border**: `border-b pb-4`

#### 🌈 Color Usage
- **ALL elements use centralized colors**
- **NO hardcoded colors** like `text-gray-800`
- **Proper dark mode variants** for every element
- **Centralized hover colors**: `text-accent-pink`

#### 📱 Container Standards
- **Listing pages**: `max-w-6xl mx-auto px-4 py-8`
- **Individual pages**: `max-w-6xl mx-auto`
- **Consistent responsive behavior**

### 🎛️ PAGES STANDARDIZED

✅ **Characters Page** - Grid, borders, hover, spacing
✅ **Gods Page** - Grid, borders, hover, spacing
✅ **Places Page** - Grid, borders, hover, spacing
✅ **Concepts Page** - Grid, borders, hover, spacing
✅ **Books Page** - Grid, borders, hover, spacing
✅ **Other Pages** - Grid, borders, hover, spacing
✅ **Updates Page** - Heading spacing
✅ **Glossary Page** - Heading spacing
✅ **PageTemplate Component** - Centralized colors

### 🚫 DESIGN VIOLATIONS ELIMINATED

❌ ~~3-column grids~~ → ✅ 4-column grids
❌ ~~Missing borders~~ → ✅ Consistent borders
❌ ~~Inconsistent hover effects~~ → ✅ Standardized pink hover
❌ ~~Variable heading spacing~~ → ✅ Uniform `mb-8`
❌ ~~Hardcoded colors~~ → ✅ Centralized color system
❌ ~~Different gap sizes~~ → ✅ Standard `gap-8`

### 📋 MAINTENANCE CHECKLIST

For any new pages, ensure:
- [ ] Uses the standardized grid layout
- [ ] All cards have proper borders
- [ ] Hover effects use `group-hover:text-accent-pink`
- [ ] Headings use `mb-8` spacing
- [ ] Only centralized color classes are used
- [ ] Dark mode variants are included
- [ ] Follows the exact templates in this guide

**Result: Perfect design consistency across the entire wiki! 🎉**
