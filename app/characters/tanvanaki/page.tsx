'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TanvanakiPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Tanvanaki",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu princess and leader who becomes a central figure in the occupation of Dara, representing the complex dynamics of power and culture during the Lyucu rule.",
    infoBox: {
      "Also known as": "Princess Vadyu",
      "Affiliation": "Lyucu",
      "Role": "Princess and Leader",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
        { text: "Princess Fara", link: "/characters/princess-fara" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Tanvanaki embodies the royal authority of the Lyucu, combining the fierce warrior spirit of her people with the political acumen required of a princess. Her personality reflects the complex position of Lyucu royalty in a conquered land." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "Tanvanaki emerges as a significant figure during the Lyucu invasion, representing the royal authority that legitimizes the conquest and occupation of Dara. Her role demonstrates the hierarchical structure of Lyucu society." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "During the occupation, Tanvanaki becomes deeply involved in the governance of Dara, navigating the complex political landscape while maintaining Lyucu traditions and authority. Her leadership style reflects the challenges of ruling a conquered people." }
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