'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 }); // Default center

    const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) {
            // Calculate click position relative to image
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            setZoomOrigin({ x, y });
        }
        setIsZoomed(!isZoomed);
    };

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Reset zoom when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsZoomed(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close image"
            >
                <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                    />
                </svg>
            </button>

            {/* Image container - smaller to allow clicking outside */}
            <div 
                className="relative max-w-[99vw] max-h-[99vh] p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div 
                    className="transition-transform duration-500 ease-in-out cursor-zoom-in"
                    style={{ 
                        transform: isZoomed 
                            ? `scale(2) translate(${(50 - zoomOrigin.x) * 0.5}%, ${(50 - zoomOrigin.y) * 0.5}%)`
                            : 'scale(1) translate(0%, 0%)'
                    }}
                    onClick={handleImageClick}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1200}
                        height={800}
                        className="object-contain w-full h-full rounded-lg shadow-2xl"
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>
            </div>

            {/* Click outside to close hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-75 text-center">
                Click anywhere on image to zoom in • Click again to zoom out • Click outside or press ESC to close
            </div>
        </div>
    );
}
