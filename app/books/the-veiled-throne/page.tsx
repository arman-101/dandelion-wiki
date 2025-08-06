import Image from 'next/image';
import Link from 'next/link';
import BookNavigation from '../../components/BookNavigation';
import TopPageNavigation from '../../components/TopPageNavigation';
import { formatAsteriskToBold } from '../../utils/textFormatting';

// --- ACCURATE & DETAILED DATA FOR THE VEILED THRON ---
const chapters = [
    {
        num: 1,
        title: "A Night Run",
        date: "TATEN, THE SEAT OF THE PÉKYU OF THE LYUCU IN UKYU-GONDÉ: THE FIFTH MONTH IN THE TWELFTH YEAR AFTER STRANGERS FROM AFAR ARRIVED IN THEIR CITY-SHIPS",
        quote: "I'd love to see either of you try maintaining a peaceful household with four husbands.",
        speaker: "Goztan Ryoto",
        summary: "Goztan Ryoto, the tiger-thane of the Five Tribes of the Antler, staggers out of her tent in Taten, exasperated by the incessant squabbling among her four consorts. Seeking refuge from the domestic and political strife, she embarks on a night run, her bare feet slapping rhythmically against the ground, a trancelike state washing over her as she imagines soaring on a garinafin, free from the earthbound morass of her obligations. Her run carries her beyond the bounds of the tent-city to the edge of Victory Cove, where the hulking, ghostly city-ships from Dara are anchored. Her path toward a distant bonfire is blocked by two young guards who, not recognizing her in the dim light, demand she turn back. Her pride stung, Goztan confronts them, her years of battle-honed skill making short work of their trained but inexperienced defense. She easily disarms them without serious injury, but the guards sound a shrill alarm.\n\nThe confrontation is defused by the sudden arrival of a young girl on a juvenile garinafin. The girl is Vadyu, the ten-year-old pékyu-taasa, daughter of Pékyu Tenryo, known to all by her nickname, Tanvanaki. She has snuck out against her father's orders to ride Korva, a young garinafin she desperately wants to bond with before it is given to her brother, Cudyu. The flight has exhausted the young beast. Vadyu, with a cleverness beyond her years, recognizes Goztan’s rank from her tusked-tiger-skull helmet and claims the thane as her guest, dismissing the guards. Goztan, an old-style garinafin pilot, notices the young garinafin is overheating and skillfully tends to it. As Goztan reminisces about a disobedient ride from her own youth, Vadyu, clinging to a mistaken belief that Goztan is an Agon spy in disguise, seizes a club and strikes the thane from behind, knocking her unconscious.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Garinafin", path: "/concepts/garinafin" }, { name: "Taten", path: "/places/taten" }, { name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }]
    },
    {
        num: 2,
        title: "A Secret Expedition",
        date: "VICTORY COVE, UKYU-GONDÉ: THE FIFTH MONTH IN THE TWELFTH YEAR AFTER STRANGERS FROM AFAR ARRIVED IN THEIR CITY-SHIPS",
        quote: "A cruben begets a cruben, a dyran begets a dyran, and an octopus's daughter can crack eight oysters all at the same time.",
        speaker: "Oga Kidosu",
        summary: "Goztan awakens bound by sinew ropes, a throbbing pain in her head. She is by the bonfire she had seen from a distance, now a captive amidst a group of young Lyucu warriors. They are being entertained by a storyteller, a Dara slave, whom she recognizes as Oga Kidosu. The warriors are part of a secret expedition, preparing to sail in the morning to find a new passage to Dara, an obsession of Pékyu Tenryo. Vadyu, fierce and proud of her capture, interrogates Goztan. The pékyu-taasa reveals the logic behind her suspicion: during their earlier conversation, Goztan mentioned her mother had been the thane before her, yet when formally declaring her lineage to the guards, she named her father, Dayu Ryoto. In the strictly matrilineal succession of the Lyucu, this is a fatal contradiction, proving to Vadyu that Goztan must be an imposter. Goztan, trapped by the child's unassailable logic and her own complex past, realizes she is in a perilous situation, as missing her dawn audience with the pékyu could have disastrous consequences for her people.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Pékyu Tenryo", path: "/characters/pekyu-tenryo" }]
    },
    {
        num: 3,
        title: "The Message on the Turtle Shell",
        date: "UKYU-GONDÉ: THE YEAR THE CITY-SHIPS ARRIVED FROM DARA",
        quote: "A lie became the truth when enough people had reasons to pretend it was true.",
        speaker: "Narrator",
        summary: "The narrative flashes back twelve years to the arrival of Admiral Krita's expedition fleet from Dara. A young Goztan, fiercely loyal to Pékyu Tenryo, volunteers for a dangerous mission: to serve as a 'sexual companion' to the Dara invaders to learn their secrets. Assigned to the arrogant and slovenly Captain Dathama, she patiently studies the Dara ways. The chapter's pivotal scene occurs during an outing where Lyucu men are used as litter-bearers. After one stumbles, an enraged Dathama orders them whipped. The tense moment is interrupted by Oga Kidosu, a Dara peasant-fisherman, who stages the 'discovery' of a turtle shell bearing seemingly divine markings: a map of Dara and a family portrait, etched using a Lyucu technique with cactus juice. Dathama, ignorant of Lyucu arts and eager for political advancement, interprets it as a sign from his god, Lutho, legitimizing Admiral Krita's conquest. Goztan recognizes the ruse and the etching technique but sees Oga’s intent. She plays along, feigning a fit of religious terror at the 'portent,' which convinces the superstitious Dara and saves the Lyucu litter-bearers from further whipping. The incident is a masterful display of manipulation, where Dathama's arrogance makes him blind to the truth, and the oppressed find a common language in shared deception.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Pékyu Tenryo", path: "/characters/pekyu-tenryo" }, { name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" }, { name: "Lutho", path: "/gods/lutho" }]
    },
    {
        num: 4,
        title: "Storytellers",
        date: "UKYU-GONDÉ: THE YEAR THE CITY-SHIPS ARRIVED FROM DARA",
        quote: "The race of humankind grows toward infinity, even as the nature of each individual is limited.",
        speaker: "Tazu",
        summary: "In the pre-dawn hours following the turtle shell incident, Goztan seeks out Oga Kidosu. To her shock, he speaks Lyucu. A profound conversation unfolds between the two, a mix of their two languages. They find a common ground in their shared oppression under the 'Lords of Dara.' Oga explains the rigid class structure of his homeland and tells a Dara myth about the gods Lutho and Tazu, and a dome-headed whale and a skittering shrimp who live in the same ocean but experience it in completely different ways, a parable about the limits of perspective and the power of stories to bridge that gap. Moved, Goztan shares the sacred Lyucu creation myth of the All-Father Liluroto (a wolf) and the Every-Mother Diaarura (a cow), and the subsequent heroic journey of Kikisavo and Afir who won gifts for humanity from the gods.\n\nThe fragile connection shatters when Goztan realizes Oga has subtly altered his myth, weaving in elements of Lyucu culture—cactus spines, bone dwellings—to make it more familiar to her. She perceives this not as an act of empathy, but as a colonialist appropriation, a theft and trivialization of her people's sacred ways. He has taken the strands of her culture and used them as decorative baubles, fundamentally misunderstanding their meaning. The encounter ends with Goztan turning away from him, convinced that the gulf between their natures is unbridgeable.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "The Gods of Dara", path: "/gods" }, { name: "Lyucu Culture", path: "/concepts/lyucu-culture" }]
    },
    {
        num: 5,
        title: "Birthright",
        date: "UKYU-GONDÉ: THE YEAR THE CITY-SHIPS ARRIVED FROM DARA",
        quote: "In war, we become more like our enemies, whether we want to or not.",
        speaker: "Pékyu Tenryo",
        summary: "The flashback continues. After the Lyucu successfully rise up and seize the city-ships, a new conflict emerges. Goztan, who had become pregnant by her captor Dathama, suffers a miscarriage. Her mother, Tenlek Ryoto, the thane of their tribe, uses the pregnancy as a pretext to disinherit her, claiming her nature has been tainted by Dara seed and that she is weak. The true reason is political: Goztan’s refusal to claim any of the captured Dara luxury goods has angered the clan elders, who see her as squandering an opportunity for wealth. In a brutal confrontation, Goztan’s gentle father, Dayu, defends her and is kicked by Tenlek, striking his head on a rock and dying.\n\nExiled and disowned, Goztan does not despair. She becomes a reaver, slowly building a new tribe from other outcasts. Through strength, cunning, and strategic marriage alliances, she becomes powerful enough to return and challenge her mother. In a formal ceremony, she kills Tenlek, taking her last breath and her birthright. To complete her revenge and honor her father, she goes before Pékyu Tenryo and declares her lineage through Dayu Ryoto, not Tenlek, a radical and shocking break from Lyucu matrilineal tradition which the pékyu accepts, cementing her status as the new Thane of the Five Tribes of the Antler.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Pékyu Tenryo", path: "/characters/pekyu-tenryo" }]
    },
    {
        num: 6,
        title: "It's My Nature",
        date: "VICTORY COVE, UKYU-GONDÉ: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF FOUR PLACID SEAS",
        quote: "Aphorisms can’t help you survive, but the ability to hold in mind competing ideals just might.",
        speaker: "Oga Kidosu",
        summary: "Returning to the present, Goztan explains her complex lineage to a stunned Vadyu, resolving the 'contradiction' that led to her capture. As she speaks, Oga Kidosu concludes his tale for the departing warriors—a story about a shark raised among dolphins who, in a moment of crisis, embraces both its predatory shark-nature and its compassionate dolphin-nurture to save shark pups from cannibals. Vadyu, still not entirely convinced, has Oga brought over to identify Goztan. Oga, with great cleverness, confirms Goztan's identity and heroic deeds without betraying her, finally convincing the pékyu-taasa. Vadyu releases Goztan and decides to confess her own disobedience to her father. Alone with Oga, Goztan learns he has been trying to subtly educate the Lyucu children, including Vadyu, with Dara philosophy, hoping to plant seeds of peace. Though Goztan still sees him as an enemy, she recognizes his courage and lets him go, a fragile, unspoken understanding passing between them as they part ways.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 7,
        title: "A Chase Beyond the Storms",
        date: "JUST BEYOND THE WALL OF STORMS: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Every single person on this expedition is irreplaceable... We’re not going to jump to sacrifice as the first solution to every problem. That’s the easy way out.",
        speaker: "Princess Théra",
        summary: "The narrative leaps forward eight years. Princess Théra's small fleet of ten ships has successfully navigated a temporary passage through the Wall of Storms, a feat made possible by Luan Zya's research and aided by a pod of cruben. They have emerged into the seas of Ukyu-Gondé, but their relief is short-lived. They are spotted by a lone Lyucu city-ship, the *Boundless Pastures*, which survived the Wall's closing that destroyed the rest of the Lyucu reinforcement fleet. The Lyucu ship sends a single garinafin, Tana, piloted by a warrior named Toof, to investigate. The garinafin and its crew are malnourished and psychologically fragile after their long, difficult journey. Théra and her husband, the Agon prince Takval Aragoz, devise a brilliant and unorthodox defense. Knowing the garinafins' natural fear of tusked tigers, they construct and fly ten enormous, brightly colored kites in the shape of the fearsome predators. The terrifying, larger-than-life apparitions swooping through the air prove too much for the weakened garinafin, which flees in terror, buying the Dara fleet precious time to escape.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "The Wall of Storms", path: "/concepts/the-wall-of-storms" }, { name: "Cruben", path: "/concepts/cruben" }, { name: "Garinafin", path: "/concepts/garinafin" }, { name: "Toof", path: "/characters/toof" }]
    },
    {
        num: 8,
        title: "Shadow Play",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "We each have a role in the grand shadow play of history, but we also get to write our own lines.",
        speaker: "Princess Théra",
        summary: "As the faster Lyucu city-ship gains on them, Théra's fleet employs another ingenious stratagem. They stretch a massive screen between two of their ships and, using giant puppets and dramatic music, stage an elaborate shadow play for their pursuers. The play depicts a stylized battle between a heroic Lyucu garinafin pilot and treacherous Dara airships, a narrative designed to flatter and distract the enemy. The Lyucu crew, led by the Thane Nacu Kitansli, are completely mesmerized. Believing the strange performance is a sign of Dara's weakness and decadent culture, Nacu allows his warriors to break out the kyor and tolyusa to feast and enjoy the show, completely letting their guard down. The shadow play is a masterful act of psychological warfare, using art as a screen to conceal the Dara fleet’s true, aggressive intentions. Under the cover of this spectacle, Théra's flagship, the submersible *Dissolver of Sorrows*, prepares to dive for a surprise attack.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Airships", path: "/concepts/airships" }]
    },
    {
        num: 9,
        title: "The Barnacle and the Whale",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The best-laid plan in the world is no match for the unpredictable storms of reality.",
        speaker: "Admiral Roso",
        summary: "While the Lyucu are distracted by the shadow play, the *Dissolver of Sorrows* dives and stealthily maneuvers beneath their city-ship, attaching itself to the hull like a giant barnacle. A boarding party, led by the tough marine commander Tipo Tho and including Takval, enters the Lyucu ship's bilge through a hole they drill in the hull. Their mission is to plant 'wall-buster' explosive charges at key structural points. The infiltration is tense and claustrophobic. Their presence is discovered when Razutana Pon, a clumsy scholar who insisted on joining the party, accidentally sets off a small explosion near the garinafin stables. The blast frees the captive garinafins and alerts the Lyucu crew. A chaotic battle erupts in the ship's lower decks as the Dara boarding party fights to complete their mission and escape.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Tipo Tho", path: "/characters/tipo-tho" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }]
    },
    {
        num: 10,
        title: "The Call of the Tribe",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The nature of the beast will always be revealed.",
        speaker: "Takval Aragoz",
        summary: "The battle inside the city-ship intensifies, with Takval finding himself in a duel with the Lyucu pilot Toof. The rampaging garinafin, Tana, adds to the chaos. Aboard the submerged *Dissolver of Sorrows*, Théra is forced to make a difficult decision. With her boarding party trapped and the mission going awry, she unleashes her wildest gambit. The scholar Çami Phithadapu, an expert on cetaceans, uses a makeshift assembly of a trumpet and resonant chambers to project a song into the ocean that mimics the calls of dome-headed whales. A pod of the massive creatures, including a colossal, battle-scarred bull, answers. They attack the Lyucu city-ship with ferocious power, ramming its hull and crippling it. The ship begins to sink. In the ensuing chaos, the garinafin Tana is killed saving the lives of Takval, Toof, and his companion Radia. The three are the only survivors rescued from the water by Théra's damaged but victorious ship.",
        links: [{ name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }, { name: "Çami Phithadapu", path: "/characters/cami-phithadapu" }]
    },
    {
        num: 11,
        title: "The Stowaway",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "So much of learning... consisted of forgetting how much you already knew.",
        speaker: "Princess Théra",
        summary: "The gods of Dara convene a council. They debate their role in the affairs of mortals, with Lutho arguing they should withdraw further and allow humanity to discover the world's patterns for themselves. He declares his intention to become mortal to join Théra's expedition, a shocking decision that divides the pantheon. Aboard the *Dissolver of Sorrows*, the crew discovers a stowaway: a feral, seemingly mute girl of about twelve. The girl, whom they name Thoryo, possesses an uncanny ability to perfectly mimic any sound she hears, from whale song to complex human speech. Though she initially knows no language, she learns at an astonishing rate. Her education becomes a communal project, forcing the Dara crew, the Agon prince Takval, and the Lyucu captives Toof and Radia to teach her—and thereby learn from each other. Thoryo's mysterious presence acts as a powerful catalyst for cultural exchange, breaking down the barriers of prejudice between the former enemies as they are united in the shared task of teaching her to be human.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "The Gods of Dara", path: "/gods" }, { name: "Thoryo", path: "/characters/thoryo" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }]
    },
    {
        num: 12,
        title: "Lurodia Tanta",
        date: "LURODIA TANTA, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "If there’s going to be death because of me, whether it’s the horses or you or anyone else, the least I can do is not look away. That would be barbaric.",
        speaker: "Princess Théra",
        summary: "After months at sea, Théra's expedition finally makes landfall in Ukyu-Gondé, in the desolate desert of Lurodia Tanta, the land of the exiled Agon tribes. They begin a grueling overland trek toward the oasis of Sliyusa Ki, where Takval hopes to find his people. The journey is brutal, forcing them to sacrifice their horses to conserve water. Théra insists on joining the dangerous trek, arguing that a leader cannot ask others to face dangers she herself avoids. As their water supplies dwindle to a critical level, and Takval is on the verge of proposing a sacrifice, Thoryo has a moment of childlike, intuitive insight. Observing the morning dew, she muses, \"I wish we could make dew.\" This sparks an idea in Théra's mind. Drawing on her scientific knowledge, Théra invents a solar still, a simple but ingenious device that uses the sun's heat to distill pure, drinkable water from cactus juice and even urine, saving the expedition from certain death.",
        links: [{ name: "Lurodia Tanta", path: "/places/lurodia-tanta" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Thoryo", path: "/characters/thoryo" }]
    },
    {
        num: 13,
        title: "An Unwelcome Welcome",
        date: "THE OASIS OF SLIYUSA KI, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "You speak to me of power and subservience; you speak to me of Dara weakness and Lyucu strength. You claim to speak for the Agon, yet your people are huddled here in the desert, eking out a life of terror in the shadow of your Lyucu masters.",
        speaker: "Princess Théra",
        summary: "Théra's expedition finally reaches the oasis of Sliyusa Ki. The welcome is not what they hoped for. Takval's uncle, Volyu Aragoz, is the current chief of the exiled Agon. He is a cautious, broken man who has survived by appeasing the Lyucu. He sees Théra and her followers not as powerful allies, but as desperate refugees from a weak and defeated Dara. At a tense welcoming banquet, he insults Théra and demands that she and her people submit to him as vassals, abandoning any hope of an alliance of equals. Takval is enraged, but Théra stops him from reacting rashly. Instead, she rises to the occasion. In a powerful and defiant speech, she confronts Volyu's cowardice, reminding the assembled Agon chieftains of their proud warrior heritage and shaming them for living in fear. Her courage and fiery rhetoric win over the other thanes, who declare their support for an alliance with Dara, forcing a humiliated Volyu to acquiesce.",
        links: [{ name: "Sliyusa Ki", path: "/places/sliyusa-ki" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }]
    },
    {
        num: 14,
        title: "Commitment",
        date: "THE OASIS OF SLIYUSA KI, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The heart isn’t a fixed pool like a water bubble in the grass sea; it grows and swells like the ocean.",
        speaker: "Princess Théra",
        summary: "The political maneuvering at Sliyusa Ki intensifies. Takval's mother, Souliyan Aragoz, a formidable woman in her own right, meets with Théra. She reveals the full extent of her brother Volyu's treachery: for years, he has been systematically betraying Agon rebellions to the Lyucu to maintain his own precarious position. Realizing Volyu intended to use the marriage between Théra and Takval as a trap to hand them over to the Lyucu, Souliyan helps them stage a bloodless coup. They depose Volyu, but spare his life, forcing him to continue acting as the Agon chief in the eyes of the Lyucu, thus turning him into an unwitting double agent for the new rebellion. With the alliance secured, the political marriage between Théra and Takval is consummated, and it deepens into genuine affection and partnership. Théra discovers she is pregnant. As the chapter closes, they carve a coded message onto the shells of sea turtles and release them into the ocean, a desperate act of hope that word of their survival and mission will reach Zomi Kidosu in Dara.",
        links: [{ name: "Sliyusa Ki", path: "/places/sliyusa-ki" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 15,
        title: "Camera Obscura",
        date: "PAN: THE SIXTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "You have to learn to see the world through the eyes of others. That is the only way to be a good ruler.",
        speaker: "Soto Zyndu",
        summary: "Eight years after Théra's departure, Dara is at peace, but the Dandelion Court is simmering with tension. Empress Jia rules as Regent for her son, Emperor Phyro, now a young man eager to prove himself and reclaim Unredeemed Dara. Jia keeps him on a short leash, forcing him to sit behind a veiled throne during council meetings. Kuni Garu's youngest daughter, Princess Fara, has grown into a thoughtful artist and collector of folktales. Disdaining court politics, she builds a camera obscura in the palace garden—a dark room that uses a lens to project an inverted image of the outside world onto a wall. She uses it to study painting and the nature of perception. The device serves as a powerful metaphor for the novel's central themes: the difficulty of seeing the world clearly, the inversion of power, and the challenge of capturing an elusive truth. Fara and Phyro share a moment of sibling connection, but their different approaches to life—art versus war—highlight the divisions within the House of Dandelion.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }]
    },
    {
        num: 16,
        title: "The Temple of Péa-Kiji",
        date: "BY THE SHORES OF LAKE ARISUSO ON MOUNT KIJI, RUI: THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "You’re asking me to desecrate my soul.",
        speaker: "Prince Timu",
        summary: "In occupied Rui, the Lyucu have merged their god Péa with the Dara god Kiji. The hardline Lyucu thane, Cutanrovo Aga, leads a fanatical 'purification' movement to erase all traces of Dara culture. At the Temple of Péa-Kiji, she stages a public ritual to destroy the ancient statue of Kiji and burn the temple's sacred library. She forces Prince Timu, now the puppet Emperor Thaké and consort to the Lyucu pékyu Tanvanaki, to participate. In a moment of profound public humiliation, Timu must take a torch and set fire to his own heritage, denouncing his gods and sages. The act is a devastating symbol of the cultural war being waged, showing the brutal methods the hardliners use to crush the spirit of the conquered people and the impossible position of collaborators like Timu.",
        links: [{ name: "Mount Kiji", path: "/places/mount-kiji" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Kiji", path: "/gods/kiji" }]
    },
    {
        num: 17,
        title: "Moonbread",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE NINTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "This. Is. Not. Dara.",
        speaker: "Tanto Aragoz",
        summary: "At the secret Agon base in Kiri Valley, Théra tries to celebrate the High-Autumn Festival with her two sons, Tanto and Rokiri, now six and four years old. She makes them traditional moonbread, but the boys, who have grown up more Agon than Dara, reject the food and the customs. Tanto trades the precious, hand-carved logogram playing blocks his mother made for him to an Agon friend in exchange for *arucuro tocua*—animal bones used for a traditional Agon craft. Théra is heartbroken, seeing her children reject their heritage. The chapter poignantly illustrates the challenges of raising children between two cultures and Théra's growing sense of isolation and failure. A conversation with Thoryo makes her realize she must engage with Agon culture on its own terms, not just try to impose Dara's ways, if she ever hopes to build a true alliance.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Rokiri Aragoz", path: "/characters/rokiri-aragoz" }, { name: "Thoryo", path: "/characters/thoryo" }]
    },
    {
        num: 18,
        title: "Living Bones",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "Even if they were to invent an alphabet from scratch... how could mere writing hope to capture the nuances of tone and timbre... in short, the entirety of the experience of being alive here, in this moment?",
        speaker: "Narrator",
        summary: "Théra, taking Thoryo's advice, decides to spend a day playing with her sons on their own terms. They show her their masterpiece: a complex, wind-powered automaton—an *arucuro tocua* or 'living bones'—made from the bones of various animals, fish scales, and slisli fly wings. Théra is stunned by the intricate engineering, a native tradition of machinery completely alien to Dara's silkpunk technology. She also has a tense confrontation with the aged shaman Adyulek over the value of oral versus written traditions. Adyulek demonstrates the power of oral storytelling with a 'voice painting' ritual, a performance using colored dust on a vibrating drum skin to create abstract images representing the tribe's history. Théra has a profound realization about the limitations of writing and the deep, embodied wisdom of Agon culture.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Rokiri Aragoz", path: "/characters/rokiri-aragoz" }]
    },
    {
        num: 19,
        title: "Spies",
        date: "KRIPHI, CAPITAL OF UKYU-TAASA: THE EIGHTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "A clever woodpecker... will continue to try out new trees even after it has made a choice for nesting... in case a better tree presents itself. Or if the tree it has chosen starts to die.",
        speaker: "Lady Ragi",
        summary: "Lady Ragi, Empress Jia's adopted daughter and now a key diplomat, arrives in Kriphi leading a tribute mission. She meets with Noda Mi, the Dara traitor who is now a high-ranking official in the Lyucu administration. Under the guise of a formal dinner and an illicit smuggling deal, the two engage in a subtle verbal duel. Ragi, using metaphors about birds and trees, probes Noda's loyalty, suggesting that the Lyucu regime may be weakening and that it would be wise for him to 'test other trees.' Noda, greedy and opportunistic, agrees to pass a seemingly innocuous message from Empress Jia to her son, Timu, in exchange for a crate of priceless vintage wine. The entire conversation is overheard by a nameless Lyucu spy loyal to Tanvanaki, who clings to the outside of the ship's hull.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Lady Ragi", path: "/characters/lady-ragi" }, { name: "Noda Mi", path: "/characters/noda-mi" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 20,
        title: "Living Bones",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE NINTH MONTH IN THE EIGHTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "It’s always easy to negotiate with people like him, because all he cares about is himself.",
        speaker: "Princess Théra",
        summary: "This chapter continues the events from Chapter 18, detailing the arrival of Volyu Aragoz at the Kiri Valley base. He brings news that Pékyu Cudyu and all the major Lyucu thanes will be gathering for a ceremony, presenting a perfect opportunity for a decisive strike. Théra, Takval, and Souliyan debate the risks and strategy of such an attack. Volyu, ever the opportunist, demands a leading role and a greater share of the power. Takval, now a more seasoned and cunning leader, skillfully manipulates his uncle, securing his cooperation as a spy within the Lyucu court while giving him no real power. The plan is set: a surprise attack on Taten that could end the Lyucu threat in Ukyu-Gondé once and for all.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }]
    },
    {
        num: 21,
        title: "Calculations",
        date: "THE RORO HILLS NORTH OF KRIPHI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "I have to accept that Luan Zya was more like my father than he was like me.",
        speaker: "Tanvanaki",
        summary: "Tanvanaki interrogates a captive Dara scholar and finally confirms the truth her spy overheard from Lady Ragi: the Wall of Storms is cyclical and will reopen in just over two years, meaning a reinforcement fleet from Ukyu-Gondé is coming. This revelation throws all her long-term plans for assimilating Dara into chaos. She knows Cutanrovo's hardliners will be emboldened, making her and Timu's policy of accommodation untenable. Meanwhile, in Pan, Empress Jia and Zomi Kidosu analyze Ragi's report. They deduce that Tanvanaki is using pirates to abduct skilled Dara engineers to overcome the Lyucu's technological inferiority. Jia authorizes Zomi to create a 'honey trap'—leaking information about a fake superweapon to lure the Lyucu into a trap and feed them disinformation.",
        links: [{ name: "Roro Hills", path: "/places/roro-hills" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Luan Zya", path: "/characters/luan-zya" }]
    },
    {
        num: 22,
        title: "A Game of Zamaki",
        date: "RUI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "In every age and among all peoples, the ones who live by faith alone and the ones who reject faith completely are few, while those who stand on the border between belief and disbelief, leaning toward what is convenient at the moment, make up the majority.",
        speaker: "Nazu Tei",
        summary: "This chapter provides a deeper look into Kinri's education under Nazu Tei. She teaches him the game of zamaki, using it as a vehicle to discuss history, philosophy, and the nature of truth. Nazu reveals that the official histories of Dara are incomplete and that many powerful women have been erased from the canonical texts. The lesson is a profound moment for Kinri, opening his mind to the idea that the stories he has been told may not be the whole truth. Their game is interrupted by the arrival of Cutanrovo's purges.",
        links: [{ name: "Rui", path: "/places/dasu-rui" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }]
    },
    {
        num: 23,
        title: "A Lesson on Truth",
        date: "RUI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "The discovery of an unauthorized native teacher exerting influence over a high-ranking Lyucu thane-taasa constitutes a military emergency, and all Imperial edicts applicable to peace times are hereby suspended in Kigo Yezu.",
        speaker: "Cutanrovo Aga",
        summary: "Cutanrovo Aga and her soldiers raid the village of Kigo Yezu, searching for Savo (Kinri) and his unauthorized teacher, Nazu Tei. Savo, hiding, reveals himself to try and de-escalate the situation, but his naive intervention only makes things worse. He accidentally confirms he has a master-pupil relationship with Nazu, a violation of Lyucu law. Cutanrovo seizes on this as proof of a conspiracy. She brutally tortures the village elder's baby to extract a 'confession,' then orders the entire village massacred by garinafin fire. Savo is taken prisoner, and Nazu Tei is arrested. The chapter is a horrifying depiction of the brutality of the purges and the tragic consequences of Savo's well-intentioned but foolish actions.",
        links: [{ name: "Kigo Yezu", path: "/places/kigo-yezu" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 24,
        title: "Prisoners",
        date: "KRIPHI: THE TENTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "Expand your heart and listen.",
        speaker: "Nazu Tei",
        summary: "Savo is held in a sea-cave prison near Kriphi, awaiting execution. He has one final, heartbreaking conversation with his teacher, Nazu Tei, who is also imprisoned. She tells him that the most important lesson is not to learn facts, but to learn how to distinguish true stories from false ones by listening to his heart. That night, his mother, Goztan Ryoto, engineers his escape with the help of pirates. Before he leaves, she gives him the turtle shell Oga Kidosu had carved years ago, telling him it will guide him home. Savo, now a fugitive under the name Kinri Rito, sails for Dara proper, his heart full of doubt and a desperate need for the truth his teacher spoke of.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }]
    },
    {
        num: 25,
        title: "Judgment",
        date: "KRIPHI: THE TENTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "Our reign is named Audacious Freedom, but both parts are lies! You have all been living as Cowardly Slaves!",
        speaker: "Emperor Thaké (Timu)",
        summary: "At a tense formal court in Kriphi, Cutanrovo Aga publicly accuses Savo Ryoto of treason, using the case to attack Goztan and the entire accommodationist faction. Emperor Thaké (Timu), empowered by the secret message from his mother, delivers a stunning and courageous speech, denouncing the purges and the hypocrisy of Lyucu rule. His outburst, however, backfires. Cutanrovo reveals the explosive secret that a Lyucu reinforcement fleet is coming, galvanizing the hardliners. Tanvanaki, politically outmaneuvered and fearing for the unity of the Lyucu, is forced to side with Cutanrovo. She sentences Savo and Nazu Tei to death, strips Goztan of power, and promotes Cutanrovo, cementing the victory of the hardline faction and setting Ukyu-taasa on a path of renewed militarism and oppression.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }]
    },
    {
        num: 26,
        title: "The Winter Festival",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "The aspen wishes to stand still, but the wind does not stop.",
        speaker: "Narrator",
        summary: "This chapter provides more detail on life at the secret Agon base before the attack. Théra struggles to connect with her sons, who are more Agon than Dara. She discovers their fascination with *arucuro tocua* ('living bones'), intricate mechanical toys powered by wind or weights, a native engineering tradition. A tense debate with the shaman Adyulek over oral versus written traditions culminates in a 'voice painting' ceremony, a powerful performance that gives Théra a deeper appreciation for the embodied wisdom of Agon culture. The chapter highlights the ongoing cultural clashes and Théra's efforts to bridge them, all under the shadow of the impending attack.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Rokiri Aragoz", path: "/characters/rokiri-aragoz" }]
    },
    {
        num: 27,
        title: "Exiles",
        date: "SECRET AGON BASE IN KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "I was wrong, so reserve your punishments for me.",
        speaker: "Princess Théra",
        summary: "The devastating Lyucu surprise attack on Kiri Valley is depicted in brutal detail. The Agon-Dara alliance is shattered, their base burned, and their forces scattered. Souliyan Aragoz and Nméji Gon lead a heroic last stand, sacrificing themselves to allow a small group of survivors to escape. Théra and Takval flee into the mountains with a handful of warriors and children, their dream of rebellion in ruins. Théra is consumed by guilt, blaming her own strategic decisions for the disaster. The chapter ends with the survivors as desperate refugees, facing a harsh winter in the wilderness with little hope.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }, { name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }]
    },
    {
        num: 28,
        title: "Obedience",
        date: "KRIPHI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "The supremacy of the Lyucu isn’t negotiable.",
        speaker: "Tanvanaki",
        summary: "In Kriphi, the food crisis caused by Cutanrovo's purges deepens. Tanvanaki is forced to demand more tribute from Dara to prevent mass starvation in Dasu. A tense council meeting with Goztan, Vocu Firna, and Cutanrovo reveals the deep ideological divisions among the Lyucu leadership. Cutanrovo argues for total submission of the natives, turning them into mindless 'living bones' (*arucuro tocua*). The chapter culminates in Tanvanaki realizing Cutanrovo's ultimate ambition: not just to purify Ukyu-taasa, but to wage war on the Lyucu homeland of Ukyu-Gondé itself, viewing Pékyu Cudyu as weak and corrupt.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }]
    },
    {
        num: 29,
        title: "The Grand Examination",
        date: "PAN: THE THIRD MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The people most affected by change are also the ones who know best how to change.",
        speaker: "Jia Matiza",
        summary: "Zomi Kidosu's radical reform of the Grand Examination—requiring all essays to be written in the vernacular using the phonetic zyndari script—sparks a rebellion of scholars. Empress Jia uses the crisis to teach Zomi a lesson about the power of tradition and the deep cultural significance of the Ano logograms. She explains that the logograms are not just a writing system but a connection to the collective memory and identity of the people. Zomi, humbled, rescinds the rule. She is publicly disgraced and resigns her post, choosing to focus on research. The chapter is a deep dive into the philosophy of language, tradition, and the politics of reform.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "The Grand Examination", path: "/concepts/grand-examination" }]
    },
    {
        num: 30,
        title: "The Sea of Tears",
        date: "THE SALT FLATS SOUTH OF THE SEA OF TEARS, UKYU-GONDÉ: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "They did not change their minds. This was their plan all along.",
        speaker: "Razutana Pon",
        summary: "After the destruction of Kiri Valley, the captive children, including Tanto and Rokiri, are being transported by a small Lyucu guard detail led by Toof and Radia. During the journey, Toof and Radia stage an escape, overpowering the drunken guards and freeing the children. They reveal to a stunned Tanto that their 'betrayal' was a ruse all along, a desperate plan to separate the children from the main fighting force to give Théra and Takval a better chance to escape. They send the children off on two garinafins with the shaman Sataari and the scholar Razutana as pilots. Toof and Radia stay behind, preparing to face Pékyu Cudyu's wrath with a fabricated story of a rebel attack, a final act of sacrifice for the people they had come to see as their new tribe.",
        links: [{ name: "Sea of Tears", path: "/places/sea-of-tears" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Rokiri Aragoz", path: "/characters/rokiri-aragoz" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }, { name: "Sataari", path: "/characters/sataari" }]
    },
    {
        num: 31,
        title: "The Blossom Gang",
        date: "GINPEN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "We are a family of choice, and we seek a life of clean conscience and constant learning.",
        speaker: "Widi Tucru",
        summary: "This chapter provides the backstory of the Blossom Gang. Each member—Rati Yera, the master machinist and former grave robber; Widi Tucru, the failed scholar and brilliant litigator; Arona Taré, the actress and master of disguise; and Mota Kiphi, the stoic strongman and war hero—is an outcast who has found a chosen family in the gang. Their shared philosophy is one of freedom, creativity, and a commitment to using their unique talents to help the common people. They are a force for chaotic good in a world of rigid hierarchies.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 32,
        title: "Treasure",
        date: "MEANWHILE, IN KRIPHI.",
        quote: "I am my father’s daughter. I cannot afford to be weak, to allow my own feelings to destroy the dream of my people.",
        speaker: "Tanvanaki",
        summary: "In Kriphi, Tanvanaki struggles to deal with the fallout from Cutanrovo's purges. The destruction of the granaries in Dasu has created a food crisis, and she is forced to demand more tribute from Dara. The chapter reveals the deep divisions within the Lyucu court and Tanvanaki's own internal conflict between her father's ruthless vision of conquest and her growing understanding of the complexities of ruling a conquered people. She is trapped between the hardliners who demand purity and the accommodationists (and her husband, Timu) who advocate for a more integrated society.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 33,
        title: "The First Contest: Part II",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Mind-pleasure comes from love, Kinri. Love of a story, love of a person, love of a memory, love of a hope.",
        speaker: "Princess Fara",
        summary: "The cooking contest between the Splendid Urn and the Treasure Chest begins. Mozo Mu presents an incredibly complex and artistic dish based on ancient recipes and literary allusions, dazzling the judges. Mati, unable to procure rare ingredients due to Tiphan Huto's sabotage, serves simple, rustic pot stickers. However, her team, aided by the theatricality of the Blossom Gang and the storytelling of Princess Fara (in disguise as 'Dandelion'), presents the dish as a celebration of Haanese history and ingenuity. They use innovative cooking techniques like a solar oven and a pressure cooker, turning the simple dish into a spectacle. The Splendid Urn wins the first round, not through superior ingredients, but through superior storytelling and a deeper connection to the people's identity.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }, { name: "Kinri", path: "/characters/kinri" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 34,
        title: "The Second Contest",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "You have to trust Arona’s makeup skills.",
        speaker: "Widi Tucru",
        summary: "The second contest is a competition of service. The Treasure Chest, with its massive staff flown in from all over Dara, seems to have an insurmountable advantage. The Splendid Urn, with only a skeleton crew remaining after Huto's campaign of sabotage, appears doomed. However, Kinri, inspired by Rati Yera's maze-running cart, has a brilliant idea. Working with the Blossom Gang, they build a fleet of small, programmable, self-driving carts, each 'driven' by an adorable animal. The carts deliver food and clear tables, turning the service into a delightful and magical spectacle. Tiphan Huto's attempt to cheat by prioritizing service to the judges backfires spectacularly. The Splendid Urn wins the second round through sheer ingenuity and charm, proving that cleverness can overcome brute force.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Rati Yera", path: "/characters/rati-yera" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }]
    },
    {
        num: 35,
        title: "The Third Contest",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Caricaturing your enemy inevitably involves caricaturing yourself. Why not tell a true story of the Lyucu? A story that inspires?",
        speaker: "Princess Fara",
        summary: "The final contest is entertainment. Tiphan Huto stages a massive, extravagant parade that re-enacts Emperor Mapidéré's conquest of Dara, a spectacle of power and wealth designed to appeal to a growing sense of nationalist nostalgia. The Splendid Urn counters with a far more intimate and innovative experience: a thrilling cart ride through a tent that tells the Agon/Lyucu creation myth of Kikisavo and Afir, a story Kinri had shared with Fara. The ride is a marvel of engineering and storytelling, a celebration of a foreign culture that resonates deeply with the audience's own values of courage and resilience. The Splendid Urn wins the final round, and the title, by telling a more profound and emotionally resonant story about knowing one's enemy.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Kinri", path: "/characters/kinri" }]
    },
    {
        num: 36,
        title: "The Sea of Tears",
        date: "THE SALT FLATS SOUTH OF THE SEA OF TEARS, UKYU-GONDÉ: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "The Every-Mother demands that we survive winter in this forbidden place—it’s up to us to see how many of us will make it.",
        speaker: "Sataari",
        summary: "This chapter follows the small band of children and their two adult guardians, Sataari and Razutana, as they journey through the desolate salt flats after their escape. They discover a series of massive, ancient geoglyphs, drawings of birds and other creatures etched into the landscape, the work of a forgotten civilization. The discovery is a moment of wonder and mystery, hinting at the deep history of Ukyu-Gondé. They finally reach their destination, Taten-ryo-alvovo, the 'City of Ghosts,' an ancient and sacred Agon ruin where they must try to survive the harsh winter.",
        links: [{ name: "Sea of Tears", path: "/places/sea-of-tears" }, { name: "Sataari", path: "/characters/sataari" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }, { name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }]
    },
    {
        num: 37,
        title: "The First Contest: Part I",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The best restaurants are theaters where the desires of the heart are staged.",
        speaker: "Lolotika Tuné",
        summary: "This chapter provides a more detailed, behind-the-scenes look at the first cooking contest. It delves into the specific dishes prepared by both Mozo Mu and Mati, the stories they tell, and the philosophical and cultural ideas they represent. Dandelion's role as a storyteller and strategist is highlighted, as she helps Mati craft a narrative that transforms simple food into a powerful statement about Haanese identity and resilience.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }]
    },
    {
        num: 38,
        title: "Obedience",
        date: "MEANWHILE, IN KRIPHI.",
        quote: "The supremacy of the Lyucu isn’t negotiable.",
        speaker: "Tanvanaki",
        summary: "In Kriphi, the food crisis caused by Cutanrovo's purges deepens. Tanvanaki is forced to demand more tribute from Dara to prevent mass starvation in Dasu. A tense council meeting with Goztan, Vocu Firna, and Cutanrovo reveals the deep ideological divisions among the Lyucu leadership. Cutanrovo argues for total submission of the natives, turning them into mindless 'living bones' (*arucuro tocua*). The chapter culminates in Tanvanaki realizing Cutanrovo's ultimate ambition: not just to purify Ukyu-taasa, but to wage war on the Lyucu homeland of Ukyu-Gondé itself, viewing Pékyu Cudyu as weak and corrupt.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 39,
        title: "The First Contest: Part II",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Love has no place for lies.",
        speaker: "Widow Wasu",
        summary: "The cooking contest concludes. Mozo Mu reveals that she and her family are being held hostage by Tiphan Huto, who is forcing her to compete. In a moment of profound integrity, Widow Wasu chooses to concede the contest rather than win through the exploitation of a child. The act solidifies the moral high ground for the Splendid Urn and sets the stage for the next round of the competition.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }]
    },
    {
        num: 40,
        title: "Letters",
        date: "DIMUSHI: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "An inflexible general uses cavalry to counter cavalry... a flexible general sees the commonality between all realms of war.",
        speaker: "Gin Mazoti (from her treatise)",
        summary: "This chapter consists of a series of letters between the main characters. Gori Ruthi reports on Princess Aya Mazoti's disastrous first military command. Fara writes to Aya, offering sisterly support. Emperor Phyro writes to Zomi, revealing his secret plan to build a garinafin force and asking for her help in circumventing his mother's authority. The letters reveal the growing political tensions and the secret plans being hatched by the younger generation.",
        links: [{ name: "Dimushi", path: "/places/dimushi" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Gori Ruthi", path: "/characters/gori-ruthi" }]
    },
    {
        num: 41,
        title: "A Curse",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The race goes not always to the swift. Why don’t you go home to Zudi and look for another opportunity to invest the funds once we’ve sold this place?",
        speaker: "Widow Wasu",
        summary: "Tiphan Huto's sabotage of the Splendid Urn continues, with a series of events designed to look like a supernatural curse. The chapter details the investigation by the Blossom Gang as they try to uncover the scientific explanations behind the seemingly magical occurrences. The investigation highlights their unique skills and their commitment to reason and evidence in a world often ruled by superstition.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 42,
        title: "The Second Contest",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "You have to trust Arona’s makeup skills.",
        speaker: "Widi Tucru",
        summary: "The second contest, a competition of service, takes place. The chapter provides a more detailed look at the operation of the self-driving carts and the clever engineering behind them. It also highlights the teamwork and camaraderie of the Splendid Urn's staff and the Blossom Gang as they pull off their audacious plan. The victory is a triumph of ingenuity over brute force and a testament to the power of unconventional thinking.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 43,
        title: "The Third Contest",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The best stories are not about victory, but about the grace of the vanquished.",
        speaker: "Princess Fara",
        summary: "The final contest is entertainment. Tiphan Huto stages a massive, extravagant parade that re-enacts Emperor Mapidéré's conquest of Dara, a spectacle of power and wealth designed to appeal to a growing sense of nationalist nostalgia. The Splendid Urn counters with a far more intimate and innovative experience: a thrilling cart ride through a tent that tells the Agon creation myth of Kikisavo and Afir. The ride is a marvel of engineering and storytelling, a celebration of a foreign culture that resonates deeply with the audience's own values of courage and resilience. The Splendid Urn wins the final round, and the title, by telling a more profound and emotionally resonant story.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 44,
        title: "Alone",
        date: "WORLD’S EDGE MOUNTAINS: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "I am useless. I’ve ruined everything.",
        speaker: "Princess Théra",
        summary: "In the aftermath of the disaster at Kiri Valley, Théra is consumed by grief and guilt. She withdraws from her leadership role, leaving Takval and the other survivors to fend for themselves. The chapter is a powerful depiction of depression and trauma, as Théra struggles with the weight of her failures and the loss of her children. Her journey through the mountains is a journey through her own internal landscape of despair.",
        links: [{ name: "World's Edge Mountains", path: "/places/worlds-edge-mountains" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 45,
        title: "Last Bite",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Love, once given, cannot be rescinded.",
        speaker: "Princess Fara",
        summary: "The Blossom Gang, along with Kinri and Fara, investigate a series of strange occurrences at a warehouse owned by Tiphan Huto, which they suspect is a front for his smuggling operations. They discover that Huto is kidnapping skilled artisans and engineers for the Lyucu. They set a trap for Huto, leading to his capture. The investigation brings Kinri and Fara closer, and their romance blossoms. The chapter ends with the gang deciding to infiltrate Last Bite, a secret Imperial research facility, to uncover the truth about Marshal Gin Mazoti's death.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Last Bite", path: "/places/last-bite" }]
    },
    {
        num: 46,
        title: "Family",
        date: "LAST BITE: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "My name is Savo Ryoto.",
        speaker: "Savo Ryoto (Kinri)",
        summary: "The Blossom Gang and Fara successfully infiltrate Last Bite. Kinri, disguised as Zomi Kidosu, discovers a secret study filled with objects from his past, including the turtle shell his mother gave him. He realizes the study belongs to Zomi. Zomi herself appears, and through the turtle shell, she and Kinri discover they are long-lost half-siblings, both fathered by Oga Kidosu. Kinri is forced to confront the truth about his identity and his family's complex history. He chooses to embrace his Lyucu heritage and his identity as Savo Ryoto, a decision that creates a painful rift between him and Fara. The chapter ends with Savo escaping Last Bite, now a fugitive with a new understanding of himself and his place in the world.",
        links: [{ name: "Last Bite", path: "/places/last-bite" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }]
    },
    {
        num: 47,
        title: "The First Contest: Part I",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The best restaurants are theaters where the desires of the heart are staged.",
        speaker: "Lolotika Tuné",
        summary: "This chapter provides a more detailed, behind-the-scenes look at the first cooking contest. It delves into the specific dishes prepared by both Mozo Mu and Mati, the stories they tell, and the philosophical and cultural ideas they represent. Dandelion's role as a storyteller and strategist is highlighted, as she helps Mati craft a narrative that transforms simple food into a powerful statement about Haanese identity and resilience.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }]
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
                            <p>With the invasion of Dara underway, two empires stand on the brink of war. In the occupied capital of Kriphi, Empress Jia Matiza, now Regent, plots to undermine the Lyucu conquerors from within, using every tool of spycraft and sabotage at her disposal. Across the sea, her daughter Princess Théra leads a desperate expedition into the heart of the Lyucu homeland, seeking to cut off the invasion at its source. As new alliances are forged in the crucible of war and old loyalties are tested, a new generation of heroes, inventors, and schemers rises to shape the future of both peoples. The Veiled Throne is a sprawling epic of silkpunk invention, political intrigue, and the eternal human struggle between tradition and progress, vengeance and forgiveness.</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-xl mb-4 text-teal-600 dark:text-teal-400">Book Details</h3>
                        <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> November 2, 2021 by Saga Press</li>
                            <li><strong>Pages:</strong> 1008 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781481424356</li>
                        </ul>
                        <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 space-y-2">
                            <a href="https://www.goodreads.com/book/show/18952403-the-veiled-throne" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center text-base">
                                View on Goodreads <ExternalLinkIcon />
                            </a>
                            <br />
                            <a href="https://www.amazon.com/Veiled-Throne-Dandelion-Dynasty-Book/dp/1481424358" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center text-base">
                                Purchase on Amazon <ExternalLinkIcon />
                            </a>
                            <p className="text-xs text-gray-400 dark:text-gray-500 pt-2 italic">
                                (As an Amazon Associate, I earn from qualifying purchases.)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TABLE OF CONTENTS --- */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-300 dark:border-gray-600">Contents</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
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
                                <span className="block text-right not-italic font-semibold mt-2">&mdash; {chapter.speaker}</span>
                            </blockquote>
                            <div className="my-4 text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none" style={{ whiteSpace: 'pre-line' }}>{formatAsteriskToBold(chapter.summary)}</div>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
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