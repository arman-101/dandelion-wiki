import type { Metadata } from 'next';
import QuotesClient from './QuotesClient';

export const metadata: Metadata = {
    title: 'Quotes',
    description: 'Memorable quotes from The Dandelion Dynasty series by Ken Liu. Explore the wisdom, wit, and philosophy of characters from The Grace of Kings, The Wall of Storms, The Veiled Throne, and Speaking Bones.',
    openGraph: {
        title: 'Quotes | The Dandelion Dynasty Wiki',
        description: 'Memorable quotes from The Dandelion Dynasty series by Ken Liu.',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'Quotes | The Dandelion Dynasty Wiki',
        description: 'Memorable quotes from The Dandelion Dynasty series by Ken Liu.'
    }
};



export default function QuotesPage() {
    return <QuotesClient />;
}