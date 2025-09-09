import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ALL_PLACES_DATA } from '../data/wiki-data'; // Import the new master data list
import { generatePageMetadata } from '@/app/utils/metadata';

export const metadata: Metadata = generatePageMetadata(
    'Places',
    'Discover all the locations from The Dandelion Dynasty series - from the Tiro States of Dara to distant lands like Ukyu & Gondé. Explore cities, islands, mountains, and more.'
);

// --- TYPE DEFINITION FOR A PLACE ---
interface Place {
    name: string;
    description: string;
    image: string;
    link: string;
    category: string; // Ensure the interface includes the category
}

// --- DYNAMICALLY CREATE LISTS BY FILTERING THE MASTER DATA ---
const placesCoreStates: Place[] = ALL_PLACES_DATA.filter(p => p.category === 'state');
const placesCities: Place[] = ALL_PLACES_DATA.filter(p => p.category === 'city');
const placesIslands: Place[] = ALL_PLACES_DATA.filter(p => p.category === 'island');
const placesLandmarks: Place[] = ALL_PLACES_DATA.filter(p => p.category === 'landmark');
const placesBeyondDara: Place[] = ALL_PLACES_DATA.filter(p => p.category === 'beyond');
const placesEtc: Place[] = ALL_PLACES_DATA.filter(p => p.category === 'etc');


// Helper component for rendering each section
const PlaceSection: FC<{ title: string; places: Place[]; isFirst?: boolean }> = ({ title, places, isFirst = false }) => (
    <section>
        <h3 className={`text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary border-b pb-4 ${isFirst ? 'mt-0 mb-8' : 'my-8'}`}>{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {places.map((place: Place) => (
                <Link href={place.link} key={place.name} className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                    <div className="relative w-full h-64">
                         <Image src={place.image} alt={`Image of ${place.name}`} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-text-primary dark:text-text-primary mt-1 group-hover:[color:var(--color-accent-pink)] transition-colors">{place.name}</h3>
                        <p className="text-sm text-text-muted dark:text-text-muted mt-2">{place.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    </section>
);

export default function PlacesPage() {
    return (
        <div>
            <PlaceSection title="The Seven States of Dara" places={placesCoreStates} isFirst={true} />
            <PlaceSection title="Major Cities & Regions" places={placesCities} />
            <PlaceSection title="Outer Islands & Archipelagos" places={placesIslands} />
            <PlaceSection title="Geographical Landmarks" places={placesLandmarks} />
            <PlaceSection title="Ukyu & Gonde" places={placesBeyondDara} />
            <PlaceSection title="Etc" places={placesEtc} />
        </div>
    );
}