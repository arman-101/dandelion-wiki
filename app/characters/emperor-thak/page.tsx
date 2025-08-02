import React from 'react';
import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Emperor Thak",
    image: "/characters/emperor-thak.png",
    introduction: "A ruler who emerges during the final conflicts of the Dandelion Dynasty, representing the culmination of the series' complex political and cultural dynamics.",
    infoBox: {
        "Origin": "Dara",
        "Culture": "Dara",
        "Role": "Emperor",
        "First Appearance": { text: "Speaking Bones", link: "/books/speaking-bones" },
        "Key Relationships": [
            { text: "Princess Théra", link: "/characters/princess-thera" },
            { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" },
            { text: "Princess Aya", link: "/characters/princess-aya" }
        ]
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Emperor Thak carries the weight of his position and the burden of the complex political situation he inherits. His appearance reflects both his royal heritage and the challenges he faces as a ruler during a tumultuous period. He has the bearing of someone who has been thrust into leadership at a critical moment, with features that suggest both determination and the stress of difficult decisions." },
        { type: 'text', content: "His personality is characterized by a blend of traditional royal values and a pragmatic understanding of the complex political landscape he must navigate. Thak is intelligent and thoughtful, capable of understanding the broader implications of his decisions, but he is also aware of the limitations of his position and the challenges he faces in maintaining order and stability." }
    ],
    history: [
        {
            era: "Rise to Power",
            summary: [
                { type: 'text', content: "Emperor Thak's rise to power occurred during one of the most complex and challenging periods in the history of the Dandelion Dynasty. He emerged as a leader at a time when the empire was facing multiple threats and internal divisions, requiring someone who could navigate the intricate political landscape and maintain the stability of the realm." },
                { type: 'text', content: "His ascent to the throne was marked by both opportunity and challenge. He was able to establish himself as a legitimate ruler, but he also inherited a complex political situation that required careful management and strategic thinking. His early reign was focused on consolidating his position and addressing the immediate threats facing the empire." }
            ]
        },
        {
            era: "Rule During Crisis",
            summary: [
                { type: 'text', content: "As emperor, Thak faced numerous challenges, including ongoing conflicts, political rivalries, and the need to balance various competing interests within the empire. He was forced to make difficult decisions about how to maintain order and stability while addressing the legitimate concerns and grievances of different factions." },
                { type: 'text', content: "During this period, Thak demonstrated both his political skills and his commitment to the welfare of his people. He worked to establish systems of governance that could function effectively in the challenging circumstances he faced, while also attempting to address the underlying causes of the conflicts and divisions within the empire." }
            ]
        },
        {
            era: "Legacy and Impact",
            summary: [
                { type: 'text', content: "Emperor Thak's reign represents a crucial period in the history of the Dandelion Dynasty, marking the culmination of many of the themes and conflicts that had developed throughout the series. His rule was characterized by both successes and failures, reflecting the complex nature of governance during times of crisis and change." },
                { type: 'text', content: "Thak's legacy is complex and multifaceted, reflecting the challenges and opportunities of his time. He was able to maintain the stability of the empire during a difficult period, but he also faced limitations and constraints that prevented him from fully addressing all the issues he inherited. His reign serves as a reminder of the complexities of leadership and governance." }
            ]
        }
    ]
};

export default function EmperorThakPage() {
    return <CharacterPageTemplate characterData={characterData} />;
} 