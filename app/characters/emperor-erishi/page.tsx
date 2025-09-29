


import type { Metadata } from 'next';
import { Character } from '../../data/wiki-data';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import EmperorErishiClient from './EmperorErishiClient';

const characterData: Character = {
    name: "Emperor Erishi",
    introduction: "The second and last ruler of the Xana Dynasty, Emperor Erishi (born Prince Loshi) was a weak, foolish, and decadent boy-emperor whose complete detachment from reality hastened the collapse of his father's empire.",
    infoBox: {
        aliases: "Prince Loshi",
        occupation: "Emperor of Dara",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Deceased",
        gender: "Male",
        relatives: [
            { text: "Emperor Mapidere (father)", link: "/characters/emperor-mapidere" },
            { text: "Crown Prince Pulo (brother)", link: "" }
        ],
        affiliation: "House of Xana, Xana Empire",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Erishi is portrayed as a sheltered and childish youth, completely oblivious to the suffering of his people and the political turmoil consuming his empire. His primary concerns are lavish, absurd fantasies, such as building a maze made of meat or filling the seas of his giant map room with real wine." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
        { type: 'text', content: "He is easily manipulated by his powerful advisors, Lügo Crupo and Goran Pira, and shows no capacity or interest in the duties of governance. His foolishness is legendary, exemplified by his infamous quote while dismissing reports of famine: 'Why do they insist on eating rice? Meat is so much better!'" },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Emperor Erishi's brief and disastrous reign serves as the final, pathetic chapter of the Xana Dynasty." }
            ]
        },
        {
            era: "A Puppet on the Throne",
            summary: [
                { type: 'text', content: "Prince Loshi was placed on the throne as Emperor Erishi through the machinations of Goran Pira and Lügo Crupo. They forged a decree from the dying Emperor Mapidéré, had the true heir, Crown Prince Pulo, executed, and installed the weaker, more pliable Loshi in his place." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'text', content: "His reign was marked by widespread famine and rebellion, to which he remained utterly indifferent. He spent his days absorbed in childish projects while his regents wielded the true power." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 9, link: "/books/the-grace-of-kings#chapter-9" } },
                { type: 'text', content: "After Kuni Garu's forces captured Pan, Erishi was taken prisoner, wetting himself in fear. He remained a terrified pawn until Mata Zyndu, in a fit of rage after being denied his promised glory, burned Pan to the ground. The boy-emperor was killed in the conflagration, bringing the Xana Dynasty to a final, ignominious end." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 30, link: "/books/the-grace-of-kings#chapter-30" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
            ]
        },
    ]
};

export const metadata: Metadata = generateCharacterMetadata(characterData);

export default function EmperorErishiPage() {
    return <EmperorErishiClient characterData={characterData} />;
}