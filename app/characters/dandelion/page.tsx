'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function DandelionPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Dandelion",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A mysterious figure who becomes central to the resistance movement against Lyucu occupation, representing the hope and resilience of the Dara people.",
    infoBox: {
      "Also known as": "Fara",
      "Affiliation": "Dara Resistance",
      "Role": "Resistance Leader",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Empress Üna", link: "/characters/empress-una" },
        { text: "Kinri", link: "/characters/kinri" },
        { text: "Princess Fara", link: "/characters/princess-fara" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Dandelion embodies the mysterious and resilient nature of the resistance movement, combining strategic brilliance with the symbolic power of the dandelion as a representation of hope and strength found in common places." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Dandelion emerges as a central figure in the resistance against Lyucu occupation, using strategic thinking and symbolic leadership to unite the various factions fighting for Dara's freedom." }
        ]
      },
      {
        era: "Speaking Bones",
        summary: [
          { type: "text" as const, content: "As the resistance movement reaches its climax, Dandelion's role becomes increasingly crucial in determining the final outcome of the conflict between Dara and the Lyucu occupiers." }
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