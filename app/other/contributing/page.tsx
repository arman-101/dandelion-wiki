import Link from 'next/link';

export default function ContributingPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary dark:text-text-primary tracking-tight mb-6">Contributing</h1>
            <p className="text-text-secondary dark:text-text-secondary mb-8">
                Thanks for your interest in improving the Dandelion Dynasty Wiki! Contributions are welcome. Please follow the guidelines below to help keep the site consistent and accurate.
            </p>

            <section className="space-y-4 mb-10">
                <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary">How to Contribute (Fork & PR)</h2>
                <ol className="list-decimal list-inside text-text-secondary dark:text-text-secondary space-y-2">
                    <li>
                        Fork the repository: <a className="text-link dark:text-link-dark hover:underline" href="https://github.com/arman-101/dandelion-wiki" target="_blank" rel="noopener noreferrer">github.com/arman-101/dandelion-wiki</a>
                    </li>
                    <li>
                        Create a feature branch (example): <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">git checkout -b feat/add-new-page</code>
                    </li>
                    <li>
                        Install deps and run locally: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">npm install</code> then <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">npm run dev</code>
                    </li>
                    <li>
                        Commit with a clear message and open a PR. Include screenshots and brief notes.
                    </li>
                </ol>
            </section>

            <section className="space-y-4 mb-10">
                <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary">Content Guidelines</h2>
                <ul className="list-disc list-inside text-text-secondary dark:text-text-secondary space-y-2">
                    <li>Stay faithful to canon. Provide chapter references where possible.</li>
                    <li>Use a neutral, encyclopedic tone.</li>
                    <li>Prefer concise, well-structured sections over long paragraphs.</li>
                    <li>Use internal links for cross-references (e.g., <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">/characters/jia-matiza</code>).</li>
                </ul>
            </section>

            <section className="space-y-4 mb-10">
                <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary">Adding or Updating Pages</h2>
                <p className="text-text-secondary dark:text-text-secondary">Pages are organized by category and rendered from structured data objects.</p>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">Characters</h3>
                    <ul className="list-disc list-inside text-text-secondary dark:text-text-secondary space-y-1">
                        <li>Create: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">app/characters/&lt;slug&gt;/page.tsx</code> (copy an existing page).</li>
                        <li>Image: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">public/characters/&lt;slug&gt;.png</code>.</li>
                        <li>Register: add to <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">ALL_CHARACTERS_DATA</code> in <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">app/data/wiki-data.ts</code>.</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">Places</h3>
                    <ul className="list-disc list-inside text-text-secondary dark:text-text-secondary space-y-1">
                        <li>Create: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">app/places/&lt;slug&gt;/page.tsx</code>.</li>
                        <li>Image: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">public/places/&lt;slug&gt;.png</code>.</li>
                        <li>Register: add to <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">ALL_PLACES_DATA</code> with a <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">category</code> value.</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">Gods</h3>
                    
                    <ul className="list-disc list-inside text-text-secondary dark:text-text-secondary space-y-1">
                        <li>Create: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">app/gods/&lt;slug&gt;/page.tsx</code>.</li>
                        <li>Image: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">public/gods/&lt;slug&gt;.png</code>.</li>
                        <li>Register: append to <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">ALL_GODS</code>.</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">Concepts</h3>
                    <ul className="list-disc list-inside text-text-secondary dark:text-text-secondary space-y-1">
                        <li>Create: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">app/concepts/&lt;slug&gt;/page.tsx</code>.</li>
                        <li>Image: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">public/concepts/&lt;slug&gt;.png</code>.</li>
                        <li>Register: add to <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">ALL_CONCEPTS_DATA</code>.</li>
                    </ul>
                </div>
            </section>

            <section className="space-y-4 mb-10">
                <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary">Validation Checklist</h2>
                <ul className="list-disc list-inside text-text-secondary dark:text-text-secondary space-y-2">
                    <li>App starts: <code className="bg-bg-tertiary dark:hover:bg-border-primary px-1 rounded">npm run dev</code> with no errors.</li>
                    <li>New page renders at the expected route.</li>
                    <li>Page appears on its category index and in global search.</li>
                    <li>All internal links resolve correctly.</li>
                </ul>
            </section>

            <section className="space-y-4 mb-10">
                <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary">Credits & Attribution</h2>
                <ul className="list-disc list-inside text-text-secondary dark:text-text-secondary space-y-2">
                    <li>PR authors are credited as contributors. Optionally credited on specific pages if desired.</li>
                    <li>Include chapter references where applicable.</li>
                    <li>Original artwork: include your preferred credit text; AI-generated art will be labeled as such.</li>
                </ul>
            </section>

            <section className="space-y-4 mb-2">
                <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary">Support</h2>
                <p className="text-text-secondary dark:text-text-secondary">
                    If this wiki helps you, consider supporting development: {" "}
                    <a className="text-link dark:text-link-dark hover:underline" href="https://buymeacoffee.com/darknebulax1" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>.
                </p>
                <p className="text-text-secondary dark:text-text-secondary">
                    Repository: {" "}
                    <a className="text-link dark:text-link-dark hover:underline" href="https://github.com/arman-101/dandelion-wiki" target="_blank" rel="noopener noreferrer">github.com/arman-101/dandelion-wiki</a>
                </p>
            </section>

            <div className="text-sm text-text-light dark:text-text-light mt-8">
                See also: <Link href="/other/about-wiki" className="text-link dark:text-link-dark hover:underline">About This Wiki</Link>
                {" "}|{" "}
                <Link href="/other/about-author" className="text-link dark:text-link-dark hover:underline">About the Author</Link>
            </div>
        </div>
    );
}


