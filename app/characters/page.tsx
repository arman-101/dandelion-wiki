import Image from 'next/image';
import Link from 'next/link';

// Updated list with all created characters
const characters = [
    {
        name: "Kuni Garu",
        description: "A charismatic bandit who rises to become the founder of the Dandelion Dynasty.",
        image: "/characters/kuni-garu.png",
        link: "/characters/kuni-garu"
    },
    {
        name: "Mata Zyndu",
        description: "A peerless warrior and last son of a noble clan, driven by honor and vengeance.",
        image: "/characters/mata-zyndu.png",
        link: "/characters/mata-zyndu"
    },
    {
        name: "Jia Matiza",
        description: "A brilliant scholar and Kuni's first wife, the political architect of the Dandelion Dynasty.",
        image: "/characters/jia-matiza.png",
        link: "/characters/jia-matiza"
    },
    {
        name: "Luan Zya",
        description: "A master strategist and inventor from Haan who serves as Kuni Garu's chief advisor.",
        image: "/characters/luan-zya.png",
        link: "/characters/luan-zya"
    },
    {
        name: "Gin Mazoti",
        description: "A military prodigy who becomes the first female Marshal in the history of Dara.",
        image: "/characters/gin-mazoti.png",
        link: "/characters/gin-mazoti"
    },
    {
        name: "Emperor Mapidéré",
        description: "The ambitious and ruthless conqueror who first united Dara into an empire.",
        image: "/characters/emperor-mapidere.png",
        link: "/characters/emperor-mapidere"
    },
    {
        name: "Princess Théra",
        description: "The brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia.",
        image: "/characters/princess-thera.png",
        link: "/characters/princess-thera"
    },
    {
        name: "Prince Timu",
        description: "The studious and serious Crown Prince of the Dandelion Dynasty.",
        image: "/characters/prince-timu.png",
        link: "/characters/prince-timu"
    },
    {
        name: "Prince Phyro",
        description: "The charismatic and martially gifted son of Emperor Ragin and Consort Risana.",
        image: "/characters/prince-phyro.png",
        link: "/characters/prince-phyro"
    },
    {
        name: "Zomi Kidosu",
        description: "A radical thinker and student of Luan Zya who champions innovation and meritocracy.",
        image: "/characters/zomi-kidosu.png",
        link: "/characters/zomi-kidosu"
    },
    {
        name: "Consort Risana",
        description: "An illusionist and Kuni Garu's second wife, a woman of great wisdom and subtle power.",
        image: "/characters/consort-risana.png",
        link: "/characters/consort-risana"
    },
    {
        name: "Soto Zyndu",
        description: "The politically brilliant aunt of Mata Zyndu and a secret advisor to Empress Jia.",
        image: "/characters/soto-zyndu.png",
        link: "/characters/soto-zyndu"
    },
    {
        name: "Emperor Erishi",
        description: "The weak and foolish second emperor of the Xana Dynasty.",
        image: "/characters/emperor-erishi.png",
        link: "/characters/emperor-erishi"
    },
    {
        name: "Goran Pira",
        description: "The Imperial Chatelain who secretly orchestrated the downfall of the Xana Dynasty.",
        image: "/characters/goran-pira.png",
        link: "/characters/goran-pira"
    },
    {
        name: "Lügo Crupo",
        description: "The ambitious and ruthless Prime Minister and Regent of the Xana Empire.",
        image: "/characters/lugo-crupo.png",
        link: "/characters/lugo-crupo"
    },
    {
        name: "Kindo Marana",
        description: "The Minister of Finance turned surprisingly competent Commander-in-Chief.",
        image: "/characters/kindo-marana.png",
        link: "/characters/kindo-marana"
    },
    {
        name: "Tanno Namen",
        description: "A legendary and honorable general of the Xana Empire.",
        image: "/characters/tanno-namen.png",
        link: "/characters/tanno-namen"
    },
    {
        name: "Mün Çakri",
        description: "A former butcher and one of Kuni Garu's most loyal followers and bodyguards.",
        image: "/characters/mun-cakri.png",
        link: "/characters/mun-cakri"
    },
    {
        name: "Rin Coda",
        description: "Kuni Garu's timid and scholarly childhood friend who becomes a trusted advisor.",
        image: "/characters/rin-coda.png",
        link: "/characters/rin-coda"
    },
    {
        name: "King Thufi",
        description: "A humble shepherd who is elevated to King of Cocru during the rebellion.",
        image: "/characters/king-thufi.png",
        link: "/characters/king-thufi"
    },
    {
        name: "Princess Kikomi",
        description: "The beautiful and tragic princess of Amu whose actions have devastating consequences.",
        image: "/characters/princess-kikomi.png",
        link: "/characters/princess-kikomi"
    },
    {
        name: "Phin Zyndu",
        description: "The uncle of Mata Zyndu and the guardian of his family's legacy of vengeance.",
        image: "/characters/phin-zyndu.png",
        link: "/characters/phin-zyndu"
    },
    {
        name: "Zato Ruthi",
        description: "The stern and traditional Imperial Tutor for the children of Emperor Ragin.",
        image: "/characters/zato-ruthi.png",
        link: "/characters/zato-ruthi"
    },
    {
        name: "Doru Solofi",
        description: "A disgraced nobleman and a leader of the rebellious Hegemon Cults.",
        image: "/characters/doru-solofi.png",
        link: "/characters/doru-solofi"
    },
    {
        name: "Noda Mi",
        description: "The cunning strategist and mastermind behind the Hegemon Cults.",
        image: "/characters/noda-mi.png",
        link: "/characters/noda-mi"
    },
    {
        name: "Gozogi Çadé",
        description: "A former street tough and one of Kuni Garu's oldest and most loyal friends.",
        image: "/characters/gozogi-cade.png",
        link: "/characters/gozogi-cade"
    },
    {
        name: "Than Carucono",
        description: "A cheerful former street performer who becomes a loyal general for Kuni Garu.",
        image: "/characters/than-carucono.png",
        link: "/characters/than-carucono"
    },
    {
        name: "Dafiro Miro",
        description: "A wise advisor to King Thufi who becomes a key double agent for Kuni Garu.",
        image: "/characters/dafiro-miro.png",
        link: "/characters/dafiro-miro"
    },
    {
        name: "King Jizu",
        description: "The fisherman-king of Rima whose martyrdom became a symbol for the rebellion.",
        image: "/characters/king-jizu.png",
        link: "/characters/king-jizu"
    },
    {
        name: "King Mocri",
        description: "The proud and honorable king of Gan and a key member of the Tiro Alliance.",
        image: "/characters/king-mocri.png",
        link: "/characters/king-mocri"
    },
    {
        name: "King Shilué",
        description: "The treacherous king of Faça whose attempt to play both sides led to his downfall.",
        image: "/characters/king-shilue.png",
        link: "/characters/king-shilue"
    },
];

export default function CharactersPage() {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4">Characters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {characters.map((char) => (
                    <Link href={char.link} key={char.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                        <div className="relative w-full h-64">
                             <Image 
                                src={char.image}
                                alt={`Portrait of ${char.name}`}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-[color:var(--color-accent-pink)] transition-colors">{char.name}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{char.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}