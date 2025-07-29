import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Welcome to the World of Dara</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore the epic &ldquo;silkpunk&rdquo; saga of gods and rebels. This wiki is your guide to the characters, locations, and rich history of Ken Liu&apos;s masterpiece.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/characters" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-[--color-accent-pink] border-2 border-transparent transition-all">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Characters</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Dive into the lives of the heroes, villains, and gods who shape the destiny of the Islands of Dara.</p>
            </Link>
            <Link href="/books" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-[--color-accent-pink] border-2 border-transparent transition-all">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Books</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Find detailed chapter-by-chapter summaries and analyses of each book in the series.</p>
            </Link>
            <Link href="/places" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-[--color-accent-pink] border-2 border-transparent transition-all">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Places</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Discover the diverse islands, grand cities, and mythical landscapes of Dara and beyond.</p>
            </Link>
        </div>
    </div>
  );
}