'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TheFishHerderPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  // --- DATA FOR THE FISH-HERDER ---
  const characterData: Character = {
    name: "The Fish-Herder",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A mysterious figure who plays a crucial role in the final events of the series, representing the unexpected sources of wisdom and power in the world of Dara.",
    infoBox: {
      "Also known as": "The Fish-Herder",
      "Affiliation": "Unknown",
      "Role": "Mysterious Figure",
      "First appearance": "Speaking Bones",
      "Related characters": [
        { text: "The Sword-Saint", link: "/characters/the-sword-saint" },
        { text: "Ouro", link: "/characters/ouro" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "The Fish-Herder embodies the mysterious and enigmatic nature of the final events of the series, combining apparent simplicity with hidden depths of wisdom and power that prove crucial to the resolution of the conflict." }
    ],
    history: [
      {
        era: "Speaking Bones",
        summary: [
          { type: "text" as const, content: "The Fish-Herder emerges as a mysterious figure whose actions and decisions play a crucial role in determining the final outcome of the series, representing the unexpected sources of wisdom and power that can change the course of history." }
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