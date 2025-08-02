'use client';

import Image from 'next/image';
import Link from 'next/link';
import TopPageNavigation from '../../components/TopPageNavigation';
import BookNavigation from '@/app/components/BookNavigation';

// --- ACCURATE & DETAILED DATA FOR SPEAKING BONES ---
const chapters = [
    {
        num: 1,
        title: "A Message from the Past",
        date: "PAN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The world is woven from the threads of stories, but the shuttles are guided by the hands of the gods.",
        speaker: "Zomi Kidosu",
        summary: "In Pan, Zomi Kidosu receives a package containing a turtle shell with a secret message from Princess Théra, who has been presumed dead for years. The message, encoded in a complex cypher based on their shared memories and knowledge, confirms that Théra is alive and leading a rebellion in Ukyu-Gondé. The discovery reignites Zomi's hope and sets her on a new path, determined to aid Théra from across the Wall of Storms.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "The Wall of Storms", path: "/concepts/the-wall-of-storms" }]
    },
    {
        num: 2,
        title: "The Politics of Knowledge",
        date: "PAN: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "A library is a garden of the mind, but a garden must be tended, lest the weeds choke out the flowers.",
        speaker: "Jia Matiza",
        summary: "Zomi presents her discovery to Empress Jia. The two women, once allies, are now political rivals. Jia, ever the pragmatist, is skeptical of the message and wary of the political instability it could cause. She sees Théra's return as a threat to her own carefully laid plans for the empire and her son, Emperor Phyro. The chapter explores the complex relationship between the two most powerful women in Dara and the philosophical differences in their approaches to governance: Zomi's faith in radical transparency and innovation versus Jia's belief in control and stability.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
    },
    {
        num: 3,
        title: "The Emperor's Burden",
        date: "TIRO COZO: THE EIGHTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Honor is a shield, but it can also be a cage.",
        speaker: "Ouro",
        summary: "At the secret garinafin training base in Tiro Cozo, Emperor Phyro struggles with the weight of his crown. He is torn between his duty to prepare for war with the Lyucu and his mother's pacifist policies. The arrival of the Lyucu defector, Ouro, provides a new opportunity. Ouro, a master garinafin rider, begins to train the Dara pilots, but his methods are harsh and his loyalty is constantly questioned. The chapter explores Phyro's growth as a leader as he navigates the complex cultural and military challenges of building a new kind of army.",
        links: [{ name: "Tiro Cozo", path: "/places/tiro-cozo" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Ouro", path: "/characters/ouro" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 4,
        title: "Whispers in the Reeds",
        date: "THE SWAMPS OF GÉFICA: THE EIGHTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "A swamp hides many secrets, but the truth, like a bubble of marsh gas, will always rise to the surface.",
        speaker: "The Fish-Herder",
        summary: "In the swamps of Géfica, a grassroots rebellion is brewing. Led by a mysterious figure known as the Fish-Herder, the common people are organizing a resistance against both the Lyucu and the perceived weakness of the Dandelion Court. They use the unique geography of the swamps to their advantage, employing guerrilla tactics and a network of secret communication. The chapter introduces a new front in the war for Dara, one fought not by nobles and generals, but by the common folk.",
        links: [{ name: "Géfica", path: "/places/gefica" }, { name: "The Fish-Herder", path: "/characters/the-fish-herder" }]
    },
    {
        num: 5,
        title: "The Cost of a Secret",
        date: "PAN: THE NINTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Every secret has a price, and the price is always paid in the currency of trust.",
        speaker: "Jia Matiza",
        summary: "Zomi, frustrated by Jia's inaction, decides to act on her own. She begins to secretly build a coalition of allies, including members of the Blossom Gang and sympathetic nobles, to support Théra's cause. Her actions put her in direct conflict with the empress, and the chapter is a tense game of political chess as the two women maneuver for power and influence. Zomi's idealism is tested as she is forced to adopt the same methods of secrecy and manipulation that she once condemned in Jia.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 6,
        title: "A Dance of Blades",
        date: "ESEERAN NOMNNY: THE NINTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "A sword is a tool, but a sword dance is a conversation.",
        speaker: "The Sword-Saint",
        summary: "In the remote warrior monasteries of Eseeran Nomnny, Princess Aya Mazoti undergoes a brutal training regimen under the tutelage of the legendary Sword-Saint. She seeks to overcome the shame of her past failures and forge herself into a worthy successor to her mother, Gin Mazoti. The training is as much a spiritual journey as a physical one, as Aya must confront her own demons and the legacy of her parents. The chapter is a deep dive into the philosophy of the martial arts and the nature of true strength.",
        links: [{ name: "Eseeran Nomnny", path: "/places/eseeran-nomnny" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "The Sword-Saint", path: "/characters/the-sword-saint" }]
    },
    {
        num: 7,
        title: "The Weight of a Name",
        date: "KRIPHI: THE TENTH MONTH IN THE NINTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "A name is a story we tell ourselves about who we are. But sometimes, we must write a new story.",
        speaker: "Goztan Ryoto",
        summary: "In Kriphi, Goztan Ryoto struggles to protect her son, Kinri, from the political fallout of his defection. She is caught between her loyalty to the Lyucu and her love for her son, who has embraced his Dara heritage. The chapter explores the complexities of identity and allegiance in a world of shifting borders and cultural conflict. Goztan is forced to make a difficult choice that will determine the fate of her family and her people.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Kinri", path: "/characters/kinri" }]
    },
    {
        num: 8,
        title: "The Anatomy of a Lie",
        date: "PAN: THE TENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The most dangerous lies are the ones we tell ourselves.",
        speaker: "Jia Matiza",
        summary: "Jia's spies uncover Zomi's secret coalition. Instead of crushing the nascent rebellion, Jia decides to use it for her own purposes. She begins to secretly feed Zomi's network misinformation, manipulating events to steer the rebellion in a direction that serves her own long-term goals. The chapter is a masterclass in political intrigue, as Jia demonstrates her ruthless pragmatism and her profound understanding of human nature.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 9,
        title: "The First Stone",
        date: "THE SECRET AGON BASE: THE ELEVENTH MONTH IN THE NINTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "A single stone can start an avalanche.",
        speaker: "Takval Aragoz",
        summary: "In Ukyu-Gondé, Théra and Takval's rebellion gains its first major victory. Using a combination of Dara ingenuity and Agon warrior prowess, they successfully raid a Lyucu supply convoy. The victory is a major morale boost for the fledgling rebellion and a proof of concept for their hybrid military strategy. The chapter is a thrilling depiction of guerrilla warfare and the power of a united front against a common enemy.",
        links: [{ name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }]
    },
    {
        num: 10,
        title: "A City of Ghosts",
        date: "TATEN-RYO-ALVOVO: THE TWELFTH MONTH IN THE NINTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "The ghosts of the past are always with us, but we must not let them rule our future.",
        speaker: "Sataari",
        summary: "The Agon rebels, led by the young shaman Sataari, discover the ruins of an ancient city, Taten-ryo-alvovo, the City of Ghosts. The city is a place of great spiritual power and a repository of lost knowledge. The discovery is a turning point for the Agon, as they begin to reclaim their own history and culture from the shadow of Lyucu domination. The chapter is a journey into the mystical heart of the scrublands and the power of cultural memory.",
        links: [{ name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }, { name: "Sataari", path: "/characters/sataari" }]
    },
    {
        num: 11,
        title: "The Price of Hope",
        date: "PAN: THE FIRST MONTH IN THE TENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Hope is a powerful weapon, but it is also a dangerous one.",
        speaker: "Zomi Kidosu",
        summary: "Zomi's rebellion, fueled by Jia's misinformation, grows in strength and ambition. They begin to plan a daring operation: a mission to rescue Prince Timu from his captivity in Kriphi. The plan is incredibly risky, but Zomi believes it is necessary to rally the people of Dara and provide a legitimate alternative to Phyro's rule. The chapter highlights the dangers of hope and the potential for idealism to be twisted into a tool of political manipulation.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Prince Timu", path: "/characters/prince-timu" }]
    },
    {
        num: 12,
        title: "The Unlikeliest of Allies",
        date: "DIMUSHI: THE SECOND MONTH IN THE TENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "In the game of power, sometimes the most valuable pieces are the ones you least expect.",
        speaker: "Kinri",
        summary: "Kinri, now a fugitive, makes his way to the bustling port city of Dimushi. There, he seeks out the aid of the city's criminal underworld, the only people with the resources and connections to help him. He forms an unlikely alliance with a charismatic pirate queen and a disgraced former noble, who see in him an opportunity to advance their own ambitions. The chapter is a descent into the shadowy underbelly of Dara society, where the lines between hero and villain are blurred.",
        links: [{ name: "Dimushi", path: "/places/dimushi" }, { name: "Kinri", path: "/characters/kinri" }]
    },
    {
        num: 13,
        title: "A Ship of Fools",
        date: "THE SEAS NEAR RUI: THE THIRD MONTH IN THE TENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "A ship is a world in miniature, with all its hopes, fears, and follies.",
        speaker: "The Captain",
        summary: "Kinri and his new allies set sail for Rui on a stolen ship. The journey is fraught with peril, not just from the Lyucu patrols, but from the tensions and rivalries within their own crew. Kinri must use all his wits and courage to hold the fragile alliance together and keep his mission on track. The chapter is a classic tale of adventure on the high seas, filled with storms, sea monsters, and the ever-present threat of betrayal.",
        links: [{ name: "Rui", path: "/places/dasu-rui" }, { name: "Kinri", path: "/characters/kinri" }]
    },
    {
        num: 14,
        title: "The Dragon's Teeth",
        date: "TIRO COZO: THE FOURTH MONTH IN THE TENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "From the teeth of the dragon, a new army will rise.",
        speaker: "Prince Phyro",
        summary: "At Tiro Cozo, Phyro's garinafin breeding program achieves a major breakthrough. A new generation of garinafins, bred and trained in Dara, is born. These new beasts are stronger, faster, and more loyal than their wild counterparts. The chapter is a celebration of scientific achievement and the power of human ingenuity to reshape the natural world. It also raises profound ethical questions about the morality of creating living weapons.",
        links: [{ name: "Tiro Cozo", path: "/places/tiro-cozo" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 15,
        title: "The Ghost in the Machine",
        date: "PAN: THE FIFTH MONTH IN THE TENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Every machine has a ghost, a story of its creation and purpose.",
        speaker: "Rati Yera",
        summary: "In Pan, the Blossom Gang, now working for Zomi, makes a startling discovery. They uncover evidence that the Lyucu are not just stealing Dara technology, but are also developing their own, based on a completely different set of scientific principles. The discovery is a major blow to Dara's sense of technological superiority and a sign that the coming war will be fought on a new and unfamiliar battlefield.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Rati Yera", path: "/characters/rati-yera" }]
    },
    {
        num: 16,
        title: "The Nature of the Cage",
        date: "KRIPHI: THE SIXTH MONTH IN THE TENTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "A cage can be made of bars, but it can also be made of love.",
        speaker: "Prince Timu",
        summary: "In Kriphi, Prince Timu has settled into his role as a puppet emperor. He has found a measure of contentment in his marriage to Tanvanaki and his love for their children. However, he is still a prisoner, and his every move is watched. The chapter explores the psychological complexities of captivity and collaboration, as Timu struggles to find a way to serve his people while living in the heart of the enemy's power.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 17,
        title: "A Whisper on the Wind",
        date: "KRIPHI: THE SIXTH MONTH IN THE TENTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "Even the smallest whisper can be heard in a silent room.",
        speaker: "The Spy",
        summary: "Kinri and his team arrive in Kriphi and begin their mission to rescue Prince Timu. They must navigate the treacherous political landscape of the Lyucu court, where every shadow holds a potential enemy and every word is a potential betrayal. The chapter is a tense thriller, as Kinri uses his knowledge of both Dara and Lyucu culture to move unseen through the enemy's capital.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Kinri", path: "/characters/kinri" }]
    },
    {
        num: 18,
        title: "The Serpent's Tooth",
        date: "PAN: THE SEVENTH MONTH IN THE TENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "How sharper than a serpent's tooth it is to have a thankless child.",
        speaker: "Jia Matiza",
        summary: "Jia discovers that Phyro has been secretly building his garinafin army, in direct defiance of her orders. The betrayal is a deep personal blow, but also a political crisis. She must now decide how to deal with her rebellious son without plunging the empire into civil war. The chapter is a powerful depiction of the conflict between mother and son, and the painful choices that leaders must make.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
    },
    {
        num: 19,
        title: "The Cost of a Throne",
        date: "THE SECRET AGON BASE: THE EIGHTH MONTH IN THE TENTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "A throne is the loneliest place in the world.",
        speaker: "Princess Théra",
        summary: "In Ukyu-Gondé, Théra's rebellion has grown into a formidable force. She has united the disparate Agon tribes and forged them into a disciplined army. But her success has come at a great personal cost. She is isolated from her people, burdened by the weight of command, and haunted by the memory of her lost children. The chapter is a poignant exploration of the sacrifices of leadership and the loneliness of power.",
        links: [{ name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 20,
        title: "The Battle for the Sky",
        date: "THE SKIES OVER UKYU-GONDÉ: THE NINTH MONTH IN THE TENTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "The sky is not the limit. It is the battlefield.",
        speaker: "Takval Aragoz",
        summary: "The Agon rebellion launches its first major offensive against the Lyucu. The centerpiece of the battle is a massive aerial engagement between Théra's fleet of advanced airships and the Lyucu's garinafin hordes. The chapter is a spectacular depiction of aerial warfare, a breathtaking display of 'silkpunk' technology and military strategy. It is a battle that will determine the fate of Ukyu-Gondé and the future of the rebellion.",
        links: [{ name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Airships", path: "/concepts/airships" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 21,
        title: "The Face of the Enemy",
        date: "KRIPHI: THE TENTH MONTH IN THE TENTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "When you look into the face of your enemy, you may see your own reflection.",
        speaker: "Kinri",
        summary: "Kinri's rescue mission reaches its climax. He successfully infiltrates the Imperial palace and comes face-to-face with his half-brother, Prince Timu. The encounter is a tense and emotional confrontation, as the two brothers, raised in different worlds and on opposite sides of a war, are forced to confront their shared history and their conflicting loyalties. The chapter is a powerful exploration of family, identity, and the meaning of home.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Prince Timu", path: "/characters/prince-timu" }]
    },
    {
        num: 22,
        title: "The Art of the Possible",
        date: "PAN: THE ELEVENTH MONTH IN THE TENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Politics is the art of the possible, but sometimes the impossible is necessary.",
        speaker: "Jia Matiza",
        summary: "Jia is forced to confront the failure of her grand strategy. Phyro's rebellion is growing, Zomi's plots are spiraling out of control, and the Lyucu threat is more dangerous than ever. In a moment of crisis, she makes a bold and unexpected decision, one that will change the course of the war and the future of the Dandelion Dynasty. The chapter is a stunning reversal, as Jia demonstrates that even in defeat, she is still a master of the game of power.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 23,
        title: "The Phoenix's Flight",
        date: "THE SKIES OVER DARA: THE TWELFTH MONTH IN THE TENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "From the ashes of the old, a new world is born.",
        speaker: "Princess Fara",
        summary: "The final war for Dara begins. The combined forces of Phyro's garinafin army, Zomi's rebel coalition, and Jia's Imperial legions meet the Lyucu invasion fleet in a cataclysmic battle in the skies over Pan. The chapter is the culmination of all the novel's plotlines, a breathtaking spectacle of war and sacrifice. It is a battle that will determine not just the fate of the Dandelion Dynasty, but the future of Dara itself.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 24,
        title: "The Battle of Crescent Island, Part I",
        date: "CRESCENT ISLAND: THE FIRST MONTH IN THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "In the heart of the storm, there is a moment of calm. That is the moment of decision.",
        speaker: "Aya Mazoti",
        summary: "The war for Dara has reached a stalemate. The Lyucu have established a foothold on Crescent Island, and the Dara forces are unable to dislodge them. Aya Mazoti, now a seasoned commander, is given command of the Dara fleet. She must devise a new strategy to break the stalemate and turn the tide of the war. The chapter is a detailed depiction of naval warfare and a showcase for Aya's tactical genius.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }]
    },
    {
        num: 25,
        title: "The Battle of Crescent Island, Part II",
        date: "CRESCENT ISLAND: THE FIRST MONTH IN THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The tide turns not with the moon, but with the will of those who dare to defy it.",
        speaker: "The Fish-Herder",
        summary: "Aya's bold plan is put into action. Using a combination of deception, unconventional tactics, and the unique abilities of her allies from the Blossom Gang and the swamps of Géfica, she launches a surprise attack on the Lyucu fleet. The battle is a chaotic and brutal affair, but Aya's brilliant strategy and the courage of her forces carry the day. The chapter is a thrilling depiction of the chaos and heroism of battle.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "The Fish-Herder", path: "/characters/the-fish-herder" }]
    },
    {
        num: 26,
        title: "The Battle of Crescent Island, Part III",
        date: "CRESCENT ISLAND: THE FIRST MONTH IN THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Victory is not the absence of loss, but the acceptance of it.",
        speaker: "Aya Mazoti",
        summary: "The Battle of Crescent Island reaches its bloody conclusion. The Dara forces are victorious, but the cost is high. Many lives are lost, and the island is devastated. Aya is forced to confront the brutal realities of war and the heavy burden of command. The chapter is a somber reflection on the price of victory and the scars that war leaves on both the land and the human soul.",
        links: [{ name: "Crescent Island", path: "/places/crescent-island" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }]
    },
    {
        num: 27,
        title: "What Price Victory?",
        date: "PAN: THE SECOND MONTH IN THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The victor writes the history, but the vanquished know the truth.",
        speaker: "Goztan Ryoto",
        summary: "In the aftermath of the Battle of Crescent Island, the Dandelion Court celebrates its victory. But the celebration is short-lived. The war is far from over, and the Lyucu are a resilient and determined foe. The chapter explores the political and personal consequences of the battle, as the leaders of Dara grapple with the challenges of a long and brutal war.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }]
    },
    {
        num: 28,
        title: "What Value Defeat?",
        date: "KRIPHI: THE THIRD MONTH IN THE ELEVENTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "Defeat is not the end. It is the beginning.",
        speaker: "Tanvanaki",
        summary: "In Kriphi, the Lyucu leadership reels from their defeat at Crescent Island. Tanvanaki must rally her people and devise a new strategy to continue the war. The chapter provides a glimpse into the Lyucu perspective, revealing their own internal divisions and their determination to conquer Dara. It is a reminder that the enemy is not a monolithic force, but a complex society with its own hopes, fears, and dreams.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 29,
        title: "The Boneyard",
        date: "THE WORLD'S EDGE MOUNTAINS: THE FOURTH MONTH IN THE ELEVENTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "In the boneyard of the gods, even the smallest of us can find the strength to stand tall.",
        speaker: "Sataari",
        summary: "In the World's Edge Mountains, Théra and the Agon rebels discover a vast boneyard, a sacred site where generations of garinafins have come to die. The boneyard is a place of immense spiritual power and a source of a new and powerful weapon: the bones of the dead garinafins, which can be used to create advanced 'living bone' technology. The discovery is a major turning point for the rebellion, giving them a new hope in their fight against the Lyucu.",
        links: [{ name: "World's Edge Mountains", path: "/places/worlds-edge-mountains" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Sataari", path: "/characters/sataari" }]
    },
    {
        num: 30,
        title: "The Temple of Still and Flowing Waters",
        date: "THE WORLD'S EDGE MOUNTAINS: THE FIFTH MONTH IN THE ELEVENTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "The river is always changing, but it is always the same river. So it is with the truth.",
        speaker: "The Abbott",
        summary: "Théra and her followers seek refuge in a remote monastery, the Temple of Still and Flowing Waters. There, they find an unexpected ally in the monastery's abbot, a wise and enigmatic figure who has preserved the lost knowledge of the ancient Ano philosophers. The chapter is a deep dive into the philosophical heart of the series, as Théra and her companions grapple with questions of fate, free will, and the nature of reality.",
        links: [{ name: "World's Edge Mountains", path: "/places/worlds-edge-mountains" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 31,
        title: "Cloud-Garinafins",
        date: "THE SKIES OVER UKYU-GONDÉ: THE SIXTH MONTH IN THE ELEVENTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "We have taught the clouds to fight for us.",
        speaker: "Takval Aragoz",
        summary: "Using the knowledge from the boneyard and the Temple of Still and Flowing Waters, the Agon rebels create a new and devastating weapon: cloud-garinafins, massive constructs of woven cloud and living bone, powered by the silkmotic force. The chapter is a stunning display of 'silkpunk' imagination, as the rebels unleash their new weapon against the Lyucu in a spectacular aerial battle.",
        links: [{ name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Cloud-Garinafins", path: "/concepts/cloud-garinafins" }]
    },
    {
        num: 32,
        title: "Healing",
        date: "PAN: THE SEVENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The deepest wounds are the ones that cannot be seen.",
        speaker: "Jia Matiza",
        summary: "In Pan, the war has taken a heavy toll on the people of Dara. Jia must deal with the physical and psychological wounds of a nation at war. The chapter is a poignant exploration of the human cost of conflict, as Jia confronts the limits of her power and the fragility of the empire she has built.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 33,
        title: "Not One of Us",
        date: "KRIPHI: THE EIGHTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "The greatest walls are not made of stone, but of fear.",
        speaker: "Goztan Ryoto",
        summary: "In Kriphi, the Lyucu are increasingly divided. The hardliners, led by Cutanrovo Aga, advocate for a policy of total war and cultural purification. The accommodationists, led by Goztan Ryoto and supported by Tanvanaki, argue for a more pragmatic approach. The conflict comes to a head in a tense confrontation that will determine the future of Lyucu rule in Dara.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 34,
        title: "The Writing Zither",
        date: "PAN: THE NINTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Every story has a song, and every song has a story.",
        speaker: "Princess Fara",
        summary: "Fara, now a young woman, has become a renowned artist and storyteller. She invents a new instrument, the writing zither, which can translate written text into music. The invention is a symbol of the fusion of art and science, and a testament to the enduring power of creativity in a time of war. The chapter is a celebration of the arts and their role in preserving culture and inspiring hope.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 35,
        title: "Flight",
        date: "THE SKIES OVER DARA: THE TENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "To fly is to be free, but freedom has a price.",
        speaker: "Prince Phyro",
        summary: "The war for Dara reaches its final, decisive stage. Phyro leads his garinafin army in a desperate, last-ditch assault on the Lyucu stronghold in the Roro Hills. The battle is a brutal and bloody affair, a final test of Phyro's courage and leadership. The chapter is a visceral depiction of the horrors of war and the terrible sacrifices that must be made for freedom.",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Roro Hills", path: "/places/roro-hills" }]
    },
    {
        num: 36,
        title: "Winter Worm, Summer Grass",
        date: "PAN: THE ELEVENTH MONTH IN THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The winter worm dreams of summer grass, and the summer grass dreams of the winter worm. So it is with life and death.",
        speaker: "The Abbott",
        summary: "In the aftermath of the final battle, the people of Dara begin to rebuild. The chapter is a quiet and contemplative reflection on the cycles of war and peace, life and death. It is a story of healing and renewal, as the survivors come to terms with their losses and look to the future with a new sense of hope.",
        links: [{ name: "Pan", path: "/places/pan" }]
    },
    {
        num: 37,
        title: "Thirst",
        date: "THE SALT FLATS OF UKYU-GONDÉ: THE TWELFTH MONTH IN THE ELEVENTH YEAR AFTER THÉRA'S DEPARTURE.",
        quote: "In the desert, the greatest treasure is a single drop of water.",
        speaker: "Sataari",
        summary: "In the salt flats of Ukyu-Gondé, the Agon rebels face a new and deadly enemy: thirst. The chapter is a gripping tale of survival, as Théra and her followers must use all their ingenuity and courage to find water in a barren and unforgiving landscape. It is a test of their endurance and their faith, and a reminder that the greatest battles are often fought not against armies, but against the forces of nature.",
        links: [{ name: "Ukyu & Gondé", path: "/places/ukyu-gonde" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Sataari", path: "/characters/sataari" }]
    },
    {
        num: 38,
        title: "A Rebellion That Isn’t a Rebellion",
        date: "PAN: THE FIRST MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The most effective rebellion is the one that is never declared.",
        speaker: "Jia Matiza",
        summary: "Jia's long and complex game of political manipulation reaches its endgame. She has successfully neutralized her rivals, consolidated her power, and set the stage for a new era of peace and stability. The chapter is a final revelation of her grand strategy, a stunning display of political genius that will leave the reader in awe of her cunning and foresight.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 39,
        title: "Madness",
        date: "KRIPHI: THE SECOND MONTH IN THE TWELFTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "Madness is a matter of perspective.",
        speaker: "Cutanrovo Aga",
        summary: "In Kriphi, Cutanrovo Aga's purges have plunged the Lyucu court into a state of paranoia and terror. Her reign of terror is a chilling depiction of the dangers of fanaticism and the corrupting influence of absolute power. The chapter is a dark and disturbing exploration of the nature of evil and the fragility of civilization.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 40,
        title: "The Battle of Pan, Part I",
        date: "PAN: THE THIRD MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The fate of a city is decided not by its walls, but by the courage of its people.",
        speaker: "Zomi Kidosu",
        summary: "The final battle for Pan begins. The chapter is a breathtaking depiction of urban warfare, as the forces of Dara and the Lyucu clash in the streets of the capital. It is a battle of wits and courage, a final test of the strength and resilience of the Dandelion Dynasty.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 41,
        title: "Reunion",
        date: "PAN: THE THIRD MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Even in the darkest of nights, the stars still shine.",
        speaker: "Princess Fara",
        summary: "In the midst of the battle for Pan, the children of Kuni Garu are reunited. The reunion is a moment of joy and hope in a time of darkness, a reminder that even in the midst of war, the bonds of family and love can endure. The chapter is a powerful affirmation of the human spirit and its capacity for resilience and hope.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 42,
        title: "The Battle of Pan, Part II",
        date: "PAN: THE THIRD MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        speaker: "Gori Ruthi",
        summary: "The Battle of Pan rages on. The chapter is a brutal and unflinching depiction of the horrors of war, as the city is torn apart by the fighting. It is a story of sacrifice and loss, a reminder of the terrible price of freedom.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Gori Ruthi", path: "/characters/gori-ruthi" }]
    },
    {
        num: 43,
        title: "The Fall of Ukyu-Taasa",
        date: "KRIPHI: THE FOURTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "An empire built on fear cannot stand.",
        speaker: "Goztan Ryoto",
        summary: "In Kriphi, the Lyucu regime collapses from within. Cutanrovo's reign of terror has alienated the people and created deep divisions within the Lyucu leadership. The chapter is a dramatic depiction of the fall of a tyrant and the triumph of justice.",
        links: [{ name: "Kriphi", path: "/places/kriphi" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }]
    },
    {
        num: 44,
        title: "The Battle of Pan, Part III",
        date: "PAN: THE FOURTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The future is not written in the stars, but in the choices we make.",
        speaker: "Zomi Kidosu",
        summary: "The Battle of Pan reaches its stunning conclusion. The forces of Dara are victorious, and the Lyucu are driven from the city. The chapter is a triumphant celebration of the courage and ingenuity of the people of Dara, and a powerful affirmation of the enduring power of hope.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 45,
        title: "Trace, Retrace",
        date: "PAN: THE FIFTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "To understand the present, we must first understand the past.",
        speaker: "Jia Matiza",
        summary: "In the aftermath of the war, the people of Dara begin to piece together the truth of what has happened. The chapter is a journey of discovery, as the characters uncover the secrets and lies that have shaped their world. It is a story of reconciliation and forgiveness, as they come to terms with the past and look to the future with a new sense of clarity.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 46,
        title: "Garinafins of Dara",
        date: "TIRO COZO: THE SIXTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "We have tamed the dragon, but have we tamed the dragon within ourselves?",
        speaker: "Prince Phyro",
        summary: "The garinafins of Dara, once symbols of Lyucu oppression, are now a symbol of Dara's strength and ingenuity. The chapter explores the complex relationship between humans and their animal creations, and the ethical responsibilities that come with the power to create life.",
        links: [{ name: "Tiro Cozo", path: "/places/tiro-cozo" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 47,
        title: "A Riddle",
        date: "PAN: THE SEVENTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The answer to the riddle is the riddle itself.",
        speaker: "Princess Fara",
        summary: "Fara, now the most celebrated artist in Dara, creates her masterpiece: a vast, interactive sculpture that tells the story of the Dandelion Dynasty. The sculpture is a riddle, a puzzle, and a work of art, a testament to the power of stories to shape our understanding of the world. The chapter is a celebration of creativity and the enduring legacy of the House of Dandelion.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 48,
        title: "Books",
        date: "THE IMPERIAL LIBRARY, PAN: THE EIGHTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "A book is a key that unlocks the door to another world.",
        speaker: "Zomi Kidosu",
        summary: "The Imperial Library, once a symbol of the old order, is transformed into a center of learning and innovation. Zomi Kidosu, now the Grand Historian, oversees a massive project to collect and preserve the knowledge of Dara, both old and new. The chapter is a celebration of the power of knowledge and the importance of preserving our cultural heritage.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 49,
        title: "Bookmaking",
        date: "THE IMPERIAL WORKSHOPS, PAN: THE NINTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "To make a book is to make a world.",
        speaker: "The Master Printer",
        summary: "The invention of the printing press revolutionizes the world of books. The chapter is a detailed depiction of the process of bookmaking, from the casting of type to the binding of pages. It is a celebration of the craft of the book and the power of the written word to change the world.",
        links: [{ name: "Pan", path: "/places/pan" }]
    },
    {
        num: 50,
        title: "Judgment",
        date: "THE GRAND AUDIENCE HALL, PAN: THE TENTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Justice is not a destination, but a journey.",
        speaker: "Jia Matiza",
        summary: "The leaders of the Lyucu are brought to trial for their crimes. The chapter is a tense and dramatic courtroom drama, as the people of Dara grapple with the difficult questions of justice, mercy, and reconciliation. It is a powerful exploration of the challenges of building a just and lasting peace in the aftermath of war.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 51,
        title: "Ancestral Voices",
        date: "THE TEMPLE OF THE ANCESTORS, PAN: THE ELEVENTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "We are the sum of all who have come before us.",
        speaker: "The High Priestess",
        summary: "The people of Dara gather at the Temple of the Ancestors to honor the dead and celebrate their victory. The chapter is a moving and powerful depiction of the importance of tradition and the enduring power of faith. It is a story of remembrance and renewal, as the people of Dara look to the future with a new sense of hope and purpose.",
        links: [{ name: "Pan", path: "/places/pan" }]
    },
    {
        num: 52,
        title: "A Tempest of Gold",
        date: "THE IMPERIAL TREASURY, PAN: THE TWELFTH MONTH IN THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Wealth is a tool, but it can also be a weapon.",
        speaker: "Cogo Yelu",
        summary: "The spoils of war are divided. The chapter is a complex and nuanced exploration of the politics of wealth and the challenges of building a just and equitable society. It is a reminder that the end of war is not the end of conflict, and that the struggle for a better world is never truly over.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }]
    },
    {
        num: 53,
        title: "Persuasion",
        date: "THE IMPERIAL COURT, PAN: THE FIRST MONTH IN THE THIRTEENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The most powerful weapon is not the sword, but the word.",
        speaker: "Jia Matiza",
        summary: "The leaders of Dara must now persuade the people to embrace a new vision for the future. The chapter is a masterful depiction of the art of political persuasion, as Jia and her allies use all their skill and cunning to win the hearts and minds of the people. It is a story of hope and transformation, as the people of Dara begin to build a new world from the ashes of the old.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 54,
        title: "Truth",
        date: "THE IMPERIAL LIBRARY, PAN: THE SECOND MONTH IN THE THIRTEENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The truth is a mirror with a thousand faces.",
        speaker: "Zomi Kidosu",
        summary: "The final secrets of the Dandelion Dynasty are revealed. The chapter is a stunning conclusion to the epic saga, a final revelation of the truth that will change everything. It is a story of love, loss, and redemption, a powerful affirmation of the enduring power of the human spirit.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 55,
        title: "Surrender",
        date: "THE VEILED THRONE, PAN: THE THIRD MONTH IN THE THIRTEENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "To surrender is not to give up, but to begin again.",
        speaker: "Jia Matiza",
        summary: "The final confrontation between Jia and her enemies. The chapter is a tense and dramatic showdown, a final battle for the soul of Dara. It is a story of sacrifice and forgiveness, a powerful conclusion to the epic saga of the Dandelion Dynasty.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 56,
        title: "Speaking Bones",
        date: "THE BONEYARD, WORLD'S EDGE MOUNTAINS: THE FOURTH MONTH IN THE THIRTEENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The bones speak, and we must listen.",
        speaker: "Sataari",
        summary: "In the boneyard of the gods, the final secrets of the garinafins are revealed. The chapter is a stunning conclusion to the epic saga, a final revelation of the truth that will change everything. It is a story of love, loss, and redemption, a powerful affirmation of the enduring power of the human spirit.",
        links: [{ name: "World's Edge Mountains", path: "/places/worlds-edge-mountains" }, { name: "Sataari", path: "/characters/sataari" }]
    },
    {
        num: 57,
        title: "The Reign of Enduring Spring",
        date: "PAN: THE FIFTH MONTH IN THE THIRTEENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The winter is over. The spring has come.",
        speaker: "Princess Fara",
        summary: "A new era of peace and prosperity begins in Dara. The chapter is a celebration of the resilience of the human spirit and the enduring power of hope. It is a story of renewal and rebirth, as the people of Dara look to the future with a new sense of optimism and purpose.",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 58,
        title: "The Gathering of Life",
        date: "THE SHORES OF THE SEA OF TEARS: THE SIXTH MONTH IN THE THIRTEENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Life is a journey, not a destination.",
        speaker: "Thoryo",
        summary: "The survivors of the war gather on the shores of the Sea of Tears to honor the dead and celebrate their victory. The chapter is a moving and powerful depiction of the importance of community and the enduring power of love. It is a story of remembrance and renewal, as the people of Dara look to the future with a new sense of hope and purpose.",
        links: [{ name: "Sea of Tears", path: "/places/sea-of-tears" }, { name: "Thoryo", path: "/characters/thoryo" }]
    },
    {
        num: 59,
        title: "Homeland",
        date: "DARA: THE SEVENTH MONTH IN THE THIRTEENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Home is not a place, but a feeling.",
        speaker: "Kinri",
        summary: "The final chapter of the Dandelion Dynasty. The story comes full circle as the characters return to their homes, their families, and their lives. It is a story of homecoming and reconciliation, a powerful and moving conclusion to the epic saga.",
        links: [{ name: "Dara", path: "/places/dara" }, { name: "Kinri", path: "/characters/kinri" }]
    }
];


const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);


export default function SpeakingBonesPage() {
    const bookNav = {
        prevBook: { title: "The Veiled Throne", link: "/books/the-veiled-throne" },
        nextBook: null
    };

    const prevPageData = { title: "The Veiled Throne", path: "/books/the-veiled-throne" };
    const nextPageData = null;
    const returnLinkData = { title: "Return to Series Overview", path: "/books" };

    return (
        <div>
            <TopPageNavigation
                prevPage={prevPageData}
                nextPage={nextPageData}
                returnLink={returnLinkData}
            />

            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full max-w-xs mx-auto md:w-1/3 md:max-w-none md:mx-0 flex-shrink-0">
                    <Image
                        src="/books/speaking-bones.jpg"
                        alt="Speaking Bones Book Cover"
                        width={400}
                        height={600}
                        className="rounded-lg shadow-2xl object-cover w-full"
                        priority
                    />
                </div>

                <div className="w-full md:w-2/3">
                    <div>
                        <p className="text-lg text-gray-500 dark:text-gray-400 font-semibold mb-1">The Dandelion Dynasty #4</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Speaking Bones</h1>
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p>The conclusion to the Dandelion Dynasty. The people of Dara, scattered and under the Lyucu yoke, have not given up hope. Led by the children of Kuni Garu, a new generation of leaders, scientists, and rebels must use every ounce of their ingenuity to devise new weapons and strategies to fight a seemingly invincible foe. The final war for the future of two peoples will be waged on land, on the sea, and in the air.</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-xl mb-4 text-teal-600 dark:text-teal-400">Book Details</h3>
                        <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> June 21, 2022 by Saga Press</li>
                            <li><strong>Pages:</strong> 1184 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781982193427</li>
                        </ul>
                        <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 space-y-2">
                            <a href="https://www.goodreads.com/book/show/55596771-speaking-bones" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center text-base">
                                View on Goodreads <ExternalLinkIcon />
                            </a>
                            <br />
                            <a href="https://amzn.to/41kbNi5" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center text-base">
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
