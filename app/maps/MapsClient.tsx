'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PLACES_TIRO_STATES } from '../data/wiki-data';
import BackToHomeButton from '@/app/components/ui/BackToHomeButton';
import ImageModal from '@/app/components/ui/ImageModal';

interface MapsClientProps {
    ukyuGondeLocations: Array<{ title: string; path: string }>;
}

export default function MapsClient({ ukyuGondeLocations }: MapsClientProps) {
    const [isDaraModalOpen, setIsDaraModalOpen] = useState(false);
    const [isUkyuGondeModalOpen, setIsUkyuGondeModalOpen] = useState(false);

    const handleDaraImageClick = () => {
        setIsDaraModalOpen(true);
    };

    const handleUkyuGondeImageClick = () => {
        setIsUkyuGondeModalOpen(true);
    };

    return (
        <>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b pb-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary">World Maps</h1>
                    <BackToHomeButton />
                </div>

                {/* Map Section for Dara */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-primary-light pb-2 mb-6">The Islands of Dara</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Map Image - Clickable */}
                        <div 
                            className="md:col-span-2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
                            onClick={handleDaraImageClick}
                            title="Click to view larger image"
                        >
                            <Image
                                src="/maps/dara.jpeg"
                                alt="Map of the Islands of Dara"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                            {/* Overlay with expand icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-20">
                                <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                                    <svg 
                                        className="w-8 h-8 text-gray-900 dark:text-white" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                                        />
                                    </svg>
                                </div>
                            </div>
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
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-primary-light pb-2 mb-6">Ukyu &amp; Gondé</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Map Image - Clickable */}
                        <div 
                            className="md:col-span-2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
                            onClick={handleUkyuGondeImageClick}
                            title="Click to view larger image"
                        >
                            <Image
                                src="/maps/ukyu-gonde.jpg"
                                alt="Map of Ukyu and Gondé"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                            {/* Overlay with expand icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-20">
                                <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                                    <svg 
                                        className="w-8 h-8 text-gray-900 dark:text-white" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                                        />
                                    </svg>
                                </div>
                            </div>
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

            {/* Image Modals */}
            <ImageModal
                isOpen={isDaraModalOpen}
                onClose={() => setIsDaraModalOpen(false)}
                imageSrc="/maps/dara.jpeg"
                imageAlt="Map of the Islands of Dara"
            />
            <ImageModal
                isOpen={isUkyuGondeModalOpen}
                onClose={() => setIsUkyuGondeModalOpen(false)}
                imageSrc="/maps/ukyu-gonde.jpg"
                imageAlt="Map of Ukyu and Gondé"
            />
        </>
    );
}

