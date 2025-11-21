import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_CHARACTERS_DATA } from '../data/wiki-data'; // Import the master list
import { generatePageMetadata } from '@/app/utils/metadata';
import BackToHomeButton from '@/app/components/ui/BackToHomeButton';

export const metadata: Metadata = generatePageMetadata(
    'Characters',
    'Meet all the characters from The Dandelion Dynasty series - heroes, villains, gods, and legends from the world of Dara created by Ken Liu.'
);

export default function CharactersPage() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary">Characters</h1>
                <BackToHomeButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* Use the imported list to render the character cards */}
                {ALL_CHARACTERS_DATA.map((char) => (
                    <Link href={char.link} key={char.name} className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-border-primary dark:border-border-secondary">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-text-primary dark:text-text-primary group-hover:text-accent-pink transition-colors">{char.name}</h2>
                            <p className="text-sm text-text-muted dark:text-text-muted mt-2">{char.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}