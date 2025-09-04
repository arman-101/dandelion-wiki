import Link from 'next/link';
import { Fragment } from 'react';
import { formatLabel } from '../../utils/stringUtils';

// Generic types for InfoBox data
export interface InfoBoxLink {
    text: string;
    link: string;
}

export type InfoBoxValue = string | InfoBoxLink | InfoBoxLink[];

export interface InfoBoxData {
    [key: string]: InfoBoxValue;
}

interface InfoBoxProps {
    title: string;
    data: InfoBoxData;
    className?: string;
}

/**
 * Generic InfoBox component that works for all page types
 * Handles different value types: strings, links, and arrays of links
 */
export default function InfoBox({ title, data, className = "" }: InfoBoxProps) {
    const renderValue = (value: InfoBoxValue) => {
        if (Array.isArray(value)) {
            return value.map((item, index) => (
                <Fragment key={`${item.text}-${index}`}>
                    {item.link && item.link !== "" ? (
                        <Link href={item.link} className="text-teal-600 dark:text-teal-400 hover:underline">
                            {item.text}
                        </Link>
                    ) : (
                        <span>{item.text}</span>
                    )}
                    {index < value.length - 1 ? ', ' : ''}
                </Fragment>
            ));
        } else if (typeof value === 'object' && 'link' in value) {
            return value.link && value.link !== "" ? (
                <Link href={value.link} className="text-teal-600 dark:text-teal-400 hover:underline">
                    {value.text}
                </Link>
            ) : (
                <span>{value.text}</span>
            );
        } else {
            return String(value);
        }
    };



    return (
        <div className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ${className}`}>
            <h3 className="font-bold text-lg mb-3 text-teal-600 dark:text-teal-400 border-b border-gray-300 dark:border-gray-600 pb-2">
                {title}
            </h3>
            <dl className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-3 gap-2">
                        <dt className="font-semibold col-span-1">{formatLabel(key)}:</dt>
                        <dd className="col-span-2">
                            {renderValue(value)}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
