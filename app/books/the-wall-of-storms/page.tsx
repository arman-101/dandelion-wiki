import Image from 'next/image';
import Link from 'next/link';
import BookNavigation from '../../components/BookNavigation'; // <-- ADD THIS IMPORT
import TopBookNavigation from '../../components/TopBookNavigation'; // Import the new component

// --- ACCURATE & DETAILED DATA FOR THE WALL OF STORMS (Chapters 1-30) ---
const chapters = [
    {
        num: 1,
        title: "Truants",
        date: "PAN: THE SECOND MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You should accept your punishment gracefully.",
        speaker: "Prince Timu",
        summary: "In a cozy Pan tavern, the Imperial children—Timu, Théra, and Phyro—have snuck away from the palace to escape their punishment essays. They listen, enthralled, to a storyteller recounting the legendary duel between Mata Zyndu and King Mocri.\n\nThe performance is disrupted by a brutish man claiming to be an agent of the Farsight Secretary. He attempts to extort the storyteller, but a young, crippled scholar named Zomi Kidosu courageously stands up to him. When her wooden practice sword is revealed to be a fake, the man turns violent. In a flash of ingenuity, Théra and Phyro rally the tavern patrons, turning the crowd against the bully and driving him away, saving Zomi in a clever display of their inherited talents.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 2,
        title: "Fallen Kings",
        date: "PAN: THE SECOND MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The gods meant for us to meet here today, and we can reclaim the glory that is our due from the weed-emperor.",
        speaker: "Noda Mi",
        summary: "As a snowstorm blankets Pan, the gods Tazu and Kiji converse in the winds, hinting at the instability of the Dandelion Throne, born from Kuni's betrayal of Mata Zyndu.\n\nIn a city graveyard, two disgraced nobles from the Hegemon's regime, the hulking Doru Solofi and the cunning Noda Mi, lament their fall from grace. Recognizing a shared ambition and resentment, they find common cause in their desire for vengeance against the 'weed-emperor.' They swear an oath to each other, planting the seeds of a new rebellion aimed at overthrowing the House of Dandelion.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "The Gods of Dara", path: "/concepts/gods-of-dara" }, { name: "Doru Solofi", path: "/characters/doru-solofi" }, { name: "Noda Mi", path: "/characters/noda-mi" }]
    },
    {
        num: 3,
        title: "Princes and Princesses",
        date: "THE IMPERIAL PALACE: THE SECOND MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Apologizing to you right after your angry lecture would hardly show much sincerity.",
        speaker: "Emperor Ragin",
        summary: "The Imperial Tutor, Zato Ruthi, furiously resigns after discovering the children have not only skipped their punishment but also painted a mocking poem on his back. Emperor Ragin and Empress Jia skillfully intervene, reinterpreting the children's prank as a sophisticated, heartfelt apology. They orchestrate a scene where the children present humble gifts, mollifying Ruthi and convincing him to stay. The chapter highlights Kuni's masterful ability to spin narratives and manage the delicate politics of his own court and family.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Empress Jia", path: "/characters/jia-matiza" }, { name: "Zato Ruthi", path: "/characters/zato-ruthi" }]
    },
    {
        num: 4,
        title: "Grand Examination",
        date: "PAN: THE SECOND MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The rest is up to chance.",
        speaker: "Zomi Kidosu",
        summary: "The first Grand Examination of the Dandelion Dynasty begins, a monumental event drawing the brightest scholars from across Dara. The chapter details the immense pressure and grueling conditions faced by the scholars. The narrative follows Zomi Kidosu as she endures the three-day ordeal, a test of will as much as intellect. The emperor himself has set the essay topic: to propose a single policy to improve the lives of the people. Zomi completes her essay, feeling she has done her best but knowing her fate is now out of her hands.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Grand Examination", path: "/concepts/grand-examination" }]
    },
    {
        num: 5,
        title: "Mimi",
        date: "DASU: THE TWENTY-SECOND YEAR IN THE REIGN OF ONE BRIGHT HEAVEN (EIGHTEEN YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "Talent is like a pretty feather in the tail of a peacock, daughter. It brings joy to the powerful but only sorrow to the bird.",
        speaker: "Aki Kidosu",
        summary: "The narrative flashes back eighteen years to the birth of Zomi Kidosu, born with the name Mimi to a poor fishing family in Dasu. Her father, Oga, is conscripted into a doomed expedition launched by Emperor Mapidéré and is lost at sea. Mimi grows up in poverty, marked by a lightning strike that leaves her with a scarred face and a paralyzed leg. Despite her hardships, she displays a brilliant and inquisitive mind.\n\nOne day, she encounters a mysterious, learned man named 'Toru Noki' in the market. Impressed by her raw intelligence and unique way of thinking, he reveals himself to be the legendary Luan Zya and offers to become her teacher, seeing in her the potential for greatness.",
        links: [{ name: "Dasu", path: "/places/dasu" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Luan Zya", path: "/characters/luan-zya" }]
    },
    {
        num: 6,
        title: "The Hundred Flowers",
        date: "DASU: A LONG TIME AGO.",
        quote: "True courage is to insist on seeing when all around you is darkness.",
        speaker: "The Orchid",
        summary: "To soothe the young Mimi after her injury, her mother Aki tells her an ancient story. It is the tale of how the gods decided to create the calendar by having the plants and animals of Dara race to find them. The story culminates with the blind god Fithowéo, hiding in a dark cave full of self-pity. A humble, night-blooming orchid teaches him that there are many ways of 'seeing'—through scent, sound, and feeling—and that his duty as the god of war is to represent not just victory, but the courage to fight on when all seems lost. Inspired, Fithowéo learns to see with his other senses and rejoins the world.",
        links: [{ name: "Dasu", path: "/places/dasu" }, { name: "The Gods of Dara", path: "/concepts/gods-of-dara" }, { name: "Fithowéo", path: "/characters/fithoweo" }]
    },
    {
        num: 7,
        title: "Teacher and Student",
        date: "DASU: THE FIRST YEAR IN THE PRINCIPATE (THIRTEEN YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "The Ano logograms are a record of our climb up the mountain of knowledge.",
        speaker: "Luan Zya",
        summary: "Luan Zya begins Zomi's education. He teaches her the principles of engineering and the philosophies of Dara, comparing the construction of machines to the construction of ideas with logograms. He recognizes her raw talent but also her impatience with tradition. To help her with her paralyzed leg, Luan invents a revolutionary mechanical leg brace, an exoskeleton of wood and sinew that allows her to walk with ease. Finally, he bestows upon her the formal name Zomi, meaning 'Pearl of Fire,' a name befitting her tenacious spirit.",
        links: [{ name: "Dasu", path: "/places/dasu" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Luan Zya", path: "/characters/luan-zya" }]
    },
    {
        num: 8,
        title: "A Drinking Party",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Like the hounds that are leashed after all the rabbits have been caught, and like the bows that are packed away after all the wild geese have been bagged.",
        speaker: "Théca Kimo",
        summary: "At a boisterous celebration for the adopted son of General Mün Çakri, Kuni's old guard—the generals and nobles who fought alongside him—gather. A game of 'Fool's Mirror' reveals the underlying anxieties of the court. While some, like Mün Çakri, are content, others like Théca Kimo feel their martial skills are no longer valued in an era of peace. The scene highlights a growing rift between the military old guard and the new civil bureaucracy, as well as the subtle power plays between Empress Jia and Consort Risana.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Mün Çakri", path: "/characters/mun-cakri" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Théca Kimo", path: "/characters/theca-kimo" }]
    },
    {
        num: 9,
        title: "Palace Examination",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "A moral ruler should not resort to arms.",
        speaker: "Kita Thu",
        summary: "The top ten scholars of the Grand Examination present their policy proposals to the emperor. The first, Kita Thu, argues for a radical return to the old Tiro system, effectively stripping the emperor of military and administrative power in favor of a purely moral authority. The proposal is a veiled critique of Kuni's centralized rule, secretly supported by nobles who feel their power has been diminished. Kuni deftly dismisses the idea without alienating the powerful factions behind it.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Grand Examination", path: "/concepts/grand-examination" }]
    },
    {
        num: 10,
        title: "A Balloon Ride",
        date: "SOMEWHERE OVER THE SEA NORTH OF CRESCENT ISLAND: THE FIRST YEAR IN THE REIGN OF FOUR PLACID SEAS (FIVE YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "A knife needs to be sharpened against stone, but a pearl needs to be polished with soft cloth.",
        speaker: "Luan Zya",
        summary: "In another flashback, Luan Zya continues Zomi's education aboard a hot-air balloon. He teaches her to fly the balloon by understanding the patterns of the wind, introducing her to the philosophies of Patternism and Incentivism. Zomi's quick, practical mind often clashes with Luan's more abstract teachings, but she proves to be a brilliant student, grasping complex concepts through her own unique lens. Their journey solidifies their deep teacher-student bond.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 11,
        title: "The Cruben-Wolf",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You have created a monster that is neither fish nor fowl, and at home nowhere.",
        speaker: "Kita Thu",
        summary: "Back at the Palace Examination, the children and Soto Zyndu eavesdrop from a hidden room. Soto provides a running commentary on the political theater, explaining to the children that the scholars' presentations are proxies for the power struggles between the court's factions. Théra shows a keen understanding of the subtext, while Timu remains focused on the literal arguments, highlighting their differing political aptitudes.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }]
    },
    {
        num: 12,
        title: "Crescent Island",
        date: "CRESCENT ISLAND: THE FIRST YEAR IN THE REIGN OF FOUR PLACID SEAS (FIVE YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "The Ano logograms are the most sophisticated machines ever devised for working with ideas.",
        speaker: "Luan Zya",
        summary: "Luan and Zomi land on Crescent Island and visit a remote, isolated hamlet of people who live a simple, traditional life. They communicate with the elder by sculpting logograms in clay. Luan uses this opportunity to teach Zomi the deeper principles of logogram construction, explaining how simple components (semantic roots, phonetic adapters) are combined like parts of a machine to build complex ideas. Zomi's mind is opened to the engineering elegance of the written language.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 13,
        title: "Merchants and Farmers",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The Flow of money is as vital to the health of the empire as the Flow of blood is to the body.",
        speaker: "Naroca Huza",
        summary: "At the Palace Examination, another scholar, Naroca Huza from a wealthy merchant family, uses an impressive moving-picture machine to argue against the emperor's high taxes on trade. Empress Jia fiercely debates him, arguing that unchecked commerce leads to the exploitation of farmers and threatens the stability of the empire. The debate exposes a major ideological rift in the court between the agrarian traditionalists, represented by Jia, and the rising merchant class, implicitly supported by Marshal Gin Mazoti.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Empress Jia", path: "/characters/jia-matiza" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }]
    },
    {
        num: 14,
        title: "The Hike Up the Mountain",
        date: "CRESCENT ISLAND: THE FIRST YEAR IN THE REIGN OF FOUR PLACID SEAS (FIVE YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "You lied! You were going to send me away and die here!",
        speaker: "Zomi Kidosu",
        summary: "Luan and Zomi hike up a mountain on Crescent Island, where Luan's leg is badly injured. They are caught in a forest fire started by a careless noble. Luan, believing his leg is broken and they are doomed, tries to sacrifice himself by sending Zomi away in their balloon. Zomi sees through his deception, jumps from the rising balloon to stay with him, and then brilliantly devises a plan to fight the fire with a controlled backburn, saving the hamlet and her teacher.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 15,
        title: "A Rebellion of Scholars",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Talent is a loaded word. Is it truly talent that the examination measures or mere habits of mind?",
        speaker: "Zomi Kidosu",
        summary: "Zomi Kidosu is finally called at the Palace Examination. She delivers a blistering critique of the entire Imperial examination system, arguing that it is inherently biased towards the wealthy and those from learned regions like Haan. She contends that its reliance on Classical Ano and logograms creates an insurmountable barrier for the poor and talented. In a radical proposal, she advocates for abolishing the logograms in the exam entirely in favor of the simpler, phonetic zyndari script to create a truly meritocratic system. Her speech shocks and scandalizes the entire court.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Grand Examination", path: "/concepts/grand-examination" }]
    },
    {
        num: 16,
        title: "Fighting Fire",
        date: "CRESCENT ISLAND: THE FIRST YEAR IN THE REIGN OF FOUR PLACID SEAS (FIVE YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "The best way to honor the gods is to blame them for less.",
        speaker: "Luan Zya",
        summary: "In the aftermath of the fire, Luan and Zomi discuss philosophy. Zomi challenges the deep-seated traditions of Dara, questioning why they cling to flawed systems (like the logograms) instead of inventing better ones. She argues for a radical, engineering-based approach to knowledge and society. Luan, a traditionalist, defends the value of history and caution, but is clearly impressed by her bold thinking. Their debate highlights the central philosophical conflict of the series: tradition versus innovation.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 17,
        title: "Through the Veil",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You have to learn to guide that talent, not be guided by it.",
        speaker: "Gin Mazoti",
        summary: "The Imperial children and Soto Zyndu discuss the political fallout from the examinations. Théra astutely realizes that the debates are not just about policy, but are proxy battles between her mother and Marshal Gin. She understands that her father's court is fracturing into factions. The chapter ends with the emperor making his final judgment on Zomi Kidosu, appointing her to the College of Advocates, a move that pleases no one but keeps the brilliant and disruptive scholar within the system.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }]
    },
    {
        num: 18,
        title: "Heir to the Empire",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "A young dynasty must pass through a wall of storms before the first succession.",
        speaker: "Emperor Ragin",
        summary: "Emperor Ragin reveals his deepest anxieties to Luan Zya. He fears a civil war between his sons, the bookish Timu and the martial Phyro, who are supported by rival court factions led by Jia and Risana, respectively. He confesses his secret, radical solution: he intends to name Princess Théra as his heir. However, he knows this is impossible unless the empire's patriarchal traditions are slowly dismantled. He asks Luan to stay and help him, but Luan, ever the wanderer, chooses to pursue his own quest to explore the unknown lands beyond the sea.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 19,
        title: "Partings",
        date: "PAN: THE FOURTH MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You’re too bold, Princess.",
        speaker: "Gin Mazoti",
        summary: "Luan Zya prepares to depart from Pan. He has a tense and emotionally distant farewell with Gin Mazoti, their unresolved feelings hanging between them. Zomi comes to see him off, and Gin, annoyed by what she perceives as a slight, is curt with her. The scene highlights the growing political tensions and Gin's pride.\n\nIn a secret meeting, Empress Jia reveals to King Kado that Zomi's pass to the Grand Examination was a forgery, not from Dasu's official allotment but from a pass Gin Mazoti had provided to Princess Théra. This revelation is a key piece of political leverage that Jia now holds over the marshal.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Empress Jia", path: "/characters/jia-matiza" }]
    },
    {
        num: 20,
        title: "The Magic Mirror",
        date: "TUNOA: THE SIXTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Kuni Garu must die!",
        speaker: "The Hegemon Cultists",
        summary: "Two years later, the rebellion started by Noda Mi and Doru Solofi has evolved into a dangerous cult venerating the ghost of Mata Zyndu. They use 'magic mirrors'—special bronze mirrors that can project an image of the Hegemon—to convince their followers that Mata has returned and is leading them. This combination of religious fervor and new technology makes them a far more potent threat, and their influence spreads rapidly across Tunoa.",
        links: [{ name: "Tunoa", path: "/places/tunoa" }, { name: "Noda Mi", path: "/characters/noda-mi" }, { name: "Doru Solofi", path: "/characters/doru-solofi" }]
    },
    {
        num: 21,
        title: "Mother and Daughter",
        date: "PAN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "To achieve a better life for the people, why must I choose to stain my name in the annals of Dara?",
        speaker: "Empress Jia",
        summary: "Empress Jia confides in Soto Zyndu, revealing the immense personal cost of her political machinations. She sees herself as a villain in history, sacrificing her reputation to build a stable, systematic empire that doesn't rely on the whims of charismatic leaders. The conversation reveals the depth of her vision and her willingness to be misunderstood for the greater good.\n\nMeanwhile, Princess Théra begins her own investigation into the nature of the magic mirrors, suspecting a scientific explanation rather than a supernatural one.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Empress Jia", path: "/characters/jia-matiza" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 22,
        title: "The Emperor's Shadows",
        date: "PAN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The princes do need practice to learn how to rule, and the best way to learn is by doing.",
        speaker: "Empress Jia",
        summary: "To address the succession crisis and the growing factionalism, Empress Jia proposes a 'friendly competition' between the princes. She suggests sending Timu to govern Dasu and Phyro to pacify the rebellion in Tunoa, creating two 'Emperor's Shadows' at opposite ends of the empire. The plan is a masterful political stroke, designed to give both princes experience while also moving them away from the central court and its intrigues, allowing Jia to consolidate her own power as regent-in-waiting.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Empress Jia", path: "/characters/jia-matiza" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
    },
    {
        num: 23,
        title: "Letters from Children",
        date: "NOKIDA: THE SIXTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Every day in the lives of the common man is a day of battle.",
        speaker: "Aki Kidosu (paraphrased by Zomi)",
        summary: "This chapter consists of letters from Zomi, Timu, and Phyro. Zomi, now serving Queen Gin in Géjira, writes to her mother about her work and her secret jokes at the expense of the court's stuffy nobles. Timu's letter to his father is comically verbose and bureaucratic, confirming that wealthy families are gaming the examination system by moving to Dasu. Phyro's letter from Tunoa is a boy's adventure story, detailing his early successes in fighting the Hegemon cults. The letters reveal the distinct personalities of the younger generation as they navigate their new responsibilities.",
        links: [{ name: "Nokida", path: "/places/nokida" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
    },
    {
        num: 24,
        title: "An Outing",
        date: "LAKE TUTUTIKA: THE SIXTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "A real friend is a mirror that reflects the truth back to us.",
        speaker: "The Lady of the Lake (Tututika)",
        summary: "Théra and Fara sneak out of the palace for a day at Lake Tututika. There, they meet a mysterious and beautiful lady who is revealed to be the goddess Tututika in disguise. The goddess speaks to Théra in metaphors about life, choice, and the nature of friendship. In a key moment, she uses the ripples in the lake to hint at the scientific principle behind the magic mirrors, telling Théra that 'light, in its true nature, shares much with these waves,' setting the princess on the path to discovery.",
        links: [{ name: "Lake Tututika", path: "/places/lake-tututika" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Tututika", path: "/concepts/gods-of-dara" }]
    },
    {
        num: 25,
        title: "Tests and Countertests",
        date: "PAN, ARULUGI, AND THE KARO PENINSULA: THE SEVENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "When the hunter comes to you with his axe sharpened, do you continue to play the loyal dog waiting for slaughter, or will you turn into a fierce wolf and fight for your survival?",
        speaker: "Cano Tho",
        summary: "Empress Jia's grand strategy unfolds. She secretly funds the Hegemon cults through Otho Krin to escalate the crisis in Tunoa. Simultaneously, she manipulates events to make it appear that Duke Théca Kimo of Arulugi is the mastermind behind the rebellion. Kuni, presented with fabricated evidence and pressured by the growing instability, is forced to move against his old friend. Théca Kimo, believing he has been framed and trapped, reluctantly declares rebellion, falling perfectly into Jia's trap.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Arulugi", path: "/places/arulugi" }, { name: "Empress Jia", path: "/characters/jia-matiza" }, { name: "Théca Kimo", path: "/characters/theca-kimo" }]
    },
    {
        num: 26,
        title: "Light and Reason",
        date: "PAN: THE SEVENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Not all wars are fought with swords and spears, and not all foes are found on the battlefield.",
        speaker: "Fithowéo",
        summary: "Princess Théra, guided by the goddess's hint, seeks out a mysterious master craftsman in the palace who is implied to be the god Fithowéo. He teaches her about the interference patterns of waves using a musical instrument called a moaphya. The lesson provides Théra with the final insight she needs. She realizes the 'magic' mirrors work by having microscopic, invisible ridges on their surface that manipulate light waves to project a hidden image. With this discovery, she now has the knowledge to counter the rebellion's most powerful weapon.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Fithowéo", path: "/characters/fithoweo" }]
    },
    {
        num: 27,
        title: "Rebels of Dara",
        date: "TUNOA: THE NINTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The grace of kings lies in graceful lies.",
        speaker: "Noda Mi",
        summary: "The rebellion in Tunoa reaches its peak. Noda Mi and Doru Solofi, using the magic mirrors, have amassed a large, fanatical army. Prince Phyro and Rin Coda are besieged in Zyndu Castle. Just as the rebels are about to overwhelm the defenses, Princess Théra arrives dramatically via airship. Using her own specially crafted mirror, she projects an image of the Hegemon embracing Emperor Ragin, shattering the rebels' faith and revealing their leaders' deception. The rebellion collapses instantly in the face of her scientific counter-magic.",
        links: [{ name: "Tunoa", path: "/places/tunoa" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Noda Mi", path: "/characters/noda-mi" }]
    },
    {
        num: 28,
        title: "Refuge",
        date: "NOKIDA: THE NINTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "If you intend to preserve your honor and influence, you must protect not only Noda and Doru, but also all their men.",
        speaker: "Zomi Kidosu",
        summary: "The defeated rebel leaders, Noda Mi and Doru Solofi, flee to Géjira and beg Queen Gin Mazoti for refuge. Gin is torn between her sense of honor (which dictates she protect them) and her political duty to the emperor. Zomi Kidosu, now serving as Gin's adviser, persuades her that offering refuge to all the rebels, not just the leaders, is the wisest course. It is a move that asserts Gin's authority and provides a sanctuary for dissenters, subtly positioning her as a check on the empress's power.",
        links: [{ name: "Nokida", path: "/places/nokida" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 29,
        title: "Empress and Marshal",
        date: "PAN: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You think like Mapidéré.",
        speaker: "Gin Mazoti",
        summary: "With the rebellion in Arulugi going poorly, Emperor Ragin decides to lead the army himself. Empress Jia, now regent in Pan, seizes the opportunity. She summons Gin Mazoti to the capital. In a tense confrontation, Jia accuses Gin of treason, citing her protection of the rebels as proof of a plot against the throne. Gin is arrested and imprisoned, a shocking move that removes the empire's most powerful military leader from the board and consolidates Jia's control.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Empress Jia", path: "/characters/jia-matiza" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }]
    },
    {
        num: 30,
        title: "Zomi's Secret",
        date: "PAN: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "To carry out my promise to the queen, I must first betray her.",
        speaker: "Zomi Kidosu (internal thought)",
        summary: "Empress Jia confronts Zomi Kidosu and reveals that she knows Zomi's pass to the Grand Examination was a forgery provided by Gin. Jia uses this knowledge to blackmail Zomi, forcing her to sign a false confession implicating Gin in a wider conspiracy. Zomi, trapped and fearing for her mother's safety and her own future, reluctantly agrees. Her betrayal provides Jia with the 'ironclad proof' she needs to justify her actions against the marshal.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Empress Jia", path: "/characters/jia-matiza" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }]
    },
];

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);


export default function WallOfStormsPage() {
    const bookNav = {
        prevBook: { title: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        nextBook: { title: "The Veiled Throne", link: "/books/the-veiled-throne" }
    };

    return (
        <div>
            <TopBookNavigation prevBook={bookNav.prevBook} nextBook={bookNav.nextBook} />
            
            {/* --- BOOK HEADER --- */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image
                        src="/the-wall-of-storms.jpg"
                        alt="The Wall of Storms Book Cover"
                        width={400}
                        height={600}
                        className="rounded-lg shadow-2xl object-cover w-full"
                        priority
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <div>
                        <p className="text-lg text-gray-500 dark:text-gray-400 font-semibold mb-1">The Dandelion Dynasty #2</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The Wall of Storms</h1>
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p>Emperor Kuni Garu, now known as Emperor Ragin, has reigned for years, and his dynasty seems secure. But the peace is fragile. Kuni’s children, the heirs to the empire, are coming of age, each with their own ambitions. And across the ocean, a new threat is stirring—an invasion force of unparalleled power, shielded by a seemingly impenetrable wall of storms, is preparing to cross the sea and challenge the Dandelion Throne.</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-xl mb-3 text-teal-600 dark:text-teal-400">Book Details</h3>
                        <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> October 4, 2016 by Saga Press</li>
                            <li><strong>Pages:</strong> 880 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781481424332</li>
                            <li><strong>Awards:</strong> Locus Award Nominee for Best Fantasy Novel (2017)</li>
                            <li>
                                <a href="https://www.goodreads.com/book/show/18952381-the-wall-of-storms" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center">
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
                            <a href={`#chapter-${chapter.num}`} className="text-teal-600 dark:text-gray-400 hover:text-[--color-accent-pink] hover:underline transition-colors">
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
                            <h3 className="text-2xl font-bold">{chapter.num} - {chapter.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">{chapter.date}</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 p-4 italic text-gray-600 dark:text-gray-300 text-left">
                                &ldquo;{chapter.quote}&rdquo;
                                <span className="not-italic font-semibold"> &mdash; {chapter.speaker}</span>
                            </blockquote>
                            <p className="my-4" style={{ whiteSpace: 'pre-line' }}>{chapter.summary}</p>
                            <div className="flex flex-wrap gap-2">
                                {chapter.links.map(link => (
                                    <Link key={link.name} href={link.path} className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
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