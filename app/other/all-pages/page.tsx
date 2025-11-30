import type { Metadata } from 'next';
import { generatePageMetadata } from '@/app/utils/metadata';
import AllPagesClient from './AllPagesClient';

export const metadata: Metadata = generatePageMetadata(
    'All Pages',
    'Browse all pages in The Dandelion Dynasty Wiki. Complete index of characters, places, gods, concepts, books, and more from Ken Liu\'s epic silkpunk fantasy series.'
);

export default function AllPages() {
    return <AllPagesClient />;
}