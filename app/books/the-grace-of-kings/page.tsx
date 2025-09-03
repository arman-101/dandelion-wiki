import Image from 'next/image';
import Link from 'next/link';
import { TopNavigation, BottomNavigation } from '../../components/layout/PageNavigation';
import { formatAsteriskToBold } from '../../utils/textFormatting';

// --- FULLY REVISED & COMPLETE DATA FOR THE GRACE OF KINGS ---
const chapters = [
    {
        num: 1,
        title: "An Assassin",
        date: "ZUDI: THE SEVENTH MONTH IN THE FOURTEENTH YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "The emperor is just a man, after all.",
        speaker: "Kuni Garu",
        summary: "In the sun-parched plains of northern Cocru, the might of the Xana Empire is on full display. Thousands of spectators have gathered outside the city of Zudi to witness the Imperial Procession of Emperor Mapidéré, a meticulously orchestrated spectacle of conquered cultures and military power. Graceful Imperial airships glide overhead, heavy battle-carts rumble past, and performers from the six subjugated Tiro states—from the seductive veil dancers of Faça to the martial sword twirlers of Cocru—entertain the gawping crowds. A grand choir, pulled on a platform by painted elephants, sings a new anthem composed by the Imperial scholar Lügo Crupo, its verses praising the Seven Islands of Dara while the chorus demands servile fealty to Xana and its patron god, Kiji.\n\nAmidst this throng, two fourteen-year-old boys, the clever and brash Kuni Garu and his anxious friend Rin Coda, shove their way to the front, having skipped their lessons at Master Loing's academy. Kuni, fascinated by the spectacle and the power, watches with a sly intelligence. As anticipation for the Emperor's appearance builds, a strange white bird is spotted in the sky. It is no bird, but a complex, man-lifting kite, a marvel of engineering from which hangs a lone figure. This is an assassin from Haan. He swoops down upon the Emperor's five-story Throne Pagoda, a magnificent mobile structure carried by one hundred men, and launches a volley of firebombs. The Emperor is saved only by the quick thinking of the Captain of the Imperial Guards, who uses the heavy ironwood throne itself as a shield. The attack shatters the procession's choreographed perfection, plunging the crowd into chaos as Imperial archers fire blindly into the sky. Amid the panic and falling arrows, Kuni grabs a discarded shield to protect himself and Rin. In that moment of terror, Kuni catches a glimpse of Emperor Mapidéré—not as a god, but as a wrinkled, fearful old man. The assassin, his mission a near success, skillfully maneuvers his kite away from the pursuing Imperial airships and escapes toward Zudi. A furious Emperor Mapidéré, his aura of invincibility broken, gives a chilling order: find the man, even if it means tearing Zudi apart house by house.",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Rin Coda", path: "/characters/rin-coda" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" }, { name: "Haan", path: "/places/haan" }]
    },
    {
        num: 2,
        title: "Mata Zyndu",
        date: "FARUN, IN THE TUNOA ISLANDS: THE NINTH MONTH IN THE FOURTEENTH YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "Do not forget.",
        speaker: "Phin Zyndu",
        summary: "Two months later, the Imperial Procession arrives by sea in the Tunoa Islands, the ancestral home of the Zyndu Clan. Here, another fourteen-year-old, the giant and physically imposing Mata Zyndu, watches with his uncle, Phin. Possessing rare, double-pupiled eyes that give him supernatural sight, Mata gazes upon Emperor Mapidéré not with awe, but with a cold, smoldering hatred. He sees through the spectacle of power to the fear within the man who destroyed his family.\n\nThe chapter delves into the tragic history of the Zyndu Clan. Mata's grandfather, Dazu Zyndu, the Duke of Tunoa and Marshal of Cocru, was a peerless general renowned for his brilliant defensive tactics, earning him the moniker 'the Bearded Tortoise' from the Xana invaders. However, the King of Cocru, swayed by rumors that Dazu was plotting to usurp the throne, ordered him to abandon his successful strategy and engage the Xana army in open battle. It was a trap. Lured into a valley, Dazu's army was ambushed and he was forced to surrender. The Xana general, Gotha Tonyeti, reneged on his promise to spare Dazu's men and had the entire surrendered Cocru army buried alive. Emperor Mapidéré then ordered the extermination of the Zyndu Clan. Dazu's eldest son was flayed alive, his daughter committed suicide by fire, and only the thirteen-year-old Phin escaped, hiding in the castle's basement until he was caught. Spared out of contempt, Phin fled with only the infant Mata, his nephew, wrapped in the family's chrysanthemum-emblazoned flag. Raised in exile and poverty, Mata has been forged by his uncle's singular, all-consuming purpose, a litany repeated every day of his life: to restore the honor of their name and to avenge their blood. Do not forget.",
        links: [{ name: "Tunoa Islands", path: "/places/tunoa-islands" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Phin Zyndu", path: "/characters/phin-zyndu" }, { name: "Cocru", path: "/places/cocru" }]
    },
    {
        num: 3,
        title: "Kuni Garu",
        date: "ZUDI: THE FIFTH MONTH IN THE TWENTY-FIRST YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "A bright and tenacious flower will not bloom in obscurity.",
        speaker: "Old Xana Woman",
        summary: "Seven years have passed. The once-promising student Kuni Garu is now a twenty-one-year-old charismatic rogue, known throughout Zudi for his wit, charm, and aversion to steady work. After being expelled from the academy, failing at a series of jobs, and being kicked out of his family home for his idle ways, he survives by his wits and the generosity of a wide circle of disreputable friends. At the Splendid Urn tavern, he masterfully talks his way out of a large tab, convincing the proprietress that his presence as a storyteller and entertainer is more valuable than the money he owes.\n\nLater, wandering through Zudi's bustling marketplace—made diverse by Emperor Mapidéré's policy of resettling noble families from across the Seven States—Kuni witnesses an act of petty tyranny. A corrupt Xana corvée administrator is attempting to extort an impoverished old Xana woman, threatening to conscript her only remaining son unless she pays a hefty 'Prosperity Tax.' Moved by a sense of justice, Kuni intervenes. He cleverly impersonates Fin Crukédori, the known spendthrift son of a notoriously cheap local jeweler. With a flourish of false confidence, he forges a promissory note for the tax, completely fooling the greedy official and saving the boy. The entire scene is witnessed from a nearby palanquin by Jia Matiza, the daughter of a wealthy rancher. As Kuni departs with the duped official, the old woman he saved murmurs a prophetic blessing after him: 'you may act lazy and foolish, but I have seen your heart. A bright and tenacious flower will not bloom in obscurity.'",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 4,
        title: "Jia Matiza",
        date: "ZUDI: THE FIFTH MONTH IN THE TWENTY-FIRST YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "All life is an experiment. Who can plan so far ahead?",
        speaker: "Kuni Garu",
        summary: "Jia Matiza, a brilliant and fiercely independent young woman, is a skilled herbalist who has consistently thwarted her family's attempts to marry her off, systematically humiliating a series of unsuitable suitors. Her sharp mind is matched only by her desire for a partner who is her intellectual equal, a desire shaped by a childhood dream of a man who promised her a life of hardship and joy that would be sung of for a thousand years. At a welcoming party for her father, she once again encounters Kuni Garu as he attempts to bluff his way in using the 'Fin Crukédori' alias. Amused by his audacity and recognizing him from the marketplace, she invites him in as her guest.\n\nThey are instantly drawn to each other, engaging in witty banter that reveals a deep philosophical connection. During their courtship, they walk through the countryside, where Jia explains her admiration for the dandelion—a common weed she sees as a symbol of resilience, practicality, and resourcefulness. Kuni sees the same qualities in himself and is deeply moved by her perception. Inspired by her belief in him and a desire to build a life with her, Kuni decides to abandon his aimless ways. He asks his friend, the city clerk Cogo Yelu, to secure him a respectable government job as a guard for the Corvée Department. With a steady income, he formally asks for Jia's hand. Her father, Gilo, despite his misgivings about Kuni's reputation, reluctantly agrees. They marry and begin a quiet life, but Kuni finds his new, monotonous job stifling. He feels like a dandelion seed, tethered and waiting for a great wind to carry him to his true destiny.",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Dandelion", path: "/concepts/dandelion" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }]
    },
    {
        num: 5,
        title: "The Death of the Emperor",
        date: "ÉCOFI ISLAND: THE TENTH MONTH IN THE TWENTY-THIRD YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "Great men are always misunderstood by their own age. And great seldom means good.",
        speaker: "Tututika",
        summary: "Two years later, an aging and deathly ill Emperor Mapidéré tours the islands, his body ravaged by years of alchemical treatments intended to grant immortality. On Écofi Island, he has a powerful dream where the gods of Dara manifest as colossal statues. Kiji of Xana, the Twins Kana and Rapa of Cocru, Fithowéo of Rima, and the others argue over his legacy, the nature of his 'peace,' and prophesize that a new war is inevitable.\n\nAs the Emperor lies on his deathbed, his closest friend and Imperial Chatelain, Goran Pira, sees his chance for long-awaited revenge. He conspires with the ambitious Prime Minister Lügo Crupo to usurp the line of succession. Using the Imperial Seal, they forge a decree naming the Emperor's younger, weaker son, Prince Loshi, as the new heir and condemning the true Crown Prince, Pulo, to death for treason. They dispatch the decree with poison to Pulo, who is overseeing the construction of the Grand Tunnels with the loyal General Gotha Tonyeti. Believing the order to be his father's true will, the dutiful Pulo commits suicide. With the true heir dead, the old emperor dies, and Prince Loshi ascends the throne as Emperor Erishi. To consolidate his power, Lügo Crupo brings a stag into the Grand Audience Hall and declares it a fine horse. He then has all the ministers and generals who dare to state the obvious truth arrested and executed, cementing his terrifying and absolute control over the court.",
        links: [{ name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" }, { name: "Goran Pira", path: "/characters/goran-pira" }, { name: "Lügo Crupo", path: "/characters/lugo-crupo" }, { name: "Emperor Erishi", path: "/characters/emperor-erishi" }, { name: "Tututika", path: "/gods/tututika" }, { name: "Kiji", path: "/gods/kiji" }, { name: "Kana", path: "/gods/kana" }, { name: "Rapa", path: "/gods/rapa" }, { name: "Fithowéo", path: "/gods/fithoweo" }]
    },
    {
        num: 6,
        title: "Corvée",
        date: "KIESA: THE EIGHTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "If we’re already dead by the laws of Xana, and yet the gods tell us different, then I’d rather listen to the gods.",
        speaker: "Huno Krima",
        summary: "Under the new reign of Emperor Erishi, conditions across the islands worsen dramatically. Famine is rampant, and the Imperial government increases taxes and corvée quotas to fund lavish new projects. In this desperate landscape, two corvée laborers from Cocru, the bald and thin Huno Krima and the powerfully built Zopa Shigin, are made co-captains of a crew destined for the Mausoleum construction. They are given an impossible deadline, with failure punishable by gruesome death not only for them, but for their families as well. Relentless rainstorms delay their journey, making it impossible to arrive on time. Facing certain death, Krima and Shigin concoct a desperate plan. They purchase a large fish from a market and secretly stuff a silk scroll inside its belly bearing the message: 'Huno Krima Will Be King.'\n\nThey present the 'miracle' to their crew of thirty desperate men. The prophecy, seemingly a divine sign in a world devoid of hope, ignites the spark of rebellion. The young brothers Dafiro and Ratho Miro are tasked with killing their two Imperial guards, which they do after the guards are drugged. That night, united by hopelessness and a newfound purpose, the small band of laborers rises up. They seize the town of Napi, kill their guards, break open the Imperial armory and granaries, and raise a new banner. The first rebellion against the Xana Empire has begun.",
        links: [{ name: "Huno Krima", path: "/characters/huno-krima" }, { name: "Zopa Shigin", path: "/characters/zopa-shigin" }, { name: "Dafiro Miro", path: "/characters/dafiro-miro" }, { name: "Ratho Miro", path: "/characters/ratho-miro" }, { name: "Corvée Labor", path: "/concepts/corvee-labor" }]
    },
    {
        num: 7,
        title: "Mata's Valor",
        date: "FARUN, IN THE TUNOA ISLANDS: THE NINTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "And now, you will leave my house.",
        speaker: "Mata Zyndu",
        summary: "Word of Huno Krima's rebellion reaches the Tunoa Islands. The local Xana commander, a bureaucrat named Datun Zatoma, sees an opportunity for his own advancement. He summons the now twenty-five-year-old Mata Zyndu and his uncle Phin to their ancestral castle, hoping to use the famous Zyndu name to rally support for his own bid for power within the fracturing empire. Mata and Phin see a different opportunity. Inside the commander's own room, Mata assassinates Zatoma, reclaiming his birthright with his first kill.\n\nMata then explores the castle's armory, which holds the weapons of his ancestors. He recovers two legendary items: his grandfather Dazu's composite bronze-and-steel sword, Na-aroénna ('The Ender of Doubts'), and a fearsome, tooth-studded ironwood cudgel he names Goremaw. Armed with these mythic weapons, Mata and Phin fight their way through the castle. In a display of godlike martial prowess, Mata single-handedly slaughters one hundred and seventy-three men of the two-hundred-man Xana garrison, with Phin killing the rest. The next day, Mata raises the twin-raven flag of Cocru over his family's castle. The tale of his valor spreads like a legend, inspiring hundreds of men from the Tunoa Islands to flock to his banner, ready to fight for the last Zyndu.",
        links: [{ name: "Tunoa Islands", path: "/places/tunoa-islands" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Phin Zyndu", path: "/characters/phin-zyndu" }]
    },
    {
        num: 8,
        title: "Kuni's Choice",
        date: "OUTSIDE ZUDI: THE NINTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "If you try to obey the law, and the judges call you a criminal anyway, then you might as well live up to the name.",
        speaker: "Kuni Garu",
        summary: "Kuni Garu, now head of Zudi's Corvée Department, is escorting a team of prisoners when thirty-five of them desert to join the new rebellion. Facing certain execution for this failure, Kuni makes a pivotal choice. He frees the remaining prisoners and his guards, declaring that since the law would condemn him regardless, he might as well live up to the name of a criminal. All the men, impressed by his fairness, choose to follow him into outlawry.\n\nIn the Er-Mé Mountains, Kuni's leadership is quickly mythologized. One of his followers, a religious soldier named Hupé, has a prophetic dream of a 'Red Emperor' (Cocru) slaying a 'White Emperor' (Xana). The next day, Kuni impulsively and heroically slays a giant white python that attacks another man, an act his followers interpret as the fulfillment of the prophecy. However, this newfound confidence leads to arrogance. A poorly planned raid on a merchant caravan turns into a bloody ambush, and several of his men, including Hupé, are killed. Devastated by the consequences of his carelessness, Kuni abandons his romantic ideas of banditry. He becomes a more cautious and pragmatic leader, accepting desperate new recruits and resolving to save his family by taking control of Zudi.",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 9,
        title: "Emperor Erishi",
        date: "PAN: THE ELEVENTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Why do they insist on eating rice? Meat is so much better!",
        speaker: "Emperor Erishi",
        summary: "The young Emperor Erishi remains blissfully ignorant of the chaos engulfing his empire. He is shown to be a foolish and decadent ruler, entirely absorbed in his own amusements within the Imperial capital of Pan. His days are spent on lavish, childish projects, such as redesigning the Grand Audience Hall into a massive, interactive map of Dara where the seas are filled with real wine, and planning a maze constructed entirely of fine meats. He is completely detached from the reality of his subjects' suffering, impatiently brushing off ministers who bring reports of famine and rebellion. He relies entirely on his regent, Lügo Crupo, and his advisor, Chatelain Pira, who enable his behavior to keep him distracted from the serious matters of state.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Emperor Erishi", path: "/characters/emperor-erishi" }]
    },
    {
        num: 10,
        title: "The Regent",
        date: "PAN: THE ELEVENTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A man’s circumstances are not determined by his talents, but by where he chooses to put his talents to work.",
        speaker: "Lügo Crupo",
        summary: "Regent Lügo Crupo, though holding the reins of power, finds the actual task of governing to be a tedious distraction from his true passion: scholarship. The chapter explores his past as a diligent but low-born student, forever living in the shadow of his brilliant and effortlessly charming rival, Tan Féüji. Consumed by jealousy, Crupo defected from his homeland to serve Xana and ultimately poisoned Féüji to secure his own position at court. Now, irritated by the persistent rebellion, he makes a fateful and dismissive decision. To rid himself of an annoying bureaucrat who keeps pestering him about financial matters, he appoints the chief tax collector, Kindo Marana, as the new commander-in-chief of the Imperial army. This seemingly absurd appointment is made not for strategic reasons, but simply so Crupo can have some peace to work on his philosophical treatises.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Lügo Crupo", path: "/characters/lugo-crupo" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }]
    },
    {
        num: 11,
        title: "The Chatelain",
        date: "PAN: THE ELEVENTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "He would avenge her and bring down the House of Xana. He would truly, spectacularly, really commit treason.",
        speaker: "Goran Pira (internal thought)",
        summary: "The secret history and true motivation of Goran Pira, Emperor Mapidéré's seemingly loyal chatelain and childhood friend, is revealed. Years prior, Pira had fallen in love with Lady Maing, a captive serving woman from Amu. However, Emperor Mapidéré saw her and claimed her for his own harem. Lady Maing later gave birth to Pira's son, a secret that was discovered by a palace doctor. Enraged by the betrayal, the merciless emperor had both the infant and Lady Maing brutally murdered while Pira was forced to watch, helpless to intervene without condemning his entire family. This horrific act extinguished Pira's friendship and replaced it with a cold, patient, all-consuming desire for vengeance. For years, he has been the secret architect of the Xana Empire's downfall, subtly manipulating events and people in a long game of spectacular treason.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Goran Pira", path: "/characters/goran-pira" }, { name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" }]
    },
    {
        num: 12,
        title: "The Rebellion Grows",
        date: "THE BIG ISLAND: THE THIRD MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "We haven’t met Xana’s real army yet. Don’t celebrate too early.",
        speaker: "Dafiro Miro",
        summary: "The rebellion that began with a handful of corvée laborers now consumes the Islands of Dara. Huno Krima and Zopa Shigin locate a shepherd named Thufi, the lost heir to the throne of Cocru, and crown him king in the old capital of Çaruza. This act inspires the other subjugated Tiro states—Faça, Gan, Amu, and Rima—to rise up and reclaim their sovereignty. King Thufi convenes a Grand Council of War in Çaruza, intending to unite the reborn kingdoms and elect a princeps, a supreme commander for the allied armies. However, the council quickly descends into chaos. The old resentments, petty jealousies, and ancient territorial disputes that plagued the states for centuries resurface immediately, threatening to tear the rebellion apart from within before it has a chance to face the full might of the empire.",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "King Thufi", path: "/characters/king-thufi" }, { name: "Dafiro Miro", path: "/characters/dafiro-miro" }, { name: "Huno Krima", path: "/characters/huno-krima" }, { name: "Zopa Shigin", path: "/characters/zopa-shigin" }]
    },
    {
        num: 13,
        title: "Kindo Marana",
        date: "THE BIG ISLAND: THE THIRD MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Perhaps just as the tax code was a microcosm of all the policies that animated an empire, what he knew of administering the taxes was a microcosm of statecraft.",
        speaker: "Kindo Marana (internal thought)",
        summary: "The newly appointed Marshal Kindo Marana, though a career bureaucrat, proves to be an unexpectedly effective commander-in-chief. He approaches the war with the meticulous logic of a tax collector, beginning with a thorough inventory of the empire's fractured and demoralized forces. He assesses his assets and liabilities, identifying the still-loyal territories and the high-risk areas. He devises a pragmatic strategy to turn a major liability—the vast population of conscripted laborers and prisoners—into an asset by drafting them into a new, expanded army. By integrating these new, diverse recruits with loyal Xana veterans, he plans to create a functional defensive force. His long-term goal is to stabilize the front while he travels back to the Xana home islands to raise a fresh, ideologically motivated army to methodically reconquer the Six States.",
        links: [{ name: "Kindo Marana", path: "/characters/kindo-marana" }]
    },
    {
        num: 14,
        title: "Kuni, the Administrator",
        date: "ZUDI: THE THIRD MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "No fish can live in perfectly clear water.",
        speaker: "Rin Coda",
        summary: "Kuni Garu's bandit gang storms Zudi. After the vacillating mayor attempts to betray him, Kuni uses his loyalists inside the city to spread rumors of a liberating army, inciting the populace to rise up and open the gates. Hailed as a hero, Kuni is proclaimed the Duke of Zudi by popular acclamation. He proves to be a surprisingly adept and diligent ruler, working tirelessly to restore order, secure the roads for trade, and win the support of the city's elders and bureaucrats. When faced with a tax revenue crisis, his advisor Cogo Yelu invents a brilliant scheme: a public lottery where purchase receipts from vendors serve as tickets. The system ingeniously turns every citizen into a tax inspector, forcing merchants to report their true income. While building his administration, Kuni also begins the difficult task of training his followers into a disciplined army, preparing for the inevitable imperial counterattack.",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Rin Coda", path: "/characters/rin-coda" }]
    },
    {
        num: 15,
        title: "The King of Rima",
        date: "A HAMLET, RUI AND NA THION, THE BIG ISLAND: THE THIRD MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I have ceased all resistance and I am at your mercy.",
        speaker: "King Jizu",
        summary: "Kindo Marana successfully persuades the legendary retired general, Tanno Namen, to return to service. Namen leads a swift and merciless campaign into Rima, easily bypassing the rebel defenses, which are compromised by the cowardice and treachery of Rima's own commanders. The capital, Na Thion, is quickly besieged. The young King Jizu, a former fisherman who never wanted the crown, is horrified by his ministers' shameful and cruel suggestions for how to break the siege. Choosing an honorable death over a dishonorable life, he dismisses his advisors, walks out alone to meet Namen's army, and, after securing a promise that his people will be spared, sets himself ablaze. His martyrdom becomes a potent symbol of noble sacrifice for the rebellion, but Rima falls back under Imperial control.",
        links: [{ name: "Tanno Namen", path: "/characters/tanno-namen" }, { name: "King Jizu", path: "/characters/king-jizu" }, { name: "Rima", path: "/places/rima" }]
    },
    {
        num: 16,
        title: "“Your Majesty”",
        date: "DIMU: THE FOURTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A man can never fulfill a role he is not born for.",
        speaker: "Mata Zyndu",
        summary: "The rebel leader Huno Krima, corrupted by power, declares himself King of West Cocru. His rule quickly devolves into a paranoid tyranny. He has his old friend Zopa Shigin secretly murdered and establishes a secret police force, the 'Black Caps,' to eliminate anyone who questions his authority or his fabricated prophecy. His army, ill-fed and poorly led, rots from within. While Krima obsesses over building a new palace, General Tanno Namen launches a devastating surprise attack on his capital, Dimu. Krima's army collapses instantly. In the chaos of the rout, the would-be king is unceremoniously killed by his own disgusted, fleeing soldiers. Mata Zyndu, having marched his own army to the city, arrives just in time to witness the pathetic end of the rebellion's first leader, contemptuously dismissing him as a 'monkey dressed up as a man.'",
        links: [{ name: "Huno Krima", path: "/characters/huno-krima" }, { name: "Zopa Shigin", path: "/characters/zopa-shigin" }, { name: "Tanno Namen", path: "/characters/tanno-namen" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }]
    },
    {
        num: 17,
        title: "The Gates of Zudi",
        date: "ÇARUZA AND ZUDI: THE FOURTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Show is substance.",
        speaker: "Kuni Garu",
        summary: "With the rebellion in disarray after Huno Krima's fall, the Grand Council in Çaruza remains paralyzed by infighting. Mata Zyndu is formally invested as Marshal of Cocru, but has no unified army to lead. Kuni Garu arrives from Zudi just as news arrives that his city has been betrayed back to the Empire by his former lieutenant, Dosa. Kuni delivers a powerful, pragmatic speech, urging the council to stop squabbling over future spoils and focus on the immediate threat. He persuades Mata to march with him to relieve Zudi.\n\nTogether, they retake the city. Rather than executing the traitor Dosa, Kuni makes a public spectacle of pardoning him, a masterful act of political theater that demonstrates his mercy and wins him the loyalty of Zudi's garrison. Mata, initially skeptical of Kuni's soft methods, is deeply impressed by the strategic value of his compassion. He begins to see Kuni not just as a clever rogue, but as a leader with a different, yet equally valid, kind of strength. Their partnership is solidified.",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "King Thufi", path: "/characters/king-thufi" }]
    },
    {
        num: 18,
        title: "Luan Zya",
        date: "GINPEN: BEFORE THE XANA CONQUEST.",
        quote: "I refuse to believe in the futility of change, because I have seen how the lowly dandelion, with time and patience, can crack the strongest paving stone.",
        speaker: "Luan Zya",
        summary: "The full history of Luan Zya is revealed. The scion of a noble family of brilliant inventors and scholars in Haan, his life was defined by intellectual curiosity and invention. During the Xana conquest, General Thumi Yuma, enraged by the effectiveness of the Zya Clan's military contraptions, ordered the family's complete extermination. Luan was the sole survivor, escaping the massacre of his clan by flying away on one of his father's experimental kites. He spent the next decade as a lone, vengeance-obsessed assassin, a path that culminated in his legendary but failed kite attack on Emperor Mapidéré.\n\nAfter the attempt, he lived for years in self-imposed exile, first among the so-called 'savage' but deeply wise cruben-riding people of Tan Adü, and then as a wanderer. On a pier, he encountered a mysterious old fisherman—heavily implied to be the god Lutho—who tested his character before gifting him Gitré Üthu, a magical book of strategy whose pages fill themselves with boundless, evolving knowledge. Armed with this divine insight, Luan's purpose shifted from mere vengeance to a deeper quest to reshape the world.",
        links: [{ name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Tan Adü", path: "/places/tan-adu" }, { name: "Lutho", path: "/gods/lutho" }, { name: "Haan", path: "/places/haan" }, { name: "Gitré Üthu", path: "/concepts/gitre-uthu" }]
    },
    {
        num: 19,
        title: "Brothers",
        date: "ÇARUZA: THE FOURTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "You may not be born noble, but you have a noble mind.",
        speaker: "Luan Zya",
        summary: "Having retaken Zudi, Kuni Garu holds a feast for his officers. A stranger arrives—Luan Zya, who Kuni immediately recognizes as the kite-rider from his youth. Luan, in turn, recognizes Kuni as the one boy in the crowd who truly saw the significance of his act. They form an instant, deep bond, recognizing in each other a shared philosophical spirit and a desire to do more than simply restore the old order. Luan agrees to join Kuni's cause.\n\nLater, Kuni and Mata Zyndu go drinking with their followers, solidifying their own friendship. Kuni, ever the populist, praises Mata's noble spirit but reaffirms his own identity as a 'dandelion.' Mata, impressed by Kuni's wisdom and compassion, fully accepts him as an equal, declaring that the dandelion and the chrysanthemum share the same heroic, golden hue. They clasp arms, now sworn brothers. The chapter marks the formation of the rebellion's central heroic triumvirate: Kuni's heart, Mata's arm, and Luan's mind.",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Luan Zya", path: "/characters/luan-zya" }]
    },
    {
        num: 20,
        title: "Forces of the Air",
        date: "RUI: THE FIFTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "The people of the Six States want the blood of Xana to flow, to satiate their hunger for vengeance.",
        speaker: "Kindo Marana",
        summary: "Marshal Kindo Marana arrives on Rui, the Xana home island, to execute his plan of rebuilding the Imperial air force. He finds the Mount Kiji Air Base, the sole source of the mystical lift gas essential for airships, in a state of utter corruption and neglect. The base administrator has been using the fleet for personal joyrides and has allowed the skilled engineers to leave. In a shocking display of ruthless efficiency, Marana arrests the administrator and his cronies, strips them naked, and has them strung up in trees to be eaten alive by the giant Mingén falcons that nest on the mountain. With this brutal act, he restores order and uses his bureaucratic acumen to recall the engineers and begin the difficult process of restoring the empire's most powerful weapon to its former glory.",
        links: [{ name: "Rui", path: "/places/rui" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }, { name: "Mount Kiji", path: "/places/mount-kiji" }, { name: "Airships", path: "/concepts/airships" }, { name: "Lift Gas", path: "/concepts/lift-gas" }]
    },
    {
        num: 21,
        title: "Before the Storm",
        date: "ZUDI: THE SIXTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Does the dandelion not bloom in the same hue, my brother?",
        speaker: "Mata Zyndu",
        summary: "In a quiet moment of camaraderie before the coming storm, Kuni, Mata, and their inner circle gather at the Splendid Urn tavern in Zudi. They engage in a drinking game called Fool's Mirror, where each man compares himself to a flower. The choices reveal their core philosophies. The scholarly Rin Coda compares himself to a thorny but medicinal thistle; the boisterous Mün Çakri to a 'manly' hibiscus. Kuni, true to form, chooses the dandelion—a common, resilient, and useful weed. Mata, in contrast, recites a powerful poem about the chrysanthemum—the noble, defiant flower that blooms last against the winter, a symbol of his family's pride.\n\nIn a climactic moment of friendship, after Kuni praises the poem's heroic sentiment, Mata acknowledges their bond. He points out that Kuni's humble dandelion shares the same golden color as his noble chrysanthemum. He calls Kuni 'brother,' and they clasp arms, their different philosophies united in a shared purpose. The scene solidifies their bond as the two great, complementary heroes of the rebellion.",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Dandelion", path: "/concepts/dandelion" }, { name: "Chrysanthemum", path: "/concepts/chrysanthemum" }]
    },
    {
        num: 22,
        title: "Battle of Zudi",
        date: "ZUDI: THE SIXTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "What’s ‘dirty’ about winning?",
        speaker: "Kuni Garu",
        summary: "The full might of the Imperial army, led by General Tanno Namen, descends upon Zudi. The ensuing siege becomes a perfect showcase for the complementary styles of Kuni Garu and Mata Zyndu. Mata fights with the valor of a war god on the city walls, inspiring the troops and single-handedly repelling waves of attackers. Kuni, meanwhile, orchestrates the defense with clever tactics and psychological warfare. He uses civilians in paper armor to create the illusion of a much larger army, has singers perform taunts to demoralize the enemy, and even has the soldiers urinate on the city gates to extinguish the fires set by the besiegers.\n\nWhen Namen uses battle kites, Mata demands to meet them in the air. Luan Zya quickly designs a superior kite for him. Provoked by Kuni's endless insults, Namen agrees to a duel of champions in the sky. Mata, a natural aerial warrior, dominates the duel, killing ten of Namen's best kite-riders. The humiliating defeat shatters the morale of the Imperial army, and Namen is forced to lift the siege and retreat. The victory cements the legend of the Kuni-Mata partnership.",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Tanno Namen", path: "/characters/tanno-namen" }]
    },
    {
        num: 23,
        title: "The Fall of Dimu",
        date: "DIMU: THE SEVENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "You do not ever want to have General Zyndu against your side.",
        speaker: "Ratho Miro",
        summary: "Hot on the heels of the retreating Imperial army, the victorious Cocru forces led by Kuni and Mata lay siege to Dimu, the last major Imperial stronghold south of the Liru River. The city, remembering the tyranny of Huno Krima's brief rule, resists fiercely. Mata, frustrated by the slow progress of the siege, grows increasingly impatient and brutal. His threats against the populace only strengthen their resolve. After a prolonged and bloody assault, the city finally falls. In a horrifying display of cruelty, Mata orders the massacre of the surrendered garrison and many of the city's prominent citizens. This atrocity, which becomes known as the Massacre at Dimu, reveals a dark, ruthless streak in Mata's character. Kuni is appalled by the slaughter, and the first true fracture appears in their celebrated friendship.",
        links: [{ name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Ratho Miro", path: "/characters/ratho-miro" }]
    },
    {
        num: 24,
        title: "Battle of Arulugi",
        date: "ARULUGI: THE SEVENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A seducer is one who wins through deception rather than force.",
        speaker: "Tututika",
        summary: "While the Cocru army is engaged at Dimu, Marshal Kindo Marana leads his newly rebuilt navy and air force in a surprise attack on Arulugi, the island heartland of Amu. Princess Kikomi, chafing at her role as a beautiful but powerless icon, has a vision of the goddess Tututika. The goddess advises her to stop lamenting her situation and instead embrace her own unique weapons: deception and seduction. Meanwhile, Marana, a master of logistics, executes a brilliant naval strategy, using small, hidden boats with hooked nets to foul the oars of the superior Amu fleet, crippling them before his main armada moves in for the kill.\n\nWith Amu defeated, Marana takes Kikomi captive. In a secret negotiation aboard his flagship, she makes a treacherous deal: in exchange for guaranteeing Amu's safety from Imperial reprisals, she will act as his secret agent to sow discord among the rebel leaders. Marana agrees, and they stage a 'miraculous' escape for her and her uncle. Kikomi returns to the rebel camp not as a defeated captive, but as a celebrated hero, her treason perfectly concealed.",
        links: [{ name: "Arulugi", path: "/places/arulugi" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }, { name: "Princess Kikomi", path: "/characters/princess-kikomi" }, { name: "Tututika", path: "/gods/tututika" }]
    },
    {
        num: 25,
        title: "“It Is a Horse”",
        date: "PAN: THE EIGHTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I hope you have finally learned what you needed to know.",
        speaker: "Goran Pira",
        summary: "In the capital, Chatelain Goran Pira grows wary of Regent Lügo Crupo's increasing power and arrogance following Marana's victory at Arulugi. Deciding the time is right to remove his co-conspirator, Pira begins to subtly manipulate the young Emperor Erishi, stoking the boy's deep-seated fear and resentment of the regent by reminding him of the infamous 'deer and horse' incident. Pira then frames Crupo for treason by planting a seditious poem in his quarters. Crupo is arrested and taken to the dungeons. Pira personally oversees his brutal torture, forcing him to sign a false confession. After Crupo is publicly executed, Pira is named the new Prime Minister, giving him complete and unchallenged control over the empire. His long-planned vengeance takes another decisive step forward.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Goran Pira", path: "/characters/goran-pira" }, { name: "Lügo Crupo", path: "/characters/lugo-crupo" }, { name: "Emperor Erishi", path: "/characters/emperor-erishi" }]
    },
    {
        num: 26,
        title: "The Princeps’s Promise",
        date: "ÇARUZA: THE NINTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I will not be a king who sits on a throne of skulls.",
        speaker: "King Thufi",
        summary: "The rebellion is again on the brink of collapse following the Imperial victory at Arulugi. At the deadlocked Grand Council of War, King Thufi finally takes decisive action. Backed by the fearsome military presence of Mata Zyndu and his battle-hardened army, Thufi ends the endless debates and declares himself princeps, the supreme commander of the allied Tiro forces. To unify the fractured rebellion and provide a clear objective, he makes a bold and binding public promise: any commander who captures the Imperial capital of Pan will be rewarded with kingship over the rich and strategically vital territory of Géfica. This promise is aimed squarely at motivating Kuni Garu, whose unorthodox methods are seen as the rebels' best chance for a swift, decisive victory. The final race to end the war has begun.",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "King Thufi", path: "/characters/king-thufi" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }]
    },
    {
        num: 27,
        title: "Kikomi",
        date: "ÇARUZA: THE NINTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I made a deal.",
        speaker: "Princess Kikomi (internal thought)",
        summary: "Princess Kikomi, secretly acting as an agent for Kindo Marana, arrives in Çaruza and becomes the center of courtly life. She attracts the affection of both Mata Zyndu and his uncle, Phin, fulfilling her mission to sow discord between them. Torn between her genuine feelings for Mata and her duty to protect her homeland by honoring her deal, she makes a devastating choice. After spending the night with Phin, she brutally murders him in his bed with a dagger. His guards rush in, and she loudly proclaims her love for Mata, framing the murder as a crime of passion before allowing the guards to cut her down. Her act of self-sacrifice successfully shatters the bond between Mata and Phin's memory, leaves Mata emotionally destroyed, and drives a tragic wedge between him and his sworn brother Kuni, who is baffled by his friend's all-consuming grief over a 'fickle woman.'",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "Princess Kikomi", path: "/characters/princess-kikomi" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Phin Zyndu", path: "/characters/phin-zyndu" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }]
    },
    {
        num: 28,
        title: "Luan Zya’s Plan",
        date: "ZUDI: THE TENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "We have to kill the empire.",
        speaker: "Luan Zya",
        summary: "Luan Zya, now completely disillusioned with the selfish infighting and shortsightedness of the Tiro kings, travels to Zudi. He proposes a new path forward to Kuni Garu, arguing that simply restoring the old states is not enough; they must 'kill the empire' itself and create a new, more just order. Kuni, grieving his mother's death and feeling the immense weight of the war, is receptive.\n\nUsing the divine knowledge from his magical book, Gitré Üthu, Luan devises an audacious and highly unconventional plan to bypass the main Imperial armies and end the war in a single, decisive stroke. The plan involves a secret expedition to the remote southern island of Tan Adü to recruit their legendary cruben-riding warriors. They will then use this unique amphibious force, in conjunction with a small fleet of airships, to launch a surprise attack directly on the lightly defended Imperial capital of Pan. Kuni agrees to the immense gamble, choosing to risk everything on Luan Zya's brilliant but dangerous strategy.",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Tan Adü", path: "/places/tan-adu" }, { name: "Cruben", path: "/concepts/cruben" }, { name: "Gitré Üthu", path: "/concepts/gitre-uthu" }]
    },
    {
        num: 29,
        title: "Battle of Wolf’s Paw",
        date: "WOLF’S PAW: THE TENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I have never surrendered.",
        speaker: "Tanno Namen",
        summary: "While Kuni undertakes his secret mission, Mata Zyndu, now the sole commander of the rebel forces, confronts the main Imperial armies led by Kindo Marana and Tanno Namen on Wolf's Paw. The battle is a brutal, chaotic affair. The rebel armies from Faça and Gan betray their allies mid-battle, switching sides to support the Empire. However, Mata, consumed by grief and a berserker's rage over the deaths of Phin and Kikomi, fights with the fury of a god. His incredible valor inspires his remaining troops to a desperate charge that shatters the Imperial lines, turning certain defeat into a stunning, bloody victory.\n\nThe Imperial army is destroyed. Kindo Marana is captured, and the legendary General Tanno Namen, cornered and defeated for the first time in his life, chooses to take his own life rather than suffer the dishonor of surrender. The victory, though costly, leaves Mata as the undisputed military master of the rebellion.",
        links: [{ name: "Wolf's Paw", path: "/places/wolfs-paw" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }, { name: "Tanno Namen", path: "/characters/tanno-namen" }]
    },
    {
        num: 30,
        title: "Master of Pan",
        date: "PAN: THE ELEVENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Old friends are like old clothes: they fit the best.",
        speaker: "Kuni Garu",
        summary: "Luan Zya's plan succeeds beyond all expectation. Kuni's small force, transported by the cruben-riders of Tan Adü and a handful of airships, launches a lightning-fast amphibious and aerial assault on the Imperial capital of Pan. The city's meager defenses are overwhelmed, and Kuni captures the terrified Emperor Erishi, who wets himself in fear. For a brief moment, Kuni is seduced by the trappings of imperial power, imagining a life of decadence with a harem. However, his loyal friends, Rin Coda and Cogo Yelu, quickly intervene and remind him of his true character and purpose. Shaken from his fantasy, Kuni immediately establishes a gentle and just rule over the city, abolishing the empire's cruel laws and winning the hearts of the people. He is now the de facto master of the empire's heartland, awaiting the inevitable arrival of Mata Zyndu's much larger army.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Tan Adü", path: "/places/tan-adu" }, { name: "Emperor Erishi", path: "/characters/emperor-erishi" }]
    },
    {
        num: 31,
        title: "The Slaughter",
        date: "WOLF’S PAW: THE ELEVENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "He was Mata Zyndu, the Butcher of Wolf’s Paw.",
        speaker: "Mata Zyndu (internal thought)",
        summary: "Following his victory at Wolf's Paw, Mata Zyndu is faced with a logistical crisis: his massive army is trapped on the island, blockaded by the remnants of the Imperial navy. He is visited by a mysterious old woman, heavily implied to be the goddess Kana, who tempts him with a horrific solution. To appease the unpredictable sea god Tazu and gain safe passage, Mata must make a great sacrifice. In a chilling act of cold-blooded strategy, he tricks twenty thousand surrendered Imperial prisoners into boarding shoddily constructed ships. He then deliberately sails the fleet directly into the great whirlpool of the Kishi Channel, sacrificing all twenty thousand men to the sea. Tazu, pleased with the offering, calms the waters for Mata's own fleet. This monstrous act forever earns Mata the epithet 'Butcher of Wolf's Paw' and marks his complete descent from an honorable warrior into a ruthless tyrant.",
        links: [{ name: "Wolf's Paw", path: "/places/wolfs-paw" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kishi Channel", path: "/places/kishi-channel" }, { name: "Tazu", path: "/gods/tazu" }, { name: "Kana", path: "/gods/kana" }]
    },
    {
        num: 32,
        title: "The Housekeeper",
        date: "OUTSIDE ÇARUZA: THE TWELFTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A marriage is a carriage with two sets of reins, and you must not let him do all the driving.",
        speaker: "Soto",
        summary: "With Kuni away, Jia feels increasingly isolated in the high society of Çaruza, struggling to raise her two young children alone. She hires a new housekeeper, an unassuming but preternaturally wise middle-aged woman named Soto, who quickly becomes Jia's closest confidante. In a major revelation, it is discovered that Soto is in fact Soto Zyndu, Mata's aunt, who was long believed to have perished by fire during the Xana conquest. Having survived and lived in obscurity for years, Soto advises Jia to cast off the passive role expected of her and to fully embrace her power as a political wife, becoming an active and equal partner in shaping Kuni's destiny and the future of Dara.",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }]
    },
    {
        num: 33,
        title: "The Real Master of Pan",
        date: "GÉJIRA: THE FIRST MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "I’ll die before I let him become King of Géfica!",
        speaker: "Mata Zydu",
        summary: "After conquering the last Imperial holdouts, Mata Zyndu finally learns that Kuni Garu has already captured Pan. Consumed by a paranoid rage and convinced that his sworn brother has betrayed him to steal his glory, Mata refuses to listen to reason. He marches his army on the capital but rejects Kuni's peaceful offer to hand over the city. While surveying the destruction, he encounters Lady Mira, a woman from Tunoa who sings a familiar mourning song for her brother, a soldier who died in Mata's army. Moved by this connection to his past, he takes her into his household. In a final, terrible act of vengeance against the Xana Empire, Mata burns Pan to the ground, killing the boy-emperor Erishi in the conflagration. He declares the Princeps's Promise null and void and proclaims himself Hegemon, the new supreme ruler. The friendship between Kuni and Mata is shattered, igniting a new, tragic civil war between the rebellion's two greatest heroes.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Lady Mira", path: "/characters/lady-mira" }]
    },
    {
        num: 34,
        title: "The Banquet",
        date: "PAN: THE THIRD MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "You are a good friend, but you’re also a fool.",
        speaker: "Mata Zyndu",
        summary: "In the desolate ruins of Pan, Hegemon Mata Zyndu holds a victory banquet and summons Kuni Garu, intending to publicly shame and possibly execute him for his perceived betrayal. Kuni courageously attends, accompanied only by Luan Zya and his loyal, formidable butcher-general, Mün Çakri. Kuni delivers a masterful and heartfelt speech, professing that his actions were only ever intended to pave the way for Mata's ultimate triumph. The tense standoff is broken when one of Mata's advisors, Torulu Pering, signals for an assassin to kill Kuni during a celebratory sword dance. However, Mün Çakri intervenes, using his massive shield and meat-carving prowess to protect his lord. Moved by Kuni's apparent sincerity and impressed by Mün's fierce loyalty, Mata spares Kuni's life, but the chasm between the two former brothers is now deeper than ever.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Mün Çakri", path: "/characters/mun-cakri" }]
    },
    {
        num: 35,
        title: "A New World",
        date: "PAN: THE FIFTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "To be a hegemon is to be a slave to the idea of being a hegemon.",
        speaker: "Torulu Pering",
        summary: "As the new Hegemon, Mata Zyndu begins the task of reshaping the world according to his vision of a restored, traditional order. He redraws the map of Dara, carving up old territories and creating new Tiro states. He rewards his most loyal followers with kingships and punishes those he deems treacherous or unworthy, often ignoring their actual contributions to the rebellion in favor of personal loyalty. In a final, masterful stroke of political maneuvering designed to neutralize his greatest rival, he 'rewards' Kuni Garu with the kingship of Dasu, a tiny, impoverished, and remote island. It is an effective exile. To ensure Kuni's compliance, Mata announces that he will keep Kuni's wife Jia and their children in Cocru, under his 'protection,' as hostages.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Dasu", path: "/places/dasu" }]
    },
    {
        num: 36,
        title: "Dasu",
        date: "DASU: THE SIXTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "I’m coming home, my beloved, center of my heart.",
        speaker: "Kuni Garu",
        summary: "Exiled to the barren island of Dasu, Kuni Garu and his followers must put on a performance of contentment for Mata Zyndu's spies, who watch them constantly from the neighboring island of Rui. As a grand gesture of his supposed acceptance of his fate, Kuni follows Luan Zya's cunning advice and burns his entire fleet of transport ships upon arrival, signaling to the Hegemon that he has no means or intention of leaving his island prison. While his administrator, Cogo Yelu, begins the practical and difficult work of building a functional state from nothing, Kuni establishes a secret line of communication with Jia. Using invisible ink made from dandelion milk, they exchange letters, plotting a seemingly impossible strategy for Kuni's return to power from the edge of the world.",
        links: [{ name: "Dasu", path: "/places/dasu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Luan Zya", path: "/characters/luan-zya" }]
    },
    {
        num: 37,
        title: "A Visit Home",
        date: "OUTSIDE ÇARUZA: THE SEVENTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "Faith is stronger when it acknowledges and embraces doubt.",
        speaker: "Soto Zyndu",
        summary: "At great personal risk, Kuni Garu sneaks off Dasu in disguise and travels to Cocru for a secret reunion with Jia and to meet their newborn daughter, Rata-tika. The reunion is strained, shadowed by the emotional distance of their long separation and Jia's wartime affair with their loyal steward, Otho Krin. Guided by the profound political and personal wisdom of Soto Zyndu, Kuni and Jia confront the painful realities of their marriage and their ambitions. They forgive each other and forge a new, stronger partnership based on radical honesty and shared purpose. Fully embracing her role as a political player, Jia makes a stunning strategic proposal: Kuni should take a second wife to create new political alliances and to act as a strategic distraction for the Hegemon.",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }]
    },
    {
        num: 38,
        title: "Risana",
        date: "OUTSIDE ÇARUZA: THE SEVENTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "To delight and to lead.",
        speaker: "Risana",
        summary: "While escaping Mata's patrols after visiting Jia, Kuni takes refuge in the secluded cottage of Lady Risana, a beautiful and enigmatic illusionist. Risana is a master of using herbal smoke to create illusions and, more importantly, to clear the 'smoke' of doubt and confusion from people's minds. She perceives Kuni's deep-seated self-doubt, hidden beneath his confident exterior. She uses her unique art not to deceive him, but to help him see himself with clarity, dispelling his fears and restoring his sense of purpose. Kuni, recognizing her extraordinary wisdom and power, asks her to join him. She agrees, becoming his second wife and a crucial new advisor.",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Consort Risana", path: "/characters/consort-risana" }]
    },
    {
        num: 39,
        title: "Letters",
        date: "DASU AND OUTSIDE ÇARUZA: THE NINTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "The heart surely has room for more than one.",
        speaker: "Jia Matiza (internal thought)",
        summary: "This chapter unfolds through the secret correspondence between Kuni in Dasu and Jia in Cocru, revealing the depth of their renewed political and personal partnership. They use their letters to discuss grand strategy, political philosophy, and the complexities of their new polygamous marriage. Jia proves to be a master of intelligence, gathering information on Mata's court and identifying potential allies among disgruntled nobles, like the bandit-turned-marquess Puma Yemu. Kuni articulates his evolving vision for a new, unified empire founded on justice for the common people, contrasting it with Mata's desire to restore a fading aristocratic order. Their letters transform their marriage into a powerful clandestine alliance, laying the intellectual and strategic foundation for Kuni's eventual return.",
        links: [{ name: "Dasu", path: "/places/dasu" }, { name: "Çaruza", path: "/places/caruza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 40,
        title: "Gin Mazoti",
        date: "DIMUSHI: A LONG TIME AGO.",
        quote: "When you learn enough about the world, even a blade of grass can be a weapon.",
        speaker: "The Dockmaster",
        summary: "The full, harrowing backstory of Gin Mazoti is revealed. Born in a brothel in the port city of Dimushi, she suffered a brutal and abusive childhood. After escaping, she survived for a time in a violent gang of thieves before fleeing and finding a new life disguised as a boy named 'Gin' on the city's bustling docks. It is here she discovers her innate genius for logistics, engineering, and spatial reasoning. However, she is constantly dismissed and overlooked due to her small stature and common birth. Her journey through the various rebel armies is one of perpetual frustration, as her brilliant strategic plans are ignored by arrogant, tradition-bound commanders. This experience fuels her desperate search for a leader who values intelligence and merit over noble birth and brute strength.",
        links: [{ name: "Gin Mazoti", path: "/characters/gin-mazoti" }]
    },
    {
        num: 41,
        title: "The Marshal",
        date: "THE TENTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "A woman is often weaker than a man physically, and that means she must use a different set of techniques when she wishes to overcome a stronger opponent.",
        speaker: "Gin Mazoti",
        summary: "After months of petitioning, Gin Mazoti is finally granted an audience with Kuni Garu in Dasu. She proves her strategic genius by handily defeating his chief minister, Cogo Yelu, in a game of cüpa. Impressed and true to his meritocratic ideals, Kuni makes a revolutionary decision: he reveals Gin's true identity as a woman to his entire army and appoints her as his Marshal. Despite the initial shock and sexist resistance from his commanders, Gin quickly earns their absolute respect by implementing highly innovative and brutally effective training methods. She institutes realistic war games and, with Lady Risana's help, establishes a women's auxiliary corps, forging Kuni's small, isolated army into a uniquely modern and formidable fighting force.",
        links: [{ name: "Dasu", path: "/places/dasu" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Consort Risana", path: "/characters/consort-risana" }]
    },
    {
        num: 42,
        title: "The Dandelion Ripens",
        date: "DASU: THE SIXTH MONTH IN THE SECOND YEAR OF THE PRINCIPATE.",
        quote: "Can you unite the Islands of Dara under one crown and bring about lasting peace, while lessening the burden of the people?",
        speaker: "Luan Zya",
        summary: "A year into his 'exile,' Kuni Garu's leadership has transformed Dasu from a barren rock into a thriving beacon of innovation, fair governance, and meritocracy, attracting talented people from all over Dara. Luan Zya arrives, having become completely disillusioned with the selfish infighting of the restored Tiro states. He formally pledges his service to Kuni, challenging him to fulfill Emperor Mapidéré's vision of a unified Dara, but to do so with justice and compassion, avoiding the tyrant's mistakes. Kuni fully accepts this as his destiny. With Luan as his strategist, Gin as his marshal, the support of his wives Jia and Risana, and a loyal, uniquely trained army, the Dandelion is no longer a humble weed but a ripened force, ready to challenge the Chrysanthemum for the future of the islands.",
        links: [{ name: "Dasu", path: "/places/dasu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Consort Risana", path: "/characters/consort-risana" }]
    },
    {
        num: 43,
        title: "First Strike",
        date: "RUI: THE SEVENTH MONTH IN THE THIRD YEAR OF THE PRINCIPATE.",
        quote: "How hard it is to foresee how life will turn out.",
        speaker: "Dafiro Miro",
        summary: "Marshal Gin Mazoti puts her and Luan Zya's master plan into action. While a small force builds a fake shipyard on Dasu's coast to act as a decoy for Kindo Marana's aerial surveillance, Kuni's main army secretly repairs and utilizes a long-forgotten section of Emperor Mapidéré's abandoned undersea Grand Tunnels. They launch a stunning surprise attack through the tunnel, emerging on the neighboring island of Rui, the heartland of the old Xana Empire. The island's capital, Kriphi, is caught completely off guard and falls swiftly. During the battle, Dafiro Miro, who had seemingly defected, reveals himself to be a double agent for Kuni and assassinates the Hegemon's commander, Kindo Marana. With a single, brilliant strike, Kuni's forces have captured the strategic and symbolic core of Mata's power base.",
        links: [{ name: "Rui", path: "/places/rui" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }, { name: "Dafiro Miro", path: "/characters/dafiro-miro" }, { name: "Luan Zya", path: "/characters/luan-zya" }]
    },
    {
        num: 44,
        title: "The Cruben in Deep Sea",
        date: "ÇARUZA: THE FIRST MONTH IN THE FOURTH YEAR OF THE PRINCIPATE.",
        quote: "See him for who he really is, Mira. That is all I ask.",
        speaker: "Kiji",
        summary: "As Kuni's rebellion gains momentum, Mata Zyndu grows ever more isolated and brutal in his rule. In Çaruza, Mira, the woman from Tunoa whom Mata has taken into his household, becomes an unwitting pawn in the gods' games. The god Kiji, disguised as a beggar, approaches her in the market and gives her a bone dagger—the very one used to murder Phin Zyndu. He urges her to see the Hegemon's true nature, strongly implying that it is her destiny to kill him, adding another layer of conflict to her relationship with Mata. Meanwhile, in Haan, Gin Mazoti and Luan Zya unveil their ultimate weapon. Based on Luan's technical genius and Gin's logistical skill, they have constructed a fleet of mechanical, submersible vessels ingeniously disguised as giant crubens. This revolutionary new technology grants them mastery of the sea from below, allowing them to bypass Mata's naval blockades and land troops anywhere on the Big Island at will, rendering the Hegemon's conventional navy obsolete.",
        links: [{ name: "Çaruza", path: "/places/caruza" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Kiji", path: "/gods/kiji" }, { name: "Cruben", path: "/concepts/cruben" }, { name: "Lady Mira", path: "/characters/lady-mira" }]
    },
    {
        num: 45,
        title: "Dasu and Cocru",
        date: "WOLF’S PAW AND THE BIG ISLAND: THE SIXTH MONTH IN THE FOURTH YEAR OF THE PRINCIPATE.",
        quote: "You pick the stronger gang or you’re lost.",
        speaker: "Théca Kimo",
        summary: "The war transforms into a multi-front conflict dominated by Kuni's strategic and technological superiority. Théca Kimo, one of Mata's most pragmatic dukes, views the war as a battle between two rival gangs and pragmatically defects to Kuni's stronger side. While Mata is distracted putting down a rebellion on Wolf's Paw, Marshal Gin Mazoti uses the mechanical crubens to land armies across the Big Island. Her forces, better trained and more disciplined, steadily conquer the territories loyal to the Hegemon. Kuni's methodical campaign, orchestrated by Gin and Luan, tightens the noose around Mata's heartland of Cocru, setting the stage for the final confrontation.",
        links: [{ name: "Wolf's Paw", path: "/places/wolfs-paw" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Théca Kimo", path: "/characters/theca-kimo" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "King Mocri", path: "/characters/king-mocri" }]
    },
    {
        num: 46,
        title: "Mata’s Counterattack",
        date: "ZUDI: THE EIGHTH MONTH IN THE FOURTH YEAR OF THE PRINCIPATE.",
        quote: "There won’t be another you, but there can always be more children.",
        speaker: "Kuni Garu",
        summary: "Believing Kuni's main forces are engaged elsewhere, Mata Zyndu launches a brilliant and desperate counterattack. Using his entire air force, he bypasses Kuni's ground troops and executes a stunning aerial assault, dropping his soldiers directly into Zudi from battle kites. The city is retaken in a swift and brutal surprise attack. Kuni, his family, and his inner circle are trapped in the mayor's house with only a single airship to escape. In a moment of extreme crisis, Kuni makes the shocking decision to save his wives by leaving his children behind as hostages, believing Mata will not harm them. However, Jia makes her own strategic choice: she insists on staying behind with Kuni to face capture, while Risana escapes with all the children. Jia's act solidifies her political standing but leaves her a prisoner of the victorious Hegemon.",
        links: [{ name: "Zudi", path: "/places/zudi" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Consort Risana", path: "/characters/consort-risana" }]
    },
    {
        num: 47,
        title: "The Standoff at Liru River",
        date: "DIMU AND DIMUSHI: THE NINTH MONTH IN THE FOURTH YEAR OF THE PRINCIPATE.",
        quote: "Do you think that if I intend to replace you, I would be stopped by the loss of a single life?",
        speaker: "Kuni Garu",
        summary: "The two opposing armies encamp on opposite sides of the Liru River, Kuni in Dimushi and Mata in Dimu. Mata holds Jia and Kuni's father as hostages. During a tense parley, Mata attempts to break Kuni's will by threatening to cook and eat his father in front of both armies. Kuni, in a masterful and chilling performance, calls his bluff, feigning an absolute ruthlessness and claiming that the loss of one life means nothing to his ambition. The psychological gamble succeeds; Mata, disgusted by Kuni's apparent inhumanity yet unwilling to commit such a monstrous act, spares Féso Garu's life. The war settles into a tense stalemate. During this time, Luan Zya orchestrates a clever psychological operation that successfully frames Mata's wisest advisor, Torulu Pering, as a traitor. Deceived, Mata executes his most loyal counselor, leaving him strategically isolated.",
        links: [{ name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 48,
        title: "The Marshal’s Gambit",
        date: "RIMA AND FAÇA: THE THIRD MONTH OF THE FIFTH YEAR OF THE PRINCIPATE.",
        quote: "He didn’t know anything about how to fight a war.",
        speaker: "Gin Mazoti",
        summary: "To break the military stalemate, Marshal Gin Mazoti leads a Dasu army north to invade the neutral states of Rima and Faça. In Rima, she confronts an army led by the idealistic scholar-king Zato Ruthi, who foolishly attempts to fight according to the honorable but outdated laws of war prescribed in the classics. Gin uses brilliant, unconventional tactics—including damming a river and then releasing a flash flood mid-battle—to utterly defeat and capture him. She then marches on Faça, where the treacherous King Shilué, believing he can play both sides, welcomes her into his capital, Boama. Having confirmed his intended betrayal through Luan Zya's intelligence, Gin promptly executes Shilué at his own banquet. She conquers both states in Kuni's name, declaring herself their queen and decisively shifting the war's balance of power in Dasu's favor.",
        links: [{ name: "Rima", path: "/places/rima" }, { name: "Faça", path: "/places/faca" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "King Shilué", path: "/characters/king-shilue" }]
    },
    {
        num: 49,
        title: "The Temptation of Gin Mazoti",
        date: "BOAMA: THE FIFTH MONTH IN THE FIFTH YEAR OF THE PRINCIPATE.",
        quote: "The world is not only a world of brute force and heartless betrayals.",
        speaker: "Gin Mazoti",
        summary: "Now the powerful Queen of both Rima and Faça, Gin Mazoti finds herself at a crossroads. The god Kiji, disguised as a beggar, appears before her and tempts her with a vision of supreme power. He argues that Kuni Garu will inevitably see her growing strength as a threat and that her only logical move is to betray him first, seizing the opportunity to become the ultimate ruler of Dara herself. Gin is deeply troubled by the proposal, weighing the cynical logic of power against her hard-won loyalty to Kuni, the one lord who has always treated her with respect. After a period of soul-searching, she rejects the god's temptation. In a crucial affirmation of her character, she chooses to remain faithful to Kuni, reaffirming her belief in a world built on more than just ruthless ambition.",
        links: [{ name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Kiji", path: "/gods/kiji" }, { name: "Faça", path: "/places/faca" }]
    },
    {
        num: 50,
        title: "Glory of the Chrysanthemum",
        date: "COCRU: THE ELEVENTH MONTH IN THE EIGHTH YEAR OF THE PRINCIPATE.",
        quote: "I’m on the run not because I don’t know how to fight, but because the gods are jealous of me.",
        speaker: "Mata Zyndu",
        summary: "After three more years of grinding war, Mata's forces are starving and on the verge of collapse. Kuni offers a generous peace treaty, which a weary Mata accepts. However, Luan Zya presents Kuni with a parable, arguing that true peace is impossible as long as both leaders coexist. Convinced, Kuni breaks the treaty and launches a massive surprise attack. Mata's army is surrounded and hopelessly outnumbered. Their morale is shattered by a ploy from Lady Risana, who brings the soldiers' wives and mothers to the battlefield to sing songs of peace. As his army crumbles, Mata returns to his tent to find that Mira has taken her own life rather than watch him die. Her suicide is the final blow. Cradling her body, he sings a lament before leading his most loyal followers, including Ratho Miro, in a final, suicidal charge. Cornered on a snowy beach, he takes his own life rather than suffer capture, bringing the devastating Chrysanthemum-Dandelion War to an end.",
        links: [{ name: "Cocru", path: "/places/cocru" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Consort Risana", path: "/characters/consort-risana" }, { name: "Lady Mira", path: "/characters/lady-mira" }]
    },    
    {
        num: 51,
        title: "The Coronation",
        date: "DARA: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The dandelion is a common flower, a flower of the people.",
        speaker: "Kuni Garu",
        summary: "With Mata Zyndu dead, the civil war concludes, and Kuni Garu is the undisputed victor. In the heavens, the gods of Dara, accepting the new reality, reconcile their differences. Kuni begins the process of consolidating his rule, traveling through the islands to distribute titles and rewards. He names Gin Mazoti the powerful Queen of Géjira and deals with the complex political aftermath of the long war.\n\nOn the eve of his formal coronation as Emperor Ragin of the new Dasu Dynasty, Kuni holds one last informal banquet in his hometown of Zudi with his oldest and most loyal friends. Reflecting on his incredible journey from a street rogue to the ruler of all Dara, he puts down the formal drinking vessel of a king and sings a song celebrating the dandelion. In this final act, he reaffirms his identity not as a conqueror in the mold of the old nobility, but as a new kind of ruler—an emperor of the common people. The book ends with Kuni, the first Dandelion Emperor, poised to begin his reign over a unified but scarred Dara.",
        links: [{ name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zudi", path: "/places/zudi" }, { name: "Amu", path: "/places/amu" }, { name: "Cocru", path: "/places/cocru" }, { name: "Faca", path: "/places/faca" }, { name: "Gan", path: "/places/gan" }, { name: "Haan", path: "/places/haan" }, { name: "Rima", path: "/places/rima" }, { name: "Xana", path: "/places/xana" }]
    }
];


const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);


export default function GraceOfKingsPage() {
    return (
        <div>
            <TopNavigation
                prevPage={null}
                nextPage={{ title: "The Wall of Storms", path: "/books/the-wall-of-storms" }}
                returnLink={{ title: "Return to Series Overview", path: "/books" }}
            />

            {/* --- BOOK HEADER --- */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image
                        src="/books/the-grace-of-kings.jpg"
                        alt="The Grace of Kings Book Cover"
                        width={400}
                        height={600}
                        className="rounded-lg shadow-2xl object-cover w-full"
                        priority
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <div>
                        <p className="text-lg text-gray-500 dark:text-gray-400 font-semibold mb-1">The Dandelion Dynasty #1</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Grace of Kings</h1>
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p>Wily, charming Kuni Garu, a bandit, and stern, fearless Mata Zyndu, the son of a deposed duke, seem like polar opposites. Yet, in the uprising against the emperor, the two quickly become the best of friends. Once the emperor has been overthrown, however, they each find themselves the leader of separate factions—two sides with very different ideas about how the world should be run and the meaning of justice.</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-xl mb-4 text-teal-600 dark:text-teal-400">Book Details</h3>
                        <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> April 7, 2015 by Saga Press</li>
                            <li><strong>Pages:</strong> 640 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781481424271</li>
                            <li><strong>Awards:</strong> Locus Award for Best First Novel (2016), Nebula Award Nominee (2015)</li>
                        </ul>
                        <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 space-y-2">
                            <a href="https://www.goodreads.com/book/show/18952341-the-grace-of-kings" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center text-base">
                                View on Goodreads <ExternalLinkIcon />
                            </a>
                            <br />
                            <a href="https://amzn.to/4lYVMGM" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center text-base">
                                Purchase on Amazon <ExternalLinkIcon />
                            </a>
                            <p className="text-xs text-gray-400 dark:text-gray-500 pt-2 italic">
                                (If you purchase the book through this link, it&apos;ll give me a small kickback!)
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

            <BottomNavigation
                prevItem={null}
                nextItem={{ title: "The Wall of Storms", path: "/books/the-wall-of-storms" }}
                bottomNavType="book"
            />
        </div>
    );
}