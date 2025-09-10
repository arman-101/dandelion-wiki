'use client';

import Link from 'next/link';
import { OTHER_PAGES } from '../../data/wiki-data';

export default function OtherPagesClient() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-4 border-b pb-4">
                    Other Pages
                </h1>
                <p className="text-text-secondary dark:text-text-light text-lg leading-relaxed">
                    Additional resources and information about the Dandelion Dynasty Wiki, including about pages, 
                    contributing guidelines, and other helpful resources for readers and contributors.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {OTHER_PAGES.map(page => (
                    <Link 
                        href={page.path} 
                        key={page.title}
                        className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-border-primary dark:border-border-secondary"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-text-primary dark:text-text-primary mt-1 group-hover:text-link dark:group-hover:text-accent-pink transition-colors">
                                {page.title}
                            </h2>
                            <p className="text-sm text-text-muted dark:text-text-light mt-2">
                                {getPageDescription(page.title)}
                            </p>
                        </div>
                    </Link>
                ))}
                
                {/* Buy Me a Coffee Link */}
                <a 
                    href="https://buymeacoffee.com/darknebulax1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-border-primary dark:border-border-secondary"
                >
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-text-primary dark:text-text-primary mt-1 group-hover:text-link dark:group-hover:text-accent-pink transition-colors">
                            ☕ Buy Me a Coffee
                        </h2>
                        <p className="text-sm text-text-muted dark:text-text-light mt-2">
                            Support the development and maintenance of this wiki with a small donation.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}

function getPageDescription(title: string): string {
    const descriptions: Record<string, string> = {
        'About This Wiki': 'Learn about the purpose, features, and history of the Dandelion Dynasty Wiki.',
        'About the Author': 'Discover information about Ken Liu, the author of the Dandelion Dynasty series.',
        'Contributing': 'Guidelines and information for contributing to the wiki.',
        'All Pages': 'A comprehensive list of all pages in the wiki.',
        'Glossary': 'A comprehensive glossary of terms, concepts, and vocabulary from the series.'
    };
    
    return descriptions[title] || 'Additional information and resources for the Dandelion Dynasty Wiki.';
}
