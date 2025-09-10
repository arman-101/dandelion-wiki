'use client';

import Link from 'next/link';

interface GlossaryTerm {
    term: string;
    definition: string;
    book: string;
    culture?: string;
    wikiLink?: string;
}

// Create a mapping of terms to their wiki links
const termWikiLinks: Record<string, string> = {
    "Cruben": "/concepts/cruben",
    "Garinafin": "/concepts/garinafin", 
    "Pawi": "/concepts/pawi",
    "The Wall of Storms": "/concepts/wall-of-storms",
    "The Lyucu": "/concepts/lyucu",
    "The Agon": "/concepts/agon",
    "Arucuro tocua": "/concepts/arucuro-tocua-beasts",
    "The Grand Examination": "/concepts/grand-examination",
    "Airships": "/concepts/airships",
    "Lift Gas": "/concepts/lift-gas",
    "Silkmotic Force": "/concepts/silkmotic-force",
    "Corvée Labor": "/concepts/corvee-labor",
    "Cultural Exchange": "/concepts/cultural-exchange",
    "The Blossom Gang": "/concepts/the-blossom-gang",
    "Resistance Movement": "/concepts/resistance-movement",
    "The Dandelion": "/concepts/dandelion",
    "The Chrysanthemum": "/concepts/chrysanthemum",
    "Swords vs. Abacus": "/concepts/swords-vs-abacus",
    "Gitre Uthu": "/concepts/gitre-uthu"
};

const glossaryTerms: GlossaryTerm[] = [
    // The Grace of Kings
    { term: "Cruben", definition: "a scaled whale with a single horn protruding from its head; symbol of imperial power", book: "The Grace of Kings", wikiLink: termWikiLinks["Cruben"] },
    { term: "Cüpa", definition: "a game played with black and white stones on a grid", book: "The Grace of Kings" },
    { term: "Dyran", definition: "a flying fish, symbol of femininity and sign of good fortune. It is covered by rainbow-colored scales and has a sharp beak", book: "The Grace of Kings" },
    { term: "Géüpa", definition: "an informal sitting position where the legs are crossed and folded under the body, with each foot tucked under the opposite thigh", book: "The Grace of Kings" },
    { term: "Jiri", definition: "a woman's bow where the hands are crossed in front of the chest in a gesture of respect", book: "The Grace of Kings" },
    { term: "Kunikin", definition: "a large, three-legged drinking vessel", book: "The Grace of Kings" },
    { term: "Mingén falcon", definition: "a species of extraordinarily large falcon native to the island of Rui", book: "The Grace of Kings" },
    { term: "Mipa rari", definition: "a formal kneeling position where the back is kept straight and weight is evenly distributed between the knees and toes", book: "The Grace of Kings" },
    { term: "Ogé", definition: "drops of sweat", book: "The Grace of Kings" },
    { term: "Pawi", definition: "animal aspects of the gods of Dara", book: "The Grace of Kings", wikiLink: termWikiLinks["Pawi"] },
    { term: "Rénga", definition: "honorific used to address the emperor", book: "The Grace of Kings" },
    { term: "Thakrido", definition: "an extremely informal sitting position where one's legs are stretched out in front; used only with intimates or social inferiors", book: "The Grace of Kings" },

    // The Wall of Storms - Dara
    { term: "Anojiti", definition: "a neologism formed from Classical Ano roots to describe the people of Dara, created in response to the Lyucu invasion", book: "The Wall of Storms", culture: "Dara" },
    { term: "Cashima", definition: "a scholar who has passed the second level of the Imperial examinations. The Classical Ano word means \"practitioner.\" A cashima is allowed to wear his or her hair in a triple scroll-bun and carry a sword. Cashima can also serve as clerks for magistrates and mayors", book: "The Wall of Storms", culture: "Dara" },
    { term: "Cruben", definition: "a scaled whale with a single horn protruding from its head; symbol of Imperial power", book: "The Wall of Storms", culture: "Dara", wikiLink: termWikiLinks["Cruben"] },
    { term: "Cüpa", definition: "a game played with black and white stones on a grid", book: "The Wall of Storms", culture: "Dara" },
    { term: "Dyran", definition: "a flying fish, symbol of femininity and sign of good fortune. It is covered by rainbow-colored scales and has a sharp beak", book: "The Wall of Storms", culture: "Dara" },
    { term: "Firoa", definition: "a cashima who places within the top one hundred in the Grand Examination is given this rank. The Classical Ano word means \"a (good) match.\" Based on their talents, the firoa are either given positions in Imperial administration, assigned to work for various enfeoffed nobles, or promoted to engage in further study or research with the Imperial Academy", book: "The Wall of Storms", culture: "Dara" },
    { term: "Géüpa", definition: "an informal sitting position where the legs are crossed and folded under the body, with each foot tucked under the opposite thigh", book: "The Wall of Storms", culture: "Dara" },
    { term: "Jiri", definition: "a woman's bow where the hands are crossed in front of the chest in a gesture of respect", book: "The Wall of Storms", culture: "Dara" },
    { term: "Kunikin", definition: "a large, three-legged drinking vessel", book: "The Wall of Storms", culture: "Dara" },
    { term: "Mingén falcon", definition: "a species of extraordinarily large falcon native to the island of Rui", book: "The Wall of Storms", culture: "Dara" },
    { term: "Mipa rari", definition: "a formal kneeling position where the back is kept straight and weight is evenly distributed between the knees and toes", book: "The Wall of Storms", culture: "Dara" },
    { term: "Mutagé", definition: "variously translated as \"faith-mercy\" or \"loyalty-benefaction,\" one of the most important virtues to the ancient Ano. It refers to a dedication to the welfare of the people as a whole, one that transcends self interest or concern for family and clan", book: "The Wall of Storms", culture: "Dara" },
    { term: "Ogé", definition: "drops of sweat. The Ogé Islands were supposedly formed from drops of sweat from the god Rufizo", book: "The Wall of Storms", culture: "Dara" },
    { term: "Pana méji", definition: "a scholar who has done especially well in the Grand Examination and is given the chance to participate in the Palace Examination, where the emperor himself assesses the qualities of the candidates and assigns them a rank. The Classical Ano phrase means \"on the list.\"", book: "The Wall of Storms", culture: "Dara" },
    { term: "Pawi", definition: "animal aspects of the gods of Dara", book: "The Wall of Storms", culture: "Dara", wikiLink: termWikiLinks["Pawi"] },
    { term: "Raye", definition: "descendants of prisoners of war, the lowest social caste in the days of the Tiro states", book: "The Wall of Storms", culture: "Dara" },
    { term: "Rénga", definition: "honorific used to address the emperor", book: "The Wall of Storms", culture: "Dara" },
    { term: "Thakrido", definition: "an extremely informal sitting position where one's legs are stretched out in front; used only with intimates or social inferiors", book: "The Wall of Storms", culture: "Dara" },
    { term: "Thasé-teki", definition: "literally \"winter worm, summer grass,\" a hybrid organism consisting of a fungus and a particular species of underground caterpillar that the fungus infects. The mycelia slowly spread throughout the body of the caterpillar, eventually killing it to sprout aboveground in a grass-like stroma. Called \"caterpillar grass\" in the vernacular, it has many uses in herbal medicine", book: "The Wall of Storms", culture: "Dara" },
    { term: "-Tika", definition: "suffix expressing endearment toward younger family members", book: "The Wall of Storms", culture: "Dara" },
    { term: "Toko dawiji", definition: "a scholar who has passed the first level of the Imperial examinations. The Classical Ano phrase means \"the elevated.\" A toko dawiji is allowed to wear his or her hair in a double scroll-bun", book: "The Wall of Storms", culture: "Dara" },
    { term: "Tunoa", definition: "grapes", book: "The Wall of Storms", culture: "Dara" },
    { term: "Zamaki", definition: "a game of war between opposing armies composed of tokens representing pieces such as the king, consort, ship, advisor, assassin, horse, kite, and so on", book: "The Wall of Storms", culture: "Dara" },

    // The Wall of Storms - Lyucu/Agon
    { term: "Arucuro sana", definition: "literally \"talking bones\"; logograms constructed from animal parts using principles derived from arucuro tocua as well as Classical Ano", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Arucuro tocua", definition: "literally \"living bones\"; articulated creations made from bones, sinew, horn, antler, and other animal parts", book: "The Wall of Storms", culture: "Lyucu/Agon", wikiLink: termWikiLinks["Arucuro tocua"] },
    { term: "Garinafin", definition: "the flying, fire-breathing beast that is the core of Lyucu culture. Its body is about the size of three elephants, with a long tail, two clawed feet, a pair of great, leathery wings, and a slender, snakelike neck topped with a deerlike, antlered head", book: "The Wall of Storms", culture: "Lyucu/Agon", wikiLink: termWikiLinks["Garinafin"] },
    { term: "Kyoffir", definition: "an alcoholic drink made from fermented garinafin milk", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Pédiato savaga", definition: "literally \"stomach journey,\" the scrublands funeral practice of leaving a body exposed to the elements and scavenging animals", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Pékyu", definition: "title given to the leader of the Lyucu or Agon", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Pékyu-taasa", definition: "title given to the children of pékyus; sometimes translated into Dara as \"prince\" or \"princess.\"", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Tanto-lyu-naro", definition: "tribeless wanderers of Ukyu-Gondé who do not follow the ways of either the Lyucu or the Agon and who renounce all warmaking. Literally \"warriors who do not make war.\"", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Togaten", definition: "literally \"runt\"; a slur used against those of mixed Lyucu and native Dara ancestry", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Tolyusa", definition: "a plant with hallucinogenic properties; the berries are essential for the garinafins to breed successfully", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Votan-ru-taasa", definition: "\"older-and-younger\"; brothers", book: "The Wall of Storms", culture: "Lyucu/Agon" },
    { term: "Votan-sa-taasa", definition: "\"older-and-younger\"; sisters (or siblings)", book: "The Wall of Storms", culture: "Lyucu/Agon" },

    // The Veiled Throne - Dara
    { term: "Anojiti", definition: "a neologism formed from Classical Ano roots to describe the people of Dara, created in response to the Lyucu invasion", book: "The Veiled Throne", culture: "Dara" },
    { term: "Cashima", definition: "a scholar who has passed the second level of the Imperial examinations. The Classical Ano word means \"practitioner.\" A cashima is allowed to wear his or her hair in a triple scroll-bun and carry a sword. Cashima can also serve as clerks for magistrates and mayors", book: "The Veiled Throne", culture: "Dara" },
    { term: "Cruben", definition: "a scaled whale with a single horn protruding from its head; symbol of Imperial power", book: "The Veiled Throne", culture: "Dara", wikiLink: termWikiLinks["Cruben"] },
    { term: "Cüpa", definition: "a game played with black and white stones on a grid", book: "The Veiled Throne", culture: "Dara" },
    { term: "Dyran", definition: "a flying fish, symbol of femininity and sign of good fortune. It is covered by rainbow-colored scales and has a sharp beak", book: "The Veiled Throne", culture: "Dara" },
    { term: "Firoa", definition: "a cashima who places within the top one hundred in the Grand Examination is given this rank. The Classical Ano word means \"a (good) match.\" Based on their talents, the firoa are either given positions in Imperial administration, assigned to work for various enfeoffed nobles, or promoted to engage in further study or research with the Imperial Academy", book: "The Veiled Throne", culture: "Dara" },
    { term: "Géüpa", definition: "an informal sitting position where the legs are crossed and folded under the body, with each foot tucked under the opposite thigh", book: "The Veiled Throne", culture: "Dara" },
    { term: "Jiri", definition: "a woman's bow where the hands are crossed in front of the chest in a gesture of respect", book: "The Veiled Throne", culture: "Dara" },
    { term: "Kunikin", definition: "a large, three-legged drinking vessel", book: "The Veiled Throne", culture: "Dara" },
    { term: "Mingén falcon", definition: "a species of extraordinarily large falcon native to the island of Rui", book: "The Veiled Throne", culture: "Dara" },
    { term: "Mipa rari", definition: "a formal kneeling position where the back is kept straight and weight is evenly distributed between the knees and toes", book: "The Veiled Throne", culture: "Dara" },
    { term: "Mutagé", definition: "variously translated as \"faith-mercy\" or \"loyalty-benefaction,\" one of the most important virtues to the ancient Ano. It refers to a dedication to the welfare of the people as a whole, one that transcends self interest or concern for family and clan", book: "The Veiled Throne", culture: "Dara" },
    { term: "Ogé", definition: "drops of sweat. The Ogé Islands were supposedly formed from drops of sweat from the god Rufizo", book: "The Veiled Throne", culture: "Dara" },
    { term: "Pana méji", definition: "a scholar who has done especially well in the Grand Examination and is given the chance to participate in the Palace Examination, where the emperor himself assesses the qualities of the candidates and assigns them a rank. The Classical Ano phrase means \"on the list.\"", book: "The Veiled Throne", culture: "Dara" },
    { term: "Pawi", definition: "animal aspects of the gods of Dara", book: "The Veiled Throne", culture: "Dara", wikiLink: termWikiLinks["Pawi"] },
    { term: "Raye", definition: "descendants of prisoners of war, the lowest social caste in the days of the Tiro states", book: "The Veiled Throne", culture: "Dara" },
    { term: "Rénga", definition: "honorific used to address the emperor", book: "The Veiled Throne", culture: "Dara" },
    { term: "Thakrido", definition: "an extremely informal sitting position where one's legs are stretched out in front; used only with intimates or social inferiors", book: "The Veiled Throne", culture: "Dara" },
    { term: "Thasé-teki", definition: "literally \"winter worm, summer grass,\" a hybrid organism consisting of a fungus and a particular species of underground caterpillar that the fungus infects. The mycelia slowly spread throughout the body of the caterpillar, eventually killing it to sprout aboveground in a grass-like stroma. Called \"caterpillar grass\" in the vernacular, it has many uses in herbal medicine", book: "The Veiled Throne", culture: "Dara" },
    { term: "-Tika", definition: "suffix expressing endearment toward younger family members", book: "The Veiled Throne", culture: "Dara" },
    { term: "Toko dawiji", definition: "a scholar who has passed the first level of the Imperial examinations. The Classical Ano phrase means \"the elevated.\" A toko dawiji is allowed to wear his or her hair in a double scroll-bun", book: "The Veiled Throne", culture: "Dara" },
    { term: "Tunoa", definition: "grapes", book: "The Veiled Throne", culture: "Dara" },
    { term: "Zamaki", definition: "a game of war between opposing armies composed of tokens representing pieces such as the king, consort, ship, advisor, assassin, horse, kite, and so on", book: "The Veiled Throne", culture: "Dara" },

    // The Veiled Throne - Lyucu/Agon
    { term: "Arucuro sana", definition: "literally \"talking bones\"; logograms constructed from animal parts using principles derived from arucuro tocua as well as Classical Ano", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Arucuro tocua", definition: "literally \"living bones\"; articulated creations made from bones, sinew, horn, antler, and other animal parts", book: "The Veiled Throne", culture: "Lyucu/Agon", wikiLink: termWikiLinks["Arucuro tocua"] },
    { term: "Garinafin", definition: "the flying, fire-breathing beast that is the core of Lyucu culture. Its body is about the size of three elephants, with a long tail, two clawed feet, a pair of great, leathery wings, and a slender, snakelike neck topped with a deerlike, antlered head", book: "The Veiled Throne", culture: "Lyucu/Agon", wikiLink: termWikiLinks["Garinafin"] },
    { term: "Kyoffir", definition: "an alcoholic drink made from fermented garinafin milk", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Pédiato savaga", definition: "literally \"stomach journey,\" the scrublands funeral practice of leaving a body exposed to the elements and scavenging animals", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Pékyu", definition: "title given to the leader of the Lyucu or Agon", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Pékyu-taasa", definition: "title given to the children of pékyus; sometimes translated into Dara as \"prince\" or \"princess.\"", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Tanto-lyu-naro", definition: "tribeless wanderers of Ukyu-Gondé who do not follow the ways of either the Lyucu or the Agon and who renounce all warmaking. Literally \"warriors who do not make war.\"", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Togaten", definition: "literally \"runt\"; a slur used against those of mixed Lyucu and native Dara ancestry", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Tolyusa", definition: "a plant with hallucinogenic properties; the berries are essential for the garinafins to breed successfully", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Votan-ru-taasa", definition: "\"older-and-younger\"; brothers", book: "The Veiled Throne", culture: "Lyucu/Agon" },
    { term: "Votan-sa-taasa", definition: "\"older-and-younger\"; sisters (or siblings)", book: "The Veiled Throne", culture: "Lyucu/Agon" },

    // Speaking Bones - Dara
    { term: "Anojiti", definition: "a neologism formed from Classical Ano roots to describe the people of Dara, created in response to the Lyucu invasion", book: "Speaking Bones", culture: "Dara" },
    { term: "Cashima", definition: "a scholar who has passed the second level of the Imperial examinations. The Classical Ano word means \"practitioner.\" A cashima is allowed to wear his or her hair in a triple scroll-bun and carry a sword. Cashima can also serve as clerks for magistrates and mayors", book: "Speaking Bones", culture: "Dara" },
    { term: "Cruben", definition: "a scaled whale with a single horn protruding from its head; symbol of Imperial power", book: "Speaking Bones", culture: "Dara", wikiLink: termWikiLinks["Cruben"] },
    { term: "Cüpa", definition: "a game played with black and white stones on a grid", book: "Speaking Bones", culture: "Dara" },
    { term: "Dyran", definition: "a flying fish, symbol of femininity and sign of good fortune. It is covered by rainbow-colored scales and has a sharp beak", book: "Speaking Bones", culture: "Dara" },
    { term: "Firoa", definition: "a cashima who places within the top one hundred in the Grand Examination is given this rank. The Classical Ano word means \"a (good) match.\" Based on their talents, the firoa are either given positions in Imperial administration, assigned to work for various enfeoffed nobles, or promoted to engage in further study or research with the Imperial Academy", book: "Speaking Bones", culture: "Dara" },
    { term: "Géüpa", definition: "an informal sitting position where the legs are crossed and folded under the body, with each foot tucked under the opposite thigh", book: "Speaking Bones", culture: "Dara" },
    { term: "Jiri", definition: "a woman's bow where the hands are crossed in front of the chest in a gesture of respect", book: "Speaking Bones", culture: "Dara" },
    { term: "Kunikin", definition: "a large, three-legged drinking vessel", book: "Speaking Bones", culture: "Dara" },
    { term: "Mingén falcon", definition: "a species of extraordinarily large falcon native to the island of Rui", book: "Speaking Bones", culture: "Dara" },
    { term: "Mipa rari", definition: "a formal kneeling position where the back is kept straight and weight is evenly distributed between the knees and toes", book: "Speaking Bones", culture: "Dara" },
    { term: "Mutagé", definition: "variously translated as \"faith-mercy\" or \"loyalty-benefaction,\" one of the most important virtues to the ancient Ano. It refers to a dedication to the welfare of the people as a whole, one that transcends self interest or concern for family and clan", book: "Speaking Bones", culture: "Dara" },
    { term: "Ogé", definition: "drops of sweat. The Ogé Islands were supposedly formed from drops of sweat from the god Rufizo", book: "Speaking Bones", culture: "Dara" },
    { term: "Pana méji", definition: "a scholar who has done especially well in the Grand Examination and is given the chance to participate in the Palace Examination, where the emperor himself assesses the qualities of the candidates and assigns them a rank. The Classical Ano phrase means \"on the list.\"", book: "Speaking Bones", culture: "Dara" },
    { term: "Pawi", definition: "animal aspects of the gods of Dara", book: "Speaking Bones", culture: "Dara", wikiLink: termWikiLinks["Pawi"] },
    { term: "Raye", definition: "descendants of prisoners of war, the lowest social caste in the days of the Tiro states", book: "Speaking Bones", culture: "Dara" },
    { term: "Rénga", definition: "honorific used to address the emperor", book: "Speaking Bones", culture: "Dara" },
    { term: "Thakrido", definition: "an extremely informal sitting position where one's legs are stretched out in front; used only with intimates or social inferiors", book: "Speaking Bones", culture: "Dara" },
    { term: "Thasé-teki", definition: "literally \"winter worm, summer grass,\" a hybrid organism consisting of a fungus and a particular species of underground caterpillar that the fungus infects. The mycelia slowly spread throughout the body of the caterpillar, eventually killing it to sprout aboveground in a grass-like stroma. Called \"caterpillar grass\" in the vernacular, it has many uses in herbal medicine", book: "Speaking Bones", culture: "Dara" },
    { term: "-Tika", definition: "suffix expressing endearment toward younger family members", book: "Speaking Bones", culture: "Dara" },
    { term: "Toko dawiji", definition: "a scholar who has passed the first level of the Imperial examinations. The Classical Ano phrase means \"the elevated.\" A toko dawiji is allowed to wear his or her hair in a double scroll-bun", book: "Speaking Bones", culture: "Dara" },
    { term: "Tunoa", definition: "grapes", book: "Speaking Bones", culture: "Dara" },
    { term: "Zamaki", definition: "a game of war between opposing armies composed of tokens representing pieces such as the king, consort, ship, advisor, assassin, horse, kite, and so on", book: "Speaking Bones", culture: "Dara" },

    // Speaking Bones - Lyucu/Agon
    { term: "Arucuro sana", definition: "literally \"talking bones\"; logograms constructed from animal parts using principles derived from arucuro tocua as well as Classical Ano", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Arucuro tocua", definition: "literally \"living bones\"; articulated creations made from bones, sinew, horn, antler, and other animal parts", book: "Speaking Bones", culture: "Lyucu/Agon", wikiLink: termWikiLinks["Arucuro tocua"] },
    { term: "Garinafin", definition: "the flying, fire-breathing beast that is the core of Lyucu culture. Its body is about the size of three elephants, with a long tail, two clawed feet, a pair of great, leathery wings, and a slender, snakelike neck topped with a deerlike, antlered head", book: "Speaking Bones", culture: "Lyucu/Agon", wikiLink: termWikiLinks["Garinafin"] },
    { term: "Kyoffir", definition: "an alcoholic drink made from fermented garinafin milk", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Pédiato savaga", definition: "literally \"stomach journey,\" the scrublands funeral practice of leaving a body exposed to the elements and scavenging animals", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Pékyu", definition: "title given to the leader of the Lyucu or Agon", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Pékyu-taasa", definition: "title given to the children of pékyus; sometimes translated into Dara as \"prince\" or \"princess.\"", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Tanto-lyu-naro", definition: "tribeless wanderers of Ukyu-Gondé who do not follow the ways of either the Lyucu or the Agon and who renounce all warmaking. Literally \"warriors who do not make war.\"", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Togaten", definition: "literally \"runt\"; a slur used against those of mixed Lyucu and native Dara ancestry", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Tolyusa", definition: "a plant with hallucinogenic properties; the berries are essential for the garinafins to breed successfully", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Votan-ru-taasa", definition: "\"older-and-younger\"; brothers", book: "Speaking Bones", culture: "Lyucu/Agon" },
    { term: "Votan-sa-taasa", definition: "\"older-and-younger\"; sisters (or siblings)", book: "Speaking Bones", culture: "Lyucu/Agon" },
];

const bookOrder = [
    "The Grace of Kings",
    "The Wall of Storms", 
    "The Veiled Throne",
    "Speaking Bones"
];

const bookLinks = {
    "The Grace of Kings": "/books/the-grace-of-kings",
    "The Wall of Storms": "/books/the-wall-of-storms",
    "The Veiled Throne": "/books/the-veiled-throne",
    "Speaking Bones": "/books/speaking-bones"
};

export default function GlossaryClient() {
    // Remove duplicates by creating a unique set based on term + culture
    const uniqueTerms = glossaryTerms.reduce((acc, term) => {
        const key = `${term.term}-${term.culture || 'general'}`;
        if (!acc.has(key)) {
            acc.set(key, term);
        }
        return acc;
    }, new Map<string, GlossaryTerm>());

    const deduplicatedTerms = Array.from(uniqueTerms.values());

    // Group terms by book and culture
    const groupedTerms: Record<string, Record<string, GlossaryTerm[]>> = {};
    
    bookOrder.forEach(book => {
        const bookTerms = deduplicatedTerms.filter(term => term.book === book);
        if (bookTerms.length > 0) {
            groupedTerms[book] = {};
            bookTerms.forEach(term => {
                const culture = term.culture || 'General';
                if (!groupedTerms[book][culture]) {
                    groupedTerms[book][culture] = [];
                }
                groupedTerms[book][culture].push(term);
            });
        }
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary mb-4 border-b pb-4">
                    Glossary
                </h1>
                <p className="text-text-secondary dark:text-text-light text-lg leading-relaxed">
                    A comprehensive glossary of terms, concepts, and vocabulary from Ken Liu&apos;s Dandelion Dynasty series. 
                    This collection includes Daran, Lyucu, and Agon terminology, organized by book and culture.
                </p>
            </div>

            <div className="space-y-12">
                {Object.entries(groupedTerms).map(([book, cultures]) => (
                    <div key={book} className="space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-text-primary border-b pb-2">
                            <Link 
                                href={bookLinks[book as keyof typeof bookLinks]} 
                                className="text-link hover:text-link-hover dark:text-link-dark hover:dark:text-accent-pink transition-colors duration-200"
                            >
                                {book}
                            </Link>
                        </h2>
                        
                        {Object.entries(cultures).map(([culture, terms]) => (
                            <div key={`${book}-${culture}`} className="space-y-4">
                                {culture !== 'General' && (
                                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary dark:text-text-primary">
                                        {culture}
                                    </h3>
                                )}
                                
                                <div className="grid gap-4">
                                    {terms.map((term, index) => (
                                        <div 
                                            key={`${term.term}-${index}`}
                                            className="bg-bg-card dark:bg-bg-card rounded-lg p-6 shadow-sm border border-border-primary dark:border-border-secondary"
                                        >
                                            <div className="flex flex-col gap-2">
                                                <dt className="font-bold text-lg text-primary dark:text-primary-light">
                                                    {term.wikiLink ? (
                                                        <Link 
                                                            href={term.wikiLink}
                                                            className="text-primary hover:text-link-hover dark:text-primary-light hover:dark:text-accent-pink transition-colors duration-200"
                                                        >
                                                            {term.term}
                                                        </Link>
                                                    ) : (
                                                        term.term
                                                    )}
                                                </dt>
                                                <dd className="text-text-secondary dark:text-text-light leading-relaxed">
                                                    {term.definition}
                                                </dd>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}