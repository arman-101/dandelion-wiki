import Link from 'next/link';
import { ALL_WIKI_PAGES, WikiPage } from '../../data/wiki-data';

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


export default function AllPages() {
    const groupedPages = groupPagesByType(ALL_WIKI_PAGES);
    const pageTypes = Object.keys(groupedPages).sort(); // Sort the categories themselves

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12 text-text-primary dark:text-text-primary">Complete Site Index</h1>

            <div className="space-y-12">
                {pageTypes.map(type => (
                    <div key={type}>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-500 pb-2 mb-6">{type}s</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
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
    );
}