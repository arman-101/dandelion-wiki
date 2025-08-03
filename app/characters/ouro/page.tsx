'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR OURO ---
const characterData: Character = {
    name: "Ouro",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A mysterious figure who becomes involved in the final events of the series, representing the enigmatic forces that shape the destiny of Dara.",
    infoBox: {
      "Also known as": "Ouro",
      "Affiliation": "Unknown",
      "Role": "Mysterious Figure",
      "First appearance": "Speaking Bones",
      "Related characters": [
        { text: "The Fish-Herder", link: "/characters/the-fish-herder" },
        { text: "The Sword-Saint", link: "/characters/the-sword-saint" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Ouro embodies the mysterious and otherworldly aspects of the final events, combining enigmatic presence with hidden knowledge that proves crucial to understanding the deeper forces at work in the world." }
    ],
    history: [
      {
        era: "Speaking Bones",
        summary: [
          { type: "text" as const, content: "Ouro emerges as a mysterious figure whose knowledge and actions play a significant role in the final resolution of the series, representing the deeper philosophical and mystical elements that underlie the conflict." }
        ]
      }
    ]
};

export default function OuroPage() {
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