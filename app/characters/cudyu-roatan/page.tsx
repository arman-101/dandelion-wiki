import React from 'react';
import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Cudyü Roatan",
    image: "/characters/cudyu-roatan.png",
    introduction: "A Lyucu commander and brother to Vadyu, involved in the conquest of Dara and the establishment of Lyucu rule.",
    infoBox: {
        "Origin": "Ukyu",
        "Culture": "Lyucu",
        "Role": "Commander, Warrior",
        "First Appearance": { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        "Key Relationships": [
            { text: "Vadyu Roatan", link: "/characters/vadyu-roatan" },
            { text: "Princess Fara", link: "/characters/princess-fara" }
        ]
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Cudyü Roatan shares many physical characteristics with his brother Vadyu, bearing the same weathered features and imposing stature that mark the Lyucu warriors. His appearance reflects the harsh environment of Ukyu and the demanding lifestyle of a military commander. He carries himself with the authority and confidence of someone who has earned his position through both skill and experience." },
        { type: 'text', content: "His personality is characterized by a blend of traditional Lyucu values and practical military thinking. Cudyü is loyal to his people and their cause, but he also demonstrates a capacity for strategic thinking and tactical planning. He works closely with his brother Vadyu, forming a formidable partnership that plays a crucial role in the Lyucu invasion of Dara." }
    ],
    history: [
        {
            era: "Early Life and Military Training",
            summary: [
                { type: 'text', content: "Cudyü Roatan was born into the same harsh environment of Ukyu as his brother Vadyu, and from an early age, he was trained in the martial traditions of the Lyucu people. His military education was comprehensive, covering not only the skills of individual combat but also the broader aspects of military strategy and leadership. He developed a reputation for tactical thinking and the ability to coordinate complex military operations." },
                { type: 'text', content: "As he rose through the ranks of the Lyucu military, Cudyü demonstrated both his combat abilities and his leadership skills. He earned the respect of his fellow warriors and the trust of his superiors, establishing himself as one of the most capable commanders in the Lyucu forces. His partnership with his brother Vadyu became a key asset in military planning and execution." }
            ]
        },
        {
            era: "The Invasion of Dara",
            summary: [
                { type: 'text', content: "When the Lyucu launched their invasion of Dara, Cudyü Roatan was assigned a crucial role in the campaign. His military expertise and strategic thinking made him an invaluable asset in the planning and execution of the invasion. He was responsible for coordinating various aspects of the military campaign and ensuring the success of Lyucu objectives." },
                { type: 'text', content: "During the invasion, Cudyü demonstrated his tactical brilliance and his ability to adapt to changing circumstances. He was involved in several key battles and played a significant role in establishing Lyucu control over conquered territories. His military leadership was instrumental in the success of the Lyucu campaign." }
            ]
        },
        {
            era: "Occupation and Governance",
            summary: [
                { type: 'text', content: "Following the successful invasion, Cudyü became involved in the complex task of governing the conquered territories of Dara. This role required him to balance military concerns with the practical necessities of administration and governance. He was forced to adapt his military thinking to the challenges of occupation and rule." },
                { type: 'text', content: "Cudyü's experiences during the occupation led him to develop a more nuanced understanding of the relationship between conquerors and conquered. While he remained committed to Lyucu interests, he also began to recognize the importance of effective governance and the need to maintain order while respecting local customs and traditions." }
            ]
        }
    ]
};

export default function CudyuRoatanPage() {
    return <CharacterPageTemplate characterData={characterData} />;
} 