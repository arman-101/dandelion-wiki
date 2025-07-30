import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Prince Phyro",
    image: "/characters/prince-phyro.png",
    introduction: "Prince Phyro is the son of Emperor Ragin and Consort Risana. He is a charismatic and martially gifted young man who embodies the heroic, individualistic ideals of his father's generation.",
    infoBox: {
        aliases: "Phyro Garu",
        occupation: "Prince of Dara, General",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Alive",
        gender: "Male",
        relatives: "Kuni Garu (father), Consort Risana (mother), Timu (half-brother), Théra (half-sister), Fara (half-sister)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: "Daran",
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Phyro is handsome, charming, and a natural warrior. He is more interested in martial glory, camaraderie, and direct action than in books or politics. He shares his father's charisma and ability to inspire loyalty in his men but lacks Kuni's cunning and Jia's strategic foresight. He represents the 'Swords' faction of the court, favoring the strength and honor of the military old guard." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "Upbringing in Pan",
            summary: [
                { type: 'text', content: "Phyro grew up idolizing the heroes of his father's generation, like Mata Zyndu and Mün Çakri. He often found himself at odds with his more scholarly half-brother, Timu, representing the growing rift between the 'Swords' and the 'Abacus' at court." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/wall-of-storms#chapter-8" } },
            ]
        },
        {
            era: "Pacifying Tunoa",
            summary: [
                { type: 'text', content: "As part of the 'Emperor's Shadows' plan, Phyro was sent to the Tunoa Islands to quell the Hegemon Cults. He proved to be a capable and brave commander, earning the respect of his soldiers. He was eventually saved from being overwhelmed by his sister Théra's timely intervention with her counter-mirror." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 22, link: "/books/wall-of-storms#chapter-22" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/wall-of-storms#chapter-27" } },
            ]
        },
    ]
};

export default function PrincePhyroPage() { return <CharacterPageTemplate characterData={characterData} />; }