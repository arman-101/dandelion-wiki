'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function RaOluPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Ra Olu",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu warrior and commander who participates in the conquest of Dara, demonstrating the military effectiveness of the northern invaders.",
    infoBox: {
      "Also known as": "Ra Olu",
      "Affiliation": "Lyucu",
      "Role": "Warrior and Commander",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Vadyu Roatan", link: "/characters/vadyu-roatan" },
        { text: "Cudyü Roatan", link: "/characters/cudyu-roatan" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Ra Olu exemplifies the Lyucu warrior ideal, combining physical strength with tactical acumen. His personality reflects the disciplined and determined nature of the Lyucu military tradition." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "Ra Olu serves as a key commander during the Lyucu invasion of Dara, leading forces in critical battles that demonstrate the overwhelming military advantage of the northern invaders. His tactical decisions contribute to the success of the conquest." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "During the occupation period, Ra Olu continues to serve the Lyucu cause, adapting his military skills to the challenges of governing and maintaining control over the conquered territories of Dara." }
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