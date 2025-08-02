import Image from 'next/image';
import Link from 'next/link';

const placesTiroStates = [
    { name: "Amu", description: "An elegant and ancient state known for its sophisticated culture and floating cities.", image: "/places/amu.png", link: "/places/amu" },
    { name: "Cocru", description: "A martial state on the southern plains, famed for its proud warrior traditions.", image: "/places/cocru.png", link: "/places/cocru" },
    { name: "Faça", description: "A craggy, northern state known for its hardy people and sheep ranching.", image: "/places/faca.png", link: "/places/faca" },
    { name: "Gan", description: "A wealthy and sophisticated island state, renowned for its naval power and trade.", image: "/places/gan.png", link: "/places/gan" },
    { name: "Haan", description: "A woodsy and learned state known for its philosophers, inventors, and academies.", image: "/places/haan.png", link: "/places/haan" },
    { name: "Rima", description: "A mountainous, northern state famous for its rich mines and master bladesmiths.", image: "/places/rima.png", link: "/places/rima" },
    { name: "Xana", description: "The northwestern island state that conquered Dara and established the first empire.", image: "/places/xana.png", link: "/places/xana" },
];

const placesIslands = [
    { name: "Dasu & Rui", description: "The home islands of Xana, known for Mount Kiji and the Imperial Air Base.", image: "/places/dasu-rui.png", link: "/places/dasu-rui" },
    { name: "Crescent Island", description: "A largely unsettled northern island, used as a royal hunting preserve.", image: "/places/crescent-island.png", link: "/places/crescent-island" },
    { name: "Tan Adü", description: "A remote southern island inhabited by people living in a more 'savage' state.", image: "/places/tan-adu.png", link: "/places/tan-adu" },
    { name: "Tunoa Islands", description: "The ancestral island fiefdom of the Zyndu Clan, known for its fierce loyalty.", image: "/places/tunoa-islands.png", link: "/places/tunoa-islands" },
    { name: "Wolf's Paw", description: "The southern island that is part of the state of Gan, separated by the Kishi Channel.", image: "/places/wolfs-paw.png", link: "/places/wolfs-paw" },
];

const placesLandmarks = [
    { name: "Pan", description: "The 'Immaculate City,' the Imperial capital built by Emperor Mapidéré.", image: "/places/pan.png", link: "/places/pan" },
    { name: "Zudi", description: "A major city in northern Cocru and the childhood home of Kuni Garu.", image: "/places/zudi.png", link: "/places/zudi" },
    { name: "Mount Kiji", description: "A snow-peaked volcano on Rui, the sole source of the lift gas for airships.", image: "/places/mount-kiji.png", link: "/places/mount-kiji" },
    { name: "Kishi Channel", description: "The treacherous channel made unnavigable by a great whirlpool.", image: "/places/kishi-channel.png", link: "/places/kishi-channel" },
];

const placesBeyondDara = [
    { name: "Ukyu & Gondé", description: "The vast, harsh scrublands across the eastern sea, home to the Lyucu people.", image: "/places/ukyu-gonde.png", link: "/places/ukyu-gonde" },
    { name: "Eseeran Nomnny", description: "A mysterious southern continent, separated from the Lyucu Lands by the sea.", image: "/places/eseeran-nomnny.png", link: "/places/eseeran-nomnny" },
];

export default function PlacesPage() {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">The Tiro States of Dara</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {placesTiroStates.map((place) => (
                    <Link href={place.link} key={place.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image src={place.image} alt={`Image of ${place.name}`} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:[color:var(--color-accent-pink)] transition-colors">{place.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">Other Islands & Regions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {placesIslands.map((place) => (
                    <Link href={place.link} key={place.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image src={place.image} alt={`Image of ${place.name}`} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:[color:var(--color-accent-pink)] transition-colors">{place.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">Major Landmarks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {placesLandmarks.map((place) => (
                    <Link href={place.link} key={place.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image src={place.image} alt={`Image of ${place.name}`} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:[color:var(--color-accent-pink)] transition-colors">{place.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">Lands Beyond Dara</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {placesBeyondDara.map((place) => (
                    <Link href={place.link} key={place.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image src={place.image} alt={`Image of ${place.name}`} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:[color:var(--color-accent-pink)] transition-colors">{place.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}