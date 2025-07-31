import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Concept, ContentBlock, ReferenceLink, InfoBoxLink } from '../data/wiki-data';

// --- REUSABLE SUB-COMPONENTS FOR THE TEMPLATE ---

// InfoBox component adapted for Concepts
const InfoBox = ({ data }: { data: Concept['infoBox'] }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-3 text-teal-600 dark:text-teal-400 border-b border-gray-300 dark:border-gray-600 pb-2">Key Information</h3>
        <dl className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {Object.entries(data).map(([key, value]) => {
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
                return (
                    <div key={key} className="grid grid-cols-3 gap-2">
                        <dt className="font-semibold col-span-1">{label}:</dt>
                        <dd className="col-span-2">
                            {(() => {
                                if (Array.isArray(value)) {
                                    return value.map((item: InfoBoxLink, index) => (
                                        <React.Fragment key={item.text}>
                                            <Link href={item.link} className="text-teal-600 dark:text-teal-400 hover:underline">{item.text}</Link>
                                            {index < value.length - 1 ? ', ' : ''}
                                        </React.Fragment>
                                    ));
                                } else if (typeof value === 'object' && 'link' in value) {
                                    const item = value as InfoBoxLink;
                                    return <Link href={item.link} className="text-teal-600 dark:text-teal-400 hover:underline">{item.text}</Link>;
                                } else {
                                    return String(value);
                                }
                            })()}
                        </dd>
                    </div>
                );
            })}
        </dl>
    </div>
);

// Generic component for rendering book references
const Reference = ({ book, chapter, link }: ReferenceLink) => {
    const bookAcronyms: { [key: string]: string } = {
        "The Grace of Kings": "TGOK",
        "The Wall of Storms": "TWOS",
        "The Veiled Throne": "TVT",
        "Speaking Bones": "SB"
    };
    const acronym = bookAcronyms[book] || book;

    return (
        <Link href={link} className="text-xs text-teal-600 dark:text-teal-400 hover:underline mx-1">
            [{acronym}-{chapter}]
        </Link>
    );
};

// Generic component for rendering paragraphs with mixed text and references
const ContentParagraph = ({ content }: { content: ContentBlock[] }) => (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {content.map((block, index) => {
            if (block.type === 'text') {
                return <span key={index}>{block.content}</span>;
            }
            if (block.type === 'ref') {
                return <Reference key={index} {...block.data} />;
            }
            return null;
        })}
    </p>
);

// --- MAIN CONCEPT PAGE TEMPLATE ---

interface ConceptPageTemplateProps {
    conceptData: Concept;
}

export default function ConceptPageTemplate({ conceptData }: ConceptPageTemplateProps) {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content Area */}
                <div className="w-full lg:w-2/3 order-2 lg:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{conceptData.name}</h1>
                    <p className="text-lg italic text-gray-600 dark:text-gray-400 mb-8 border-l-4 border-gray-300 dark:border-gray-600 pl-4">{conceptData.introduction}</p>

                    <section id="details">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-500 pb-2 mb-4">Details</h2>
                        <div className="space-y-4">
                           <ContentParagraph content={conceptData.details} />
                        </div>
                    </section>
                </div>

                {/* Sidebar with Image and InfoBox */}
                <div className="w-full lg:w-1/3 order-1 lg:order-2">
                    <div className="sticky top-24">
                         <div className="relative w-full aspect-square mb-4">
                            <Image 
                                src={conceptData.image}
                                alt={`Image representing ${conceptData.name}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <InfoBox data={conceptData.infoBox} />
                    </div>
                </div>
            </div>
        </div>
    );
}