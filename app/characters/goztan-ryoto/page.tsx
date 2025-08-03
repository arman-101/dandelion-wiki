'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function GoztanRyotoPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Goztan Ryoto",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu leader and commander who becomes involved in the occupation of Dara, representing the military leadership of the northern invaders.",
    infoBox: {
      "Also known as": "Goztan Ryoto",
      "Affiliation": "Lyucu",
      "Role": "Leader and Commander",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Kinri", link: "/characters/kinri" },
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Takval Aragoz", link: "/characters/takval-aragoz" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Goztan Ryoto embodies the leadership qualities of the Lyucu military elite, combining strategic thinking with the fierce determination that characterized the northern invaders. His personality reflects the complex position of Lyucu commanders in occupied territory." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Goztan Ryoto emerges as a significant figure during the Lyucu occupation of Dara, serving as a commander who must balance military objectives with the challenges of governing conquered territories." }
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