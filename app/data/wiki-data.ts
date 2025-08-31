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
        { name: "Kuni Garu", description: "A charismatic bandit who rises to become the founder of the Dandelion Dynasty.", image: "/characters/kuni-garu.png", link: "/characters/kuni-garu" },
        { name: "Mata Zyndu", description: "A peerless warrior and last son of a noble clan, driven by honor and vengeance.", image: "/characters/mata-zyndu.png", link: "/characters/mata-zyndu" },
        { name: "Jia Matiza", description: "A brilliant scholar and Kuni's first wife, the political architect of the Dandelion Dynasty.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Luan Zya", description: "A master strategist and inventor from Haan who serves as Kuni Garu's chief advisor.", image: "/characters/luan-zya.png", link: "/characters/luan-zya" },
        { name: "Gin Mazoti", description: "A military prodigy who becomes the first female Marshal in the history of Dara.", image: "/characters/gin-mazoti.png", link: "/characters/gin-mazoti" },
        { name: "Emperor Mapidere", description: "The ambitious and ruthless conqueror who first united Dara into an empire.", image: "/characters/emperor-mapidere.png", link: "/characters/emperor-mapidere" },
        { name: "Consort Risana", description: "An illusionist and Kuni Garu's second wife, a woman of great wisdom and subtle power.", image: "/characters/consort-risana.png", link: "/characters/consort-risana" },
        { name: "Phin Zyndu", description: "The uncle of Mata Zyndu and the guardian of his family's legacy of vengeance.", image: "/characters/phin-zyndu.png", link: "/characters/phin-zyndu" },
        { name: "Goran Pira", description: "The Imperial Chatelain who secretly orchestrated the downfall of the Xana Dynasty out of a desire for revenge.", image: "/characters/goran-pira.png", link: "/characters/goran-pira" },
        { name: "Huno Krima", description: "The charismatic corvée laborer who sparked the first major rebellion against the Xana Empire.", image: "/characters/huno-krima.png", link: "/characters/huno-krima" },
        { name: "Princess Kikomi", description: "The beautiful and tragic princess of Amu whose actions have devastating consequences.", image: "/characters/princess-kikomi.png", link: "/characters/princess-kikomi" },
        { name: "Lady Mira", description: "A woman from Tunoa who becomes the only person to understand the conflicted heart of Mata Zyndu.", image: "/characters/lady-mira.png", link: "/characters/lady-mira" },
    ],
    TWOS: [
        { name: "Kuni Garu", description: "Now Emperor Ragin, he faces threats from within his court and from a new invasion force.", image: "/characters/kuni-garu.png", link: "/characters/kuni-garu" },
        { name: "Jia Matiza", description: "As Empress, she navigates treacherous court politics to secure the future of the dynasty.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Princess Thera", description: "The brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "A radical thinker and student of Luan Zya who champions innovation and meritocracy.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Pekyu Tenryo", description: "The powerful and cunning Lyucu leader who orchestrates the invasion of Dara.", image: "/characters/pekyu-tenryo.png", link: "/characters/pekyu-tenryo" },
        { name: "Tanvanaki", description: "The best garinafin pilot among the Lyucu and Pékyu Tenryo's daughter. Also known as Princess Vadyu.", image: "/characters/tanvanaki.png", link: "/characters/tanvanaki" },
        { name: "Prince Phyro", description: "The charismatic and martially gifted son of Emperor Ragin and Consort Risana. He later becomes Emperor Monadétu.", image: "/characters/prince-phyro.png", link: "/characters/prince-phyro" },
        { name: "Gin Mazoti", description: "The powerful Queen of Gejira whose loyalty to the throne is tested.", image: "/characters/gin-mazoti.png", link: "/characters/gin-mazoti" },
        { name: "Luan Zya", description: "A master strategist, inventor, and philosopher from Haan who serves as Kuni Garu's chief advisor.", image: "/characters/luan-zya.png", link: "/characters/luan-zya" },
        { name: "Doru Solofi", description: "A disgraced nobleman and a leader of the rebellious Hegemon Cults.", image: "/characters/doru-solofi.png", link: "/characters/doru-solofi" },
    ],
    TVT: [
        { name: "Princess Thera", description: "Now Empress Üna, she leads an expedition to the Lyucu homeland of Ukyu-Gondé.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Jia Matiza", description: "As Regent, she steers Dara through the Lyucu occupation with ruthless long-term plans.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Princess Fara", description: "Kuni Garu's youngest daughter, an artist who finds herself at the center of a grassroots movement.", image: "/characters/princess-fara.png", link: "/characters/princess-fara" },
        { name: "Kinri", description: "A young man of mixed heritage who discovers his true identity as Savo Ryoto, son of Goztan.", image: "/characters/kinri.png", link: "/characters/kinri" },
        { name: "Goztan Ryoto", description: "A powerful Lyucu thane who navigates the treacherous politics of the occupation and leads the accommodationist faction.", image: "/characters/goztan-ryoto.png", link: "/characters/goztan-ryoto" },
        { name: "Tanvanaki", description: "The pékyu of the Lyucu forces in Dara, struggling to rule a conquered people.", image: "/characters/tanvanaki.png", link: "/characters/tanvanaki" },
        { name: "Prince Timu", description: "The studious and serious Crown Prince of the Dandelion Dynasty. He later takes the Lyucu name Emperor Thaké.", image: "/characters/prince-timu.png", link: "/characters/prince-timu" },
        { name: "Takval Aragoz", description: "A prince of the Agon people who becomes Princess Théra's husband and ally.", image: "/characters/takval-aragoz.png", link: "/characters/takval-aragoz" },
        { name: "Cutanrovo Aga", description: "A fanatical Lyucu thane and leader of the hardline faction in occupied Dara.", image: "/characters/cutanrovo-aga.png", link: "/characters/cutanrovo-aga" },
        { name: "Toof", description: "A Lyucu garinafin pilot who defects to join the Agon resistance.", image: "/characters/toof.png", link: "/characters/toof" },
    ],
    SB: [
        { name: "Jia Matiza", description: "The Dowager Empress whose grand, secret plan to defeat the Lyucu comes to fruition.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Emperor Phyro", description: "Now Emperor Monadétu, he secretly builds an army to reclaim Dara from the Lyucu.", image: "/characters/prince-phyro.png", link: "/characters/prince-phyro" },
        { name: "Princess Thera", description: "Leading a rebellion in Ukyu-Gondé, she seeks to cut off the Lyucu from their source of power.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "As Farsight Secretary, she coordinates Dara's resistance and technological innovation.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Aya Mazoti", description: "The daughter of Gin Mazoti, now a skilled commander seeking to restore her family's honor.", image: "/characters/aya-mazoti.png", link: "/characters/aya-mazoti" },
        { name: "Kinri", description: "A young man of mixed Lyucu-Dara heritage who discovers his true identity as Savo Ryoto, son of Goztan.", image: "/characters/kinri.png", link: "/characters/kinri" },
        { name: "Goztan Ryoto", description: "A powerful Lyucu thane who navigates the treacherous politics of the occupation and leads the accommodationist faction.", image: "/characters/goztan-ryoto.png", link: "/characters/goztan-ryoto" },
        { name: "Tanvanaki", description: "The best garinafin pilot among the Lyucu and Pékyu Tenryo's daughter. Also known as Princess Vadyu.", image: "/characters/tanvanaki.png", link: "/characters/tanvanaki" },
        { name: "Princess Fara", description: "Kuni Garu's youngest daughter, an artist who finds herself at the center of a grassroots movement under the alias 'Dandelion'.", image: "/characters/princess-fara.png", link: "/characters/princess-fara" },
    ]
};

// --- MASTER DATA FOR CHARACTER LISTING PAGE ---
export const ALL_CHARACTERS_DATA = [
    // The Grace of Kings
    { name: "Kuni Garu", description: "A charismatic bandit who rises from obscurity to become Emperor Ragin, founder of the Dandelion Dynasty.", image: "/characters/kuni-garu.png", link: "/characters/kuni-garu" },
    { name: "Mata Zyndu", description: "A peerless warrior and last son of a noble clan, driven by honor and vengeance. He becomes Hegemon of Dara.", image: "/characters/mata-zyndu.png", link: "/characters/mata-zyndu" },
    { name: "Jia Matiza", description: "A brilliant scholar and Kuni's first wife. As Empress and later Regent, she is the ruthless political architect of the Dandelion Dynasty.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
    { name: "Luan Zya", description: "A master strategist, inventor, and philosopher from Haan who serves as Kuni Garu's chief advisor.", image: "/characters/luan-zya.png", link: "/characters/luan-zya" },
    { name: "Gin Mazoti", description: "A military prodigy from the streets of Dimushi who becomes the first female Marshal in the history of Dara.", image: "/characters/gin-mazoti.png", link: "/characters/gin-mazoti" },
    { name: "Consort Risana", description: "An illusionist and Kuni Garu's second wife, a woman of great wisdom and subtle power.", image: "/characters/consort-risana.png", link: "/characters/consort-risana" },
    { name: "Emperor Mapidere", description: "The ambitious and ruthless conqueror from Xana who first united Dara into an empire.", image: "/characters/emperor-mapidere.png", link: "/characters/emperor-mapidere" },
    { name: "Emperor Erishi", description: "The weak and foolish second emperor of the Xana Dynasty, easily manipulated by his regents.", image: "/characters/emperor-erishi.png", link: "/characters/emperor-erishi" },
    { name: "Goran Pira", description: "The Imperial Chatelain who secretly orchestrated the downfall of the Xana Dynasty out of a desire for revenge.", image: "/characters/goran-pira.png", link: "/characters/goran-pira" },
    { name: "Lugo Crupo", description: "The ambitious and ruthless Prime Minister and Regent of the Xana Empire.", image: "/characters/lugo-crupo.png", link: "/characters/lugo-crupo" },
    { name: "Kindo Marana", description: "The Minister of Finance turned surprisingly competent Commander-in-Chief for the Xana Empire.", image: "/characters/kindo-marana.png", link: "/characters/kindo-marana" },
    { name: "Tanno Namen", description: "A legendary and honorable general of the Xana Empire.", image: "/characters/tanno-namen.png", link: "/characters/tanno-namen" },
    { name: "Mun Cakri", description: "A former butcher and one of Kuni Garu's most loyal followers and generals.", image: "/characters/mun-cakri.png", link: "/characters/mun-cakri" },
    { name: "Rin Coda", description: "Kuni Garu's timid and scholarly childhood friend who becomes his Farsight Secretary.", image: "/characters/rin-coda.png", link: "/characters/rin-coda" },
    { name: "Cogo Yelu", description: "A brilliant administrator who becomes Kuni Garu's first Prime Minister.", image: "/characters/cogo-yelu.png", link: "/characters/cogo-yelu" },
    { name: "King Thufi", description: "A humble shepherd who is elevated to King of Cocru during the rebellion.", image: "/characters/king-thufi.png", link: "/characters/king-thufi" },
    { name: "Princess Kikomi", description: "The beautiful and tragic princess of Amu whose actions have devastating consequences.", image: "/characters/princess-kikomi.png", link: "/characters/princess-kikomi" },
    { name: "Phin Zyndu", description: "The uncle of Mata Zyndu and the guardian of his family's legacy of vengeance.", image: "/characters/phin-zyndu.png", link: "/characters/phin-zyndu" },
    { name: "Gozogi Cade", description: "A former street tough and one of Kuni Garu's oldest and most loyal friends.", image: "/characters/gozogi-cade.png", link: "/characters/gozogi-cade" },
    { name: "Than Carucono", description: "A cheerful former stable master who becomes a loyal general and admiral for Kuni Garu.", image: "/characters/than-carucono.png", link: "/characters/than-carucono" },
    { name: "Dafiro Miro", description: "A wise advisor who becomes a key double agent and later Captain of the Palace Guards for Kuni Garu.", image: "/characters/dafiro-miro.png", link: "/characters/dafiro-miro" },
    { name: "Ratho Miro", description: "The impulsive younger brother of Dafiro Miro, a fierce warrior loyal to Mata Zyndu.", image: "/characters/ratho-miro.png", link: "/characters/ratho-miro" },
    { name: "King Jizu", description: "The fisherman-king of Rima whose martyrdom became a symbol for the rebellion.", image: "/characters/king-jizu.png", link: "/characters/king-jizu" },
    { name: "King Mocri", description: "The proud and honorable king of Gan and a key member of the Tiro Alliance.", image: "/characters/king-mocri.png", link: "/characters/king-mocri" },
    { name: "King Shilue", description: "The treacherous king of Faca whose attempt to play both sides led to his downfall.", image: "/characters/king-shilue.png", link: "/characters/king-shilue" },
    { name: "Huno Krima", description: "The charismatic corvée laborer who sparked the first major rebellion against the Xana Empire.", image: "/characters/huno-krima.png", link: "/characters/huno-krima" },
    { name: "Zopa Shigin", description: "A sturdy corvée laborer who becomes Huno Krima's co-conspirator in the first rebellion.", image: "/characters/zopa-shigin.png", link: "/characters/zopa-shigin" },
    { name: "Soto Zyndu", description: "The politically brilliant aunt of Mata Zyndu and a secret advisor to Empress Jia.", image: "/characters/soto-zyndu.png", link: "/characters/soto-zyndu" },
    { name: "Lady Mira", description: "An embroiderer and singer from Tunoa who becomes Mata Zyndu's confidante, representing his only connection to peace and home.", image: "/characters/lady-mira.png", link: "/characters/lady-mira" },
    // The Wall of Storms
    { name: "Princess Thera", description: "The brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia. She later becomes Empress Üna.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
    { name: "Zomi Kidosu", description: "A radical thinker and student of Luan Zya who champions innovation and meritocracy.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
    { name: "Prince Timu", description: "The studious and serious Crown Prince of the Dandelion Dynasty. He later takes the Lyucu name Emperor Thaké.", image: "/characters/prince-timu.png", link: "/characters/prince-timu" },
    { name: "Prince Phyro", description: "The charismatic and martially gifted son of Emperor Ragin and Consort Risana. He later becomes Emperor Monadétu.", image: "/characters/prince-phyro.png", link: "/characters/prince-phyro" },
    { name: "Zato Ruthi", description: "The stern and traditional Imperial Tutor for the children of Emperor Ragin.", image: "/characters/zato-ruthi.png", link: "/characters/zato-ruthi" },
    { name: "Doru Solofi", description: "A disgraced nobleman and a leader of the rebellious Hegemon Cults.", image: "/characters/doru-solofi.png", link: "/characters/doru-solofi" },
    { name: "Noda Mi", description: "The cunning strategist and mastermind behind the Hegemon Cults, later a collaborator with the Lyucu.", image: "/characters/noda-mi.png", link: "/characters/noda-mi" },
    { name: "Theca Kimo", description: "A pragmatic Duke of Gefica who is manipulated into rebellion by Empress Jia.", image: "/characters/theca-kimo.png", link: "/characters/theca-kimo" },
    { name: "Puma Yemu", description: "A former bandit and loyal general to Kuni Garu, known for his raiding tactics.", image: "/characters/puma-yemu.png", link: "/characters/puma-yemu" },
    { name: "Oga Kidosu", description: "Zomi Kidosu's long-lost father, a fisherman from Dasu enslaved by the Lyucu.", image: "/characters/oga-kidosu.png", link: "/characters/oga-kidosu" },
    { name: "Pekyu Tenryo", description: "The powerful and cunning Lyucu leader who orchestrates the invasion of Dara.", image: "/characters/pekyu-tenryo.png", link: "/characters/pekyu-tenryo" },
    { name: "Tanvanaki", description: "The best garinafin pilot among the Lyucu and Pékyu Tenryo's daughter. Also known as Princess Vadyu.", image: "/characters/tanvanaki.png", link: "/characters/tanvanaki" },
    { name: "Cudyu Roatan", description: "Son of Pékyu Tenryo and brother to Tanvanaki, a ruthless Lyucu commander.", image: "/characters/cudyu-roatan.png", link: "/characters/cudyu-roatan" },
    { name: "Ra Olu", description: "A Dara official from Dasu who becomes a collaborator with the Lyucu invaders.", image: "/characters/ra-olu.png", link: "/characters/ra-olu" },
    { name: "Pon Naye", description: "A courageous Dara airship squadron commander in Gin Mazoti's fleet.", image: "/characters/pon-naye.png", link: "/characters/pon-naye" },
    { name: "Takval Aragoz", description: "A prince of the Agon people who becomes Princess Théra's husband and ally.", image: "/characters/takval-aragoz.png", link: "/characters/takval-aragoz" },
    // The Veiled Throne
    { name: "Princess Fara", description: "Kuni Garu's youngest daughter, an artist who finds herself at the center of a grassroots movement under the alias 'Dandelion'.", image: "/characters/princess-fara.png", link: "/characters/princess-fara" },
    { name: "Kinri", description: "A young man of mixed Lyucu-Dara heritage who discovers his true identity as Savo Ryoto, son of Goztan.", image: "/characters/kinri.png", link: "/characters/kinri" },
    { name: "Goztan Ryoto", description: "A powerful Lyucu thane who navigates the treacherous politics of the occupation and leads the accommodationist faction.", image: "/characters/goztan-ryoto.png", link: "/characters/goztan-ryoto" },
    { name: "Volyu Aragoz", description: "The treacherous uncle of Takval Aragoz who collaborates with the Lyucu.", image: "/characters/volyu-aragoz.png", link: "/characters/volyu-aragoz" },
    { name: "Souliyan Aragoz", description: "Mother of Takval Aragoz and a leader of the Agon resistance.", image: "/characters/souliyan-aragoz.png", link: "/characters/souliyan-aragoz" },
    { name: "Tanto Aragoz", description: "The eldest son of Princess Théra and Takval Aragoz.", image: "/characters/tanto-aragoz.png", link: "/characters/tanto-aragoz" },
    { name: "Rokiri Aragoz", description: "The second son of Princess Théra and Takval Aragoz.", image: "/characters/rokiri-aragoz.png", link: "/characters/rokiri-aragoz" },
    { name: "Cutanrovo Aga", description: "A fanatical Lyucu thane and leader of the hardline faction in occupied Dara.", image: "/characters/cutanrovo-aga.png", link: "/characters/cutanrovo-aga" },
    { name: "Toof", description: "A Lyucu garinafin pilot who defects to join the Agon resistance.", image: "/characters/toof.png", link: "/characters/toof" },
    { name: "Radia", description: "A Lyucu warrior and Toof's companion who also defects to the Agon.", image: "/characters/radia.png", link: "/characters/radia" },
    { name: "Cami Phithadapu", description: "A Dara scholar specializing in whales who joins Théra's expedition.", image: "/characters/cami-phithadapu.png", link: "/characters/cami-phithadapu" },
    { name: "Thoryo", description: "A mysterious, non-verbal girl with an incredible gift for mimicry found aboard Théra's ship.", image: "/characters/thoryo.png", link: "/characters/thoryo" },
    { name: "Tipo Tho", description: "A Dara marine commander and a key leader in Théra's expedition.", image: "/characters/tipo-tho.png", link: "/characters/tipo-tho" },
    { name: "Sataari", description: "A young Agon shaman who becomes a leader of the resistance.", image: "/characters/sataari.png", link: "/characters/sataari" },
    { name: "Razutana Pon", description: "A Dara scholar of the Cultivationism school who joins Théra's expedition.", image: "/characters/razutana-pon.png", link: "/characters/razutana-pon" },
    { name: "Tiphan Huto", description: "An ambitious and unscrupulous merchant from Ginpen.", image: "/characters/tiphan-huto.png", link: "/characters/tiphan-huto" },
    { name: "Mozo Mu", description: "A young, prodigiously talented chef and descendant of the legendary Suda Mu.", image: "/characters/mozo-mu.png", link: "/characters/mozo-mu" },
    { name: "Nazu Tei", description: "A wise Dara scholar who becomes a tutor to the young Savo Ryoto (Kinri).", image: "/characters/nazu-tei.png", link: "/characters/nazu-tei" },
    // Speaking Bones
    { name: "Aya Mazoti", description: "The daughter of Gin Mazoti and Luan Zya, now a skilled commander seeking to restore her family's honor.", image: "/characters/aya-mazoti.png", link: "/characters/aya-mazoti" },
    { name: "Ofluro", description: "A Lyucu defector and master garinafin rider who trains Emperor Phyro's new aerial force.", image: "/characters/ofluro.png", link: "/characters/ofluro" },
    { name: "Gori Ruthi", description: "Nephew of Zato Ruthi, a Moralist scholar and official in the Dandelion court.", image: "/characters/gori-ruthi.png", link: "/characters/gori-ruthi" },
    { name: "Prince Gimoto", description: "Prince Gimoto is the son of Kado Garu and the nephew of Emperor Ragin (Kuni Garu).", image: "/characters/prince-gimoto.png", link: "/characters/prince-gimoto" },
];

// --- MASTER DATA FOR CONCEPTS LISTING PAGE ---
export const ALL_CONCEPTS_DATA = [
    { name: "The Dandelion", description: "A symbol of resilience and the core philosophy of Kuni Garu, representing strength found in common places.", image: "/concepts/dandelion.png", link: "/concepts/dandelion" },
    { name: "The Chrysanthemum", description: "The philosophy of Mata Zyndu, representing tradition, nobility, and unbending honor in the face of adversity.", image: "/concepts/chrysanthemum.png", link: "/concepts/chrysanthemum" },
    { name: "The Grand Examination", description: "An imperial system established by the Dandelion Dynasty to select officials based on merit and scholarship rather than birth.", image: "/concepts/grand-examination.png", link: "/concepts/grand-examination" },
    { name: "Airships", description: "The pinnacle of 'silkpunk' technology, these lighter-than-air vessels grant military and economic supremacy.", image: "/concepts/airships.png", link: "/concepts/airships" },
    { name: "Lift Gas", description: "The mystical, lighter-than-air gas from Mount Kiji's Lake Dako, the secret to Xana's air superiority.", image: "/concepts/lift-gas.png", link: "/concepts/lift-gas" },
    { name: "Gitre Uthu", description: "A magical, self-writing book of strategy gifted to Luan Zya by the god Lutho.", image: "/concepts/gitre-uthu.png", link: "/concepts/gitre-uthu" },
    { name: "Pawi", description: "The animal companions and physical manifestations of the gods, such as Kiji's falcon or Lutho's sea turtle.", image: "/concepts/pawi.png", link: "/concepts/pawi" },
    { name: "Silkmotic Force", description: "The practical science of static electricity developed in Faca, used for illusions and later, warfare.", image: "/concepts/silkmotic-force.png", link: "/concepts/silkmotic-force" },
    { name: "Swords vs. Abacus", description: "The central political conflict in the Dandelion Court between the military old guard and the new civil bureaucracy.", image: "/concepts/swords-vs-abacus.png", link: "/concepts/swords-vs-abacus" },
    { name: "Corvée Labor", description: "The system of forced, unpaid labor imposed by the Xana Empire, a major cause of the rebellion.", image: "/concepts/corvee-labor.png", link: "/concepts/corvee-labor" },
    { name: "Cruben", description: "Massive, horned, sea-turtle-like beasts from Tan Adü, ridden as powerful naval mounts.", image: "/concepts/cruben.png", link: "/concepts/cruben" },
    { name: "Garinafin", description: "Enormous, whale-like war beasts domesticated by the Lyucu, capable of flight and breathing fire.", image: "/concepts/garinafin.png", link: "/concepts/garinafin" },
    { name: "The Wall of Storms", description: "A massive, perpetual storm that separates the continents of Dara and Ukyu, a seemingly impassable barrier.", image: "/concepts/wall-of-storms.png", link: "/concepts/wall-of-storms" },
    { name: "The Lyucu", description: "A hardy, nomadic, and warlike people from the continent of Ukyu-Gondé who invade Dara.", image: "/concepts/lyucu.png", link: "/concepts/lyucu" },
    { name: "The Agon", description: "A people from the southern part of Ukyu-Gondé, ancient rivals of the Lyucu.", image: "/concepts/agon.png", link: "/concepts/agon" },
    { name: "Cultural Exchange", description: "The complex interactions and mutual influences between Dara and Lyucu cultures during occupation.", image: "/concepts/cultural-exchange.png", link: "/concepts/cultural-exchange" },
    { name: "The Blossom Gang", description: "A group of talented outcasts in Ginpen who use their skills in engineering, acting, and law to help the common folk.", image: "/concepts/the-blossom-gang.png", link: "/concepts/the-blossom-gang" },
    { name: "Arucuro Tocua Beasts", description: "Massive walking fortresses made of ancient bones and woven cloud, powered by the silkmotic force and created by the Agon rebels.", image: "/concepts/arucuro-tocua-beasts.png", link: "/concepts/arucuro-tocua-beasts" },
    { name: "Lyucu Culture", description: "The cultural traditions, beliefs, and way of life of the Lyucu people from beyond the Wall of Storms.", image: "/concepts/lyucu-culture.png", link: "/concepts/lyucu-culture" },
    { name: "Resistance Movement", description: "The organized efforts of the Dara people to resist and overthrow Lyucu occupation.", image: "/concepts/resistance-movement.png", link: "/concepts/resistance-movement" },
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
    { name: "Amu", description: "An elegant and ancient state known for its sophisticated culture and powerful navy.", image: "/places/amu.png", link: "/places/amu", category: "state" },
    { name: "Cocru", description: "A martial state on the southern plains, famed for its proud warrior traditions.", image: "/places/cocru.png", link: "/places/cocru", category: "state" },
    { name: "Faca", description: "A craggy, northern state known for its hardy people and mastery of the silkmotic force.", image: "/places/faca.png", link: "/places/faca", category: "state" },
    { name: "Gan", description: "A wealthy and sophisticated island state, renowned for its naval power and trade.", image: "/places/gan.png", link: "/places/gan", category: "state" },
    { name: "Haan", description: "A woodsy and learned state known for its philosophers, inventors, and academies.", image: "/places/haan.png", link: "/places/haan", category: "state" },
    { name: "Rima", description: "A mountainous, northern state famous for its rich mines and master bladesmiths.", image: "/places/rima.png", link: "/places/rima", category: "state" },
    { name: "Xana", description: "The northwestern island state that conquered Dara and established the first empire.", image: "/places/xana.png", link: "/places/xana", category: "state" },
    // Major Cities & Regions of Dara
    { name: "Pan", description: "The 'Immaculate City,' the Imperial capital built by Emperor Mapidere.", image: "/places/pan.png", link: "/places/pan", category: "city" },
    { name: "Zudi", description: "A major city in northern Cocru and the childhood home of Kuni Garu.", image: "/places/zudi.png", link: "/places/zudi", category: "city" },
    { name: "Caruza", description: "The old capital of Cocru, center of the rebellion against the Xana Empire.", image: "/places/caruza.png", link: "/places/caruza", category: "city" },
    { name: "Ginpen", description: "The capital of Haan, a center of learning and innovation.", image: "/places/ginpen.png", link: "/places/ginpen", category: "city" },
    { name: "Dimushi", description: "A major port city known for its bustling trade and rough-and-tumble character.", image: "/places/dimushi.png", link: "/places/dimushi", category: "city" },
    { name: "Kriphi", description: "The capital of Xana on the island of Rui, later the seat of the Lyucu occupation.", image: "/places/kriphi.png", link: "/places/kriphi", category: "city" },
    { name: "Nokida", description: "A city in Gejira that becomes Queen Gin Mazoti's seat of power.", image: "/places/nokida.png", link: "/places/nokida", category: "city" },
    { name: "Gefica", description: "A rich and strategic territory promised to Kuni Garu by the Princeps.", image: "/places/gefica.png", link: "/places/gefica", category: "city" },
    { name: "Gejira", description: "The kingdom ruled by Marshal Gin Mazoti after the Dandelion Rebellion.", image: "/places/gejira.png", link: "/places/gejira", category: "city" },
    // Outer Islands & Archipelagos of Dara
    { name: "Dasu", description: "A remote island of exile that became the crucible of the Dandelion Dynasty.", image: "/places/dasu.png", link: "/places/dasu", category: "island" },
    { name: "Rui", description: "The Xana homeland and source of the mystical lift gas for Dara's airships.", image: "/places/rui.png", link: "/places/rui", category: "island" },
    { name: "Arulugi", description: "The main island of the state of Amu, known for its naval traditions.", image: "/places/arulugi.png", link: "/places/arulugi", category: "island" },
    { name: "Crescent Island", description: "A largely unsettled northern island that becomes a key battleground.", image: "/places/crescent-island.png", link: "/places/crescent-island", category: "island" },
    { name: "Ecofi Island", description: "A small island where Emperor Mapidere died, sparking a coup.", image: "/places/ecofi-island.png", link: "/places/ecofi-island", category: "island" },
    { name: "Tan Adu", description: "A remote southern island inhabited by cruben-riding people.", image: "/places/tan-adu.png", link: "/places/tan-adu", category: "island" },
    { name: "Tunoa Islands", description: "The ancestral island fiefdom of the Zyndu Clan, known for its fierce loyalty.", image: "/places/tunoa-islands.png", link: "/places/tunoa-islands", category: "island" },
    { name: "Wolf's Paw", description: "The southern island that is part of the state of Gan, site of a major battle.", image: "/places/wolfs-paw.png", link: "/places/wolfs-paw", category: "island" },
    // Geographical Landmarks of Dara
    { name: "Kishi Channel", description: "The treacherous channel made unnavigable by a great whirlpool.", image: "/places/kishi-channel.png", link: "/places/kishi-channel", category: "landmark" },
    { name: "Lake Dako", description: "A mystical lake within the crater of Mount Kiji, source of lift gas.", image: "/places/lake-dako.png", link: "/places/lake-dako", category: "landmark" },
    { name: "Lake Tututika", description: "A sacred lake named after the goddess, where the capital of Pan was built.", image: "/places/lake-tututika.png", link: "/places/lake-tututika", category: "landmark" },
    { name: "Liru River", description: "A major river system that serves as a strategic border in Cocru.", image: "/places/liru-river.png", link: "/places/liru-river", category: "landmark" },
    { name: "Mount Kiji", description: "A snow-peaked volcano on Rui, the sole source of the lift gas for airships.", image: "/places/mount-kiji.png", link: "/places/mount-kiji", category: "landmark" },
    { name: "Roro Hills", description: "A strategic region that became the final battleground of the Lyucu War.", image: "/places/roro-hills.png", link: "/places/roro-hills", category: "landmark" },
    { name: "Thoco Pass", description: "The mountain pass where Marshal Dazu Zyndu was famously betrayed.", image: "/places/thoco-pass.png", link: "/places/thoco-pass", category: "landmark" },
    { name: "Zathin Gulf", description: "A significant body of water where the final battle against the first Lyucu invasion was fought.", image: "/places/zathin-gulf.png", link: "/places/zathin-gulf", category: "landmark" },
    // Lands Beyond the Wall of Storms
    { name: "Ukyu & Gonde", description: "The vast, harsh scrublands across the eastern sea, home to the Lyucu and Agon peoples.", image: "/places/ukyu-gonde.png", link: "/places/ukyu-gonde", category: "beyond" },
    { name: "Kiri Valley", description: "A hidden valley where Théra and Takval establish their secret rebel base.", image: "/places/kiri-valley.png", link: "/places/kiri-valley", category: "beyond" },
    { name: "Last Bite", description: "A secret Imperial research facility focused on advanced technology.", image: "/places/last-bite.png", link: "/places/last-bite", category: "beyond" },
    { name: "Lurodia Tanta", description: "The vast desert in Ukyu-Gondé where the exiled Agon live.", image: "/places/lurodia-tanta.png", link: "/places/lurodia-tanta", category: "beyond" },
    { name: "Sea of Tears", description: "A large inland sea in Ukyu-Gondé with mysterious, ancient geoglyphs.", image: "/places/sea-of-tears.png", link: "/places/sea-of-tears", category: "beyond" },
    { name: "Sliyusa Ki", description: "A major oasis in the Lurodia Tanta desert and a center for the Agon resistance.", image: "/places/sliyusa-ki.png", link: "/places/sliyusa-ki", category: "beyond" },
    { name: "Taten", description: "The roaming tent-city and capital of the Lyucu pékyu in Ukyu-Gondé.", image: "/places/taten.png", link: "/places/taten", category: "beyond" },
    { name: "Taten-ryo-alvovo", description: "The 'City of Ghosts,' an ancient, ruined city of great spiritual power to the Agon.", image: "/places/taten-ryo-alvovo.png", link: "/places/taten-ryo-alvovo", category: "beyond" },
    { name: "Tiro Cozo", description: "The secret base where Emperor Phyro established his garinafin breeding program.", image: "/places/tiro-cozo.png", link: "/places/tiro-cozo", category: "beyond" },
    { name: "World's Edge Mountains", description: "A massive mountain range that marks the eastern boundary of Ukyu-Gondé.", image: "/places/worlds-edge-mountains.png", link: "/places/worlds-edge-mountains", category: "beyond" },
    { name: "Kigo Yezu", description: "A Lyucu village in occupied Rui that was the site of a massacre.", image: "/places/kigo-yezu.png", link: "/places/kigo-yezu", category: "beyond" },
];

export const ALL_PLACES: readonly WikiPage[] = ALL_PLACES_DATA
    .map(place => ({
        title: place.name,
        path: place.link,
        type: 'Place' as const
    }));

export const ALL_GODS: readonly WikiPage[] = [
    { title: 'Fithoweo', path: '/gods/fithoweo', type: 'God' },
    { title: 'Kana', path: '/gods/kana', type: 'God' },
    { title: 'Kiji', path: '/gods/kiji', type: 'God' },
    { title: 'Lutho', path: '/gods/lutho', type: 'God' },
    { title: 'Rapa', path: '/gods/rapa', type: 'God' },
    { title: 'Rufizo', path: '/gods/rufizo', type: 'God' },
    { title: 'Tazu', path: '/gods/tazu', type: 'God' },
    { title: 'Tututika', path: '/gods/tututika', type: 'God' },
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