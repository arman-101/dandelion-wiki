import React from 'react';
import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Vadyu Roatan",
    image: "/characters/vadyu-roatan.png",
    introduction: "A formidable Lyucu warrior and leader who plays a crucial role in the invasion of Dara, embodying the fierce martial traditions of the northern people.",
    infoBox: {
        "Origin": "Ukyu",
        "Culture": "Lyucu",
        "Role": "Warrior, Commander",
        "First Appearance": { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        "Key Relationships": [
            { text: "Cudyü Roatan", link: "/characters/cudyu-roatan" },
            { text: "Princess Fara", link: "/characters/princess-fara" },
            { text: "Princess Théra", link: "/characters/princess-thera" }
        ]
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Vadyu Roatan is a physically imposing figure, his appearance reflecting the harsh environment of Ukyu and the demanding lifestyle of a Lyucu warrior. His features are weathered and strong, bearing the marks of countless battles and the unforgiving northern climate. He carries himself with the confidence and authority of a natural leader, someone who has earned respect through both skill and experience." },
        { type: 'text', content: "His personality is characterized by a fierce loyalty to his people and their traditions, combined with a pragmatic understanding of the realities of warfare. Vadyu is not merely a brute warrior; he possesses strategic thinking and the ability to adapt to changing circumstances. However, his commitment to Lyucu values and his role in the invasion of Dara creates complex moral and ethical challenges." }
    ],
    history: [
        {
            era: "Early Life and Training",
            summary: [
                { type: 'text', content: "Vadyu Roatan was born and raised in the harsh environment of Ukyu, where survival itself was a daily challenge. From an early age, he was trained in the martial traditions of the Lyucu people, learning not only the skills of combat but also the values and beliefs that defined his culture. His natural abilities and dedication to his training quickly set him apart from his peers." },
                { type: 'text', content: "As he matured, Vadyu became known for his exceptional skill in battle and his ability to lead others. His reputation grew among the Lyucu people, and he was recognized as one of their most capable warriors and commanders. This recognition brought with it both honor and responsibility, as he was expected to uphold the traditions and values of his people." }
            ]
        },
        {
            era: "The Invasion of Dara",
            summary: [
                { type: 'text', content: "When the Lyucu decided to invade Dara, Vadyu Roatan was chosen to play a leading role in the campaign. His military expertise and leadership skills made him an invaluable asset in the planning and execution of the invasion. He was responsible for coordinating the efforts of multiple Lyucu forces and ensuring the success of their military objectives." },
                { type: 'text', content: "During the invasion, Vadyu demonstrated both his tactical brilliance and his commitment to Lyucu values. He was instrumental in several key battles and played a crucial role in establishing Lyucu control over conquered territories. However, the invasion also forced him to confront the complexities of occupation and the challenges of governing a foreign people." }
            ]
        },
        {
            era: "Occupation and Governance",
            summary: [
                { type: 'text', content: "As the Lyucu established their rule over parts of Dara, Vadyu found himself involved in the complex task of governance. This role required him to balance the traditional values of his people with the practical necessities of ruling a conquered territory. He was forced to make difficult decisions about how to maintain order while respecting the customs and beliefs of the Dara people." },
                { type: 'text', content: "Vadyu's experiences during the occupation led him to develop a more nuanced understanding of the relationship between conquerors and conquered. While he remained committed to Lyucu interests, he also began to recognize the value of cooperation and mutual understanding. This evolution in his thinking was reflected in his approach to governance and his interactions with various Dara leaders and officials." }
            ]
        }
    ]
};

export default function VadyuRoatanPage() {
    return <CharacterPageTemplate characterData={characterData} />;
} 