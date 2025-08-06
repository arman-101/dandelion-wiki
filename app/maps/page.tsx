import Image from 'next/image';
import Link from 'next/link';
import { PLACES_TIRO_STATES, PLACES_BEYOND_DARA } from '../data/wiki-data';

// --- PAGE COMPONENT ---
export default function MapsPage() {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-5 text-gray-900 dark:text-white">World Maps</h1>

            {/* Map Section for Dara */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-500 pb-2 mb-6">The Islands of Dara</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Map Image */}
                    <div className="md:col-span-2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/maps/dara.jpeg"
                            alt="Map of the Islands of Dara"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    {/* Information and Links */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">About this Map</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            This map shows the primary setting for much of the saga: the seven Tiro States and surrounding islands that comprise the continent of Dara.
                        </p>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Locations:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            {PLACES_TIRO_STATES.map(place => (
                                <li key={place.path}>
                                    <Link href={place.path} className="text-teal-600 dark:text-teal-400 hover:underline">
                                        {place.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Map Section for Ukyu & Gondé */}
            <div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-500 pb-2 mb-6">The Lands Beyond the Wall of Storms</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Map Image */}
                    <div className="md:col-span-2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/maps/ukyu-gonde.jpg"
                            alt="Map of Ukyu and Gondé"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    {/* Information and Links */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400">About this Map</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            This map depicts the continent across the Wall of Storms, including the Lyucu homeland of Ukyu and the vast desert of Gondé.
                        </p>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Locations:</h4>
                        <ul className="list-disc list-inside space-y-1">
                             {PLACES_BEYOND_DARA.map(place => (
                                <li key={place.path}>
                                    <Link href={place.path} className="text-teal-600 dark:text-teal-400 hover:underline">
                                        {place.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}