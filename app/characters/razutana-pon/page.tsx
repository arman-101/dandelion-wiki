'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function RazutanaPonPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Razutana Pon",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu warrior and leader who becomes involved in the occupation of Dara, representing the military aspects of Lyucu governance.",
    infoBox: {
      "Also known as": "Razutana Pon",
      "Affiliation": "Lyucu",
      "Role": "Warrior/Leader",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Thoryo", link: "/characters/thoryo" },
        { text: "Sataari", link: "/characters/sataari" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Razutana Pon exemplifies the Lyucu warrior tradition, combining tactical skill with the fierce determination that characterized the northern invaders. His personality reflects the disciplined and uncompromising nature of Lyucu military culture." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Razutana Pon serves as a key warrior and leader during the Lyucu occupation of Dara, contributing to the military control and governance of the conquered territories." }
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