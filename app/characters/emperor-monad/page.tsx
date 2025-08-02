import React from 'react';
import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Emperor Monad",
    image: "/characters/emperor-monad.png",
    introduction: "The son of Emperor Ragin who faces the immense challenges of ruling during the Lyucu occupation, representing the struggle to maintain Dara's identity under foreign rule.",
    infoBox: {
        "Origin": "Dara",
        "Culture": "Dara",
        "Role": "Emperor of Dara",
        "First Appearance": { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        "Key Relationships": [
            { text: "Emperor Ragin", link: "/characters/kuni-garu" },
            { text: "Empress Jia", link: "/characters/jia-matiza" },
            { text: "Princess Aya", link: "/characters/princess-aya" },
            { text: "Takval", link: "/characters/takval" }
        ]
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Emperor Monad carries the weight of his position and the burden of his people's suffering in his appearance. His features reflect the stress and responsibility of ruling during one of Dara's darkest periods, yet there is also a quiet dignity and determination that speaks to his royal heritage. He has inherited some of his father's charisma and his mother's intelligence, though these qualities are tempered by the harsh realities of occupation." },
        { type: 'text', content: "His personality is marked by a complex blend of idealism and pragmatism. Monad is deeply committed to the welfare of his people and the preservation of Dara's culture and traditions, yet he must navigate the delicate balance between resistance and survival. He is intelligent and thoughtful, capable of understanding the broader political implications of his decisions, but he is also young and inexperienced, learning to rule under the most difficult circumstances imaginable." }
    ],
    history: [
        {
            era: "Early Life and Education",
            summary: [
                { type: 'text', content: "Emperor Monad was born into the Dandelion Dynasty during a time of relative peace and prosperity. As the son of Emperor Ragin and Empress Jia, he was raised with the expectation that he would one day inherit the throne and continue his father's legacy of enlightened rule. His education was comprehensive, covering not only the traditional subjects expected of a royal heir but also the innovative ideas and philosophies that had characterized his father's reign." },
                { type: 'text', content: "From an early age, Monad showed promise as a leader, demonstrating both the intellectual curiosity of his mother and the charismatic qualities of his father. He was particularly interested in the Grand Examination system and the meritocratic principles that had been established during his father's rule. However, his education was cut short by the Lyucu invasion, which forced him to grow up quickly and face challenges that no previous emperor had encountered." }
            ]
        },
        {
            era: "The Lyucu Invasion",
            summary: [
                { type: 'text', content: "When the Lyucu invaded Dara, Emperor Monad found himself thrust into a position of leadership at a time when his people were facing their greatest crisis. The invasion forced him to make difficult decisions about how to protect his people while maintaining the dignity and independence of the Dara empire. He was forced to learn the art of diplomacy and negotiation under the most challenging circumstances." },
                { type: 'text', content: "During the invasion, Monad demonstrated both courage and wisdom beyond his years. He worked tirelessly to protect his people and preserve what he could of Dara's culture and institutions. However, he was also forced to make compromises and concessions that went against his principles, learning the harsh reality that sometimes survival requires difficult choices." }
            ]
        },
        {
            era: "Rule Under Occupation",
            summary: [
                { type: 'text', content: "As emperor under Lyucu occupation, Monad faced the most challenging period of his reign. He was forced to balance the demands of the Lyucu conquerors with the needs and expectations of his own people. This required him to develop new skills and strategies, learning to negotiate and compromise while never losing sight of his ultimate goal of preserving Dara's independence and culture." },
                { type: 'text', content: "Monad's rule during this period was marked by both successes and failures. He was able to protect many of his people and preserve important aspects of Dara's culture and institutions. However, he was also forced to make difficult decisions that sometimes alienated his supporters and compromised his principles. Through it all, he remained committed to his people and his vision of a free and independent Dara." }
            ]
        }
    ]
};

export default function EmperorMonadPage() {
    return <CharacterPageTemplate characterData={characterData} />;
} 