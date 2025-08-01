import Image from 'next/image';
import Link from 'next/link';
import BookNavigation from '../../components/BookNavigation';
import TopPageNavigation from '../../components/TopPageNavigation';

// --- ACCURATE & DETAILED DATA FOR THE VEILED THRONE ---
const chapters = [
    {
        num: 1,
        title: "A Night Run",
        date: "TATEN, UKYU-GONDÉ: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "I'd love to see either of you try maintaining a peaceful household with four husbands.",
        speaker: "Goztan Ryoto",
        summary: "Goztan Ryoto, a powerful Lyucu thane, is frustrated with the constant bickering of her four husbands. Seeking peace, she goes for a night run through the tent-city of Taten. Her run takes her to the edge of Victory Cove, where the captured Dara city-ships are anchored. Her path is blocked by two young guards who, unaware of her identity, refuse her passage. Annoyed, Goztan easily disarms them in a brief fight.\n\nThe confrontation is interrupted by the pékyu's young daughter, Princess Vadyu (Tanvanaki), who has snuck out to ride a young garinafin named Korva against her father's orders. The garinafin is exhausted and sick. Vadyu, recognizing Goztan's rank, cleverly de-escalates the situation. Goztan, an expert garinafin rider, tends to the ailing Korva. As they talk, Vadyu reveals she took the garinafin to bond with it before her father could give it to her brother, Cudyu. Impressed by the girl's spirit, Goztan shares a story from her own youth, but as she does, Vadyu, believing Goztan is an imposter, knocks her unconscious with a club.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Garinafin", path: "/concepts/garinafin" }, { name: "Taten", path: "/places/taten" }]
    },
    {
        num: 2,
        title: "A Secret Expedition",
        date: "VICTORY COVE, UKYU-GONDE: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "A cruben begets a cruben, a dyran begets a dyran, and an octopus's daughter can crack eight oysters all at the same time.",
        speaker: "Oga Kidosu",
        summary: "Goztan awakens as a captive by a bonfire, surrounded by Lyucu warriors preparing for a secret expedition to find a passage to Dara. The storyteller at the fire is Oga Kidosu, Zomi's long-lost father, now a slave. Vadyu interrogates Goztan, convinced she is a spy because Goztan mentioned her mother was a thane but named her father in her lineage, a contradiction in the matrilineal Lyucu society. Goztan realizes the storyteller is Oga and tries to use him to verify her identity, but Vadyu, suspecting a trick, refuses to fetch anyone from the main camp who could recognize Goztan. The chapter ends with Goztan recognizing Oga Kidosu and realizing the complexity of her situation.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 3,
        title: "The Message on the Turtle Shell",
        date: "UKYU-GONDE: THE FIRST YEAR IN THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A lie became the truth when enough people had reasons to pretend it was true.",
        speaker: "Narrator",
        summary: "This chapter flashes back to the arrival of Emperor Mapidéré's expedition in Ukyu-Gondé. Goztan, as a young warrior, volunteers to be a 'sexual companion' to the Dara invaders as part of Pékyu Tenryo's long-term plan to learn their secrets. She is given to a captain named Dathama. During an outing, Oga Kidosu stages the 'discovery' of a turtle shell with prophetic markings—a map of Dara and a family portrait—etched using a Lyucu technique. Dathama, arrogant and ignorant of Lyucu arts, believes it to be a divine sign from his gods legitimizing the conquest. Goztan, seeing Oga's cleverness, plays along, feigning a fit of religious terror. The incident reveals the deep cultural misunderstandings and the subtle ways the enslaved Lyucu and Dara peasants begin to find common cause against their masters.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Pékyu Tenryo", path: "/characters/pekyu-tenryo" }, { name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" }]
    },
    {
        num: 4,
        title: "Storytellers",
        date: "UKYU-GONDE: THE FIRST YEAR IN THE REIGN OF RIGHTEOUS FORCE.",
        quote: "The race of humankind grows toward infinity, even as the nature of each individual is limited.",
        speaker: "Tazu",
        summary: "Following the turtle shell incident, Goztan secretly meets with Oga Kidosu. They discover a surprising connection, speaking a mix of Dara and Lyucu and sharing stories. Oga tells a Dara myth about a whale and a shrimp who experience the same ocean in vastly different ways, a metaphor for perspective. Goztan, in turn, shares the Lyucu creation myth of the All-Father wolf and the Every-Mother cow. However, she becomes enraged when she realizes Oga has been subtly altering his stories, incorporating elements of Lyucu culture to make them more relatable. She sees this not as a gesture of friendship but as a colonial act of appropriation, a theft of her people's sacred truths. The encounter highlights the profound, almost insurmountable, cultural and philosophical gulf between the two peoples.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "The Gods of Dara", path: "/gods" }]
    },
    {
        num: 5,
        title: "Birthright",
        date: "UKYU-GONDE: THE FIRST YEAR IN THE REIGN OF RIGHTEOUS FORCE.",
        quote: "In war, we become more like our enemies, whether we want to or not.",
        speaker: "Pékyu Tenryo",
        summary: "The Lyucu successfully overthrow the Dara expedition, seizing the city-ships. Goztan, who became pregnant by her captor Dathama, suffers a miscarriage. Her mother, the chieftain Tenlek Ryoto, uses the pregnancy as a pretext to disinherit her, claiming her nature has been tainted. The real reason is political: Goztan's disdain for the captured Dara wealth has angered the clan elders. In a confrontation, Goztan's father, Dayu, defends her and is killed by Tenlek. Exiled, Goztan builds her own power base, eventually returning to challenge and kill her mother, reclaiming her birthright as thane. She solidifies her claim by declaring her lineage through her father, not her mother, a radical break from Lyucu tradition.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Pékyu Tenryo", path: "/characters/pekyu-tenryo" }]
    },
    {
        num: 6,
        title: "It's My Nature",
        date: "VICTORY COVE, UKYU-GONDE: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Aphorisms can’t help you survive, but the ability to hold in mind competing ideals just might.",
        speaker: "Oga Kidosu",
        summary: "Back in the present, Goztan explains her story to a stunned Vadyu. Oga Kidosu finishes his tale for the departing warriors, a story about a shark raised by dolphins who must choose between its predatory nature and its adopted family's values. Vadyu, still suspicious, has Oga brought over to identify Goztan. Oga confirms Goztan's identity and her deeds during the war against the Dara, cleverly satisfying Vadyu without betraying Goztan. Vadyu, convinced, frees Goztan. Goztan and Oga have a final, tense conversation. Oga reveals he has been trying to subtly educate the Lyucu children, including Vadyu, with Dara philosophy, hoping to plant seeds of peace. Goztan, still distrustful but seeing his courage, lets him go.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 7,
        title: "A Chase Beyond the Storms",
        date: "JUST BEYOND THE WALL OF STORMS: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Every single person on this expedition is irreplaceable... We’re not going to jump to sacrifice as the first solution to every problem. That’s the easy way out.",
        speaker: "Princess Théra",
        summary: "Months after the end of *The Wall of Storms*, Princess Théra's expedition has successfully passed through the Wall of Storms, aided by a pod of cruben. Now in the seas of Ukyu-Gondé, they are spotted by a lone surviving Lyucu city-ship. A single garinafin, piloted by a warrior named Toof, is sent to investigate. Théra and her husband, the Agon prince Takval Aragoz, devise a clever defense: they fly giant kites shaped like tusked tigers, a natural predator of the garinafin. The malnourished and psychologically stressed garinafin is terrified by the decoys and retreats, buying the Dara fleet precious time.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "The Wall of Storms", path: "/concepts/wall-of-storms" }, { name: "Cruben", path: "/concepts/cruben" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 8,
        title: "Shadow Play",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "We each have a role in the grand shadow play of history, but we also get to write our own lines.",
        speaker: "Princess Théra",
        summary: "To disguise their true intentions and conceal their movements, the Dara fleet stages an elaborate shadow play against a giant screen stretched between two ships. The play depicts a stylized battle between a garinafin and Dara airships. The Lyucu crew on the pursuing city-ship, led by Thane Nacu Kitansli, are mesmerized by the spectacle, believing it to be a strange Dara form of entertainment. Nacu, seeing it as a sign of Dara weakness, allows his crew to feast and drink, letting their guard down completely. The performance is a masterful act of misdirection, allowing the Dara fleet to prepare their secret attack.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }]
    },
    {
        num: 9,
        title: "The Barnacle and the Whale",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The best-laid plan in the world is no match for the unpredictable storms of reality.",
        speaker: "Admiral Roso",
        summary: "Under the cover of the shadow play, Théra's flagship, the submersible *Dissolver of Sorrows*, detaches from the fleet and dives. It maneuvers underneath the Lyucu city-ship, attaching itself to the hull like a giant barnacle. A boarding party, led by Commander Tipo Tho and Takval, drills through the hull into the ship's bilge. Their mission is to plant explosive charges throughout the ship. However, their presence is discovered when a scholar named Razutana Pon accidentally sets off an explosion near the garinafin stables. The Dara boarding party is forced to fight a running battle through the ship's interior as the Lyucu crew, now aware of the attack, descends into chaos.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Tipo Tho", path: "/characters/tipo-tho" }]
    },
    {
        num: 10,
        title: "The Call of the Tribe",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The nature of the beast will always be revealed.",
        speaker: "Takval Aragoz",
        summary: "The battle inside the city-ship rages. Takval finds himself in a duel with Toof, the Lyucu garinafin pilot. They are interrupted by the rampaging garinafin, Tana, who has been freed in the chaos. Toof and his partner Radia try to calm their beloved mount. Meanwhile, Théra, aboard the submerged *Dissolver of Sorrows*, makes a desperate gamble. Using a system of resonant chambers and a trumpet, the scholar Çami Phithadapu projects a song into the ocean that mimics whale calls. A pod of dome-headed whales, including a massive bull, answers the call. They attack the Lyucu city-ship, ramming its hull and crippling it. In the chaos, Tana is killed, and Takval, Toof, and Radia are the only survivors, rescued by Théra's ship.",
        links: [{ name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }, { name: "Çami Phithadapu", path: "/characters/cami-phithadapu" }]
    },
    {
        num: 11,
        title: "The Stowaway",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "So much of learning... consisted of forgetting how much you already knew.",
        speaker: "Princess Théra",
        summary: "The gods of Dara debate their role and the future, with Lutho deciding to take on mortal form to join Théra's expedition. A mysterious, feral girl is discovered as a stowaway in the hold of *Dissolver of Sorrows*. She cannot speak but can perfectly mimic any sound, including whale song and human speech in any language. The crew names her Thoryo. She becomes a linguistic prodigy, learning the languages of Dara and the scrublands at an astonishing rate. Her presence acts as a catalyst, forcing the Dara, Agon, and Lyucu survivors to learn each other's languages and cultures as they teach her, breaking down barriers between them.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "The Gods of Dara", path: "/gods" }, { name: "Thoryo", path: "/characters/thoryo" }]
    },
    {
        num: 12,
        title: "Lurodia Tanta",
        date: "LURODIA TANTA, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "If there’s going to be death because of me, whether it’s the horses or you or anyone else, the least I can do is not look away. That would be barbaric.",
        speaker: "Princess Théra",
        summary: "Théra's expedition lands in the desolate Lurodia Tanta desert, the land of the exiled Agon. They begin a grueling overland trek to find Takval's tribe at the oasis of Sliyusa Ki. The journey is harsh, and they are forced to sacrifice their horses. Théra and Takval have a tense argument about leadership and sacrifice, revealing the cultural differences in their approaches. Thoryo, through a moment of childlike insight, inspires Théra to invent a solar still, a device to distill potable water from cactus juice and urine, saving the expedition from dehydration.",
        links: [{ name: "Lurodia Tanta", path: "/places/lurodia-tanta" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Thoryo", path: "/characters/thoryo" }]
    },
    {
        num: 13,
        title: "An Unwelcome Welcome",
        date: "THE OASIS OF SLIYUSA KI, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "You speak to me of power and subservience; you speak to me of Dara weakness and Lyucu strength. You claim to speak for the Agon, yet your people are huddled here in the desert, eking out a life of terror in the shadow of your Lyucu masters.",
        speaker: "Princess Théra",
        summary: "The expedition reaches Sliyusa Ki, but the welcome is hostile. Takval's uncle, Volyu Aragoz, the current chief of the exiled Agon, sees Théra not as an ally but as a representative of a weak and defeated people. He demands that she and her followers submit to him in vassalage. In a powerful display of rhetoric and courage, Théra publicly shames Volyu, reminding the Agon of their pride and their history of resistance. She wins over the other chieftains and warriors, forcing Volyu to accept the alliance on equal terms. However, the chapter ends with Volyu challenging Takval for the right to marry Théra, a challenge Takval is forced to accept.",
        links: [{ name: "Sliyusa Ki", path: "/places/sliyusa-ki" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }]
    },
    {
        num: 14,
        title: "Commitment",
        date: "THE OASIS OF SLIYUSA KI, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The heart isn’t a fixed pool like a water bubble in the grass sea; it grows and swells like the ocean.",
        speaker: "Princess Théra",
        summary: "Takval's mother, Souliyan, reveals that her brother Volyu is a treacherous collaborator who has been betraying Agon rebels to the Lyucu for years. Realizing Volyu intends to use the wedding to Théra as a trap, Souliyan helps Théra and Takval stage a coup. They depose Volyu but spare his life, forcing him to maintain the illusion of Agon loyalty while they secretly build their rebellion. Théra and Takval consummate their political marriage, which deepens into genuine affection. The chapter ends with them sending a message back to Dara, carved on turtle shells, a sign of hope for Zomi Kidosu.",
        links: [{ name: "Sliyusa Ki", path: "/places/sliyusa-ki" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }]
    },
    {
        num: 15,
        title: "Camera Obscura",
        date: "PAN: THE SIXTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "You have to learn to see the world through the eyes of others. That is the only way to be a good ruler.",
        speaker: "Soto Zyndu",
        summary: "Eight years have passed. In Pan, Empress Jia rules as regent for her son, Emperor Phyro, who is now a young man. The court is rife with factionalism. Jia's youngest daughter, Princess Fara, has grown into a talented artist. She builds a camera obscura in the palace garden, a device that projects an image of the outside world onto a screen, allowing her to study the principles of light and perspective. The device serves as a metaphor for the novel's themes of perception, truth, and the challenge of seeing the world clearly. Fara's growing artistic and intellectual curiosity sets her apart from the political machinations of the court.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 16,
        title: "The Temple of Péa-Kiji",
        date: "MEANWHILE, BY THE SHORES OF LAKE ARISUSO ON MOUNT KIJI, RUI.",
        quote: "You’re asking me to desecrate my soul.",
        speaker: "Prince Timu",
        summary: "In occupied Rui, the Lyucu have syncretized their gods with Dara's, transforming the Temple of Kiji into the Temple of Péa-Kiji. The hardline Lyucu thane, Cutanrovo Aga, leads a puritanical movement to erase all traces of Dara culture. She forces Prince Timu, now a puppet emperor married to Tanvanaki, to participate in a ritual to destroy the statue of Kiji and burn the temple's library. Timu, caught between his duty to his people and his precarious position, is forced to publicly denounce his own gods and heritage, a moment of profound humiliation and a symbol of the cultural war being waged in the occupied territories.",
        links: [{ name: "Mount Kiji", path: "/places/mount-kiji" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 17,
        title: "Escape",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "As long as we remain alive, we can bide our time and find another opportunity.",
        speaker: "Takval Aragoz",
        summary: "The Lyucu, led by Pékyu Cudyu Roatan (Tenryo's son and Tanvanaki's brother), launch a surprise attack on the secret Agon base in Kiri Valley. The base is destroyed, and Souliyan Aragoz dies heroically. A small group of survivors, including Théra, Takval, and their two sons, escape on two garinafins. They are pursued by the Lyucu. In a desperate gambit, the Lyucu defectors Toof and Radia, along with the Agon thane Vara Ronalek, sacrifice themselves to allow Théra, Takval, and the children to escape into the World's Edge Mountains.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }]
    },
    {
        num: 18,
        title: "The First Contest: Part I",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The best restaurants are theaters where the desires of the heart are staged.",
        speaker: "Lolotika Tuné",
        summary: "In Ginpen, a rivalry erupts between the established Splendid Urn restaurant and a new, lavish establishment, the Treasure Chest, owned by the ambitious merchant Tiphan Huto. A three-part contest is declared to determine the city's best restaurant. The first round is a cooking competition. The Treasure Chest's secret weapon is Mozo Mu, the young, prodigiously talented descendant of the legendary chef Suda Mu. The Splendid Urn's head chef has a nervous breakdown, leaving the sous-chef, Mati, to lead the team. The chapter introduces a new cast of characters from the common folk of Ginpen, including the theatrical Blossom Gang.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 19,
        title: "The First Contest: Part II",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Mind-pleasure comes from love, Kinri. Love of a story, love of a person, love of a memory, love of a hope.",
        speaker: "Princess Fara",
        summary: "The cooking contest begins. Mozo Mu presents an incredibly complex and artistic dish based on ancient recipes and literary allusions, dazzling the judges. Mati, unable to procure the rare ingredients for her own signature dishes due to Huto's sabotage, serves simple, rustic pot stickers. However, her team, aided by the theatricality of the Blossom Gang and the storytelling of Princess Fara (in disguise as 'Dandelion'), presents the dish as a celebration of Haanese history and ingenuity. They use innovative cooking techniques like a solar oven and a pressure cooker, turning the simple dish into a spectacle. The Splendid Urn wins the first round, not through superior ingredients, but through superior storytelling and a deeper connection to the people's identity.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }, { name: "Kinri", path: "/characters/kinri" }]
    },
    {
        num: 20,
        title: "A Curse",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The race goes not always to the swift. Why don’t you go home to Zudi and look for another opportunity to invest the funds once we’ve sold this place?",
        speaker: "Widow Wasu",
        summary: "Tiphan Huto, humiliated by his loss, resorts to sabotage. A series of strange and unsettling events plague the Splendid Urn—an infestation of caterpillars, a pack of feral dogs, a swarm of rats, and finally, a mysterious illness that strikes the staff after a 'goodwill' feast where Huto provides the dipping sauces. The events are designed to look like a supernatural curse, and the superstitious staff begins to desert the restaurant, leaving Widow Wasu on the verge of ruin. The Blossom Gang and Fara suspect foul play and begin their own investigation.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Widow Wasu", path: "/characters/widow-wasu" }]
    },
    {
        num: 21,
        title: "The Second Contest",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "You have to learn to see the world through the eyes of others. That is the only way to be a good ruler.",
        speaker: "Soto Zyndu",
        summary: "The second contest is a competition of service. The Treasure Chest, with its massive staff, seems to have an insurmountable advantage. The Splendid Urn, with only a skeleton crew remaining, appears doomed. However, Kinri, inspired by Rati Yera's maze-running cart, has a brilliant idea. Working with the Blossom Gang, they build a fleet of small, programmable, self-driving carts, each 'driven' by an adorable animal. The carts deliver food and clear tables, turning the service into a delightful and magical spectacle. The Splendid Urn wins the second round through sheer ingenuity and charm, proving that cleverness can overcome brute force.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Rati Yera", path: "/characters/rati-yera" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 22,
        title: "The Third Contest",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The best stories are not about victory, but about the grace of the vanquished.",
        speaker: "Dandelion",
        summary: "The final contest is entertainment. Tiphan Huto stages a massive, extravagant parade that re-enacts Emperor Mapidéré's conquest of Dara, a spectacle of power and wealth designed to appeal to a growing sense of nationalist nostalgia. The Splendid Urn counters with a far more intimate and innovative experience: a thrilling cart ride through a tent that tells the Agon creation myth of Kikisavo and Afir. The ride is a marvel of engineering and storytelling, a celebration of a foreign culture that resonates deeply with the audience's own values of courage and resilience. The Splendid Urn wins the final round, and the title, by telling a more profound and emotionally resonant story.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Dandelion", path: "/characters/dandelion" }, { name: "Kinri", path: "/characters/kinri" }]
    },
    {
        num: 23,
        title: "A Lesson on Truth",
        date: "RUI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "You must learn to tell true stories apart from false ones.",
        speaker: "Nazu Tei",
        summary: "In a flashback, we see the relationship between the young Savo Ryoto (Kinri) and his Dara tutor, Nazu Tei. She teaches him not just language and history, but also how to question the official narratives he has been taught. Their lessons are interrupted by the arrival of Cutanrovo Aga's purges. Nazu Tei is arrested for possessing 'contraband'—a zamaki set used for modeling battles. To save his teacher, Savo reveals his identity, but his intervention only makes things worse. Cutanrovo, seeing an opportunity to strike at her political rival Goztan Ryoto, escalates the situation, torturing the village elder to extract a false confession and ultimately massacring the villagers of Kigo Yezu.",
        links: [{ name: "Kigo Yezu", path: "/places/kigo-yezu" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 24,
        title: "Prisoners",
        date: "KRIPHI: THE TENTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "Expand your heart and listen.",
        speaker: "Nazu Tei",
        summary: "Savo is imprisoned in Kriphi. His mother, Goztan, arranges his escape with the help of pirates. Before he leaves, he has one last conversation with Nazu Tei, who is also imprisoned and awaiting execution. She tells him that the most important lesson is to learn to distinguish true stories from false ones and to do the right thing, even when it hurts. Goztan gives Savo the turtle shell Oga Kidosu had carved years ago, telling him it will guide him home. The chapter ends with Savo, now a refugee, sailing for Dara, his heart full of doubt and a desperate need for truth.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }]
    },
    {
        num: 25,
        title: "Judgment",
        date: "KRIPHI: THE TENTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "Our reign is named Audacious Freedom, but both parts are lies! You have all been living as Cowardly Slaves!",
        speaker: "Prince Timu",
        summary: "At a formal court session in Kriphi, Cutanrovo Aga uses the 'treason' of Nazu Tei and Savo Ryoto to launch a full-scale assault on the accommodationist faction. Prince Timu, in a surprising and courageous outburst, denounces the purges and the hypocrisy of Lyucu rule. His speech, however, only serves to further inflame the hardliners. Tanvanaki, caught between her husband's idealism and the political reality of her court, is forced to side with Cutanrovo. She sentences Nazu Tei and the absent Savo to death and strips Goztan Ryoto of much of her power, a major victory for the hardline faction.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }]
    },
    {
        num: 26,
        title: "The Winter Festival",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "The aspen wishes to stand still, but the wind does not stop.",
        speaker: "Narrator",
        summary: "At the Agon base in Kiri Valley, Théra and Takval's two sons, Tanto and Rokiri, have grown into boys who are more Agon than Dara. They build 'living bones' (arucuro tocua), intricate, wind-powered mechanical toys made from animal bones, a traditional Agon craft. Théra is dismayed by their rejection of Dara culture but is fascinated by the engineering principles behind their toys. The chapter highlights the challenges of raising children between two cultures and the slow, difficult process of cultural exchange and syncretism.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Rokiri Aragoz", path: "/characters/rokiri-aragoz" }]
    },
    {
        num: 27,
        title: "Exiles",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "I was wrong, so reserve your punishments for me.",
        speaker: "Princess Théra",
        summary: "The Winter Festival celebration at Kiri Valley is shattered by the surprise Lyucu attack. The base is destroyed, and the survivors are forced to flee into the mountains. The chapter is a brutal depiction of the chaos and horror of the attack, culminating in the heroic sacrifices of Souliyan Aragoz, Vara Ronalek, Toof, and Radia to save the children. Théra is left devastated, blaming herself for the disaster and the loss of her children, who are captured by the Lyucu.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }]
    },
    {
        num: 28,
        title: "A Game of Zamaki",
        date: "RUI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "It’s a sign, but of what?",
        speaker: "Kinri",
        summary: "This chapter provides a deeper look into Kinri's education under Nazu Tei. She teaches him the game of zamaki, using it as a vehicle to discuss history, philosophy, and the nature of truth. Nazu reveals that the official histories of Dara are incomplete and that many powerful women have been erased from the canonical texts. The lesson is a profound moment for Kinri, opening his mind to the idea that the stories he has been told may not be the whole truth. Their game is interrupted by the arrival of Cutanrovo's purges.",
        links: [{ name: "Rui", path: "/places/dasu-rui" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }]
    },
    {
        num: 29,
        title: "The Grand Examination",
        date: "PAN: THE THIRD MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The people most affected by change are also the ones who know best how to change.",
        speaker: "Jia Matiza",
        summary: "Zomi Kidosu's radical reform of the Grand Examination—requiring all essays to be written in the vernacular using the phonetic zyndari script—sparks a rebellion of scholars. Empress Jia uses the crisis to teach Zomi a lesson about the power of tradition and the deep cultural significance of the Ano logograms. She explains that the logograms are not just a writing system but a connection to the collective memory and identity of the people. Zomi, humbled, rescinds the rule. She is publicly disgraced and resigns her post, choosing to focus on research. The chapter is a deep dive into the philosophy of language, tradition, and the politics of reform.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "The Grand Examination", path: "/concepts/grand-examination" }]
    },
    {
        num: 30,
        title: "Pit",
        date: "BY THE SHORES OF LAKE ARISUSO ON MOUNT KIJI, RUI: THE THIRD MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "If you want to save the rest of your people, then you must do as I ask.",
        speaker: "Tanvanaki",
        summary: "The purges in Unredeemed Dara reach their peak. Cutanrovo forces the clergy of the Temple of Péa-Kiji to topple the statue of the god and burn their own sacred library. Tanvanaki, seeing the fanaticism she has unleashed, realizes she must intervene to prevent a full-scale civil war between the hardliners and the accommodationists. She forces Timu to participate in a public ritual denouncing his own gods and heritage, a final, soul-crushing act of submission that solidifies Lyucu cultural dominance but also saves the remaining scholars and clergy from extermination.",
        links: [{ name: "Mount Kiji", path: "/places/mount-kiji" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 31,
        title: "Escape",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "As long as we remain alive, we can bide our time and find another opportunity.",
        speaker: "Takval Aragoz",
        summary: "This chapter details the immediate aftermath of the attack on Kiri Valley and the escape of the survivors. It's a harrowing depiction of their flight into the mountains, fraught with grief and despair. The difficult decisions about who to save and who to leave behind highlight the brutal realities of their situation. The chapter ends with the small band of refugees, led by Théra and Takval, facing an uncertain future in the wilderness, their dream of a united rebellion shattered.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }]
    },
    {
        num: 32,
        title: "The Blossom Gang",
        date: "GINPEN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "We are a family of choice, and we seek a life of clean conscience and constant learning.",
        speaker: "Widi Tucru",
        summary: "This chapter provides the backstory of the Blossom Gang. Each member—Rati Yera, the master machinist and former grave robber; Widi Tucru, the failed scholar and brilliant litigator; Arona Taré, the actress and master of disguise; and Mota Kiphi, the stoic strongman and war hero—is an outcast who has found a chosen family in the gang. Their shared philosophy is one of freedom, creativity, and a commitment to using their unique talents to help the common people. They are a force for chaotic good in a world of rigid hierarchies.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Rati Yera", path: "/characters/rati-yera" }, { name: "Widi Tucru", path: "/characters/widi-tucru" }, { name: "Arona Taré", path: "/characters/arona-tare" }, { name: "Mota Kiphi", path: "/characters/mota-kiphi" }]
    },
    {
        num: 33,
        title: "Treasure",
        date: "MEANWHILE, IN KRIPHI.",
        quote: "I am my father’s daughter. I cannot afford to be weak, to allow my own feelings to destroy the dream of my people.",
        speaker: "Tanvanaki",
        summary: "In Kriphi, Tanvanaki struggles to deal with the fallout from Cutanrovo's purges. The destruction of the granaries in Dasu has created a food crisis, and she is forced to demand more tribute from Dara. The chapter reveals the deep divisions within the Lyucu court and Tanvanaki's own internal conflict between her father's ruthless vision of conquest and her growing understanding of the complexities of ruling a conquered people. She is trapped between the hardliners who demand purity and the accommodationists (and her husband, Timu) who advocate for a more integrated society.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 34,
        title: "The Second Contest",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "You have to trust Arona’s makeup skills.",
        speaker: "Widi Tucru",
        summary: "The second contest between the Splendid Urn and the Treasure Chest is a competition of service. The Urn, with its depleted staff, seems destined to lose. However, Kinri and the Blossom Gang devise a brilliant solution: a fleet of small, programmable, self-driving carts, each 'driven' by an adorable animal. The carts deliver food and clear tables, turning the service into a delightful and magical spectacle. The chapter is a celebration of 'silkpunk' ingenuity and the power of creative problem-solving.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Kinri", path: "/characters/kinri" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 35,
        title: "Know Thy Enemy",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The best stories are not about victory, but about the grace of the vanquished.",
        speaker: "Dandelion",
        summary: "The final contest is entertainment. Tiphan Huto stages a massive, extravagant parade that re-enacts Emperor Mapidéré's conquest of Dara, a spectacle of power and wealth designed to appeal to a growing sense of nationalist nostalgia. The Splendid Urn counters with a far more intimate and innovative experience: a thrilling cart ride through a tent that tells the Agon creation myth of Kikisavo and Afir. The ride is a marvel of engineering and storytelling, a celebration of a foreign culture that resonates deeply with the audience's own values of courage and resilience. The Splendid Urn wins the final round, and the title, by telling a more profound and emotionally resonant story.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Dandelion", path: "/characters/dandelion" }]
    },
    {
        num: 36,
        title: "Two Thanes",
        date: "KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "There always comes a time for the old to yield to the young.",
        speaker: "Takval Aragoz",
        summary: "This chapter provides more detail on the political situation in the Agon camp before the Lyucu attack. It explores the tense relationship between Takval and his uncle Volyu, and the difficult choices Théra must make as a leader trying to unite two disparate cultures. The chapter highlights the deep-seated traditions and rivalries that threaten to undermine the rebellion from within.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }]
    },
    {
        num: 37,
        title: "The First Contest: Part II",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The story told by the Splendid Urn today is the story of Mati and Lodan and your staff, laid out on a plate.",
        speaker: "Dandelion",
        summary: "This chapter provides a more detailed, behind-the-scenes look at the first cooking contest. It delves into the specific dishes prepared by both Mozo Mu and Mati, the stories they tell, and the philosophical and cultural ideas they represent. Dandelion's role as a storyteller and strategist is highlighted, as she helps Mati craft a narrative that transforms simple food into a powerful statement about Haanese identity and resilience.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Dandelion", path: "/characters/dandelion" }, { name: "Mati", path: "/characters/mati" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }]
    },
    {
        num: 38,
        title: "Obedience",
        date: "MEANWHILE, IN KRIPHI.",
        quote: "The supremacy of the Lyucu isn’t negotiable.",
        speaker: "Tanvanaki",
        summary: "In Kriphi, the food crisis deepens. Tanvanaki is forced to deal with the consequences of Cutanrovo's purges. The chapter explores the brutal logic of Lyucu rule and the impossible choices Tanvanaki must make to maintain control. It also reveals the growing rift between her and Timu, whose Dara idealism clashes with the harsh realities of the occupation.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Prince Timu", path: "/characters/prince-timu" }]
    },
    {
        num: 39,
        title: "The First Contest: Part II",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Love has no place for lies.",
        speaker: "Widow Wasu",
        summary: "The cooking contest concludes. Mozo Mu reveals that she and her family are being held hostage by Tiphan Huto, who is forcing her to compete. In a moment of profound integrity, Widow Wasu chooses to concede the contest rather than win through the exploitation of a child. The act solidifies the moral high ground for the Splendid Urn and sets the stage for the next round of the competition.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }, { name: "Widow Wasu", path: "/characters/widow-wasu" }]
    },
    {
        num: 40,
        title: "Letters",
        date: "DIMUSHI: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "An inflexible general uses cavalry to counter cavalry... a flexible general sees the commonality between all realms of war.",
        speaker: "Gin Mazoti (from her treatise)",
        summary: "This chapter consists of a series of letters between the main characters. Gori Ruthi reports on Princess Aya Mazoti's disastrous first military command. Fara writes to Aya, offering sisterly support. Emperor Phyro writes to Zomi, revealing his secret plan to build a garinafin force and asking for her help in circumventing his mother's authority. The letters reveal the growing political tensions and the secret plans being hatched by the younger generation.",
        links: [{ name: "Dimushi", path: "/places/dimushi" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Gori Ruthi", path: "/characters/gori-ruthi" }]
    },
    {
        num: 41,
        title: "A Curse",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The aspen wishes to stand still, but the wind does not stop.",
        speaker: "Narrator",
        summary: "Tiphan Huto's sabotage of the Splendid Urn continues, with a series of events designed to look like a supernatural curse. The chapter details the investigation by the Blossom Gang as they try to uncover the scientific explanations behind the seemingly magical occurrences. The investigation highlights their unique skills and their commitment to reason and evidence in a world often ruled by superstition.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 42,
        title: "The Second Contest",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "You have to trust Arona’s makeup skills.",
        speaker: "Widi Tucru",
        summary: "The second contest, a competition of service, takes place. The chapter provides a more detailed look at the operation of the self-driving carts and the clever engineering behind them. It also highlights the teamwork and camaraderie of the Splendid Urn's staff and the Blossom Gang as they pull off their audacious plan. The victory is a triumph of ingenuity over brute force and a testament to the power of unconventional thinking.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 43,
        title: "The Sea of Tears",
        date: "THE SALT FLATS SOUTH OF THE SEA OF TEARS, UKYU-GONDÉ: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "We must carry on the Ronalek name ourselves and make it mean something.",
        speaker: "Radia",
        summary: "The chapter follows the small band of children and their two adult guardians, Sataari and Razutana, as they journey through the desolate salt flats. They discover a series of massive, ancient geoglyphs, drawings of birds and other creatures etched into the landscape, the work of a forgotten civilization. The discovery is a moment of wonder and mystery, hinting at the deep history of Ukyu-Gondé. The journey is also a crucible for the children, who must learn to survive and rely on each other in a harsh and unforgiving environment.",
        links: [{ name: "Sea of Tears", path: "/places/sea-of-tears" }, { name: "Sataari", path: "/characters/sataari" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }]
    },
    {
        num: 44,
        title: "The Third Contest",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "When in the scrublands, do as the Agon do.",
        speaker: "Razutana Pon",
        summary: "The final contest, a competition of entertainment, concludes. The chapter provides a more detailed description of the Splendid Urn's 'roller coaster' ride and the story it tells. It delves into the themes of cultural appropriation and appreciation, as the Dara performers tell an Agon story with empathy and respect. The victory of the Splendid Urn is a victory for cross-cultural understanding and the power of stories to bridge divides.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 45,
        title: "Alone",
        date: "WORLD’S EDGE MOUNTAINS: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "I am useless. I’ve ruined everything.",
        speaker: "Princess Théra",
        summary: "In the aftermath of the disaster at Kiri Valley, Théra is consumed by grief and guilt. She withdraws from her leadership role, leaving Takval and the other survivors to fend for themselves. The chapter is a powerful depiction of depression and trauma, as Théra struggles with the weight of her failures and the loss of her children. Her journey through the mountains is a journey through her own internal landscape of despair.",
        links: [{ name: "World's Edge Mountains", path: "/places/worlds-edge-mountains" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 46,
        title: "Last Bite",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Love, once given, cannot be rescinded.",
        speaker: "Fara",
        summary: "The Blossom Gang, along with Kinri and Fara, investigate a series of strange occurrences at a warehouse owned by Tiphan Huto, which they suspect is a front for his smuggling operations. They discover that Huto is kidnapping skilled artisans and engineers for the Lyucu. They set a trap for Huto, leading to his capture. The investigation brings Kinri and Fara closer, and their romance blossoms. The chapter ends with the gang deciding to infiltrate Last Bite, a secret Imperial research facility, to uncover the truth about Marshal Gin Mazoti's death.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Last Bite", path: "/places/last-bite" }]
    },
    {
        num: 47,
        title: "Family",
        date: "LAST BITE: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "My name is Savo Ryoto.",
        speaker: "Kinri",
        summary: "The Blossom Gang and Fara successfully infiltrate Last Bite. Kinri, disguised as Zomi Kidosu, discovers a secret study filled with objects from his past, including the turtle shell his mother gave him. He realizes the study belongs to Zomi. Zomi herself appears, and through the turtle shell, she and Kinri discover they are long-lost siblings. Kinri is forced to confront the truth about his identity and his family's complex history. He chooses to embrace his Lyucu heritage, a decision that creates a painful rift between him and Fara. The chapter ends with Kinri escaping Last Bite, now a fugitive with a new understanding of himself and his place in the world.",
        links: [{ name: "Last Bite", path: "/places/last-bite" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    }
];


const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);


export default function VeiledThronePage() {
    const bookNav = {
        prevBook: { title: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        nextBook: { title: "Speaking Bones", link: "/books/speaking-bones" }
    };

    const prevPageData = { title: "The Wall of Storms", path: "/books/the-wall-of-storms" };
    const nextPageData = { title: "Speaking Bones", path: "/books/speaking-bones" };
    const returnLinkData = { title: "Return to Series Overview", path: "/books" };

    return (
        <div>
            <TopPageNavigation
                prevPage={prevPageData}
                nextPage={nextPageData}
                returnLink={returnLinkData}
            />

            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image 
                        src="/books/the-veiled-throne.jpg" 
                        alt="The Veiled Throne Book Cover" 
                        width={400} 
                        height={600} 
                        className="rounded-lg shadow-2xl object-cover w-full"
                        priority
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <div>
                        <p className="text-lg text-gray-500 dark:text-gray-400 font-semibold mb-1">The Dandelion Dynasty #3</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Veiled Throne</h1>
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p>Princess Théra, once known as Empress Üna of Dara, has entrusted the throne to her younger brother and crossed the fabled Wall of Storms to wage war on the Lyucu homeland. In Dara, the Lyucu leadership and the surviving Dandelion Court bristle with rivalries as currents of power surge and ebb. Parents and children, teachers and students, Empress and Pékyu, all nurture the seeds of plans that will take years to bloom as the spirit of innovation dances like dandelion seeds on the wind.</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-xl mb-3 text-teal-600 dark:text-teal-400">Book Details</h3>
                        <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> December 7, 2021 by Saga Press</li>
                            <li><strong>Pages:</strong> 982 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781481424356</li>
                            <li>
                                <a href="https://www.goodreads.com/book/show/18952403-the-veiled-throne" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center">
                                    View on Goodreads <ExternalLinkIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- TABLE OF CONTENTS --- */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-300 dark:border-gray-600">Contents</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
                    {chapters.map(chapter => (
                        <li key={chapter.num}>
                            <a href={`#chapter-${chapter.num}`} className="text-teal-600 dark:text-gray-300 hover:text-[--color-accent-pink] hover:underline transition-colors">
                                {chapter.num} - {chapter.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* --- CHAPTER SUMMARIES --- */}
            <div className="space-y-12">
                {chapters.map(chapter => (
                    <div key={chapter.num} id={`chapter-${chapter.num}`} className="pt-4 scroll-mt-20">
                        <div className="border-l-4 border-teal-500 pl-4 mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{chapter.num} - {chapter.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">{chapter.date}</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 p-4 italic text-gray-600 dark:text-gray-300 text-left">
                                &ldquo;{chapter.quote}&rdquo;
                                <span className="not-italic font-semibold"> &mdash; {chapter.speaker}</span>
                            </blockquote>
                            <p className="my-4 text-gray-700 dark:text-gray-300" style={{ whiteSpace: 'pre-line' }}>{chapter.summary}</p>
                            <div className="flex flex-wrap gap-2">
                                {chapter.links.map(link => (
                                    <Link key={link.name} href={link.path} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <BookNavigation prevBook={bookNav.prevBook} nextBook={bookNav.nextBook} />
        </div>
    );
}
