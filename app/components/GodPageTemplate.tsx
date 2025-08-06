import Image from 'next/image';
import Link from 'next/link';
import { God, ContentBlock, ReferenceLink } from '../data/wiki-data';
import { formatLinksInText } from '../utils/textFormatting';

// --- REUSABLE SUB-COMPONENTS FOR THE TEMPLATE ---

// UPDATED InfoBox Component
const InfoBox = ({ data }: { data: God['infoBox'] }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-3 text-teal-600 dark:text-teal-400 border-b border-gray-300 dark:border-gray-600 pb-2">Divine Information</h3>
        <dl className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {Object.entries(data).map(([key, value]) => {
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
                return (
                    <div key={key} className="grid grid-cols-3 gap-2 items-center">
                        <dt className="font-semibold col-span-1">{label}:</dt>
                        <dd className="col-span-2">
                            {typeof value === 'object' && value.link ? (
                                <Link href={value.link} className="text-teal-600 dark:text-teal-400 hover:underline">
                                    {value.text}
                                </Link>
                            ) : (
                                String(value)
                            )}
                        </dd>
                    </div>
                );
            })}
        </dl>
    </div>
);

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

const ContentParagraph = ({ content }: { content: ContentBlock[] }) => (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {content.map((block, index) => {
            if (block.type === 'text') {
                return <span key={index}>{formatLinksInText(block.content)}</span>;
            }
            if (block.type === 'ref') {
                return <Reference key={index} {...block.data} />;
            }
            return null;
        })}
    </p>
);

// --- MAIN GOD PAGE TEMPLATE ---

interface GodPageTemplateProps {
    godData: God;
}

export default function GodPageTemplate({ godData }: GodPageTemplateProps) {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content Area */}
                <div className="w-full lg:w-2/3 order-2 lg:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{godData.name}</h1>
                    <p className="text-lg italic text-gray-600 dark:text-gray-400 mb-8 border-l-4 border-gray-300 dark:border-gray-600 pl-4">{godData.introduction}</p>

                    <div className="space-y-8">
                        <section id="mythology">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-500 pb-2 mb-4">Mythology & History</h2>
                            <ContentParagraph content={godData.mythology} />
                        </section>

                        <section id="major-appearances">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-500 pb-2 mb-4">Major Appearances</h2>
                            <div className="space-y-6">
                                {godData.appearances.map(appearance => (
                                    <div key={appearance.event}>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{appearance.event}</h3>
                                        <div className="mt-2">
                                            <ContentParagraph content={appearance.summary} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Sidebar with Image and InfoBox */}
                <div className="w-full lg:w-1/3 order-1 lg:order-2">
                    <div className="sticky top-24">
                        <div className="relative w-full h-96 mb-4">
                            <Image 
                                src={godData.image}
                                alt={`Portrait of ${godData.name}`}
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <InfoBox data={godData.infoBox} />
                    </div>
                </div>
            </div>
        </div>
    );
}