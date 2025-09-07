import Image from 'next/image';
import Link from 'next/link';
import { TopNavigation, BottomNavigation } from '../../components/layout/PageNavigation';
import { formatAsteriskToBold } from '../../utils/textFormatting';

// --- ACCURATE & DETAILED DATA FOR THE VEILED THRONE ---
const chapters = [
    {
        num: 1,
        title: "A Night Run",
        date: "TATEN, UKYU-GONDÉ: THE FIFTH MONTH IN THE TWELFTH YEAR AFTER STRANGERS FROM AFAR ARRIVED",
        quote: "I'd love to see either of you try maintaining a peaceful household with four husbands.",
        speaker: "Goztan Ryoto",
        summary: "Goztan Ryoto, tiger-thane of the Five Tribes of the Antler, frustrated by the bickering of her four husbands, goes for a night run through the Lyucu capital of Taten. She runs beyond the city to Victory Cove, where the captured Dara city-ships are anchored. Her path is blocked by two young guards, whom she easily disarms. The confrontation is interrupted by ten-year-old Vadyu (Tanvanaki), daughter of Pékyu Tenryo. She has snuck out to ride Korva, a young garinafin she wants to bond with. Seeing the garinafin is exhausted and overheating, Goztan uses her expertise to care for it. As Goztan reminisces about her own youth, Vadyu, mistakenly believing Goztan is an Agon spy, clubs her from behind and knocks her unconscious.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Garinafin", path: "/concepts/garinafin" }, { name: "Taten", path: "/places/taten" }]
    },
    {
        num: 2,
        title: "A Secret Expedition",
        date: "VICTORY COVE, UKYU-GONDÉ: THE FIFTH MONTH IN THE TWELFTH YEAR AFTER STRANGERS FROM AFAR ARRIVED",
        quote: "A cruben begets a cruben, a dyran begets a dyran, and an octopus's daughter can crack eight oysters all at the same time.",
        speaker: "Oga Kidosu",
        summary: "Goztan awakens bound and captive by a bonfire. The warriors present are part of a secret expedition preparing to sail to Dara. The storyteller entertaining them is a Dara slave she vaguely recognizes: Oga Kidosu. Vadyu interrogates Goztan, revealing her reason for suspicion: Goztan once mentioned her mother was the thane before her, but when declaring her lineage to the guards, she named her father. To Vadyu, this contradiction proves Goztan is an imposter, as Lyucu succession is strictly matrilineal. Goztan is trapped by the child's logic and her own complex past, realizing she will miss her crucial dawn audience with the pékyu.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Pekyu Tenryo", path: "/characters/pekyu-tenryo" }]
    },
    {
        num: 3,
        title: "The Message on the Turtle Shell",
        date: "UKYU-GONDÉ: THE YEAR THE CITY-SHIPS ARRIVED FROM DARA",
        quote: "A lie became the truth when enough people had reasons to pretend it was true.",
        speaker: "Narrator",
        summary: "A flashback to twelve years prior, when Admiral Krita's fleet arrived. A young Goztan volunteers to be a 'companion' to the Dara invaders to act as a spy. While serving the arrogant Captain Dathama, she witnesses him about to whip Lyucu litter-bearers. The moment is interrupted by the peasant Oga Kidosu, who stages the 'discovery' of a turtle shell with markings etched using a Lyucu technique. Dathama, ignorant and ambitious, interprets it as a divine sign legitimizing the conquest. Goztan understands the ruse is meant to save the litter-bearers and plays along, feigning a fit of religious terror at the 'portent,' which convinces the superstitious Dara.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Pekyu Tenryo", path: "/characters/pekyu-tenryo" }, { name: "Emperor Mapidere", path: "/characters/emperor-mapidere" }]
    },
    {
        num: 4,
        title: "Storytellers",
        date: "UKYU-GONDÉ: THE YEAR THE CITY-SHIPS ARRIVED FROM DARA",
        quote: "The race of humankind grows toward infinity, even as the nature of each individual is limited.",
        speaker: "Tazu",
        summary: "After the turtle shell incident, Goztan confronts Oga, who surprises her by speaking Lyucu. They find common ground in their shared oppression and exchange myths. Oga tells a Dara parable about perspective (a whale and a shrimp), while Goztan shares the Lyucu creation myth of Kikisavo and Afir. The fragile bond shatters when Goztan realizes Oga has altered his story, weaving in Lyucu cultural elements. She sees this not as empathy but as colonial appropriation, a trivialization of her sacred traditions. Convinced the cultural gulf between them is unbridgeable, she turns away from him in anger.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "The Gods of Dara", path: "/gods" }, { name: "Lyucu Culture", path: "/concepts/lyucu-culture" }]
    },
    {
        num: 5,
        title: "Birthright",
        date: "UKYU-GONDÉ: THE YEAR THE CITY-SHIPS ARRIVED FROM DARA",
        quote: "In war, we become more like our enemies, whether we want to or not.",
        speaker: "Pekyu Tenryo",
        summary: "The flashback continues. After the Lyucu seize the city-ships, Goztan, pregnant by her captor, suffers a miscarriage. Her mother, Thane Tenlek Ryoto, uses this as a pretext to disinherit her, claiming her nature is 'tainted.' The true reason is political anger over Goztan refusing to claim Dara spoils. In a heated confrontation, Goztan's father, Dayu, is killed by Tenlek. Exiled, Goztan becomes a reaver, building a new tribe from outcasts and forging alliances. She eventually returns to challenge and kill her mother, taking her birthright. To honor her father and spite her mother, she claims her lineage through Dayu, a shocking break from matrilineal tradition which Pékyu Tenryo accepts.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Pekyu Tenryo", path: "/characters/pekyu-tenryo" }]
    },
    {
        num: 6,
        title: "It's My Nature",
        date: "VICTORY COVE, UKYU-GONDÉ: THE FIFTH MONTH IN THE TWELFTH YEAR AFTER STRANGERS FROM AFAR ARRIVED",
        quote: "Aphorisms can’t help you survive, but the ability to hold in mind competing ideals just might.",
        speaker: "Oga Kidosu",
        summary: "Returning to the present, Goztan explains her patrilineal declaration to a stunned Vadyu. Oga concludes his story for the warriors—about a shark raised by dolphins who acts on both its natures to save others. Vadyu brings Oga to identify Goztan. Oga cleverly confirms Goztan’s identity and heroism without betraying her confidence, finally convincing Vadyu to release her. Vadyu decides to confess her own disobedience to her father. Alone for a moment, Goztan and Oga share a final, tense exchange. Oga reveals he has been trying to subtly educate the Lyucu youth with Dara ideals, a last, desperate hope for peace. A fragile, unspoken understanding passes between them as they part.",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 7,
        title: "A Chase Beyond the Storms",
        date: "JUST BEYOND THE WALL OF STORMS: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Every single person on this expedition is irreplaceable... We’re not going to jump to sacrifice as the first solution to every problem. That’s the easy way out.",
        speaker: "Princess Thera",
        summary: "The narrative leaps forward eight years. Princess Théra, now leading an expedition to the Lyucu homeland, has successfully passed through the Wall of Storms with a small fleet. They are spotted by a lone Lyucu city-ship that survived the Wall's closing. The Lyucu ship dispatches a single, weakened garinafin to investigate. Théra and her husband, the Agon prince Takval, devise an ingenious defense: they construct and fly ten enormous kites shaped like tusked tigers, the garinafins' natural predators. The terrifying spectacle proves too much for the malnourished and psychologically fragile garinafin, which flees in terror, buying the Dara fleet precious time.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "The Wall of Storms", path: "/concepts/wall-of-storms" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 8,
        title: "Shadow Play",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "We each have a role in the grand shadow play of history, but we also get to write our own lines.",
        speaker: "Princess Thera",
        summary: "With the faster Lyucu city-ship closing in, Théra's fleet employs another brilliant deception. They stretch a massive screen between two ships and stage an elaborate shadow play depicting a heroic Lyucu pilot battling treacherous Dara airships, a story designed to flatter and distract their pursuers. The Lyucu crew, believing it a sign of Dara decadence, celebrates and lets down its guard. The performance is a masterful act of psychological warfare, using art to conceal a deadly military maneuver. Under cover of the spectacle, Théra's flagship, the submersible *Dissolver of Sorrows*, dives to prepare for a surprise attack.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Airships", path: "/concepts/airships" }]
    },
    {
        num: 9,
        title: "The Barnacle and the Whale",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The best-laid plan in the world is no match for the unpredictable storms of reality.",
        speaker: "Admiral Roso",
        summary: "While the Lyucu watch the shadow play, the *Dissolver of Sorrows* maneuvers beneath their city-ship, attaching to the hull like a barnacle. A boarding party led by Commander Tipo Tho and Takval Aragoz drills through the hull to enter the ship's bilge. Their mission is to plant 'wall-buster' explosives at key structural points. However, the clumsy scholar Razutana Pon accidentally sets off a small bomb near the garinafin stables, freeing the beasts and alerting the Lyucu. A chaotic battle breaks out in the ship's lower decks as the Dara party fights to complete their mission.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Tipo Tho", path: "/characters/tipo-tho" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }]
    },
    {
        num: 10,
        title: "The Call of the Tribe",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The nature of the beast will always be revealed.",
        speaker: "Takval Aragoz",
        summary: "The battle inside the city-ship rages, with Takval dueling the Lyucu pilot Toof amidst the chaos of a rampaging garinafin. With her plan failing, Théra unleashes her wildest gambit. The scholar Çami Phithadapu uses a makeshift apparatus to project a song mimicking the call of dome-headed whales into the ocean. A pod of the massive creatures, led by a battle-scarred bull, answers the call and attacks the Lyucu ship, ramming its hull. In the chaotic sinking, the garinafin Tana sacrifices itself to save Takval, Toof, and Radia. They are the only survivors rescued from the water by Théra's victorious but damaged ship.",
        links: [{ name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }, { name: "Cami Phithadapu", path: "/characters/cami-phithadapu" }]
    },
    {
        num: 11,
        title: "The Stowaway",
        date: "ALONG THE BELT CURRENT TO UKYU-GONDÉ: THE SIXTH MONTH IN THE FIRST YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "So much of learning... consisted of forgetting how much you already knew.",
        speaker: "Princess Thera",
        summary: "The gods of Dara debate their role in mortal affairs, with Lutho deciding to become mortal to join Théra's expedition. Aboard the fleet, a stowaway is discovered: a feral, non-verbal girl with an uncanny ability for mimicry. Named Thoryo, she learns language at a breathtaking pace. Her education becomes a communal project, forcing the Dara crew, Takval, and the Lyucu captives Toof and Radia to teach her their respective languages and cultures. Thoryo acts as a powerful catalyst for cultural exchange, breaking down barriers of prejudice as the former enemies are united in the shared, humanizing task of teaching a child.",
        links: [{ name: "The Gods of Dara", path: "/gods" }, { name: "Lutho", path: "/gods/lutho" }, { name: "Thoryo", path: "/characters/thoryo" }, { name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }]
    },
    {
        num: 12,
        title: "Lurodia Tanta",
        date: "LURODIA TANTA, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR SINCE THÉRA DEPARTED DARA",
        quote: "If there’s going to be death because of me, whether it’s the horses or you or anyone else, the least I can do is not look away. That would be barbaric.",
        speaker: "Princess Thera",
        summary: "Théra's expedition makes landfall in the desolate desert of Lurodia Tanta, home of the exiled Agon tribes. They begin a grueling trek toward the oasis of Sliyusa Ki. As their water supplies dwindle dangerously, Thoryo has a moment of childlike insight, wishing they could 'make dew.' This inspires Théra to invent a solar still, a device that uses the sun's heat to distill pure, drinkable water from cactus juice and even urine. Her ingenuity saves the expedition from certain death.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Thoryo", path: "/characters/thoryo" }, { name: "Lurodia Tanta", path: "/places/lurodia-tanta" }, { name: "Sliyusa Ki", path: "/places/sliyusa-ki" }]
    },
    {
        num: 13,
        title: "An Unwelcome Welcome",
        date: "THE OASIS OF SLIYUSA KI, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR SINCE THÉRA DEPARTED DARA",
        quote: "You claim to speak for the Agon, yet your people are huddled here in the desert, eking out a life of terror in the shadow of your Lyucu masters.",
        speaker: "Princess Thera",
        summary: "The expedition reaches the oasis of Sliyusa Ki, but the welcome is tense. Takval's uncle, Volyu Aragoz, chief of the exiled Agon, is a broken man who survives by appeasing the Lyucu. He dismisses Théra's group as weak refugees and demands they submit as vassals. In a powerful, defiant speech, Théra confronts Volyu's cowardice and reminds the assembled Agon chieftains of their proud warrior heritage. Her courage wins them over, and they force a humiliated Volyu to agree to an alliance of equals.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }, { name: "Sliyusa Ki", path: "/places/sliyusa-ki" }]
    },
    {
        num: 14,
        title: "Commitment",
        date: "THE OASIS OF SLIYUSA KI, UKYU-GONDÉ: THE FIFTH MONTH IN THE SECOND YEAR SINCE THÉRA DEPARTED DARA",
        quote: "The heart isn’t a fixed pool like a water bubble in the grass sea; it grows and swells like the ocean.",
        speaker: "Princess Thera",
        summary: "Takval's mother, Souliyan, reveals the full extent of Volyu's treachery: he has been systematically betraying Agon rebels to the Lyucu for years. Realizing Volyu intended to betray them as well, they stage a bloodless coup. They spare his life, forcing him to continue as a figurehead chief, now an unwitting double agent. The alliance is sealed with the marriage of Théra and Takval, which deepens into genuine partnership. Théra discovers she is pregnant. As a final act of hope, they carve a coded message onto the shells of sea turtles and release them, praying word of their mission reaches Dara.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 15,
        title: "Camera Obscura",
        date: "PAN: THE SIXTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "It’s more fun to paint the way I want to rather than copy the work of the gods anyway.",
        speaker: "Princess Fara",
        summary: "Eight years after Théra's departure, a fragile peace holds in Dara, but the Dandelion Court is tense. Jia rules as Regent for Emperor Phyro, a young man eager for war. Princess Fara, the youngest sibling, has grown into an artist. Disdaining politics, she builds a camera obscura in the palace garden—a dark room with a lens that projects an inverted image of the outside world onto a wall. She uses it to study painting and perception. The device serves as a metaphor for the novel's themes: the difficulty of seeing truth clearly, the inversion of power, and the subjective nature of reality. Fara and Phyro share a moment of connection, but their differing priorities—art versus war—highlight the family's deep divisions.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 16,
        title: "The Temple of Péa-Kiji",
        date: "MEANWHILE, BY THE SHORES OF LAKE ARISUSO ON MOUNT KIJI, RUI",
        quote: "If only the other ministers took as much interest as you do in the lives of the people of Dara.",
        speaker: "Prince Timu",
        summary: "In occupied Rui, at the Temple of Péa-Kiji, the merged Lyucu-Dara deity, we see the fragile domestic life of Prince Timu (now puppet Emperor Thaké) and Pékyu Tanvanaki. Their deep political and philosophical disagreements are reflected in their children, Todyu and Dyana, who are caught between Lyucu and Dara cultures. The arrival of Tanvanaki, fresh from brutally suppressing a Dara rebellion, highlights the chasm between her ruthless pragmatism and Timu's idealism. The scene is a microcosm of the cultural war and failing assimilation policy in Unredeemed Dara.",
        links: [{ name: "Mount Kiji", path: "/places/mount-kiji" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Kiji", path: "/gods/kiji" }]
    },
    {
        num: 17,
        title: "Moonbread",
        date: "KIRI VALLEY: THE NINTH MONTH IN THE EIGHTH YEAR AFTER THÉRA DEPARTED DARA",
        quote: "This. Is. Not. Dara.",
        speaker: "Tanto Aragoz",
        summary: "At the secret Agon base in Kiri Valley, Théra tries to celebrate the Dara High-Autumn Festival with her sons, Tanto and Rokiri. The boys, raised as Agon, reject the traditional moonbread and the logogram playing blocks their mother made. Théra is heartbroken, feeling her children are rejecting their Dara heritage. The chapter poignantly illustrates the challenges of raising bicultural children and Théra's growing sense of isolation and failure. A talk with Thoryo helps her realize she must engage with Agon culture on its own terms, not just impose her own.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Rokiri Aragoz", path: "/characters/rokiri-aragoz" }, { name: "Thoryo", path: "/characters/thoryo" }]
    },
    {
        num: 18,
        title: "The Veiled Throne",
        date: "PAN: THE SIXTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "You’re not ready.",
        speaker: "Jia Matiza",
        summary: "Emperor Phyro attends a meeting of the Inner Council in Pan, chafing under his mother Jia's regency. He is forced to sit behind a veiled screen, a symbol of his limited power. He proposes sending a Lyucu defector named Ofluro to train his secret garinafin force at Tiro Cozo. Jia is skeptical, seeing Ofluro as a potential spy. The Prime Minister, Cogo Yelu, masterfully outmaneuvers Jia with legalistic arguments, forcing her to grant asylum to Ofluro and his family, effectively giving Phyro what he wants. The chapter highlights the deep political and ideological rift between mother and son regarding the future of Dara and the threat from Unredeemed Dara.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "Ofluro", path: "/characters/ofluro" }, { name: "Tiro Cozo", path: "/places/tiro-cozo" }]
    },
    {
        num: 19,
        title: "Spies",
        date: "KRIPHI: THE EIGHTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "A clever woodpecker... will continue to try out new trees even after it has made a choice for nesting... Or if the tree it has chosen starts to die.",
        speaker: "Lady Ragi",
        summary: "Lady Ragi, Empress Jia's adopted daughter, leads a tribute mission to Kriphi. She meets with the Dara traitor Noda Mi, now a high-ranking Lyucu official. Under the cover of a smuggling deal, Ragi probes Noda's loyalty, using metaphors of birds and trees to suggest the Lyucu regime is weakening and that he should reconsider his allegiances. The opportunistic Noda agrees to pass a seemingly simple message from Jia to her son, Timu, in exchange for a crate of priceless wine. Their entire conversation is overheard by a nameless Lyucu spy clinging to the outside of the ship.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Noda Mi", path: "/characters/noda-mi" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 20,
        title: "Living Bones",
        date: "KIRI VALLEY: THE NINTH MONTH IN THE EIGHTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA",
        quote: "It’s always easy to negotiate with people like him, because all he cares about is himself.",
        speaker: "Princess Thera",
        summary: "Takval's treacherous uncle, Volyu, arrives at the Kiri Valley base. He brings intelligence that Pékyu Cudyu and all major Lyucu thanes will soon gather for a ceremony, presenting a perfect opportunity for a decisive strike. Théra, Takval, and Souliyan debate the strategy. Takval skillfully manipulates his uncle, securing his cooperation as a spy while giving him no real power. The plan is set for a surprise attack on the Lyucu capital of Taten that could end the war in Ukyu-Gondé.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }]
    },
    {
        num: 21,
        title: "Calculations",
        date: "THE RORO HILLS NORTH OF KRIPHI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "I have to accept that Luan Zya was more like my father than he was like me.",
        speaker: "Tanvanaki",
        summary: "Tanvanaki confirms the truth her spy overheard: the Wall of Storms will reopen in just over two years, and a Lyucu reinforcement fleet is coming. The news throws her long-term plans for assimilation into chaos. Meanwhile, in Pan, Empress Jia and Zomi Kidosu deduce from Ragi's report that Tanvanaki is using pirates to abduct skilled Dara engineers. Jia authorizes Zomi to set a 'honey trap'—leaking false information about a superweapon to lure the Lyucu into feeding them disinformation, a plan mirroring Luan Zya's own deception.",
        links: [{ name: "Roro Hills", path: "/places/roro-hills" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Luan Zya", path: "/characters/luan-zya" }]
    },
    {
        num: 22,
        title: "A Game of Zamaki",
        date: "RUI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "Those who stand on the border between belief and disbelief, leaning toward what is convenient at the moment, make up the majority.",
        speaker: "Nazu Tei",
        summary: "This chapter deepens the relationship between the young Lyucu thane-taasa Savo Ryoto (disguised as Kinri) and his secret Dara teacher, Nazu Tei. She teaches him the complex game of zamaki, using it as a metaphor to discuss history, philosophy, and the nature of truth. Nazu reveals that the official histories of Dara are incomplete, with many powerful women erased from the texts. This lesson plants a seed of doubt in Savo's mind about the absolute truth of the stories he has been taught. Their lesson is interrupted by the arrival of Cutanrovo's soldiers.",
        links: [{ name: "Rui", path: "/places/rui" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }]
    },
    {
        num: 23,
        title: "A Lesson on Truth",
        date: "RUI: THE NINTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "The discovery of an unauthorized native teacher... constitutes a military emergency, and all Imperial edicts... are hereby suspended.",
        speaker: "Cutanrovo Aga",
        summary: "Cutanrovo Aga's purges reach the village of Kigo Yezu. She searches for Savo and Nazu Tei. Savo reveals himself, hoping to de-escalate, but his naive intervention backfires when he accidentally confirms the forbidden master-pupil relationship. Cutanrovo seizes this as proof of a conspiracy. She brutally tortures the village elder's baby to extract a 'confession' about hidden 'contraband' (an old zamaki set), then orders the entire village massacred by garinafin fire. Savo and Nazu Tei are arrested. The chapter is a horrifying depiction of the purges' brutality and the tragic consequences of Savo's good intentions.",
        links: [{ name: "Kinri", path: "/characters/kinri" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Kigo Yezu", path: "/places/kigo-yezu" }]
    },
    {
        num: 24,
        title: "Prisoners",
        date: "KRIPHI: THE TENTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "Expand your heart and listen.",
        speaker: "Nazu Tei",
        summary: "Savo is imprisoned in a sea-cave awaiting execution. In a final conversation, Nazu Tei tells him the most important lesson is not learning facts, but learning to distinguish true stories from false ones by listening to his heart. That night, his mother, Goztan, engineers his escape with pirates. She gives him the turtle shell carved years ago by Oga Kidosu, telling him it will guide him. Savo, now a fugitive under the name Kinri Rito, sails for Dara, desperate for the truth his teacher spoke of.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Nazu Tei", path: "/characters/nazu-tei" }]
    },
    {
        num: 25,
        title: "Judgment",
        date: "KRIPHI: THE TENTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM",
        quote: "Our reign is named Audacious Freedom, but both parts are lies! You have all been living as Cowardly Slaves!",
        speaker: "Emperor Thaké (Timu)",
        summary: "At a formal court in Kriphi, Cutanrovo publicly accuses Savo of treason, attacking Goztan and the accommodationists. Emperor Thaké (Timu), empowered by his mother's secret message, delivers a courageous speech denouncing the purges. His outburst backfires when Cutanrovo reveals the explosive secret that a Lyucu reinforcement fleet is coming, galvanizing the hardliners. Politically outmaneuvered, Tanvanaki sides with Cutanrovo. She sentences Savo and Nazu Tei to death, strips Goztan of power, and promotes Cutanrovo, cementing the hardline victory and setting Ukyu-taasa on a path of renewed oppression.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }]
    },
    {
        num: 26,
        title: "The Winter Festival",
        date: "KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "My heart is heavy with doubt, but I am not the pékyu nor the Princess of Dara.",
        speaker: "Souliyan Aragoz",
        summary: "The combined Agon and Dara forces at the Kiri Valley base celebrate the Winter Festival. The mood is festive but tense, as everyone anticipates the coming attack on Taten. Volyu Aragoz arrives with more intelligence, solidifying the plan. Souliyan expresses deep misgivings about attacking the Lyucu during a sacred festival, fearing divine anger, but is overruled by Théra and Takval's strategic calculations. The celebration continues with a storytelling dance, but the joyous occasion is shattered when the valley comes under a massive, fiery surprise attack from Lyucu garinafins.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }]
    },
    {
        num: 27,
        title: "Exiles",
        date: "KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "The aspen wishes to stand still, but the wind does not stop.",
        speaker: "Narrator",
        summary: "The Lyucu surprise attack, led by Pékyu Cudyu himself and guided by the traitor Volyu Aragoz, devastates Kiri Valley. The Agon-Dara alliance is shattered, their base is burned, and their forces are scattered. Souliyan Aragoz and the Dara commanders Nméji Gon and Tipo Tho lead heroic last stands, sacrificing themselves to allow a small group to escape. Théra and Takval flee into the mountains with a handful of warriors and the children, their dream of rebellion in ruins. Théra is consumed by guilt, blaming her strategic decisions for the disaster. The chapter ends with the survivors as desperate refugees, facing a harsh winter in the wilderness with little hope.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Souliyan Aragoz", path: "/characters/souliyan-aragoz" }, { name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }]
    },
    {
        num: 28,
        title: "Refugees",
        date: "GINPEN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "We are a family of choice, and we seek a life of clean conscience and constant learning.",
        speaker: "Widi Tucru",
        summary: "Shipwrecked and delirious, Savo Ryoto is rescued by fishermen in the Zathin Gulf and brought to Ginpen. He adopts his Dara name, Kinri Rito, and takes a job at the Splendid Urn restaurant, run by Widow Wasu. He meets Princess Fara (in disguise as 'Dandelion') and the Blossom Gang, a group of talented outcasts. He and Mota Kiphi save Fara from a spooked horse. A rivalry begins with the ambitious merchant Tiphan Huto, who is opening a competing restaurant. Kinri finds a new, chosen family while struggling with his secret identity.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }]
    },
    {
        num: 29,
        title: "The Grand Examination",
        date: "PAN: THE THIRD MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The people most affected by change are also the ones who know best how to change.",
        speaker: "Jia Matiza",
        summary: "Zomi Kidosu's reform of the Grand Examination—requiring essays in the vernacular—sparks a rebellion of scholars. Empress Jia uses the crisis to teach Zomi a lesson about the power of tradition and the deep cultural significance of Ano logograms, which are not just a script but a connection to the people's collective memory. Humbled, Zomi rescinds the rule and is publicly disgraced, choosing to leave Pan to focus on research. The chapter is a deep dive into the philosophy of language, tradition, and the politics of reform.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "The Grand Examination", path: "/concepts/grand-examination" }]
    },
    {
        num: 30,
        title: "Pit",
        date: "BY THE SHORES OF LAKE ARISUSO ON MOUNT KIJI, RUI: THE THIRD MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Dara-raaki must be destroyed! We will remake Ukyu-taasa into a paradise!",
        speaker: "Cutanrovo Aga",
        summary: "The narrative returns to Cutanrovo Aga's purge at the Temple of Péa-Kiji. She has the massive wooden statue of the god toppled and chopped into pieces. She then forces the temple clergy and captured scholars to throw the temple's entire library, a priceless repository of Xana culture and knowledge, into a giant pit with the statue fragments. The priests begin to pray, and a giant Mingén falcon, Kiji's pawi, appears. Cutanrovo, in a frenzy of zealous defiance, orders her soldiers to attack the unarmed clergy, massacring them.",
        links: [{ name: "Mount Kiji", path: "/places/mount-kiji" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Kiji", path: "/gods/kiji" }, { name: "Pawi", path: "/concepts/pawi" }]
    },
    {
        num: 31,
        title: "Escape",
        date: "KIRI VALLEY: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "It was the only way. They can’t possibly escape Cudyu with all those children slowing them down.",
        speaker: "Radia",
        summary: "This chapter details the aftermath of the Kiri Valley massacre. The few survivors, led by Takval and Théra, prepare to flee. In a heart-wrenching decision, they agree to separate from the children to improve their chances of escape. Toof and Radia pretend to betray the rebels, 'capturing' the children and delivering them to Pékyu Cudyu. It is a ruse to get the children away from the main pursuit, with Toof and Radia planning a second escape for the children later. The chapter ends with Théra and Takval fleeing on one garinafin while the other, carrying their children, flies in the opposite direction into enemy hands.",
        links: [{ name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }]
    },
    {
        num: 32,
        title: "The Play",
        date: "GINPEN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Even when a snowstorm kills a thousand flowers, the buried thasé-teki dreams of summer bloom.",
        speaker: "Narrator",
        summary: "Kinri sees a street play by Mota Kiphi and Arona Taré about the Battle of Zathin Gulf, which portrays Gin Mazoti as a hero and Pékyu Tenryo as a tyrant. The play deeply troubles him, conflicting with the Lyucu version of history. Afterward, Princess Fara's ('Dandelion') horse is spooked. Kinri and Mota both rush to save her, and Mota's incredible strength stops the horse cold. Kinri is drawn to the Blossom Gang's camaraderie and Fara's spirit. The incident solidifies the bond between the main characters.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 33,
        title: "Treasure",
        date: "MEANWHILE, IN KRIPHI.",
        quote: "I get the feeling that you’re also digging down here in part because you don’t want to be outside.",
        speaker: "Goztan Ryoto",
        summary: "In Kriphi, Goztan Ryoto is horrified to see Cutanrovo's 'purification packs' using captured Dara prisoners for live-target practice for Lyucu children. She rescues the prisoners and seeks out her ally Vocu Firna. She finds him secretly digging a pit under his old mansion to hide 'treasures'—banned Dara books and art—from Cutanrovo's destruction. The chapter highlights the quiet resistance of the accommodationist Lyucu. Meanwhile, a desperate Tanvanaki, facing famine and plague after the purges, is forced to write to Empress Jia and demand even more tribute.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 34,
        title: "The Blossom Gang",
        date: "GINPEN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "We are a family of choice, and we seek a life of clean conscience and constant learning.",
        speaker: "Widi Tucru",
        summary: "This chapter gives the backstories of the members of the Blossom Gang: Rati Yera, the master machinist and former grave robber; Widi Tucru, the failed scholar and brilliant litigator; Arona Taré, the actress and master of disguise; and Mota Kiphi, the stoic strongman and war hero. Each is an outcast who found a chosen family in the gang. Their shared philosophy is one of freedom, creativity, and using their unique talents to help the common folk, setting them up as a force for chaotic good.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 35,
        title: "Know Thy Enemy",
        date: "GINPEN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The Hutos mean to humiliate us by making a big splash. Well, I won’t go down that easy.",
        speaker: "Widow Wasu",
        summary: "Tiphan Huto, humiliated by his encounter with the Blossom Gang, formally challenges the Splendid Urn to a series of three contests for the title of 'Best Restaurant in Ginpen.' The contests will be judged by the city's elite. The first round is cooking. The Splendid Urn's head chef is so terrified upon learning that Huto has hired Mozo Mu—a descendant of the legendary chef Suda Mu—that he has a nervous breakdown. The Blossom Gang, Kinri, and Fara ('Dandelion') join forces with the Splendid Urn to spy on the competition and prepare for the contest.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 37,
        title: "The First Contest: Part I",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The best restaurants are theaters where the desires of the heart are staged.",
        speaker: "Lolotika Tuné",
        summary: "The first cooking contest begins. Mozo Mu creates an artistic masterpiece, 'Music of the Limbs,' a dish full of rare ingredients and literary allusions. The Splendid Urn's sous-chef, Mati, is unable to procure her signature ingredients due to Tiphan Huto's sabotage. She serves simple pot stickers. The chapter details the theatrics of the competition, with Lolo and Séca as hosts, and the stark contrast between Mozo's high art and Mati's rustic fare. It seems like a clear victory for the Treasure Chest.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }]
    },
    {
        num: 38,
        title: "Obedience",
        date: "MEANWHILE, IN KRIPHI.",
        quote: "Once they’ve submitted completely, they’ll become arucuro tocua, living bones who move only by the winds of our will.",
        speaker: "Cutanrovo Aga",
        summary: "In Kriphi, the food crisis caused by Cutanrovo's purges worsens, forcing Tanvanaki to consider rationing. In a tense council meeting, Cutanrovo argues for total subjugation of the natives, turning them into mindless 'living bones' (*arucuro tocua*). Her rhetoric recalls Goztan's own humiliation under Captain Dathama, who nicknamed her 'Obedience.' The chapter climaxes when Tanvanaki realizes Cutanrovo's true ambition: not just to purify Ukyu-taasa, but to wage war against what she sees as the 'corrupted' Lyucu homeland of Ukyu-Gondé.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }]
    },
    {
        num: 39,
        title: "The First Contest: Part II",
        date: "GINPEN: THE FIFTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Love has no place for lies.",
        speaker: "Widow Wasu",
        summary: "Mati, seeing she cannot win on cuisine alone, allows Fara ('Dandelion') and the Blossom Gang to take over the presentation for the entrée and dessert rounds. They turn the cooking into a spectacular performance celebrating Haanese history and ingenuity. They tell a better story. After the contest, Mozo Mu reveals to Widow Wasu that she and her family are being held hostage by Tiphan Huto. In a moment of profound integrity, Widow Wasu concedes the contest rather than win through a child's exploitation, solidifying the moral high ground for the Splendid Urn.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Mozo Mu", path: "/characters/mozo-mu" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 40,
        title: "Letters",
        date: "DIMUSHI: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "An inflexible general uses cavalry to counter cavalry... a flexible general sees the commonality between all realms of war.",
        speaker: "Gin Mazoti (from her treatise)",
        summary: "This chapter consists of letters between key characters, revealing their plans and inner conflicts. Gori Ruthi reports on Princess Aya Mazoti's disastrous first military command, where she rigidly follows her mother's treatise with poor results. Fara writes to Aya with sisterly encouragement. Emperor Phyro writes to Zomi, revealing his secret project to build a garinafin force and asking for her help in circumventing Empress Jia's authority to fund it. The letters expose the growing political tensions and secret plots being hatched by the younger generation.",
        links: [{ name: "Dimushi", path: "/places/dimushi" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Gori Ruthi", path: "/characters/gori-ruthi" }]
    },
    {
        num: 41,
        title: "A Curse",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The race goes not always to the swift.",
        speaker: "Widow Wasu",
        summary: "Tiphan Huto continues his sabotage, orchestrating events—an infestation of stinging caterpillars, packs of feral dogs, a swarm of rats—designed to look like a supernatural curse on the Splendid Urn. The staff grows terrified, and many quit. The Blossom Gang investigates, suspecting a scientific explanation. Tiphan then poisons the staff with a two-part substance during a fake peace offering, incapacitating them before the service competition. The chapter details the gang's investigation as they try to uncover the truth behind the 'curse.'",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 42,
        title: "The Second Contest",
        date: "GINPEN: THE SIXTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "You have to trust Arona’s makeup skills.",
        speaker: "Widi Tucru",
        summary: "The service competition takes place. The Treasure Chest has a massive staff but is chaotic. The Splendid Urn, with only a skeleton crew, seems doomed. However, Kinri, inspired by Rati Yera's inventions, devises a plan. They build a fleet of small, programmable, self-driving carts, 'driven' by animals. The carts deliver food and clear tables, turning the service into a magical spectacle. Rati reveals her 'rope-map' technology, born from her past as a grave robber. The Splendid Urn wins through sheer ingenuity and charm, a triumph of cleverness over brute force.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 43,
        title: "The Sea of Tears",
        date: "THE SALT FLATS SOUTH OF THE SEA OF TEARS, UKYU-GONDÉ: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "The Every-Mother demands that we survive winter in this forbidden place—it’s up to us to see how many of us will make it.",
        speaker: "Sataari",
        summary: "This chapter follows the escaped children, led by Sataari and Razutana, on their journey. They discover massive, ancient geoglyphs—drawings of birds and creatures etched into the salt flats by a forgotten civilization. This moment of wonder hints at the deep, mysterious history of Ukyu-Gondé. They finally arrive at their destination: Taten-ryo-alvovo, the 'City of Ghosts,' an ancient and sacred Agon ruin where they must try to survive the harsh winter.",
        links: [{ name: "Sataari", path: "/characters/sataari" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Sea of Tears", path: "/places/sea-of-tears" }, { name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }]
    },
    {
        num: 44,
        title: "The Third Contest",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "The best stories are not about victory, but about the grace of the vanquished.",
        speaker: "Princess Fara",
        summary: "The final contest is entertainment. Tiphan Huto stages an extravagant parade re-enacting Emperor Mapidéré's conquest, a spectacle of power appealing to nationalist nostalgia. The Splendid Urn counters with an intimate, innovative experience: a thrilling cart ride that tells the Agon/Lyucu creation myth of Kikisavo and Afir, a story Kinri shared with Fara. The ride is a marvel of engineering and storytelling. The Splendid Urn wins the final round, and the title, by telling a more profound story about empathy and the importance of knowing one's enemy.",
        links: [{ name: "Ginpen", path: "/places/ginpen" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Kinri", path: "/characters/kinri" }]
    },
    {
        num: 45,
        title: "Alone",
        date: "WORLD’S EDGE MOUNTAINS: THE TWELFTH MONTH IN THE EIGHTH YEAR AFTER THÉRA'S DEPARTURE",
        quote: "I am useless. I’ve ruined everything.",
        speaker: "Princess Thera",
        summary: "In the aftermath of the Kiri Valley disaster, Théra is consumed by guilt and grief. She has completely withdrawn from her leadership role, leaving Takval and the other survivors to fend for themselves. The chapter is a powerful depiction of depression and trauma, as she struggles with the weight of her failures and the loss of her children. Her journey through the mountains is a journey through her own internal landscape of despair, feeling completely isolated and useless.",
        links: [{ name: "Princess Thera", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }]
    },
    {
        num: 46,
        title: "Last Bite",
        date: "GINPEN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "Love, once given, cannot be rescinded.",
        speaker: "Princess Fara",
        summary: "The Blossom Gang, with Kinri and Fara, investigate Tiphan Huto's warehouse, suspecting it's a front. They discover he is kidnapping skilled artisans for the Lyucu. They set a trap, leading to his capture by the magistrate. Afterward, they decide to infiltrate Last Bite, a secret Imperial research facility, to uncover the truth about Gin Mazoti's death, which Mota believes is being covered up by the state.",
        links: [{ name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Last Bite", path: "/places/last-bite" }]
    },
    {
        num: 47,
        title: "Family",
        date: "LAST BITE: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS",
        quote: "My name is Savo Ryoto.",
        speaker: "Savo Ryoto (Kinri)",
        summary: "The Blossom Gang and Fara successfully infiltrate Last Bite. Kinri, disguised as Zomi Kidosu, discovers a secret study filled with objects from his past, including the turtle shell his mother gave him. He realizes the study belongs to Zomi. Zomi herself appears, and through the turtle shell, she and Kinri discover they are long-lost half-siblings, both fathered by Oga Kidosu. Kinri is forced to confront the truth about his identity and his family's complex history. He chooses to embrace his Lyucu heritage and his identity as Savo Ryoto, a decision that creates a painful rift between him and Fara. The chapter ends with Savo escaping Last Bite, now a fugitive with a new understanding of himself and his place in the world.",
        links: [{ name: "Kinri", path: "/characters/kinri" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }, { name: "Last Bite", path: "/places/last-bite" }]
    }
];

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);


export default function VeiledThronePage() {
    return (
        <div>
            <TopNavigation
                prevPage={{ title: "The Wall of Storms", path: "/books/the-wall-of-storms" }}
                nextPage={{ title: "Speaking Bones", path: "/books/speaking-bones" }}
                returnLink={{ title: "Return to Series Overview", path: "/books" }}
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
                        <p className="text-lg text-text-light dark:text-text-light font-semibold mb-1">The Dandelion Dynasty #3</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary mb-6">The Veiled Throne</h1>
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p>With the invasion of Dara underway, two empires stand on the brink of war. In the occupied capital of Kriphi, Empress Jia Matiza, now Regent, plots to undermine the Lyucu conquerors from within, using every tool of spycraft and sabotage at her disposal. Across the sea, her daughter Princess Théra leads a desperate expedition into the heart of the Lyucu homeland, seeking to cut off the invasion at its source. As new alliances are forged in the crucible of war and old loyalties are tested, a new generation of heroes, inventors, and schemers rises to shape the future of both peoples. The Veiled Throne is a sprawling epic of silkpunk invention, political intrigue, and the eternal human struggle between tradition and progress, vengeance and forgiveness.</p>
                        </div>
                    </div>
                    <div className="bg-bg-card dark:bg-bg-card p-6 rounded-lg shadow-md border border-border-secondary dark:border-border-primary">
                        <h3 className="font-bold text-xl mb-4 text-link dark:text-link-dark">Book Details</h3>
                        <ul className="space-y-2 text-base text-text-secondary dark:text-text-secondary">
                            <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> November 2, 2021 by Saga Press</li>
                            <li><strong>Pages:</strong> 1008 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781481424356</li>
                        </ul>
                        <div className="border-t border-border-secondary dark:border-border-primary mt-4 pt-4 space-y-2">
                            <a href="https://www.goodreads.com/book/show/18952403-the-veiled-throne" target="_blank" rel="noopener noreferrer" className="text-link dark:text-link-dark hover:underline inline-flex items-center text-base">
                                View on Goodreads <ExternalLinkIcon />
                            </a>
                            <br />
                            <a href="https://www.amazon.com/Veiled-Throne-Dandelion-Dynasty-Book/dp/1481424358" target="_blank" rel="noopener noreferrer" className="text-link dark:text-link-dark hover:underline inline-flex items-center text-base">
                                Purchase on Amazon <ExternalLinkIcon />
                            </a>
                            <p className="text-xs text-text-light dark:text-gray-500 pt-2 italic">
                                (If you purchase the book through this link, it&apos;ll give me a small kickback!)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TABLE OF CONTENTS --- */}
            <div className="bg-bg-card dark:bg-bg-card p-6 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-300 dark:border-border-secondary">Contents</h2>
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
                            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary">{chapter.num} - {chapter.title}</h3>
                            <p className="text-sm text-text-light dark:text-text-light italic">{chapter.date}</p>
                        </div>
                        <div className="bg-bg-card dark:bg-bg-card p-6 rounded-lg shadow-md">
                            <blockquote className="border-l-4 border-gray-300 dark:border-border-secondary p-4 italic text-text-muted dark:text-text-muted text-left">
                                &ldquo;{chapter.quote}&rdquo;
                                <span className="block text-right not-italic font-semibold mt-2">&mdash; {chapter.speaker}</span>
                            </blockquote>
                            <div className="my-4 text-text-secondary dark:text-text-secondary prose dark:prose-invert max-w-none" style={{ whiteSpace: 'pre-line' }}>{formatAsteriskToBold(chapter.summary)}</div>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-border-secondary dark:border-border-primary">
                                {chapter.links.map(link => (
                                    <Link key={link.name} href={link.path} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <BottomNavigation
                prevItem={{ title: "The Wall of Storms", path: "/books/the-wall-of-storms" }}
                nextItem={{ title: "Speaking Bones", path: "/books/speaking-bones" }}
                bottomNavType="book"
            />
        </div>
    );
}