'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TheSwordSaintPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  // --- DATA FOR THE SWORD-SAINT ---
  const characterData: Character = {
    name: "The Sword-Saint",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A legendary warrior whose actions shape the final outcome of the conflict, representing the pinnacle of martial skill and philosophical wisdom in the world of Dara.",
    infoBox: {
      "Also known as": "The Sword-Saint",
      "Affiliation": "Unknown",
      "Role": "Legendary Warrior",
      "First appearance": "Speaking Bones",
      "Related characters": [
        { text: "The Fish-Herder", link: "/characters/the-fish-herder" },
        { text: "Ouro", link: "/characters/ouro" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "The Sword-Saint embodies the ideal of the perfect warrior, combining unmatched martial skill with deep philosophical understanding. His personality reflects the balance between physical prowess and spiritual wisdom." }
    ],
    history: [
      {
        era: "Speaking Bones",
        summary: [
          { type: "text" as const, content: "The Sword-Saint emerges as a legendary figure whose martial skill and philosophical wisdom prove crucial to the resolution of the final conflict, representing the highest ideals of warrior culture in the world of Dara." }
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