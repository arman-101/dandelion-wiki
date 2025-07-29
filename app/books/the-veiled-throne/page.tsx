import Image from 'next/image';
import BookNavigation from '../../components/BookNavigation'; // <-- ADD THIS IMPORT
import TopBookNavigation from '../../components/TopBookNavigation'; // Import the new component

export default function VeiledThronePage() {
        const bookNav = {
        prevBook: { title: "The Wall of Storms", link: "/books/wall-of-storms" },
        nextBook: { title: "Speaking Bones", link: "/books/speaking-bones" }
    };

    return (
        <div>
            <TopBookNavigation prevBook={bookNav.prevBook} nextBook={bookNav.nextBook} />

            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image 
                        src="/the-veiled-throne.jpg" 
                        alt="The Veiled Throne Book Cover" 
                        width={400} 
                        height={600} 
                        className="rounded-lg shadow-2xl object-cover w-full"
                        priority
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-semibold mb-1">The Dandelion Dynasty #3</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Veiled Throne</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>With the invasion of Dara complete, the Lyucu leadership must now consolidate their gains and win the hearts and minds of the vanquished. But the people of Dara have not given up. As the families of the Dandelion Court and the adventuring nobles of Dara plot rebellion, the Lyucu Empire must contend with its own internal rivalries and the cunning of its Dara subjects.</p>
                        <p className="italic text-gray-400 mt-8">Full chapter summaries will be added soon.</p>
                    </div>
                </div>
            </div>
            <BookNavigation prevBook={bookNav.prevBook} nextBook={bookNav.nextBook} />
        </div>
    );
}