import Link from 'next/link';

interface BookLink {
    title: string;
    link: string;
}

interface BookNavigationProps {
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

export default function BookNavigation({ prevBook, nextBook }: BookNavigationProps) {
    return (
        <div className="mt-16 flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-8">
            <div>
                {prevBook && (
                    <Link href={prevBook.link} className="inline-flex items-center px-4 py-2 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:text-teal-500 transition-colors">
                        <ArrowLeft />
                        <div className="hidden md:block ml-2">
                            <p className="text-xs">Previous Book</p>
                            <p className="font-bold">{prevBook.title}</p>
                        </div>
                    </Link>
                )}
            </div>
            <div>
                {nextBook && (
                    <Link href={nextBook.link} className="inline-flex items-center px-4 py-2 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:text-teal-500 transition-colors">
                        <div className="hidden md:block mr-2">
                            <p className="text-xs text-right">Next Book</p>
                            <p className="font-bold">{nextBook.title}</p>
                        </div>
                        <ArrowRight />
                    </Link>
                )}
            </div>
        </div>
    );
}