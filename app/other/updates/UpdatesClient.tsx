'use client';

import { useState } from 'react';

interface Update {
    version: string;
    date: string;
    title: string;
    description: string;
    changes: string[];
}

const updates: Update[] = [
    {
        version: '#2',
        date: 'September 17, 2024',
        title: 'UI/UX Improvements & Content Updates',
        description: 'Significant improvements to search functionality, homepage design, and comprehensive content updates across the wiki.',
        changes: [
            '🔍 **Search Bar UI Improvement**: Enhanced search interface with better visual design and user experience',
            '🔤 **Flexible Search**: Users can now search with any letter - no special characters required for better accessibility',
            '🏠 **Homepage Optimization**: Eliminated unnecessary scrolling for a cleaner, more focused landing experience',
            '📝 **Icon Attribution**: Added proper attribution for all icons and visual elements used throughout the site',
            '📚 **The Veiled Throne Updates**: Added missing dates and included Chapter 36 content',
            '🔧 **Speaking Bones Fixes**: Corrected various inaccuracies and improved content accuracy',
            '🔗 **Link Validation**: Fixed all broken links and improved internal navigation',
            '🎯 **SEO & Metadata**: Comprehensive SEO improvements with proper metadata for all pages',
            '🏷️ **Search Titles**: Enhanced search results with proper page titles and descriptions',
            '⚠️ **Spoiler Warnings**: Added appropriate spoiler warnings to protect new readers',
            '📄 **New Pages**: Added "Other Pages" section, comprehensive "Glossary" page, and "Updates" page',
            '🖼️ **AI Image Removal**: Removed AI-generated images from all listing pages and individual pages for cleaner, text-focused design',
            '🛠️ **Technical Improvements**: Bug fixes, performance optimizations, and code improvements'
        ]
    },
    {
        version: '#1',
        date: 'September 3, 2024',
        title: 'Initial Launch',
        description: 'The official launch of The Dandelion Dynasty Wiki - a comprehensive fan-created encyclopedia for Ken Liu\'s epic silkpunk fantasy series.',
        changes: [
            '🚀 **Wiki Launch**: Official launch of the Dandelion Dynasty Wiki',
            '📖 **Core Content**: Initial pages for all 4 books in the series',
            '👥 **Character Database**: Comprehensive character profiles with detailed information',
            '🏛️ **Places & Locations**: Detailed entries for major locations across Dara and beyond',
            '⚡ **Gods & Mythology**: Complete coverage of the pantheon and religious concepts',
            '🧠 **Concepts & Terms**: Extensive glossary of silkpunk technology and cultural terms',
            '🗺️ **Maps Section**: Interactive maps and geographical information',
            '🌙 **Dark/Light Mode**: Seamless theme switching for user preference',
            '📱 **Responsive Design**: Fully optimized for all devices and screen sizes',
            '🔍 **Search Functionality**: Site-wide search across all content',
            '🎨 **Modern UI**: Clean, modern design with centralized color system',
            '⚡ **Performance**: Built with Next.js 15 for optimal speed and SEO'
        ]
    }
];


export default function UpdatesClient() {
    const [expandedUpdate, setExpandedUpdate] = useState<string | null>(updates[0].version);

    const toggleExpanded = (version: string) => {
        setExpandedUpdate(expandedUpdate === version ? null : version);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-4 border-b pb-4">
                    Wiki Updates
                </h1>
                <p className="text-text-secondary dark:text-text-light text-lg leading-relaxed">
                    Track the development history and evolution of The Dandelion Dynasty Wiki. 
                    From the initial launch to ongoing improvements, see how this comprehensive resource 
                    for Ken Liu&apos;s silkpunk fantasy series continues to grow and improve.
                </p>
            </div>

            <div className="space-y-6">
                {updates.map((update) => (
                    <div 
                        key={update.version}
                        className="bg-bg-card dark:bg-bg-card rounded-lg shadow-lg border border-border-primary dark:border-border-secondary overflow-hidden"
                    >
                        <div 
                            className="p-6 cursor-pointer hover:bg-bg-secondary dark:hover:bg-bg-tertiary transition-colors"
                            onClick={() => toggleExpanded(update.version)}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-sm text-text-muted dark:text-text-light font-mono bg-bg-secondary dark:bg-bg-tertiary px-3 py-1 rounded-full">
                                            {update.version}
                                        </span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-text-primary dark:text-text-primary mb-2">
                                        {update.title}
                                    </h2>
                                    <p className="text-text-secondary dark:text-text-light mb-3">
                                        {update.description}
                                    </p>
                                    <p className="text-sm text-text-muted dark:text-text-light">
                                        📅 {update.date}
                                    </p>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                    <svg 
                                        className={`w-6 h-6 text-text-muted dark:text-text-light transition-transform ${
                                            expandedUpdate === update.version ? 'rotate-180' : ''
                                        }`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        {expandedUpdate === update.version && (
                            <div className="px-6 pb-6 border-t border-border-secondary dark:border-border-primary">
                                <div className="pt-4">
                                    <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary mb-4">
                                        What&apos;s New in {update.version}:
                                    </h3>
                                    <ul className="space-y-3">
                                        {update.changes.map((change, changeIndex) => (
                                            <li 
                                                key={changeIndex}
                                                className="flex items-start gap-3 text-text-secondary dark:text-text-light"
                                            >
                                                <span className="flex-shrink-0 w-2 h-2 bg-primary dark:bg-primary-light rounded-full mt-2"></span>
                                                <span className="leading-relaxed" dangerouslySetInnerHTML={{ 
                                                    __html: change.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                                                }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-slate-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary mb-3">
                    📈 Development Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary dark:text-primary-light">
                            {updates.length}
                        </div>
                        <div className="text-text-muted dark:text-text-light">Updates Released</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary dark:text-primary-light">
                            150+
                        </div>
                        <div className="text-text-muted dark:text-text-light">Total Wiki Pages</div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-text-muted dark:text-text-light text-sm">
                    For bugs, inaccuracies, or suggestions, please email: {' '}
                    <a href="mailto:darknebulax1@gmail.com" className="text-link dark:text-link-dark hover:underline">
                        darknebulax1@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
