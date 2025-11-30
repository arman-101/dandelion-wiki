import type { Metadata } from 'next';
import { generatePageMetadata } from '@/app/utils/metadata';
import AboutAuthorClient from './AboutAuthorClient';

export const metadata: Metadata = generatePageMetadata(
    'About the Author',
    'Learn about Ken Liu, the acclaimed author of The Dandelion Dynasty series. Hugo, Nebula, and World Fantasy Award winner known for his silkpunk fantasy and science fiction works.'
);

export default function AboutAuthorPage() {
    return <AboutAuthorClient />;
}