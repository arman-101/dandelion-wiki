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

## 📄 Creating New Pages

### 1. Individual Pages (Characters, Gods, etc.)

**File Location**: `app/[category]/[page-name]/page.tsx`

**Template Structure**:
```tsx
import { PageTemplate } from '../../components/layout/PageTemplate';
import { InfoBox } from '../../components/ui/InfoBox';
import { ContentRenderer } from '../../components/ui/ContentRenderer';

export default function CharacterNamePage() {
  return (
    <PageTemplate 
      title="Character Name"
      subtitle="Brief description"
      category="Characters"
    >
      <InfoBox 
        title="Quick Info"
        items={[
          { label: "Status", value: "Alive/Dead" },
          { label: "Origin", value: "Place name" },
          // ... more info
        ]}
      />
      
      <ContentRenderer content={`
        ## Background
        Character background content...
        
        ## Key Events
        Important events...
      `} />
    </PageTemplate>
  );
}
```

### 2. Category Listing Pages

**File Location**: `app/[category]/page.tsx`

**Template Structure**:
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
**Purpose**: Consistent page layout with navigation
**Location**: `app/components/layout/PageTemplate.tsx`
```tsx
<PageTemplate 
  title="Page Title"
  subtitle="Optional subtitle"
  category="Category Name"
  showNavigation={true} // optional
>
  {/* Page content */}
</PageTemplate>
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

## 🎨 Styling Guidelines

### 1. Use Centralized Colors
```tsx
// ✅ Good
className="text-text-primary bg-bg-card hover:text-link"

// ❌ Bad
className="text-gray-900 bg-white hover:text-teal-600"
```

### 2. Responsive Design
```tsx
// Always include responsive classes
className="text-sm md:text-base lg:text-lg"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### 3. Dark Mode Support
```tsx
// Include dark mode variants
className="bg-bg-card dark:bg-bg-card text-text-primary dark:text-text-primary"
```

### 4. Hover Effects
```tsx
// Smooth transitions
className="transition-all duration-200 hover:transform hover:scale-105"
```

### 5. Consistent Spacing
```tsx
// Use consistent spacing patterns
className="p-6 mb-8 gap-6" // Multiples of 2/4/6/8
```

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

## 🤖 AI Assistant Guidelines

When working with this codebase:

1. **Always check** the color system before adding colors
2. **Reference existing patterns** before creating new components
3. **Update data files** when adding new content
4. **Test responsive design** and dark mode
5. **Follow TypeScript** strict mode requirements
6. **Maintain consistency** with existing code style

This wiki is a labor of love for the Dandelion Dynasty series. Maintain the high quality and attention to detail that makes it special! ✨
