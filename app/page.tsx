'use client';

import Link from 'next/link';
import { ALL_WIKI_PAGES } from './data/wiki-data';

export default function Home() {
  const pageCount = ALL_WIKI_PAGES.length;
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-primary mb-6">
          The Dandelion Dynasty Wiki
        </h1>
        <p className="text-xl text-text-muted dark:text-text-muted mb-8">
           An encyclopedia for the epic silkpunk saga by <Link href="/other/about-author" className="text-link dark:text-link-dark hover:underline">Ken Liu</Link>
        </p>

        {/* Page Count */}
        <div className="mb-8">
          <Link href="/other/all-pages" className="inline-block">
            <p className="text-sm text-text-light dark:text-text-light border border-border-primary dark:border-border-primary rounded-full px-4 py-1 hover:border-primary-light hover:text-link dark:hover:text-link-dark dark:hover:border-primary-light transition-colors">
              Currently tracking <span className="font-bold text-link dark:text-link-dark">{pageCount}</span> pages
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link href="/books" className="group bg-bg-card dark:bg-bg-card border border-border-secondary dark:border-border-primary rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-light dark:hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary mb-2">Explore Books</h3>
              <p className="text-sm text-text-muted dark:text-text-light">Dive into the epic saga</p>
            </div>
          </Link>
          
          <Link href="/characters" className="group bg-bg-card dark:bg-bg-card border border-border-secondary dark:border-border-primary rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-light dark:hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary mb-2">Meet Characters</h3>
              <p className="text-sm text-text-muted dark:text-text-light">Heroes and legends</p>
            </div>
          </Link>
          
          <Link href="/concepts" className="group bg-bg-card dark:bg-bg-card border border-border-secondary dark:border-border-primary rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-light dark:hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary mb-2">Learn Concepts</h3>
              <p className="text-sm text-text-muted dark:text-text-light">Silkpunk & technology</p>
            </div>
          </Link>
          
          <Link href="/gods" className="group bg-bg-card dark:bg-bg-card border border-border-secondary dark:border-border-primary rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-light dark:hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary mb-2">Discover Gods</h3>
              <p className="text-sm text-text-muted dark:text-text-light">Divine beings</p>
            </div>
          </Link>

          <Link href="/places" className="group bg-bg-card dark:bg-bg-card border border-border-secondary dark:border-border-primary rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-light dark:hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary mb-2">Explore Places</h3>
              <p className="text-sm text-text-muted dark:text-text-light">World of Dara</p>
            </div>
          </Link>

          <Link href="/maps" className="group bg-bg-card dark:bg-bg-card border border-border-secondary dark:border-border-primary rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary-light dark:hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary dark:text-text-primary mb-2">View Maps</h3>
              <p className="text-sm text-text-muted dark:text-text-light">Visualize geography</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}