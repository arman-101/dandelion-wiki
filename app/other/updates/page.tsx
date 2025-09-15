import type { Metadata } from 'next';
import { generatePageMetadata } from '@/app/utils/metadata';
import UpdatesClient from './UpdatesClient';

export const metadata: Metadata = generatePageMetadata(
    'Updates',
    'Track the development history and updates to The Dandelion Dynasty Wiki. See what\'s new, what\'s been improved, and the evolution of this comprehensive resource for Ken Liu\'s silkpunk fantasy series.'
);

export default function UpdatesPage() {
    return <UpdatesClient />;
}
