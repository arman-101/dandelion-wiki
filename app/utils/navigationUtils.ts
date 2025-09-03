import { WikiPage } from '../data/wiki-data';
import { NavigationLink } from './typeUtils';

/**
 * Navigation and page relationship utilities
 */

/**
 * Finds the pages immediately before and after a given page in a list.
 * @param currentPath - The path of the current page (e.g., '/characters/kuni-garu').
 * @param pageList - The ordered array of all pages in that category.
 * @returns An object containing the previous and next page, or null if they don't exist.
 */
export const getSurroundingPages = (currentPath: string, pageList: readonly WikiPage[]) => {
  const currentIndex = pageList.findIndex(page => page.path === currentPath);

  // If the page isn't found, return null for both
  if (currentIndex === -1) {
    return { prevPage: null, nextPage: null };
  }

  // Find the previous page, ensuring we don't go below index 0
  const prevPage = currentIndex > 0 ? pageList[currentIndex - 1] : null;

  // Find the next page, ensuring we don't go past the end of the array
  const nextPage = currentIndex < pageList.length - 1 ? pageList[currentIndex + 1] : null;

  return { prevPage, nextPage };
};

/**
 * Creates navigation links for a sequence of pages (like books in a series)
 * @param pages - Array of pages in sequence
 * @param currentPath - Current page path
 * @returns Navigation links for prev/next in sequence
 */
export const getSequenceNavigation = (
  pages: readonly WikiPage[], 
  currentPath: string
): { prevItem: NavigationLink | null; nextItem: NavigationLink | null } => {
  const currentIndex = pages.findIndex(page => page.path === currentPath);
  
  if (currentIndex === -1) {
    return { prevItem: null, nextItem: null };
  }
  
  const prevItem = currentIndex > 0 ? {
    title: pages[currentIndex - 1].title,
    path: pages[currentIndex - 1].path
  } : null;
  
  const nextItem = currentIndex < pages.length - 1 ? {
    title: pages[currentIndex + 1].title,
    path: pages[currentIndex + 1].path
  } : null;
  
  return { prevItem, nextItem };
};

/**
 * Generates breadcrumb navigation from a path
 * @param path - Current page path (e.g., '/characters/kuni-garu')
 * @param pageTitle - Title of the current page
 * @returns Array of breadcrumb links
 */
export const generateBreadcrumbs = (path: string, pageTitle?: string): NavigationLink[] => {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: NavigationLink[] = [
    { title: 'Home', path: '/' }
  ];
  
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Don't add the last segment if we have a page title (it's the current page)
    if (index === segments.length - 1 && pageTitle) {
      return;
    }
    
    const title = segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({ title, path: currentPath });
  });
  
  return breadcrumbs;
};

/**
 * Groups pages by their type or category
 * @param pages - Array of wiki pages
 * @returns Object with pages grouped by type
 */
export const groupPagesByType = (pages: readonly WikiPage[]) => {
  return pages.reduce((groups, page) => {
    const type = page.type.toLowerCase();
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(page);
    return groups;
  }, {} as Record<string, WikiPage[]>);
};

/**
 * Finds related pages based on common terms in titles
 * @param currentPage - The current page
 * @param allPages - All available pages
 * @param maxResults - Maximum number of related pages to return
 * @returns Array of related pages
 */
export const findRelatedPages = (
  currentPage: WikiPage, 
  allPages: readonly WikiPage[], 
  maxResults: number = 5
): WikiPage[] => {
  const currentWords = currentPage.title.toLowerCase().split(/\s+/);
  
  const scored = allPages
    .filter(page => page.path !== currentPage.path) // Exclude current page
    .map(page => {
      const pageWords = page.title.toLowerCase().split(/\s+/);
      const commonWords = currentWords.filter(word => 
        word.length > 2 && pageWords.includes(word)
      );
      
      return {
        page,
        score: commonWords.length
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);
    
  return scored.map(item => item.page);
};