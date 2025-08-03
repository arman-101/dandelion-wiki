'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TantoAragozPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  // --- DATA FOR TANTO ARAGOZ ---
  const characterData: Character = {
    name: "Tanto Aragoz",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu leader and member of the Aragoz family involved in the occupation of Dara, representing the complex dynamics of Lyucu governance.",
    infoBox: {
      "Also known as": "Tanto Aragoz",
      "Affiliation": "Lyucu",
      "Role": "Leader",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Volyu Aragoz", link: "/characters/volyu-aragoz" },
        { text: "Souliyan Aragoz", link: "/characters/souliyan-aragoz" },
        { text: "Rokiri Aragoz", link: "/characters/rokiri-aragoz" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Tanto Aragoz represents the more administrative and governance-oriented side of Lyucu leadership, combining military authority with the practical skills needed to manage conquered territories." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Tanto Aragoz becomes deeply involved in the governance of occupied Dara, working to establish and maintain Lyucu control while navigating the complex political and cultural landscape of the conquered territories." }
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