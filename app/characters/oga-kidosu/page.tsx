'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function OgaKidosuPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Oga Kidosu",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu warrior and leader who becomes involved in the invasion of Dara during the events of The Wall of Storms.",
    infoBox: {
      "Also known as": "Oga Kidosu",
      "Affiliation": "Lyucu",
      "Role": "Warrior and Leader",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Pékyu Tenryo", link: "/characters/pekyu-tenryo" },
        { text: "Vadyu Roatan", link: "/characters/vadyu-roatan" },
        { text: "Cudyü Roatan", link: "/characters/cudyu-roatan" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Oga Kidosu is a fierce Lyucu warrior who embodies the martial traditions of his people. His appearance and personality reflect the harsh environment of Ukyu and the warrior culture that defines the Lyucu way of life." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "Oga Kidosu emerges as a significant figure during the Lyucu invasion of Dara, serving under the leadership of Pékyu Tenryo. His role in the conquest demonstrates the military prowess and strategic thinking that made the Lyucu such formidable opponents." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "During the occupation of Dara, Oga Kidosu continues to serve the Lyucu cause, adapting to the challenges of governing a conquered land while maintaining the traditions and values of his people." }
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