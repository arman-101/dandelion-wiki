import Image from 'next/image';
import Link from 'next/link';
import { ALL_PLACES_DATA, PLACES_TIRO_STATES } from '../data/wiki-data';

// Filter the master list to get only the locations for the Ukyu & Gondé map.
const ukyuGondeLocations = ALL_PLACES_DATA.filter(
    place => place.category === 'beyond' && place.name !== 'Eseeran Nomnny'
).map(place => ({ title: place.name, path: place.link }));

// --- PAGE COMPONENT ---
export default function MapsPage() {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-text-primary dark:text-text-primary">World Maps</h1>

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
                            priority
                        />
                    </div>
                    {/* Information and Links */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-inner">
                        <h3 className="text-xl font-bold mb-3 text-link dark:text-link-dark">About this Map</h3>
                        <p className="text-text-secondary dark:text-text-secondary mb-4">
                            This map shows the primary setting for much of the saga: the seven Tiro States and surrounding islands that comprise the continent of Dara.
                        </p>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">The Seven States:</h4>
                        <ul className="list-disc list-inside space-y-1">
                            {PLACES_TIRO_STATES.map(place => (
                                <li key={place.path}>
                                    <Link href={place.path} className="text-link dark:text-link-dark hover:underline">
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
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-500 pb-2 mb-6">Ukyu &amp; Gondé</h2>
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
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-inner">
                        <h3 className="text-xl font-bold mb-3 text-link dark:text-link-dark">About this Map</h3>
                        <p className="text-text-secondary dark:text-text-secondary mb-4">
                            This map depicts the continent across the Wall of Storms, including the Lyucu homeland of Ukyu and the vast desert of Gondé, home to the Agon.
                        </p>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Locations:</h4>
                        <ul className="list-disc list-inside space-y-1">
                             {ukyuGondeLocations.map(place => (
                                <li key={place.path}>
                                    <Link href={place.path} className="text-link dark:text-link-dark hover:underline">
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