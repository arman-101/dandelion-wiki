import type { Metadata } from 'next';
import { generatePageMetadata } from '@/app/utils/metadata';
import AboutWikiClient from './AboutWikiClient';

export const metadata: Metadata = generatePageMetadata(
    'About This Wiki',
    'Learn about The Dandelion Dynasty Wiki - a comprehensive fan-created encyclopedia for Ken Liu\'s epic silkpunk fantasy series. Built with Next.js, featuring 150+ pages of detailed content.'
);

export default function AboutWikiPage() {
    return <AboutWikiClient />;
}