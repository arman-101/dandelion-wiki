'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function CudyuRoatanPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Cudyü Roatan",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu commander and brother to Vadyu, involved in the conquest of Dara and the establishment of Lyucu rule.",
    infoBox: {
      "Also known as": "Cudyü Roatan",
      "Affiliation": "Lyucu",
      "Role": "Commander",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Vadyu Roatan", link: "/characters/vadyu-roatan" },
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Oga Kidosu", link: "/characters/oga-kidosu" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Cudyü Roatan exemplifies the Lyucu military tradition, combining tactical brilliance with the fierce determination that characterized the northern invaders. His relationship with his brother Vadyu adds a personal dimension to his role in the conquest." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "Cudyü Roatan serves as a key commander during the Lyucu invasion of Dara, working alongside his brother Vadyu to achieve military objectives that contribute to the successful conquest of the Dandelion Dynasty." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Following the conquest, Cudyü Roatan continues to serve the Lyucu cause during the occupation, adapting his military skills to the challenges of maintaining control over the conquered territories." }
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