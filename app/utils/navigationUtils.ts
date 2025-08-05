import { WikiPage } from '../data/wiki-data';

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