import type { Metadata } from 'next';
import { generatePageMetadata } from '@/app/utils/metadata';
import GlossaryClient from './GlossaryClient';

export const metadata: Metadata = generatePageMetadata(
    'Glossary',
    'A comprehensive glossary of terms, concepts, and vocabulary from Ken Liu\'s Dandelion Dynasty series, including Daran, Lyucu, and Agon terminology.'
);

export default function GlossaryPage() {
    return <GlossaryClient />;
}
