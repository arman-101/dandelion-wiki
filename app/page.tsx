import Link from 'next/link';
import { ALL_WIKI_PAGES } from './data/wiki-data';

// Define the types for the Icon component's props to fix the 'implicit any' errors.
// Added 'maps' to the IconProps type
type IconProps = {
  name: 'book' | 'users' | 'places' | 'gods' | 'concepts' | 'maps';
  className: string;
};

// A simple placeholder for the icons. Replace these with actual SVG icon components.
// Added the SVG path for the new 'maps' icon
const Icon = ({ name, className }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {name === 'book' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />}
        {name === 'users' && <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.003c0 1.113.285 2.16.786 3.07m-6.136-7.829a4.125 4.125 0 10-7.533 2.493m-3.75 2.25A4.125 4.125 0 0112 15.125" />}
        {name === 'places' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.5-12.75h-7A2.25 2.25 0 003.75 6v12a2.25 2.25 0 002.25 2.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75h-7A2.25 2.25 0 009 6.75z" />}
        {name === 'gods' && <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.622L16.5 21.75l-.398-1.128a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.128-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.128a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.128.398a2.25 2.25 0 00-1.423 1.423z" />}
        {name === 'concepts' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.184m-1.5.184a6.01 6.01 0 01-1.5-.184m3.75 7.375a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />}
        {name === 'maps' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
    </svg>
);


export default function HomePage() {
  const pageCount = ALL_WIKI_PAGES.length;

  const cardClasses = "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-[color:var(--color-accent-pink)] border-2 border-transparent hover:scale-105 transform transition-all duration-300 ease-in-out";
  const iconClasses = "h-8 w-8 mx-auto mb-3 text-teal-500 dark:text-teal-400";
  const titleClasses = "text-xl font-bold text-teal-600 dark:text-teal-400";
  const descriptionClasses = "mt-2 text-gray-600 dark:text-gray-400";

  return (
    <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Welcome to the World of Dara
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore the epic &ldquo;silkpunk&rdquo; saga of gods and rebels. This wiki is your guide to the characters, locations, and rich history of Ken Liu&apos;s masterpiece.
        </p>
        
        <div className="mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-full inline-block px-4 py-1">
                Currently tracking <span className="font-bold text-teal-600 dark:text-teal-400">{pageCount}</span> pages
            </p>
        </div>

        {/* Updated layout to two rows of three */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/books" className={cardClasses}>
                <Icon name="book" className={iconClasses} />
                <h3 className={titleClasses}>Books</h3>
                <p className={descriptionClasses}>Find detailed summaries of each book in the series.</p>
            </Link>
            <Link href="/characters" className={cardClasses}>
                <Icon name="users" className={iconClasses} />
                <h3 className={titleClasses}>Characters</h3>
                <p className={descriptionClasses}>Dive into the lives of the heroes and villains who shape destiny.</p>
            </Link>
            <Link href="/places" className={cardClasses}>
                <Icon name="places" className={iconClasses} />
                <h3 className={titleClasses}>Places</h3>
                <p className={descriptionClasses}>Discover the diverse islands and mythical landscapes of Dara.</p>
            </Link>
            <Link href="/gods" className={cardClasses}>
                <Icon name="gods" className={iconClasses} />
                <h3 className={titleClasses}>Gods</h3>
                <p className={descriptionClasses}>Learn about the powerful deities who watch over the mortal realm.</p>
            </Link>
            <Link href="/concepts" className={cardClasses}>
                <Icon name="concepts" className={iconClasses} />
                <h3 className={titleClasses}>Concepts</h3>
                <p className={descriptionClasses}>Explore the key ideas and philosophies that define the world.</p>
            </Link>
            <Link href="/maps" className={cardClasses}>
                <Icon name="maps" className={iconClasses} />
                <h3 className={titleClasses}>Maps</h3>
                <p className={descriptionClasses}>Visualize the world with maps of Dara and beyond.</p>
            </Link>
        </div>
    </div>
  );
}