import type { Metadata } from 'next';
import { ALL_PLACES_DATA } from '../data/wiki-data';
import { generatePageMetadata } from '@/app/utils/metadata';
import MapsClient from './MapsClient';

export const metadata: Metadata = generatePageMetadata(
    'Maps',
    'Explore detailed maps of the world of Dara from The Dandelion Dynasty series. View the Tiro States, Ukyu & Gondé territories, and other geographical locations.'
);

// Filter the master list to get only the locations for the Ukyu & Gondé map.
const ukyuGondeLocations = ALL_PLACES_DATA.filter(
    place => place.category === 'beyond' && place.name !== 'Eseeran Nomnny'
).map(place => ({ title: place.name, path: place.link }));

// --- PAGE COMPONENT ---
export default function MapsPage() {
    return <MapsClient ukyuGondeLocations={ukyuGondeLocations} />;
}