import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-auto border-t border-border-secondary dark:border-border-primary">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm text-text-light dark:text-text-light">
                    The Dandelion Dynasty Wiki is a fan-created project. All content from the books is copyright Ken Liu.
                </p>
                <div className="flex justify-center items-center space-x-4 mt-4 text-sm">
                    <Link href="/other/about-wiki" className="text-link dark:text-link-dark hover:underline">
                        About This Wiki
                    </Link>
                    <span className="text-gray-400 dark:text-gray-600">|</span>
                    <Link href="/other/about-author" className="text-link dark:text-link-dark hover:underline">
                        About the Author
                    </Link>                    
                    <span className="text-gray-400 dark:text-gray-600">|</span>
                    <Link href="/other/contributing" className="text-link dark:text-link-dark hover:underline">
                        Contributing
                    </Link>
                    <span className="text-gray-400 dark:text-gray-600">|</span>
                    <Link href="https://buymeacoffee.com/darknebulax1" target='_blank' className="text-link dark:text-link-dark hover:underline">
                        Cup a coffee?
                    </Link>
                </div>
            </div>
        </footer>
    );
}