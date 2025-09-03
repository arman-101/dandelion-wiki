import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '../ui/Icons';

// Generic interfaces for navigation
interface NavigationLink {
    title: string;
    path: string;
}

interface PageNavigationProps {
    // Top navigation
    prevPage?: NavigationLink | null;
    nextPage?: NavigationLink | null;
    returnLink: NavigationLink;
    
    // Bottom navigation (for books, series, etc.)
    prevItem?: NavigationLink | null;
    nextItem?: NavigationLink | null;
    showBottomNav?: boolean;
    bottomNavType?: 'book' | 'series' | 'volume';
}

/**
 * Top navigation component for page-to-page navigation
 */
export function TopNavigation({ 
    prevPage, 
    nextPage, 
    returnLink
}: Pick<PageNavigationProps, 'prevPage' | 'nextPage' | 'returnLink'>) {
    return (
        <div className="grid grid-cols-3 items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            {/* Previous Page Link */}
            <div className="text-left">
                {prevPage ? (
                    <Link href={prevPage.path} className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                        <ArrowLeftIcon />
                        <span className="hidden md:inline text-sm font-semibold">{prevPage.title}</span>
                    </Link>
                ) : <div />}
            </div>

            {/* Return to Overview Link */}
            <div className="text-center">
                <Link href={returnLink.path} className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:underline hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                    {returnLink.title}
                </Link>
            </div>

            {/* Next Page Link */}
            <div className="text-right">
                {nextPage ? (
                    <Link href={nextPage.path} className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                        <span className="hidden md:inline text-sm font-semibold">{nextPage.title}</span>
                        <ArrowRightIcon />
                    </Link>
                ) : <div />}
            </div>
        </div>
    );
}

/**
 * Bottom navigation component for series/sequence navigation
 */
export function BottomNavigation({ 
    prevItem, 
    nextItem, 
    bottomNavType = 'book' 
}: Pick<PageNavigationProps, 'prevItem' | 'nextItem' | 'bottomNavType'>) {
    const getBottomNavLabels = () => {
        switch (bottomNavType) {
            case 'book':
                return { prev: 'Previous Book', next: 'Next Book' };
            case 'series':
                return { prev: 'Previous Series', next: 'Next Series' };
            case 'volume':
                return { prev: 'Previous Volume', next: 'Next Volume' };
            default:
                return { prev: 'Previous', next: 'Next' };
        }
    };

    const bottomLabels = getBottomNavLabels();

    return (
        <div className="mt-16 flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-8">
            <div>
                {prevItem && (
                    <Link href={prevItem.path} className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:text-teal-500 dark:hover:text-teal-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <ArrowLeftIcon />
                        <div className="hidden md:block ml-2">
                            <p className="text-xs">{bottomLabels.prev}</p>
                            <p className="font-bold">{prevItem.title}</p>
                        </div>
                    </Link>
                )}
            </div>
            <div>
                {nextItem && (
                    <Link href={nextItem.path} className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:text-teal-500 dark:hover:text-teal-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <div className="hidden md:block mr-2">
                            <p className="text-xs text-right">{bottomLabels.next}</p>
                            <p className="font-bold">{nextItem.title}</p>
                        </div>
                        <ArrowRightIcon />
                    </Link>
                )}
            </div>
        </div>
    );
}

/**
 * Unified navigation component that handles both top and bottom navigation
 * Replaces both TopPageNavigation and BookNavigation
 */
export default function PageNavigation({ 
    prevPage, 
    nextPage, 
    returnLink,
    prevItem,
    nextItem,
    showBottomNav = false,
    bottomNavType = 'book'
}: PageNavigationProps) {
    return (
        <>
            <TopNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            {showBottomNav && (
                <BottomNavigation prevItem={prevItem} nextItem={nextItem} bottomNavType={bottomNavType} />
            )}
        </>
    );
}

// Convenience components for specific use cases
export function CharacterNavigation(props: Pick<PageNavigationProps, 'prevPage' | 'nextPage' | 'returnLink'>) {
    return <TopNavigation {...props} />;
}

export function ConceptNavigation(props: Pick<PageNavigationProps, 'prevPage' | 'nextPage' | 'returnLink'>) {
    return <TopNavigation {...props} />;
}

export function GodNavigation(props: Pick<PageNavigationProps, 'prevPage' | 'nextPage' | 'returnLink'>) {
    return <TopNavigation {...props} />;
}

export function PlaceNavigation(props: Pick<PageNavigationProps, 'prevPage' | 'nextPage' | 'returnLink'>) {
    return <TopNavigation {...props} />;
}
