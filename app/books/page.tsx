import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/app/utils/metadata';
import BackToHomeButton from '@/app/components/ui/BackToHomeButton';

export const metadata: Metadata = generatePageMetadata(
    'Books',
    'Explore all four books in The Dandelion Dynasty series by Ken Liu - The Grace of Kings, The Wall of Storms, The Veiled Throne, and Speaking Bones.'
);

const books = [
    {
        title: "The Grace of Kings",
        series: "The Dandelion Dynasty #1",
        description: "Two men rebel together against tyranny—and then become the deadliest of enemies.",
        coverImage: "/books/the-grace-of-kings.jpg",
        link: "/books/the-grace-of-kings"
    },
    {
        title: "The Wall of Storms",
        series: "The Dandelion Dynasty #2",
        description: "Emperor Ragin's peaceful reign is threatened by a new invasion from across the sea.",
        coverImage: "/books/the-wall-of-storms.jpg",
        link: "/books/the-wall-of-storms"
    },
    {
        title: "The Veiled Throne",
        series: "The Dandelion Dynasty #3",
        description: "The vanquished people of Dara plot rebellion under the yoke of the mighty Lyucu Empire.",
        coverImage: "/books/the-veiled-throne.jpg",
        link: "/books/the-veiled-throne"
    },
    {
        title: "Speaking Bones",
        series: "The Dandelion Dynasty #4",
        description: "A new generation of heroes rises to fight the final war for the future of Dara.",
        coverImage: "/books/speaking-bones.jpg",
        link: "/books/speaking-bones"
    }
];

export default function BooksPage() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary">The Dandelion Dynasty Series</h1>
                <BackToHomeButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {books.map((book) => (
                    <Link href={book.link} key={book.title} className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-border-primary dark:border-border-secondary">
                        <div className="relative w-full h-80">
                             <Image 
                                src={book.coverImage}
                                alt={`${book.title} cover`}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-text-light dark:text-text-light">{book.series}</p>
                            <h2 className="text-xl font-bold text-text-primary dark:text-text-primary mt-1 group-hover:text-accent-pink transition-colors">{book.title}</h2>
                            <p className="text-sm text-text-muted dark:text-text-muted mt-2">{book.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}