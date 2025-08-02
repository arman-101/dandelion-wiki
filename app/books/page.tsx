import Image from 'next/image';
import Link from 'next/link';

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">The Dandelion Dynasty Series</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {books.map((book) => (
                    <Link href={book.link} key={book.title} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-80">
                             <Image 
                                src={book.coverImage}
                                alt={`${book.title} cover`}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{book.series}</p>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-teal-500 transition-colors">{book.title}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{book.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}