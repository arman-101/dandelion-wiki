'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function PonNayePage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Pon Naye",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu leader and advisor who becomes involved in the governance of conquered Dara, representing the administrative aspects of Lyucu rule.",
    infoBox: {
      "Also known as": "Pon Naye",
      "Affiliation": "Lyucu",
      "Role": "Leader and Advisor",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Tanvanaki", link: "/characters/tanvanaki" },
        { text: "Takval Aragoz", link: "/characters/takval-aragoz" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Pon Naye represents the more diplomatic and administrative side of Lyucu leadership, combining warrior traditions with the practical skills needed to govern a conquered territory. His approach reflects the complexity of Lyucu society beyond pure military might." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "Pon Naye serves as an advisor during the Lyucu invasion, providing strategic counsel that helps shape the approach to conquering and eventually governing the lands of Dara." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Following the conquest, Pon Naye becomes deeply involved in the governance of occupied Dara, working to establish Lyucu rule while navigating the complex cultural and political landscape of the conquered territories." }
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