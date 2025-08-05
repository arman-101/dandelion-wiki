'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR NAROCA HUZA ---
const characterData: Character = {
    name: "Naroca Huza",
    image: "/characters/naroca-huza.png", // Placeholder image
    introduction: "A Lyucu commander and leader who participates in the governance of occupied Dara, representing the administrative aspects of Lyucu rule.",
    infoBox: {
      "Also known as": "Naroca Huza",
      "Affiliation": "Lyucu",
      "Role": "Commander and Leader",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
        { text: "Pon Naye", link: "/characters/pon-naye" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Naroca Huza represents the more administrative and governance-oriented side of Lyucu leadership, combining military authority with the practical skills needed to manage conquered territories." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Naroca Huza becomes deeply involved in the governance of occupied Dara, working to establish and maintain Lyucu control while navigating the complex political and cultural landscape of the conquered territories." }
        ]
      }
    ]
};

export default function NarocaHuzaPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <CharacterPageTemplate characterData={characterData} />
    </>
  );
} 