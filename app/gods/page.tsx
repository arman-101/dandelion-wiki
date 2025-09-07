import Image from 'next/image';
import Link from 'next/link';

const godsData = [
    {
        name: "Kiji",
        description: "The patron of Xana, god of wind, flight, and birds. His pawi is the Mingén falcon.",
        image: "/gods/kiji.png",
        link: "/gods/kiji"
    },
    {
        name: "Tututika",
        description: "The patron of Amu and youngest of the gods. Governs agriculture, beauty, and fresh water.",
        image: "/gods/tututika.png",
        link: "/gods/tututika"
    },
    {
        name: "Kana",
        description: "A patron of Cocru and twin to Rapa. Kana is the goddess of fire, ash, cremation, and death.",
        image: "/gods/kana.png",
        link: "/gods/kana"
    },
    {
        name: "Rapa",
        description: "A patron of Cocru and twin to Kana. Rapa is the goddess of ice, snow, glaciers, and sleep.",
        image: "/gods/rapa.png",
        link: "/gods/rapa"
    },
    {
        name: "Rufizo",
        description: "The patron of Faça and the Divine Healer of the pantheon. His pawi is the dove.",
        image: "/gods/rufizo.png",
        link: "/gods/rufizo"
    },
    {
        name: "Tazu",
        description: "The unpredictable patron of Gan. A chaotic god of sea currents, tsunamis, and sunken treasures.",
        image: "/gods/tazu.png",
        link: "/gods/tazu"
    },
    {
        name: "Lutho",
        description: "The patron of Haan, god of fishermen, divination, mathematics, and knowledge.",
        image: "/gods/lutho.png",
        link: "/gods/lutho"
    },
    {
        name: "Fithowéo",
        description: "The patron of Rima, the god of war, the hunt, and the forge. His pawi is the wolf.",
        image: "/gods/fithoweo.png",
        link: "/gods/fithoweo"
    },
];

export default function GodsPage() {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-8 border-b pb-4">The Gods of Dara</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {godsData.map((god) => (
                    <Link href={god.link} key={god.name} className="group bg-bg-card dark:bg-bg-card rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image 
                                src={god.image}
                                alt={`Portrait of ${god.name}`}
                                fill
                                style={{ objectFit: "cover", objectPosition: "top" }}
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-text-primary dark:text-text-primary mt-1 group-hover:[color:var(--color-accent-pink)] transition-colors">{god.name}</h2>
                            <p className="text-sm text-text-muted dark:text-text-muted mt-2">{god.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}