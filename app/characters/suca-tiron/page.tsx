'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function SucaTironPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Suca Tiron",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu warrior and leader involved in the governance of occupied Dara.",
    infoBox: {
      "Origin": "Lyucu Lands",
      "Role": "Lyucu Warrior and Leader",
      "Book Appearances": [
        { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Suca Tiron is a Lyucu warrior who becomes involved in the governance and administration of occupied Dara. His military background and leadership skills make him an important figure in the Lyucu occupation." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Suca Tiron plays a role in the governance of occupied Dara, helping to establish and maintain Lyucu control over the conquered territories. His actions contribute to the complex political dynamics of the occupation period." }
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