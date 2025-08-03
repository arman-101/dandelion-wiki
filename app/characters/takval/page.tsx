'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TakvalPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Takval",
    image: "/characters/takval.png",
    introduction: "A Lyucu leader who becomes a key figure in the occupation and governance of Dara, representing the complex challenges of ruling a conquered people.",
    infoBox: {
        "Origin": "Ukyu",
        "Culture": "Lyucu",
        "Role": "Leader, Governor",
        "First Appearance": { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        "Key Relationships": [
            { text: "Emperor Monad", link: "/characters/emperor-monad" },
            { text: "Princess Aya", link: "/characters/princess-aya" },
            { text: "Tanvanaki", link: "/characters/tanvanaki" }
        ]
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Takval possesses the characteristic features of a Lyucu leader, with a commanding presence that reflects his position of authority. His appearance bears the marks of both his military background and his role as a governor, suggesting someone who has adapted to the demands of both warfare and administration. He carries himself with the confidence of someone who has earned respect through both leadership and achievement." },
        { type: 'text', content: "His personality is marked by a pragmatic approach to governance and a willingness to adapt traditional Lyucu methods to the challenges of ruling a foreign people. Takval is intelligent and observant, capable of understanding the complexities of the situation he faces. He demonstrates both the traditional values of his people and a capacity for innovative thinking when circumstances require it." }
    ],
    history: [
        {
            era: "Early Leadership in Ukyu",
            summary: [
                { type: 'text', content: "Takval emerged as a leader among the Lyucu people through a combination of military skill, strategic thinking, and natural leadership abilities. His early experiences in Ukyu shaped his understanding of governance and the importance of maintaining order while respecting the traditions and values of his people. He developed a reputation for fairness and effectiveness in resolving conflicts and managing resources." },
                { type: 'text', content: "As he rose to prominence among the Lyucu, Takval demonstrated an ability to balance traditional values with practical necessities. He was known for his capacity to make difficult decisions and to implement policies that served the broader interests of his people. This experience would prove invaluable when he was called upon to govern conquered territories in Dara." }
            ]
        },
        {
            era: "Role in the Occupation",
            summary: [
                { type: 'text', content: "When the Lyucu established their rule over parts of Dara, Takval was chosen to play a key role in the governance of the occupied territories. His experience in leadership and his understanding of both Lyucu and Dara cultures made him an ideal candidate for this challenging position. He was responsible for implementing Lyucu policies while maintaining order and stability." },
                { type: 'text', content: "During the occupation, Takval faced numerous challenges, including resistance from the local population, conflicts between different factions within the Lyucu leadership, and the practical difficulties of governing a foreign people. He was forced to develop new strategies and approaches to address these complex issues." }
            ]
        },
        {
            era: "Governance and Adaptation",
            summary: [
                { type: 'text', content: "As governor of occupied Dara, Takval demonstrated both his administrative skills and his capacity for adaptation. He worked to establish systems of governance that could function effectively in the new environment while maintaining Lyucu control and interests. This required him to balance the demands of his superiors with the practical realities of ruling a conquered people." },
                { type: 'text', content: "Takval's governance was marked by both successes and challenges. He was able to maintain order and implement many Lyucu policies, but he also faced resistance and criticism from various quarters. His experiences during this period led him to develop a more nuanced understanding of the relationship between conquerors and conquered." }
            ]
        }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <CharacterPageTemplate characterData={characterData} />
    </>
  );
} 