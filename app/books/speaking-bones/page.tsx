'use client';

import Image from 'next/image';
import TopPageNavigation from '../../components/TopPageNavigation';
import BookNavigation from '@/app/components/BookNavigation';

export default function SpeakingBonesPage() {
    const bookNav = {
        prevBook: { title: "The Veiled Throne", link: "/books/the-veiled-throne" },
        nextBook: null
    };

    // Define the data for the navigation component
    const prevPageData = { title: "The Veiled Throne", path: "/books/the-veiled-throne" };
    const nextPageData = null;
    const returnLinkData = { title: "Return to Series Overview", path: "/books" };

    return (
        <div>
            <TopPageNavigation
                prevPage={prevPageData}
                nextPage={nextPageData}
                returnLink={returnLinkData}
            />

            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                {/* --- FIX IS HERE --- */}
                {/* We set a max width on mobile (max-w-xs) and center it (mx-auto) */}
                {/* Then we reset for medium screens (md:max-w-none md:mx-0) */}
                <div className="w-full max-w-xs mx-auto md:w-1/3 md:max-w-none md:mx-0 flex-shrink-0">
                    <Image
                        src="/books/speaking-bones.jpg"
                        alt="Speaking Bones Book Cover"
                        width={400}
                        height={600}
                        className="rounded-lg shadow-2xl object-cover w-full"
                        priority
                    />
                </div>
                {/* --- END OF FIX --- */}

                <div className="w-full md:w-2/3">
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-semibold mb-1">The Dandelion Dynasty #4</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Speaking Bones</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>The conclusion to the Dandelion Dynasty. The people of Dara, scattered and under the Lyucu yoke, have not given up hope. Led by the children of Kuni Garu, a new generation of leaders, scientists, and rebels must use every ounce of their ingenuity to devise new weapons and strategies to fight a seemingly invincible foe. The final war for the future of two peoples will be waged on land, on the sea, and in the air.</p>
                        <p className="italic text-gray-400 mt-8">Full chapter summaries will be added soon.</p>
                    </div>
                </div>
            </div>
            <BookNavigation prevBook={bookNav.prevBook} nextBook={bookNav.nextBook} />
        </div>
    );
}