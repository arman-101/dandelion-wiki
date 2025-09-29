'use client';

import { useState } from 'react';
import { calculateWikiStats, getStatsByCategory, getDevelopmentMetrics } from '../../utils/statsUtils';

interface Update {
    version: string;
    date: string;
    title: string;
    description: string;
    changes: string[];
}

const updates: Update[] = [
    {
        version: '#3',
        date: 'September 29, 2025',
        title: 'Custom Domain, SEO Optimization & UI Enhancements',
        description: 'Major SEO optimization with custom domain migration, comprehensive UI improvements with centralized design system, and enhanced map visualization for all places.',
        changes: [
            '🌐 **Custom Domain Migration**: Migrated to dandelion-dynasty.com as primary domain with 301 redirects from www.dandelion-dynasty.com and dandelion-wiki.vercel.app',
            '🔍 **Comprehensive SEO Optimization**: Complete SEO overhaul with 25+ site-wide keywords, 8-10 keywords per page, enhanced metadata, structured data (Schema.org), and Google Search Console integration',
            '📊 **Advanced Metadata**: Enhanced descriptions with character/place/concept names, proper OpenGraph and Twitter cards with alt text, canonical URLs pointing to custom domain',
            '🗺️ **Sitemap & Indexing**: Automated sitemap generation for 160+ pages with proper priorities, robots.txt optimization, and automated Google indexing',
            '🎨 **Centralized Design System**: Standardized all UI elements including 4-column grid layouts (xl:grid-cols-4), consistent borders on all cards, uniform hover effects (accent-pink), and standardized heading spacing (mb-8)',
            '🖼️ **Map Image Enhancements**: Added location-specific map images to all place pages highlighting their geographical position, with zoom in/out functionality for better navigation',
            '🎯 **UI Consistency**: Unified card designs across all listing pages, consistent shadow effects (shadow-lg hover:shadow-2xl), and standardized spacing (gap-8, p-6)',
            '🧭 **Navbar Improvements**: Cleaned up navigation bar with better organization and improved user experience',
        ]
    },
    {
        version: '#2',
        date: 'September 17, 2025',
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
        date: 'September 3, 2025',
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
    const [expandedUpdates, setExpandedUpdates] = useState<string[]>([]);
    
    // Get dynamic stats
    const wikiStats = calculateWikiStats();
    const categoryStats = getStatsByCategory();
    const devMetrics = getDevelopmentMetrics();

    const toggleExpanded = (version: string) => {
        setExpandedUpdates(prev => 
            prev.includes(version) 
                ? prev.filter(v => v !== version)
                : [...prev, version]
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-8 border-b pb-4">
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
                                            expandedUpdates.includes(update.version) ? 'rotate-180' : ''
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
                        
                        {expandedUpdates.includes(update.version) && (
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
                <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary mb-4">
                    📈 Development Statistics
                </h3>
                
                {/* Main Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
                    <div className="text-center">
                        <a 
                            href="/other/all-pages" 
                            className="block hover:bg-bg-secondary dark:hover:bg-bg-tertiary rounded-lg p-4 transition-colors group"
                        >
                            <div className="text-2xl font-bold text-primary dark:text-primary-light group-hover:text-link dark:group-hover:text-link-dark transition-colors">
                                {wikiStats.totalPages}
                            </div>
                            <div className="text-text-muted dark:text-text-light">Total Wiki Pages</div>
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary dark:text-primary-light">
                            {updates.length}
                        </div>
                        <div className="text-text-muted dark:text-text-light">Updates Released</div>
                    </div>
                </div>

                {/* Category Breakdown */}
                <div className="mb-4">
                    <h4 className="text-md font-semibold text-text-primary dark:text-text-primary mb-4">
                        Content Breakdown
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryStats.map((category, index) => {
                            // Define the path for each category
                            const getCategoryPath = (label: string) => {
                                switch (label) {
                                    case 'Characters': return '/characters';
                                    case 'Places': return '/places';
                                    case 'Gods': return '/gods';
                                    case 'Concepts': return '/concepts';
                                    case 'Books': return '/books';
                                    case 'Other Pages': return '/other/pages';
                                    default: return '#';
                                }
                            };

                            return (
                                <a 
                                    key={index} 
                                    href={getCategoryPath(category.label)}
                                    className="block bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-border-secondary dark:border-border-primary hover:shadow-md hover:border-primary dark:hover:border-primary-light transition-all group"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-3 h-3 rounded-full ${category.color.replace('text-', 'bg-')}`}></div>
                                            <span className="text-sm font-medium text-text-secondary dark:text-text-light group-hover:text-link dark:group-hover:text-link-dark transition-colors">
                                                {category.label}
                                            </span>
                                        </div>
                                        <span className={`text-lg font-bold ${category.color} group-hover:text-link dark:group-hover:text-link-dark transition-colors`}>
                                            {category.count}
                                        </span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Last Updated */}
                <div className="text-center pt-4 border-t border-border-secondary dark:border-border-primary">
                    <p className="text-xs text-text-muted dark:text-text-light">
                        Last updated: {devMetrics.lastUpdated}
                    </p>
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
