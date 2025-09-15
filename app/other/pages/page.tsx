import type { Metadata } from 'next';
import OtherPagesClient from './OtherPagesClient';

export const metadata: Metadata = {
    title: 'Other Pages | The Dandelion Dynasty Wiki',
    description: 'Additional resources and information about the Dandelion Dynasty Wiki, including about pages, glossary, updates, and more.',
    openGraph: {
        title: 'Other Pages | The Dandelion Dynasty Wiki',
        description: 'Additional resources and information about the Dandelion Dynasty Wiki, including about pages, glossary, updates, and more.',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'Other Pages | The Dandelion Dynasty Wiki',
        description: 'Additional resources and information about the Dandelion Dynasty Wiki, including about pages, glossary, updates, and more.'
    }
};

export default function OtherPagesPage() {
    return <OtherPagesClient />;
}
