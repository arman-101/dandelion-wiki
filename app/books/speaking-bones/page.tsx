import Image from 'next/image';

export default function SpeakingBonesPage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image 
                        src="/speaking-bones.jpg" 
                        alt="Speaking Bones Book Cover" 
                        width={400} 
                        height={600} 
                        className="rounded-lg shadow-2xl object-cover w-full"
                        priority
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-semibold mb-1">The Dandelion Dynasty #4</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Speaking Bones</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>The conclusion to the Dandelion Dynasty. The people of Dara, scattered and under the Lyucu yoke, have not given up hope. Led by the children of Kuni Garu, a new generation of leaders, scientists, and rebels must use every ounce of their ingenuity to devise new weapons and strategies to fight a seemingly invincible foe. The final war for the future of two peoples will be waged on land, on the sea, and in the air.</p>
                        <p className="italic text-gray-400 mt-8">Full chapter summaries will be added soon.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}