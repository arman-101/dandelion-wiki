import { Metadata } from 'next';
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_CHARACTERS_DATA } from '../data/wiki-data'; // Import the master list

export default function CharactersPage() {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">Characters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* Use the imported list to render the character cards */}
                {ALL_CHARACTERS_DATA.map((char) => (
                    <Link href={char.link} key={char.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image 
                                src={char.image}
                                alt={`Portrait of ${char.name}`}
                                fill
                                style={{ objectFit: "cover", objectPosition: "top" }}
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-[color:var(--color-accent-pink)] transition-colors">{char.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{char.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}