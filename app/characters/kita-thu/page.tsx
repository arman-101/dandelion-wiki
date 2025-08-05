'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR KITA THU ---
const characterData: Character = {
    name: "Kita Thu",
    image: "/characters/kita-thu.png", // Placeholder image
    introduction: "A Lyucu warrior and leader who becomes involved in the occupation of Dara, representing the military aspects of Lyucu rule.",
    infoBox: {
      "Also known as": "Kita Thu",
      "Affiliation": "Lyucu",
      "Role": "Warrior and Leader",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Oga Kidosu", link: "/characters/oga-kidosu" },
        { text: "Puma Yemu", link: "/characters/puma-yemu" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Kita Thu exemplifies the Lyucu warrior tradition, combining tactical skill with the fierce determination that characterized the northern invaders. His personality reflects the disciplined and uncompromising nature of Lyucu military culture." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Kita Thu serves as a key warrior and leader during the Lyucu occupation of Dara, contributing to the military control and governance of the conquered territories." }
        ]
      }
    ]
};

export default function KitaThuPage() {
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