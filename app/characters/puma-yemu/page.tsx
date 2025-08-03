'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function PumaYemuPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Puma Yemu",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu warrior and leader who becomes involved in the occupation of Dara, representing the military aspects of Lyucu rule.",
    infoBox: {
      "Also known as": "Puma Yemu",
      "Affiliation": "Lyucu",
      "Role": "Warrior and Leader",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Oga Kidosu", link: "/characters/oga-kidosu" },
        { text: "Ra Olu", link: "/characters/ra-olu" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Puma Yemu exemplifies the Lyucu warrior tradition, combining physical strength with tactical thinking. His personality reflects the disciplined and determined nature of the Lyucu military elite." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "Puma Yemu serves as a key warrior and leader during the Lyucu invasion of Dara, contributing to the military success that enables the conquest of the Dandelion Dynasty." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "During the occupation period, Puma Yemu continues to serve the Lyucu cause, adapting his military skills to the challenges of maintaining control over the conquered territories of Dara." }
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