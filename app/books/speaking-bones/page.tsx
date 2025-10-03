import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { TopNavigation, BottomNavigation } from '../../components/layout/PageNavigation';
import { formatAsteriskToBold } from '../../utils/textFormatting';
import { generateBookMetadata } from '@/app/utils/metadata';

export const metadata: Metadata = generateBookMetadata(
    'Speaking Bones',
    'The fourth book in The Dandelion Dynasty series by Ken Liu. A new generation of heroes rises to fight the final war for the future of Dara.'
);

// --- ACCURATE & DETAILED DATA FOR SPEAKING BONES ---
const chapters = [
    {
        num: 1,
        title: "Back in the Flow",
        date: "WORLD'S EDGE MOUNTAINS: THE FIFTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THERA FROM DARA FOR UKYU-GONDÉ",
        quote: "Yet, beauty never dies. Beauty always refreshes itself.",
        speaker: "Thoryo",
        summary: "While on the run from the Lyucu in the World's Edge Mountains, Princess Théra remains in a near-catatonic state of grief over the loss of her sons.  Her husband, Takval, entrusts her care to the mysterious young woman, Thoryo.  After a spring shower, Thoryo speaks to Théra about the enduring and renewing nature of beauty in the world, even in the face of death.  This conversation breaks through Théra's grief, and she begins the slow process of healing and re-engaging with her role as a leader. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Thoryo", path: "/characters/thoryo" }, { name: "World's Edge Mountains", path: "/places/worlds-edge-mountains" }]
    },
    {
        num: 2,
        title: "City of Ghosts",
        date: "TATEN-RYO-ALVOVO: THE FIFTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "This place is why we live in the Sixth Age.",
        speaker: "Sataari",
        summary: "The children of Kiri Valley, led by Razutana Pon, Sataari, and Théra's sons Tanto and Rokiri, find refuge at Taten-ryo-alvovo, the 'City of Ghosts.'  Razutana wishes to venture deeper into the seemingly bountiful barrows for more supplies, but Sataari forbids it, explaining the area's sacred and cursed history.  She recounts the myth of the Five Ages of Mankind, revealing that the barrows are the tombs of the arrogant people of the Fifth Age, whose greed and hubris angered the gods and brought ruin to their paradise, ushering in the harsh reality of the Sixth Age.  The story makes a deep impression on young Tanto. ",
        links: [{ name: "Razutana Pon", path: "/characters/razutana-pon" }, { name: "Sataari", path: "/characters/sataari" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Rokiri Aragoz", path: "/characters/rokiri-aragoz" }, { name: "Kiri Valley", path: "/places/kiri-valley" }, { name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }]
    },
    {
        num: 3,
        title: "Bandit Queens",
        date: "TOAZA: THE SEVENTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM",
        quote: "It's better to be lucky than right.",
        speaker: "Tiphan Huto",
        summary: "Tiphan Huto, having avoided a treason conviction through Empress Jia's intervention, is under house arrest but arrogantly believes his own luck and cleverness saved him.  He is visited by two mysterious women, 'Queen Lightbringer' and 'Queen Blooddrinker,' who are actually Jia's elite Dyran Fin agents, Wi and Shido.  They coerce him into a secret smuggling operation. To ensure his loyalty, they force him to ingest a 'rare mushroom' called Blooddrinker, claiming they possess the only antidote, which he will receive monthly upon successful delivery of their goods. ",
        links: [{ name: "Tiphan Huto", path: "/characters/tiphan-huto" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }]
    },
    {
        num: 4,
        title: "A Long Journey Reveals the True Strength of a Horse",
        date: "WORLD'S EDGE MOUNTAINS: THE SEVENTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "There's always a second act. Always.",
        speaker: "Princess Théra",
        summary: "Théra, now fully recovered, helps Takval lead their small band of rebels.  They are found by Araten, a supposedly lost Agon thane, who brings incredible news: Théra's children escaped their Lyucu captors with the help of Toof and Radia, and are believed to be alive.  Araten also reveals that Takval's uncle, Volyu, was the true traitor behind the fall of Kiri Valley.  He claims Cudyu's shamans are trying to calculate the reopening of the Wall of Storms. Théra, suspicious, uses Araten to feed Cudyu misinformation, hoping to make the Lyucu invasion fleet miss its window. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }, { name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }, { name: "The Wall of Storms", path: "/concepts/wall-of-storms" }, { name: "Kiri Valley", path: "/places/kiri-valley" }]
    },
    {
        num: 5,
        title: "Into the Barrows",
        date: "TATEN-RYO-ALVOVO: THE SEVENTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "My mother always told me that there is nothing inherently good or wicked in the nature of tools, for they only serve to amplify what is already present in the hearts of humankind.",
        speaker: "Tanto Aragoz",
        summary: "Inspired by Sataari's stories, Tanto Aragoz secretly leaves the refugee camp and ventures into the forbidden City of Ghosts alone, seeking the powerful weapons of the Fifth Age to help his parents.  After a long and perilous journey, he discovers the largest mound, the tomb of the legendary heroes Afir and Kikisavo.  Inside, he finds not magical weapons, but ancient farming implements.  He, along with Razutana and Sataari who followed him, realize that their ancestors were farmers and city-builders before they became nomads, shattering the foundation of their cultural beliefs. ",
        links: [{ name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }, { name: "Sataari", path: "/characters/sataari" }]
    },
    {
        num: 6,
        title: "That Which Cannot Be Heard",
        date: "WORLD'S EDGE MOUNTAINS: THE EIGHTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "Some mysteries only become more magnificent after you solve them.",
        speaker: "Princess Théra",
        summary: "While recovering from an attack by a tusked tiger, Théra is intrigued by the beast's ability to stun its victims with a 'silent roar.'  Working with the scholar Çami Phithadapu and Thoryo, she conducts experiments with their two garinafins, Alkir and Ga-al.  They discover that garinafins can communicate using inaudible, low-frequency vibrations felt through bone, a phenomenon similar to the tiger's roar.  The discovery, blending Dara scientific methods with Agon tradition, gives their small band a new way to communicate over long distances and deepens Théra's connection to her adopted homeland. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Çami Phithadapu", path: "/characters/cami-phithadapu" }, { name: "Thoryo", path: "/characters/thoryo" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 7,
        title: "Painted Walls",
        date: "TATEN-RYO-ALVOVO: THE EIGHTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "The old stories are all true. But we didn't understand them.",
        speaker: "Sataari",
        summary: "After rescuing Tanto from the Great Barrow, Razutana and Sataari explore the burial chamber of Afir and Kikisavo.  The walls are covered with ancient paintings depicting a vibrant city of farmers, herders, and engineers who lived a settled life before a great cataclysm.  They find the skeletons of the two heroes, each with six fingers or toes, confirming their identities.  The chamber contains not weapons, but farming tools and seeds.  This discovery forces Sataari to realize that the Agon and Lyucu's foundational myths are a misremembering of their true history as a settled, agricultural people who were forced into nomadism by climate change. ",
        links: [{ name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Sataari", path: "/characters/sataari" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }]
    },
    {
        num: 8,
        title: "The Sprung Trap",
        date: "WORLD'S EDGE MOUNTAINS: THE NINTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "When everything you’ve tried has failed, the only path left is to do something impossible, something new.",
        speaker: "Princess Théra",
        summary: "The Lyucu finally locate and encircle Théra's band in their hidden valley.  It's revealed that Araten was a double agent all along, working for Cudyu to extract the true timing of the Wall of Storms' reopening from Théra.  Facing certain doom, Théra devises a daring plan inspired by the Hegemon Mata Zyndu. Using decoy riders made of sticks and fur on their garinafins, they lure the main Lyucu force into a fruitless chase.  Meanwhile, Théra, Takval, and their followers escape on foot, heading east to cross the impassable spine of the World's Edge Mountains, a realm forbidden to mortals. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "World's Edge Mountains", path: "/places/worlds-edge-mountains" }]
    },
    {
        num: 9,
        title: "Secret",
        date: "KRIPHI: THE NINTH MONTH IN THE NINTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM",
        quote: "I can control Cutanrovo. I’m just using her.",
        speaker: "Tanvanaki",
        summary: "In Kriphi, Pékyu Tanvanaki struggles to maintain control against the fanatical hard-liner Cutanrovo Aga, who pushes for ever more brutal policies against the native Dara population.  A purification pack accidentally discovers Tanvanaki's secret project: a hidden workshop in the sealed underwater tunnel where she, Goztan Ryoto, and Vocu Firna are secretly developing Dara-style metal armor and weapons for the garinafins.  To protect this vital secret, Tanvanaki is forced to order the massacre of not only the Lyucu pack but also the entire innocent native village of Phada to eliminate all witnesses.  The act weighs heavily on her, showing the terrible compromises she must make to prepare for war while navigating treacherous court politics. ",
        links: [{ name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Kriphi", path: "/places/kriphi" }]
    },
    {
        num: 10,
        title: "Ice Blossoms",
        date: "ON THE PLAINS WEST OF THE TAIL RANGE: THE ELEVENTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "Anything worth doing is at least a little bit mad.",
        speaker: "Takval Aragoz",
        summary: "After a grueling journey, Théra's band is forced to abandon their attempt to cross the World's Edge Mountains due to the thin air.  They instead travel far north to the frozen tundra, seeking an alliance with the marginalized ice tribes.  The Lyucu, led by Tovo Tasaricu, pursue them with dogsleds.  Trapped at the coast with the sea not yet frozen, Takval makes a passionate appeal to the ice tribe chief, Kitos, convincing him to stand and fight with them.  Using Dara engineering, the rebels construct a formidable fortress of ice, successfully repelling multiple brutal Lyucu assaults. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Tipo Tho", path: "/characters/tipo-tho" }, { name: "World's Edge Mountains", path: "/places/worlds-edge-mountains" }]
    },
    {
        num: 11,
        title: "Nalyufin's Pasture",
        date: "ACROSS THE CHANNEL FROM SPOTTED HEIFER: THE ELEVENTH MONTH IN THE NINTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "It is enough that we have loved and are loved. There is no meaning in eternity; only now, only here.",
        speaker: "Thoryo",
        summary: "When the sea finally freezes, the rebels make a desperate escape across the treacherous ice toward the desolate islands of Nalyufin's Pasture.  They spring a trap, using a blade to score the ice, causing the pursuing Lyucu convoy to plunge into the frigid water.  However, Takval also falls into the icy sea during the escape.  Thoryo sacrifices her own life to save him, diving into the water to tie a rope around his unconscious body before they are both pulled to safety.  The survivors find refuge on Spotted Heifer, but Takval falls into a feverish coma. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Thoryo", path: "/characters/thoryo" }]
    },
    {
        num: 12,
        title: "Lyucu Kyo! Ukyu Kyo!",
        date: "IN THE WATERS NORTH OF RUI AND DASU, NEAR THE WALL OF STORMS: THE FIFTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM",
        quote: "We earn the fear of our foes and the trust of our divine kin!",
        speaker: "Cutanrovo Aga",
        summary: "Aboard the city-ship *Toryoana's Gift*, Cutanrovo Aga leads a fanatical ceremony to welcome the anticipated Lyucu reinforcement fleet from Ukyu-Gondé. She conducts a ceremonial ritual invoking Lyucu traditions and tolyusa use to energize her warriors, reflecting her hard-line ideology. As the Wall of Storms opens, the Lyucu wait with fervent expectation for their reinforcements to arrive and aid in the final conquest of Dara.",
        links: [{ name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "The Wall of Storms", path: "/concepts/wall-of-storms" }, { name: "Lyucu", path: "/concepts/lyucu" }, { name: "Airships", path: "/concepts/airships" }]
    },
    {
        num: 13,
        title: "The Wolf-Thane",
        date: "TATEN: THE FIFTH MONTH IN THE TENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "Nalyufin loves the cries of captives in pain.",
        speaker: "Rita (Thoryo)",
        summary: "As Pékyu Cudyu prepares his massive invasion fleet in Taten, a mysterious 'Wolf-Thane' named Rita arrives from the north, bringing captives and cattle as tribute.  The young thane displays strange powers, seemingly able to inflict pain from a distance, which awes a young garinafin sentry named Saof.  The 'Wolf-Thane' is actually Thoryo in disguise, and her 'captives' are Théra's allies, including the ice-tribe chief Kitos.  Her display of power is a clever ruse. After gaining entry to Taten, she uses her authority to place her allies as slave grooms in the garinafin pens, positioning them for the next stage of Théra's plan. ",
        links: [{ name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }, { name: "Thoryo", path: "/characters/thoryo" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 14,
        title: "Burial Boxes",
        date: "TATEN: THE FIFTH MONTH IN THE TENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "Even the corpses of our enemies cannot escape being exploited to our advantage.",
        speaker: "Tovo Tasaricu",
        summary: "A massive iceberg floats into the sea near Taten, carrying six Dara-style burial boxes.  Inside are the well-preserved bodies of Agon and Dara warriors. Tovo Tasaricu convinces Pékyu Cudyu that these are the remains of Théra, Takval, and their followers, who perished in the north.  Believing this a divine gift, Cudyu plans a grand ceremony. He will publicly open the two largest boxes—believed to contain Théra and Takval—and desecrate their bodies to boost his army's morale before the invasion.  Unbeknownst to him, this is the final stage of Théra's trap. ",
        links: [{ name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }, { name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }]
    },
    {
        num: 15,
        title: "Spirit Portrait",
        date: "SPOTTED HEIFER: FIVE MONTHS EARLIER.",
        quote: "You can and you must. You belong to this land. You love the people of the scrublands as much as I do.",
        speaker: "Takval Aragoz",
        summary: "In a flashback to the rebels' desperate winter on Spotted Heifer, a dying Takval convinces a grief-stricken Théra to undertake a sacred Agon ritual to become his successor.  To become Pékyu, she must not only be named in his final spirit portrait but also ritually take his life with a bone dagger, mingling their blood and absorbing his final breath.  It's a horrifying act that goes against her Dara nature, but she accepts it as necessary to lead the Agon.  She also reveals her plan to use Takval's body in a booby-trapped coffin to assassinate Cudyu, a plan Takval approves of as his final act of war. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Çami Phithadapu", path: "/characters/cami-phithadapu" }]
    },
    {
        num: 16,
        title: "“Feel My Breath Against You…”",
        date: "TATEN: THE FIFTH MONTH IN THE TENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "The garinafins did not speak as humans did, but the fire of vengeance burned in their hearts as strong as in the hearts of women and men.",
        speaker: "Narrator",
        summary: "During Cudyu's grand ceremony, Thoryo's allies incite a fight in the garinafin pens, creating a diversion.  Toof and Radia free the juvenile garinafins from their cells.  Seeing their offspring free, the adult garinafins are roused from their conditioned helplessness. Alkir, Takval's former mount, incinerates the head groom, sparking a full-scale rebellion among the Agon slaves and a mass escape of the garinafins.  Meanwhile, Cudyu opens the booby-trapped burial box, which explodes, killing him and his high command.  The freed Agon pilot Radia leads a suicide mission with five other garinafins to destroy the invasion fleet's city-ships, succeeding in sinking all but one before she and Alkir perish. ",
        links: [{ name: "Thoryo", path: "/characters/thoryo" }, { name: "Toof", path: "/characters/toof" }, { name: "Radia", path: "/characters/radia" }, { name: "Cudyu Roatan", path: "/characters/cudyu-roatan" }, { name: "Takval Aragoz", path: "/characters/takval-aragoz" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 17,
        title: "Self-Reliance",
        date: "ONE YEAR LATER, IN THE WATERS NORTH OF RUI AND DASU, NEAR THE WALL OF STORMS.",
        quote: "The spirit of the Lyucu is indomitable!",
        speaker: "Cutanrovo Aga",
        summary: "One year after Théra's victory in Ukyu-Gondé, the Wall of Storms reopens, but no reinforcement fleet arrives for the Lyucu in Dara, confirming their isolation. The news shatters the morale of the crew aboard *Toryoana's Gift*. Cutanrovo Aga delivers a fiery speech, reframing the disaster as a divine test. She argues that the Lyucu must rely on their own indomitable spirit, rallying her warriors with a hard-line ideology of independence and strength.",
        links: [{ name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "The Wall of Storms", path: "/concepts/wall-of-storms" }, { name: "Lyucu", path: "/concepts/lyucu" }]
    },
    {
        num: 18,
        title: "Conspiracy",
        date: "GINPEN: THE SIXTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "There is strength in simplicity, power in trust, beauty in plain-speaking, and grandness of spirit in believing in ideals.",
        speaker: "Rati Yera",
        summary: "After the Lyucu demand increased tribute for a new peace treaty, the Dandelion Court is divided between war and peace factions.  Empress Jia frames the debate to favor peace, to Phyro's frustration.  Phyro, from his secret base at Tiro Cozo, activates the Blossom Gang.  Zomi, Widi, Arona, and Mota begin mobilizing popular support for war. They organize veterans' societies, fund patriotic folk operas like *The Women of Zudi*, and recruit for Phyro's private army, creating a powerful grassroots movement that bypasses the empress's control and sets the stage for a confrontation. ",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Tiro Cozo", path: "/places/tiro-cozo" }]
    },
    {
        num: 19,
        title: "Treason by the Book",
        date: "PAN: THE SIXTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "The people are not threatening, but pleading for you to heed your own pronouncement: When the interests of the few are weighed against the interests of the many, the few must yield.",
        speaker: "Cogo Yelu",
        summary: "Aya Mazoti, appointed to deliver the new tribute treaty to the Lyucu, is stopped in the streets of Ginpen by a massive protest organized by the Blossom Gang, led by the scholar Réza Müi and backed by veterans.  The protest escalates, and Aya's own soldiers refuse to use force against the demonstrators, resulting in a humiliating failure.  The widespread popular unrest forces Empress Jia's hand. Prime Minister Cogo Yelu, in a dramatic session of formal court, leads the ministers in a 'bloodless rebellion,' siding with the people's will for war. Jia is forced to relent and summons Phyro from Tiro Cozo, finally conceding the start of a new war against the Lyucu. ",
        links: [{ name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Tiro Cozo", path: "/places/tiro-cozo" }]
    },
    {
        num: 20,
        title: "Opening Salvos",
        date: "A FEW DAYS’ SAILING OFF THE SOUTHERN SHORE OF RUI ISLAND: THE SEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "The generals are free.",
        speaker: "Puma Yemu",
        summary: "The Dara invasion fleet, commanded by Puma Yemu, engages the Lyucu fleet led by Goztan Ryoto.  The Dara unveil a new weapon, 'Fithowéo's arm,' a powerful trebuchet that outranges the Lyucu ships.  Goztan counters by ordering her ships to close the distance using oars.  The Lyucu airships then attack, inflicting heavy casualties on the Dara fleet. To counter the airships, Puma Yemu orders his ships to be dismasted to create clear decks. ",
        links: [{ name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Puma Yemu", path: "/characters/puma-yemu" }, { name: "Airships", path: "/concepts/airships" }, { name: "Rui", path: "/places/rui" }]
    },
    {
        num: 21,
        title: "An Unexpected Mirror",
        date: "DIMUSHI: MORE THAN A YEAR EARLIER.",
        quote: "I had never expected to find the mirror of my soul in the Emperor of Dara.",
        speaker: "Zen-Kara",
        summary: "In a lengthy flashback, Zen-Kara, an Adüan scholar and daughter of a chief, feels like an outsider in both Dara and her homeland due to her hybrid identity.  In Dimushi, she rescues a disguised Emperor Phyro from an Adüan gang.  The two fall in love, finding in each other a kindred spirit who understands the feeling of being torn between worlds and legacies.  Zen-Kara, inspired by Phyro, embraces her unique position as a bridge between cultures and agrees to help him secure aid from the cruben riders of Tan Adü for his war effort. ",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Tan Adu", path: "/places/tan-adu" }, { name: "Cruben", path: "/concepts/cruben" }]
    },
    {
        num: 22,
        title: "The Battle of Crescent Island, Part I",
        date: "CRESCENT ISLAND: THE SEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "You fight not for personal glory, but for love of your comrades. I bow to you now not to flatter your considerable talents, but in recognition of your grandness of spirit.",
        speaker: "Kuni Garu (in memory)",
        summary: "Puma Yemu's dismasted fleet reveals its trap: the cleared decks are used to launch large, crewed battle kites armed with powerful crossbows.  These kites effectively counter Goztan's airships. The Dara fleet then uses giant kite-sails to escape at high speed, luring the Lyucu fleet to Crescent Island.  This chapter also features a flashback to Admiral Than Carucono's life, from his origins as a stable master to his unwavering loyalty to Kuni Garu and his dream for Dara. ",
        links: [{ name: "Puma Yemu", path: "/characters/puma-yemu" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Than Carucono", path: "/characters/than-carucono" }, { name: "Crescent Island", path: "/places/crescent-island" }]
    },
    {
        num: 23,
        title: "Ornithopters",
        date: "TIRO COZO: MORE THAN A YEAR EARLIER.",
        quote: "If I can soar so high, it’s only because I’m carried on the wings of many others.",
        speaker: "Rati Yera",
        summary: "In a flashback to Tiro Cozo, the inventor Rati Yera develops a new weapon for Emperor Phyro: swarms of small, mechanical, bird-like automata called 'ornithopters.'  The chapter details her ingenious invention process, including creating a system of pseudo-logograms and punched-hole 'scores' on cork cylinders to program their complex flight patterns.  She also develops a method of mass production using water-powered machinery and standardized parts, overcoming the logistical challenges of building a new army from scratch. ",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Tiro Cozo", path: "/places/tiro-cozo" }]
    },
    {
        num: 24,
        title: "The Battle of Crescent Island, Part II",
        date: "CRESCENT ISLAND: THE SEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "You’ve done your part. Trust the others to do theirs.",
        speaker: "Gin Mazoti (in memory)",
        summary: "Phyro springs his main trap at Crescent Island. A fleet of twelve massive, prefabricated Imperial airships rises from the jungle to confront the Lyucu.  The Lyucu counter with armored garinafins and a surprise of their own: native Dara archers riding garinafins, who rain fire arrows upon the Dara airships.  Phyro's airships unleash swarms of ornithopters that sow chaos among the Lyucu garinafins, and use a two-part chemical weapon (oil of vitriol and water) to defeat the armored beasts.  The battle is brutal, and Admiral Than Carucono is killed when his flagship, *Sword Chrysanthemum*, explodes. ",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Than Carucono", path: "/characters/than-carucono" }, { name: "Gin Mazoti", path: "/characters/gin-mazoti" }, { name: "Airships", path: "/concepts/airships" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 25,
        title: "Oculium",
        date: "TIRO COZO: MORE THAN A YEAR EARLIER.",
        quote: "All of us can see merely one corner of this grand universe but are blind to everything else; only by piecing together all the multiplicity of insights can we grasp the whole.",
        speaker: "Kisli Péro",
        summary: "In another flashback, Rati Yera struggles to create a guidance system for her missile-like 'mechanical dyrans.'  A visiting scholar, Kisli Péro, tells her of a new discovery: *oculium*, a substance that conducts the silkmotic force only when exposed to light.  Inspired by Fara's explanation of knitting patterns and the compound eyes of a bumblebee, Rati realizes she doesn't need to replicate true sight.  She invents a 'phototropic archon' using a grid of oculium sensors that allows a missile to home in on a light source, creating the 'sunflower' guided missile. ",
        links: [{ name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Tiro Cozo", path: "/places/tiro-cozo" }, { name: "Silkmotic Force", path: "/concepts/silkmotic-force" }]
    },
    {
        num: 26,
        title: "The Battle of Crescent Island, Part III",
        date: "CRESCENT ISLAND: THE SEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "The world may not be fair, but we must strive to make it so.",
        speaker: "Prince Phyro",
        summary: "The battle turns into a grueling war of attrition. Phyro, enraged by Than's death, commits his garinafins to a direct assault, where they are outmatched by the more experienced Lyucu pilots.  The battle continues into the night. Phyro unleashes his secret weapon: the 'sunflower' missiles.  The missiles, guided by light, destroy the remaining Lyucu garinafins. Goztan challenges Phyro to a ceremonial single combat to decide the outcome.  After a long and honorable duel, Goztan is defeated by a freak accident (a turtle dropped by an eagle), but Phyro saves her life. Impressed by his honor, Goztan surrenders. ",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Puma Yemu", path: "/characters/puma-yemu" }, { name: "Crescent Island", path: "/places/crescent-island" }]
    },
    {
        num: 27,
        title: "What Price Victory?",
        date: "KRIPHI: THE SEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "An empire built on fear is a house built on sand. The tide always comes in.",
        speaker: "Narrator",
        summary: "In the aftermath of the Battle of Crescent Island, Phyro grapples with the devastating consequences of victory. The enslaved natives on the Lyucu city-ships, fearing reprisals on their families, commit mass suicide by burning the ships, chanting Lyucu war cries as they perish. Phyro is left weeping at the horrific price of his victory, questioning the moral cost of war.",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Kriphi", path: "/places/kriphi" }, { name: "Crescent Island", path: "/places/crescent-island" }]
    },
    {
        num: 28,
        title: "What Value Defeat?",
        date: "PAN: THE TENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "Those who plant saplings will not live to enjoy the shade of the full-grown tree; those who build the city-ship will not get to steer it into the unknown storm.",
        speaker: "Cogo Yelu",
        summary: "An Imperial envoy delivers a cease-fire order from Empress Jia to Phyro's victorious fleet.  The narrative shifts to Pan, where Zomi Kidosu is working on the terms for a new peace treaty.  She reflects on the empress's mysterious behavior and begins to suspect a deeper plot. This chapter details Zomi's thought process as she attempts to decipher a series of coded gestures and phrases used by the Lyucu envoy Noda Mi during his audience at court, realizing he was sending a secret message directly to the empress. ",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "Pan", path: "/places/pan" }]
    },
    {
        num: 29,
        title: "The Boneyard",
        date: "THE BONEYARD, UKYU-GONDÉ: THE TWELFTH MONTH IN THE TENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "Taboos were established by our ancestor heroes to protect the people and honor the gods, and they may be broken for the same purpose.",
        speaker: "Adyulek",
        summary: "In the months following the collapse of the Lyucu empire in Ukyu-Gondé, Tovo Tasaricu rallies the remaining Lyucu forces for an attack on Théra's new base in the Boneyard.  The Agon rebels, using their giant walking arucuro tocua fortresses, meet the Lyucu army. The Lyucu launch a massive fire-cattle stampede, but the rebels withstand it using fire-skirt defenses and their 'Divine Voice' sonic weapon. The stage is set for a final, decisive battle for the future of the scrublands. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }]
    },
    {
        num: 30,
        title: "The Temple of Still and Flowing Waters",
        date: "DEEP IN THE RING-WOODS OF RIMA: AT THE SAME TIME",
        quote: "To believe in Rufizo Mender was to dedicate oneself to the alleviation of suffering, not to its aggravation, not even in the name of justice.",
        speaker: "Abbot Shattered Axe",
        summary: "A flashback details how Savo Ryoto (Kinri), wandering Dara as a fugitive, is rescued from exhaustion and pursuit by Abbot Shattered Axe, a former Lyucu thane who leads a pacifist Dara sect. The abbot shares the philosophy of their fused god, Rufizo Mender/Toryoana Pacific, a concept of healing and unity rather than vengeance. Savo finds peace and belonging among the monks, who are dedicated to healing the body, the land, and even damaged books.",
        links: [{ name: "Kinri", path: "/characters/kinri" }, { name: "Rima", path: "/places/rima" }, { name: "Rufizo Mender", path: "/gods/rufizo" }]
    },
    {
        num: 31,
        title: "Arucuro Tocua Beasts",
        date: "THE BONEYARD, UKYU-GONDÉ: THE TWELFTH MONTH IN THE TENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "The body was gone, but the breath lived on.",
        speaker: "Narrator",
        summary: "At the Battle of the Boneyard, Théra's forces use the Divine Voice—an amplified version of the tusked tiger's silent roar—to paralyze the front ranks of the charging Lyucu army.  Tovo counters by sending his garinafins to attack the bone fortresses. The battle is fierce, but the turning point comes when thousands of feral garinafins, freed from Taten months earlier, answer the rebels' silent call for help and annihilate the Lyucu air force.  In the chaos, Thoryo sacrifices herself to stop a vengeful Tovo from assassinating Théra.  The Lyucu are utterly defeated, and the Agon are finally free. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Thoryo", path: "/characters/thoryo" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 32,
        title: "Healing",
        date: "THE TEMPLE OF STILL AND FLOWING WATERS IN THE MOUNTAINS OF RIMA: AT THE SAME TIME",
        quote: "There are many ways to mend the world. You don’t have to stand apart from the world to tend to it.",
        speaker: "Abbot Shattered Axe",
        summary: "Savo finds purpose at the temple, healing damaged books. Frustrated by his poor calligraphy, he invents the 'writing zither,' a mechanical device that carves perfect logograms by translating musical notes into knife strokes.  His invention revolutionizes the temple's ability to copy and preserve ancient texts.  The abbot, recognizing that Savo's heart is still attached to the outside world and to Fara, tells him that his path lies not in monastic seclusion but in finding a way to mend the world from within. ",
        links: [{ name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Rima", path: "/places/rima" }]
    },
    {
        num: 33,
        title: "Not One of Us",
        date: "THE BONEYARD, UKYU-GONDÉ: THE SIXTH MONTH IN THE ELEVENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ",
        quote: "You are not one of us, never one of us—",
        speaker: "Volyu Aragoz",
        summary: "Théra attempts to unite the fractious Agon chiefs at a grand council, advocating for peace and coexistence with the defeated Lyucu.  Her plans are shattered by the reappearance of Volyu Aragoz, who accuses her of murdering Takval and betraying the Agon for Dara's benefit.  He exploits the chiefs' xenophobia and Théra's foreign accent to turn them against her. The key witness, Adyulek, is found murdered, and Volyu frames Théra for the crime.  As the chiefs move to seize her, Théra's loyalists rescue her, but the Agon alliance dissolves into civil war. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Volyu Aragoz", path: "/characters/volyu-aragoz" }, { name: "Agon", path: "/concepts/agon" }]
    },
    {
        num: 34,
        title: "The Writing Zither",
        date: "NA THION: THE EIGHTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "We do what is right not because we think we’ll succeed; we do so regardless of the consequences, good or bad.",
        speaker: "Naro Hun",
        summary: "Savo and Fara are reunited and take refuge at a secret villa owned by Widow Wasu, where they are joined by Phyro and Lady Soto.  The chapter follows multiple threads: Savo and Fara rekindle their love and discuss their complicated identities; Soto begins writing her exposé on Empress Jia; and in Zudi, the upright mayor Naro Hun receives a mysterious shipment of books that reveal Jia's crimes, forcing him to resign his post and join the growing rebellion against the regency. ",
        links: [{ name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }]
    },
    {
        num: 35,
        title: "Flight",
        date: "UKYU-GONDÉ: THE NINTH MONTH IN THE ELEVENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ.",
        quote: "I cannot change my nature. I am sorry, but I do not regret.",
        speaker: "Princess Théra",
        summary: "Théra and her small, multi-ethnic band of followers are now fugitives, hunted by all Agon factions.  Her generals urge her to fight back and reassert her claim as pékyu, but Théra refuses, weary of the endless cycle of violence and vengeance.  After a deep conversation with Çami Phithadapu, she affirms her compassionate nature, even if it led to past mistakes.  She declares that they are a 'new people without a name' and decides to lead them to the one place no one would dare follow: the forbidden City of Ghosts, Taten-ryo-alvovo. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Çami Phithadapu", path: "/characters/cami-phithadapu" }, { name: "Tipo Tho", path: "/characters/tipo-tho" }, { name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }]
    },
    {
        num: 36,
        title: "Winter Worm, Summer Grass",
        date: "THE TEMPLE OF STILL AND FLOWING WATERS IN THE MOUNTAINS OF RIMA: THE NINTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "There are many ways to mend the world. You don’t have to stand apart from the world to tend to it.",
        speaker: "Abbot Shattered Axe",
        summary: "The narrative returns to Savo's time at the temple. He continues to find solace in the Mendist philosophy and his work restoring ancient books. The chapter includes the full text of the Fluxist 'Tale of Three Swords,' a story about the different natures of power: the Courage of Brutes, the Ambition of Nobles, and the Grace of Kings.  Fara finds him at the temple, and they are joyfully reunited.  Abbot Shattered Axe tells Savo that his destiny lies not in the temple but back in the world, and encourages him to find a 'third path' that transcends the conflict between his two heritages. ",
        links: [{ name: "Kinri", path: "/characters/kinri" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Rima", path: "/places/rima" }]
    },
    {
        num: 37,
        title: "Thirst",
        date: "PAN: THE TENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "The field is gone, but there’s still the secret in the medicine shed in the Palace Garden.",
        speaker: "Jia Matiza",
        summary: "Jia Matiza reflects on the success of her long-term plan: having destroyed the fields of cultivated, addictive tolyusa, she has cut off the supply to Tiphan Huto and the Lyucu.  In Toaza, Tiphan Huto suffers a horrific withdrawal from the potent berries. Delirious and desperate, he believes the 'Blooddrinker mushroom' is real and, in a fit of madness, tears out his own throat and dies.  His gruesome death serves as a prelude to the chaos about to befall the Lyucu. ",
        links: [{ name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Tiphan Huto", path: "/characters/tiphan-huto" }]
    },
    {
        num: 38,
        title: "A Rebellion That Isn’t a Rebellion",
        date: "PAN: THE ELEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "You gotta think for yourself. I bet you fifty silvers that once he reached the shores of Rui, away from the empress’s eyes, the emperor was hoping to turn the army against the empress and march on Pan.",
        speaker: "Égi",
        summary: "As Pan prepares for a potential civil war, two city guards, Égi and Asulu, discuss the political situation.  Their conversation reveals the common people's perspective, filled with cynical conspiracy theories about the motivations of Empress Jia and Emperor Phyro.  They believe the conflict is a simple power struggle, not about ideals. Their watch is interrupted when Phyro's forces launch a surprise attack on Pan, signaled by a massive firework in the shape of a golden dandelion. ",
        links: [{ name: "Pan", path: "/places/pan" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Prince Phyro", path: "/characters/prince-phyro" }]
    },
    {
        num: 39,
        title: "Madness",
        date: "KRIPHI: THE ELEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "Wolves must never become dogs.",
        speaker: "Cutanrovo Aga",
        summary: "In Ukyu-taasa, tolyusa withdrawal devastates the Lyucu, causing lethargy and violent outbursts. With the military crippled and food scarce due to her failed policies, Cutanrovo Aga's rule grows brutal. She orchestrates a coup, manipulating events to isolate Tanvanaki and killing her in a confrontation after Tanvanaki challenges her authority. Timu is present but not directly targeted. Cutanrovo is then betrayed and killed by Noda Mi, influenced by Jia's schemes to destabilize the Lyucu.",
        links: [{ name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Noda Mi", path: "/characters/noda-mi" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Kriphi", path: "/places/kriphi" }]
    },
    {
        num: 40,
        title: "The Battle of Pan, Part I",
        date: "PAN: THE ELEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "This rebellion… is perhaps a misunderstanding—",
        speaker: "Palace Guard Commander",
        summary: "Phyro's attack on Pan begins with a series of diversions—ghostly illusions, minor acts of sabotage, and decoy airships—sowing chaos and confusion.  Aya Mazoti, in charge of the city's defense, incorrectly deduces that the main assault is coming from the west and sends the bulk of Pan's air force to intercept it.  Meanwhile, Mota Kiphi and other rebels seize the Examination Hall, creating a bright beacon of light to guide Phyro's true weapon. ",
        links: [{ name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "Pan", path: "/places/pan" }]
    },
    {
        num: 41,
        title: "Reunion",
        date: "TATEN-RYO-ALVOVO: THE ELEVENTH MONTH IN THE ELEVENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ.",
        quote: "Parents begin by dreaming their children, Mama, and in time, children dream their parents.",
        speaker: "Tanto Aragoz",
        summary: "After months of aimless wandering, Théra's band arrives at the thriving settlement founded by Razutana, Sataari, and the children at the City of Ghosts.  Théra is joyfully reunited with her sons, Tanto and Rokiri.  The settlement has embraced farming, using seeds recovered from the barrows, and has become a refuge for Agon, Lyucu, and others fleeing the civil war. Théra's followers urge her to use this new base to reclaim her title as Pékyu, but she remains weary of war. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Tanto Aragoz", path: "/characters/tanto-aragoz" }, { name: "Rokiri Aragoz", path: "/characters/rokiri-aragoz" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }, { name: "Sataari", path: "/characters/sataari" }]
    },
    {
        num: 42,
        title: "The Battle of Pan, Part II",
        date: "PAN: THE ELEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "We don’t fight to leave a name; we fight because it’s the right thing to do.",
        speaker: "Captain Atamu (in memory)",
        summary: "The main assault on Pan is revealed: a single, massive, self-propelled 'silkmotic dyran' missile carrying Phyro and Arona Taré.  It homes in on the beacon at the Examination Hall. Aya Mazoti intercepts it with a silkmotic bolt, and the resulting explosion allows Phyro and Arona to parachute into the Palace Garden undetected.  Inside the besieged Examination Hall, Mota Kiphi holds off the army single-handedly to buy Phyro more time, sacrificing his life in a heroic last stand. ",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Pan", path: "/places/pan" }]
    },
    {
        num: 43,
        title: "The Fall of Ukyu-Taasa",
        date: "KRIPHI: THE ELEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "Wolves must never become dogs.",
        speaker: "Noda Mi",
        summary: "In the final act of the Lyucu tragedy in Dara, the collaborator Noda Mi betrays and kills Cutanrovo Aga after she murders Tanvanaki.  Noda then murders a stunned Emperor Timu, intending to take Timu's children to Empress Jia as bargaining chips to secure his own future.  However, his plot is foiled by Goztan Ryoto and Timu's young daughter, Princess Dyana, who deciphers a hidden message in her father's final, bloody letter.  Goztan executes Noda, and with the Lyucu leadership annihilated and society collapsing, she and Dyana prepare to surrender to Dara. ",
        links: [{ name: "Tanvanaki", path: "/characters/tanvanaki" }, { name: "Cutanrovo Aga", path: "/characters/cutanrovo-aga" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Prince Timu", path: "/characters/prince-timu" }, { name: "Noda Mi", path: "/characters/noda-mi" }, { name: "Kriphi", path: "/places/kriphi" }]
    },
    {
        num: 44,
        title: "The Battle of Pan, Part III",
        date: "PAN: THE ELEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "You have to give me time and space to recover my wits.… After all, I’ve just gone through a whole cycle of life and death, of being mortal.",
        speaker: "Lutho",
        summary: "Admiral Temururi, leading the air force against Phyro's decoy fleet, realizes she faces unarmed ornithopter swarms. At the palace, Phyro, disguised as Cogo Yelu, is led by the Dyran Fins to Jia’s secret underground bunker. He confronts her, and she confesses to murdering his mother, Risana. As the Dyran Fins burst in, Arona Taré is killed. Phyro detonates a silkmotic device, killing himself and incapacitating Jia, whose condition remains uncertain. The Dyran Fins survive, but Jia later eliminates them to allow for an illusion of a coup by Cogo.",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Pan", path: "/places/pan" }, { name: "Silkmotic Force", path: "/concepts/silkmotic-force" }]
    },
    {
        num: 45,
        title: "Trace, Retrace",
        date: "TATEN-RYO-ALVOVO: THE ELEVENTH MONTH IN THE ELEVENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ.",
        quote: "The ear that hears vibrates in sympathy with the throat that sings.",
        speaker: "Sataari",
        summary: "In Théra's peaceful settlement, Çami Phithadapu invents a revolutionary device. By reversing the mechanism of the spirit-portrait taker, she creates an arucuro tocua machine that can 'play back' the recorded voice from a spirit portrait, like retracing steps in the mud.  This 'speaking bones' technology allows them to hear the voices of the dead. It is a profound breakthrough, allowing them to authenticate Takval's will and potentially share the true history of their ancestors with all the people of the scrublands. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Çami Phithadapu", path: "/characters/cami-phithadapu" }, { name: "Sataari", path: "/characters/sataari" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }, { name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }]
    },
    {
        num: 46,
        title: "Garinafins of Dara",
        date: "DEEP IN THE WISOTI MOUNTAINS: THE ELEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "My father spoke often of you. He always regretted not being able to carry out the proper duties of a son.",
        speaker: "Princess Dyana",
        summary: "In the aftermath of Phyro's death and Jia's incapacitation, Zen-Kara leads the remaining garinafin forces to Pan to assert her authority and prevent civil war. She negotiates with Cogo Yelu, surrendering the garinafin force to the Dandelion Throne to ensure stability, honoring Phyro's legacy through her strategic leadership.",
        links: [{ name: "Prince Phyro", path: "/characters/prince-phyro" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "Garinafin", path: "/concepts/garinafin" }]
    },
    {
        num: 47,
        title: "A Riddle",
        date: "KRIPHI: THE ELEVENTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "A well-crafted plan is indistinguishable from a miracle, especially if the plotter can be as cruel to herself as she is to her enemies.",
        speaker: "Cogo Yelu",
        summary: "The Lyucu delegation, led by Goztan Ryoto and Princess Dyana, arrives in Pan to negotiate a surrender.  They demand to see the emperor, believing only he can provide the antidote to the tolyusa-thirst.  Jia, still secretly in control, refuses to see them.  The chapter delves into the complex political situation, with Cogo Yelu slowly piecing together the full, shocking extent of Jia's decades-long plot to destroy the Lyucu from within using a combination of economic dependency and biological warfare. ",
        links: [{ name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "Tanvanaki", path: "/characters/tanvanaki" }]
    },
    {
        num: 48,
        title: "Books",
        date: "A SECLUDED SEASIDE VILLA BY LUTHO BEACH: THREE MONTHS EARLIER.",
        quote: "The people of Dara must be allowed to see for themselves and chart their own course, to tell their own story.",
        speaker: "Cogo Yelu",
        summary: "In another flashback, Lady Soto, hiding with Fara and Savo, decides to reveal the truth about Jia's crimes to the world by writing a book.  The main obstacle is distribution—a single manuscript can be easily suppressed. Savo, inspired by his time at the Temple of Still and Flowing Waters and Rati Yera's mass-production techniques, invents the 'book-mirror,' an automaton that can read a manuscript using oculium sensors and then create hundreds of perfect copies using an array of writing zithers.  This technological breakthrough allows Soto's book and other incriminating documents to be mass-produced and distributed secretly across Dara, setting the stage for Jia's downfall. ",
        links: [{ name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Kinri", path: "/characters/kinri" }, { name: "Soto Zyndu", path: "/characters/soto-zyndu" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 49,
        title: "Bookmaking",
        date: "THE SECLUDED SEASIDE VILLA BY LUTHO BEACH: THREE MONTHS EARLIER.",
        quote: "A mechanical wonder that reads and writes. Is there anything that cannot be accomplished by the ingenuity of the silkmotic engineer?",
        speaker: "Princess Fara",
        summary: "This chapter provides a detailed technical explanation of Savo's (Kinri's) invention, the book-mirror.  It details the collaboration between Savo, Fara, and Rati Yera. Fara's artistic insight into how knitting patterns break down images into grids inspires the design of the 'Bumblebee' reading head, which uses a grid of oculium sensors to perform optical logogram recognition.  Rati contributes her knowledge of mass production and automata. The invention represents a perfect fusion of art, engineering, and necessity, creating a tool that will democratize knowledge and change the course of history. ",
        links: [{ name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Kinri", path: "/characters/kinri" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }]
    },
    {
        num: 50,
        title: "Judgment",
        date: "PAN: THE TWELFTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "The people of Dara speak for themselves. I have never served you; I serve the people of Dara.",
        speaker: "Cogo Yelu",
        summary: "With Jia incapacitated and the truth of her actions revealed through Soto's mass-produced books, the Lords of Dara convene.  In a dramatic climax, Prime Minister Cogo Yelu leads a 'bloodless revolution' in the Grand Audience Hall, renouncing his service to Jia and kneeling before the empty, veiled Dandelion Throne.  The ministers and generals follow his lead. Aya Mazoti, faced with a choice between loyalty to Jia and loyalty to Dara, sides with the council.  Defeated, Jia reveals Phyro's body and accepts her fate. The council, led by Cogo and Zomi, decides to offer the throne to Princess Fara. ",
        links: [{ name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Gori Ruthi", path: "/characters/gori-ruthi" }]
    },
    {
        num: 51,
        title: "Ancestral Voices",
        date: "TATEN-RYO-ALVOVO: THE TWELFTH MONTH IN THE ELEVENTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ.",
        quote: "To tell a new story of where to go, we must first understand the story of where we came from.",
        speaker: "Sataari",
        summary: "Using their 'speaking bones' technology, Théra's group deciphers the ancient spirit portraits from the Great Barrow.  By combining fragments understood by speakers of various Lyucu and Agon topolects, they piece together the true history of their ancestors.  They learn that the Fifth Age civilization collapsed due to climate change, and that Afir and Kikisavo disagreed on how to adapt, leading to the schism between the nomadic (and later Lyucu) and settled (and later Agon) peoples. The story reveals that their entire culture is based on a misunderstanding of their past. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Çami Phithadapu", path: "/characters/cami-phithadapu" }, { name: "Sataari", path: "/characters/sataari" }, { name: "Razutana Pon", path: "/characters/razutana-pon" }, { name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }]
    },
    {
        num: 52,
        title: "A Tempest of Gold",
        date: "PAN: THE TWELFTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "You and I are both old and our consciences stained. It’s time for us to step aside for a new generation.",
        speaker: "Cogo Yelu",
        summary: "Cogo Yelu visits Jia in her confinement and reveals that he has pieced together the entirety of her secret war against the Lyucu, from the cultivated tolyusa to the manipulation of court politics.  He confronts her with the moral cost of her actions. Jia confesses to her long plot but argues for its necessity.  Cogo tells her that Fara and the new generation must be allowed to build a future based on truth, not lies, and demands the antidote to the tolyusa-thirst. Jia, finally defeated and grieving for her grandson Todyu, agrees. ",
        links: [{ name: "Jia Matiza", path: "/characters/jia-matiza" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }, { name: "Princess Fara", path: "/characters/princess-fara" }]
    },
    {
        num: 53,
        title: "Persuasion",
        date: "PAN: THE TWELFTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Where doubt ends, evil begins.",
        speaker: "Empress Shizona (Fara)",
        summary: "Zomi Kidosu formally asks Princess Fara to accept the throne.  Fara initially refuses, feeling inadequate and having no desire for power.  Zomi argues that Fara's very doubt and empathy make her the ideal ruler for a time of difficult moral choices.  The chapter explores Fara's internal journey as she grapples with the legacies of her family and accepts that she cannot avert her eyes from suffering. She realizes her unique perspective is what Dara needs to heal the wounds of war and forge a just peace with the Lyucu. ",
        links: [{ name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Pan", path: "/places/pan" }]
    },
    {
        num: 54,
        title: "Truth",
        date: "PAN: THE TWELFTH MONTH OF THE ELEVENTH YEAR OF THE REIGN OF SEASON OF STORMS AND THE REIGN OF AUDACIOUS FREEDOM.",
        quote: "My brother is not a symbol. He is my brother, and he is not a part of your family.",
        speaker: "Princess Dyana",
        summary: "The Lyucu delegation arrives in Pan, led by Princess Dyana, demanding to see the emperor and receive the antidote.  The negotiations stall. Todyu, Dyana's brother, dies from the tolyusa-thirst after setting his own quarters on fire in a final act of defiance.  Fara and Dyana have a tense and emotional confrontation over Todyu's body.  Fara forces Dyana to confront the full horror of the Lyucu atrocities, and Dyana, in turn, forces Fara to understand the Lyucu fear of cultural annihilation. This raw, honest exchange forms the basis for a potential true peace, as both leaders accept the painful truths of their peoples' histories. ",
        links: [{ name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Goztan Ryoto", path: "/characters/goztan-ryoto" }, { name: "Pan", path: "/places/pan" }]
    },
    {
        num: 55,
        title: "Surrender",
        date: "PAN: THE FIRST MONTH OF THE TWELFTH YEAR OF THE REIGN OF SEASON OF STORMS.",
        quote: "Welcome home, Zaza-tika.",
        speaker: "Empress Shizona (Fara)",
        summary: "Empress Shizona (Fara's reign name) and Pékyu Dyana reach the terms of the Lyucu surrender.  The plan for the reconstruction of Ukyu-taasa is debated in formal court, with difficult compromises made regarding land, justice, and cultural identity.  Zomi Kidosu resigns as Farsight Secretary to found a new kind of academy in Dasu.  Aya Mazoti is relieved of command and stripped of her military rank, a punishment she gratefully accepts as it frees her from her mother's shadow.  Finally, at a formal ceremony, Dyana surrenders to Empress Fara, who welcomes her not just as a defeated foe, but as family. ",
        links: [{ name: "Princess Fara", path: "/characters/princess-fara" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Aya Mazoti", path: "/characters/aya-mazoti" }, { name: "Cogo Yelu", path: "/characters/cogo-yelu" }]
    },
    {
        num: 56,
        title: "Speaking Bones",
        date: "UKYU-GONDÉ: THE THIRD MONTH IN THE TWELFTH YEAR AFTER THE DEPARTURE OF PRINCESS THÉRA FROM DARA FOR UKYU-GONDÉ.",
        quote: "The best way to honor our nature is to re-remember the future.",
        speaker: "Princess Théra",
        summary: "Théra's community in the City of Ghosts builds a fleet of large, autonomous, singing arucuro tocua beasts.  These 'speaking bones' wander the war-torn scrublands, broadcasting the true, recovered history of Afir and Kikisavo and calling all peoples—Lyucu, Agon, and others—to a new way of life based on peace, farming, and cooperation at Taten-ryo-runa, the 'Gathering of Life.'  The message of hope begins to spread, offering an alternative to the endless cycles of violence. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }]
    },
    {
        num: 57,
        title: "The Reign of Enduring Spring",
        date: "THE SHIPPING LANES BETWEEN RUI AND THE BIG ISLAND: THE FOURTH MONTH OF THE FOURTH YEAR IN THE REIGN OF ENDURING SPRING.",
        quote: "We survive, the Hundred Flowers. We survive.",
        speaker: "A Dasu villager",
        summary: "Years later, under Empress Shizona's 'Reign of Enduring Spring,' Dara and Ukyu-taasa are at peace and trade flourishes.  The chapter follows several vignettes: a mother and her mute son, traumatized by Lyucu atrocities, travel home after a year of healing; former soldiers and scholars head to Ukyu-taasa to start new lives and businesses, blending cultures; Widi Tucru and Rati Yera travel to the province to help build a more just society from the ground up, representing the ongoing work of mending a broken world. ",
        links: [{ name: "Empress Shizona", path: "/characters/princess-fara" }, { name: "The Blossom Gang", path: "/concepts/the-blossom-gang" }, { name: "Ukyu-taasa", path: "/places/ukyu-gonde" }]
    },
    {
        num: 58,
        title: "The Gathering of Life",
        date: "TATEN-RYO-RUNA: MANY, MANY WINTERS LATER.",
        quote: "A falling leaf yearns to return to the root.",
        speaker: "Princess Théra",
        summary: "Many years in the future, an aged and dying Pékyu-votan Théra prepares for her end at the peaceful and prosperous Taten-ryo-runa.  The people of the scrublands, now united in a diverse tapestry of cultures, come to pay their respects.  Théra reflects on her long life, her loves, her losses, and the family she left behind in Dara.  As she drifts into a final vision, she asks the gods for one last boon: to return home. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Taten-ryo-alvovo", path: "/places/taten-ryo-alvovo" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }]
    },
    {
        num: 59,
        title: "Homeland",
        date: "DARA: TWO YEARS LATER.",
        quote: "We’ve enlarged our souls with many loves and devoted ourselves to many duties, instead of consuming ourselves in one grand romance. We have more lines on our faces than there are breaths left in our lungs.",
        speaker: "Princess Théra",
        summary: "Théra, having journeyed across the sea on a magnificent arucuro tocua ship named *Dissolver of Sorrows*, finally returns to Dara, bringing the bones of those who died with her in exile.  At Lutho Beach, she is greeted by the Lords of Dara and her great-grandnephew, the new emperor. In an act of profound grace, she respectfully declines the throne.  The book ends with a deeply emotional reunion between the aged Théra and Zomi Kidosu, two lovers separated by a lifetime, finally at peace together under the stars of their shared homeland. ",
        links: [{ name: "Princess Théra", path: "/characters/princess-thera" }, { name: "Zomi Kidosu", path: "/characters/zomi-kidosu" }, { name: "Lutho", path: "/gods/lutho" }]
    }
];





export default function SpeakingBonesPage() {
    return (
        <div>
            <TopNavigation
                prevPage={{ title: "The Veiled Throne", path: "/books/the-veiled-throne" }}
                nextPage={null}
                returnLink={{ title: "Return to Series Overview", path: "/books" }}
            />

            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 flex-shrink-0">
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
                        <p className="text-lg text-text-light dark:text-text-light font-semibold mb-1">The Dandelion Dynasty #4</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary mb-6">Speaking Bones</h1>
                        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                            <p>The epic conclusion to the Dandelion Dynasty. The people of Dara, scattered and suffering under the Lyucu yoke, have not given up hope. In the clandestine shadows of the occupied territories and the hidden valleys of the empire, a new generation of leaders, scientists, and rebels rises. Led by the children of Kuni Garu, they must use every ounce of their ingenuity to devise new weapons and strategies to fight a seemingly invincible foe. The final war for the future of two peoples will be waged on land, at sea, in the skies, and in the hearts and minds of emperors and commoners alike, as the speaking bones of the past reveal a path to the future.</p>
                        </div>
                    </div>
                    <div className="bg-bg-card dark:bg-bg-card p-6 rounded-lg shadow-md border border-border-secondary dark:border-border-primary">
                        <h3 className="font-bold text-xl mb-4 text-link dark:text-link-dark">Book Details</h3>
                        <ul className="space-y-2 text-base text-text-secondary dark:text-text-secondary">
                            <li><strong>Author:</strong> Ken Liu</li>
                            <li><strong>Published:</strong> June 21, 2022 by Saga Press</li>
                            <li><strong>Pages:</strong> 992 (Hardcover)</li>
                            <li><strong>ISBN:</strong> 9781982148973</li>
                        </ul>
                        <div className="border-t border-border-secondary dark:border-border-primary mt-4 pt-4 space-y-2">
                            <a href="https://www.goodreads.com/book/show/55596771-speaking-bones" target="_blank" rel="noopener noreferrer" className="text-link dark:text-link-dark hover:underline inline-flex items-center text-base">
                                View on Goodreads ↗
                            </a>
                            <br />
                            <a href="https://amzn.to/41kbNi5" target="_blank" rel="noopener noreferrer" className="text-link dark:text-link-dark hover:underline inline-flex items-center text-base">
                                Purchase on Amazon ↗
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
                            <a href={`#chapter-${chapter.num}`} className="text-primary dark:text-link hover:text-link-hover dark:hover:text-link-dark hover:underline transition-colors">
                                {typeof chapter.num === 'string' ? chapter.num : String(chapter.num).padStart(2, '0')} - {chapter.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* --- CHAPTER SUMMARIES --- */}
            <div className="space-y-12">
                {chapters.map(chapter => (
                    <div key={chapter.num} id={`chapter-${chapter.num}`} className="pt-4 scroll-mt-20">
                        <div className="border-l-4 border-primary-light pl-4 mb-4">
                            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary">{typeof chapter.num === 'string' ? chapter.num : String(chapter.num).padStart(2, '0')} - {chapter.title}</h3>
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
                                    <Link key={link.name} href={link.path} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <BottomNavigation
                prevItem={{ title: "The Veiled Throne", path: "/books/the-veiled-throne" }}
                nextItem={null}
                bottomNavType="book"
            />
        </div>
    );
}