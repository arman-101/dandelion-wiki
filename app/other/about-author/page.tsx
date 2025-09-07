import Image from 'next/image';

const socialLinks = [
    { name: 'Website', url: 'https://kenliu.name/', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0 1 12 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12" /></svg> },
    { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Ken_Liu', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 288h-64v-64h64v64zm-64 64h64v64h-64v-64zm128-64h64v-64h-64v64zm-128 0h64v-64h-64v64zm-64-128h64v-64h-64v64zm192 128h64v-64h-64v64zm-192-192h64V64h-64v64zm192 0h64V64h-64v64zm64 64h64v-64h-64v64zM224 352h64v64h-64v-64zm-64-192v64h-64v-64h64zM96 288v64H32v-64h64zm256-128h64v-64h-64v64zm-64 64h64v-64h-64v64zm-64 64h64v-64h-64v64zm-128-64h64v-64h-64v64zm-64 0h64v-64H96v64zm128 128h64v-64h-64v64zm-128 0h64v-64H96v64z" /></svg> },
    { name: 'Goodreads', url: 'https://www.goodreads.com/author/show/2917920.Ken_Liu', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> },
    { name: 'Amazon', url: 'https://www.amazon.co.uk/stores/author/B004GSTA80', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M213.2 24.1c16.4-18.3 44.2-18.3 60.6 0l160 179.6c13.1 14.8 16.3 35.5 8.2 53.5s-28.7 27.8-48.8 27.8H54.8c-20.1 0-38-9.8-48.8-27.8s-4.9-38.7 8.2-53.5l160-179.6zM224 320a64 64 0 1 1 128 0a64 64 0 1 1 -128 0zm-96-64a64 64 0 1 1 0-128a64 64 0 1 1 0 128zm192 64a64 64 0 1 1 128 0a64 64 0 1 1 -128 0zM57.6 384H390.4L224 183.1L57.6 384z"/></svg> },
    { name: 'X', url: 'https://x.com/kyliu99?lang=en', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg> },
    { name: 'Instagram', url: 'https://www.instagram.com/kenliu.author/?hl=en', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
];

const SocialLink = ({ name, url, icon }: typeof socialLinks[0]) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 sm:gap-3 bg-white dark:bg-gray-700/50 hover:bg-teal-100 dark:hover:bg-teal-800/60 shadow-sm hover:shadow-md px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
    >
        <span className="w-5 h-5 text-text-muted dark:text-text-muted">{icon}</span>
        <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{name}</span>
    </a>
);

export default function KenLiuPage() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-slate-50 dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Image Column */}
                    <div className="md:col-span-1 p-8 md:p-0">
                        <div className="relative aspect-[4/5] md:aspect-auto md:h-full w-full max-w-sm mx-auto md:max-w-none">
                             <Image 
                                src="/ken.jpg" // Ensure you have this image in your /public folder
                                alt="Photo of Ken Liu"
                                fill
                                style={{ objectFit: "cover" }}
                                className="md:rounded-l-2xl"
                            />
                        </div>
                    </div>
                    {/* Info Column */}
                    <div className="md:col-span-2 p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-link dark:text-link-dark tracking-tight">Ken Liu</h1>
                        <p className="mt-2 text-lg font-medium text-text-light dark:text-text-light">Author, Translator, Programmer</p>
                        
                        <p className="mt-6 text-base text-text-secondary dark:text-text-secondary leading-relaxed">
                            Ken Liu is an American author of science fiction and fantasy. His &ldquo;silkpunk&rdquo; epic fantasy series, The Dandelion Dynasty, reimagines the founding of the Han dynasty in a new world with its own unique technology and mythology. A winner of the Nebula, Hugo, and World Fantasy awards, he is celebrated for his thought-provoking stories that often explore themes of tradition, technology, and the human condition.
                        </p>
                        
                        <div className="mt-8 pt-8 border-t border-border-secondary dark:border-border-primary/50">
                             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect Online</h3>
                             <div className="flex flex-wrap gap-3">
                                {socialLinks.map(link => (
                                    <SocialLink key={link.name} {...link} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}