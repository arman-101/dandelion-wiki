import Link from 'next/link';
import { ReferenceLink } from '../../data/wiki-data';

// Book acronym mapping for consistent reference display
const bookAcronyms: { [key: string]: string } = {
    "The Grace of Kings": "TGOK",
    "The Wall of Storms": "TWOS",
    "The Veiled Throne": "TVT",
    "Speaking Bones": "SB"
};

interface ReferenceProps {
    book: string;
    chapter: string | number;
    link: string;
}

export default function Reference({ book, chapter, link }: ReferenceProps) {
    const acronym = bookAcronyms[book] || book;

    return (
        <Link 
            href={link} 
            className="text-xs text-link dark:text-link-dark hover:underline mx-1"
        >
            [{acronym}-{chapter}]
        </Link>
    );
}

// Alternative export for direct use with ReferenceLink type
export function ReferenceFromData({ book, chapter, link }: ReferenceLink) {
    return <Reference book={book} chapter={chapter} link={link} />;
}
