import React from 'react';
import { formatLinksInText } from '../../utils/textFormatting';
import InfoBox, { InfoBoxData } from '../ui/InfoBox';
import ContentRenderer from '../ui/ContentRenderer';
import { ContentBlock } from '../../data/wiki-data';

// Generic section interface
interface PageSection {
    id: string;
    title: string;
    content: ContentBlock[] | PageSubSection[];
}

interface PageSubSection {
    title: string;
    content: ContentBlock[];
}

// Generic page data interface
interface PageData {
    name: string;
    image: string;
    introduction: string;
    infoBox: InfoBoxData;
    sections: PageSection[];
}

interface PageTemplateProps {
    pageData: PageData;
    infoBoxTitle: string;
    className?: string;
}

/**
 * Unified page template that works for all content types
 * Replaces separate Character, Concept, God, and Place templates
 */
export default function PageTemplate({ 
    pageData, 
    infoBoxTitle,
    className = "" 
}: PageTemplateProps) {
    const renderSection = (section: PageSection) => {
        return (
            <section key={section.id} id={section.id}>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-primary-light pb-2 mb-4">
                    {section.title}
                </h2>
                
                {Array.isArray(section.content) && section.content.length > 0 && (
                    <div className="space-y-6">
                        {/* Check if content is ContentBlock[] or PageSubSection[] */}
                        {section.content.every(item => 'type' in item) ? (
                            // It's ContentBlock[]
                            <ContentRenderer content={section.content as ContentBlock[]} />
                        ) : (
                            // It's PageSubSection[]
                            (section.content as PageSubSection[]).map((subsection, index) => {
                                // Check if this is a book title (The Grace of Kings, The Wall of Storms, etc.)
                                const isBookTitle = [
                                    "The Grace of Kings",
                                    "The Wall of Storms", 
                                    "The Veiled Throne",
                                    "Speaking Bones"
                                ].includes(subsection.title);
                                
                                return (
                                    <div key={index}>
                                        <h3 className={`font-semibold text-gray-800 dark:text-gray-200 ${
                                            isBookTitle 
                                                ? 'text-2xl mb-4' 
                                                : 'text-xl'
                                        }`}>
                                            {subsection.title}
                                        </h3>
                                        <div className="mt-2">
                                            <ContentRenderer content={subsection.content} />
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                )}
            </section>
        );
    };

    return (
        <div className={className}>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content Area */}
                <div className="w-full lg:w-2/3 order-1 lg:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary mb-4">
                        {pageData.name}
                    </h1>
                    <p className="text-lg italic text-text-muted dark:text-text-light mb-8 border-l-4 border-gray-300 dark:border-border-secondary pl-4">
                        {formatLinksInText(pageData.introduction)}
                    </p>

                    <div className="space-y-8">
                        {pageData.sections.map(renderSection)}
                    </div>
                </div>

                {/* Sidebar with InfoBox only */}
                <div className="w-full lg:w-1/3 order-2 lg:order-2">
                    <div className="sticky top-24">
                        <InfoBox 
                            title={infoBoxTitle}
                            data={pageData.infoBox}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper functions to convert existing data structures to the new format
export function convertCharacterData(characterData: any): PageData {
    return {
        name: characterData.name,
        image: characterData.image,
        introduction: characterData.introduction,
        infoBox: characterData.infoBox,
        sections: [
            {
                id: 'appearance',
                title: 'Appearance & Personality',
                content: characterData.appearanceAndPersonality || []
            },
            {
                id: 'history',
                title: 'History',
                content: characterData.history?.map((era: any) => ({
                    title: era.era,
                    content: era.summary
                })) || []
            }
        ]
    };
}

export function convertConceptData(conceptData: any): PageData {
    return {
        name: conceptData.name,
        image: conceptData.image,
        introduction: conceptData.introduction,
        infoBox: conceptData.infoBox,
        sections: [
            {
                id: 'details',
                title: 'Details',
                content: conceptData.details || []
            }
        ]
    };
}

export function convertGodData(godData: any): PageData {
    return {
        name: godData.name,
        image: godData.image,
        introduction: godData.introduction,
        infoBox: godData.infoBox,
        sections: [
            {
                id: 'mythology',
                title: 'Mythology & History',
                content: godData.mythology || []
            },
            {
                id: 'major-appearances',
                title: 'Major Appearances',
                content: godData.appearances?.map((appearance: any) => ({
                    title: appearance.event,
                    content: appearance.summary
                })) || []
            }
        ]
    };
}

export function convertPlaceData(placeData: any): PageData {
    return {
        name: placeData.name,
        image: placeData.image,
        introduction: placeData.introduction,
        infoBox: placeData.infoBox,
        sections: [
            {
                id: 'geography',
                title: 'Geography',
                content: placeData.geography || []
            },
            {
                id: 'culture',
                title: 'Culture',
                content: placeData.culture || []
            },
            {
                id: 'history',
                title: 'History',
                content: placeData.history?.map((era: any) => ({
                    title: era.event,
                    content: era.summary
                })) || []
            }
        ]
    };
}

// Book data converter (for book detail pages)
export function convertBookData(bookData: any): PageData {
    return {
        name: bookData.title,
        image: bookData.image,
        introduction: bookData.description,
        infoBox: {
            author: bookData.author || "Ken Liu",
            publicationDate: bookData.publicationDate,
            series: bookData.series || "The Dandelion Dynasty",
            isbn: bookData.isbn,
            pages: bookData.pages,
            publisher: bookData.publisher
        },
        sections: [
            {
                id: 'plot-summary',
                title: 'Plot Summary',
                content: bookData.plotSummary || []
            },
            {
                id: 'themes',
                title: 'Themes',
                content: bookData.themes || []
            },
            {
                id: 'reception',
                title: 'Reception',
                content: bookData.reception || []
            }
        ]
    };
}

// Map data converter (for map pages)
export function convertMapData(mapData: any): PageData {
    return {
        name: mapData.name,
        image: mapData.image,
        introduction: mapData.description,
        infoBox: {
            region: mapData.region,
            scale: mapData.scale,
            type: mapData.type || "Geographic Map",
            features: mapData.keyFeatures
        },
        sections: [
            {
                id: 'description',
                title: 'Description',
                content: mapData.details || []
            },
            {
                id: 'locations',
                title: 'Key Locations',
                content: mapData.locations?.map((location: any) => ({
                    title: location.name,
                    content: location.description
                })) || []
            }
        ]
    };
}
