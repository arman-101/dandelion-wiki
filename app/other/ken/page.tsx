import Image from 'next/image';

const socialLinks = [
    { name: 'Website', url: 'https://kenliu.name/', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0 1 12 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12" /></svg> },
    { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Ken_Liu', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 288h-64v-64h64v64zm-64 64h64v64h-64v-64zm128-64h64v-64h-64v64zm-128 0h64v-64h-64v64zm-64-128h64v-64h-64v64zm192 128h64v-64h-64v64zm-192-192h64V64h-64v64zm192 0h64V64h-64v64zm64 64h64v-64h-64v64zM224 352h64v64h-64v-64zm-64-192v64h-64v-64h64zM96 288v64H32v-64h64zm256-128h64v-64h-64v64zm-64 64h64v-64h-64v64zm-64 64h64v-64h-64v64zm-128-64h64v-64h-64v64zm-64 0h64v-64H96v64zm128 128h64v-64h-64v64zm-128 0h64v-64H96v64z" /></svg> },
    { name: 'Goodreads', url: 'https://www.goodreads.com/author/show/2917920.Ken_Liu', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M320 96a96 96 0 1 0-192 0a96 96 0 1 0 192 0zm-96 64a64 64 0 1 1 0-128a64 64 0 1 1 0 128zM96 96C43 96 0 139 0 192v224c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V192c0-53-43-96-96-96H96zM256 448H64V256h32c0 35.3 28.7 64 64 64s64-28.7 64-64h32v192z"/></svg> },
    { name: 'Amazon', url: 'https://www.amazon.co.uk/stores/author/B004GSTA80', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M213.2 24.1c16.4-18.3 44.2-18.3 60.6 0l160 179.6c13.1 14.8 16.3 35.5 8.2 53.5s-28.7 27.8-48.8 27.8H54.8c-20.1 0-38-9.8-48.8-27.8s-4.9-38.7 8.2-53.5l160-179.6zM224 320a64 64 0 1 1 128 0a64 64 0 1 1 -128 0zm-96-64a64 64 0 1 1 0-128a64 64 0 1 1 0 128zm192 64a64 64 0 1 1 128 0a64 64 0 1 1 -128 0zM57.6 384H390.4L224 183.1L57.6 384z"/></svg> },
    { name: 'X', url: 'https://x.com/kyliu99?lang=en', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg> },
    { name: 'Instagram', url: 'https://www.instagram.com/kenliu.author/?hl=en', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8c14.9 0 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" /></svg> },
];

const SocialLink = ({ name, url, icon }: typeof socialLinks[0]) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white dark:bg-gray-700/50 hover:bg-teal-100 dark:hover:bg-teal-800/60 shadow-sm hover:shadow-md px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
    >
        <span className="w-5 h-5 text-gray-600 dark:text-gray-300">{icon}</span>
        <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{name}</span>
    </a>
);

export default function KenLiuPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-slate-50 dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Image Column */}
                    <div className="md:col-span-1 p-8 md:p-0">
                        <div className="relative aspect-[4/5] md:aspect-auto md:h-full w-full max-w-sm mx-auto md:max-w-none">
                             <Image 
                                src="/ken.jpg" // Ensure you have this image in your /public folder
                                alt="Photo of Ken Liu"
                                layout="fill"
                                objectFit="cover"
                                className="md:rounded-l-2xl"
                            />
                        </div>
                    </div>
                    {/* Info Column */}
                    <div className="md:col-span-2 p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight">Ken Liu</h1>
                        <p className="mt-2 text-lg font-medium text-gray-500 dark:text-gray-400">Author, Translator, Programmer</p>
                        
                        <p className="mt-6 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            Ken Liu is an American author of science fiction and fantasy. His &ldquo;silkpunk&rdquo; epic fantasy series, The Dandelion Dynasty, reimagines the founding of the Han dynasty in a new world with its own unique technology and mythology. A winner of the Nebula, Hugo, and World Fantasy awards, he is celebrated for his thought-provoking stories that often explore themes of tradition, technology, and the human condition.
                        </p>
                        
                        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700/50">
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