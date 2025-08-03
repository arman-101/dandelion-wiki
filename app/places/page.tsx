import Image from 'next/image';
import Link from 'next/link';

// Dara Empire
const placesDara = [
    { name: "Dara", description: "The unified empire that encompasses all the Tiro States and islands.", image: "/places/dara.png", link: "/places/dara" },
];

// Tiro States (Original Seven States)
const placesTiroStates = [
    { name: "Amu", description: "An elegant and ancient state known for its sophisticated culture and floating cities.", image: "/places/amu.png", link: "/places/amu" },
    { name: "Cocru", description: "A martial state on the southern plains, famed for its proud warrior traditions.", image: "/places/cocru.png", link: "/places/cocru" },
    { name: "Faça", description: "A craggy, northern state known for its hardy people and sheep ranching.", image: "/places/faca.png", link: "/places/faca" },
    { name: "Gan", description: "A wealthy and sophisticated island state, renowned for its naval power and trade.", image: "/places/gan.png", link: "/places/gan" },
    { name: "Haan", description: "A woodsy and learned state known for its philosophers, inventors, and academies.", image: "/places/haan.png", link: "/places/haan" },
    { name: "Rima", description: "A mountainous, northern state famous for its rich mines and master bladesmiths.", image: "/places/rima.png", link: "/places/rima" },
    { name: "Xana", description: "The northwestern island state that conquered Dara and established the first empire.", image: "/places/xana.png", link: "/places/xana" },
];

// Major Islands
const placesIslands = [
    { name: "Dasu & Rui", description: "The home islands of Xana, known for Mount Kiji and the Imperial Air Base.", image: "/places/dasu-rui.png", link: "/places/dasu-rui" },
    { name: "Rui", description: "One of the home islands of Xana, known for its volcanic activity and lift gas production.", image: "/places/rui.png", link: "/places/rui" },
    { name: "Crescent Island", description: "A largely unsettled northern island, used as a royal hunting preserve.", image: "/places/crescent-island.png", link: "/places/crescent-island" },
    { name: "Tan Adü", description: "A remote southern island inhabited by people living in a more 'savage' state.", image: "/places/tan-adu.png", link: "/places/tan-adu" },
    { name: "Tunoa Islands", description: "The ancestral island fiefdom of the Zyndu Clan, known for its fierce loyalty.", image: "/places/tunoa-islands.png", link: "/places/tunoa-islands" },
    { name: "Wolf's Paw", description: "The southern island that is part of the state of Gan, separated by the Kishi Channel.", image: "/places/wolfs-paw.png", link: "/places/wolfs-paw" },
    { name: "Arulugi", description: "A significant island in the Dara archipelago with its own unique culture and history.", image: "/places/arulugi.png", link: "/places/arulugi" },
];

// Major Cities & Capitals
const placesCities = [
    { name: "Pan", description: "The 'Immaculate City,' the Imperial capital built by Emperor Mapidéré.", image: "/places/pan.png", link: "/places/pan" },
    { name: "Zudi", description: "A major city in northern Cocru and the childhood home of Kuni Garu.", image: "/places/zudi.png", link: "/places/zudi" },
    { name: "Çaruza", description: "An important city and region in the Dara empire with rich cultural heritage.", image: "/places/caruza.png", link: "/places/caruza" },
    { name: "Kriphi", description: "A major city that becomes important during the later events of the series.", image: "/places/kriphi.png", link: "/places/kriphi" },
    { name: "Ginpen", description: "A city with significant cultural and political importance.", image: "/places/ginpen.png", link: "/places/ginpen" },
    { name: "Dimushi", description: "A city that plays a role in the complex political landscape.", image: "/places/dimushi.png", link: "/places/dimushi" },
];

// Natural Landmarks & Geography
const placesLandmarks = [
    { name: "Mount Kiji", description: "A snow-peaked volcano on Rui, the sole source of the lift gas for airships.", image: "/places/mount-kiji.png", link: "/places/mount-kiji" },
    { name: "Lake Dako", description: "A mystical lake within the crater of Mount Kiji, source of lift gas.", image: "/places/lake-dako.png", link: "/places/lake-dako" },
    { name: "Lake Tututika", description: "A sacred lake named after the goddess Tututika, with great spiritual significance.", image: "/places/lake-tututika.png", link: "/places/lake-tututika" },
    { name: "Kishi Channel", description: "The treacherous channel made unnavigable by a great whirlpool.", image: "/places/kishi-channel.png", link: "/places/kishi-channel" },
    { name: "Liru River", description: "A major river system that flows through multiple states in Dara.", image: "/places/liru-river.png", link: "/places/liru-river" },
    { name: "Thoco Pass", description: "A strategic mountain pass that connects different regions of Dara.", image: "/places/thoco-pass.png", link: "/places/thoco-pass" },
    { name: "Zathin Gulf", description: "A significant body of water with strategic and economic importance.", image: "/places/zathin-gulf.png", link: "/places/zathin-gulf" },
];

// New Regions from Later Books
const placesNewRegions = [
    { name: "Taten", description: "A region that plays a role in the complex political landscape of the later books.", image: "/places/taten.png", link: "/places/taten" },
    { name: "Lurodia Tanta", description: "A region with unique cultural and geographical features.", image: "/places/lurodia-tanta.png", link: "/places/lurodia-tanta" },
    { name: "Sliyusa Ki", description: "A region that becomes important during the Lyucu occupation period.", image: "/places/sliyusa-ki.png", link: "/places/sliyusa-ki" },
    { name: "Kiri Valley", description: "A valley region with strategic importance during the conflicts of the later books.", image: "/places/kiri-valley.png", link: "/places/kiri-valley" },
    { name: "World's Edge Mountains", description: "A mountain range that marks the boundary of the known world.", image: "/places/worlds-edge-mountains.png", link: "/places/worlds-edge-mountains" },
    { name: "Sea of Tears", description: "A body of water with symbolic and strategic importance.", image: "/places/sea-of-tears.png", link: "/places/sea-of-tears" },
    { name: "Roro Hills", description: "A geographical feature that plays a role in the final events of the series.", image: "/places/roro-hills.png", link: "/places/roro-hills" },
    { name: "Géfica", description: "A region with unique cultural and historical significance.", image: "/places/gefica.png", link: "/places/gefica" },
];

// Strategic Locations from Final Books
const placesStrategic = [
    { name: "Last Bite", description: "A location that becomes significant during the final conflicts of the series.", image: "/places/last-bite.png", link: "/places/last-bite" },
    { name: "Tiro Cozo", description: "A region that becomes important during the final events of the series.", image: "/places/tiro-cozo.png", link: "/places/tiro-cozo" },
    { name: "Taten-ryo-alvovo", description: "A region that becomes significant during the later political developments.", image: "/places/taten-ryo-alvovo.png", link: "/places/taten-ryo-alvovo" },
    { name: "Kigo Yezu", description: "A region that plays a role in the complex political dynamics of the later books.", image: "/places/kigo-yezu.png", link: "/places/kigo-yezu" },
    { name: "Nokida", description: "A settlement that becomes significant during the later events of the series.", image: "/places/nokida.png", link: "/places/nokida" },
];

// Lands Beyond Dara
const placesBeyondDara = [
    { name: "Ukyu & Gondé", description: "The vast, harsh scrublands across the eastern sea, home to the Lyucu people.", image: "/places/ukyu-gonde.png", link: "/places/ukyu-gonde" },
    { name: "Eseeran Nomnny", description: "A mysterious southern continent, separated from the Lyucu Lands by the sea.", image: "/places/eseeran-nomnny.png", link: "/places/eseeran-nomnny" },
    { name: "Agon", description: "A mysterious people and land from beyond the Wall of Storms.", image: "/places/agon.png", link: "/places/agon" },
];

export default function PlacesPage() {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">The World of Dara</h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">The Dara Empire</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {placesDara.map((place) => (
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

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">The Seven Tiro States</h2>
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

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">Major Islands</h2>
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

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">Major Cities & Capitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {placesCities.map((place) => (
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

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">Natural Landmarks & Geography</h2>
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

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">New Regions & Territories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {placesNewRegions.map((place) => (
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

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white my-8 border-b pb-4">Strategic Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {placesStrategic.map((place) => (
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