import Image from 'next/image';
import Link from 'next/link';
// Import the new master list from your central data file
import { ALL_CONCEPTS_DATA } from '../data/wiki-data';

export default function ConceptsPage() {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">Concepts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* Use the imported ALL_CONCEPTS_DATA list to render the cards */}
                {ALL_CONCEPTS_DATA.map((concept) => (
                    <Link href={concept.link} key={concept.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image 
                                src={concept.image}
                                alt={`Image representing ${concept.name}`}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-[color:var(--color-accent-pink)] transition-colors">{concept.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{concept.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}