import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Princess Théra",
    image: "/characters/princess-thera.png",
    introduction: "Princess Théra is the eldest daughter of Emperor Ragin and Empress Jia. A brilliant and adventurous young woman, she rejects traditional courtly pursuits in favor of engineering, strategy, and the sciences, becoming a pivotal figure in the defense of Dara.",
    infoBox: {
        aliases: "Théra Garu",
        occupation: "Princess of Dara, Inventor, Strategist",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Alive",
        gender: "Female",
        relatives: "Kuni Garu (father), Jia Matiza (mother), Timu (brother), Phyro (brother), Fara (sister)",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: "Daran",
        firstAppeared: { text: "The Wall of Storms", link: "/books/wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Théra is described as having her mother's red hair and her father's sly, intelligent eyes. She is fiercely independent, intellectually curious, and impatient with the constraints of tradition. She possesses a natural talent for engineering and a keen strategic mind, often seeing practical solutions that elude more conventional thinkers. While she can be headstrong, she is also deeply loyal to her family and dedicated to protecting her people." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/wall-of-storms#chapter-1" } },
    ],
    history: [
        {
            era: "Early Life in Pan",
            summary: [
                { type: 'text', content: "Growing up in the Imperial Palace, Théra often chafed under the tutelage of Zato Ruthi, preferring to study Luan Zya's tales of invention and adventure. Her cleverness was apparent from a young age, as shown when she helped save Zomi Kidosu from a bully in a tavern." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/wall-of-storms#chapter-1" } },
                { type: 'text', content: " Her father, Emperor Ragin, secretly saw her as his most capable child and his desired heir, a radical idea in the patriarchal society of Dara." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 18, link: "/books/wall-of-storms#chapter-18" } },
            ]
        },
        {
            era: "The Hegemon Cults",
            summary: [
                { type: 'text', content: "When the Hegemon Cults rose in Tunoa, using 'magic mirrors' to project an image of the deceased Mata Zyndu, Théra was the first to suspect a scientific explanation. Guided by the gods Tututika and Fithowéo, she deduced the principles of wave interference and constructed her own counter-mirror. She dramatically unveiled her invention at the Siege of Zyndu Castle, projecting an image of her father embracing the Hegemon, instantly shattering the rebels' faith and ending the uprising." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 24, link: "/books/wall-of-storms#chapter-24" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/wall-of-storms#chapter-27" } },
            ]
        },
    ]
};

export default function PrincessTheraPage() { return <CharacterPageTemplate characterData={characterData} />; }