import type { Metadata } from 'next';
import GlossaryClient from './GlossaryClient';

export const metadata: Metadata = {
    title: 'Glossary | The Dandelion Dynasty Wiki',
    description: 'A comprehensive glossary of terms, concepts, and vocabulary from Ken Liu\'s Dandelion Dynasty series, including Daran, Lyucu, and Agon terminology.',
    openGraph: {
        title: 'Glossary | The Dandelion Dynasty Wiki',
        description: 'A comprehensive glossary of terms, concepts, and vocabulary from Ken Liu\'s Dandelion Dynasty series.',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'Glossary | The Dandelion Dynasty Wiki',
        description: 'A comprehensive glossary of terms, concepts, and vocabulary from Ken Liu\'s Dandelion Dynasty series.'
    }
};

export default function GlossaryPage() {
    return <GlossaryClient />;
}
