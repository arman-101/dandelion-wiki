import { StaticImageData } from 'next/image';

// This interface defines the structure for all our wiki pages
export interface WikiPage {
    title: string;
    path: string;
    type: 'Book' | 'Character' | 'Place' | 'Concept' | 'God' | 'Map' | 'Other';
}

// --- CHARACTERS ORGANIZED BY BOOK (NAVBAR VERSION - MAIN CHARACTERS ONLY) ---
export const CHARACTERS_BY_BOOK_NAV = {
    TGOK: [
        { name: "Kuni Garu", description: "A charismatic rogue who forges a rebellion and founds a new dynasty.", image: "/characters/kuni-garu.png", link: "/characters/kuni-garu" },
        { name: "Mata Zyndu", description: "A peerless warrior and last son of a noble clan, driven by honor and vengeance.", image: "/characters/mata-zyndu.png", link: "/characters/mata-zyndu" },
        { name: "Jia Matiza", description: "A brilliant scholar who becomes the ruthless political architect of the Dandelion Dynasty.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Luan Zya", description: "A master strategist and inventor who becomes the intellectual heart of the rebellion.", image: "/characters/luan-zya.png", link: "/characters/luan-zya" },
        { name: "Gin Mazoti", description: "A military prodigy who rises from the streets to become the empire's first female Marshal.", image: "/characters/gin-mazoti.png", link: "/characters/gin-mazoti" },
        { name: "Emperor Mapidere", description: "The ambitious and ruthless conqueror who first united Dara into an empire.", image: "/characters/emperor-mapidere.png", link: "/characters/emperor-mapidere" },
        { name: "Consort Risana", description: "An enigmatic illusionist and Kuni Garu's second wife, a woman of great wisdom and subtle power.", image: "/characters/consort-risana.png", link: "/characters/consort-risana" },
        { name: "Phin Zyndu", description: "The uncle of Mata Zyndu and the devoted guardian of his family's legacy of vengeance.", image: "/characters/phin-zyndu.png", link: "/characters/phin-zyndu" },
        { name: "Goran Pira", description: "The Imperial Chatelain who secretly orchestrates the downfall of the Xana Dynasty out of revenge.", image: "/characters/goran-pira.png", link: "/characters/goran-pira" },
        { name: "Huno Krima", description: "The charismatic corvée laborer who sparks the first rebellion against the Xana Empire.", image: "/characters/huno-krima.png", link: "/characters/huno-krima" },
        { name: "Princess Kikomi", description: "The tragic princess of Amu whose attempt to save her people has devastating consequences.", image: "/characters/princess-kikomi.png", link: "/characters/princess-kikomi" },
        { name: "Lady Mira", description: "A woman from Tunoa who becomes the only person to understand Mata Zyndu's conflicted heart.", image: "/characters/lady-mira.png", link: "/characters/lady-mira" },
    ],
    TWOS: [
        { name: "Kuni Garu", description: "Now Emperor Ragin, he grapples with court intrigue and the arrival of a devastating foreign invasion.", image: "/characters/kuni-garu.png", link: "/characters/kuni-garu" },
        { name: "Jia Matiza", description: "As Empress, she begins a ruthless shadow war to secure the future of her dynasty against all threats.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Princess Thera", description: "The brilliant and scientifically-minded heir to the Dandelion Throne, secretly chosen by her father.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "A radical thinker and student of Luan Zya who challenges the foundations of Daran society.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Pekyu Tenryo", description: "The powerful and cunning Lyucu leader who spent decades planning the invasion of Dara.", image: "/characters/pekyu-tenryo.png", link: "/characters/pekyu-tenryo" },
        { name: "Tanvanaki", description: "A peerless garinafin pilot and daughter of the Lyucu leader who invades Dara.", image: "/characters/tanvanaki.png", link: "/characters/tanvanaki" },
        { name: "Prince Phyro", description: "The charismatic and martially gifted son of Emperor Ragin, championed by the military faction.", image: "/characters/prince-phyro.png", link: "/characters/prince-phyro" },
        { name: "Gin Mazoti", description: "The powerful Queen of Géjira who is ensnared in Empress Jia's ruthless political machinations.", image: "/characters/gin-mazoti.png", link: "/characters/gin-mazoti" },
        { name: "Luan Zya", description: "The legendary strategist whose final voyage and posthumous sacrifice provide Dara a key to survival.", image: "/characters/luan-zya.png", link: "/characters/luan-zya" },
        { name: "Doru Solofi", description: "A disgraced nobleman who co-founds the rebellious Hegemon Cults out of resentment.", image: "/characters/doru-solofi.png", link: "/characters/doru-solofi" },
    ],
    TVT: [
        { name: "Princess Thera", description: "Leads a daring expedition into the Lyucu homeland to foment a rebellion from within.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Jia Matiza", description: "As Regent, she rules Dara with an iron fist, executing a long and secret war against the Lyucu.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Princess Fara", description: "The artist-princess who becomes the heart of a grassroots cultural and technological renaissance.", image: "/characters/princess-fara.png", link: "/characters/princess-fara" },
        { name: "Kinri", description: "A young refugee of mixed heritage who discovers his true, secret identity as Savo Ryoto.", image: "/characters/kinri.png", link: "/characters/kinri" },
        { name: "Goztan Ryoto", description: "A powerful Lyucu thane who leads the accommodationist faction in the treacherous politics of the occupation.", image: "/characters/goztan-ryoto.png", link: "/characters/goztan-ryoto" },
        { name: "Tanvanaki", description: "The Pékyu of the Lyucu in Dara, struggling to rule a conquered people while battling hardliners in her court.", image: "/characters/tanvanaki.png", link: "/characters/tanvanaki" },
        { name: "Prince Timu", "description": "The captive prince, now a puppet emperor for the Lyucu, struggling to protect his people from within.", image: "/characters/prince-timu.png", link: "/characters/prince-timu" },
        { name: "Takval Aragoz", description: "A prince of the Agon people who becomes Princess Théra's husband and co-leader of the rebellion.", image: "/characters/takval-aragoz.png", link: "/characters/takval-aragoz" },
        { name: "Cutanrovo Aga", description: "A fanatical Lyucu thane whose puritanical purges threaten to destroy both Dara and the Lyucu.", image: "/characters/cutanrovo-aga.png", link: "/characters/cutanrovo-aga" },
        { name: "Toof", description: "A Lyucu garinafin pilot who is captured by and defects to Théra's rebellion.", image: "/characters/toof.png", link: "/characters/toof" },
    ],
    SB: [
        { name: "Jia Matiza", description: "The Dowager Empress whose grand, secret plan to defeat the Lyucu finally comes to fruition.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Emperor Phyro", description: "Now Emperor, he secretly builds a new army to reclaim Dara and avenge his mother.", image: "/characters/prince-phyro.png", link: "/characters/prince-phyro" },
        { name: "Princess Thera", description: "Leads her rebellion in Ukyu-Gondé to a climactic and devastating conclusion.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "As Farsight Secretary, she coordinates Dara's resistance and persuades a new ruler to take the throne.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Aya Mazoti", description: "The daughter of Gin Mazoti who becomes a skilled commander in the final war.", image: "/characters/aya-mazoti.png", link: "/characters/aya-mazoti" },
        { name: "Kinri", description: "A fugitive inventor whose creations become central to the resistance against Empress Jia's regency.", image: "/characters/kinri.png", link: "/characters/kinri" },
        { name: "Goztan Ryoto", description: "The pragmatic Lyucu admiral who must lead her people after their final defeat.", image: "/characters/goztan-ryoto.png", link: "/characters/goztan-ryoto" },
        { name: "Princess Fara", description: "The artist-princess who becomes an unlikely candidate for the throne in an era of reconstruction.", image: "/characters/princess-fara.png", link: "/characters/princess-fara" },
    ]
};

// --- MASTER DATA FOR CHARACTER LISTING PAGE ---
export const ALL_CHARACTERS_DATA = [
    // The Grace of Kings
    { name: "Kuni Garu", description: "A charismatic rogue who rises from obscurity to become Emperor Ragin, founder of the Dandelion Dynasty.", image: "/characters/kuni-garu.png", link: "/characters/kuni-garu" },
    { name: "Mata Zyndu", description: "A peerless warrior and last son of a noble clan, driven by honor and vengeance who becomes Hegemon of Dara.", image: "/characters/mata-zyndu.png", link: "/characters/mata-zyndu" },
    { name: "Jia Matiza", description: "A brilliant scholar and Kuni's first wife who evolves into the ruthless political architect of the Dandelion Dynasty.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
    { name: "Luan Zya", description: "A master strategist, inventor, and the sole survivor of a noble house who becomes the intellectual heart of the rebellion.", image: "/characters/luan-zya.png", link: "/characters/luan-zya" },
    { name: "Gin Mazoti", description: "A military prodigy who rises from the streets to become the first female Marshal in the history of Dara.", image: "/characters/gin-mazoti.png", link: "/characters/gin-mazoti" },
    { name: "Consort Risana", description: "An enigmatic illusionist and Kuni Garu's second wife, a woman of great wisdom and the leader of the 'Swords' faction.", image: "/characters/consort-risana.png", link: "/characters/consort-risana" },
    { name: "Emperor Mapidere", description: "The ambitious and ruthless conqueror from Xana who first united Dara and whose legacy of cruelty led to his dynasty's ruin.", image: "/characters/emperor-mapidere.png", link: "/characters/emperor-mapidere" },
    { name: "Emperor Erishi", description: "The weak and foolish boy-emperor of the Xana Dynasty, whose incompetence hastened his empire's collapse.", image: "/characters/emperor-erishi.png", link: "/characters/emperor-erishi" },
    { name: "Goran Pira", description: "The Imperial Chatelain who secretly orchestrated the downfall of the Xana Dynasty out of a decades-long quest for revenge.", image: "/characters/goran-pira.png", link: "/characters/goran-pira" },
    { name: "Lugo Crupo", description: "The ambitious and ruthless Prime Minister and Regent of the Xana Empire.", image: "/characters/lugo-crupo.png", link: "/characters/lugo-crupo" },
    { name: "Kindo Marana", description: "The Minister of Finance turned surprisingly competent Commander-in-Chief for the Xana Empire.", image: "/characters/kindo-marana.png", link: "/characters/kindo-marana" },
    { name: "Tanno Namen", description: "A legendary and honorable general of the Xana Empire who represents the old guard.", image: "/characters/tanno-namen.png", link: "/characters/tanno-namen" },
    { name: "Mun Cakri", description: "A former butcher and one of Kuni Garu's most loyal and formidable followers and generals.", image: "/characters/mun-cakri.png", link: "/characters/mun-cakri" },
    { name: "Rin Coda", description: "Kuni Garu's timid childhood friend whose conscience is broken by his role as Farsight Secretary.", image: "/characters/rin-coda.png", link: "/characters/rin-coda" },
    { name: "Cogo Yelu", description: "A brilliant administrator and Kuni Garu's first Prime Minister, who later becomes the moral anchor of the empire.", image: "/characters/cogo-yelu.png", link: "/characters/cogo-yelu" },
    { name: "King Thufi", description: "A humble shepherd and lost heir who is elevated to King of Cocru and Princeps of the rebellion.", image: "/characters/king-thufi.png", link: "/characters/king-thufi" },
    { name: "Princess Kikomi", description: "The tragic princess of Amu whose deal to save her people leads to devastating consequences.", image: "/characters/princess-kikomi.png", link: "/characters/princess-kikomi" },
    { name: "Phin Zyndu", description: "The uncle of Mata Zyndu and the devoted guardian of his family's legacy of vengeance.", image: "/characters/phin-zyndu.png", link: "/characters/phin-zyndu" },
    { name: "Gozogi Cade", description: "A former street tough and one of Kuni Garu's oldest and most steadfast friends.", image: "/characters/gozogi-cade.png", link: "/characters/gozogi-cade" },
    { name: "Than Carucono", description: "A cheerful former stable master who becomes a loyal general and dies heroically in service to the Dandelion Dynasty.", image: "/characters/than-carucono.png", link: "/characters/than-carucono" },
    { name: "Dafiro Miro", description: "A wise soldier who becomes a key double agent and later the loyal Captain of the Palace Guards.", image: "/characters/dafiro-miro.png", link: "/characters/dafiro-miro" },
    { name: "Ratho Miro", description: "The impulsive younger brother of Dafiro, a fierce warrior loyal to Mata Zyndu to the bitter end.", image: "/characters/ratho-miro.png", link: "/characters/ratho-miro" },
    { name: "King Jizu", description: "The fisherman-king of Rima whose noble martyrdom became a potent symbol for the rebellion.", image: "/characters/king-jizu.png", link: "/characters/king-jizu" },
    { name: "King Mocri", description: "The proud and honorable king of Gan who betrays the Tiro Alliance at a critical moment.", image: "/characters/king-mocri.png", link: "/characters/king-mocri" },
    { name: "King Shilue", description: "The treacherous king of Faça whose attempt to play both sides led to his swift execution.", image: "/characters/king-shilue.png", link: "/characters/king-shilue" },
    { name: "Huno Krima", description: "The charismatic corvée laborer whose 'fish prophecy' sparked the first major rebellion against the Xana Empire.", image: "/characters/huno-krima.png", link: "/characters/huno-krima" },
    { name: "Zopa Shigin", description: "A sturdy corvée laborer and Huno Krima's co-conspirator, tragically murdered by his friend.", image: "/characters/zopa-shigin.png", link: "/characters/zopa-shigin" },
    { name: "Soto Zyndu", description: "The politically brilliant aunt of Mata Zyndu and secret mentor to Empress Jia, who later exposes her tyranny.", image: "/characters/soto-zyndu.png", link: "/characters/soto-zyndu" },
    { name: "Lady Mira", description: "An embroiderer from Tunoa who becomes Mata Zyndu's confidante and only connection to peace.", image: "/characters/lady-mira.png", link: "/characters/lady-mira" },
    // The Wall of Storms
    { name: "Princess Thera", description: "The brilliant, scientifically-minded daughter of Kuni and Jia, who leads a rebellion in the Lyucu homeland.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
    { name: "Zomi Kidosu", description: "A radical engineer and student of Luan Zya who rises to become one of the most influential figures in Dara.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
    { name: "Prince Timu", description: "The studious Crown Prince who is captured and forced to become a tragic puppet emperor for the Lyucu.", image: "/characters/prince-timu.png", link: "/characters/prince-timu" },
    { name: "Prince Phyro", description: "The charismatic, martial son of Kuni and Risana who secretly builds an army to defy his mother's regency.", image: "/characters/prince-phyro.png", link: "/characters/prince-phyro" },
    { name: "Zato Ruthi", description: "The stern, traditional Imperial Tutor whose cultural arrogance leads to a fatal diplomatic disaster.", image: "/characters/zato-ruthi.png", link: "/characters/zato-ruthi" },
    { name: "Doru Solofi", description: "A disgraced former king who co-founds the rebellious Hegemon Cults.", image: "/characters/doru-solofi.png", link: "/characters/doru-solofi" },
    { name: "Noda Mi", description: "The cunning mastermind behind the Hegemon Cults, who later becomes a treacherous collaborator with the Lyucu.", image: "/characters/noda-mi.png", link: "/characters/noda-mi" },
    { name: "Theca Kimo", description: "A pragmatic Duke who is manipulated into rebellion by Empress Jia's intricate political schemes.", image: "/characters/theca-kimo.png", link: "/characters/theca-kimo" },
    { name: "Puma Yemu", description: "A former bandit and loyal general known for his raiding tactics and loyalty to the 'Swords' faction.", image: "/characters/puma-yemu.png", link: "/characters/puma-yemu" },
    { name: "Oga Kidosu", description: "Zomi Kidosu's long-lost father, a fisherman from Dasu whose testimony reveals the Lyucu's true history.", image: "/characters/oga-kidosu.png", link: "/characters/oga-kidosu" },
    { name: "Pekyu Tenryo", description: "The powerful and cunning Lyucu leader who spent decades orchestrating the invasion of Dara.", image: "/characters/pekyu-tenryo.png", link: "/characters/pekyu-tenryo" },
    { name: "Tanvanaki", description: "The peerless garinafin pilot and daughter of Pékyu Tenryo, who becomes the tragic leader of the Lyucu occupation.", image: "/characters/tanvanaki.png", link: "/characters/tanvanaki" },
    { name: "Cudyu Roatan", description: "The ruthless son of Pékyu Tenryo and commander of the Lyucu forces in their homeland.", image: "/characters/cudyu-roatan.png", link: "/characters/cudyu-roatan" },
    { name: "Ra Olu", description: "A Daran official from Dasu who becomes a willing and influential collaborator with the Lyucu invaders.", image: "/characters/ra-olu.png", link: "/characters/ra-olu" },
    { name: "Pon Naye", description: "A courageous Dara airship commander who makes a heroic sacrifice in the first battle against the Lyucu.", image: "/characters/pon-naye.png", link: "/characters/pon-naye" },
    { name: "Takval Aragoz", description: "A prince of the exiled Agon people who becomes Princess Théra's husband and co-leader of the rebellion in Ukyu-Gondé.", image: "/characters/takval-aragoz.png", link: "/characters/takval-aragoz" },
    // The Veiled Throne
    { name: "Princess Fara", description: "The artist-princess and youngest child of Kuni and Risana, who becomes the unlikely hope for a new era of peace.", image: "/characters/princess-fara.png", link: "/characters/princess-fara" },
    { name: "Kinri", description: "A young refugee of mixed Lyucu-Dara heritage who discovers his secret identity as Savo Ryoto and becomes a pivotal inventor.", image: "/characters/kinri.png", link: "/characters/kinri" },
    { name: "Goztan Ryoto", description: "A powerful Lyucu thane and mother of Savo Ryoto who leads the pragmatic accommodationist faction.", image: "/characters/goztan-ryoto.png", link: "/characters/goztan-ryoto" },
    { name: "Volyu Aragoz", description: "The treacherous uncle of Takval Aragoz who repeatedly betrays the Agon rebellion to the Lyucu.", image: "/characters/volyu-aragoz.png", link: "/characters/volyu-aragoz" },
    { name: "Souliyan Aragoz", description: "The wise mother of Takval Aragoz and a matriarch of the Agon resistance who dies heroically.", image: "/characters/souliyan-aragoz.png", link: "/characters/souliyan-aragoz" },
    { name: "Tanto Aragoz", description: "The eldest son of Princess Théra and Takval, whose journey into ancient ruins rewrites his people's history.", image: "/characters/tanto-aragoz.png", link: "/characters/tanto-aragoz" },
    { name: "Rokiri Aragoz", description: "The second son of Princess Théra and Takval, a child of war and a survivor of the Kiri Valley massacre.", image: "/characters/rokiri-aragoz.png", link: "/characters/rokiri-aragoz" },
    { name: "Cutanrovo Aga", description: "A fanatical Lyucu thane whose puritanical purges lead to the collapse of the Lyucu occupation.", image: "/characters/cutanrovo-aga.png", link: "/characters/cutanrovo-aga" },
    { name: "Toof", description: "A Lyucu garinafin pilot who defects and becomes a key member of Théra's rebellion.", image: "/characters/toof.png", link: "/characters/toof" },
    { name: "Radia", description: "A Lyucu warrior and Toof's companion who defects and makes the ultimate sacrifice for the rebellion.", image: "/characters/radia.png", link: "/characters/radia" },
    { name: "Cami Phithadapu", description: "A Dara scholar on Théra's expedition whose unique knowledge leads to revolutionary inventions.", image: "/characters/cami-phithadapu.png", link: "/characters/cami-phithadapu" },
    { name: "Thoryo", description: "A mysterious, feral child with an incredible gift for mimicry who becomes a key, almost supernatural, ally to the rebellion.", image: "/characters/thoryo.png", link: "/characters/thoryo" },
    { name: "Tipo Tho", description: "A brave Dara marine commander who dies heroically while saving Théra and her family.", image: "/characters/tipo-tho.png", link: "/characters/tipo-tho" },
    { name: "Sataari", description: "A young Agon shaman who becomes the spiritual guardian of her people's rediscovered history.", image: "/characters/sataari.png", link: "/characters/sataari" },
    { name: "Razutana Pon", description: "A clumsy but courageous Dara scholar who becomes a guardian to the child survivors of Kiri Valley.", image: "/characters/razutana-pon.png", link: "/characters/razutana-pon" },
    { name: "Tiphan Huto", description: "An ambitious and unscrupulous merchant from Ginpen who becomes an unwitting pawn in Jia's secret war.", image: "/characters/tiphan-huto.png", link: "/characters/tiphan-huto" },
    { name: "Mozo Mu", description: "A prodigiously talented young chef forced into servitude by Tiphan Huto.", image: "/characters/mozo-mu.png", link: "/characters/mozo-mu" },
    { name: "Nazu Tei", description: "A wise Dara scholar who tutors the young Savo Ryoto and is martyred during the Lyucu purges.", image: "/characters/nazu-tei.png", link: "/characters/nazu-tei" },
    // Speaking Bones
    { name: "Aya Mazoti", description: "The proud daughter of Gin Mazoti and Luan Zya who becomes a skilled commander in the final war.", image: "/characters/aya-mazoti.png", link: "/characters/aya-mazoti" },
    { name: "Ofluro", description: "A Lyucu defector and master garinafin rider who trains Emperor Phyro's secret new army.", image: "/characters/ofluro.png", link: "/characters/ofluro" },
    { name: "Gori Ruthi", description: "Nephew of Zato Ruthi, a well-meaning but naive Moralist scholar in the Dandelion court.", image: "/characters/gori-ruthi.png", link: "/characters/gori-ruthi" },
    { name: "Prince Gimoto", description: "The son of Kado Garu and nephew of Emperor Ragin, a young prince of the imperial family.", image: "/characters/prince-gimoto.png", link: "/characters/prince-gimoto" },
];

// --- MASTER DATA FOR CONCEPTS LISTING PAGE ---
export const ALL_CONCEPTS_DATA = [
    { name: "The Dandelion", description: "The philosophy of Kuni Garu, representing resilience, adaptability, and strength found in common places.", image: "/concepts/dandelion.png", link: "/concepts/dandelion" },
    { name: "The Chrysanthemum", description: "The philosophy of Mata Zyndu, representing tradition, nobility, and unbending honor in the face of adversity.", image: "/concepts/chrysanthemum.png", link: "/concepts/chrysanthemum" },
    { name: "The Grand Examination", description: "A revolutionary system established by the Dandelion Dynasty to select officials based on merit rather than birth.", image: "/concepts/grand-examination.png", link: "/concepts/grand-examination" },
    { name: "Airships", description: "The pinnacle of 'silkpunk' technology, these lighter-than-air vessels are the key to military supremacy in Dara.", image: "/concepts/airships.png", link: "/concepts/airships" },
    { name: "Lift Gas", description: "The mystical, non-flammable gas from Mount Kiji, the sole source of power for Dara's traditional airships.", image: "/concepts/lift-gas.png", link: "/concepts/lift-gas" },
    { name: "Gitre Uthu", description: "A magical, self-writing book of strategy and philosophy gifted to Luan Zya by the god Lutho.", image: "/concepts/gitre-uthu.png", link: "/concepts/gitre-uthu" },
    { name: "Pawi", description: "The animal companions and physical manifestations of the gods, such as Kiji's falcon or Lutho's sea turtle.", image: "/concepts/pawi.png", link: "/concepts/pawi" },
    { name: "Silkmotic Force", description: "The Daran term for static electricity, developed from street magic into a powerful weapon of war.", image: "/concepts/silkmotic-force.png", link: "/concepts/silkmotic-force" },
    { name: "Swords vs. Abacus", description: "The central political conflict in the Dandelion Court between the military old guard and the new civil bureaucracy.", image: "/concepts/swords-vs-abacus.png", link: "/concepts/swords-vs-abacus" },
    { name: "Corvée Labor", description: "A system of forced, unpaid labor imposed by the Xana Empire that was a major cause of the rebellion.", image: "/concepts/corvee-labor.png", link: "/concepts/corvee-labor" },
    { name: "Cruben", description: "Massive, rideable, sea-turtle-like beasts from Tan Adü, used as powerful and unconventional naval mounts.", image: "/concepts/cruben.png", link: "/concepts/cruben" },
    { name: "Garinafin", description: "Enormous, flying, fire-breathing war beasts from Ukyu-Gondé, the cornerstone of the Lyucu military.", image: "/concepts/garinafin.png", link: "/concepts/garinafin" },
    { name: "The Wall of Storms", description: "A massive, perpetual storm that separates the continents of Dara and Ukyu-Gondé, a seemingly impassable barrier.", image: "/concepts/wall-of-storms.png", link: "/concepts/wall-of-storms" },
    { name: "The Lyucu", description: "A hardy, nomadic, and warlike people from the continent of Ukyu-Gondé who invade Dara.", image: "/concepts/lyucu.png", link: "/concepts/lyucu" },
    { name: "The Agon", description: "A nomadic people from Ukyu-Gondé, the ancient rivals of the Lyucu, who become allies to Théra's rebellion.", image: "/concepts/agon.png", link: "/concepts/agon" },
    { name: "Cultural Exchange", description: "A central theme representing the complex interactions between the diverse peoples of Dara and Ukyu-Gondé.", image: "/concepts/cultural-exchange.png", link: "/concepts/cultural-exchange" },
    { name: "The Blossom Gang", description: "A group of talented outcasts in Ginpen who use their skills in engineering and art to aid the common folk and the resistance.", image: "/concepts/the-blossom-gang.png", link: "/concepts/the-blossom-gang" },
    { name: "Arucuro Tocua Beasts", description: "Massive walking fortresses made of ancient bones, the ultimate weapon of the Agon rebellion.", image: "/concepts/arucuro-tocua-beasts.png", link: "/concepts/arucuro-tocua-beasts" },
    { name: "Resistance Movement", description: "The multifaceted, organized efforts of the people of Dara to resist and overthrow the Lyucu occupation.", image: "/concepts/resistance-movement.png", link: "/concepts/resistance-movement" },
    { name: "Quotes", description: "Memorable and significant quotes from the Dandelion Dynasty series.", image: "/concepts/quotes.png", link: "/concepts/quotes" },

];


// --- FULL, ORDERED LISTS FOR NAVIGATION ---
export const ALL_BOOKS: readonly WikiPage[] = [
    { title: 'The Grace of Kings', path: '/books/the-grace-of-kings', type: 'Book' },
    { title: 'The Wall of Storms', path: '/books/the-wall-of-storms', type: 'Book' },
    { title: 'The Veiled Throne', path: '/books/the-veiled-throne', type: 'Book' },
    { title: 'Speaking Bones', path: '/books/speaking-bones', type: 'Book' },
];

export const ALL_CHARACTERS: readonly WikiPage[] = ALL_CHARACTERS_DATA
    .map(char => ({
        title: char.name,
        path: char.link,
        type: 'Character' as const
    }));

// NEW: Master list of all place data for the main overview page
export const ALL_PLACES_DATA = [
    // The Seven States (Tiro & Xana)
    { name: "Amu", description: "An elegant archipelago kingdom known for its powerful navy and the tragic Princess Kikomi.", image: "/places/amu.png", link: "/places/amu", category: "state" },
    { name: "Cocru", description: "A vast, martial state on the Big Island, homeland of both Kuni Garu and Mata Zyndu.", image: "/places/cocru.png", link: "/places/cocru", category: "state" },
    { name: "Faca", description: "A northern kingdom known for treacherous politics and its unique mastery of the silkmotic force.", image: "/places/faca.png", link: "/places/faca", category: "state" },
    { name: "Gan", description: "The wealthiest of the Tiro states, a land of merchants whose loyalty is often driven by profit.", image: "/places/gan.png", link: "/places/gan", category: "state" },
    { name: "Haan", description: "The intellectual heart of Dara, a kingdom of scholars, inventors, and the home of Luan Zya.", image: "/places/haan.png", link: "/places/haan", category: "state" },
    { name: "Rima", description: "A forested northern kingdom whose fisherman-king, Jizu, became a martyr for the rebellion.", image: "/places/rima.png", link: "/places/rima", category: "state" },
    { name: "Xana", description: "The powerful island nation that first conquered Dara and established the Xana Empire.", image: "/places/xana.png", link: "/places/xana", category: "state" },
    // Major Cities & Regions of Dara
    { name: "Pan", description: "The grand Imperial Capital of Dara, built by the Xana and later the seat of the Dandelion Dynasty.", image: "/places/pan.png", link: "/places/pan", category: "city" },
    { name: "Zudi", description: "A major city in Cocru and the hometown of Kuni Garu, Jia Matiza, and other key figures.", image: "/places/zudi.png", link: "/places/zudi", category: "city" },
    { name: "Caruza", description: "The ancient capital of Cocru, which served as the political headquarters for the Dandelion Rebellion.", image: "/places/caruza.png", link: "/places/caruza", category: "city" },
    { name: "Ginpen", description: "The capital of Haan, a center of learning that later hosts a grassroots cultural and technological renaissance.", image: "/places/ginpen.png", link: "/places/ginpen", category: "city" },
    { name: "Dimushi", description: "A bustling port city and the hometown of Gin Mazoti, with a thriving criminal underworld.", image: "/places/dimushi.png", link: "/places/dimushi", category: "city" },
    { name: "Kriphi", description: "The capital of the Xana home island of Rui, later the seat of the Lyucu occupation.", image: "/places/kriphi.png", link: "/places/kriphi", category: "city" },
    { name: "Nokida", description: "The capital of Géjira and Queen Gin Mazoti's seat of power.", image: "/places/nokida.png", link: "/places/nokida", category: "city" },
    { name: "Gefica", description: "A rich territory that was the subject of the 'Princeps's Promise,' a catalyst for the civil war.", image: "/places/gefica.png", link: "/places/gefica", category: "city" },
    { name: "Gejira", description: "The powerful kingdom granted to Marshal Gin Mazoti after the Dandelion Rebellion.", image: "/places/gejira.png", link: "/places/gejira", category: "city" },
    // Outer Islands & Archipelagos of Dara
    { name: "Dasu", description: "A remote island of exile that Kuni Garu transformed into the crucible of the Dandelion Dynasty.", image: "/places/dasu.png", link: "/places/dasu", category: "island" },
    { name: "Rui", description: "The Xana homeland and the sole source of the mystical lift gas for Dara's airships.", image: "/places/rui.png", link: "/places/rui", category: "island" },
    { name: "Arulugi", description: "The capital island of Amu, site of a key naval battle and a later rebellion.", image: "/places/arulugi.png", link: "/places/arulugi", category: "island" },
    { name: "Crescent Island", description: "A remote northern island used for Zomi Kidosu's education and the site of a major battle in the Lyucu War.", image: "/places/crescent-island.png", link: "/places/crescent-island", category: "island" },
    { name: "Ecofi Island", description: "The small island where Emperor Mapidéré died, sparking the coup that ended his dynasty.", image: "/places/ecofi-island.png", link: "/places/ecofi-island", category: "island" },
    { name: "Tan Adu", description: "A remote southern island inhabited by the legendary cruben-riding people.", image: "/places/tan-adu.png", link: "/places/tan-adu", category: "island" },
    { name: "Tunoa Islands", description: "The ancestral island fiefdom of the Zyndu Clan and the place where Mata Zyndu was raised.", image: "/places/tunoa-islands.png", link: "/places/tunoa-islands", category: "island" },
    { name: "Wolf's Paw", description: "A southern island, site of a major battle and one of Mata Zyndu's most horrific atrocities.", image: "/places/wolfs-paw.png", link: "/places/wolfs-paw", category: "island" },
    // Geographical Landmarks of Dara
    { name: "Kishi Channel", description: "A treacherous strait with a permanent whirlpool, where Mata Zyndu made a horrific sacrifice.", image: "/places/kishi-channel.png", link: "/places/kishi-channel", category: "landmark" },
    { name: "Lake Dako", description: "A mystical crater lake on Mount Kiji, the sole source of airship lift gas.", image: "/places/lake-dako.png", link: "/places/lake-dako", category: "landmark" },
    { name: "Lake Tututika", description: "The sacred lake on whose shores the imperial capital, Pan, was built.", image: "/places/lake-tututika.png", link: "/places/lake-tututika", category: "landmark" },
    { name: "Liru River", description: "A major river that served as the strategic border during the standoff between Kuni Garu and Mata Zyndu.", image: "/places/liru-river.png", link: "/places/liru-river", category: "landmark" },
    { name: "Mount Kiji", description: "A sacred volcano on Rui, the strategically vital source of the lift gas for airships.", image: "/places/mount-kiji.png", link: "/places/mount-kiji", category: "landmark" },
    { name: "Roro Hills", description: "A strategic region in occupied Dara that served as the Lyucu's final stronghold.", image: "/places/roro-hills.png", link: "/places/roro-hills", category: "landmark" },
    { name: "Thoco Pass", description: "The mountain pass where the legendary Marshal Dazu Zyndu was famously betrayed by his own king.", image: "/places/thoco-pass.png", link: "/places/thoco-pass", category: "landmark" },
    { name: "Zathin Gulf", description: "The site of the climactic naval battle against the first Lyucu invasion, where Emperor Ragin died.", image: "/places/zathin-gulf.png", link: "/places/zathin-gulf", category: "landmark" },
    // Lands Beyond the Wall of Storms
    { name: "Ukyu & Gonde", description: "The vast, harsh continent across the sea, home to the Lyucu and Agon peoples.", image: "/places/ukyu-gonde.png", link: "/places/ukyu-gonde", category: "beyond" },
    { name: "Kiri Valley", description: "A hidden valley in the World's Edge Mountains that served as the secret base for the Agon rebellion.", image: "/places/kiri-valley.png", link: "/places/kiri-valley", category: "beyond" },
    { name: "Lurodia Tanta", description: "The vast desert in Ukyu-Gondé where the exiled Agon tribes live.", image: "/places/lurodia-tanta.png", link: "/places/lurodia-tanta", category: "beyond" },
    { name: "Sea of Tears", description: "A large inland sea in Ukyu-Gondé surrounded by mysterious, ancient geoglyphs.", image: "/places/sea-of-tears.png", link: "/places/sea-of-tears", category: "beyond" },
    { name: "Sliyusa Ki", description: "A major oasis in the Lurodia Tanta desert and the first center of the Agon resistance.", image: "/places/sliyusa-ki.png", link: "/places/sliyusa-ki", category: "beyond" },
    { name: "Taten", description: "The roaming tent-city and capital of the Lyucu pékyu, from which the invasion of Dara was planned.", image: "/places/taten.png", link: "/places/taten", category: "beyond" },
    { name: "Taten-ryo-alvovo", description: "The 'City of Ghosts,' an ancient, ruined city where the Agon rediscovered their true history.", image: "/places/taten-ryo-alvovo.png", link: "/places/taten-ryo-alvovo", category: "beyond" },
    { name: "World's Edge Mountains", description: "A massive mountain range in Ukyu-Gondé that served as a refuge for Théra's rebellion.", image: "/places/worlds-edge-mountains.png", link: "/places/worlds-edge-mountains", category: "beyond" },
    // Etc
    { name: "Last Bite", description: "A secret Imperial research facility where Kinri's and Zomi's true parentage was revealed.", image: "/places/last-bite.png", link: "/places/last-bite", category: "etc" },
    { name: "Tiro Cozo", description: "The secret base where Emperor Phyro established his garinafin breeding program in defiance of the regent.", image: "/places/tiro-cozo.png", link: "/places/tiro-cozo", category: "etc" },
    { name: "Kigo Yezu", description: "A Dara village in occupied Rui that was the site of a horrific massacre during the Lyucu purges.", image: "/places/kigo-yezu.png", link: "/places/kigo-yezu", category: "etc" },
];

export const ALL_PLACES: readonly WikiPage[] = ALL_PLACES_DATA
    .map(place => ({
        title: place.name,
        path: place.link,
        type: 'Place' as const
    }));

export const ALL_GODS: readonly WikiPage[] = [
    { title: 'Kiji', path: '/gods/kiji', type: 'God' },
    { title: 'Tututika', path: '/gods/tututika', type: 'God' },
    { title: 'Kana', path: '/gods/kana', type: 'God' },
    { title: 'Rapa', path: '/gods/rapa', type: 'God' },
    { title: 'Rufizo', path: '/gods/rufizo', type: 'God' },
    { title: 'Tazu', path: '/gods/tazu', type: 'God' },
    { title: 'Lutho', path: '/gods/lutho', type: 'God' },
    { title: 'Fithoweo', path: '/gods/fithoweo', type: 'God' },
];

export const ALL_CONCEPTS: readonly WikiPage[] = ALL_CONCEPTS_DATA
    .map(concept => ({
        title: concept.name,
        path: concept.link,
        type: 'Concept' as const
    }));


// --- TYPE DEFINITIONS ---
export interface ReferenceLink {
    book: string;
    chapter: number;
    link: string;
}

export type ContentBlock = 
    | { type: 'text'; content: string }
    | { type: 'ref'; data: ReferenceLink };

export interface InfoBoxLink {
    text: string;
    link: string;
}

export interface Character {
    name: string;
    image: string | StaticImageData;
    introduction: string;
    infoBox: {
        [key: string]: string | InfoBoxLink | InfoBoxLink[];
    };
    appearanceAndPersonality: ContentBlock[];
    history: {
        era: string;
        summary: ContentBlock[];
    }[];
}

export interface God {
    name: string;
    image: string | StaticImageData;
    introduction: string;
    infoBox: {
        [key: string]: string | InfoBoxLink;
    };
    mythology: ContentBlock[];
    appearances: {
        event: string;
        summary: ContentBlock[];
    }[];
}

export interface Place {
    name: string;
    image: string | StaticImageData;
    introduction: string;
    infoBox: {
        [key: string]: string | InfoBoxLink | InfoBoxLink[];
    };
    geography: ContentBlock[];
    culture: ContentBlock[];
    history: {
        event: string;
        summary: ContentBlock[];
    }[];
}

export interface Concept {
    name: string;
    image: string | StaticImageData;
    introduction: string;
    infoBox: {
        [key: string]: string | InfoBoxLink | InfoBoxLink[];
    };
    details: ContentBlock[];
}


// --- PAGE LISTS FOR NAVBAR & SEARCH ---
export const MAIN_CHARACTERS: readonly WikiPage[] = [
    { title: 'Kuni Garu', path: '/characters/kuni-garu', type: 'Character' },
    { title: 'Mata Zyndu', path: '/characters/mata-zyndu', type: 'Character' },
    { title: 'Jia Matiza', path: '/characters/jia-matiza', type: 'Character' },
    { title: 'Luan Zya', path: '/characters/luan-zya', type: 'Character' },
    { title: 'Gin Mazoti', path: '/characters/gin-mazoti', type: 'Character' },
    { title: 'Princess Thera', path: '/characters/princess-thera', type: 'Character' },
    { title: 'Zomi Kidosu', path: '/characters/zomi-kidosu', type: 'Character' },
];

export const PLACES_TIRO_STATES: readonly WikiPage[] = [
    { title: 'Amu', path: '/places/amu', type: 'Place' },
    { title: 'Cocru', path: '/places/cocru', type: 'Place' },
    { title: 'Faca', path: '/places/faca', type: 'Place' },
    { title: 'Gan', path: '/places/gan', type: 'Place' },
    { title: 'Haan', path: '/places/haan', type: 'Place' },
    { title: 'Rima', path: '/places/rima', type: 'Place' },
    { title: 'Xana', path: '/places/xana', type: 'Place' },
];

export const PLACES_BEYOND_DARA: readonly WikiPage[] = [
    { title: 'Ukyu & Gonde', path: '/places/ukyu-gonde', type: 'Place' },
];

export const MAIN_GODS: readonly WikiPage[] = ALL_GODS;

export const OTHER_PAGES: readonly WikiPage[] = [
    { title: 'About This Wiki', path: '/other/about-wiki', type: 'Other' },
    { title: 'About the Author', path: '/other/about-author', type: 'Other' },
    { title: 'All Pages', path: '/other/all-pages', type: 'Other'},
];

// UPDATED: Comprehensive list of ALL pages for site-wide navigation and search
export const ALL_WIKI_PAGES: readonly WikiPage[] = [
    // Manually add the main category listing pages first
    { title: 'Books', path: '/books', type: 'Book' },
    { title: 'Characters', path: '/characters', type: 'Character' },
    { title: 'Places', path: '/places', type: 'Place' },
    { title: 'Gods', path: '/gods', type: 'God' },
    { title: 'Concepts', path: '/concepts', type: 'Concept' },
    { title: 'Maps', path: '/maps', type: 'Map' },
    ...OTHER_PAGES,
    
    // Then, spread in all the individual pages from the detailed lists
    ...ALL_BOOKS,
    ...ALL_CHARACTERS,
    ...ALL_PLACES,
    ...ALL_GODS,
    ...ALL_CONCEPTS,
];