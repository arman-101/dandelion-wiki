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
        { name: "Emperor Mapidéré", description: "The ambitious and ruthless conqueror who first united Dara into an empire.", image: "/characters/emperor-mapidere.png", link: "/characters/emperor-mapidere" },
        { name: "Princess Kikomi", description: "The beautiful and tragic princess of Amu whose actions have devastating consequences.", image: "/characters/princess-kikomi.png", link: "/characters/princess-kikomi" },
        { name: "Cogo Yelu", description: "A brilliant administrator and advisor who serves as one of Kuni Garu's most trusted advisors.", image: "/characters/kuni-garu.png", link: "/characters/cogo-yelu" },
        { name: "Huno Krima", description: "The charismatic leader who sparked the first major rebellion against the Xana Empire.", image: "/characters/kuni-garu.png", link: "/characters/huno-krima" },
        { name: "Zopa Shigin", description: "A sturdy corvée laborer who becomes Huno Krima's co-conspirator in the first rebellion.", image: "/characters/kuni-garu.png", link: "/characters/zopa-shigin" },
        { name: "Ratho Miro", description: "The younger brother of Dafiro Miro and one of the first to shed blood in the rebellion.", image: "/characters/kuni-garu.png", link: "/characters/ratho-miro" },
        { name: "Théca Kimo", description: "A pragmatic Duke of Géfica who defects from Mata Zyndu's side to join Kuni Garu.", image: "/characters/kuni-garu.png", link: "/characters/theca-kimo" },
    ],
    TWOS: [
        { name: "Kuni Garu", description: "A charismatic bandit who rises to become the founder of the Dandelion Dynasty.", image: "/characters/kuni-garu.png", link: "/characters/kuni-garu" },
        { name: "Gin Mazoti", description: "A military prodigy who becomes the first female Marshal in the history of Dara.", image: "/characters/gin-mazoti.png", link: "/characters/gin-mazoti" },
        { name: "Princess Théra", description: "The brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "A radical thinker and student of Luan Zya who champions innovation and meritocracy.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Prince Timu", description: "The studious and serious Crown Prince of the Dandelion Dynasty.", image: "/characters/prince-timu.png", link: "/characters/prince-timu" },
        { name: "Prince Phyro", description: "The charismatic and martially gifted son of Emperor Ragin and Consort Risana.", image: "/characters/prince-phyro.png", link: "/characters/prince-phyro" },
        { name: "Princess Fara", description: "A Lyucu princess who becomes a key figure in the conflict between Dara and Ukyu.", image: "/characters/kuni-garu.png", link: "/characters/princess-fara" },
        { name: "Vadyu Roatan", description: "A Lyucu warrior and leader who plays a crucial role in the invasion of Dara.", image: "/characters/kuni-garu.png", link: "/characters/vadyu-roatan" },
        { name: "Pékyu Tenryo", description: "The powerful Lyucu leader who orchestrates the invasion of Dara.", image: "/characters/kuni-garu.png", link: "/characters/pekyu-tenryo" },
        { name: "Tanvanaki", description: "A Lyucu princess and leader who becomes a central figure in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/tanvanaki" },
    ],
    TVT: [
        { name: "Princess Théra", description: "The brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "A radical thinker and student of Luan Zya who champions innovation and meritocracy.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Emperor Monad", description: "The son of Emperor Ragin who faces the challenges of ruling during the Lyucu occupation.", image: "/characters/kuni-garu.png", link: "/characters/emperor-monad" },
        { name: "Princess Aya", description: "A skilled warrior and daughter of Gin Mazoti who fights against the Lyucu occupation.", image: "/characters/kuni-garu.png", link: "/characters/princess-aya" },
        { name: "Takval", description: "A Lyucu leader who becomes a key figure in the occupation and governance of Dara.", image: "/characters/kuni-garu.png", link: "/characters/takval" },
        { name: "Empress Üna", description: "Princess Théra's new title as she takes on leadership during the resistance.", image: "/characters/kuni-garu.png", link: "/characters/empress-una" },
        { name: "Kinri", description: "A young man who discovers his true identity as Savo Ryoto during the resistance.", image: "/characters/kuni-garu.png", link: "/characters/kinri" },
        { name: "Dandelion", description: "A mysterious figure who becomes central to the resistance movement.", image: "/characters/kuni-garu.png", link: "/characters/dandelion" },
    ],
    SB: [
        { name: "Princess Théra", description: "The brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "A radical thinker and student of Luan Zya who champions innovation and meritocracy.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Princess Aya", description: "A skilled warrior and daughter of Gin Mazoti who fights against the Lyucu occupation.", image: "/characters/kuni-garu.png", link: "/characters/princess-aya" },
        { name: "Emperor Thak", description: "A ruler who emerges during the final conflicts of the Dandelion Dynasty.", image: "/characters/kuni-garu.png", link: "/characters/emperor-thak" },
        { name: "The Fish-Herder", description: "A mysterious figure who plays a crucial role in the final events of the series.", image: "/characters/kuni-garu.png", link: "/characters/the-fish-herder" },
        { name: "The Sword-Saint", description: "A legendary warrior whose actions shape the final outcome of the conflict.", image: "/characters/kuni-garu.png", link: "/characters/the-sword-saint" },
    ]
};

// --- CHARACTERS ORGANIZED BY BOOK (FULL LIST FOR REFERENCE) ---
export const CHARACTERS_BY_BOOK = {
    TGOK: [
        { name: "Kuni Garu", description: "A charismatic bandit who rises to become the founder of the Dandelion Dynasty.", image: "/characters/kuni-garu.png", link: "/characters/kuni-garu" },
        { name: "Mata Zyndu", description: "A peerless warrior and last son of a noble clan, driven by honor and vengeance.", image: "/characters/mata-zyndu.png", link: "/characters/mata-zyndu" },
        { name: "Jia Matiza", description: "A brilliant scholar and Kuni's first wife, the political architect of the Dandelion Dynasty.", image: "/characters/jia-matiza.png", link: "/characters/jia-matiza" },
        { name: "Luan Zya", description: "A master strategist and inventor from Haan who serves as Kuni Garu's chief advisor.", image: "/characters/luan-zya.png", link: "/characters/luan-zya" },
        { name: "Emperor Mapidéré", description: "The ambitious and ruthless conqueror who first united Dara into an empire.", image: "/characters/emperor-mapidere.png", link: "/characters/emperor-mapidere" },
        { name: "Emperor Erishi", description: "The weak and foolish second emperor of the Xana Dynasty.", image: "/characters/emperor-erishi.png", link: "/characters/emperor-erishi" },
        { name: "Goran Pira", description: "The Imperial Chatelain who secretly orchestrated the downfall of the Xana Dynasty.", image: "/characters/goran-pira.png", link: "/characters/goran-pira" },
        { name: "Lügo Crupo", description: "The ambitious and ruthless Prime Minister and Regent of the Xana Empire.", image: "/characters/lugo-crupo.png", link: "/characters/lugo-crupo" },
        { name: "Kindo Marana", description: "The Minister of Finance turned surprisingly competent Commander-in-Chief.", image: "/characters/kindo-marana.png", link: "/characters/kindo-marana" },
        { name: "Tanno Namen", description: "A legendary and honorable general of the Xana Empire.", image: "/characters/tanno-namen.png", link: "/characters/tanno-namen" },
        { name: "Mün Çakri", description: "A former butcher and one of Kuni Garu's most loyal followers and bodyguards.", image: "/characters/mun-cakri.png", link: "/characters/mun-cakri" },
        { name: "Rin Coda", description: "Kuni Garu's timid and scholarly childhood friend who becomes a trusted advisor.", image: "/characters/rin-coda.png", link: "/characters/rin-coda" },
        { name: "King Thufi", description: "A humble shepherd who is elevated to King of Cocru during the rebellion.", image: "/characters/king-thufi.png", link: "/characters/king-thufi" },
        { name: "Princess Kikomi", description: "The beautiful and tragic princess of Amu whose actions have devastating consequences.", image: "/characters/princess-kikomi.png", link: "/characters/princess-kikomi" },
        { name: "Phin Zyndu", description: "The uncle of Mata Zyndu and the guardian of his family's legacy of vengeance.", image: "/characters/phin-zyndu.png", link: "/characters/phin-zyndu" },
        { name: "Gozogi Çadé", description: "A former street tough and one of Kuni Garu's oldest and most loyal friends.", image: "/characters/gozogi-cade.png", link: "/characters/gozogi-cade" },
        { name: "Than Carucono", description: "A cheerful former street performer who becomes a loyal general for Kuni Garu.", image: "/characters/than-carucono.png", link: "/characters/than-carucono" },
        { name: "Dafiro Miro", description: "A wise advisor to King Thufi who becomes a key double agent for Kuni Garu.", image: "/characters/dafiro-miro.png", link: "/characters/dafiro-miro" },
        { name: "King Jizu", description: "The fisherman-king of Rima whose martyrdom became a symbol for the rebellion.", image: "/characters/king-jizu.png", link: "/characters/king-jizu" },
        { name: "King Mocri", description: "The proud and honorable king of Gan and a key member of the Tiro Alliance.", image: "/characters/king-mocri.png", link: "/characters/king-mocri" },
        { name: "King Shilué", description: "The treacherous king of Faça whose attempt to play both sides led to his downfall.", image: "/characters/king-shilue.png", link: "/characters/king-shilue" },
    ],
    TWOS: [
        { name: "Gin Mazoti", description: "A military prodigy who becomes the first female Marshal in the history of Dara.", image: "/characters/gin-mazoti.png", link: "/characters/gin-mazoti" },
        { name: "Princess Théra", description: "The brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "A radical thinker and student of Luan Zya who champions innovation and meritocracy.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Consort Risana", description: "An illusionist and Kuni Garu's second wife, a woman of great wisdom and subtle power.", image: "/characters/consort-risana.png", link: "/characters/consort-risana" },
        { name: "Prince Timu", description: "The studious and serious Crown Prince of the Dandelion Dynasty.", image: "/characters/prince-timu.png", link: "/characters/prince-timu" },
        { name: "Prince Phyro", description: "The charismatic and martially gifted son of Emperor Ragin and Consort Risana.", image: "/characters/prince-phyro.png", link: "/characters/prince-phyro" },
        { name: "Soto Zyndu", description: "The politically brilliant aunt of Mata Zyndu and a secret advisor to Empress Jia.", image: "/characters/soto-zyndu.png", link: "/characters/soto-zyndu" },
        { name: "Zato Ruthi", description: "The stern and traditional Imperial Tutor for the children of Emperor Ragin.", image: "/characters/zato-ruthi.png", link: "/characters/zato-ruthi" },
        { name: "Doru Solofi", description: "A disgraced nobleman and a leader of the rebellious Hegemon Cults.", image: "/characters/doru-solofi.png", link: "/characters/doru-solofi" },
        { name: "Noda Mi", description: "The cunning strategist and mastermind behind the Hegemon Cults.", image: "/characters/noda-mi.png", link: "/characters/noda-mi" },
        { name: "Princess Fara", description: "A Lyucu princess who becomes a key figure in the conflict between Dara and Ukyu.", image: "/characters/kuni-garu.png", link: "/characters/princess-fara" },
        { name: "Vadyu Roatan", description: "A Lyucu warrior and leader who plays a crucial role in the invasion of Dara.", image: "/characters/kuni-garu.png", link: "/characters/vadyu-roatan" },
        { name: "Cudyü Roatan", description: "A Lyucu commander and brother to Vadyu, involved in the conquest of Dara.", image: "/characters/kuni-garu.png", link: "/characters/cudyu-roatan" },
        { name: "Oga Kidosu", description: "A Lyucu warrior and leader who becomes involved in the invasion of Dara.", image: "/characters/kuni-garu.png", link: "/characters/oga-kidosu" },
        { name: "Pékyu Tenryo", description: "The powerful Lyucu leader who orchestrates the invasion of Dara.", image: "/characters/kuni-garu.png", link: "/characters/pekyu-tenryo" },
        { name: "Ra Olu", description: "A Lyucu warrior and commander who participates in the conquest of Dara.", image: "/characters/kuni-garu.png", link: "/characters/ra-olu" },
        { name: "Pon Naye", description: "A Lyucu leader and advisor who becomes involved in the governance of conquered Dara.", image: "/characters/kuni-garu.png", link: "/characters/pon-naye" },
        { name: "Tanvanaki", description: "A Lyucu princess and leader who becomes a central figure in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/tanvanaki" },
        { name: "Takval Aragoz", description: "A Lyucu leader who becomes a key figure in the occupation and governance of Dara.", image: "/characters/kuni-garu.png", link: "/characters/takval-aragoz" },
        { name: "Empress Üna", description: "Princess Théra's new title as she takes on leadership during the resistance.", image: "/characters/kuni-garu.png", link: "/characters/empress-una" },
        { name: "Puma Yemu", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/puma-yemu" },
    ],
    TVT: [
        { name: "Emperor Monad", description: "The son of Emperor Ragin who faces the challenges of ruling during the Lyucu occupation.", image: "/characters/kuni-garu.png", link: "/characters/emperor-monad" },
        { name: "Princess Aya", description: "A skilled warrior and daughter of Gin Mazoti who fights against the Lyucu occupation.", image: "/characters/kuni-garu.png", link: "/characters/princess-aya" },
        { name: "Takval", description: "A Lyucu leader who becomes a key figure in the occupation and governance of Dara.", image: "/characters/kuni-garu.png", link: "/characters/takval" },
        { name: "Tanvanaki", description: "A Lyucu princess and leader who plays a significant role in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/tanvanaki" },
        { name: "Suca Tiron", description: "A Lyucu warrior and leader involved in the governance of occupied Dara.", image: "/characters/kuni-garu.png", link: "/characters/suca-tiron" },
        { name: "Ragi", description: "A Lyucu leader and advisor who becomes involved in the political affairs of occupied Dara.", image: "/characters/kuni-garu.png", link: "/characters/ragi" },
        { name: "Goztan Ryoto", description: "A Lyucu leader and commander who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/goztan-ryoto" },
        { name: "Oga Kidosu", description: "A Lyucu warrior and leader who becomes involved in the invasion of Dara.", image: "/characters/kuni-garu.png", link: "/characters/oga-kidosu" },
        { name: "Pékyu Tenryo", description: "The powerful Lyucu leader who orchestrates the invasion of Dara.", image: "/characters/kuni-garu.png", link: "/characters/pekyu-tenryo" },
        { name: "Kita Thu", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/kita-thu" },
        { name: "Naroca Huza", description: "A Lyucu commander and leader who participates in the governance of occupied Dara.", image: "/characters/kuni-garu.png", link: "/characters/naroca-huza" },
        { name: "Puma Yemu", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/puma-yemu" },
        { name: "Ra Olu", description: "A Lyucu warrior and commander who participates in the conquest of Dara.", image: "/characters/kuni-garu.png", link: "/characters/ra-olu" },
        { name: "Pon Naye", description: "A Lyucu leader and advisor who becomes involved in the governance of conquered Dara.", image: "/characters/kuni-garu.png", link: "/characters/pon-naye" },
        { name: "Cudyü Roatan", description: "A Lyucu commander and brother to Vadyu, involved in the conquest of Dara.", image: "/characters/kuni-garu.png", link: "/characters/cudyu-roatan" },
        { name: "Takval Aragoz", description: "A Lyucu leader who becomes a key figure in the occupation and governance of Dara.", image: "/characters/kuni-garu.png", link: "/characters/takval-aragoz" },
        { name: "Empress Üna", description: "Princess Théra's new title as she takes on leadership during the resistance.", image: "/characters/kuni-garu.png", link: "/characters/empress-una" },
        { name: "Volyu Aragoz", description: "A Lyucu leader and member of the Aragoz family involved in the occupation.", image: "/characters/kuni-garu.png", link: "/characters/volyu-aragoz" },
        { name: "Souliyan Aragoz", description: "A Lyucu leader and member of the Aragoz family involved in the occupation.", image: "/characters/kuni-garu.png", link: "/characters/souliyan-aragoz" },
        { name: "Tanto Aragoz", description: "A Lyucu leader and member of the Aragoz family involved in the occupation.", image: "/characters/kuni-garu.png", link: "/characters/tanto-aragoz" },
        { name: "Rokiri Aragoz", description: "A Lyucu leader and member of the Aragoz family involved in the occupation.", image: "/characters/kuni-garu.png", link: "/characters/rokiri-aragoz" },
        { name: "Cutanrovo Aga", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/cutanrovo-aga" },
        { name: "Toof", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/toof" },
        { name: "Radia", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/radia" },
        { name: "Çami Phithadapu", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/cami-phithadapu" },
        { name: "Thoryo", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/thoryo" },
        { name: "Tipo Tho", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/tipo-tho" },
        { name: "Sataari", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/sataari" },
        { name: "Razutana Pon", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/razutana-pon" },
        { name: "Tiphan Huto", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/tiphan-huto" },
        { name: "Mozo Mu", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/mozo-mu" },
        { name: "Rati Yera", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/rati-yera" },
        { name: "Widi Tucru", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/widi-tucru" },
        { name: "Arona Taré", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/arona-tare" },
        { name: "Mota Kiphi", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/mota-kiphi" },
        { name: "Kinri", description: "A young man who discovers his true identity as Savo Ryoto during the resistance.", image: "/characters/kuni-garu.png", link: "/characters/kinri" },
        { name: "Dandelion", description: "A mysterious figure who becomes central to the resistance movement.", image: "/characters/kuni-garu.png", link: "/characters/dandelion" },
        { name: "Nazu Tei", description: "A Lyucu warrior and leader who becomes involved in the occupation of Dara.", image: "/characters/kuni-garu.png", link: "/characters/nazu-tei" },
        { name: "Widow Wasu", description: "A mysterious figure who becomes involved in the resistance movement during the Lyucu occupation.", image: "/characters/kuni-garu.png", link: "/characters/widow-wasu" },
        { name: "Mati", description: "A character who becomes involved in the resistance movement during the Lyucu occupation.", image: "/characters/kuni-garu.png", link: "/characters/mati" },
    ],
    SB: [
        { name: "Emperor Thak", description: "A ruler who emerges during the final conflicts of the Dandelion Dynasty.", image: "/characters/kuni-garu.png", link: "/characters/emperor-thak" },
        { name: "Princess Théra", description: "The brilliant and adventurous eldest daughter of Emperor Ragin and Empress Jia.", image: "/characters/princess-thera.png", link: "/characters/princess-thera" },
        { name: "Zomi Kidosu", description: "A radical thinker and student of Luan Zya who champions innovation and meritocracy.", image: "/characters/zomi-kidosu.png", link: "/characters/zomi-kidosu" },
        { name: "Princess Aya", description: "A skilled warrior and daughter of Gin Mazoti who fights against the Lyucu occupation.", image: "/characters/kuni-garu.png", link: "/characters/princess-aya" },
        { name: "The Fish-Herder", description: "A mysterious figure who plays a crucial role in the final events of the series.", image: "/characters/kuni-garu.png", link: "/characters/the-fish-herder" },
        { name: "The Sword-Saint", description: "A legendary warrior whose actions shape the final outcome of the conflict.", image: "/characters/kuni-garu.png", link: "/characters/the-sword-saint" },
        { name: "Ouro", description: "A mysterious figure who becomes involved in the final events of the series.", image: "/characters/kuni-garu.png", link: "/characters/ouro" },
        { name: "Gori Ruthi", description: "A character who appears during the final events of the Dandelion Dynasty in Speaking Bones.", image: "/characters/kuni-garu.png", link: "/characters/gori-ruthi" },
    ]
};

// --- MASTER DATA FOR CHARACTER LISTING PAGE ---
export const ALL_CHARACTERS_DATA = [
    ...CHARACTERS_BY_BOOK.TGOK,
    ...CHARACTERS_BY_BOOK.TWOS,
    ...CHARACTERS_BY_BOOK.TVT,
    ...CHARACTERS_BY_BOOK.SB
].filter((character, index, self) => 
    index === self.findIndex(c => c.link === character.link)
);

// --- MASTER DATA FOR CONCEPTS LISTING PAGE ---
export const ALL_CONCEPTS_DATA = [
    { name: "The Dandelion", description: "A symbol of resilience and the core philosophy of Kuni Garu, representing strength found in common places.", image: "/concepts/dandelion.png", link: "/concepts/dandelion" },
    { name: "The Chrysanthemum", description: "The philosophy of Mata Zyndu, representing tradition, nobility, and unbending honor in the face of adversity.", image: "/concepts/chrysanthemum.png", link: "/concepts/chrysanthemum" },
    { name: "The Grand Examination", description: "An imperial system established by the Dandelion Dynasty to select officials based on merit and scholarship rather than birth.", image: "/concepts/grand-examination.png", link: "/concepts/grand-examination" },
    { name: "Airships", description: "The pinnacle of 'silkpunk' technology, these lighter-than-air vessels grant military and economic supremacy.", image: "/concepts/airships.png", link: "/concepts/airships" },
    { name: "Lift Gas", description: "The mystical, lighter-than-air gas from Mount Kiji's Lake Dako, the secret to Xana's air superiority.", image: "/concepts/lift-gas.png", link: "/concepts/lift-gas" },
    { name: "Gitré Üthu", description: "A magical, self-writing book of strategy gifted to Luan Zya by the god Lutho.", image: "/concepts/gitre-uthu.png", link: "/concepts/gitre-uthu" },
    { name: "Pawi", description: "The animal companions and physical manifestations of the gods, such as Kiji's falcon or Lutho's sea turtle.", image: "/concepts/pawi.png", link: "/concepts/pawi" },
    { name: "Silkmotic Force", description: "The practical science of static electricity developed in Faça, used for illusions and later, warfare.", image: "/concepts/silkmotic-force.png", link: "/concepts/silkmotic-force" },
    { name: "Swords vs. Abacus", description: "The central political conflict in the Dandelion Court between the military old guard and the new civil bureaucracy.", image: "/concepts/swords-vs-abacus.png", link: "/concepts/swords-vs-abacus" },
    { name: "Corvée Labor", description: "The system of forced, unpaid labor imposed by the Xana Empire, a major cause of the rebellion.", image: "/concepts/corvee-labor.png", link: "/concepts/corvee-labor" },
    { name: "Cruben", description: "Massive, horned, sea-turtle-like beasts from Tan Adü, ridden as powerful naval mounts.", image: "/concepts/cruben.png", link: "/concepts/cruben" },
    { name: "Garinafin", description: "Enormous, whale-like war beasts domesticated by the Lyucu, capable of leveling cities.", image: "/concepts/garinafin.png", link: "/concepts/garinafin" },
    { name: "The Wall of Storms", description: "A massive, perpetual storm that separates the continents of Dara and Ukyu, a seemingly impassable barrier.", image: "/concepts/wall-of-storms.png", link: "/concepts/wall-of-storms" },
    { name: "Lyucu Culture", description: "The traditions, beliefs, and way of life of the fierce northern people who invade Dara.", image: "/concepts/lyucu-culture.png", link: "/concepts/lyucu-culture" },
    { name: "Resistance Movement", description: "The organized efforts of the Dara people to resist and overthrow Lyucu occupation.", image: "/concepts/resistance-movement.png", link: "/concepts/resistance-movement" },
    { name: "Cultural Exchange", description: "The complex interactions and mutual influences between Dara and Lyucu cultures during occupation.", image: "/concepts/cultural-exchange.png", link: "/concepts/cultural-exchange" },
    { name: "Quotes", description: "A collection of memorable quotes from the series, offering wisdom, insight, and a glimpse into the hearts of the characters.", image: "/concepts/quotes.png", link: "/concepts/quotes" },
    { name: "The Lyucu", description: "The fierce northern people who invade Dara, bringing their own culture, technology, and way of life.", image: "/concepts/lyucu-culture.png", link: "/concepts/lyucu" },
    { name: "The Agon", description: "A mysterious people from beyond the Wall of Storms who play a role in the later events of the series.", image: "/concepts/lyucu-culture.png", link: "/concepts/agon" },
    { name: "The Blossom Gang", description: "A group of resistance fighters who become central to the struggle against Lyucu occupation.", image: "/concepts/dandelion.png", link: "/concepts/the-blossom-gang" },
    { name: "Cloud-Garinafins", description: "A special breed of garinafin that can fly at high altitudes, used for strategic military purposes.", image: "/concepts/garinafin.png", link: "/concepts/cloud-garinafins" },
];


// --- FULL, ORDERED LISTS FOR NAVIGATION ---
export const ALL_BOOKS: WikiPage[] = [
    { title: 'The Grace of Kings', path: '/books/the-grace-of-kings', type: 'Book' },
    { title: 'The Wall of Storms', path: '/books/the-wall-of-storms', type: 'Book' },
    { title: 'The Veiled Throne', path: '/books/the-veiled-throne', type: 'Book' },
    { title: 'Speaking Bones', path: '/books/speaking-bones', type: 'Book' },
];

export const ALL_CHARACTERS: WikiPage[] = ALL_CHARACTERS_DATA.map(char => ({
    title: char.name,
    path: char.link,
    type: 'Character'
}));

export const ALL_PLACES: WikiPage[] = [
    // Tiro States
    { title: 'Amu', path: '/places/amu', type: 'Place' },
    { title: 'Cocru', path: '/places/cocru', type: 'Place' },
    { title: 'Faça', path: '/places/faca', type: 'Place' },
    { title: 'Gan', path: '/places/gan', type: 'Place' },
    { title: 'Haan', path: '/places/haan', type: 'Place' },
    { title: 'Rima', path: '/places/rima', type: 'Place' },
    { title: 'Xana', path: '/places/xana', type: 'Place' },
    // Other Islands & Regions
    { title: 'Dasu & Rui', path: '/places/dasu-rui', type: 'Place' },
    { title: 'Crescent Island', path: '/places/crescent-island', type: 'Place' },
    { title: 'Tan Adü', path: '/places/tan-adu', type: 'Place' },
    { title: 'Tunoa Islands', path: '/places/tunoa-islands', type: 'Place' },
    { title: 'Wolf\'s Paw', path: '/places/wolfs-paw', type: 'Place' },
    { title: 'Arulugi', path: '/places/arulugi', type: 'Place' },
    { title: 'Kriphi', path: '/places/kriphi', type: 'Place' },
    { title: 'Ginpen', path: '/places/ginpen', type: 'Place' },
    { title: 'Dimushi', path: '/places/dimushi', type: 'Place' },
    { title: 'Zathin Gulf', path: '/places/zathin-gulf', type: 'Place' },
    // Major Landmarks
    { title: 'Pan', path: '/places/pan', type: 'Place' },
    { title: 'Zudi', path: '/places/zudi', type: 'Place' },
    { title: 'Mount Kiji', path: '/places/mount-kiji', type: 'Place' },
    { title: 'Kishi Channel', path: '/places/kishi-channel', type: 'Place' },
    { title: 'Lake Dako', path: '/places/lake-dako', type: 'Place' },
    { title: 'Liru River', path: '/places/liru-river', type: 'Place' },
    { title: 'Thoco Pass', path: '/places/thoco-pass', type: 'Place' },
    // Lands Beyond Dara
    { title: 'Ukyu & Gondé', path: '/places/ukyu-gonde', type: 'Place' },
    { title: 'Eseeran Nomnny', path: '/places/eseeran-nomnny', type: 'Place' },
    { title: 'Agon', path: '/places/agon', type: 'Place' },
    // New Places from Books 2-4
    { title: 'Lake Tututika', path: '/places/lake-tututika', type: 'Place' },
    { title: 'Nokida', path: '/places/nokida', type: 'Place' },
    { title: 'Taten', path: '/places/taten', type: 'Place' },
    { title: 'Lurodia Tanta', path: '/places/lurodia-tanta', type: 'Place' },
    { title: 'Sliyusa Ki', path: '/places/sliyusa-ki', type: 'Place' },
    { title: 'Kiri Valley', path: '/places/kiri-valley', type: 'Place' },
    { title: 'World\'s Edge Mountains', path: '/places/worlds-edge-mountains', type: 'Place' },
    { title: 'Last Bite', path: '/places/last-bite', type: 'Place' },
    { title: 'Sea of Tears', path: '/places/sea-of-tears', type: 'Place' },
    { title: 'Kigo Yezu', path: '/places/kigo-yezu', type: 'Place' },
    { title: 'Tiro Cozo', path: '/places/tiro-cozo', type: 'Place' },
    { title: 'Géfica', path: '/places/gefica', type: 'Place' },
    { title: 'Taten-ryo-alvovo', path: '/places/taten-ryo-alvovo', type: 'Place' },
    { title: 'Roro Hills', path: '/places/roro-hills', type: 'Place' },
    { title: 'Çaruza', path: '/places/caruza', type: 'Place' },
    { title: 'Rui', path: '/places/rui', type: 'Place' },
    { title: 'Dara', path: '/places/dara', type: 'Place' },
];

export const ALL_GODS: WikiPage[] = [
    { title: 'Kiji', path: '/gods/kiji', type: 'God' },
    { title: 'Tututika', path: '/gods/tututika', type: 'God' },
    { title: 'Kana', path: '/gods/kana', type: 'God' },
    { title: 'Rapa', path: '/gods/rapa', type: 'God' },
    { title: 'Rufizo', path: '/gods/rufizo', type: 'God' },
    { title: 'Tazu', path: '/gods/tazu', type: 'God' },
    { title: 'Lutho', path: '/gods/lutho', type: 'God' },
    { title: 'Fithowéo', path: '/gods/fithoweo', type: 'God' },
];

export const ALL_CONCEPTS: WikiPage[] = ALL_CONCEPTS_DATA.map(concept => ({
    title: concept.name,
    path: concept.link,
    type: 'Concept'
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
export const MAIN_CHARACTERS: WikiPage[] = [
    { title: 'Kuni Garu', path: '/characters/kuni-garu', type: 'Character' },
    { title: 'Mata Zyndu', path: '/characters/mata-zyndu', type: 'Character' },
    { title: 'Jia Matiza', path: '/characters/jia-matiza', type: 'Character' },
    { title: 'Luan Zya', path: '/characters/luan-zya', type: 'Character' },
    { title: 'Gin Mazoti', path: '/characters/gin-mazoti', type: 'Character' },
    { title: 'Princess Théra', path: '/characters/princess-thera', type: 'Character' },
    { title: 'Zomi Kidosu', path: '/characters/zomi-kidosu', type: 'Character' },
];

export const PLACES_TIRO_STATES: WikiPage[] = [
    { title: 'Amu', path: '/places/amu', type: 'Place' },
    { title: 'Cocru', path: '/places/cocru', type: 'Place' },
    { title: 'Faça', path: '/places/faca', type: 'Place' },
    { title: 'Gan', path: '/places/gan', type: 'Place' },
    { title: 'Haan', path: '/places/haan', type: 'Place' },
    { title: 'Rima', path: '/places/rima', type: 'Place' },
    { title: 'Xana', path: '/places/xana', type: 'Place' },
];

export const PLACES_BEYOND_DARA: WikiPage[] = [
    { title: 'Ukyu & Gondé', path: '/places/ukyu-gonde', type: 'Place' },
    { title: 'Eseeran Nomnny', path: '/places/eseeran-nomnny', type: 'Place' },
];

export const MAIN_GODS: WikiPage[] = ALL_GODS;

// NEW: Export for the "Other" pages dropdown
export const OTHER_PAGES: WikiPage[] = [
    { title: 'About This Wiki', path: '/other/about-wiki', type: 'Other' },
    { title: 'About the Author', path: '/other/about-author', type: 'Other' },
    { title: 'All Pages', path: '/other/all-pages', type: 'Other'},
];

// UPDATED: Comprehensive list of ALL pages for site-wide navigation and search
export const ALL_WIKI_PAGES: WikiPage[] = [
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