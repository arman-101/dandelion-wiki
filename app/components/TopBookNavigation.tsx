import Link from 'next/link';

interface BookLink {
    title: string;
    link: string;
}

interface TopBookNavigationProps {
    prevBook?: BookLink | null;
    nextBook?: BookLink | null;
}

const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);

const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

export default function TopBookNavigation({ prevBook, nextBook }: TopBookNavigationProps) {
    return (
        <div className="grid grid-cols-3 items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <div className="text-left">
                {prevBook ? (
                    <Link href={prevBook.link} className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors">
                        <ArrowLeft />
                        <span className="hidden md:inline text-sm font-semibold">{prevBook.title}</span>
                    </Link>
                ) : <div />}
            </div>
            <div className="text-center">
                <Link href="/books" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:underline">
                    Return to Series Overview
                </Link>
            </div>
            <div className="text-right">
                {nextBook ? (
                    <Link href={nextBook.link} className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors">
                        <span className="hidden md:inline text-sm font-semibold">{nextBook.title}</span>
                        <ArrowRight />
                    </Link>
                ) : <div />}
            </div>
        </div>
    );
}