import Link from 'next/link';
import React from 'react';

// --- Icon Components for UI clarity ---

const TechIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="h-10 w-10 text-teal-500 mb-3">{children}</div>
);

const InfoIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 h-6 w-6 text-teal-500 mt-1 mr-4">{children}</div>
);

const TechCard = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string; }) => (
    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-center">
            <TechIcon>{icon}</TechIcon>
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
    </div>
);

const InfoBlock = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode; }) => (
    <div className="flex items-start not-prose">
        <InfoIcon>{icon}</InfoIcon>
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </div>
);


export default function AboutMePage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-4">

            {/* --- Introduction --- */}
            <div className="text-center mb-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">About This Wiki</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Hello! I&apos;m a huge fan of Ken Liu&apos;s &ldquo;The Dandelion Dynasty&rdquo; and built this wiki to create a modern, clean, and easily searchable resource for the community.
                </p>
                <div className="text-lg mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto space-y-3">
                    <p>
                        This project was inspired in part by a fantastic earlier site that has since gone offline but remains preserved on the Wayback Machine: {" "}
                        <a href="https://web.archive.org/web/20190809133811/http://dandelionwiki.com/w/Main_Page" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">The Dandelion Dynasty Wiki (archived)</a>. Another active and helpful resource is the {" "}
                        <a href="https://the-dandelion-dynasty.fandom.com/wiki/The_Dandelion_Dynasty_Wiki" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Fandom Dandelion Dynasty Wiki</a>.
                    </p>
                    <p>
                        My goal here is to build an evergreen, community-driven wiki—clean, modern, and informative—so fans always have a high-quality home for this world. {" "}
                        <Link href="/other/contributing" className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">Feel free to contribute</Link> and help it grow!
                    </p>
                </div>
            </div>

            {/* --- Support Section --- */}
            <div className="bg-slate-50 dark:bg-gray-800/50 p-6 sm:p-8 rounded-lg space-y-6 max-w-4xl mx-auto mb-4">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">Support This Wiki</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Your support helps keep this resource free for everyone! Consider purchasing the books through these affiliate links.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                        <div className="text-center">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">The Grace of Kings</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Book 1</p>
                            <a href="https://amzn.to/4lYVMGM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-xs group-hover:underline">
                                Buy on Amazon <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                        <div className="text-center">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">The Wall of Storms</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Book 2</p>
                            <a href="https://amzn.to/3IXJlMU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-xs group-hover:underline">
                                Buy on Amazon <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                        <div className="text-center">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">The Veiled Throne</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Book 3</p>
                            <a href="https://amzn.to/3Hcrgdj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-xs group-hover:underline">
                                Buy on Amazon <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                        <div className="text-center">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">Speaking Bones</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Book 4</p>
                            <a href="https://amzn.to/41kbNi5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-xs group-hover:underline">
                                Buy on Amazon <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-center space-x-3">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Or support directly:</span>
                        <a href="https://buymeacoffee.com/darknebulax1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-sm transition-all duration-200 hover:shadow-md">
                            ☕ Buy me a coffee <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* --- Tech Stack --- */}
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Technology Powering the Wiki</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <TechCard
                        icon={<svg viewBox="0 0 128 128"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64s64-28.7 64-64S99.3 0 64 0zm0 121.9C32.2 121.9 6.1 95.8 6.1 64S32.2 6.1 64 6.1s57.9 26.1 57.9 57.9s-26.1 57.9-57.9 57.9z" /><path fill="currentColor" d="M93.3 40L48.2 89.2L34.7 75.7l6.8-6.8l6.8 6.8l38.2-38.2l6.8 6.8z" /></svg>}
                        name="Next.js"
                        description="React Framework"
                    />
                    <TechCard
                        icon={<svg viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256s114.6 256 256 256zM137.4 121.4c-3.1-6.2-11.2-8.5-17.4-5.4s-8.5 11.2-5.4 17.4l24 48c3.1 6.2 11.2 8.5 17.4 5.4s8.5-11.2 5.4-17.4l-24-48zm96 0c-3.1-6.2-11.2-8.5-17.4-5.4s-8.5 11.2-5.4 17.4l24 48c3.1 6.2 11.2 8.5 17.4 5.4s8.5-11.2 5.4-17.4l-24-48zm96 0c-3.1-6.2-11.2-8.5-17.4-5.4s-8.5 11.2-5.4 17.4l24 48c3.1 6.2 11.2 8.5 17.4 5.4s8.5-11.2 5.4-17.4l-24-48zm64 64c-6.2-3.1-14.3-.8-17.4 5.4s-.8 14.3 5.4 17.4l48 24c6.2 3.1 14.3.8 17.4-5.4s.8-14.3-5.4-17.4l-48-24zm-64 48c-6.2-3.1-14.3-.8-17.4 5.4s-.8 14.3 5.4 17.4l48 24c6.2 3.1 14.3.8 17.4-5.4s.8-14.3-5.4-17.4l-48-24zm-128 48c-6.2-3.1-14.3-.8-17.4 5.4s-.8 14.3 5.4 17.4l48 24c6.2 3.1 14.3.8 17.4-5.4s.8-14.3-5.4-17.4l-48-24zM69.4 341.4c-3.1-6.2-11.2-8.5-17.4-5.4s-8.5 11.2-5.4 17.4l24 48c3.1 6.2 11.2 8.5 17.4 5.4s8.5-11.2 5.4-17.4l-24-48zm96 0c-3.1-6.2-11.2-8.5-17.4-5.4s-8.5 11.2-5.4 17.4l24 48c3.1 6.2 11.2 8.5 17.4 5.4s8.5-11.2 5.4-17.4l-24-48zm96 0c-3.1-6.2-11.2-8.5-17.4-5.4s-8.5 11.2-5.4 17.4l24 48c3.1 6.2 11.2 8.5 17.4 5.4s8.5-11.2 5.4-17.4l-24-48z"/></svg>}
                        name="React"
                        description="UI Library"
                    />
                    <TechCard
                        icon={<svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 0l-5.5 5.5l-1.5-1.5L16 0zM5.5 9L0 14.5l4 4L9.5 13zM26.5 9l-5.5 5.5l-4-4L22.5 5zM16 32l5.5-5.5l1.5 1.5L16 32z" /><path fill="currentColor" d="M16 16c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4z" /><path fill="currentColor" d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4z" /></svg>}
                        name="Tailwind CSS"
                        description="Styling Framework"
                    />
                    <TechCard
                        icon={<svg viewBox="0 0 128 128"><path fill="currentColor" d="M0 0h128v128H0z" /><path fill="#fff" d="M30 98V30h52.8v11.3H41.3V54H74v11.2H41.3v21.5H84V98H30z" /></svg>}
                        name="TypeScript"
                        description="Language"
                    />
                </div>
            </div>

            {/* --- Project Notes --- */}
            <div className="bg-slate-50 dark:bg-gray-800/50 p-6 sm:p-8 rounded-lg space-y-6 max-w-4xl mx-auto">
                <InfoBlock icon={<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.158 0a.225.225 0 1 1-.45 0a.225.225 0 0 1 .45 0Z" /></svg>}>
                    Many images on this site were generated with AI to provide visual references where official or fan artwork is scarce.
                </InfoBlock>
                <InfoBlock icon={<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>}>
                    A huge credit goes to the community-run <Link href="https://the-dandelion-dynasty.fandom.com/wiki/The_Dandelion_Dynasty_Wiki" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 dark:text-teal-400 hover:underline">Dandelion Dynasty Fandom Wiki</Link>, an invaluable resource for cross-referencing information.
                </InfoBlock>
                <InfoBlock icon={<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>}>
                    <div>
                        For bugs, inaccuracies, or suggestions, please email: <a href="mailto:darknebulax1@gmail.com" className="font-semibold text-teal-600 dark:text-teal-400 hover:underline">darknebulax1@gmail.com</a>.
                    </div>
                </InfoBlock>
            </div>

            {/* --- Signature --- */}
            <div className="text-center mt-4 pt-8 border-t border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
                <p className="text-gray-500 dark:text-gray-400">The Universe Is Knowable ❤️</p>
            </div>
        </div>
    );
}