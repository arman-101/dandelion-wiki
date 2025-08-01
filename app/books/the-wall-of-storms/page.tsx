import Image from 'next/image';
import Link from 'next/link';
import BookNavigation from '../../components/BookNavigation';
import TopPageNavigation from '../../components/TopPageNavigation';

// --- ACCURATE & DETAILED DATA FOR THE WALL OF STORMS ---
const chapters = [
    {
        num: 1,
        title: "Truants",
        date: "PAN: THE SECOND MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You should accept your punishment gracefully.",
        speaker: "Prince Timu",
        summary: "In a cozy Pan tavern called the Three-Legged Jug, the Imperial children—the studious Prince Timu, the clever Princess Théra, and the mischievous Prince Phyro—have snuck away from the palace to escape their punishment essays assigned by their tutor, Zato Ruthi. They listen, enthralled, to a storyteller recounting the legendary duel between Mata Zyndu and King Mocri.\n\nThe performance is disrupted by a brutish extortionist claiming to be an agent of the Farsight Secretary, Rin Coda. He attempts to shake down the storyteller, but a young, crippled scholar named Zomi Kidosu courageously stands up to him. When her wooden practice sword is revealed to be a fake, the man turns violent. In a flash of ingenuity, Théra and Phyro rally the tavern patrons, turning the crowd against the bully and driving him away. They save Zomi, but in the chaos, the bully burns her official pass for the upcoming Grand Examination.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Zato Ruthi", path: "/characters/zato-ruthi" }, { name: "Rin Coda", path: "/characters/rin-coda" }]
    },
    {
        num: 2,
        title: "Fallen Kings",
        date: "PAN: THE SECOND MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The gods meant for us to meet here today, and we can reclaim the glory that is our due from the weed-emperor.",
        speaker: "Noda Mi",
        summary: "As a snowstorm blankets Pan, the gods Tazu and Kiji converse in the winds, hinting at the instability of the Dandelion Throne, which was born from Kuni's betrayal of Mata Zyndu and is thus seen as having a 'dark stain' at its foundation.\n\nIn a city graveyard, the bully from the tavern, revealed to be the disgraced former king Doru Solofi, is led by a mysterious boy (an avatar of Tazu) to a meeting with another fallen king, the cunning Noda Mi. Noda Mi has been running a cult-like scam based on the memory of the Hegemon. Recognizing their shared ambition and resentment, they find common cause in their desire for vengeance against Emperor Ragin. They swear an oath to each other, planting the seeds of a new rebellion.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Tazu", path: "/gods/tazu" }, { name: "Kiji", path: "/gods/kiji" }, { name: "Doru Solofi", path: "/characters/doru-solofi" }, { name: "Noda Mi", path: "/characters/noda-mi" }]
    },
    {
        num: 3,
        title: "Princes and Princesses",
        date: "THE IMPERIAL PALACE: THE SECOND MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Apologizing to you right after your angry lecture would hardly show much sincerity.",
        speaker: "Kuni Garu",
        summary: "The Imperial Tutor, Zato Ruthi, furiously resigns after discovering the children have not only skipped their punishment but have also painted a mocking poem on the back of his robe. Emperor Ragin and Empress Jia skillfully intervene to prevent a scandal. Kuni masterfully reinterprets the children's prank as a sophisticated, heartfelt apology, claiming they were expressing their unworthiness in a humble way. He orchestrates a scene where the children present humble gifts, mollifying the proud tutor and convincing him to stay. The chapter highlights Kuni's masterful ability to spin narratives and manage the delicate politics of his own court and family.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Zato Ruthi", path: "/characters/zato-ruthi" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
    },
    {
        num: 4,
        title: "Grand Examination",
        date: "PAN: THE SECOND MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The rest is up to chance.",
        speaker: "Zomi Kidosu",
        summary: "The first Grand Examination of the Dandelion Dynasty begins, a monumental three-day event drawing the brightest scholars from across Dara to Pan. The chapter details the immense pressure, the strict rules overseen by Rin Coda and Cogo Yelu, and the grueling conditions inside the massive, circular Examination Hall. The narrative follows Zomi Kidosu as she endures the ordeal, a test of will and endurance as much as intellect. The emperor himself has set the essay topic: to propose a single policy to improve the lives of the people. Zomi completes her essay, feeling she has done her best but knowing her fate is now out of her hands, praying to both Lutho (god of calculation) and Tazu (god of chance).",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "The Grand Examination", path: "/concepts/grand-examination" }, { name: "Rin Coda", path: "/characters/rin-coda" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }]
    },
    {
        num: 5,
        title: "Mimi",
        date: "DASU: THE TWENTY-SECOND YEAR IN THE REIGN OF ONE BRIGHT HEAVEN (EIGHTEEN YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "Talent is like a pretty feather in the tail of a peacock, daughter. It brings joy to the powerful but only sorrow to the bird.",
        speaker: "Aki Kidosu",
        summary: "The narrative flashes back eighteen years to the birth of Zomi Kidosu, born with the name Mimi to a poor fishing-farming family in Dasu on the same day a great storm destroys Emperor Mapidéré's expedition to find the Land of the Immortals. Her father, Oga, is conscripted into the search party for the lost prince and is lost at sea. At age five, Mimi is struck by lightning during a vision of a divine battle between the pawi of Lutho (a turtle) and Tazu (a shark), which leaves her with a scarred face and a paralyzed left leg.\n\nDespite her hardships, she displays a brilliant and inquisitive mind. One day, she encounters a mysterious, learned man named 'Toru Noki' in the market after a debate between scholars. Impressed by her raw intelligence and unique way of thinking ('weigh the fish'), he reveals himself to be the legendary Luan Zya and offers to become her teacher, seeing in her the potential for greatness.",
        links: [{ name: "Dasu", path: "/places/dasu-rui" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" }, { name: "Pawi", path: "/concepts/pawi" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }]
    },
    {
        num: 6,
        title: "The Hundred Flowers",
        date: "DASU: A LONG TIME AGO.",
        quote: "True courage is to insist on seeing when all around you is darkness.",
        speaker: "The Orchid",
        summary: "To soothe the young and injured Mimi, her mother Aki tells her an ancient myth about the origin of the Dara calendar. It is the tale of how the gods decided to name the years of a twelve-year cycle by having the plants and animals of Dara race to find them. The story culminates with the blind god Fithowéo, hiding in a dark cave full of self-pity after being blinded by Kiji in the Diaspora Wars. A humble, night-blooming orchid teaches him that there are many ways of 'seeing'—through scent, sound, and feeling—and that his duty as the god of war is to represent not just victory, but the courage to fight on when all seems lost. Inspired, Fithowéo learns to see with his other senses, takes obsidian stones for eyes, and rejoins the world, giving the humble orchid a place in the calendar.",
        links: [{ name: "Dasu", path: "/places/dasu-rui" }, { name: "The Gods of Dara", path: "/gods" }, { name: "Fithowéo", path: "/gods/fithoweo" }]
    },
    {
        num: 7,
        title: "Teacher and Student",
        date: "DASU: THE FIRST YEAR IN THE PRINCIPATE (THIRTEEN YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "The Ano logograms are a record of our climb up the mountain of knowledge.",
        speaker: "Luan Zya",
        summary: "Luan Zya begins Zomi's education. He teaches her the principles of engineering and the diverse philosophies of Dara, comparing the construction of machines to the construction of ideas using logograms. He recognizes her raw talent but also her impatience with tradition and its perceived inefficiencies. To help her with her paralyzed leg, Luan invents a revolutionary mechanical leg brace—an exoskeleton of wood and sinew that stores and releases energy, allowing her to walk with ease. Finally, having seen her fiery spirit, he bestows upon her the formal name Zomi, meaning 'Pearl of Fire,' a name befitting her tenacious and resilient nature.",
        links: [{ name: "Dasu", path: "/places/dasu-rui" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Luan Zya", path: "/characters/luan-zya" }]
    },
    {
        num: 8,
        title: "A Drinking Party",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Like the hounds that are leashed after all the rabbits have been caught, and like the bows that are packed away after all the wild geese have been bagged.",
        speaker: "Théca Kimo",
        summary: "At a boisterous celebration for the adopted son of General Mün Çakri, Kuni's old guard—the generals and nobles who fought alongside him in the wars—gather for an informal party. A game of 'Fool's Mirror' reveals the underlying anxieties and fractures within the court. While some, like Mün Çakri, are content, others like Théca Kimo and Puma Yemu feel their martial skills are no longer valued in an era of peace dominated by bureaucrats. The scene highlights a growing rift between the military old guard (the 'swords') and the new civil bureaucracy (the 'abacus'), as well as the subtle but ever-present political tensions between Empress Jia and Consort Risana's factions.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Mün Çakri", path: "/characters/mun-cakri" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Théca Kimo", path: "/characters/theca-kimo" }, { name: "Swords vs. Abacus", path: "/concepts/swords-vs-abacus" }, { name: "Puma Yemu", path: "/characters/puma-yemu" }]
    },
    {
        num: 9,
        title: "Palace Examination",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "A moral ruler should not resort to arms.",
        speaker: "Kita Thu",
        summary: "The top ten scholars of the Grand Examination present their policy proposals to the emperor and the assembled court. The first scholar, Kita Thu, a grand-nephew of the old King of Haan, uses an elaborate theatrical performance to argue for a radical return to the old Tiro system. His proposal would effectively strip the emperor of all military and administrative power, leaving him as a purely moral figurehead. The proposal is a veiled critique of Kuni's centralized rule, secretly supported by the old nobility who feel their traditional power has been diminished. Kuni deftly dismisses the idea with a folksy metaphor, asserting his authority without openly alienating the powerful factions behind the proposal.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "The Grand Examination", path: "/concepts/grand-examination" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Zato Ruthi", path: "/characters/zato-ruthi" }, { name: "Kita Thu", path: "/characters/kita-thu" }]
    },
    {
        num: 10,
        title: "A Balloon Ride",
        date: "SOMEWHERE OVER THE SEA NORTH OF CRESCENT ISLAND: THE FIRST YEAR IN THE REIGN OF FOUR PLACID SEAS (FIVE YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "A knife needs to be sharpened against stone, but a pearl needs to be polished with soft cloth.",
        speaker: "Luan Zya",
        summary: "In another flashback, Luan Zya continues Zomi's education aboard his hot-air balloon, Curious Turtle. He teaches her how to fly the balloon by understanding the complex patterns of the wind, introducing her to the philosophies of Patternism (founded by Na Moji) and Incentivism (founded by Gi Anji). Zomi's quick, practical mind often clashes with Luan's more abstract teachings, but she proves to be a brilliant student, grasping complex concepts through her own unique and often humorous lens. Their journey over the sea, where they witness a cruben, solidifies their deep teacher-student bond.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Cruben", path: "/concepts/cruben" }]
    },
    {
        num: 11,
        title: "The Cruben-Wolf",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You have created a monster that is neither fish nor fowl, and at home nowhere.",
        speaker: "Kita Thu",
        summary: "Back at the Palace Examination, the Imperial children and Soto Zyndu eavesdrop from a hidden changing room behind the throne. Soto provides a running commentary on the political theater unfolding in the hall, explaining to the children that the scholars' presentations are merely proxies for the ongoing power struggles between the court's major factions. Théra shows a keen and intuitive understanding of the political subtext, while Timu remains focused on the literal arguments and Phyro is mostly interested in the spectacle, highlighting their different aptitudes for rule.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
    },
    {
        num: 12,
        title: "Crescent Island",
        date: "CRESCENT ISLAND: THE FIRST YEAR IN THE REIGN OF FOUR PLACID SEAS (FIVE YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "The Ano logograms are the most sophisticated machines ever devised for working with ideas.",
        speaker: "Luan Zya",
        summary: "In a continuing flashback, Luan and Zomi land on Crescent Island and visit a remote, isolated hamlet of people who live a simple, traditional life and speak an archaic dialect of Classical Ano. They communicate with the elder by sculpting logograms in clay. Luan uses this opportunity to teach Zomi the deeper principles of logogram construction, explaining how simple components (semantic roots, phonetic adapters, inflection glyphs) are combined like parts of a machine to build complex ideas. Zomi's mind is opened to the engineering elegance of the written language she has so far disdained.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 13,
        title: "Merchants and Farmers",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The Flow of money is as vital to the health of the empire as the Flow of blood is to the body.",
        speaker: "Naroca Huza",
        summary: "At the Palace Examination, another top scholar, Naroca Huza from a wealthy merchant family in Gan, uses an impressive moving-picture machine to argue against the emperor's high taxes on trade. This sparks a fierce debate with Empress Jia, who argues that unchecked commerce leads to the exploitation of farmers and threatens the stability of the empire. The exchange exposes a major ideological rift in the court between the agrarian traditionalists and Moralists, represented by Jia, and the rising merchant class and Fluxists, implicitly supported by Marshal Gin Mazoti. The two most powerful women in the empire publicly clash for the first time.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Naroca Huza", path: "/characters/naroca-huza" }]
    },
    {
        num: 14,
        title: "The Hike Up the Mountain",
        date: "CRESCENT ISLAND: THE FIRST YEAR IN THE REIGN OF FOUR PLACID SEAS (FIVE YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "You lied! You were going to send me away and die here!",
        speaker: "Zomi Kidosu",
        summary: "In a flashback, Luan and Zomi hike up a treacherous mountain on Crescent Island to study a new species of flower growing on a fresh lava flow. During the climb, Luan's previously injured leg gives out completely. They are then caught in a massive forest fire started by a careless noble hunter. Luan, believing his leg is broken and they are doomed, tries to sacrifice himself by sending Zomi away in their balloon. Zomi sees through his deception, jumps from the rising balloon to stay with him, and then brilliantly devises a plan to fight the fire with a controlled backburn, saving the hamlet and her teacher in a display of her practical genius.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 15,
        title: "A Rebellion of Scholars",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Talent is a loaded word. Is it truly talent that the examination measures or mere habits of mind?",
        speaker: "Zomi Kidosu",
        summary: "Zomi Kidosu is finally called at the Palace Examination. She forgoes any spectacle and delivers a blistering, radical critique of the entire Imperial examination system. She argues that it is inherently biased towards the wealthy and those from learned regions like Haan, creating a self-perpetuating elite. She contends that its reliance on Classical Ano and logograms creates an insurmountable barrier for the poor and talented. In a revolutionary proposal, she advocates for abolishing the logograms in the exam entirely in favor of the simpler, phonetic zyndari script to create a truly meritocratic system. Her speech shocks and scandalizes the entire court, while a mob of failed scholars riots outside the palace.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "The Grand Examination", path: "/concepts/grand-examination" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Zato Ruthi", path: "/characters/zato-ruthi" }]
    },
    {
        num: 16,
        title: "Fighting Fire",
        date: "CRESCENT ISLAND: THE FIRST YEAR IN THE REIGN OF FOUR PLACID SEAS (FIVE YEARS BEFORE THE FIRST GRAND EXAMINATION).",
        quote: "The best way to honor the gods is to blame them for less.",
        speaker: "Luan Zya",
        summary: "In the aftermath of the fire on Crescent Island, Luan and Zomi discuss philosophy while waiting for rescue. Zomi challenges the deep-seated traditions of Dara, questioning why they cling to flawed systems (like the logograms) instead of inventing better ones. She argues for a radical, engineering-based approach to knowledge and society. Luan, a traditionalist, defends the value of history and caution, but is clearly impressed by her bold thinking. Their debate highlights the central philosophical conflict of the series: tradition versus innovation, stability versus progress.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 17,
        title: "Through the Veil",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You have to learn to guide that talent, not be guided by it.",
        speaker: "Gin Mazoti",
        summary: "The Imperial children and Soto Zyndu discuss the political fallout from the examinations. Théra astutely realizes that the debates are not just about policy, but are proxy battles between her mother, Empress Jia, and Marshal Gin Mazoti, who represent the civil and military factions of the court, respectively. She understands that her father's court is dangerously fracturing.\n\nLater, Zomi Kidosu secretly meets with Gin Mazoti. Gin reveals that she was the one who provided the blank exam pass that allowed Zomi to enter the examination, a secret she has kept for five years. This act of patronage binds Zomi to the marshal, pulling her deeper into the court's power struggles.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 18,
        title: "Heir to the Empire",
        date: "PAN: THE THIRD MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "A young dynasty must pass through a wall of storms before the first succession.",
        speaker: "Kuni Garu",
        summary: "In the privacy of his garden, Emperor Ragin reveals his deepest anxieties to his old friend, Luan Zya. He fears a devastating civil war between his sons after his death: the bookish Timu is supported by Empress Jia and the civil faction, while the martial Phyro is favored by Consort Risana and the military faction. He confesses his secret, radical solution: he intends to name Princess Théra as his heir. However, he knows this is impossible unless the empire's patriarchal traditions are slowly dismantled. He asks Luan to stay and help him, but Luan, ever the wanderer, chooses to pursue his own quest to explore the unknown lands beyond the sea.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 19,
        title: "Partings",
        date: "PAN: THE FOURTH MONTH IN THE SIXTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You’re too bold, Princess.",
        speaker: "Gin Mazoti",
        summary: "Luan Zya prepares to depart from Pan. He has a tense and emotionally distant farewell with Gin Mazoti, their unresolved feelings hanging between them. Zomi comes to see him off, and Gin, annoyed by what she perceives as a slight, is curt with her. The scene highlights the growing political tensions and Gin's pride.\n\nIn a secret meeting, Empress Jia reveals to King Kado that Zomi's pass to the Grand Examination was a forgery, not from Dasu's official allotment but from a pass Gin Mazoti had provided to Princess Théra. This revelation is a key piece of political leverage that Jia now holds over the marshal.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 20,
        title: "The Magic Mirror",
        date: "TUNOA: THE SIXTH MONTH IN THE EIGHTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Kuni Garu must die!",
        speaker: "The Hegemon Cultists",
        summary: "Two years later, the rebellion started by Noda Mi and Doru Solofi has evolved into a dangerous cult venerating the ghost of Mata Zyndu. They use 'magic mirrors'—special bronze mirrors that can project an image of the Hegemon—to convince their followers that Mata has returned and is leading them. This combination of religious fervor and new technology makes them a far more potent threat, and their influence spreads rapidly across Tunoa.",
        links: [{ name: "Tunoa Islands", path: "/places/tunoa-islands" }, { name: "Noda Mi", path: "/characters/noda-mi" }, { name: "Doru Solofi", path: "/characters/doru-solofi" }]
    },
    {
        num: 21,
        title: "Mother and Daughter",
        date: "PAN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "To achieve a better life for the people, why must I choose to stain my name in the annals of Dara?",
        speaker: "Jia Matiza",
        summary: "Empress Jia confides in Soto Zyndu, revealing the immense personal cost of her political machinations. She sees herself as a villain in history, sacrificing her reputation to build a stable, systematic empire that doesn't rely on the whims of charismatic leaders. The conversation reveals the depth of her vision and her willingness to be misunderstood for the greater good.\n\nMeanwhile, Princess Théra begins her own investigation into the nature of the magic mirrors, suspecting a scientific explanation rather than a supernatural one.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 22,
        title: "The Emperor's Shadows",
        date: "PAN: THE FOURTH MONTH IN THE NINTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The princes do need practice to learn how to rule, and the best way to learn is by doing.",
        speaker: "Jia Matiza",
        summary: "To address the succession crisis and the growing factionalism, Empress Jia proposes a 'friendly competition' between the princes. She suggests sending Timu to govern Dasu and Phyro to pacify the rebellion in Tunoa, creating two 'Emperor's Shadows' at opposite ends of the empire. The plan is a masterful political stroke, designed to give both princes experience while also moving them away from the central court and its intrigues, allowing Jia to consolidate her own power as regent-in-waiting.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
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
        links: [{ name: "Lake Tututika", path: "/places/lake-tututika" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Tututika", path: "/gods/tututika" }]
    },
    {
        num: 25,
        title: "Tests and Countertests",
        date: "PAN, ARULUGI, AND THE KARO PENINSULA: THE SEVENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "When the hunter comes to you with his axe sharpened, do you continue to play the loyal dog waiting for slaughter, or will you turn into a fierce wolf and fight for your survival?",
        speaker: "Cano Tho",
        summary: "Empress Jia's grand strategy unfolds. She secretly funds the Hegemon cults through Otho Krin to escalate the crisis in Tunoa. Simultaneously, she manipulates events to make it appear that Duke Théca Kimo of Arulugi is the mastermind behind the rebellion. Kuni, presented with fabricated evidence and pressured by the growing instability, is forced to move against his old friend. Théca Kimo, believing he has been framed and trapped, reluctantly declares rebellion, falling perfectly into Jia's trap.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Arulugi", path: "/places/arulugi" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Théca Kimo", path: "/characters/theca-kimo" }]
    },
    {
        num: 26,
        title: "Light and Reason",
        date: "PAN: THE SEVENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Not all wars are fought with swords and spears, and not all foes are found on the battlefield.",
        speaker: "Fithowéo",
        summary: "Princess Théra, guided by the goddess's hint, seeks out a mysterious master craftsman in the palace who is implied to be the god Fithowéo. He teaches her about the interference patterns of waves using a musical instrument called a moaphya. The lesson provides Théra with the final insight she needs. She realizes the 'magic' mirrors work by having microscopic, invisible ridges on their surface that manipulate light waves to project a hidden image. With this discovery, she now has the knowledge to counter the rebellion's most powerful weapon.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Fithowéo", path: "/gods/fithoweo" }]
    },
    {
        num: 27,
        title: "Rebels of Dara",
        date: "TUNOA: THE NINTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The grace of kings lies in graceful lies.",
        speaker: "Noda Mi",
        summary: "The rebellion in Tunoa reaches its peak. Noda Mi and Doru Solofi, using the magic mirrors, have amassed a large, fanatical army. Prince Phyro and Rin Coda are besieged in Zyndu Castle. Just as the rebels are about to overwhelm the defenses, Princess Théra arrives dramatically via airship. Using her own specially crafted mirror, she projects an image of the Hegemon embracing Emperor Ragin, shattering the rebels' faith and revealing their leaders' deception. The rebellion collapses instantly in the face of her scientific counter-magic.",
        links: [{ name: "Tunoa Islands", path: "/places/tunoa-islands" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Noda Mi", path: "/characters/noda-mi" }]
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
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }]
    },
    {
        num: 30,
        title: "Zomi's Secret",
        date: "PAN: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "To carry out my promise to the queen, I must first betray her.",
        speaker: "Zomi Kidosu (internal thought)",
        summary: "Empress Jia confronts Zomi Kidosu and reveals that she knows Zomi's pass to the Grand Examination was a forgery provided by Gin. Jia uses this knowledge to blackmail Zomi, forcing her to sign a false confession implicating Gin in a wider conspiracy. Zomi, trapped and fearing for her mother's safety and her own future, reluctantly agrees. Her betrayal provides Jia with the 'ironclad proof' she needs to justify her actions against the marshal.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }]
    },
    {
        num: 31,
        title: "A Visit to the Lake",
        date: "PAN: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The empress is right. We must think of the future.",
        speaker: "Gin Mazoti",
        summary: "Empress Jia takes a still-imprisoned Gin Mazoti on a boat ride on Lake Tututika, seemingly a pleasant outing but actually a high-stakes political negotiation. Jia lays out her grand vision: a stable empire run by systems and institutions, not charismatic warriors. She argues that strong, independent nobles like Gin are a threat to that long-term peace. She offers Gin a choice: face execution as a traitor, or accept a deal to lead the war against the coming Lyucu invasion, after which she must cede her power. Faced with the logic of Jia's argument and the threat of the invaders, Gin reluctantly agrees to Jia's terms.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }]
    },
    {
        num: 32,
        title: "Battle of Arulugi",
        date: "ARULUGI: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "War is a subspecies of smokecraft.",
        speaker: "Puma Yemu",
        summary: "The war in Arulugi is a stalemate. With Emperor Ragin's arrival, Consort Risana joins the campaign and unleashes her illusionary smokecraft. In a series of brilliant deceptions, she makes Kimo's navy see phantom ships and uses smoke to cover the movements of Puma Yemu's troops, who cross the lake on simple rafts. Müning, the City in the Lake, is taken by surprise. Kimo's army collapses, and he is executed. Risana and Yemu's victory showcases the power of unconventional warfare.",
        links: [{ name: "Arulugi", path: "/places/arulugi" }, { name: "Consort Risana", path: "/characters/consort-risana" }, { name: "Théca Kimo", path: "/characters/theca-kimo" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Puma Yemu", path: "/characters/puma-yemu" }]
    },
    {
        num: 33,
        title: "Matters of Honor",
        date: "PAN: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "That is why he has sent me in secret to aid your escape.",
        speaker: "Dafiro Miro",
        summary: "Emperor Ragin returns to Pan victorious, but the joy is short-lived as Empress Jia has consolidated her power and sidelined his authority. Dafiro Miro visits a still-imprisoned Gin Mazoti and reveals he is acting as the emperor's secret agent. He tells Gin that Kuni never believed in her guilt and offers her a chance to escape. Gin, a woman of unbending pride, refuses to flee like a criminal, insisting on clearing her name through official channels. Her sense of honor traps her, playing into Jia's hands.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Dafiro Miro", path: "/characters/dafiro-miro" }]
    },
    {
        num: 34,
        title: "Unexpected News",
        date: "ARULUGI: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The wind blows, and clouds race across the sky.",
        speaker: "Kuni Garu",
        summary: "In Arulugi, Kuni and Risana are celebrating their victory when an urgent messenger arrives from Dasu. The message is a letter from Prince Timu, reporting a shocking development: a massive fleet of unknown ships has appeared off the northern coast, and they are not pirates. The chapter ends with Kuni receiving this devastating news, realizing a new, far greater threat has arrived in Dara.",
        links: [{ name: "Arulugi", path: "/places/arulugi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Consort Risana", path: "/characters/consort-risana" }, { name: "Prince Timu", path: "/characters/prince-timu" }]
    },
    {
        num: 35,
        title: "The Coming of the City-Ships",
        date: "DASU: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "What manner of monsters must they be?",
        speaker: "Ra Olu",
        summary: "The mysterious fleet is revealed to be the Lyucu, invaders from a distant continent. Their massive 'city-ships' and terrifying flying beasts, the garinafins, overwhelm the unprepared defenses of Dasu. The pirates who previously roamed the northern seas flee in terror, arriving as refugees and describing the invaders' overwhelming power. Prince Timu and his advisor, Zato Ruthi, decide to meet the invaders peacefully, hoping to reason with them.",
        links: [{ name: "Dasu", path: "/places/dasu-rui" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Zato Ruthi", path: "/characters/zato-ruthi" }, { name: "Garinafin", path: "/concepts/garinafin" }, { name: "Lyucu", path: "/concepts/lyucu" }]
    },
    {
        num: 36,
        title: "Strangers",
        date: "DASU: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Thank you for your information.",
        speaker: "Pékyu Tenryo",
        summary: "Zato Ruthi leads a diplomatic mission to meet the Lyucu leader, Pékyu Tenryo. Ruthi, blinded by his own sense of cultural superiority, completely misreads the situation. He treats the Lyucu as simple barbarians who can be intimidated by displays of Dara's military formations. Tenryo cleverly plays the part of an awestruck savage, tricking the arrogant Ruthi into revealing crucial military intelligence about Dara's airship capabilities. The chapter ends with Ruthi believing he has secured a diplomatic victory, while in reality, he has been thoroughly outmaneuvered.",
        links: [{ name: "Dasu", path: "/places/dasu-rui" }, { name: "Zato Ruthi", path: "/characters/zato-ruthi" }, { name: "Pékyu Tenryo", path: "/characters/pekyu-tenryo" }]
    },
    {
        num: 37,
        title: "The Prince's Stand",
        date: "DASU: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Lives are more important.",
        speaker: "Prince Timu",
        summary: "The Lyucu attack. Their garinafins prove to be utterly devastating, breathing fire and easily destroying Dara's airships. The Imperial army collapses, and the island of Dasu falls. Prince Timu, seeing the hopelessness of the situation and the slaughter of civilians, makes a courageous choice. He surrenders himself and his remaining forces to Pékyu Tenryo to prevent further bloodshed, becoming a captive of the invaders.",
        links: [{ name: "Dasu", path: "/places/dasu-rui" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 38,
        title: "The Empress's Request",
        date: "PAN: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "I am willing to do anything and let history be my ultimate judge.",
        speaker: "Jia Matiza",
        summary: "News of the invasion and Timu's capture reaches Pan, throwing the court into crisis. Empress Jia, now regent, understands that only one person has the military genius to face this new threat: Gin Mazoti. Jia goes to Gin's prison cell and, in a moment of stunning political pragmatism, confesses her entire plot. She explains her cold-blooded rationale for removing the military faction to create a stable, system-based empire. She then begs Gin to put aside their enmity, retake command of the army, and save Dara from the invaders.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }]
    },
    {
        num: 39,
        title: "The Farseer's Departure",
        date: "PAN: THE ELEVENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The emperor is young and brash, and he lacks Théra’s political acumen.",
        speaker: "Jia Matiza",
        summary: "The court deals with the aftermath of the recent political upheavals. Rin Coda, consumed by guilt for his role in Gin's downfall and Jia's plots, hangs himself. His death serves as a sobering moment for Kuni, who realizes the personal cost of the games of power. The court solidifies under Jia's regency, and it is decided that Prince Phyro will become the new emperor, as Théra has chosen a different path.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Rin Coda", path: "/characters/rin-coda" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
    },
    {
        num: 40,
        title: "The Corruption of Ra Olu",
        date: "RUI: THE ELEVENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Good and evil are mere labels we place on deeds that benefit or harm us.",
        speaker: "Pékyu Tenryo",
        summary: "With Rui and Dasu now under Lyucu control, the former regent of Dasu, Ra Olu, becomes a collaborator. He advises Pékyu Tenryo on how to control the conquered people, suggesting a system of collective punishment and rewarding informants. The Lyucu begin to syncretize their own gods with the gods of Dara, claiming Kiji is their god Péa, a move that further demoralizes the occupied people and corrupts their faith.",
        links: [{ name: "Dasu & Rui", path: "/places/dasu-rui" }, { name: "Kiji", path: "/gods/kiji" }, { name: "Ra Olu", path: "/characters/ra-olu" }]
    },
    {
        num: 41,
        title: "The Interpretation of a Letter",
        date: "PAN: THE TWELFTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The judgment of history cannot be ascertained from up close.",
        speaker: "Zomi Kidosu",
        summary: "The court in Pan receives an ultimatum from Tenryo, written by a collaborationist Ra Olu. Zomi Kidosu, now the Farsight Secretary, brilliantly deconstructs the letter's florid, classical language. She discerns hidden intelligence: the Lyucu plan to invade in the spring, and more importantly, the garinafins' fire-breathing ability is an exhaustible resource tied to their diet. This crucial insight, derived from a seemingly boastful letter, gives Dara its first real strategic advantage.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 42,
        title: "Invasion of Rui",
        date: "RUI: THE SECOND MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "I’ve lived one step away from falling thousands of feet the entire time I’ve been in a uniform, and I’ve never prayed.",
        speaker: "Pon Naye",
        summary: "Marshal Gin Mazoti leads a daring counter-invasion of Rui. The assault begins with a stealth fleet of mechanical crubens that assemble a squadron of new, skeletal 'phantom' airships at sea. These airships, equipped with revolutionary flamethrowers invented by Zomi Kidosu, launch a devastating surprise night attack on the Lyucu fleet anchored at Kriphi. The battle is a stunning success, with the Dara forces destroying much of the Lyucu navy and killing a garinafin in a suicidal ramming attack led by squadron commander Pon Naye.",
        links: [{ name: "Rui", path: "/places/dasu-rui" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Cruben", path: "/concepts/cruben" }, { name: "Pon Naye", path: "/characters/pon-naye" }]
    },
    {
        num: 43,
        title: "A Taste of Victory",
        date: "RUI: THE SECOND MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Our warriors may be invincible on the battlefield, but they outnumber us by more than a hundredfold.",
        speaker: "Pékyu Tenryo",
        summary: "The Battle of Kriphi Harbor continues. The pékyu's daughter, Tanvanaki, a brilliant garinafin pilot, rallies the Lyucu air force. She quickly discerns the weaknesses of the new phantom airships and nearly turns the tide of the battle. However, Gin Mazoti's ground forces, having landed secretly, begin their assault on the city. Faced with a two-front battle, Tenryo is forced to order a retreat. Though Dara has won a major victory, the Lyucu forces remain formidable.",
        links: [{ name: "Rui", path: "/places/dasu-rui" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 44,
        title: "The Voyage of Luan Zya",
        date: "SOMEWHERE NORTH OF DASU: THREE YEARS EARLIER.",
        quote: "The universe is knowable.",
        speaker: "Luan Zya",
        summary: "This chapter recounts Luan Zya's voyage three years prior. He sails north in search of the lands beyond Dara, using a giant, triple-decked kite to explore the upper atmosphere. He discovers the Wall of Storms, a permanent, massive typhoon that surrounds the islands. In a daring move, he pilots his kite into the storm and is struck by lightning. He survives and finds himself in a strange new ocean current. After months adrift, where he is saved from starvation by crubens, he uses his scientific knowledge to start a signal fire and is eventually rescued by the people of Ukyu.",
        links: [{ name: "Luan Zya", path: "/characters/luan-zya" }, { name: "The Wall of Storms", path: "/concepts/wall-of-storms" }, { name: "Cruben", path: "/concepts/cruben" }, { name: "Gitré Üthu", path: "/concepts/gitre-uthu" }]
    },
    {
        num: 45,
        title: "An Interlude",
        date: "RUI: THE SECOND MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The mortals have to figure out how to deal with this, and so do we.",
        speaker: "The Gods of Dara",
        summary: "As the war rages, the gods of Dara gather to debate their role. Tazu mocks Kiji for the invasion of his home islands, while Fithowéo and the Twins question whether their pact of non-interference should apply to the foreign Lyucu. Lutho reveals that their power is tied to Dara and they cannot cross the Wall of Storms. They realize the Lyucu have left their own gods behind and are beginning to worship them, creating a complex theological and political dilemma. They ultimately decide to let the mortals determine their own fate.",
        links: [{ name: "Rui", path: "/places/dasu-rui" }, { name: "The Gods of Dara", path: "/gods" }]
    },
    {
        num: 46,
        title: "Prince and Princess of Ukyu",
        date: "IN THE COUNTRY OF STRANGERS: TWO YEARS EARLIER.",
        quote: "You’re my father’s daughter.",
        speaker: "Pékyu Tenryo",
        summary: "Luan Zya's time as a captive of the Lyucu is detailed. He is 'rescued' and nursed back to health, only to be imprisoned on the back of a garinafin. He meets the pékyu's children, Cudyu and Vadyu (Tanvanaki), who tell him a fabricated story about how Mapidéré's lost expedition arrived peacefully and taught them the ways of Dara before dying of a plague. It's a careful deception designed to gain Luan's trust and extract his knowledge.",
        links: [{ name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Garinafin", path: "/concepts/garinafin" }, { name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 47,
        title: "Mapidéré's Expedition",
        date: "IN THE COUNTRY OF STRANGERS: TWO YEARS EARLIER.",
        quote: "The universe is knowable.",
        speaker: "Luan Zya",
        summary: "Oga Kidosu, Zomi's long-lost father, reveals the true, brutal history of Mapidéré's expedition. After surviving the storm that destroyed his fishing boat, he was carried by a sea turtle to the Lyucu lands, where he was enslaved. He recounts how the expedition from Dara did not perish from plague but was systematically tricked, disarmed, and enslaved by the cunning Pékyu Tenryo. Luan realizes the prince and princess have been lying to him as part of a long-term plan to use Dara's own knowledge against it.",
        links: [{ name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" }, { name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Oga Kidosu", path: "/characters/oga-kidosu" }]
    },
    {
        num: 48,
        title: "The Lyucu and Agon",
        date: "UKYU AND GONDÉ, THE LAND OF THE LYUCU AND AGON: A LONG TIME AGO.",
        quote: "Control of the garinafins is now the foundation of both the cultures of the Lyucu and the Agon.",
        speaker: "Oga Kidosu",
        summary: "Oga Kidosu continues his tale, recounting the history of the Lyucu and Agon peoples. He explains their harsh, nomadic life on the scrublands and their symbiotic relationship with the garinafins. He details the rise of the ruthless Pékyu Tenryo, who was sent as a hostage to the Agon as a boy, learned their ways, and then returned to lead a ruthless and innovative military campaign, eventually uniting all the tribes under his iron-fisted rule. His story paints a picture of a brutal, pragmatic, and highly disciplined culture forged by endless war.",
        links: [{ name: "Garinafin", path: "/concepts/garinafin" }, { name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Agon", path: "/concepts/agon" }]
    },
    {
        num: 49,
        title: "The Dream of the City-Ships",
        date: "UKYU AND GONDÉ: TWENTY-ONE YEARS BEFORE LUAN’S ARRIVAL IN UKYU AND GONDÉ.",
        quote: "We are the instruments of the All-Father, meant to cleanse that land of its indolent masters and to take it for our own.",
        speaker: "Pékyu Tenryo",
        summary: "The arrival of Mapidéré's fleet is shown from the Lyucu perspective. Pékyu Tenryo, seeing the technologically superior but culturally arrogant Dara, feigns submission. For years, he plays the role of a servile barbarian king, allowing his people to learn everything they can from the invaders—shipbuilding, metalworking, language, and military tactics. When the time is right, he leads a sudden, violent uprising, slaughtering or enslaving the entire Dara expedition. He then uses their captured city-ships and knowledge to launch his own invasion of Dara, which he sees as a promised land.",
        links: [{ name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }]
    },
    {
        num: 50,
        title: "Homecoming",
        date: "UKYU AND GONDÉ: TWO YEARS EARLIER.",
        quote: "To carry out my promise to the queen, she must first betray her.",
        speaker: "Zomi Kidosu (internal thought)",
        summary: "Luan Zya, now aware of the Lyucu's true intentions, is tortured by Pékyu Tenryo to reveal the secret to passing the Wall of Storms. When physical torture fails, Tenryo tortures Oga Kidosu in front of him, forcing Luan to capitulate to save Zomi's father. Luan provides the calculations but secretly includes a flaw that will trap the Lyucu reinforcements. He and Oga are taken on the invasion fleet, where Luan makes a final, suicidal attempt to sabotage the mission by setting fire to the garinafin feed supply.",
        links: [{ name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "The Wall of Storms", path: "/concepts/wall-of-storms" }]
    },
    {
        num: 51,
        title: "A Trap",
        date: "RUI: THE SECOND MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Weigh the fish, the universe is knowable.",
        speaker: "Luan Zya (in a letter)",
        summary: "Zomi Kidosu and Than Carucono discover the bodies of Luan Zya and Oga Kidosu, who managed to escape the Lyucu but died from their injuries. Luan's final act is a poem written in his book, Gitré Üthu, a coded message for Zomi. As the Dara forces celebrate their victory on Rui, Zomi deciphers the code, realizing that Luan has given her the key to the Lyucu's greatest secret and a way to defeat them.",
        links: [{ name: "Rui", path: "/places/dasu-rui" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Than Carucono", path: "/characters/than-carucono" }]
    },
    {
        num: 52,
        title: "The Marshal's Decision",
        date: "PAN: THE THIRD MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "I was born to be a queen, and I am not afraid of my destiny.",
        speaker: "Aya Mazoti",
        summary: "Empress Jia publicly exonerates Gin Mazoti, restoring her to full command. The two women form a pragmatic alliance to save Dara. Gin, though personally wounded by the betrayal, accepts the burden of leadership for the good of the empire. The chapter solidifies the alliance between Dara's two most powerful women, uniting the civil and military factions in the face of a common enemy.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 53,
        title: "Discoveries",
        date: "DARA: THE THIRD MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "A real friend is a mirror that reflects the truth back to us.",
        speaker: "Princess Théra",
        summary: "Princess Théra and Zomi Kidosu work together in a secret laboratory in Haan, dissecting the carcasses of the garinafins recovered after the Battle of Kriphi Harbor. Their collaboration leads to a series of stunning scientific breakthroughs. They uncover the biological secrets of the garinafins' flight (flammable fermentation gas) and their fire breath (a biological spark mechanism in their jaws). Most importantly, Théra discovers that the garinafins are suffering from a reproductive ailment, a critical vulnerability.",
        links: [{ name: "Haan", path: "/places/haan" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 54,
        title: "The Aid of Tan Adü",
        date: "TAN ADÜ: THE FOURTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "All men are brothers.",
        speaker: "Huluwen",
        summary: "Dafiro Miro travels to Tan Adü to request the aid of the cruben-riders. Chief Kyzen explains the complex history of their gods and why they can no longer command the crubens. Disappointed, Dafiro prepares to leave, but discovers that the Adüans possess a simple but revolutionary technology: a 'fire tube' (a fire piston) that can create fire through air compression. He realizes this is the key to understanding the garinafins' fire breath and a potential new weapon.",
        links: [{ name: "Tan Adü", path: "/places/tan-adu" }, { name: "Dafiro Miro", path: "/characters/dafiro-miro" }, { name: "Cruben", path: "/concepts/cruben" }]
    },
    {
        num: 55,
        title: "The Silkmotic Force",
        date: "DARA: THE FIFTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "War is a subspecies of smokecraft.",
        speaker: "Puma Yemu",
        summary: "Prince Phyro travels to Faça to investigate the silkmotic force, a phenomenon of static electricity used by street magicians. He and Consort Risana uncover the secrets of the Ogé Jar (a Leyden jar), a device that can store and discharge powerful electrical shocks. They realize this technology can be weaponized, providing a new way to fight the garinafins without relying on fire.",
        links: [{ name: "Faça", path: "/places/faca" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Consort Risana", path: "/characters/consort-risana" }, { name: "Silkmotic Force", path: "/concepts/silkmotic-force" }]
    },
    {
        num: 56,
        title: "The Prince's Flight",
        date: "RUI: THE SIXTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "You and I are not so different after all, Father.",
        speaker: "Prince Timu",
        summary: "On Rui, Prince Timu falls in love with the Lyucu princess, Vadyu (Tanvanaki). She manipulates him, using his idealism and desire for peace to turn him against his own family. Believing he is forging a new path for both peoples, Timu agrees to marry her and become a puppet emperor for the Lyucu. He publicly denounces his mother and claims the throne for himself, a profound betrayal that shatters his father's heart.",
        links: [{ name: "Rui", path: "/places/dasu-rui" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 57,
        title: "A Plague",
        date: "RUI: THE NINTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "I am willing to be judged for my choices. The same as Kuni, as anyone who would wield power.",
        speaker: "Jia Matiza",
        summary: "Empress Jia orchestrates a brilliant and ruthless act of biological warfare. Having learned from Théra about the garinafins' delicate digestive systems, she has Puma Yemu's forces airdrop swarms of locusts onto Rui and Dasu. The locusts devour all the vegetation, forcing the Lyucu to feed their garinafins stored grain, which is toxic to them. The garinafin herds are decimated by a plague of bloat and sickness, crippling the Lyucu's primary military advantage.",
        links: [{ name: "Dasu & Rui", path: "/places/dasu-rui" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Garinafin", path: "/concepts/garinafin" }, { name: "Puma Yemu", path: "/characters/puma-yemu" }]
    },
    {
        num: 58,
        title: "Dream of the Dandelion",
        date: "ZATHIN GULF: THE TENTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "I have lived an interesting life.",
        speaker: "Kuni Garu",
        summary: "The final battle begins. Pékyu Tenryo, his forces weakened, launches his invasion of the Big Island. Kuni Garu, ill and dying from an infection, is used as a human shield on the deck of the Lyucu flagship. In a final, heroic act, Kuni breaks free, delivers a rousing speech to his army, and names Théra his successor before taking his own life to free his army to fight. His sacrifice solidifies his vision for the future of the dynasty.",
        links: [{ name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Zathin Gulf", path: "/places/zathin-gulf" }]
    },
    {
        num: 59,
        title: "Battle of Zathin Gulf, Part I",
        date: "ZATHIN GULF: THE TENTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "Hold it...",
        speaker: "Gin Mazoti",
        summary: "The Battle of Zathin Gulf begins. Marshal Gin Mazoti commands the Dara forces from a new fleet of semi-rigid, saucer-shaped airships. The Lyucu, led by Tanvanaki, are confident in their remaining garinafins. The Dara forces unveil their new weapon: massive, silkmotic-powered crossbows that fire explosive bolts, destroying several garinafins. The Lyucu counter by using their beasts' talons to tear at the fragile airships, and the battle hangs in the balance.",
        links: [{ name: "Zathin Gulf", path: "/places/zathin-gulf" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Garinafin", path: "/concepts/garinafin" }, { name: "Airships", path: "/concepts/airships" }]
    },
    {
        num: 60,
        title: "Battle of Zathin Gulf, Part II",
        date: "ZATHIN GULF: THE TENTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "To win, she had to give up her name and endure the judgment of history.",
        speaker: "Gin Mazoti (internal thought)",
        summary: "The battle climaxes. The Dara forces unleash their ultimate weapon: silkmotic lances that electrocute the garinafins. However, the treacherous noble Noda Mi, who has infiltrated the Dara fleet, uses fire arrows to set the flammable gasbags of the Imperial airships ablaze. In a final, desperate gambit, Gin Mazoti crashes her flagship, Silkmotic Arrow, into the Lyucu command ship. She and Dafiro Miro engage Pékyu Tenryo in a duel. Though Dafiro is killed, Zomi Kidosu arrives at the last moment and, with Gin's sacrifice, kills the Lyucu pékyu, ending the invasion.",
        links: [{ name: "Zathin Gulf", path: "/places/zathin-gulf" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Dafiro Miro", path: "/characters/dafiro-miro" }, { name: "Silkmotic Force", path: "/concepts/silkmotic-force" }]
    },
    {
        num: 61,
        title: "Messenger from Afar",
        date: "SOMEWHERE OVER THE SEA BETWEEN RUI AND THE BIG ISLAND: THE TWELFTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "I’ll think of it as . . . a gift from my mother-in-law.",
        speaker: "Pékyu Vadyu",
        summary: "With Tenryo dead and the Lyucu army defeated, a truce is negotiated. Empress Jia meets with the new Lyucu leader, Princess Vadyu (Tanvanaki). They agree to a tense peace, with Dara paying tribute to the Lyucu in exchange for the safety of Rui and Dasu. The negotiation highlights the precarious new balance of power and the personal animosity between the two formidable women.",
        links: [{ name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Dasu & Rui", path: "/places/dasu-rui" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 62,
        title: "Parting of the Lotus Seed",
        date: "KRIPHI: THE FOURTH MONTH IN THE FIRST YEAR OF THE REIGN THAT DOES NOT YET HAVE A NAME.",
        quote: "This is the way I want to tell my story. I love you, Zomi, but this is what I want. Respect that.",
        speaker: "Princess Théra",
        summary: "The Dandelion court struggles with the aftermath of the war and the succession. Théra, now Empress Üna, reaffirms her decision to abdicate in favor of Phyro and marry the Agon prince, Takval, to forge an alliance and lead an expedition to Ukyu. In a heartfelt and bittersweet farewell, she and Zomi Kidosu confess their love for each other, accepting that their duties will lead them down separate paths. The book ends with Théra's fleet sailing toward the Wall of Storms, ready to face an unknown future, as the Lyucu reinforcements are destroyed by the storm, thanks to Luan Zya's flawed calculation.",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Empress Üna", path: "/characters/empress-una" }]
    }
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

    const prevPageData = { title: "The Grace of Kings", path: "/books/the-grace-of-kings" };
    const nextPageData = { title: "The Veiled Throne", path: "/books/the-veiled-throne" };
    const returnLinkData = { title: "Return to Series Overview", path: "/books" };


    return (
        <div>
            <TopPageNavigation
                prevPage={prevPageData}
                nextPage={nextPageData}
                returnLink={returnLinkData}
            />

            {/* --- BOOK HEADER --- */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image
                        src="/books/the-wall-of-storms.jpg"
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
                        <h3 className="font-bold text-xl mb-4 text-teal-600 dark:text-teal-400">Book Details</h3>
                        <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> October 4, 2016 by Saga Press</li>
                            <li><strong>Pages:</strong> 880 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781481424332</li>
                            <li><strong>Awards:</strong> Locus Award Nominee for Best Fantasy Novel (2017)</li>
                        </ul>
                        <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 space-y-2">
                            <a href="https://www.goodreads.com/book/show/18952381-the-wall-of-storms" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center text-base">
                                View on Goodreads <ExternalLinkIcon />
                            </a>
                            <br />
                            <a href="https://amzn.to/3IXJlMU" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center text-base">
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
