import Image from 'next/image';
import Link from 'next/link';
import BookNavigation from '../../components/BookNavigation';
import TopBookNavigation from '../../components/TopBookNavigation'; // Import the new component

// --- FULLY REVISED & COMPLETE DATA FOR THE GRACE OF KINGS ---
const chapters = [
    {
        num: 1,
        title: "An Assassin",
        date: "ZUDI: THE SEVENTH MONTH IN THE FOURTEENTH YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "The emperor is just a man, after all.",
        speaker: "Kuni Garu",
        summary: "The story opens with a grand Imperial Procession in Zudi, showcasing the might of the conquering Xana Empire. Two school-skipping boys, the clever Kuni Garu and his timid friend Rin Coda, watch the spectacle.\n\nThe procession is violently interrupted when an assassin from Haan, riding a sophisticated man-lifting kite, attacks Emperor Mapidéré's mobile Throne Pagoda with fire bombs. The Emperor is saved by his guard, but the attack exposes his mortality. Kuni witnesses the fear in the Emperor's eyes, a pivotal moment that shatters his perception of imperial power.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" } ]
    },
    {
        num: 2,
        title: "Mata Zyndu",
        date: "FARUN, IN THE TUNOA ISLANDS: THE NINTH MONTH IN THE FOURTEENTH YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "Do not forget.",
        speaker: "Phin Zyndu",
        summary: "In the Tunoa Islands, the physically imposing fourteen-year-old Mata Zyndu, last heir of a noble line, observes the same procession with cold hatred. The chapter recounts the tragic history of his grandfather, the legendary Marshal Dazu Zyndu, a brilliant strategist known as the 'Bearded Tortoise.' Betrayed by his own king, Dazu was defeated, and the Zyndu clan was systematically slaughtered by Xana. Mata, who possesses rare double-pupiled eyes marking him for greatness, was saved by his uncle Phin and raised with a singular focus: to avenge his family and restore their honor.",
        links: [ { name: "Tunoa Islands", path: "/places/tunoa-islands" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Phin Zyndu", path: "/characters/phin-zyndu" } ]
    },
    {
        num: 3,
        title: "Kuni Garu",
        date: "ZUDI: THE FIFTH MONTH IN THE TWENTY-FIRST YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "A bright and tenacious flower will not bloom in obscurity.",
        speaker: "Old Xana Woman",
        summary: "Seven years have passed. Kuni Garu is now a charismatic and well-known rogue in Zudi. He uses his sharp wit to outsmart a corrupt Imperial official, saving a poor woman's son from being conscripted into forced labor by impersonating a wealthy merchant's son. This act of clever rebellion is witnessed from a palanquin by Jia Matiza, who is deeply intrigued by his blend of cunning and compassion.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" } ]
    },
    {
        num: 4,
        title: "Jia Matiza",
        date: "ZUDI: THE FIFTH MONTH IN THE TWENTY-FIRST YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "All life is an experiment. Who can plan so far ahead?",
        speaker: "Kuni Garu",
        summary: "Jia Matiza, a brilliant herbalist and daughter of a wealthy rancher, rejects her conventional suitors. She seeks out Kuni Garu, and they quickly form a powerful bond over their shared philosophies on life and nobility. Jia introduces Kuni to the symbolism of the dandelion, a hardy and resourceful plant she admires.\n\nInspired to be a man worthy of her, Kuni gives up his roguish life to take a steady job as a corvée guard, which allows him to formally propose marriage.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Dandelion", path: "/concepts/dandelion" } ]
    },
    {
        num: 5,
        title: "The Death of the Emperor",
        date: "ÉCOFI ISLAND: THE TEΝΤΗ ΜΟΝΤΗ IN THE TWENTY-THIRD YEAR OF THE REIGN OF ONE BRIGHT HEAVEN.",
        quote: "Great men are always misunderstood by their own age. And great seldom means good.",
        speaker: "Tututika",
        summary: "The aging Emperor Mapidéré is haunted by a dream in which the gods of Dara argue over his legacy and prophesy the coming conflict. On his deathbed, a palace coup is orchestrated by Chatelain Goran Pira and Prime Minister Lügo Crupo. They forge a decree, arrange the 'suicide' of the true heir, Crown Prince Pulo, and install the young, naive Prince Loshi on the throne as Emperor Erishi.\n\nTo secure his power, Crupo famously presents a deer to the court, calls it a horse, and executes those who dare to disagree, cementing his control over the new regime.",
        links: [ { name: "Écofi Island", path: "/places/ecofi-island" }, { name: "Emperor Mapidéré", path: "/characters/emperor-mapidere" }, { name: "Goran Pira", path: "/characters/goran-pira" }, { name: "Lügo Crupo", path: "/characters/lugo-crupo" }, { name: "The Gods of Dara", path: "/concepts/gods-of-dara" } ]
    },
    {
        num: 6,
        title: "Corvée",
        date: "KIESA: THE EIGHTH ΜΟΝΤΗ IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "If we’re already dead by the laws of Xana, and yet the gods tell us different, then I’d rather listen to the gods.",
        speaker: "Huno Krima",
        summary: "Amidst widespread famine and suffering under the new Emperor, two laborers, Huno Krima and Zopa Shigin, are tasked with leading a corvée crew. Delayed by relentless rain, they face certain execution. In a desperate act, they plant a fake prophecy inside a fish, declaring 'Huno Krima Will Be King.' This galvanizes the hopeless laborers, who rise up, kill their guards, and seize the town of Napi, sparking the first major rebellion against the Xana Empire.",
        links: [ { name: "Kiesa", path: "/places/kiesa" }, { name: "Huno Krima", path: "/characters/huno-krima" }, { name: "Zopa Shigin", path: "/characters/zopa-shigin" } ]
    },
    {
        num: 7,
        title: "Mata's Valor",
        date: "FARUN, IN THE TUNOA ISLANDS: THE NINTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "And now, you will leave my house.",
        speaker: "Mata Zyndu",
        summary: "Mata Zyndu, now a powerful young man, is summoned by the local Xana commander who hopes to use the Zyndu name to gain power. Instead, Mata assassinates the commander and, with his uncle Phin, reclaims his ancestral castle. Mata's incredible martial prowess is displayed as he single-handedly slaughters most of the garrison. He takes up his grandfather's legendary weapons, Na-aroénna and Goremaw, and raises the banner of Cocru, attracting hundreds of volunteers to his cause.",
        links: [ { name: "Tunoa Islands", path: "/places/tunoa-islands" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Na-aroénna", path: "/concepts/na-aroenna" } ]
    },
    {
        num: 8,
        title: "Kuni's Choice",
        date: "OUTSIDE ZUDI: THE NINTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "If you try to obey the law, and the judges call you a criminal anyway, then you might as well live up to the name.",
        speaker: "Kuni Garu",
        summary: "While escorting prisoners, Kuni Garu is faced with a crisis when most of them desert to join the rebellion. Facing execution for this failure, Kuni chooses the path of an outlaw. He and his remaining followers take to the mountains as 'honorable bandits.' A prophetic dream and Kuni's accidental slaying of a giant white python cement his status as a destined leader among his men.\n\nAfter a disastrous raid results in deaths, Kuni is humbled but resolves to become a more responsible leader, eventually deciding to save his family by taking the city of Zudi.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" } ]
    },
    {
        num: 9,
        title: "Emperor Erishi",
        date: "PAN: THE ELEVENTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Why do they insist on eating rice? Meat is so much better!",
        speaker: "Emperor Erishi",
        summary: "The young Emperor Erishi is shown to be a completely ineffective and childish ruler. He spends his days in the palace playing with elaborate toys and indulging in decadent fantasies, such as a maze made of meat, completely oblivious to the suffering and rebellion consuming his empire. He delegates all matters of state to his regent, Lügo Crupo, showing no interest or capacity for governance.",
        links: [ { name: "Pan", path: "/places/pan" }, { name: "Emperor Erishi", path: "/characters/emperor-erishi" } ]
    },
    {
        num: 10,
        title: "The Regent",
        date: "PAN: THE ELEVENTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A man’s circumstances are not determined by his talents, but by where he chooses to put his talents to work.",
        speaker: "Lügo Crupo",
        summary: "Regent Lügo Crupo, burdened by the tedious work of running the empire, reflects on his past. A brilliant but low-born scholar, he lived in the shadow of his rival, the naturally gifted Tan Féüji. Consumed by jealousy, Crupo defected to Xana and eventually poisoned Féüji to secure his own position. Now, annoyed by the rebellion, he dismissively appoints the chief tax collector, Kindo Marana, as commander-in-chief, an absurd choice intended to rid himself of a nuisance.",
        links: [ { name: "Pan", path: "/places/pan" }, { name: "Lügo Crupo", path: "/characters/lugo-crupo" }, { name: "Kindo Marana", path: "/characters/kindo-marana" } ]
    },
    {
        num: 11,
        title: "The Chatelain",
        date: "PAN: THE ELEVENTH MONTH IN THE THIRD YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "He would avenge her and bring down the House of Xana. He would truly, spectacularly, really commit treason.",
        speaker: "Goran Pira (internal thought)",
        summary: "The backstory of Goran Pira, the emperor's childhood friend and chatelain, is revealed. Pira fell in love with a captive serving woman, Lady Maing, who became his world. When Emperor Mapidéré claimed her for himself, Pira's heart was broken. After Maing bore Pira's son, the emperor had both mother and child killed. This unspeakable cruelty transformed Pira, who secretly vowed to orchestrate the complete downfall of the Xana Empire from within.",
        links: [ { name: "Pan", path: "/places/pan" }, { name: "Goran Pira", path: "/characters/goran-pira" } ]
    },
    {
        num: 12,
        title: "The Rebellion Grows",
        date: "THE BIG ISLAND: THE THIRD MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "We haven’t met Xana’s real army yet. Don’t celebrate too early.",
        speaker: "Dafiro Miro",
        summary: "The rebellion spreads like wildfire. Huno Krima and Zopa Shigin find the heir to the Cocru throne, a shepherd named Thufi, and install him as king. The other Tiro states—Faça, Gan, Amu, and Rima—also re-establish themselves, throwing off Xana's rule. King Thufi calls for a Grand Council of War to unite the states and elect a princeps, but the old rivalries and squabbles immediately begin to surface.",
        links: [ { name: "Big Island", path: "/places/big-island" }, { name: "King Thufi", path: "/characters/king-thufi" } ]
    },
    {
        num: 13,
        title: "Kindo Marana",
        date: "THE BIG ISLAND: THE THIRD MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Perhaps just as the tax code was a microcosm of all the policies that animated an empire, what he knew of administering the taxes was a microcosm of statecraft.",
        speaker: "Kindo Marana (internal thought)",
        summary: "Despite being a bureaucrat with no military experience, Kindo Marana proves to be a surprisingly competent commander. He meticulously takes inventory of the empire's weakened forces and develops a pragmatic plan to turn liabilities into assets. He decides to conscript laborers and prisoners to bolster his army and plans to raise a new, loyal force from the Xana home islands, aiming to quell the rebellion with methodical efficiency.",
        links: [ { name: "Big Island", path: "/places/big-island" }, { name: "Kindo Marana", path: "/characters/kindo-marana" } ]
    },
    {
        num: 14,
        title: "Kuni, the Administrator",
        date: "ZUDI: THE THIRD MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "No fish can live in perfectly clear water.",
        speaker: "Rin Coda",
        summary: "Having successfully taken Zudi, Kuni Garu proves to be a surprisingly effective and diligent ruler. He works tirelessly, meeting with elders and improving the city's infrastructure. To solve a tax collection problem, his advisor Cogo Yelu devises a brilliant lottery scheme that turns every citizen into a de facto tax collector. Kuni builds a semblance of a real army, transforming his band of outlaws into a disciplined force.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Cogo Yelu", path: "/characters/cogo-yel" } ]
    },
    {
        num: 15,
        title: "The King of Rima",
        date: "A HAMLET, RUI AND NA THION, THE BIG ISLAND: THE THIRD MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I have ceased all resistance and I am at your mercy.",
        speaker: "King Jizu",
        summary: "The legendary Xana general Tanno Namen is brought out of retirement by Kindo Marana. Namen leads a swift and brutal campaign against the newly re-established state of Rima. The young King Jizu, a former fisherman, is betrayed by his own commanders. Trapped and facing certain defeat, Jizu chooses a noble death, setting himself on fire in a final act of defiance to inspire his people and shame his enemies.",
        links: [ { name: "Rui", path: "/places/rui" }, { name: "Tanno Namen", path: "/characters/tanno-namen" }, { name: "King Jizu", path: "/characters/king-jizu" } ]
    },
    {
        num: 16,
        title: "“Your Majesty”",
        date: "DIMU: THE FOURTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A man can never fulfill a role he is not born for.",
        speaker: "Mata Zyndu",
        summary: "Huno Krima, growing paranoid and arrogant, declares himself King of West Cocru. He executes his co-conspirator Zopa Shigin and rules through fear, employing secret police known as the 'Black Caps.'\n\nHis reign is short-lived as General Tanno Namen launches a surprise attack on his capital, Dimu. Krima's undisciplined army collapses, and he is killed in the chaos. The first major rebel movement ends in failure.",
        links: [ { name: "Dimu", path: "/places/dimu" }, { name: "Huno Krima", path: "/characters/huno-krima" }, { name: "Tanno Namen", path: "/characters/tanno-namen" } ]
    },
    {
        num: 17,
        title: "The Gates of Zudi",
        date: "ÇARUZA AND ZUDI: THE FOURTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Show is substance.",
        speaker: "Kuni Garu",
        summary: "With the rebellion faltering, King Thufi and the Grand Council in Çaruza are paralyzed by indecision. Mata Zyndu is formally made Marshal of Cocru. Kuni Garu arrives and convinces Mata to relieve the besieged city of Zudi. Kuni's former lieutenant, Dosa, has surrendered Zudi to the Empire.\n\nKuni and Mata march on the city, and Kuni, showing mercy, spares Dosa's life after retaking it, a decision that solidifies his reputation as a compassionate leader.",
        links: [ { name: "Çaruza", path: "/places/caruza" }, { name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" } ]
    },
    {
        num: 18,
        title: "Luan Zya",
        date: "GINPEN: BEFORE THE XANA CONQUEST.",
        quote: "I refuse to believe in the futility of change, because I have seen how the lowly dandelion, with time and patience, can crack the strongest paving stone.",
        speaker: "Luan Zya",
        summary: "The backstory of Luan Zya is revealed. A brilliant scion of a noble Haanese family of inventors and scholars, his family was massacred during the Xana conquest. He became a lone assassin, culminating in the failed kite attack on Emperor Mapidéré. After years of wandering and living among the people of Tan Adü, he was gifted a magical, self-writing book by a mysterious teacher, implied to be the god Lutho. This book gives him unparalleled strategic insight.",
        links: [ { name: "Ginpen", path: "/places/ginpen" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Tan Adü", path: "/places/tan-adu" } ]
    },
    {
        num: 19,
        title: "Brothers",
        date: "ÇARUZA: THE FOURTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "You may not be born noble, but you have a noble mind.",
        speaker: "Luan Zya",
        summary: "Luan Zya meets Kuni Garu and recognizes him from the day of the kite attack. The two form an immediate bond of mutual respect. Kuni and Mata Zyndu also solidify their friendship, with Mata acknowledging Kuni's different but equally valuable form of nobility. They pledge to fight together, becoming sworn brothers. This chapter marks the formation of the central heroic partnership of the rebellion.",
        links: [ { name: "Çaruza", path: "/places/caruza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Luan Zya", path: "/characters/luan-zya" } ]
    },
    {
        num: 20,
        title: "Forces of the Air",
        date: "RUI: THE FIFTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "The people of the Six States want the blood of Xana to flow, to satiate their hunger for vengeance.",
        speaker: "Kindo Marana",
        summary: "Kindo Marana travels to the Xana home island of Rui to rebuild the Imperial air force. He discovers the Mount Kiji Air Base in a state of corrupt disrepair. He ruthlessly executes the incompetent administrator and uses his bureaucratic skills to restore the fleet to its former glory, preparing a powerful new weapon to unleash against the rebellion.",
        links: [ { name: "Rui", path: "/places/rui" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }, { name: "Mount Kiji", path: "/places/mount-kiji" } ]
    },
    {
        num: 21,
        title: "Before the Storm",
        date: "ZUDI: THE SIXTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Does the dandelion not bloom in the same hue, my brother?",
        speaker: "Mata Zyndu",
        summary: "In a moment of peace at the Splendid Urn tavern, Kuni, Mata, and their retinue play a drinking game. The game reveals their core personalities: Kuni compares himself to the resourceful dandelion, while Mata compares himself to the noble, defiant chrysanthemum. In a key moment of friendship, Mata sings a song about the chrysanthemum and then points out that its golden hue is shared by the dandelion, acknowledging their shared purpose despite their different origins.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" } ]
    },
    {
        num: 22,
        title: "Battle of Zudi",
        date: "ZUDI: THE SIXTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "What’s ‘dirty’ about winning?",
        speaker: "Kuni Garu",
        summary: "General Tanno Namen lays siege to Zudi. Kuni and Mata defend the city together. Mata demonstrates his incredible battlefield prowess, inspiring the soldiers, while Kuni uses clever tricks and psychological warfare, including using civilians in paper armor and taunting the enemy with songs. Mata challenges Namen to an aerial duel on battle kites and emerges victorious, breaking the siege and forcing the Imperial army to retreat. The victory is a perfect synthesis of their two styles.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Tanno Namen", path: "/characters/tanno-namen" } ]
    },
    {
        num: 23,
        title: "The Fall of Dimu",
        date: "DIMU: THE SEVENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "You do not ever want to have General Zyndu against your side.",
        speaker: "Ratho Miro",
        summary: "The victorious Cocru army besieges Dimu, the last Imperial stronghold south of the Liru River. Mata, frustrated by the slow progress, orders a brutal final assault. The city falls, and in a shocking display of cruelty, Mata orders the massacre of the surrendered soldiers and prominent citizens. This act, known as the Massacre at Dimu, stains his reputation and reveals a darker side to his pursuit of honor.",
        links: [ { name: "Dimu", path: "/places/dimu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" } ]
    },
    {
        num: 24,
        title: "Battle of Arulugi",
        date: "ARULUGI: THE SEVENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A seducer is one who wins through deception rather than force.",
        speaker: "Tututika",
        summary: "Kindo Marana leads his newly rebuilt navy and air force against the island of Arulugi, the heart of Amu. Princess Kikomi, chafing under her role as a political pawn, is visited by the goddess Tututika, who advises her to embrace her own form of power. Marana outwits the Amu navy with a clever tactic, and Arulugi falls.\n\nKikomi, taken captive, attempts to manipulate Marana but fails. However, she later inspires a prisoner revolt, leading to her and her uncle's 'miraculous' escape.",
        links: [ { name: "Arulugi", path: "/places/arulugi" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }, { name: "Princess Kikomi", path: "/characters/princess-kikomi" }, { name: "Tututika", path: "/concepts/gods-of-dara" } ]
    },
    {
        num: 25,
        title: "“It Is a Horse”",
        date: "PAN: THE EIGHTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I hope you have finally learned what you needed to know.",
        speaker: "Goran Pira",
        summary: "Goran Pira, seeing Regent Crupo's power growing, decides to eliminate him. He manipulates Emperor Erishi, reminding him of the 'deer and horse' incident and stoking his resentment. Pira frames Crupo for treason, planting a treasonous poem. Crupo is arrested and tortured until he confesses. Pira then becomes Prime Minister, gaining full control of the empire and continuing his secret plan for its destruction.",
        links: [ { name: "Pan", path: "/places/pan" }, { name: "Goran Pira", path: "/characters/goran-pira" }, { name: "Lügo Crupo", path: "/characters/lugo-crupo" }, { name: "Emperor Erishi", path: "/characters/emperor-erishi" } ]
    },
    {
        num: 26,
        title: "The Princeps’s Promise",
        date: "ÇARUZA: THE NINTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I will not be a king who sits on a throne of skulls.",
        speaker: "King Thufi",
        summary: "With the rebellion on the verge of collapse after Imperial victories, King Thufi takes decisive action. He declares himself princeps, the supreme commander of the allied Tiro states, backed by Mata Zyndu's military might. To incentivize Kuni Garu to capture the Imperial capital of Pan, Thufi promises him kingship over the rich territory of Géfica, a bold move that sets the stage for the final phase of the war.",
        links: [ { name: "Çaruza", path: "/places/caruza" }, { name: "King Thufi", path: "/characters/king-thufi" } ]
    },
    {
        num: 27,
        title: "Kikomi",
        date: "ÇARUZA: THE NINTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I made a deal.",
        speaker: "Princess Kikomi (internal thought)",
        summary: "Princess Kikomi, now a refugee in Çaruza, becomes the object of affection for both Mata Zyndu and his uncle, Phin. It is revealed that her 'escape' was a deal made with Kindo Marana: she would sow discord between the two most powerful men in the Cocru army in exchange for Amu's safety. Torn by her genuine feelings for Mata and her duty, she ultimately seduces and murders Phin Zyndu, framing it as a crime of passion before being killed by his guards. The act shatters Mata's world and creates a deep rift between him and Kuni.",
        links: [ { name: "Çaruza", path: "/places/caruza" }, { name: "Princess Kikomi", path: "/characters/princess-kikomi" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Phin Zyndu", path: "/characters/phin-zyndu" } ]
    },
    {
        num: 28,
        title: "Luan Zya’s Plan",
        date: "ZUDI: THE TENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "We have to kill the empire.",
        speaker: "Luan Zya",
        summary: "Luan Zya, using the knowledge from his magical book, devises a daring and unconventional plan to end the war: a secret naval expedition to the 'savage' island of Tan Adü to recruit allies and their cruben-riding warriors for a surprise attack directly on Pan. He presents this high-risk, high-reward strategy to Kuni Garu, who, grieving his mother's death and seeking a bold path forward, agrees to the gamble.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Tan Adü", path: "/places/tan-adu" } ]
    },
    {
        num: 29,
        title: "Battle of Wolf’s Paw",
        date: "WOLF’S PAW: THE TENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "I have never surrendered.",
        speaker: "Tanno Namen",
        summary: "While Kuni is away, Mata Zyndu leads the allied rebel forces against the Imperial armies of Kindo Marana and Tanno Namen on the island of Wolf's Paw. The battle is a masterpiece of strategy and brutality. Mata, driven by grief and rage, fights with godlike fury. The rebel forces, particularly the armies of Faça and Gan, betray their allies, but Mata's sheer prowess turns the tide. Tanno Namen, defeated and cornered, takes his own life rather than surrender. Kindo Marana is captured, solidifying Mata's reputation as the rebellion's greatest hero.",
        links: [ { name: "Wolf's Paw", path: "/places/wolfs-paw" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }, { name: "Tanno Namen", path: "/characters/tanno-namen" } ]
    },
    {
        num: 30,
        title: "Master of Pan",
        date: "PAN: THE ELEVENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "Old friends are like old clothes: they fit the best.",
        speaker: "Kuni Garu",
        summary: "Kuni Garu's audacious plan succeeds. He and his small force, aided by the cruben-riders of Tan Adü and Luan Zya's airships, launch a surprise attack on the poorly defended capital of Pan. They capture the city and Emperor Erishi with ease. Kuni is briefly tempted by the decadent lifestyle of an emperor but is brought back to his senses by his loyal friends. He establishes a just and gentle rule over the city, winning the hearts of its people while awaiting the arrival of Mata Zyndu.",
        links: [ { name: "Pan", path: "/places/pan" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Luan Zya", path: "/characters/luan-zya" } ]
    },
    {
        num: 31,
        title: "The Slaughter",
        date: "WOLF’S PAW: THE ELEVENTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "He was Mata Zyndu, the Butcher of Wolf’s Paw.",
        speaker: "Mata Zyndu (internal thought)",
        summary: "Mata Zyndu, needing to transport his massive army off Wolf's Paw, faces a naval blockade. An old woman, implied to be the goddess Kana, tempts him with a ruthless solution. He tricks the 20,000 surrendered Imperial prisoners into boarding poorly constructed ships, which he then sends into the deadly whirlpool of the Kishi Channel as a sacrifice to the god Tazu, who clears a path for Mata's own fleet in return. This horrific act earns him the moniker 'Butcher of Wolf's Paw.'",
        links: [ { name: "Wolf's Paw", path: "/places/wolfs-paw" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kishi Channel", path: "/places/kishi-channel" } ]
    },
    {
        num: 32,
        title: "The Housekeeper",
        date: "OUTSIDE ÇARUZA: THE TWELFTH MONTH IN THE FOURTH YEAR OF THE REIGN OF RIGHTEOUS FORCE.",
        quote: "A marriage is a carriage with two sets of reins, and you must not let him do all the driving.",
        speaker: "Soto",
        summary: "While Kuni is away, Jia feels isolated and overwhelmed in Çaruza. She hires a new housekeeper, a mysterious and wise woman named Soto. It is revealed that Soto is actually Soto Zyndu, Mata's aunt, who was thought to have died years ago. Soto becomes a confidante and political mentor to Jia, advising her to embrace her role as a political wife and to become an active partner in Kuni's ambitions.",
        links: [ { name: "Çaruza", path: "/places/caruza" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" } ]
    },
    {
        num: 33,
        title: "The Real Master of Pan",
        date: "GÉJIRA: THE FIRST MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "I’ll die before I let him become King of Géfica!",
        speaker: "Mata Zyndu",
        summary: "Mata Zyndu, having conquered the remaining Imperial forces, learns that Kuni Garu has already taken Pan. Believing Kuni has betrayed him to steal his glory and the promised kingship of Géfica, Mata is consumed by rage. He burns Pan to the ground, killing Emperor Erishi in the process, and declares himself Hegemon, the new de facto ruler of the Islands. The friendship between Kuni and Mata is irrevocably broken, setting the stage for a new civil war.",
        links: [ { name: "Géjira", path: "/places/gejira" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" } ]
    },
    {
        num: 34,
        title: "The Banquet",
        date: "PAN: THE THIRD MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "You are a good friend, but you’re also a fool.",
        speaker: "Mata Zyndu",
        summary: "Mata holds a victory banquet and summons Kuni, intending to deal with his perceived betrayal. Kuni attends, accompanied by Luan Zya and the formidable Mün Çakri. Kuni gives a heartfelt speech, claiming he acted only to pave the way for Mata's glory. The tense standoff is interrupted by a sword dance meant to assassinate Kuni, but Mün Çakri intervenes. Mata, moved by Kuni's words and Mün's loyalty, spares Kuni's life, but their brotherhood is clearly fractured.",
        links: [ { name: "Pan", path: "/places/pan" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Mün Çakri", path: "/characters/mun-cakri" } ]
    },
    {
        num: 35,
        title: "A New World",
        date: "PAN: THE FIFTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "To be a hegemon is to be a slave to the idea of being a hegemon.",
        speaker: "Torulu Pering",
        summary: "As Hegemon, Mata Zyndu redraws the map of Dara, creating a new political order. He carves up the old states and distributes titles to his loyal followers, often ignoring traditional claims and contributions. In a move of spiteful cleverness, he 'rewards' Kuni Garu with the poor and remote island of Dasu, effectively exiling him. He also decides to keep Jia and Kuni's children in Cocru as hostages to ensure Kuni's good behavior.",
        links: [ { name: "Pan", path: "/places/pan" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" } ]
    },
    {
        num: 36,
        title: "Dasu",
        date: "DASU: THE SIXTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "I’m coming home, my beloved, center of my heart.",
        speaker: "Kuni Garu",
        summary: "Exiled to the desolate island of Dasu, Kuni Garu feigns contentment to lull Mata's spies. He burns his ships to signal he has no intention of leaving. Meanwhile, he and Cogo Yelu begin the slow, difficult work of transforming Dasu into a productive and thriving state. Kuni maintains a secret correspondence with Jia, using invisible ink made from dandelion milk to plot his eventual return.",
        links: [ { name: "Dasu", path: "/places/dasu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" } ]
    },
    {
        num: 37,
        title: "A Visit Home",
        date: "OUTSIDE ÇARUZA: THE SEVENTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "Faith is stronger when it acknowledges and embraces doubt.",
        speaker: "Soto Zyndu",
        summary: "Kuni risks everything by sneaking back to Cocru in disguise to reunite with Jia and meet his newborn second child. The reunion is fraught with the emotional distance created by their long separation and Jia's affair with Otho Krin. Guided by the wisdom of Soto, Kuni and Jia confront their imperfections and reconcile, forging a new, more mature partnership. Jia proposes that Kuni take a second wife to create political alliances and provide a strategic distraction.",
        links: [ { name: "Çaruza", path: "/places/caruza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" } ]
    },
    {
        num: 38,
        title: "Risana",
        date: "OUTSIDE ÇARUZA: THE SEVENTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "To delight and to lead.",
        speaker: "Risana",
        summary: "While escaping Mata's patrols, Kuni is sheltered by Lady Risana, a beautiful and mysterious illusionist who lives in a secluded cottage. Risana, a master of manipulating smoke and perception, recognizes Kuni's inner turmoil and self-doubt. She helps him see himself clearly again, restoring his confidence. Kuni, recognizing her wisdom and talent, asks her to come with him, and she agrees to become his second wife.",
        links: [ { name: "Çaruza", path: "/places/caruza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Lady Risana", path: "/characters/lady-risana" } ]
    },
    {
        num: 39,
        title: "Letters",
        date: "DASU AND OUTSIDE ÇARUZA: THE NINTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "The heart surely has room for more than one.",
        speaker: "Jia Matiza (internal thought)",
        summary: "This chapter consists of the secret letters exchanged between Kuni and Jia. They discuss strategy, politics, and their complex relationship. Jia proves to be a shrewd political operator, gathering intelligence and suggesting alliances. Kuni shares his vision for a new, unified empire that prioritizes the common people over the glory of nobles. Their correspondence shows their partnership evolving into a powerful political and intellectual alliance.",
        links: [ { name: "Dasu", path: "/places/dasu" }, { name: "Çaruza", path: "/places/caruza" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" } ]
    },
    {
        num: 40,
        title: "Gin Mazoti",
        date: "DIMUSHI: A LONG TIME AGO.",
        quote: "When you learn enough about the world, even a blade of grass can be a weapon.",
        speaker: "The Dockmaster",
        summary: "The backstory of Gin Mazoti is revealed. An orphan born in a brothel, she escaped to the streets, survived in a brutal gang of thieves, and eventually found a new life disguised as a boy working on the docks of Dimushi. She discovers a talent for logistics and strategy but is constantly dismissed due to her small stature. Her journey through the various rebel armies shows her frustration at being overlooked, leading her to seek out a lord who values intelligence over brute force.",
        links: [ { name: "Dimushi", path: "/places/dimushi" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" } ]
    },
    {
        num: 41,
        title: "The Marshal",
        date: "THE TENTH MONTH IN THE FIRST YEAR OF THE PRINCIPATE.",
        quote: "A woman is often weaker than a man physically, and that means she must use a different set of techniques when she wishes to overcome a stronger opponent.",
        speaker: "Gin Mazoti",
        summary: "Kuni Garu, recognizing Gin Mazoti's strategic genius after she bests Cogo Yelu in a game of cüpa, makes a revolutionary decision. In a formal ceremony, he reveals her true identity as a woman and names her Marshal of Dasu. Despite initial shock and resistance from his other commanders, Gin quickly earns their respect by implementing innovative and highly effective training methods, transforming Kuni's army into a formidable and unconventional fighting force.",
        links: [ { name: "Dasu", path: "/places/dasu" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kuni Garu", path: "/characters/kuni-garu" } ]
    },
    {
        num: 42,
        title: "The Dandelion Ripens",
        date: "DASU: THE SIXTH MONTH IN THE SECOND YEAR OF THE PRINCIPATE.",
        quote: "Can you unite the Islands of Dara under one crown and bring about lasting peace, while lessening the burden of the people?",
        speaker: "Luan Zya",
        summary: "A year later, Dasu has become a beacon of innovation and fair governance under Kuni, Cogo, and Gin. Luan Zya arrives, disillusioned with the infighting of the Tiro states, and offers his service to Kuni. He challenges Kuni to complete Emperor Mapidéré's project of unification but to do so with justice and compassion. Kuni accepts this destiny, and with Luan Zya as his strategist, Gin Mazoti as his marshal, and the support of his wives, he is finally ready to challenge Mata Zyndu for control of Dara.",
        links: [ { name: "Dasu", path: "/places/dasu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Luan Zya", path: "/characters/luan-zya" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" } ]
    },
    {
        num: 43,
        title: "First Strike",
        date: "RUI: THE SEVENTH MONTH IN THE THIRD YEAR OF THE PRINCIPATE.",
        quote: "How hard it is to foresee how life will turn out.",
        speaker: "Dafiro Miro",
        summary: "Gin Mazoti puts her plans into motion. Using a clever deception involving a fake shipyard, she directs Kindo Marana's attention while her forces secretly repair and use a section of Emperor Mapidéré's abandoned undersea Grand Tunnels to launch a surprise attack on Rui. The island falls quickly, and Kindo Marana is killed by Dafiro Miro, who had been working as a double agent. Kuni's forces now control the old Xana homeland.",
        links: [ { name: "Rui", path: "/places/rui" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kindo Marana", path: "/characters/kindo-marana" }, { name: "Dafiro Miro", path: "/characters/dafiro-miro" } ]
    },
    {
        num: 44,
        title: "The Cruben in Deep Sea",
        date: "ÇARUZA: THE FIRST MONTH IN THE FOURTH YEAR OF THE PRINCIPATE.",
        quote: "See him for who he really is, Mira. That is all I ask.",
        speaker: "Kiji",
        summary: "With Kuni's rebellion gaining momentum, Mata Zyndu is consumed by the war. He grows more distant and isolated. The god Kiji, disguised as a beggar, visits Mira, the woman Mata has taken into his household, and gives her a bone dagger, urging her to see the hegemon's true nature.\n\nMeanwhile, Gin Mazoti and Luan Zya develop a fleet of mechanical, submersible crubens, a revolutionary naval weapon that allows them to bypass Mata's blockades and land troops anywhere in Dara.",
        links: [ { name: "Çaruza", path: "/places/caruza" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kiji", path: "/concepts/gods-of-dara" } ]
    },
    {
        num: 45,
        title: "Dasu and Cocru",
        date: "WOLF’S PAW AND THE BIG ISLAND: THE SIXTH MONTH IN THE FOURTH YEAR OF THE PRINCIPATE.",
        quote: "You pick the stronger gang or you’re lost.",
        speaker: "Théca Kimo",
        summary: "The war escalates. Kuni's forces, using their technological and strategic advantages, begin to conquer the Tiro states loyal to Mata. Théca Kimo, one of Mata's key allies, defects to Kuni's side, recognizing his growing power. Mata is forced to constantly move to put down rebellions, while Gin Mazoti's armies make steady progress across the Big Island, setting the stage for a final confrontation.",
        links: [ { name: "Wolf's Paw", path: "/places/wolfs-paw" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Théca Kimo", path: "/characters/theca-kimo" } ]
    },
    {
        num: 46,
        title: "Mata’s Counterattack",
        date: "ZUDI: THE EIGHTH MONTH IN THE FOURTH YEAR OF THE PRINCIPATE.",
        quote: "There won’t be another you, but there can always be more children.",
        speaker: "Kuni Garu",
        summary: "Mata Zyndu launches a brilliant and daring counterattack. Using his entire air force, he bypasses Kuni's ground troops and drops his soldiers directly into Zudi, retaking the city in a stunning surprise assault. Kuni, Jia, Risana, and their children are trapped. In a moment of crisis, Jia chooses to stay behind with Kuni while Risana escapes with the children, an act that solidifies Jia's position but leaves her a captive of the hegemon.",
        links: [ { name: "Zudi", path: "/places/zudi" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" } ]
    },
    {
        num: 47,
        title: "The Standoff at Liru River",
        date: "DIMU AND DIMUSHI: THE NINTH MONTH IN THE FOURTH YEAR OF THE PRINCIPATE.",
        quote: "Do you think that if I intend to replace you, I would be stopped by the loss of a single life?",
        speaker: "Kuni Garu",
        summary: "The two armies face each other across the Liru River. Mata attempts to break Kuni's resolve by threatening to execute Kuni's captured father. Kuni, in a masterful bluff, calls his bluff, pretending to be utterly ruthless and uncaring. The psychological gambit works, and Mata spares his father's life.\n\nThe war settles into a stalemate, with both sides launching raids and engaging in psychological warfare orchestrated by Luan Zya.",
        links: [ { name: "Liru River", path: "/places/liru-river" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" } ]
    },
    {
        num: 48,
        title: "The Marshal’s Gambit",
        date: "RIMA AND FAÇA: THE THIRD MONTH OF THE FIFTH YEAR OF THE PRINCIPATE.",
        quote: "He didn’t know anything about how to fight a war.",
        speaker: "Gin Mazoti",
        summary: "To break the stalemate, Gin Mazoti leads an army into the neutral northern states of Rima and Faça. She uses brilliant deception and unconventional tactics, including damming a river, to defeat the Rima forces. She then marches on Faça, where King Shilué, believing he can play both sides, welcomes her. Gin promptly executes him for his treachery and conquers both states, declaring herself their queen.",
        links: [ { name: "Rima", path: "/places/rima" }, { name: "Faça", path: "/places/faca" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" } ]
    },
    {
        num: 49,
        title: "The Temptation of Gin Mazoti",
        date: "BOAMA: THE FIFTH MONTH IN THE FIFTH YEAR OF THE PRINCIPATE.",
        quote: "The world is not only a world of brute force and heartless betrayals.",
        speaker: "Gin Mazoti",
        summary: "Now a powerful queen in her own right, Gin is tempted by the god Kiji, disguised as a beggar, to betray Kuni and seize power for herself. Kiji argues that Kuni will inevitably see her as a threat. Gin struggles with the decision but ultimately rejects the path of betrayal, reaffirming her loyalty to Kuni. Her decision marks a crucial moment of character, choosing faith in her lord over the cynical logic of power.",
        links: [ { name: "Boama", path: "/places/boama" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Kiji", path: "/concepts/gods-of-dara" } ]
    },
    {
        num: 50,
        title: "Glory of the Chrysanthemum",
        date: "COCRU: THE ELEVENTH MONTH IN THE EIGHTH YEAR OF THE PRINCIPATE.",
        quote: "I’m on the run not because I don’t know how to fight, but because the gods are jealous of me.",
        speaker: "Mata Zyndu",
        summary: "After three more years of war, Mata's forces are starving and depleted. Kuni offers a peace treaty, dividing the islands between them. Mata, seeing no other choice, agrees. However, Luan Zya convinces Kuni that true peace is impossible while Mata lives. Kuni breaks the treaty and launches a massive surprise attack. The final confrontation takes place at Rana Kida. Surrounded and with his army deserting, Mata makes a final, heroic last stand with his most loyal followers, ultimately taking his own life rather than be captured. His death ends the Chrysanthemum-Dandelion War.",
        links: [ { name: "Cocru", path: "/places/cocru" }, { name: "Mata Zyndu", path: "/characters/mata-zyndu" }, { name: "Kuni Garu", path: "/characters/kuni-garu" } ]
    },
    {
        num: 51,
        title: "The Coronation",
        date: "DARA: THE FIFTH MONTH IN THE FIRST YEAR OF THE REIGN OF FOUR PLACID SEAS.",
        quote: "The dandelion is a common flower, a flower of the people.",
        speaker: "Kuni Garu",
        summary: "With Mata Zyndu dead, the war is over. The gods reconcile, accepting the new order. Kuni Garu prepares for his coronation as Emperor Ragin. On the eve of the ceremony, he holds a final banquet with his old friends in Zudi, reflecting on his long journey. He sings a song celebrating the dandelion, affirming his identity as a ruler of the common people. The book ends with Kuni poised to begin his reign, having united the Islands of Dara under a single banner once more.",
        links: [ { name: "Islands of Dara", path: "/places/islands-of-dara" }, { name: "Kuni Garu", path: "/characters/kuni-garu" }, { name: "The Gods of Dara", path: "/concepts/gods-of-dara" } ]
    }
];

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);


export default function GraceOfKingsPage() {
    const bookNav = {
        prevBook: null,
        nextBook: { title: "The Wall of Storms", link: "/books/wall-of-storms" }
    };

    return (
        <div>
            <TopBookNavigation prevBook={bookNav.prevBook} nextBook={bookNav.nextBook} />

            {/* --- BOOK HEADER --- */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image 
                        src="/the-grace-of-kings.jpg" 
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
                        <h3 className="font-bold text-xl mb-3 text-teal-600 dark:text-teal-400">Book Details</h3>
                        <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                           <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> April 7, 2015 by Saga Press</li>
                            <li><strong>Pages:</strong> 640 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781481424271</li>
                            <li><strong>Awards:</strong> Locus Award for Best First Novel (2016), Nebula Award Nominee (2015)</li>
                            <li>
                                <a href="https://www.goodreads.com/book/show/18952341-the-grace-of-kings" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center">
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