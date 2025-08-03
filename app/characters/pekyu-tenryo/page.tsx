'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function PekyuTenryoPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Pékyu Tenryo",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "The powerful Lyucu leader who orchestrates the invasion of Dara, bringing the might of Ukyu against the Dandelion Dynasty.",
    infoBox: {
      "Also known as": "Pékyu Tenryo",
      "Affiliation": "Lyucu",
      "Role": "Supreme Leader",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Vadyu Roatan", link: "/characters/vadyu-roatan" },
        { text: "Cudyü Roatan", link: "/characters/cudyu-roatan" },
        { text: "Tanvanaki", link: "/characters/tanvanaki" },
        { text: "Oga Kidosu", link: "/characters/oga-kidosu" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Pékyu Tenryo is a commanding presence among the Lyucu, embodying the fierce determination and strategic brilliance that made the northern people such formidable conquerors. His leadership style reflects the harsh but effective methods that brought the Lyucu to power." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "As the supreme leader of the Lyucu, Pékyu Tenryo masterminds the invasion of Dara, utilizing the Wall of Storms and the power of garinafins to launch a devastating attack on the Dandelion Dynasty. His strategic vision and military prowess prove overwhelming for the unprepared Dara forces." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Following the successful conquest, Pékyu Tenryo oversees the occupation and governance of Dara, implementing Lyucu rule while facing the challenges of resistance and cultural differences between the two peoples." }
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