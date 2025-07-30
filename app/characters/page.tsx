import Image from 'next/image';
import Link from 'next/link';

// We'll build this list out as we create more character pages
const characters = [
    {
        name: "Kuni Garu",
        description: "A charismatic bandit who rises to become the founder of the Dandelion Dynasty.",
        image: "/characters/kuni-garu.png",
        link: "/characters/kuni-garu"
    },
    // Add other characters here later, e.g., Mata Zyndu, Jia Matiza, etc.
];

export default function CharactersPage() {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">Characters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {characters.map((char) => (
                    <Link href={char.link} key={char.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image 
                                src={char.image}
                                alt={`Portrait of ${char.name}`}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top" // Focus on the top of the image
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