import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-6xl font-bold text-teal-500">404</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary dark:text-text-primary sm:text-4xl">Page Not Found</h2>
            <p className="mt-4 text-lg leading-7 text-text-muted dark:text-text-muted">
                Sorry, the page you are looking for hasn&apos;t been written yet or doesn&apos;t exist.
            </p>
            <div className="mt-10">
                <Link
                    href="/"
                    className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}