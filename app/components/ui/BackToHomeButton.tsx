import Link from 'next/link';
import { Home } from 'lucide-react';

export default function BackToHomeButton() {
    return (
        <Link 
            href="/" 
            className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-link dark:text-link-dark hover:[color:var(--color-accent-pink)] transition-all duration-200 border border-border-primary dark:border-border-secondary rounded-lg hover:bg-bg-secondary dark:hover:bg-bg-secondary hover:border-accent-pink dark:hover:border-accent-pink hover:shadow-md transform hover:-translate-y-0.5 whitespace-nowrap"
        >
            <Home className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            <span>Back to Home</span>
        </Link>
    );
}

