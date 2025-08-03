'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function EmpressUnaPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Empress Üna",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "Princess Théra's new title as she takes on leadership during the resistance against Lyucu occupation, representing the hope and determination of the Dara people.",
    infoBox: {
      "Also known as": "Princess Théra",
      "Affiliation": "Dara Resistance",
      "Role": "Empress and Resistance Leader",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Princess Théra", link: "/characters/princess-thera" },
        { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" },
        { text: "Princess Aya", link: "/characters/princess-aya" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "As Empress Üna, Princess Théra embodies the resilience and determination of the Dara people, combining her natural leadership abilities with the authority of her new title. Her personality reflects the transformation from princess to empress and resistance leader." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Princess Théra takes on the title of Empress Üna as she leads the resistance against Lyucu occupation, becoming a symbol of hope and determination for the people of Dara. Her leadership style adapts to the challenges of underground resistance." }
        ]
      },
      {
        era: "Speaking Bones",
        summary: [
          { type: "text" as const, content: "As Empress Üna, she continues to lead the resistance movement, working to unite the various factions fighting against Lyucu rule and preparing for the final confrontation that will determine the future of Dara." }
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