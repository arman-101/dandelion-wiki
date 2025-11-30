'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ALL_WIKI_PAGES, WikiPage, OTHER_PAGES } from '../../data/wiki-data';
import { getSurroundingPages } from '@/app/utils/navigationUtils';
import { TopNavigation } from '@/app/components/layout/PageNavigation';
import BackToHomeButton from '@/app/components/ui/BackToHomeButton';

// Helper function to group pages by type
const groupPagesByType = (pages: readonly WikiPage[]) => {
    return pages.reduce((acc, page) => {
        const type = page.type || 'Other';
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(page);
        // Sort each group alphabetically by title
        acc[type].sort((a, b) => a.title.localeCompare(b.title));
        return acc;
    }, {} as Record<string, WikiPage[]>);
};

export default function AllPagesClient() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...OTHER_PAGES]);
    const returnLink = { title: 'Return to Other Pages', path: '/other/pages' };

    const groupedPages = groupPagesByType(ALL_WIKI_PAGES);
    const pageTypes = Object.keys(groupedPages).sort(); // Sort the categories themselves

    return (
        <>
            <TopNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b pb-4">
                    <h1 className="text-4xl font-bold text-text-primary dark:text-text-primary">
                        Complete Site Index
                    </h1>
                    <BackToHomeButton />
                </div>

                <div className="space-y-12">
                    {pageTypes.map(type => (
                        <div key={type}>
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-primary-light pb-2 mb-6">{type}s</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-3">
                                {groupedPages[type].map(page => (
                                    <li key={page.path}>
                                        <Link href={page.path} className="text-link dark:text-link-dark hover:underline hover:text-[--color-accent-pink)] transition-colors">
                                            {page.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
