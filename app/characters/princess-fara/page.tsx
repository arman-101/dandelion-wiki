import React from 'react';
import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Princess Fara",
    image: "/characters/princess-fara.png",
    introduction: "A Lyucu princess who becomes a key figure in the conflict between Dara and Ukyu, representing the complex dynamics of cultural exchange and political intrigue.",
    infoBox: {
        "Origin": "Ukyu",
        "Culture": "Lyucu",
        "Role": "Princess, Diplomat",
        "First Appearance": { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        "Key Relationships": [
            { text: "Vadyu Roatan", link: "/characters/vadyu-roatan" },
            { text: "Cudyü Roatan", link: "/characters/cudyu-roatan" },
            { text: "Princess Théra", link: "/characters/princess-thera" }
        ]
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Princess Fara embodies the fierce and proud spirit of the Lyucu people. Her appearance reflects the harsh environment of Ukyu, with features that speak of resilience and determination. She carries herself with the regal bearing expected of Lyucu royalty, yet there is an underlying complexity to her character that suggests a deeper understanding of the world beyond her homeland." },
        { type: 'text', content: "Her personality is marked by a blend of traditional Lyucu values and a growing awareness of the broader political landscape. Fara is intelligent and observant, capable of seeing beyond the immediate conflicts to understand the larger implications of the Lyucu invasion of Dara. She represents a bridge between cultures, though this role is fraught with challenges and contradictions." }
    ],
    history: [
        {
            era: "Early Life in Ukyu",
            summary: [
                { type: 'text', content: "Princess Fara was born into the royal family of Ukyu, growing up in the harsh and unforgiving environment of the northern continent. Her early life was shaped by the traditional values and customs of the Lyucu people, who valued strength, honor, and loyalty above all else. As a member of the royal family, she was educated in the ways of leadership and diplomacy, preparing her for her future role in Lyucu society." },
                { type: 'text', content: "From an early age, Fara showed an aptitude for understanding complex political situations and the ability to navigate the intricate social hierarchies of Lyucu culture. Her intelligence and diplomatic skills made her a valuable asset to her family and her people, though they also set her apart from many of her contemporaries." }
            ]
        },
        {
            era: "The Invasion of Dara",
            summary: [
                { type: 'text', content: "When the Lyucu launched their invasion of Dara, Princess Fara found herself thrust into a position of great responsibility and danger. As a member of the royal family, she was expected to support the conquest and help establish Lyucu rule over the conquered territories. However, her experiences in Dara began to challenge her understanding of the world and her people's place in it." },
                { type: 'text', content: "Fara's role in the invasion was complex and multifaceted. She served as both a symbol of Lyucu power and a potential bridge for communication between the conquerors and the conquered. Her presence in Dara forced her to confront the realities of war and occupation, leading to a deeper questioning of the values and beliefs she had been raised with." }
            ]
        },
        {
            era: "Cultural Exchange and Conflict",
            summary: [
                { type: 'text', content: "As the occupation of Dara continued, Princess Fara became increasingly involved in the complex dynamics of cultural exchange and political intrigue. She found herself caught between her loyalty to her people and her growing understanding of the Dara perspective. This internal conflict was reflected in her interactions with various characters from both cultures." },
                { type: 'text', content: "Fara's experiences in Dara led her to develop a more nuanced understanding of the relationship between conquerors and conquered. She began to see the potential for cooperation and mutual understanding, even as she remained committed to her Lyucu heritage. This evolution in her thinking made her a unique and important figure in the ongoing conflict." }
            ]
        }
    ]
};

export default function PrincessFaraPage() {
    return <CharacterPageTemplate characterData={characterData} />;
} 