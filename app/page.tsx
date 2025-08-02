import Link from 'next/link';
import Image from 'next/image';
import { ALL_WIKI_PAGES } from './data/wiki-data';

export default function Home() {
  const pageCount = ALL_WIKI_PAGES.length;
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          The Dandelion Dynasty Wiki
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          An encyclopedia for the epic silkpunk saga by Ken Liu
        </p>

        {/* Page Count */}
        <div className="mb-8">
          <Link href="/other/all-pages" className="inline-block">
            <p className="text-sm text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-1 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              Currently tracking <span className="font-bold text-teal-600 dark:text-teal-400">{pageCount}</span> pages
            </p>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/books" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Explore Books
          </Link>
          <Link href="/characters" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Meet Characters
          </Link>
          <Link href="/concepts" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Learn Concepts
          </Link>
          <Link href="/gods" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Discover Gods
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Books</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Dive into the four books of the Dandelion Dynasty series.</p>
          <Link href="/books" className="text-teal-600 dark:text-teal-400 hover:underline">Browse Books →</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Characters</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Meet the heroes, villains, and everyone in between.</p>
          <Link href="/characters" className="text-teal-600 dark:text-teal-400 hover:underline">Meet Characters →</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Places</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Explore the world of Dara and beyond.</p>
          <Link href="/places" className="text-teal-600 dark:text-teal-400 hover:underline">Explore Places →</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gods</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Learn about the divine beings that shape this world.</p>
          <Link href="/gods" className="text-teal-600 dark:text-teal-400 hover:underline">Discover Gods →</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Concepts</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Understand the unique concepts and technologies.</p>
          <Link href="/concepts" className="text-teal-600 dark:text-teal-400 hover:underline">Learn Concepts →</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Maps</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Visualize the geography of the Dandelion Dynasty world.</p>
          <Link href="/maps" className="text-teal-600 dark:text-teal-400 hover:underline">View Maps →</Link>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image src="/ken.jpg" alt="Ken Liu" width={200} height={200} className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Author</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ken Liu is an award-winning author known for his innovative approach to speculative fiction. 
              The Dandelion Dynasty series represents his most ambitious work to date, blending elements 
              of epic fantasy with silkpunk aesthetics and deep philosophical themes.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              This wiki serves as a comprehensive guide to the rich world he has created, helping readers 
              navigate the complex political intrigue, technological marvels, and unforgettable characters 
              that populate the Dandelion Dynasty universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}